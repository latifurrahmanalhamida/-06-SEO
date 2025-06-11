import type { Metadata } from 'next';
import Image from 'next/image';

// Metadata SEO telah diperbarui dengan nama Latifur Rahman
export const metadata: Metadata = {
  title: 'Tentang Saya | Latifur Rahman - Pengembang Web',
  description: 'Latifur Rahman adalah seorang pengembang perangkat lunak yang berfokus pada teknologi web modern seperti React, TypeScript, dan Next.js.',
  openGraph: {
    title: 'Tentang Saya | Latifur Rahman',
    description: 'Pengembang perangkat lunak yang berfokus pada teknologi web modern.',
    images: [{ url: '/images/profile.jpg', width: 1200, height: 630, alt: 'Latifur Rahman' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tentang Saya | Latifur Rahman',
    description: 'Pengembang perangkat lunak yang berfokus pada teknologi web modern.',
    images: [{ url: '/images/profile.jpg', alt: 'Latifur Rahman' }],
  }
};

export default function AboutPage() {
  // Daftar teknologi tetap sama, bisa Anda sesuaikan
  const techStack = {
    frontend: [
      { name: "JavaScript", color: "bg-amber-100 text-amber-800 border-amber-200" },
      { name: "TypeScript", color: "bg-blue-100 text-blue-800 border-blue-200" },
      { name: "React", color: "bg-cyan-100 text-cyan-800 border-cyan-200" },
      { name: "Next.js", color: "bg-zinc-100 text-zinc-800 border-zinc-200" },
      { name: "HTML5", color: "bg-orange-100 text-orange-800 border-orange-200" },
      { name: "CSS3", color: "bg-indigo-100 text-indigo-800 border-indigo-200" },
      { name: "Tailwind CSS", color: "bg-sky-100 text-sky-800 border-sky-200" },
    ],
    backend: [
      { name: "PHP", color: "bg-purple-100 text-purple-800 border-purple-200" },
      { name: "Laravel", color: "bg-rose-100 text-rose-800 border-rose-200" },
      { name: "CodeIgniter", color: "bg-red-100 text-red-800 border-red-200" },
      { name: "MySQL", color: "bg-blue-100 text-blue-800 border-blue-200" },
      { name: "Firebase", color: "bg-yellow-100 text-yellow-800 border-yellow-200" },
    ],
    other: [
      { name: "Python", color: "bg-emerald-100 text-emerald-800 border-emerald-200" },
      { name: "Java", color: "bg-orange-100 text-orange-800 border-orange-200" },
      { name: "Kotlin", color: "bg-violet-100 text-violet-800 border-violet-200" },
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        
        {/* --- Hero Section - Layout Baru (Terpusat) --- */}
        <div className="flex flex-col items-center text-center">
          <div className="relative mb-8">
            <Image
              src="/images/profile.jpg" // Pastikan path gambar ini benar
              alt="Latifur Rahman"
              width={160}
              height={160}
              className="rounded-full object-cover border-4 border-white shadow-lg"
              priority
            />
            <span className="absolute bottom-2 right-2 bg-green-400 border-2 border-white w-6 h-6 rounded-full flex items-center justify-center">
              <span className="w-3 h-3 bg-green-600 rounded-full animate-pulse"></span>
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight">
            Latifur Rahman
          </h1>
          <p className="mt-3 text-lg font-medium text-sky-600">
            Full Stack Web Developer
          </p>

          <p className="mt-6 max-w-2xl text-lg text-slate-600 leading-relaxed">
            Halo! Saya seorang pengembang perangkat lunak dengan hasrat untuk membangun solusi digital yang elegan dan fungsional. Saya percaya teknologi dapat menyederhanakan masalah kompleks dan membuat hidup lebih mudah.
          </p>
          <p className="mt-4 max-w-2xl text-md text-slate-500 leading-relaxed">
            Dengan pengalaman di <span className="font-semibold text-slate-700">React</span>, <span className="font-semibold text-slate-700">Next.js</span>, dan <span className="font-semibold text-slate-700">Laravel</span>, saya berfokus untuk menulis kode yang bersih, efisien, dan mudah dikelola.
          </p>

          {/* --- Tombol Sosial Media --- */}
          {/* TODO: Ganti '#' dengan link sosial media Anda yang sebenarnya */}
          {/* <div className="mt-8 flex items-center justify-center gap-4">
            <a href="#" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 px-5 py-3 bg-slate-800 text-white font-semibold rounded-lg shadow-md hover:bg-slate-700 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              GitHub
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 px-5 py-3 bg-white text-slate-700 font-semibold rounded-lg shadow-md border border-slate-200 hover:border-sky-500 hover:text-sky-600 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              LinkedIn
            </a>
          </div> */}
        </div>

        {/* --- Tech Stack Section - Layout Baru (Grid) --- */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-slate-800 text-center">
            Teknologi & Keahlian
          </h2>
          <p className="mt-2 text-center text-slate-500">
            Beberapa teknologi yang saya kuasai dan gunakan dalam proyek-proyek saya.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(techStack).map(([category, techs]) => (
              <div key={category} className="bg-white/60 backdrop-blur-sm border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-slate-700 capitalize flex items-center gap-3">
                  {category === 'frontend' && <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-500"><path d="M2 9.5l10 3 10-3"/><path d="M12 12.5v9"/><rect x="2" y="6" width="20" height="3.5" rx="1"/></svg>}
                  {category === 'backend' && <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-500"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>}
                  {category === 'other' && <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-500"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>}
                  {category}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {techs.map((tech) => (
                    <span
                      key={tech.name}
                      className={`${tech.color} py-1.5 px-3 rounded-lg text-sm border font-medium`}
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}