import type { Locale, LocalizedText, ProgramContent } from "@/types/program";

export function t(text: LocalizedText, locale: Locale): string {
  return text[locale];
}

export const programContent: ProgramContent = {
  brand: {
    id: "Duta Teladan Universitas STEKOM",
    en: "Universitas STEKOM Exemplary Ambassador",
  },
  nav: [
    {
      id: "nav-hero",
      href: "#hero",
      label: { id: "Beranda", en: "Home" },
    },
    {
      id: "nav-about",
      href: "#tentang",
      label: { id: "Program", en: "Program" },
    },
    {
      id: "nav-income",
      href: "#penghasilan",
      label: { id: "Penghasilan", en: "Earnings" },
    },
    {
      id: "nav-benefit",
      href: "#benefit",
      label: { id: "Benefit", en: "Benefits" },
    },
    {
      id: "nav-timeline",
      href: "#alur",
      label: { id: "Alur", en: "Flow" },
    },
    {
      id: "nav-outcome",
      href: "#testimoni",
      label: { id: "Testimoni", en: "Testimonials" },
    },
    {
      id: "nav-ambassadors",
      href: "#duta",
      label: { id: "Top Duta", en: "Top Ambassadors" },
    },
    {
      id: "nav-gallery",
      href: "#galeri",
      label: { id: "Galeri", en: "Gallery" },
    },
    {
      id: "nav-faq",
      href: "#faq",
      label: { id: "FAQ", en: "FAQ" },
    },
    {
      id: "nav-register",
      href: "#daftar",
      label: { id: "Daftar", en: "Register" },
    },
  ],
  hero: {
    badge: {
      id: "Content Creator Development Program",
      en: "Content Creator Development Program",
    },
    title: {
      id: "Jadi Duta Teladan Universitas STEKOM.",
      en: "Become Universitas STEKOM's Exemplary Ambassador.",
    },
    subtitle: {
      id: "Bangun personal branding yang kuat. Kuasai strategi konten, tingkatkan skill digital, dan kembangkan potensimu. Dapatkan uang saku rutin plus bonus performa. Di sini kamu berkembang sekaligus dibayar atas progres & kontribusimu.",
      en: "Build a strong personal brand. Master content strategy, sharpen digital skills, and grow your potential. Earn regular stipends plus performance bonuses. Here, you grow while getting paid for your progress and contributions.",
    },
    primaryCta: {
      id: "Daftar Sekarang",
      en: "Register Now",
    },
    secondaryCta: {
      id: "Pelajari Program",
      en: "Explore Program",
    },
    highlights: [
      {
        id: "hero-highlight-1",
        label: {
          id: "Pelatihan Konten Profesional",
          en: "Professional Content Training",
        },
      },
      {
        id: "hero-highlight-2",
        label: {
          id: "Dibayar untuk Berkembang",
          en: "Paid to Grow",
        },
      },
      {
        id: "hero-highlight-3",
        label: {
          id: "Uang Saku + Bonus Performa",
          en: "Stipend + Performance Bonus",
        },
      },
      {
        id: "hero-highlight-4",
        label: {
          id: "Program Resmi Universitas STEKOM",
          en: "Official Universitas STEKOM Program",
        },
      },
    ],
  },
  about: {
    eyebrow: {
      id: "Program ini",
      en: "What is this program?",
    },
    title: {
      id: "Duta Teladan Universitas STEKOM bukan organisasi biasa.",
      en: "Duta Teladan Universitas STEKOM is not a typical student organization.",
    },
    description: {
      id: "Program pengembangan content creator resmi Universitas STEKOM dengan pelatihan intensif, terstruktur, dan berorientasi hasil. Program ini gratis, dan peserta aktif berpeluang mendapatkan network, uang saku hingga penghasilan tambahan.",
      en: "An official Universitas STEKOM content creator development program with intensive, structured, and outcome-driven training. The program is free, and active participants have opportunities to gain networks, stipends, and additional income.",
    },
    highlights: [
      {
        id: "about-highlight-1",
        title: {
          id: "Bukan sekadar organisasi",
          en: "More than an organization",
        },
        description: {
          id: "Fokus pada output nyata, growth, dan dampak personal branding.",
          en: "Focused on measurable output, growth, and personal branding impact.",
        },
      },
      {
        id: "about-highlight-2",
        title: {
          id: "Bukan volunteer biasa",
          en: "Not a regular volunteer role",
        },
        description: {
          id: "Setiap kontribusi konten punya sistem evaluasi dan apresiasi.",
          en: "Every content contribution is evaluated and recognized.",
        },
      },
      {
        id: "about-highlight-3",
        title: {
          id: "Pelatihan + Dibayar",
          en: "Training + Paid",
        },
        description: {
          id: "Belajar skill digital tanpa biaya, sambil berpeluang mendapat uang saku dan bonus performa.",
          en: "Learn digital skills at no cost while having opportunities to earn stipends and performance bonuses.",
        },
      },
    ],
  },
  training: {
    eyebrow: {
      id: "Materi inti",
      en: "Core training",
    },
    title: {
      id: "Apa yang akan dipelajari?",
      en: "What will you learn?",
    },
    description: {
      id: "Kurikulum pelatihan dirancang untuk membangun creator muda yang siap tampil di dunia digital sejak sebelum kuliah.",
      en: "A practical curriculum designed to build young creators who can perform in the digital world even before college.",
    },
    items: [
      {
        id: "training-1",
        title: {
          id: "Strategi konten viral",
          en: "Viral content strategy",
        },
        description: {
          id: "Framework ide, momentum, dan distribusi yang meningkatkan jangkauan.",
          en: "Idea, momentum, and distribution frameworks to increase reach.",
        },
      },
      {
        id: "training-2",
        title: {
          id: "Personal branding",
          en: "Personal branding",
        },
        description: {
          id: "Bangun positioning diri yang kuat sebagai creator muda.",
          en: "Build a strong personal positioning as a young creator.",
        },
      },
      {
        id: "training-3",
        title: {
          id: "Public speaking & on-camera confidence",
          en: "Public speaking & on-camera confidence",
        },
        description: {
          id: "Latihan berbicara jelas, percaya diri, dan komunikatif.",
          en: "Practice clear, confident, and expressive communication.",
        },
      },
      {
        id: "training-4",
        title: {
          id: "Editing video short form & reels",
          en: "Short-form & reels video editing",
        },
        description: {
          id: "Teknik pacing, transition, dan retention untuk video pendek.",
          en: "Pacing, transition, and retention techniques for short videos.",
        },
      },
      {
        id: "training-5",
        title: {
          id: "Storytelling digital",
          en: "Digital storytelling",
        },
        description: {
          id: "Menyusun narasi konten yang relevan dan engaging.",
          en: "Craft narrative-driven content that is relevant and engaging.",
        },
      },
      {
        id: "training-6",
        title: {
          id: "Algoritma media sosial",
          en: "Social media algorithms",
        },
        description: {
          id: "Memahami sinyal platform untuk optimasi performa konten.",
          en: "Understand platform signals to optimize content performance.",
        },
      },
      {
        id: "training-7",
        title: {
          id: "Monetisasi konten",
          en: "Content monetization",
        },
        description: {
          id: "Konversi kreativitas menjadi nilai ekonomi melalui konten yang konsisten.",
          en: "Turn creativity into economic value through consistent content output.",
        },
      },
    ],
  },
  income: {
    eyebrow: {
      id: "Sistem penghasilan",
      en: "Earning system",
    },
    title: {
      id: "Dibayar untuk berkembang.",
      en: "Get paid to grow.",
    },
    statement: {
      id: "Fokus utamanya pelatihan dan perkembangan. Bedanya, kamu tidak membayar program ini, kamu justru berpeluang dibayar lewat uang saku dan bonus performa.",
      en: "The main focus is training and growth. The difference is you do not pay for this program, you have opportunities to get paid through stipends and performance bonuses.",
    },
    description: {
      id: "Skema penghasilan dirancang adil, transparan, dan mendorong kualitas konten terbaik.",
      en: "The earning model is fair, transparent, and built to reward quality content performance.",
    },
    metrics: [
      {
        id: "income-1",
        label: {
          id: "Uang saku rutin",
          en: "Regular stipend",
        },
        value: 0,
        helper: {
          id: "Untuk peserta aktif sesuai evaluasi periode program",
          en: "For active participants based on each program-period evaluation",
        },
      },
      {
        id: "income-2",
        label: {
          id: "Bonus performa konten",
          en: "Content performance bonus",
        },
        value: 0,
        helper: {
          id: "Mengikuti kualitas output dan capaian engagement",
          en: "Based on output quality and engagement achievements",
        },
      },
      {
        id: "income-3",
        label: {
          id: "Reward creator unggulan",
          en: "Top creator reward",
        },
        value: 0,
        helper: {
          id: "Apresiasi untuk kontribusi konten terbaik",
          en: "Recognition for the strongest content contribution",
        },
      },
      {
        id: "income-4",
        label: {
          id: "Potensi penghasilan tambahan",
          en: "Additional earning potential",
        },
        value: 0,
        helper: {
          id: "Terbuka seiring konsistensi dan perkembangan performa",
          en: "Opens up as your consistency and performance improve",
        },
      },
    ],
  },
  benefits: {
    eyebrow: {
      id: "Benefit program",
      en: "Program benefits",
    },
    title: {
      id: "Keuntungan strategis untuk persiapan kuliah dan karier digital.",
      en: "Strategic advantages for college preparation and digital career growth.",
    },
    description: {
      id: "Setiap peserta didesain untuk naik level pada skill, exposure, dan peluang profesional.",
      en: "Every participant is designed to level up in skill, exposure, and professional opportunity.",
    },
    items: [
      {
        id: "benefit-1",
        title: {
          id: "Pelatihan langsung dari mentor",
          en: "Direct mentoring sessions",
        },
        description: {
          id: "Belajar langsung dari mentor berpengalaman di konten digital.",
          en: "Learn directly from experienced digital content mentors.",
        },
      },
      {
        id: "benefit-2",
        title: {
          id: "Sertifikat resmi",
          en: "Official certificate",
        },
        description: {
          id: "Bukti kompetensi yang mendukung portofolio profesional.",
          en: "A formal credential to strengthen your professional profile.",
        },
      },
      {
        id: "benefit-3",
        title: {
          id: "Pengalaman organisasi prestisius",
          en: "Prestigious ambassador experience",
        },
        description: {
          id: "Menjadi representasi resmi Universitas STEKOM dalam ekosistem kreatif digital.",
          en: "Represent Universitas STEKOM in a digital creative ecosystem.",
        },
      },
      {
        id: "benefit-4",
        title: {
          id: "Personal branding meningkat",
          en: "Stronger personal branding",
        },
        description: {
          id: "Bangun reputasi digital yang konsisten dan terpercaya.",
          en: "Build a consistent and credible digital reputation.",
        },
      },
      {
        id: "benefit-5",
        title: {
          id: "Networking luas",
          en: "Wider network",
        },
        description: {
          id: "Terhubung dengan sesama creator, mentor, dan relasi pendidikan.",
          en: "Connect with fellow creators, mentors, and educational networks.",
        },
      },
      {
        id: "benefit-6",
        title: {
          id: "Portofolio profesional",
          en: "Professional portfolio",
        },
        description: {
          id: "Kumpulkan karya nyata yang bisa digunakan untuk karier.",
          en: "Build tangible work samples for future career opportunities.",
        },
      },
      {
        id: "benefit-7",
        title: {
          id: "Kepercayaan diri meningkat",
          en: "Higher confidence",
        },
        description: {
          id: "Tampil lebih percaya diri di depan kamera dan publik.",
          en: "Become more confident on camera and in public.",
        },
      },
      {
        id: "benefit-8",
        title: {
          id: "Kesempatan liburan menarik",
          en: "Exciting travel opportunities",
        },
        description: {
          id: "Berkesempatan liburan ke wisata-wisata menarik, termasuk Bali.",
          en: "Opportunities to travel to exciting destinations, including Bali.",
        },
      },
    ],
  },
  timeline: {
    eyebrow: {
      id: "Alur program",
      en: "Program flow",
    },
    title: {
      id: "Tahapan bergabung menjadi Duta Teladan.",
      en: "Steps to join the Duta Teladan program.",
    },
    description: {
      id: "Proses seleksi hingga onboarding dirancang cepat, jelas, dan terstruktur.",
      en: "A clear, structured process from selection to active participation.",
    },
    steps: [
      {
        id: "timeline-1",
        title: { id: "Daftar Online", en: "Online Registration" },
        description: {
          id: "Isi data singkat dan motivasi bergabung.",
          en: "Submit your basic details and motivation.",
        },
      },
      {
        id: "timeline-2",
        title: { id: "Seleksi & Interview", en: "Selection & Interview" },
        description: {
          id: "Kurasi kandidat berdasarkan potensi dan komitmen.",
          en: "Candidates are shortlisted by potential and commitment.",
        },
      },
      {
        id: "timeline-3",
        title: {
          id: "Pembekalan & Pelantikan",
          en: "Briefing & Inauguration",
        },
        description: {
          id: "Pembekalan singkat serta prosesi pelantikan dan penyematan gelar Duta Teladan kepada peserta terpilih.",
          en: "A short briefing plus the inauguration and title conferment for selected participants.",
        },
      },
      {
        id: "timeline-4",
        title: { id: "Aktif sebagai Duta", en: "Active as Ambassador" },
        description: {
          id: "Mengikuti mentoring Content Creator serta menjalankan tugas mingguan (repost konten) dan tugas bulanan (membuat konten).",
          en: "Join content creator mentoring and complete weekly tasks (reposting content) plus monthly tasks (creating content).",
        },
      },
      {
        id: "timeline-5",
        title: {
          id: "Uang Saku & Bonus Berjalan",
          en: "Stipend & Bonus Ongoing",
        },
        description: {
          id: "Konsistensi repost/tips mingguan dan hasil konten bulanan dievaluasi berkala untuk menentukan apresiasi dan bonus.",
          en: "Consistency in weekly repost/tip tasks and monthly content output is reviewed regularly to determine recognition and bonuses.",
        },
      },
    ],
  },
  outcomes: {
    eyebrow: {
      id: "Testimoni",
      en: "Testimonials",
    },
    title: {
      id: "Cerita langsung dari Duta Teladan Universitas STEKOM.",
      en: "Stories from Duta Teladan Universitas STEKOM.",
    },
    description: {
      id: "Testimoni ini bersifat dummy untuk kebutuhan layout dan skema desain.",
      en: "These testimonials are dummy text for layout and design purposes.",
    },
    items: [
      {
        id: "outcome-1",
        title: {
          id: "Skill digital siap pakai",
          en: "Job-ready digital skills",
        },
        description: {
          id: "Mampu produksi konten dari ide hingga publikasi.",
          en: "Produce content from ideation to publication.",
        },
      },
      {
        id: "outcome-2",
        title: {
          id: "Akun sosial media berkembang",
          en: "Social account growth",
        },
        description: {
          id: "Konsisten tumbuh melalui strategi konten terarah.",
          en: "Grow consistently through strategic content execution.",
        },
      },
      {
        id: "outcome-3",
        title: {
          id: "Portofolio nyata",
          en: "Real portfolio",
        },
        description: {
          id: "Karya konten yang bisa dipresentasikan secara profesional.",
          en: "A portfolio of real content you can present professionally.",
        },
      },
      {
        id: "outcome-4",
        title: {
          id: "Pengalaman tampil di depan publik",
          en: "Public-facing confidence",
        },
        description: {
          id: "Komunikasi publik yang lebih matang dan persuasif.",
          en: "Stronger and more persuasive public communication.",
        },
      },
      {
        id: "outcome-5",
        title: {
          id: "Penghasilan tambahan sejak masa sekolah",
          en: "Additional income during school years",
        },
        description: {
          id: "Peluang penghasilan yang mendorong konsistensi berkarya dan produktivitas.",
          en: "Earning opportunities that encourage consistent output and productivity.",
        },
      },
    ],
    quote: {
      id: "Program ini membuat saya lebih percaya diri di depan kamera, akun saya berkembang, dan saya bisa mendapatkan penghasilan dari skill sendiri.",
      en: "This program made me confident on camera, grew my account, and helped me earn from my own skills.",
    },
    quoteSource: {
      id: "Contoh testimoni peserta Duta Teladan",
      en: "Sample testimonial from a Duta Teladan participant",
    },
  },
  ambassadors: {
    eyebrow: {
      id: "Peringkat Duta",
      en: "Ambassador Leaderboard",
    },
    title: {
      id: "Top 5 Duta berdasarkan followers tertinggi.",
      en: "Top 5 ambassadors by highest follower count.",
    },
    description: {
      id: "Setiap duta diambil nilai followers tertinggi dari salah satu platform (TikTok atau Instagram), lalu diurutkan dari yang terbesar.",
      en: "Each ambassador uses the highest follower value from either TikTok or Instagram, then ranks are sorted descending.",
    },
    leaderLabel: {
      id: "Performa terbaik periode ini",
      en: "Best performance this period",
    },
    followersLabel: {
      id: "Followers Tertinggi",
      en: "Highest Followers",
    },
    items: [
      {
        id: "ambassador-1",
        name: "Fadhil Fauzan Azmi",
        school: "SMKN 1 Pemalang",
        photo: "/images/topduta/FADHIL%20FAUZAN%20AZMI.jpeg",
        tiktokFollowers: 386400,
        instagramFollowers: 486,
      },
      {
        id: "ambassador-2",
        name: "Feby Dea Laelasari",
        school: "SMKN 1 Leuwimunding",
        photo: "/images/topduta/FEBY%20DEA%20LAELASARI.jpeg",
        tiktokFollowers: 43200,
        instagramFollowers: 14600,
      },
      {
        id: "ambassador-3",
        name: "Muhammad Thaariq Abad",
        school: "SMAN 1 Weleri",
        photo: "/images/topduta/Muhammad%20Thaariq%20Abad.jpeg",
        tiktokFollowers: 41900,
        instagramFollowers: 2704,
      },
      {
        id: "ambassador-4",
        name: "Sentot Sutaji",
        school: "SMA Al Islam Wirosari",
        photo: "/images/topduta/Sentot%20Sutaji.jpeg",
        tiktokFollowers: 23600,
        instagramFollowers: 14800,
      },
      {
        id: "ambassador-5",
        name: "Cantika Lulu Lavinia",
        school: "SMK Negeri 1 Pringapus",
        photo: "/images/topduta/CANTIKA%20LULU%20LAVINIA.jpeg",
        tiktokFollowers: 19200,
        instagramFollowers: 537,
      },
    ],
  },
  gallery: {
    eyebrow: {
      id: "Galeri kegiatan",
      en: "Activity gallery",
    },
    title: {
      id: "Dinamika proses kreatif di program Duta Teladan.",
      en: "Inside the creative workflow of Duta Teladan.",
    },
    description: {
      id: "Dokumentasi suasana belajar, produksi, dan kolaborasi konten edukasi.",
      en: "Snapshots of learning, production, and collaboration in educational content creation.",
    },
    items: [
      {
        id: "gallery-1",
        src: "/images/gallery/shooting.jpeg",
        title: { id: "Proses shooting konten", en: "Content shooting process" },
        alt: { id: "Proses shooting konten siswa", en: "Students shooting content" },
        width: 1200,
        height: 900,
      },
      {
        id: "gallery-2",
        src: "/images/gallery/Editing.jpeg",
        title: { id: "Editing session", en: "Editing session" },
        alt: { id: "Sesi editing video", en: "Video editing session" },
        width: 1200,
        height: 820,
      },
      {
        id: "gallery-3",
        src: "/images/gallery/Meeting%20online.jpeg",
        title: { id: "Meeting kreatif", en: "Creative meeting" },
        alt: { id: "Rapat ide konten", en: "Content ideation meeting" },
        width: 1200,
        height: 960,
      },
      {
        id: "gallery-4",
        src: "/images/gallery/Behind%20the%20Scene.jpeg",
        title: { id: "Behind the scene", en: "Behind the scenes" },
        alt: { id: "Aktivitas belakang layar produksi", en: "Behind-the-scenes production activity" },
        width: 1200,
        height: 840,
      },
      {
        id: "gallery-5",
        src: "/images/gallery/kampus.jpeg",
        title: { id: "Event edukasi", en: "Education event" },
        alt: { id: "Dokumentasi event edukasi", en: "Education event coverage" },
        width: 1200,
        height: 900,
      },
      {
        id: "gallery-6",
        src: "/images/gallery/Achievement.JPG",
        title: { id: "Momen achievement", en: "Achievement moment" },
        alt: { id: "Dokumentasi pencapaian peserta", en: "Participant achievement documentation" },
        width: 1200,
        height: 900,
      },
    ],
  },
  faq: {
    eyebrow: {
      id: "FAQ",
      en: "FAQ",
    },
    title: {
      id: "Pertanyaan yang paling sering ditanyakan pendaftar.",
      en: "Most frequently asked questions by applicants.",
    },
    description: {
      id: "Informasi inti program untuk membantu Anda mengambil keputusan.",
      en: "Core information to help you decide quickly and confidently.",
    },
    items: [
      {
        id: "faq-1",
        question: {
          id: "Siapa yang bisa daftar?",
          en: "Who can apply?",
        },
        answer: {
          id: "Program ini terbuka untuk pendaftar yang memenuhi syarat pada periode rekrutmen aktif Universitas STEKOM. Seluruh peserta mengikuti alur seleksi dan pelatihan yang sama.",
          en: "The program is open to applicants who meet the requirements in each active Universitas STEKOM recruitment period. All participants follow the same selection and training flow.",
        },
      },
      {
        id: "faq-2",
        question: {
          id: "Apakah ini berbayar?",
          en: "Is this program paid?",
        },
        answer: {
          id: "Tidak. Program ini tidak memungut biaya pendaftaran maupun biaya pelatihan. Peserta aktif berkesempatan mendapatkan uang saku dan bonus performa.",
          en: "No. There is no registration or training fee. Active participants have opportunities to receive stipend and performance bonuses.",
        },
      },
      {
        id: "faq-3",
        question: {
          id: "Berapa uang sakunya?",
          en: "How much is the stipend?",
        },
        answer: {
          id: "Uang saku mengikuti kebijakan periode program dan performa keaktifan peserta.",
          en: "Stipend follows each program period policy and participant activity performance.",
        },
      },
      {
        id: "faq-4",
        question: {
          id: "Bagaimana sistem bonus performa?",
          en: "How does the performance bonus system work?",
        },
        answer: {
          id: "Bonus dihitung dari konsistensi, kualitas konten, engagement, dan kontribusi selama periode evaluasi.",
          en: "Bonuses are calculated from consistency, content quality, engagement, and contributions during each evaluation period.",
        },
      },
      {
        id: "faq-5",
        question: {
          id: "Apa tugas selama menjadi duta?",
          en: "What are the tasks as an ambassador?",
        },
        answer: {
          id: "Ada tugas mingguan dan bulanan. Tugas mingguan adalah repost konten dan mengikuti tips konten mingguan. Tugas bulanan adalah bikin konten.",
          en: "There are weekly and monthly tasks. Weekly tasks are reposting content and following weekly content tips. The monthly task is creating content.",
        },
      },
      {
        id: "faq-6",
        question: {
          id: "Apakah wajib punya pengalaman?",
          en: "Do I need prior experience?",
        },
        answer: {
          id: "Tidak wajib. Program menyediakan pelatihan dari dasar hingga tingkat lanjutan.",
          en: "Not required. The program provides training from foundational to advanced level.",
        },
      },
    ],
  },
  finalCta: {
    title: {
      id: "Siap Jadi Duta Teladan Universitas STEKOM?",
    en: "Ready to become Universitas STEKOM's Exemplary Ambassador?",
    },
    subtitle: {
      id: "Bangun nama. Bangun skill. Dapatkan penghasilan sambil berkembang.",
      en: "Build your name. Build your skills. Earn while you grow.",
    },
    button: {
      id: "Daftar Sekarang",
      en: "Register Now",
    },
  },
  form: {
    title: {
      id: "Pendaftaran Batch 2",
      en: "Batch 2 registration",
    },
    description: {
      id: "Klik tombol daftar sekarang untuk mengamankan kesempatanmu.",
      en: "Click register now to secure your chance.",
    },
    labels: {
      fullName: { id: "Nama Lengkap", en: "Full Name" },
      nim: { id: "Asal Sekolah / NISN", en: "School / NISN" },
      major: { id: "Jurusan yang Diminati", en: "Intended Major" },
      whatsapp: { id: "Nomor WhatsApp", en: "WhatsApp Number" },
      socialHandle: { id: "Akun Sosial Media", en: "Social Media Handle" },
      motivation: { id: "Motivasi Bergabung", en: "Why You Want to Join" },
    },
    placeholders: {
      fullName: { id: "Masukkan nama lengkap", en: "Enter your full name" },
      nim: { id: "Contoh Nama Sekolah / 00xxxxxxxx", en: "Example School Name / 00xxxxxxxx" },
      major: { id: "Contoh Informatika", en: "Example Informatics" },
      whatsapp: { id: "Contoh 08xxxxxxxxxx", en: "Example 08xxxxxxxxxx" },
      socialHandle: { id: "Contoh @username", en: "Example @username" },
      motivation: {
        id: "Ceritakan alasan Anda bergabung (opsional)",
        en: "Tell us why you want to join (optional)",
      },
    },
    submit: {
      id: "Daftar",
      en: "Register",
    },
    submitting: {
      id: "Mengirim...",
      en: "Submitting...",
    },
    successTitle: {
      id: "Pendaftaran berhasil dikirim.",
      en: "Registration submitted successfully.",
    },
    successDescription: {
      id: "Tim program akan menghubungi Anda untuk tahap seleksi berikutnya.",
      en: "The program team will contact you for the next selection stage.",
    },
    errors: {
      required: {
        id: "Mohon lengkapi seluruh field wajib.",
        en: "Please complete all required fields.",
      },
      whatsapp: {
        id: "Nomor WhatsApp minimal 10 digit.",
        en: "WhatsApp number must contain at least 10 digits.",
      },
    },
  },
};
