import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { db } from '../firebase';
import { collection, getDocs, doc, updateDoc, setDoc } from 'firebase/firestore';
import { Navigate } from 'react-router-dom';
import AIAssistant from '../components/AIAssistant';

export default function AdminDashboard() {
  const { user, role, loading } = useAuth();
  const [users, setUsers] = useState<any[]>([]);
  const [content, setContent] = useState<{ [key: string]: any }>({});
  const [activeTab, setActiveTab] = useState<'users' | 'content' | 'ai'>('content');

  const isSuperAdmin = user?.email === 'dobardzicilijas123@gmail.com';

  useEffect(() => {
    if (role === 'admin') {
      fetchUsers();
      fetchContent();
    }
  }, [role]);

  const fetchUsers = async () => {
    const usersSnap = await getDocs(collection(db, 'users'));
    setUsers(usersSnap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
  };

  const fetchContent = async () => {
    const contentSnap = await getDocs(collection(db, 'content'));
    const contentData: { [key: string]: any } = {};
    contentSnap.docs.forEach(doc => {
      contentData[doc.id] = doc.data();
    });
    setContent(contentData);
  };

  const handleRoleChange = async (userId: string, newRole: string) => {
    try {
      await updateDoc(doc(db, 'users', userId), { role: newRole });
      
      const userDoc = users.find(u => u.id === userId);
      if (userDoc) {
        await setDoc(doc(collection(db, 'notifications')), {
          title: 'Promjena uloge',
          message: `Korisniku ${userDoc.email} je dodijeljena uloga: ${newRole === 'admin' ? 'Administrator' : 'Korisnik'}`,
          createdAt: new Date()
        });
      }

      fetchUsers();
    } catch (error) {
      console.error("Error updating role", error);
    }
  };

  const handleContentSave = async (sectionId: string, data: any) => {
    try {
      await setDoc(doc(db, 'content', sectionId), { ...data, updatedAt: new Date().toISOString() }, { merge: true });
      
      // Create a notification
      const sectionName = sectionId === 'hero' ? 'Hero sekcija' : sectionId === 'about' ? 'O nama sekcija' : 'Glavni blokovi';
      await setDoc(doc(collection(db, 'notifications')), {
        title: 'Sadržaj ažuriran',
        message: `Administrator je ažurirao sadržaj za: ${sectionName}`,
        createdAt: new Date()
      });

      alert('Sadržaj uspješno sačuvan!');
    } catch (error) {
      console.error("Error saving content", error);
    }
  };

  if (loading) return <div className="pt-32 text-center">Učitavanje...</div>;
  if (!user || role !== 'admin') return <Navigate to="/" />;

  return (
    <div className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen">
      <h1 className="text-4xl font-black mb-8">Admin Panel</h1>
      
      <div className="flex space-x-4 mb-8 border-b border-gray-200">
        <button 
          onClick={() => setActiveTab('content')}
          className={`pb-4 px-4 font-bold ${activeTab === 'content' ? 'text-[#f05a28] border-b-2 border-[#f05a28]' : 'text-gray-500'}`}
        >
          Uređivanje Sadržaja
        </button>
        {isSuperAdmin && (
          <button 
            onClick={() => setActiveTab('users')}
            className={`pb-4 px-4 font-bold ${activeTab === 'users' ? 'text-[#f05a28] border-b-2 border-[#f05a28]' : 'text-gray-500'}`}
          >
            Korisnici i Role
          </button>
        )}
        {isSuperAdmin && (
          <button 
            onClick={() => setActiveTab('ai')}
            className={`pb-4 px-4 font-bold ${activeTab === 'ai' ? 'text-[#f05a28] border-b-2 border-[#f05a28]' : 'text-gray-500'}`}
          >
            AI Asistent
          </button>
        )}
      </div>

      {activeTab === 'ai' && isSuperAdmin && (
        <AIAssistant />
      )}

      {activeTab === 'content' && (
        <div className="space-y-8">
          {/* Hero Section Edit */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold mb-4">Hero Sekcija</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Naslov</label>
                <input 
                  type="text" 
                  value={content.hero?.title || 'Gradite brže uz Vrhunski Kvalitet Materijala i Usluga.'} 
                  onChange={(e) => setContent({ ...content, hero: { ...content.hero, title: e.target.value } })}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Podnaslov</label>
                <textarea 
                  value={content.hero?.subtitle || 'Sve što vam je potrebno za vaš građevinski projekat na jednom mjestu. Pouzdano. Kvalitetno. Profesionalno.'} 
                  onChange={(e) => setContent({ ...content, hero: { ...content.hero, subtitle: e.target.value } })}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                  rows={3}
                />
              </div>
              <button 
                onClick={() => handleContentSave('hero', content.hero)}
                className="bg-[#f05a28] text-white px-6 py-2 rounded-lg font-bold"
              >
                Sačuvaj Hero
              </button>
            </div>
          </div>

          {/* About Section Edit */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold mb-4">O Nama Sekcija</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Naslov</label>
                <input 
                  type="text" 
                  value={content.about?.title || 'Lokalna firma od povjerenja'} 
                  onChange={(e) => setContent({ ...content, about: { ...content.about, title: e.target.value } })}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Tekst</label>
                <textarea 
                  value={content.about?.description || 'EFEN IZGRADNJA D.O.O je renomirana kompanija iz Cetinja...'} 
                  onChange={(e) => setContent({ ...content, about: { ...content.about, description: e.target.value } })}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                  rows={5}
                />
              </div>
              <button 
                onClick={() => handleContentSave('about', content.about)}
                className="bg-[#f05a28] text-white px-6 py-2 rounded-lg font-bold"
              >
                Sačuvaj O Nama
              </button>
            </div>
          </div>

          {/* Contact Section Edit */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold mb-4">Kontakt Informacije (Footer)</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Adresa</label>
                <input 
                  type="text" 
                  value={content.contact?.address || 'Bul. Crnogorskih Junaka br. 100, 81250 Cetinje, Crna Gora'} 
                  onChange={(e) => setContent({ ...content, contact: { ...content.contact, address: e.target.value } })}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Telefon</label>
                <input 
                  type="text" 
                  value={content.contact?.phone || '+382 6X XXX XXX'} 
                  onChange={(e) => setContent({ ...content, contact: { ...content.contact, phone: e.target.value } })}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input 
                  type="text" 
                  value={content.contact?.email || 'info@efenizgradnja.me'} 
                  onChange={(e) => setContent({ ...content, contact: { ...content.contact, email: e.target.value } })}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2"
                />
              </div>
              <button 
                onClick={() => handleContentSave('contact', content.contact)}
                className="bg-[#f05a28] text-white px-6 py-2 rounded-lg font-bold"
              >
                Sačuvaj Kontakt
              </button>
            </div>
          </div>

          {/* Main Blocks Section Edit */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold mb-4">Glavni Blokovi (Prodaja i Usluge)</h2>
            <div className="space-y-6">
              <div className="p-4 border border-gray-200 rounded-xl space-y-4">
                <h3 className="font-bold text-lg">Prodaja Materijala</h3>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Naslov</label>
                  <textarea 
                    value={content.mainBlocks?.prodajaTitle || 'Prodaja\nMaterijala'} 
                    onChange={(e) => setContent({ ...content, mainBlocks: { ...content.mainBlocks, prodajaTitle: e.target.value } })}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2"
                    rows={2}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Opis</label>
                  <textarea 
                    value={content.mainBlocks?.prodajaDesc || 'Sve što vam je potrebno za gradnju, renoviranje i opremanje. Od temelja do krova.'} 
                    onChange={(e) => setContent({ ...content, mainBlocks: { ...content.mainBlocks, prodajaDesc: e.target.value } })}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2"
                    rows={3}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">URL Slike</label>
                  <input 
                    type="text" 
                    value={content.mainBlocks?.prodajaImg || 'https://images.unsplash.com/photo-1504307651254-35680f356f12?auto=format&fit=crop&q=80'} 
                    onChange={(e) => setContent({ ...content, mainBlocks: { ...content.mainBlocks, prodajaImg: e.target.value } })}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2"
                  />
                </div>
              </div>

              <div className="p-4 border border-gray-200 rounded-xl space-y-4">
                <h3 className="font-bold text-lg">Izvođački Radovi</h3>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Naslov</label>
                  <textarea 
                    value={content.mainBlocks?.uslugeTitle || 'Izvođački\nRadovi'} 
                    onChange={(e) => setContent({ ...content, mainBlocks: { ...content.mainBlocks, uslugeTitle: e.target.value } })}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2"
                    rows={2}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Opis</label>
                  <textarea 
                    value={content.mainBlocks?.uslugeDesc || 'Profesionalno izvođenje građevinskih i zanatskih radova uz garanciju kvaliteta.'} 
                    onChange={(e) => setContent({ ...content, mainBlocks: { ...content.mainBlocks, uslugeDesc: e.target.value } })}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2"
                    rows={3}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">URL Slike</label>
                  <input 
                    type="text" 
                    value={content.mainBlocks?.uslugeImg || 'https://images.unsplash.com/photo-1541888087425-ce81dcfa49f6?auto=format&fit=crop&q=80'} 
                    onChange={(e) => setContent({ ...content, mainBlocks: { ...content.mainBlocks, uslugeImg: e.target.value } })}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2"
                  />
                </div>
              </div>

              <button 
                onClick={() => handleContentSave('mainBlocks', content.mainBlocks)}
                className="bg-[#f05a28] text-white px-6 py-2 rounded-lg font-bold"
              >
                Sačuvaj Glavne Blokove
              </button>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'users' && isSuperAdmin && (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Uloga</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Akcije</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {users.map((u) => (
                <tr key={u.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{u.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${u.role === 'admin' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                      {u.role}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <select 
                      value={u.role} 
                      onChange={(e) => handleRoleChange(u.id, e.target.value)}
                      className="border border-gray-300 rounded px-2 py-1 text-sm"
                      disabled={u.email === user.email} // Prevent removing own admin rights
                    >
                      <option value="user">Korisnik</option>
                      <option value="admin">Administrator</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
