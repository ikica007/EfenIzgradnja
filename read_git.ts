import { execSync } from 'child_process';
console.log(execSync('git log -p -1 src/pages/HomePage.tsx').toString());
