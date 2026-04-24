"use client";

import React, { useState, useRef, useEffect } from 'react';
import { useReactToPrint } from 'react-to-print';
import { 
  Code, Mail, Phone, MapPin, Globe, Award, Briefcase, GraduationCap, 
  User, ChevronRight, Zap, Terminal, Star, CheckCircle, FileText
} from 'lucide-react';
import Image from 'next/image';

export default function MaheswariPortfolio() {
  const printRef = useRef(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handlePrint = useReactToPrint({
    contentRef: printRef,
    documentTitle: 'Penumuru_Maheswari_Matrix_Portfolio',
  });

  const [profileImg] = useState<string | null>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('maheswari_v2_img') || '/image.png';
    }
    return '/image.png';
  });
  const [photoOffsetY] = useState<number>(() => {
    if (typeof window !== 'undefined') {
      return Number(localStorage.getItem('maheswari_v2_offset')) || 25;
    }
    return 25;
  });

  const basicInfo = {
    firstName: 'Penumuru',
    lastName: 'Maheswari',
    title: 'AI & Data Science Specialist',
    email: 'maheswaripenumuru@gmail.com',
    phone: '+91 93907 76117',
    location: 'Andhra Pradesh, India',
    github: 'https://github.com/penumuru123',
    portfolio: 'https://maheswari-portfolio.vercel.app/',
    summary: 'Aspiring AI & Data Science Specialist and 4th-year B.Tech student with a consistent record of excellence (8.72 CGPA). Expert in predictive modeling, cloud engineering, and full-stack development. Passionate about leveraging data-driven insights to solve complex industry challenges.'
  };

  const experience = [
    { 
      id: 1, 
      title: 'Data Engineering Virtual Intern', 
      company: 'AWS Academy (via EduSkills)', 
      date: 'Oct - Dec 2025', 
      bullets: [
        'Successfully completed 10-week program with an Outstanding (O) Grade.',
        'Architected scalable data pipelines using AWS Glue and Amazon S3.',
        'Mastered ETL processes and cloud database management during real-world projects.'
      ]
    },
    { 
      id: 2, 
      title: 'Ethical Hacking Virtual Intern', 
      company: 'EduSkills Academy', 
      date: 'Apr - Jun 2025', 
      bullets: [
        'Gained deep insights into Penetration Testing and Network Security.',
        'Implemented vulnerability assessment tools to identify and mitigate threats.'
      ]
    },
    { 
      id: 3, 
      title: 'AI-ML Virtual Intern', 
      company: 'Google for Developers (India Edu Program)', 
      date: 'Jul - Sep 2024', 
      bullets: [
        'Developed predictive models using TensorFlow and Google Cloud AI.',
        'Focused on automating data preprocessing and feature engineering.'
      ]
    },
    { 
      id: 4, 
      title: 'Cybersecurity Virtual Intern', 
      company: 'Palo Alto Networks', 
      date: 'Apr - Jun 2024', 
      bullets: [
        'Completed a 10-week virtual program and a 120-hour short-term internship.',
        'Configured Next-Generation Firewalls and learned cloud security practices.'
      ]
    }
  ];

  const education = [
    { 
      id: 1, 
      degree: 'Bachelor of Technology (B.Tech)', 
      school: 'MTIET / JNTUA', 
      date: '2021 – 2025',
      grade: '8.72 CGPA (82.2%) [Upto 3-1 Semester]',
      details: 'Specialized in Machine Learning, Data Structures, and Python Programming. Currently pursuing 4th Year.' 
    },
    { 
      id: 2, 
      degree: 'Intermediate (12th Grade)', 
      school: 'Z P Junior College, Andhra Pradesh', 
      date: '2021 – 2023',
      grade: '974 / 1000 (97.4%)',
      details: 'Major Subjects: MPC. Graduated with an A Grade, ranking among the top students.' 
    },
    { 
      id: 3, 
      degree: 'Secondary School Certificate (SSC)', 
      school: 'Z P High School, Karasanapalle', 
      date: 'Passed June 2021',
      grade: '591 / 600 (98.5%)',
      details: 'Achieved a First Division with near-perfect scores in Science and Mathematics.' 
    }
  ];

  const projects = [
    {
      id: 1,
      title: 'Full-Stack Task Management System',
      link: 'https://github.com/penumuru123/full-stack-developement',
      stack: 'React.js, Java, HTML/CSS',
      bullets: [
        'Developed a responsive React/Java app with integrated analytics and security.',
        'Optimized performance for low-latency updates and cross-platform compatibility.'
      ]
    }
  ];

  const skills = [
    { id: 1, category: 'AI & Data Science', items: 'Scikit-Learn, Pandas, NumPy, TensorFlow, AWS Glue' },
    { id: 2, category: 'Programming', items: 'Python, Java, SQL, C' },
    { id: 3, category: 'Web Development', items: 'HTML5, CSS3, JavaScript, React.js' },
    { id: 4, category: 'Tools & Platforms', items: 'Git, VS Code, Jupyter, AWS, Google Cloud' }
  ];

  const certs = [
    { id: 1, name: 'Elite NPTEL: Industry 4.0 & IIoT (Score: 90%)', date: 'Oct 2025' },
    { id: 2, name: 'Business English (edX): Upper-Intermediate', date: 'Apr 2024' },
    { id: 3, name: 'Problem Solving (edX): Advanced Methodologies', date: 'Apr 2024' },
    { id: 4, name: 'AI Model Training: Infosys Springboard', date: 'Dec 2024' },
    { id: 5, name: 'IP Awareness (NIPAM): National Mission', date: 'Mar 2024' },
    { id: 6, name: 'Quantum Computing: IIT NPTEL Qiskit', date: 'Feb 2026' }
  ];

  const highlights = [
    { id: 1, text: 'BIM for Entrepreneurs: Technical webinar by CMTI Bengaluru (Apr 2024).' },
    { id: 2, text: 'Viksit Bharat Quiz: Recognized by Ministry of Youth Affairs.' },
    { id: 3, text: 'MY Bharat Member: Registered and active in national youth portal.' }
  ];

  return (
    <div className="min-h-screen py-10 lg:py-20 relative">
      <div className="bg-aurora" />
      <div className="aurora-beam" />

      <div ref={printRef} className="container mx-auto max-w-[1200px] px-6 relative z-10">
        
        {/* FULL WINDOW SPLASH HERO */}
        <section className="min-h-screen flex flex-col justify-center items-center text-center gap-10 py-20 lg:py-0">
          <div className="flex flex-col items-center gap-6">
            <div className="subtitle-tag animate-pulse">Portfolio 2026</div>
            <h1 className="m-0 text-6xl lg:text-9xl leading-none">
              {basicInfo.firstName} <br />
              <span className="text-white">{basicInfo.lastName}</span>
            </h1>
            <div className="text-2xl lg:text-3xl font-light text-[#00f5d4] tracking-[0.2em] uppercase mt-4">{basicInfo.title}</div>
          </div>

          <div className="relative group">
            <div className="w-[180px] h-[180px] lg:w-[240px] lg:h-[240px] rounded-full overflow-hidden border-4 border-[#00f5d4] shadow-[0_0_60px_rgba(0,245,212,0.3)] bg-black/40 backdrop-blur-xl relative">
              {profileImg && (
                <Image 
                  src={profileImg} 
                  alt="Profile" 
                  fill
                  className="object-cover" 
                  style={{ objectPosition: `center ${photoOffsetY}%` }}
                  unoptimized={profileImg.startsWith('data:')}
                />
              )}
              {!profileImg && (
                <div className="w-full h-full flex items-center justify-center text-[#00f5d4]"><User size={100}/></div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full max-w-5xl mt-4">
            <a href={`mailto:${basicInfo.email}`} className="contact-chip justify-center backdrop-blur-md hover:bg-[#00f5d4]/20 hover:scale-105 transition-all !no-underline !text-white"><Mail size={16} className="text-[#00f5d4]"/> {basicInfo.email}</a>
            <a href={`tel:${basicInfo.phone.replace(/\s/g, '')}`} className="contact-chip justify-center backdrop-blur-md hover:bg-[#00f5d4]/20 hover:scale-105 transition-all !no-underline !text-white"><Phone size={16} className="text-[#00f5d4]"/> {basicInfo.phone}</a>
            <a href={basicInfo.github} target="_blank" rel="noreferrer" className="contact-chip justify-center backdrop-blur-md hover:bg-[#00f5d4]/20 hover:scale-105 transition-all !no-underline !text-white"><Code size={16} className="text-[#00f5d4]"/> GitHub</a>
            <a href={basicInfo.portfolio} target="_blank" rel="noreferrer" className="contact-chip justify-center backdrop-blur-md hover:bg-[#00f5d4]/20 hover:scale-105 transition-all !no-underline !text-white"><Globe size={16} className="text-[#00f5d4]"/> Portfolio</a>
            <div className="contact-chip justify-center backdrop-blur-md cursor-default"><MapPin size={16} className="text-[#00f5d4]"/> {basicInfo.location}</div>
          </div>

          {/* Professional Download Button */}
          <button 
            onClick={() => handlePrint()}
            className="flex items-center gap-3 px-8 py-4 bg-[#00f5d4] text-black font-bold uppercase tracking-widest rounded-full hover:scale-105 active:scale-95 transition-all shadow-[0_0_30px_rgba(0,245,212,0.4)]"
          >
            <FileText size={20}/>
            Download Matrix Resume
          </button>


        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pb-20">
          
          <div className="lg:col-span-4 profile-sidebar flex flex-col gap-8">
            <div className={`bento-card transition-all duration-1000 ${scrolled ? 'bg-[#030303] border-[#00f5d4]/40' : ''}`}>
              <h2><div className="icon-box"><User size={20}/></div> About</h2>
              <p className="text-sm leading-relaxed text-[#a0a0a0] italic">&quot;{basicInfo.summary}&quot;</p>
            </div>
          </div>

          <div className="lg:col-span-8 flex flex-col gap-12">
            <section className={`bento-card transition-all duration-1000 ${scrolled ? 'bg-[#030303]' : ''}`}>
              <h2><div className="icon-box"><Briefcase size={20}/></div> Career Path</h2>
              <div className="flex flex-col gap-10">
                {experience.map((exp) => (
                  <div key={exp.id} className="timeline-card">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="text-xl text-white m-0 font-bold">{exp.title}</h3>
                      <span className="text-[#00f5d4] text-xs font-bold whitespace-nowrap">{exp.date}</span>
                    </div>
                    <div className="text-xs text-[#9b5de5] font-bold mb-3 uppercase tracking-widest">{exp.company}</div>
                    <ul className="flex flex-col gap-2">
                      {exp.bullets.map((b, i) => (
                        <li key={i} className="text-sm text-[#a0a0a0] flex gap-2 items-start">
                          <ChevronRight size={14} className="text-[#00f5d4] shrink-0 mt-1"/>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <section className={`bento-card md:col-span-2 transition-all duration-1000 ${scrolled ? 'bg-[#030303]' : ''}`}>
                <h2><div className="icon-box"><Zap size={20}/></div> Key Deployment</h2>
                {projects.map(proj => (
                  <div key={proj.id} className="flex flex-col gap-4">
                    <div className="flex justify-between items-center">
                      <h3 className="text-2xl italic font-serif">{proj.title}</h3>
                      <a href={proj.link} target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-full text-[#00f5d4] hover:bg-[#00f5d4]/20 transition-all"><Code size={20}/></a>
                    </div>
                    <div className="text-xs text-[#9b5de5] font-bold uppercase tracking-widest">{proj.stack}</div>
                    <ul className="flex flex-col gap-2">
                      {proj.bullets.map((b, i) => (
                        <li key={i} className="text-sm text-[#a0a0a0] flex gap-2 items-start">
                          <ChevronRight size={14} className="text-[#00f5d4] shrink-0 mt-1"/>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </section>

              <section className={`bento-card transition-all duration-1000 ${scrolled ? 'bg-[#030303]' : ''}`}>
                <h2><div className="icon-box"><GraduationCap size={20}/></div> Academic Excellence</h2>
                <div className="flex flex-col gap-8">
                  {education.map(ed => (
                    <div key={ed.id} className="flex flex-col gap-1 border-l-2 border-white/10 pl-4 py-1">
                      <div className="text-white font-bold text-sm">{ed.degree}</div>
                      <div className="text-[10px] text-[#9b5de5] font-bold">{ed.date}</div>
                      <div className="text-xs text-[#a0a0a0]">{ed.school}</div>
                      <div className="text-sm text-[#00f5d4] font-bold mt-1">{ed.grade}</div>
                      <div className="text-[10px] text-white/40 mt-1">{ed.details}</div>
                    </div>
                  ))}
                </div>
              </section>

              <section className={`bento-card transition-all duration-1000 ${scrolled ? 'bg-[#030303]' : ''}`}>
                <h2><div className="icon-box"><Award size={20}/></div> Professional Certifications</h2>
                <div className="flex flex-col gap-4">
                  {certs.map(c => (
                    <div key={c.id} className="flex flex-col group border-b border-white/5 pb-2 last:border-0">
                      <div className="flex items-center gap-2">
                        <Award size={14} className="text-[#9b5de5] shrink-0"/>
                        <span className="text-xs text-white group-hover:text-[#00f5d4] transition-colors">{c.name}</span>
                      </div>
                      <span className="text-[10px] text-white/30 ml-5">{c.date}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>

        {/* FOOTER SECTIONS - ADDED LAST */}
        <div className="footer-sections grid grid-cols-1 md:grid-cols-12 gap-12 pb-32">
          <section className={`bento-card md:col-span-8 transition-all duration-1000 ${scrolled ? 'bg-[#030303]' : ''}`}>
            <h2><div className="icon-box"><Terminal size={20}/></div> Tech Stack</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skills.map(s => (
                <div key={s.id} className="flex flex-col gap-3">
                  <div className="text-xs font-bold uppercase tracking-widest text-[#9b5de5]">{s.category}</div>
                  <div className="flex flex-wrap gap-2">
                    {s.items.split(',').map((item, i) => (
                      <span key={i} className="skill-pill">{item.trim()}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className={`bento-card md:col-span-4 transition-all duration-1000 ${scrolled ? 'bg-[#030303]' : ''}`}>
            <h2><div className="icon-box"><Star size={20}/></div> Recognition</h2>
            <div className="flex flex-col gap-5">
              {highlights.map(h => (
                <div key={h.id} className="flex gap-3 items-start group">
                  <CheckCircle size={18} className="text-[#00f5d4] mt-1 shrink-0 group-hover:scale-125 transition-transform"/>
                  <span className="text-sm text-white/80 leading-relaxed">{h.text}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @media print {
          @page { size: A4; margin: 0.3in; }
          body { background: white !important; color: black !important; -webkit-print-color-adjust: exact; font-size: 10.5pt !important; line-height: 1.4 !important; }
          
          /* Hide Web UI completely */
          .bg-aurora, .aurora-beam, .animate-bounce, .subtitle-tag, 
          [class*="absolute bottom-10"], button, .icon-box { display: none !important; }
          
          .min-h-screen { min-height: auto !important; padding: 0 !important; margin: 0 0 1rem 0 !important; }
          .container { max-width: 100% !important; padding: 0 !important; width: 100% !important; }
          
          /* Pro Resume Formatting - Compressed */
          h1 { font-size: 2.8rem !important; color: black !important; text-align: left !important; margin-bottom: 0.3rem !important; font-family: serif !important; }
          h1 span { color: #000 !important; }
          
          h2 { 
            font-size: 1.3rem !important; 
            color: black !important; 
            border-bottom: 2px solid #00b894 !important; 
            padding-bottom: 4px !important; 
            margin-top: 1.2rem !important;
            margin-bottom: 0.8rem !important; 
            display: block !important; 
            overflow: visible !important;
            text-align: left !important;
            position: relative !important;
            left: 0 !important;
          }
          
          /* Total Eradication of ghost icons/circles */
          .icon-box, [class*="icon"], svg, .timeline-card::after, .timeline-card::before { 
            display: none !important; 
            width: 0 !important; 
            height: 0 !important; 
            opacity: 0 !important;
          }
          
          .grid { display: block !important; }
          .lg\\:grid-cols-12 { display: flex !important; flex-wrap: wrap !important; gap: 0 !important; }
          
          /* Column layout in print */
          .profile-sidebar { width: 32% !important; padding-right: 2rem !important; }
          .lg\\:col-span-8 { width: 68% !important; }
          
          .bento-card { 
            background: transparent !important; 
            border: none !important; 
            box-shadow: none !important; 
            padding: 0 !important; 
            margin-bottom: 1.2rem !important;
            color: black !important;
            page-break-inside: avoid !important;
            break-inside: avoid !important;
            overflow: visible !important;
          }
          
          .contact-chip { 
            border: none !important; 
            padding: 0 !important; 
            justify-content: flex-start !important; 
            font-size: 0.9rem !important;
            color: black !important;
            margin-bottom: 4px !important;
          }
          
          .skill-pill { 
            background: #f8f8f8 !important; 
            border: 1px solid #ddd !important; 
            color: black !important;
            font-size: 9pt !important;
            padding: 2px 8px !important;
            margin: 2px !important;
            display: inline-block !important;
            border-radius: 0 !important; /* No curves in print */
          }
          
          .timeline-card { 
            border-left: 2px solid #00b894 !important; 
            padding-left: 1.2rem !important; /* Increased padding to prevent clipping */
            margin-left: 5px !important;
            margin-bottom: 1.2rem !important; 
            overflow: visible !important;
          }
          
          .text-[#a0a0a0], .text-white/80, .text-white/40 { color: #333 !important; }
          .text-[#9b5de5] { color: #444 !important; font-weight: bold !important; font-size: 9.5pt !important; }
          .text-[#00f5d4] { color: #008f7a !important; font-size: 9.5pt !important; }
          
          /* Footer sections side-by-side */
          .pb-32 { padding-bottom: 0 !important; }
          .footer-sections { 
            display: grid !important; 
            grid-template-columns: 1fr 1fr !important; 
            gap: 2rem !important; 
            margin-top: 1rem !important; 
            page-break-inside: avoid !important;
          }
          .footer-sections > section { margin-bottom: 0 !important; }
          .footer-sections h2 { margin-top: 0 !important; }
        }
      `}} />
    </div>
  );
}
