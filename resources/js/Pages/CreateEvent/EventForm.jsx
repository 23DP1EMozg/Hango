import { useForm } from "@inertiajs/react";
import { useState } from "react";

const GlobalStyles = () => (
  <style dangerouslySetInnerHTML={{ __html: `
    .force-24h::-webkit-datetime-edit-ampm-field {
      display: none !important;
    }
    /* Ensures date input shows DD/MM/YYYY in supporting browsers */
    input[type="date"]::-webkit-datetime-edit-year-field { order: 3; }
    input[type="date"]::-webkit-datetime-edit-month-field { order: 2; }
    input[type="date"]::-webkit-datetime-edit-day-field { order: 1; }
  `}} />
);

const VIBES = [
  { key: "party", label: "BALLĪTE", icon: ( <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M5.8 11.3 2 22l10.7-3.79" /><path d="M4 3h.01M22 8h.01M15 2h.01M22 20h.01M22 2l-2.24 2.24M10.66 8.23l-2.89 2.89M15.77 13.34l-2.89 2.89M20.9 3.1l-6.58 6.58" /></svg> ) },
  { key: "movie", label: "FILMA", icon: ( <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><rect x="2" y="4" width="20" height="14" rx="2" /><path d="M8 20h8M12 18v2" /><path d="m7 8 5 3-5 3V8z" fill="currentColor" /></svg> ) },
  { key: "workshop", label: "SEMINĀRS", icon: ( <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg> ) },
  { key: "dinner", label: "VAKARIŅAS", icon: ( <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" /><path d="M7 2v20M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3zm0 0v7" /></svg> ) },
  { key: "sport", label: "SPORTS", icon: ( <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><circle cx="12" cy="12" r="10" /><path d="M4.93 4.93l4.24 4.24M14.83 9.17l4.24-4.24M14.83 14.83l4.24 4.24M9.17 14.83l-4.24 4.24M12 2v4M12 18v4M2 12h4M18 12h4" /></svg> ) },
  { key: "other", label: "CITS", icon: ( <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5"><circle cx="5" cy="12" r="1" /><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /></svg> ) },
];

const inputBase =
  "w-full bg-[#1e1050] text-[#e2d9f3] placeholder-[#6b5a9e] rounded-full px-5 py-3.5 text-sm outline-none focus:ring-2 focus:ring-fuchsia-500 transition";

export default function EventForm() {
  const { data, setData, post, processing, errors } = useForm({
    title: '',
    description: '',
    date: '',
    time: '',
    location: '',
    city: '',
    capacity: '',
    age_group: 'all', 
    privacy: 'public', 
    type: 'party', // Synchronized with initial vibe state
  });

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    post('/event');
    console.log(data)
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl bg-[#2d1b69] rounded-3xl p-6 sm:p-8 shadow-2xl">
      <GlobalStyles />

      {/* TITLE */}
      <div className="mb-5">
        <label className="block text-[10px] font-semibold tracking-widest text-purple-300 mb-2">PASĀKUMA NOSAUKUMS</label>
        <input
          type="text"
          value={data.title}
          placeholder="piem., Pusnakts Synthwave Jumta Ballīte"
          className={inputBase}
          onChange={(e) => setData('title', e.target.value)}
        />
        {errors.title && <div className="text-red-400 text-xs mt-1">{errors.title}</div>}
      </div>

      {/* DESCRIPTION */}
      <div className="mb-5">
        <label className="block text-[10px] font-semibold tracking-widest text-purple-300 mb-2">APRAKSTS</label>
        <textarea
          value={data.description}
          placeholder="Pastāsti pasaulei par sava pasākuma unikālo atmosfēru..."
          rows={4}
          className={`${inputBase} rounded-2xl resize-none`}
          onChange={(e) => setData('description', e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
        {/* DATE & TIME */}
        <div>
          <label className="block text-[10px] font-semibold tracking-widest text-purple-300 mb-2">DATUMS & LAIKS</label>
          <div className="flex gap-2">
            <input
              type="date"
              className={`${inputBase} flex-1 [color-scheme:dark]`}
              onChange={(e) => setData('date', e.target.value)}
            />
            <input
              className={`${inputBase} w-28 [color-scheme:dark] force-24h`}
              onChange={(e) => setData('time', e.target.value)}
            />
          </div>
        </div>

        {/* LOCATION */}
        <div>
          <label className="block text-[10px] font-semibold tracking-widest text-purple-300 mb-2">ADRESE</label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-pink-400 text-base">●</span>
            <input
              type="text"
              placeholder="Ievadi norises vietu"
              className={`${inputBase} pl-9`}
              onChange={(e) => setData('location', e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* CITY */}
      <div className="mb-5">
        <label className="block text-[10px] font-semibold tracking-widest text-purple-300 mb-2">PILSĒTA</label>
        <input
          type="text"
          className={inputBase}
          onChange={(e) => setData('city', e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        {/* CAPACITY */}
        <div>
          <label className="block text-[10px] font-semibold tracking-widest text-purple-300 mb-2">IETILPĪBA</label>
          <input
            type="number"
            className={inputBase}
            onChange={(e) => setData('capacity', e.target.value)}
          />
        </div>

        {/* AGE GROUP - FIXED SELECT */}
        <div>
          <label className="block text-[10px] font-semibold tracking-widest text-purple-300 mb-2">VECUMA GRUPA</label>
          <div className="relative">
            <select 
                className={`${inputBase} appearance-none pr-10 cursor-pointer`}
                value={data.age_group}
                onChange={(e) => setData('age_group', e.target.value)}
            >
              <option value="all">Visi vecumi</option>
              <option value="18+">18+</option>
              <option value="21+">21+</option>
              <option value="kids">Bērni</option>
            </select>
            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-purple-300 text-xs">▼</span>
          </div>
        </div>

        {/* PRIVACY - FIXED BUTTONS */}
        <div>
          <label className="block text-[10px] font-semibold tracking-widest text-purple-300 mb-2">PRIVĀTUMS</label>
          <div className="flex bg-[#1e1050] rounded-full p-1 gap-1">
            <button
              type="button"
              onClick={() => setData("privacy", "public")}
              className={`flex-1 py-2 rounded-full text-sm font-semibold transition ${
                data.privacy === "public" ? "bg-gradient-to-r from-pink-500 to-fuchsia-600 text-white" : "text-purple-300"
              }`}
            >
              Publisks
            </button>
            <button
              type="button"
              onClick={() => setData("privacy", "invite")}
              className={`flex-1 py-2 rounded-full text-sm font-semibold transition ${
                data.privacy === "invite" ? "bg-gradient-to-r from-pink-500 to-fuchsia-600 text-white" : "text-purple-300"
              }`}
            >
              Uzaicināt
            </button>
          </div>
        </div>
      </div>

      {/* VIBE SELECTION - FIXED BUTTONS */}
      <div className="mb-8">
        <label className="block text-[10px] font-semibold tracking-widest text-purple-300 mb-3">IZVĒLIES NOSKAŅU</label>
        <div className="flex flex-wrap gap-3">
          {VIBES.map(({ key, label, icon }) => (
            <button
              key={key}
              type="button"
              onClick={() => setData('type', key)}
              className="flex flex-col items-center gap-1.5 group cursor-pointer"
            >
              <div className={`w-16 h-16 rounded-full flex items-center justify-center transition border-2 ${
                data.type === key ? "bg-purple-700 border-pink-400 text-pink-400" : "bg-[#1e1050] border-transparent text-purple-400"
              }`}>
                {icon}
              </div>
              <span className={`text-[10px] font-semibold tracking-widest ${data.type === key ? "text-white" : "text-purple-400"}`}>
                {label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* FOOTER BUTTONS */}
      <div className="flex flex-col-reverse sm:flex-row items-center gap-3">
        <button type="button" className="text-purple-400 hover:text-white text-xs font-semibold tracking-widest transition sm:mr-auto">
          DZĒST MELNRAKSTU
        </button>
        <button 
          type="submit" 
          disabled={processing}
          className="w-full sm:w-auto px-7 py-3 rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-600 text-white text-sm font-semibold hover:opacity-90 transition disabled:opacity-50"
        >
          {processing ? 'Publicē...' : 'Publicēt pasākumu'}
        </button>
      </div>
    </form>
  );
}