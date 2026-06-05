import React, { useState } from 'react';

export default function FeedbackWall() {
  const [feedbacks, setFeedbacks] = useState([
    { id: 1, name: 'Alex Johnson', rating: 5, comment: 'Amazing portfolio! The code structure is incredibly clean.' },
    { id: 2, name: 'Sarah Smith', rating: 4, comment: 'The design of your interactive cards looks top-notch.' },
    { id: 3, name: 'Michael Chang', rating: 5, comment: 'Very professional developer. Highly recommended for team projects!' }
  ]);

  const [form, setForm] = useState({ name: '', rating: 5, comment: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.comment) {
      alert('Please fill out your name and comment.');
      return;
    }
    const newFeedback = {
      id: Date.now(),
      name: form.name,
      rating: parseInt(form.rating),
      comment: form.comment
    };
    setFeedbacks([newFeedback, ...feedbacks]);
    setForm({ name: '', rating: 5, comment: '' });
  };

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-6">🌟 Visitor Feedback Wall</h2>
      <form onSubmit={handleSubmit} className="max-w-md space-y-4 mb-10 bg-gray-50 dark:bg-gray-800/40 p-6 rounded-xl border dark:border-gray-800">
        <div>
          <label className="block text-sm font-semibold mb-1">Your Name</label>
          <input type="text" value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="w-full p-2 border dark:border-gray-700 bg-white dark:bg-gray-900 rounded-lg outline-none" />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1">Rating</label>
          <select value={form.rating} onChange={e => setForm({...form, rating: e.target.value})} className="w-full p-2 border dark:border-gray-700 bg-white dark:bg-gray-900 rounded-lg outline-none">
            {[5, 4, 3, 2, 1].map(num => <option key={num} value={num}>{num} Stars</option>)}
          </select>
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1">Comment</label>
          <textarea value={form.comment} onChange={e => setForm({...form, comment: e.target.value})} rows="3" className="w-full p-2 border dark:border-gray-700 bg-white dark:bg-gray-900 rounded-lg outline-none"></textarea>
        </div>
        <button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 rounded-lg text-sm transition-colors">Submit Feedback ✨</button>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {feedbacks.map(item => (
          <div 
            key={item.id} 
            className={`p-5 rounded-xl shadow-sm relative overflow-hidden border transition-all duration-300 ${
              item.rating === 5 
                ? 'border-yellow-400 bg-yellow-50/10 dark:bg-yellow-500/5' 
                : 'border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800'
            }`}
          >
            {item.rating === 5 && (
              <span className="absolute top-2 left-2 bg-yellow-400 text-gray-950 text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider">
                👑 Featured
              </span>
            )}
            <h4 className="font-bold text-lg mb-1 dark:text-white pt-2">{item.name}</h4>
            <div className="text-yellow-400 mb-2 text-sm">
              {'★'.repeat(item.rating)}{'☆'.repeat(5 - item.rating)}
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm">{item.comment}</p>
          </div>
        ))}
      </div>
    </section>
  );
}