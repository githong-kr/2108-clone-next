import react, { useState } from 'react';
import Link from 'next/link';

const App = () => {
  const [userName, setUserName] = useState('');
  return (
    <div>
      <label>
        userName
        <input value={userName} onChange={(e) => setUserName(e.target.value)} />
      </label>
      <p>{userName} 깃허브 검색하기</p>
      <Link href={`/users/${userName}`}>
        <a>검색하기</a>
      </Link>
    </div>
  );
};

export default App;
