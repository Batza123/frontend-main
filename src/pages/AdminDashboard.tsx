
import React, { useEffect, useState } from 'react';

const AdminDashboard: React.FC = () => {
  const [tab, setTab] = useState<'repairs' | 'orders' | 'sell'>('repairs');
  const [repairs, setRepairs] = useState([]);
  const [orders, setOrders] = useState([]);
  const [sellRequests, setSellRequests] = useState([]);

  const BASE_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(`${BASE_URL}/api/repairs/all-repairs`)
      .then(res => res.json())
      .then(data => setRepairs(data))
      .catch(err => console.error('❌ Failed to fetch repairs:', err));

    fetch(`${BASE_URL}/orders`)
      .then(res => res.json())
      .then(data => setOrders(data))
      .catch(err => console.error('❌ Failed to fetch orders:', err));

    fetch(`${BASE_URL}/api/sell-requests`)
      .then(res => res.json())
      .then(data => setSellRequests(data))
      .catch(err => console.error('❌ Failed to fetch sell requests:', err));
  }, []);

  return (
    <div className="p-6 text-white bg-black min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Админ панел</h1>

      <div className="flex space-x-4 mb-6">
        <button onClick={() => setTab('repairs')} className={`px-4 py-2 rounded ${tab === 'repairs' ? 'bg-white text-black' : 'bg-white/10'}`}>Заявки за ремонт</button>
        <button onClick={() => setTab('orders')} className={`px-4 py-2 rounded ${tab === 'orders' ? 'bg-white text-black' : 'bg-white/10'}`}>Поръчки</button>
        <button onClick={() => setTab('sell')} className={`px-4 py-2 rounded ${tab === 'sell' ? 'bg-white text-black' : 'bg-white/10'}`}>Продажби</button>
      </div>

      {tab === 'repairs' && (
        <div className="overflow-x-auto">
          <h2 className="text-xl font-semibold mb-2">Заявки за ремонт</h2>
          <table className="w-full table-auto border border-white/20">
            <thead className="bg-white/10">
              <tr>
                <th className="p-2 text-left">Модел</th>
                <th className="p-2 text-left">IMEI</th>
                <th className="p-2 text-left">Описание</th>
                <th className="p-2 text-left">Дата</th>
              </tr>
            </thead>
            <tbody>
              {repairs.map((r: any, i) => (
                <tr key={i} className="border-t border-white/10 hover:bg-white/5">
                  <td className="p-2">{r.model}</td>
                  <td className="p-2">{r.imei}</td>
                  <td className="p-2">{r.description}</td>
                  <td className="p-2">{new Date(r.submittedAt).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {repairs.length === 0 && <p className="mt-4 text-gray-400">Няма подадени заявки все още.</p>}
        </div>
      )}

      {tab === 'orders' && (
        <div className="overflow-x-auto">
          <h2 className="text-xl font-semibold mb-2">Поръчки</h2>
          <table className="w-full table-auto border border-white/20">
            <thead className="bg-white/10">
              <tr>
                <th className="p-2 text-left">Име</th>
                <th className="p-2 text-left">Имейл</th>
                <th className="p-2 text-left">Общо</th>
                <th className="p-2 text-left">Метод</th>
                <th className="p-2 text-left">Дата</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((o: any, i) => (
                <tr key={i} className="border-t border-white/10 hover:bg-white/5">
                  <td className="p-2">{o.name}</td>
                  <td className="p-2">{o.email}</td>
                  <td className="p-2">{o.total} лв</td>
                  <td className="p-2">{o.paymentMethod}</td>
                  <td className="p-2">{new Date(o.createdAt).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {orders.length === 0 && <p className="mt-4 text-gray-400">Няма направени поръчки.</p>}
        </div>
      )}

      {tab === 'sell' && (
        <div className="overflow-x-auto">
          <h2 className="text-xl font-semibold mb-2">Заявки за продажба</h2>
          <table className="w-full table-auto border border-white/20">
            <thead className="bg-white/10">
              <tr>
                <th className="p-2 text-left">Модел</th>
                <th className="p-2 text-left">IMEI</th>
                <th className="p-2 text-left">Състояние</th>
                <th className="p-2 text-left">Име</th>
                <th className="p-2 text-left">Имейл</th>
                <th className="p-2 text-left">Телефон</th>
                <th className="p-2 text-left">Съобщение</th>
                <th className="p-2 text-left">Дата</th>
              </tr>
            </thead>
            <tbody>
              {sellRequests.map((s: any, i) => (
                <tr key={i} className="border-t border-white/10 hover:bg-white/5">
                  <td className="p-2">{s.model}</td>
                  <td className="p-2">{s.imei}</td>
                  <td className="p-2">{s.condition}</td>
                  <td className="p-2">{s.name}</td>
                  <td className="p-2">{s.email}</td>
                  <td className="p-2">{s.phone}</td>
                  <td className="p-2">{s.message}</td>
                  <td className="p-2">{new Date(s.submittedAt).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {sellRequests.length === 0 && <p className="mt-4 text-gray-400">Няма подадени заявки за продажба.</p>}
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
