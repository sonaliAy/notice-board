import { useEffect, useState } from 'react';
import { fetchAnnouncements, createAnnouncement } from '../api/announcementApi';
import { HiSpeakerphone } from 'react-icons/hi';

const NoticeboardPage = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const res = await fetchAnnouncements();
    setAnnouncements(res.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !message) return;
    await createAnnouncement({ title, message });
    setTitle('');
    setMessage('');
    loadData();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-white py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold text-indigo-700 text-center mb-10">
          🗣️ Noticeboard
        </h1>

        {/* Form Card */}
        <div className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl shadow-xl p-8 mb-12 transition hover:shadow-2xl">
          <h2 className="text-2xl font-bold text-gray-700 mb-6">
            Create New Announcement
          </h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              placeholder="Announcement title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <textarea
              rows="4"
              placeholder="Write something important..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <div className="text-right">
              <button
                type="submit"
                className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition"
              >
                📢 Post Announcement
              </button>
            </div>
          </form>
        </div>

        {/* Announcements */}
        <div className="grid md:grid-cols-2 gap-6">
          {announcements.map((a) => (
            <div
              key={a._id}
              className="bg-white border-l-4 border-indigo-600 p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <div className="flex items-start gap-4">
                <div className="text-indigo-600 text-3xl mt-1">
                  <HiSpeakerphone />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{a.title}</h3>
                  <p className="text-gray-600 mt-1">{a.message}</p>
                  <p className="text-sm text-gray-400 mt-3">
                    📅 {new Date(a.createdAt).toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {announcements.length === 0 && (
          <p className="text-center text-gray-500 mt-10">No announcements yet.</p>
        )}
      </div>
    </div>
  );
};

export default NoticeboardPage;
