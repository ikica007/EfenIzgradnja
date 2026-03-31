import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';
import { Send, Bot, User } from 'lucide-react';

export default function AIAssistant() {
  const [messages, setMessages] = useState<{ role: 'user' | 'model', text: string }[]>([
    { role: 'model', text: 'Zdravo! Ja sam vaš AI asistent. Kako vam mogu pomoći oko sajta danas?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setLoading(true);

    try {
      const apiKey = process.env.GEMINI_API_KEY;
      
      if (!apiKey) {
        throw new Error("Gemini API ključ nije pronađen.");
      }

      const ai = new GoogleGenAI({ apiKey });
      
      const contents = messages.slice(1).map(msg => ({
        role: msg.role,
        parts: [{ text: msg.text }]
      }));
      
      contents.push({
        role: 'user',
        parts: [{ text: userMessage }]
      });

      const response = await ai.models.generateContent({
        model: 'gemini-3.1-flash-preview',
        contents: contents,
        config: {
          systemInstruction: 'Ti si stručni AI asistent za sajt EFEN IZGRADNJA D.O.O. Pomažeš glavnom administratoru oko rješavanja problema, pisanja tekstova i savjeta za sajt. Odgovaraj na crnogorskom/srpskom jeziku.',
        }
      });
      
      setMessages(prev => [...prev, { role: 'model', text: response.text || 'Nema odgovora.' }]);
    } catch (error: any) {
      console.error("Greška pri komunikaciji sa AI:", error);
      setMessages(prev => [...prev, { role: 'model', text: `Došlo je do greške: ${error.message}` }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col h-[600px]">
      <div className="p-4 border-b border-gray-100 bg-gray-50 rounded-t-2xl flex items-center">
        <Bot className="w-6 h-6 text-[#f05a28] mr-2" />
        <h2 className="text-lg font-bold">AI Asistent</h2>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[80%] rounded-2xl p-4 ${msg.role === 'user' ? 'bg-[#f05a28] text-white rounded-tr-none' : 'bg-gray-100 text-gray-800 rounded-tl-none'}`}>
              <div className="flex items-center mb-1">
                {msg.role === 'user' ? <User className="w-4 h-4 mr-1 opacity-70" /> : <Bot className="w-4 h-4 mr-1 text-[#f05a28]" />}
                <span className="text-xs font-bold opacity-70">{msg.role === 'user' ? 'Vi' : 'AI Asistent'}</span>
              </div>
              <p className="whitespace-pre-wrap text-sm">{msg.text}</p>
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-gray-100 text-gray-800 rounded-2xl rounded-tl-none p-4 flex space-x-2 items-center">
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 border-t border-gray-100">
        <div className="flex items-center bg-gray-50 rounded-full border border-gray-200 px-4 py-2 focus-within:border-[#f05a28] focus-within:ring-1 focus-within:ring-[#f05a28] transition-all">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Pitajte AI asistenta..."
            className="flex-1 bg-transparent border-none focus:outline-none text-sm px-2 py-2"
            disabled={loading}
          />
          <button 
            onClick={handleSend}
            disabled={loading || !input.trim()}
            className="p-2 rounded-full bg-[#f05a28] text-white hover:bg-[#d94d1f] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
