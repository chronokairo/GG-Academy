import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useState } from 'react';
import './styles.css';


function Navbar() {
  return (
    <nav className="bg-[#121212] text-[#e0e0e0] px-6 py-4 flex justify-between items-center shadow-md">
      <div className="text-2xl font-bold">GGAcademy</div>
      <ul className="flex space-x-6">
        <li>
          <Link to="/lol">LoL</Link>
        </li>
        <li>
          <Link to="/valorant">Valorant</Link>
        </li>
        <li>
          <Link to="/dota">Dota 2</Link>
        </li>
      </ul>
      <button className="bg-[#1de9b6] text-black px-4 py-2 rounded hover:opacity-90">Login</button>
    </nav>
  );
}

function Home() {
  const games = [
    { name: 'League of Legends', path: '/lol', color: 'bg-[#0055ff]' },
    { name: 'Valorant', path: '/valorant', color: 'bg-[#d9363e]' },
    { name: 'Dota 2', path: '/dota', color: 'bg-[#6c2bd9]' }
  ];

  return (
    <div className="p-8 bg-[#121212] min-h-screen text-[#e0e0e0]">
      <h1 className="text-4xl font-bold mb-8">Escolha seu jogo</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {games.map((game, idx) => (
          <Link key={idx} to={game.path} className={`${game.color} p-6 rounded-xl shadow-xl hover:scale-105
      transition-transform`}>
            <h2 className="text-xl font-semibold">{game.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}

function GameLayout({ title, bannerUrl, children }) {
  const menuItems = ['Guias', 'Meta', 'Builds', 'Estatísticas'];
  return (
    <div className="flex flex-col bg-[#121212] text-[#e0e0e0] min-h-screen">
      <div className="w-full h-64 relative">
        <img src={bannerUrl} alt={`${title} banner`} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h2 className="text-4xl font-bold">{title}</h2>
        </div>
      </div>
      <div className="flex flex-1">
        <aside className="w-60 bg-[#1e1e1e] p-6 space-y-4">
          {menuItems.map((item, idx) => (
            <div key={idx} className="hover:text-[#1de9b6] cursor-pointer">
              {item}
            </div>
          ))}
        </aside>
        <main className="flex-1 p-8">
          {children || <p>Conteúdo em breve!</p>}
        </main>
      </div>
    </div>
  );
}

function LoLPage() {
  return
  <GameLayout title="League of Legends" bannerUrl="https://cdn.images.op.gg/images/lol/og-image.png" />;
}

function ValorantPage() {
  return
  <GameLayout title="Valorant"
    bannerUrl="https://cdn2.steamgriddb.com/file/sgdb-cdn/banner/3d3f7ce68d8b7f98d9f6e61be13a59f7.jpg" />;
}

function DotaPage() {
  return
  <GameLayout title="Dota 2" bannerUrl="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota2_social.jpg" />;
}

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lol" element={<LoLPage />} />
        <Route path="/valorant" element={<ValorantPage />} />
        <Route path="/dota" element={<DotaPage />} />
      </Routes>
    </Router>
  );
}