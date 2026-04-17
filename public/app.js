/* ═══════════════════════════════════════════════════════════════
   ARAMBH TECHNOLOGIES — app.js
   Vue 3 Global Build (CDN) · Full Component Architecture
   Company: Arambh Technologies | Bengaluru
   Tagline : Building Tomorrow, Starting Today.
═══════════════════════════════════════════════════════════════ */

const { createApp, defineComponent, ref, computed, onMounted, onUnmounted, watch } = Vue;

/* ─────────────────────────────────────────────────────────────
   BRAND CONFIG — edit this object to update all site content
───────────────────────────────────────────────────────────────*/
const BRAND = {
  name:     'Arambh Technologies',
  short:    'Arambh',
  tagline:  'Building Tomorrow, Starting Today.',
  logoIcon: '⚡',
  accent:   '#00D9FF',
  email:    'hello@arambhtech.in',
  phone:    '+91 XXXXX XXXXX',
  address:  'Your Area, Bengaluru, Karnataka 560001',
  mapLink:  'https://maps.google.com',
  linkedin: 'https://linkedin.com/company/arambhtech',
  twitter:  'https://twitter.com/arambhtech',
  youtube:  'https://youtube.com/@arambhtech',
  instagram:'https://instagram.com/arambhtech',
  founded:  '2024',
};

/* ─────────────────────────────────────────────────────────────
   SHARED DATA STORE
───────────────────────────────────────────────────────────────*/
const DATA = {

  navLinks: [
    { href: '#home',         id: 'home',         label: 'Home'       },
    { href: '#services',     id: 'services',      label: 'Services'   },
    { href: '#industries',   id: 'industries',    label: 'Industries' },
    { href: '#training',     id: 'training',      label: 'Training'   },
    { href: '#portfolio',    id: 'portfolio',     label: 'Portfolio'  },
    { href: '#about',        id: 'about',         label: 'About'      },
  ],

  heroStats: [
    { value: '10+',  label: 'Projects Delivered'  },
    { value: '50+',  label: 'Students Trained'     },
    { value: '100%', label: 'Client Satisfaction'  },
    { value: '3+',   label: 'Years Experience'     },
  ],

  heroChips: [
    { icon: '☕', label: 'Java Dev',    pos: 'top:20px;left:10px;',            cls: 'float-a' },
    { icon: '🌱', label: 'Spring Boot', pos: 'top:30px;right:-10px;',          cls: 'float-b' },
    { icon: '🔥', label: 'Firebase',    pos: 'bottom:80px;left:-20px;',        cls: 'float-b' },
    { icon: '⚛️', label: 'React / Vue', pos: 'bottom:60px;right:0px;',         cls: 'float-a' },
  ],

  services: [
    { icon: '🌐', title: 'Web Application Development',
      desc: 'Full-stack web solutions — from restaurant portals to hospital dashboards — built with modern, scalable architecture.',
      tags: ['React', 'Vue.js', 'Node.js', 'Django'], color: '#00D9FF' },
    { icon: '📱', title: 'Mobile App Development',
      desc: 'Cross-platform apps for Android & iOS — booking apps, POS systems, and patient portals that users love.',
      tags: ['Flutter', 'React Native', 'Kotlin'], color: '#7B5EA7' },
    { icon: '🎨', title: 'UI/UX Design',
      desc: 'User-first design for every screen — wireframes, prototypes, and polished interfaces that convert visitors to customers.',
      tags: ['Figma', 'Prototyping', 'Design Systems'], color: '#FF6B6B' },
    { icon: '☁️', title: 'Cloud & DevOps',
      desc: 'Deploy, scale, and monitor your applications on AWS, GCP, or Azure with automated CI/CD pipelines.',
      tags: ['AWS', 'Docker', 'Kubernetes', 'GitHub Actions'], color: '#00E5A0' },
    { icon: '🗄️', title: 'Database Solutions',
      desc: 'Robust data architecture, migration, and real-time integrations for businesses that run on data.',
      tags: ['MySQL', 'MongoDB', 'Firebase', 'PostgreSQL'], color: '#FFB347' },
    { icon: '🤖', title: 'AI & Automation',
      desc: 'Intelligent chatbots, process automation, and AI-powered analytics to modernize your operations.',
      tags: ['Python', 'ML', 'OpenAI API', 'n8n'], color: '#FF6B9D' },
  ],

  industries: [
    { name: 'Restaurants & Food Tech', emoji: '🍽️',
      gradient: 'linear-gradient(135deg,#1a0a00,#3d1c00)',
      tag: 'Food Tech', tagBg: 'rgba(255,179,71,0.2)', tagColor: '#FFB347',
      desc: 'Custom POS systems, online ordering portals, kitchen display systems & loyalty programs tailored for restaurants.' },
    { name: 'Healthcare & Hospitals', emoji: '🏥',
      gradient: 'linear-gradient(135deg,#001a1f,#003d4d)',
      tag: 'HealthTech', tagBg: 'rgba(0,217,255,0.2)', tagColor: '#00D9FF',
      desc: 'Patient management systems, EHR platforms, appointment scheduling & telemedicine solutions.' },
    { name: 'Salons & Beauty', emoji: '💇',
      gradient: 'linear-gradient(135deg,#1a0018,#3d0037)',
      tag: 'Beauty Tech', tagBg: 'rgba(255,107,157,0.2)', tagColor: '#FF6B9D',
      desc: 'Smart booking apps, inventory & staff management, client loyalty systems for salons & spas.' },
    { name: 'Retail & E-commerce', emoji: '🛒',
      gradient: 'linear-gradient(135deg,#001a08,#003d17)',
      tag: 'RetailTech', tagBg: 'rgba(0,229,160,0.2)', tagColor: '#00E5A0',
      desc: 'E-commerce platforms, multi-store POS, real-time inventory tracking & customer analytics.' },
  ],

  trainingFeatures: [
    { icon: '🎯', title: 'Industry-Aligned Curriculum',  text: 'Syllabi co-designed with working engineers to match real hiring requirements.' },
    { icon: '🛠️', title: 'Live Project Experience',      text: 'Every student works on real-world projects — not just theory.' },
    { icon: '👨‍🏫', title: 'Expert-Led Sessions',          text: 'Learn directly from developers with years of industry experience.' },
    { icon: '📜', title: 'Certification & Job Support',  text: 'Earn a certificate and get connected to our hiring partner network.' },
  ],

  programHighlights: [
    { label: 'Courses Available',    value: '8+'           },
    { label: 'Students Trained',     value: '50+'          },
    { label: 'Hiring Partners',      value: '10+'          },
    { label: 'Avg. Salary Hike',     value: '50%'          },
    { label: 'Training Modes',       value: 'Online / Offline' },
    { label: 'Placement Support',    value: '✅ Included'  },
  ],

  courses: [
    { icon: '☕', title: 'Core Java + Advanced Java',
      category: 'Backend Development',
      desc: 'OOP, Collections, Multithreading, JDBC, Servlets, JSP and design patterns — full Java stack.',
      duration: '3 Months', mode: 'Batch / Self-paced', cert: 'Oracle Aligned',
      level: 'Beginner', levelBg: 'rgba(0,229,160,0.15)', levelColor: '#00E5A0', color: '#E8A048' },
    { icon: '🌱', title: 'Spring Boot & Microservices',
      category: 'Backend Development',
      desc: 'REST APIs, Spring Security, JPA/Hibernate, Microservices architecture and Docker deployment.',
      duration: '3 Months', mode: 'Live Classes', cert: 'Arambh Certified',
      level: 'Intermediate', levelBg: 'rgba(0,217,255,0.15)', levelColor: '#00D9FF', color: '#6DB33F' },
    { icon: '⚛️', title: 'Full-Stack Web Development',
      category: 'Frontend + Backend',
      desc: 'HTML, CSS, JavaScript, React / Vue.js, Node.js, REST APIs and cloud deployment end-to-end.',
      duration: '6 Months', mode: 'Live + Recorded', cert: 'Industry Cert',
      level: 'Beginner', levelBg: 'rgba(0,229,160,0.15)', levelColor: '#00E5A0', color: '#61DAFB' },
    { icon: '🐍', title: 'Python & Data Science',
      category: 'Data & AI',
      desc: 'Python fundamentals, Pandas, NumPy, Matplotlib, Scikit-learn, and real ML project work.',
      duration: '4 Months', mode: 'Live Classes', cert: 'Arambh Certified',
      level: 'Intermediate', levelBg: 'rgba(0,217,255,0.15)', levelColor: '#00D9FF', color: '#3776AB' },
    { icon: '📱', title: 'Flutter App Development',
      category: 'Mobile Development',
      desc: 'Build beautiful cross-platform iOS & Android apps with Dart, Firebase & state management.',
      duration: '3 Months', mode: 'Batch / Self-paced', cert: 'Google Aligned',
      level: 'Intermediate', levelBg: 'rgba(0,217,255,0.15)', levelColor: '#00D9FF', color: '#54C5F8' },
    { icon: '☁️', title: 'Cloud & DevOps Engineering',
      category: 'Infrastructure',
      desc: 'AWS / GCP, Linux, Docker, Kubernetes, Jenkins CI/CD and Infrastructure as Code.',
      duration: '4 Months', mode: 'Live Classes', cert: 'AWS Aligned',
      level: 'Advanced', levelBg: 'rgba(255,107,107,0.15)', levelColor: '#FF6B6B', color: '#FF9900' },
    { icon: '🗄️', title: 'Database Design & SQL',
      category: 'Data Engineering',
      desc: 'Relational design, MySQL, PostgreSQL, query optimization, indexing, and NoSQL with MongoDB.',
      duration: '2 Months', mode: 'Batch / Self-paced', cert: 'Arambh Certified',
      level: 'Beginner', levelBg: 'rgba(0,229,160,0.15)', levelColor: '#00E5A0', color: '#336791' },
    { icon: '🔐', title: 'Cybersecurity Fundamentals',
      category: 'Security',
      desc: 'Network security, ethical hacking basics, OWASP Top 10, penetration testing and secure coding.',
      duration: '3 Months', mode: 'Live Classes', cert: 'Arambh Certified',
      level: 'Advanced', levelBg: 'rgba(255,107,107,0.15)', levelColor: '#FF6B6B', color: '#FF6B6B' },
  ],

  portfolioFilters: ['All', 'Web', 'Mobile', 'Healthcare', 'Food Tech', 'Retail'],

  projects: [
    { title: 'MediTrack — Hospital Management', category: 'Healthcare', emoji: '🏥',
      bgGradient: 'linear-gradient(135deg,#001a1f,#003d4d)',
      desc: 'End-to-end EHR system covering patient registration, billing, pharmacy & appointment management.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
      link: '#' },
    { title: 'TableFlow — Restaurant POS', category: 'Food Tech', emoji: '🍽️',
      bgGradient: 'linear-gradient(135deg,#1a0a00,#3d1c00)',
      desc: 'Smart POS with real-time kitchen display, table management, online ordering & revenue analytics.',
      tech: ['Vue.js', 'Firebase', 'Flutter'],
      link: '#' },
    { title: 'GlamBook — Salon Booking App', category: 'Mobile', emoji: '💇',
      bgGradient: 'linear-gradient(135deg,#1a0018,#3d0037)',
      desc: 'Cross-platform app for booking salon services with loyalty points, push notifications & stylist ratings.',
      tech: ['Flutter', 'Firebase', 'Razorpay'],
      link: '#' },
    { title: 'ShopEase — Retail Platform', category: 'Retail', emoji: '🛒',
      bgGradient: 'linear-gradient(135deg,#001a08,#003d17)',
      desc: 'Multi-vendor e-commerce platform with inventory management, delivery tracking & seller analytics.',
      tech: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#' },
    { title: 'EduSpark — LMS Platform', category: 'Web', emoji: '📚',
      bgGradient: 'linear-gradient(135deg,#0d0018,#200040)',
      desc: 'Learning management system with live classes, quiz engine, progress tracking & digital certificates.',
      tech: ['React', 'Django', 'PostgreSQL', 'WebRTC'],
      link: '#' },
    { title: 'LogiTrack — Fleet Dashboard', category: 'Web', emoji: '🚚',
      bgGradient: 'linear-gradient(135deg,#1a1500,#3d3200)',
      desc: 'Real-time fleet tracking with route optimization, driver performance analytics & fuel monitoring.',
      tech: ['Vue.js', 'Go', 'Redis', 'Google Maps API'],
      link: '#' },
  ],

  testimonials: [
    { text: 'Arambh built our restaurant POS from scratch in record time. Incredibly professional team and the product has saved us hours every single day.',
      name: 'Placeholder Client A', role: 'Restaurant Owner, Bengaluru', avatar: '👨‍🍳', avatarBg: 'rgba(255,179,71,0.2)' },
    { text: 'The Java & Spring Boot training was outstanding. I secured a job at an MNC within weeks of finishing the course.',
      name: 'Placeholder Student B', role: 'Software Engineer, Infosys', avatar: '👩‍💻', avatarBg: 'rgba(0,217,255,0.2)' },
    { text: 'Our clinic is now fully digital thanks to Arambh. They understood healthcare workflows and delivered exactly what we needed.',
      name: 'Placeholder Client C', role: 'Clinic Director, Bengaluru', avatar: '👨‍⚕️', avatarBg: 'rgba(0,229,160,0.2)' },
    { text: 'GlamBook transformed our 3-location salon business. Online bookings jumped 40% in the first month. Absolutely love the app!',
      name: 'Placeholder Client D', role: 'Salon Owner, Bengaluru', avatar: '💇', avatarBg: 'rgba(255,107,157,0.2)' },
    { text: 'Best training experience I have had. Real projects, real mentors, and real placement support. Got my first dev job within 2 months!',
      name: 'Placeholder Student E', role: 'Junior Developer, TCS', avatar: '👨‍🎓', avatarBg: 'rgba(123,94,167,0.2)' },
    { text: 'Our retail inventory was chaos across 5 stores. Arambh built a solution that gave us full visibility in real time. Remarkable!',
      name: 'Placeholder Client F', role: 'Retail Operations Head, Bengaluru', avatar: '🛒', avatarBg: 'rgba(0,229,160,0.2)' },
  ],

  contactInfo: [
    { icon: '📍', label: 'Address',  value: 'Your Area, Bengaluru, Karnataka 560001', sub: 'Visit us at our office' },
    { icon: '📞', label: 'Phone',    value: '+91 XXXXX XXXXX',              sub: 'Mon–Sat, 9 AM – 6 PM'     },
    { icon: '✉️', label: 'Email',    value: 'hello@arambhtech.in',          sub: 'We reply within 24 hours'  },
  ],

  values: [
    { icon: '🌱', title: 'Arambh — A New Beginning', desc: 'We are the first step in every client\'s digital journey — building foundations that last.', bg: 'rgba(0,217,255,0.1)'   },
    { icon: '🎯', title: 'Client-First Approach',    desc: 'Every feature we build, every line we write is guided by your business goals.',            bg: 'rgba(0,229,160,0.1)'   },
    { icon: '⚡', title: 'Agile & Fast Delivery',    desc: 'Rapid iterations with continuous feedback — ship fast, improve faster.',                    bg: 'rgba(255,179,71,0.1)'  },
    { icon: '🔒', title: 'Quality & Security',        desc: 'Code reviews, automated testing, and security-first development on every project.',         bg: 'rgba(255,107,107,0.1)' },
  ],

  whyUs: [
    { icon: '🏙️', stat: '100%', label: 'Remote-first',      desc: 'Serving clients across India from Bengaluru' },
    { icon: '⚡',  stat: '2x',  label: 'Faster Delivery',    desc: 'Agile sprints vs traditional agencies'       },
    { icon: '💰',  stat: '40%', label: 'Cost Savings',       desc: 'Startup-friendly pricing without compromising quality' },
    { icon: '🎓',  stat: '50+', label: 'Students Placed',    desc: 'And growing every batch'                     },
  ],

  footerLinks: {
    Services: ['Web Development', 'Mobile Apps', 'UI/UX Design', 'Cloud & DevOps', 'Database Solutions', 'AI & Automation'],
    Training:  ['Core Java', 'Spring Boot', 'Full-Stack Web', 'Flutter', 'Data Science', 'Cloud & DevOps'],
    Company:   ['About Us', 'Portfolio', 'Industries', 'Contact Us', 'Careers'],
  },

  interestOptions: [
    'Software Development for my Business',
    'Mobile App Development',
    'IT Training / Course Enrollment',
    'UI/UX Design',
    'Cloud & DevOps',
    'General Inquiry',
  ],

  enrollBackgrounds: ['Student', 'Working Professional', 'Fresher', 'Career Switcher'],
};

/* ─────────────────────────────────────────────────────────────
   COMPOSABLE — Scroll-triggered fade-in
───────────────────────────────────────────────────────────────*/
function useFadeIn() {
  onMounted(() => {
    setTimeout(() => {
      const io = new IntersectionObserver(
        entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
        { threshold: 0.08 }
      );
      document.querySelectorAll('.fade-in').forEach(el => io.observe(el));
    }, 200);
  });
}

/* ─────────────────────────────────────────────────────────────
   UTILITY — Firestore writer
───────────────────────────────────────────────────────────────*/
async function saveToFirestore(col, data) {
  const db = window.__firebaseDb;
  const h  = window.__firestoreHelpers;
  if (!db || !h) throw new Error('Firebase not initialised — please add your Firebase config in index.html.');
  return h.addDoc(h.collection(db, col), { ...data, timestamp: h.serverTimestamp() });
}

/* ─────────────────────────────────────────────────────────────
   UTILITY — simple email validator
───────────────────────────────────────────────────────────────*/
const isEmail = v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

/* ═══════════════════════════════════════════════════════════════
   COMPONENT: NavbarComponent
═══════════════════════════════════════════════════════════════ */
const NavbarComponent = defineComponent({
  name: 'NavbarComponent',
  props: { activeSection: { type: String, default: 'home' } },
  emits: ['navigate'],
  setup(props, { emit }) {
    const scrolled = ref(false);
    const menuOpen = ref(false);

    function onScroll() { scrolled.value = window.scrollY > 50; }
    function navigate(id) { menuOpen.value = false; emit('navigate', id); }

    onMounted(()  => window.addEventListener('scroll', onScroll, { passive: true }));
    onUnmounted(() => window.removeEventListener('scroll', onScroll));

    return { scrolled, menuOpen, navLinks: DATA.navLinks, brand: BRAND, navigate };
  },
  template: `
    <nav id="navbar">
      <div class="navbar-inner" :class="{ scrolled }">

        <a href="#home" class="logo" @click="navigate('home')">
          <img src="logo.svg" alt="Arambh Technologies logo" class="logo-image">
          {{ brand.short }}<span class="logo-accent">.</span>
        </a>

        <ul class="nav-links">
          <li v-for="link in navLinks" :key="link.href">
            <a :href="link.href"
               :class="{ active: activeSection === link.id }"
               @click="navigate(link.id)">{{ link.label }}</a>
          </li>
          <li><a href="#contact" class="nav-cta" @click="navigate('contact')">Get Started →</a></li>
        </ul>

        <button class="hamburger" :class="{ open: menuOpen }"
                @click="menuOpen = !menuOpen" aria-label="Toggle menu">
          <span></span><span></span><span></span>
        </button>
      </div>

      <div class="mobile-menu" :class="{ open: menuOpen }">
        <a v-for="link in navLinks" :key="link.href"
           :href="link.href" @click="navigate(link.id)">{{ link.label }}</a>
        <a href="#contact" class="mobile-cta" @click="navigate('contact')">Get Started →</a>
      </div>
    </nav>
  `,
});

/* ═══════════════════════════════════════════════════════════════
   COMPONENT: HeroSection
═══════════════════════════════════════════════════════════════ */
const HeroSection = defineComponent({
  name: 'HeroSection',
  setup() {
    return { brand: BRAND, stats: DATA.heroStats, chips: DATA.heroChips };
  },
  template: `
    <section id="home">
      <div class="grid-bg"></div>
      <div class="hero-glow"></div>
      <div class="hero-glow2"></div>

      <div class="container">
        <div class="hero-content">

          <div class="hero-badge">
            <div class="dot"></div>
            Now Accepting Clients &amp; Students · Bengaluru
          </div>

          <h1 class="hero-title">
            Software That Grows<br>
            <span class="gradient-text">Your Business.</span><br>
            Training That Grows You.
          </h1>

          <p class="hero-sub">
            {{ brand.name }} delivers custom software for restaurants, hospitals, salons &amp;
            retail — and industry-leading IT training programs for the next generation of engineers.
          </p>

          <p class="hero-tagline-pill">✦ {{ brand.tagline }}</p>

          <div class="hero-actions">
            <a href="#services"  class="btn btn-primary">Our Services ↓</a>
            <a href="#training"  class="btn btn-outline">Explore Training</a>
            <a href="#contact"   class="btn btn-ghost">Get a Free Quote</a>
          </div>

          <div class="hero-stats">
            <div v-for="s in stats" :key="s.label" class="hero-stat">
              <div class="hero-stat-num">{{ s.value }}</div>
              <div class="hero-stat-label">{{ s.label }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Floating Tech Orb -->
      <div class="hero-visual">
        <div class="tech-orb">
          <div class="orb-ring r1"></div>
          <div class="orb-ring r2"></div>
          <div class="orb-ring r3"></div>
          <div class="orb-center">
            <img src="logo.svg" alt="Arambh Technologies logo" class="orb-logo">
          </div>
          <div v-for="chip in chips" :key="chip.label"
               class="floating-chip" :class="chip.cls" :style="chip.pos">
            <span class="chip-icon">{{ chip.icon }}</span>{{ chip.label }}
          </div>
        </div>
      </div>
    </section>
  `,
});

/* ═══════════════════════════════════════════════════════════════
   COMPONENT: ServicesSection
═══════════════════════════════════════════════════════════════ */
const ServicesSection = defineComponent({
  name: 'ServicesSection',
  setup() { useFadeIn(); return { services: DATA.services }; },
  template: `
    <section id="services">
      <div class="container">
        <div class="section-label">⚙️ What We Build</div>
        <h2 class="section-title">End-to-End Software<br>Development Services</h2>
        <p class="section-sub">From ideation to deployment — purpose-built digital products for real business problems.</p>

        <div class="services-grid fade-in">
          <div v-for="svc in services" :key="svc.title" class="service-card"
               :style="{ borderTopColor: svc.color + '55' }">
            <div class="service-icon"
                 :style="{ background: svc.color+'18', border:'1px solid '+svc.color+'35' }">
              {{ svc.icon }}
            </div>
            <div class="service-arrow">→</div>
            <h3>{{ svc.title }}</h3>
            <p>{{ svc.desc }}</p>
            <div class="service-tags">
              <span v-for="t in svc.tags" :key="t" class="tag"
                    :style="{ background:svc.color+'15', color:svc.color, border:'1px solid '+svc.color+'30' }">
                {{ t }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
});

/* ═══════════════════════════════════════════════════════════════
   COMPONENT: IndustriesSection
═══════════════════════════════════════════════════════════════ */
const IndustriesSection = defineComponent({
  name: 'IndustriesSection',
  setup() { useFadeIn(); return { industries: DATA.industries }; },
  template: `
    <section id="industries">
      <div class="container">
        <div class="section-label">🏭 Industries We Serve</div>
        <h2 class="section-title">Domain-Specific Solutions<br>for Every Business</h2>
        <p class="section-sub">We don't build generic software — every solution is crafted around your industry's real workflows.</p>

        <div class="industries-grid fade-in">
          <div v-for="ind in industries" :key="ind.name" class="industry-card">
            <div class="industry-bg" :style="{ background: ind.gradient }">{{ ind.emoji }}</div>
            <div class="industry-overlay"></div>
            <div class="industry-content">
              <span class="industry-tag" :style="{ background:ind.tagBg, color:ind.tagColor }">{{ ind.tag }}</span>
              <h3>{{ ind.name }}</h3>
              <p>{{ ind.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
});

/* ═══════════════════════════════════════════════════════════════
   COMPONENT: TrainingSection
═══════════════════════════════════════════════════════════════ */
const TrainingSection = defineComponent({
  name: 'TrainingSection',
  emits: ['enroll'],
  setup(_, { emit }) {
    useFadeIn();
    return {
      features:   DATA.trainingFeatures,
      highlights: DATA.programHighlights,
      courses:    DATA.courses,
      enroll:     course => emit('enroll', course),
    };
  },
  template: `
    <section id="training">
      <div class="container">
        <div class="training-intro">
          <div>
            <div class="section-label">🎓 IT Training Programs</div>
            <h2 class="section-title">Launch or Level-Up<br>Your Tech Career</h2>
            <p class="section-sub">
              Arambh Technologies offers job-ready training for students and working professionals —
              with live projects, expert mentors, and real placement support.
            </p>
            <div class="training-features">
              <div v-for="f in features" :key="f.title" class="training-feature">
                <div class="tf-icon">{{ f.icon }}</div>
                <div>
                  <div class="tf-title">{{ f.title }}</div>
                  <div class="tf-text">{{ f.text }}</div>
                </div>
              </div>
            </div>
          </div>
          <div class="highlight-card">
            <h4>Program Highlights</h4>
            <div v-for="h in highlights" :key="h.label" class="highlight-row">
              <span>{{ h.label }}</span>
              <span>{{ h.value }}</span>
            </div>
          </div>
        </div>

        <div class="courses-grid fade-in">
          <div v-for="course in courses" :key="course.title" class="course-card">
            <div class="course-header">
              <div class="course-icon"
                   :style="{ background:course.color+'18', border:'1px solid '+course.color+'35' }">
                {{ course.icon }}
              </div>
              <div>
                <h3>{{ course.title }}</h3>
                <div class="course-meta">{{ course.category }}</div>
              </div>
            </div>
            <div class="course-body">
              <p class="course-desc">{{ course.desc }}</p>
              <div class="course-details">
                <div class="course-detail">📅 {{ course.duration }}</div>
                <div class="course-detail">👥 {{ course.mode }}</div>
                <div class="course-detail">🏆 {{ course.cert }}</div>
              </div>
            </div>
            <div class="course-footer">
              <span class="course-level"
                    :style="{ background:course.levelBg, color:course.levelColor }">
                {{ course.level }}
              </span>
              <button class="enroll-btn" @click="enroll(course)">Enroll Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
});

/* ═══════════════════════════════════════════════════════════════
   COMPONENT: PortfolioSection
═══════════════════════════════════════════════════════════════ */
const PortfolioSection = defineComponent({
  name: 'PortfolioSection',
  setup() {
    useFadeIn();
    const activeFilter = ref('All');
    const visible = computed(() =>
      activeFilter.value === 'All'
        ? DATA.projects
        : DATA.projects.filter(p => p.category === activeFilter.value)
    );
    return { activeFilter, filters: DATA.portfolioFilters, visible };
  },
  template: `
    <section id="portfolio">
      <div class="container">
        <div class="section-label">💼 Our Work</div>
        <h2 class="section-title">Projects That Speak<br>for Themselves</h2>
        <p class="section-sub" style="margin-bottom:36px;">
          A growing portfolio of solutions built for real businesses across Bengaluru and beyond.
        </p>

        <div class="portfolio-filter">
          <button v-for="f in filters" :key="f" class="filter-btn"
                  :class="{ active: activeFilter === f }"
                  @click="activeFilter = f">{{ f }}</button>
        </div>

        <transition-group name="proj" tag="div" class="portfolio-grid fade-in">
          <div v-for="proj in visible" :key="proj.title" class="portfolio-card">
            <div class="portfolio-thumb" :style="{ background: proj.bgGradient }">
              {{ proj.emoji }}
              <div class="portfolio-overlay">
                <a :href="proj.link" class="portfolio-thumb-btn">View Case Study</a>
              </div>
            </div>
            <div class="portfolio-info">
              <div class="portfolio-info-top">
                <h3>{{ proj.title }}</h3>
                <span class="portfolio-cat">{{ proj.category }}</span>
              </div>
              <p class="portfolio-desc">{{ proj.desc }}</p>
              <div class="portfolio-tech">
                <span v-for="t in proj.tech" :key="t" class="tech-pill">{{ t }}</span>
              </div>
            </div>
          </div>
        </transition-group>
      </div>
    </section>
  `,
});

/* ═══════════════════════════════════════════════════════════════
   COMPONENT: WhyUsSection (new — Arambh specific)
═══════════════════════════════════════════════════════════════ */
const WhyUsSection = defineComponent({
  name: 'WhyUsSection',
  setup() { useFadeIn(); return { items: DATA.whyUs, brand: BRAND }; },
  template: `
    <section id="why-us" class="why-us-section">
      <div class="container">
        <div class="section-label">🌱 Why Arambh?</div>
        <h2 class="section-title">A New Beginning for<br>Your Business &amp; Career</h2>
        <p class="section-sub">
          We're a lean, focused team — which means faster delivery, direct communication,
          and pricing that works for startups and SMBs alike.
        </p>

        <div class="why-grid fade-in">
          <div v-for="item in items" :key="item.label" class="why-card">
            <div class="why-icon">{{ item.icon }}</div>
            <div class="why-stat">{{ item.stat }}</div>
            <div class="why-label">{{ item.label }}</div>
            <p class="why-desc">{{ item.desc }}</p>
          </div>
        </div>

        <div class="why-cta-strip fade-in">
          <div class="why-cta-text">
            <h3>Ready to start your digital journey?</h3>
            <p>Book a free 30-minute discovery call — no commitment required.</p>
          </div>
          <a href="#contact" class="btn btn-primary">Book a Free Call →</a>
        </div>
      </div>
    </section>
  `,
});

/* ═══════════════════════════════════════════════════════════════
   COMPONENT: AboutSection
═══════════════════════════════════════════════════════════════ */
const AboutSection = defineComponent({
  name: 'AboutSection',
  setup() { useFadeIn(); return { values: DATA.values, brand: BRAND }; },
  template: `
    <section id="about">
      <div class="container">
        <div class="about-grid fade-in">

          <div class="about-text">
            <div class="section-label">🙌 About {{ brand.name }}</div>
            <h2 class="section-title">{{ brand.tagline }}</h2>
            <p>
              <strong>{{ brand.name }}</strong> is a Bengaluru-based technology agency that
              helps restaurants, hospitals, salons, and retail businesses go digital — with
              custom-built software that fits their exact workflows.
            </p>
            <p>
              Beyond software, we run structured IT training programs to equip the next
              generation of engineers with the skills, real-world experience, and placement
              support they need to thrive in the industry.
            </p>
            <p style="color:var(--accent);font-style:italic;font-size:0.95rem;">
              "Every great company had an arambh — a beginning. Let this be yours."
            </p>
            <div class="about-values">
              <div v-for="v in values" :key="v.title" class="value-item">
                <div class="value-icon" :style="{ background: v.bg }">{{ v.icon }}</div>
                <div>
                  <div class="value-title">{{ v.title }}</div>
                  <div class="value-desc">{{ v.desc }}</div>
                </div>
              </div>
            </div>
          </div>

          <div class="about-visual">
            <div class="about-main-card">
              <img src="logo.svg" alt="Arambh Technologies logo" class="about-logo">
              <div style="font-family:'Syne',sans-serif;font-size:1.4rem;font-weight:800;">{{ brand.name }}</div>
              <div style="color:var(--text2);font-size:0.9rem;margin-top:6px;">{{ brand.tagline }}</div>
            </div>
            <div class="about-float about-float-bottom">
              <span style="font-size:24px;">📍</span>
              <div>
                <h5>Based in Bengaluru</h5>
                <p>Serving clients across India</p>
              </div>
            </div>
            <div class="about-float about-float-top">
              <div class="big-num">2024</div>
              <p>Founded with purpose</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  `,
});

/* ═══════════════════════════════════════════════════════════════
   COMPONENT: TestimonialsSection
═══════════════════════════════════════════════════════════════ */
const TestimonialsSection = defineComponent({
  name: 'TestimonialsSection',
  setup() {
    const doubled = [...DATA.testimonials, ...DATA.testimonials];
    return { doubled };
  },
  template: `
    <section id="testimonials">
      <div class="container">
        <div class="section-label">💬 Client Love</div>
        <h2 class="section-title">What Our Clients &amp; Students Say</h2>
        <p class="section-sub">Real results from real people — this is what Arambh Technologies means to them.</p>
      </div>
      <div class="testimonials-wrapper">
        <div class="testimonials-track">
          <div v-for="(t, i) in doubled" :key="i" class="testimonial-card">
            <div class="testimonial-stars">★★★★★</div>
            <p class="testimonial-text">"{{ t.text }}"</p>
            <div class="testimonial-author">
              <div class="author-avatar" :style="{ background: t.avatarBg }">{{ t.avatar }}</div>
              <div>
                <div class="author-name">{{ t.name }}</div>
                <div class="author-role">{{ t.role }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
});

/* ═══════════════════════════════════════════════════════════════
   COMPONENT: ContactSection
═══════════════════════════════════════════════════════════════ */
const ContactSection = defineComponent({
  name: 'ContactSection',
  setup() {
    useFadeIn();
    const form = ref({ firstName:'', lastName:'', email:'', phone:'', interest:'', message:'' });
    const submitting = ref(false);
    const formStatus = ref('');
    const formError  = ref('');

    function validate() {
      if (!form.value.firstName.trim()) return 'First name is required.';
      if (!form.value.lastName.trim())  return 'Last name is required.';
      if (!isEmail(form.value.email))   return 'Please enter a valid email address.';
      if (!form.value.message.trim())   return 'Please enter your message.';
      return null;
    }

    async function submit() {
      formStatus.value = '';
      const err = validate();
      if (err) { formStatus.value = 'error'; formError.value = err; return; }
      submitting.value = true;
      try {
        await saveToFirestore('contacts', { ...form.value, source: 'arambhtech.in' });
        formStatus.value = 'success';
        form.value = { firstName:'', lastName:'', email:'', phone:'', interest:'', message:'' };
      } catch (e) {
        formStatus.value = 'error';
        formError.value  = e.message || 'Something went wrong. Please try again.';
      } finally {
        submitting.value = false;
      }
    }

    return {
      form, submitting, formStatus, formError,
      contactInfo: DATA.contactInfo,
      interests:   DATA.interestOptions,
      brand:       BRAND,
      submit,
    };
  },
  template: `
    <section id="contact">
      <div class="container">
        <div class="section-label">📬 Start a Conversation</div>
        <h2 class="section-title">Let's Build Something<br>Great Together</h2>
        <p class="section-sub">Whether you have a project in mind or just want to explore — we'd love to hear from you.</p>

        <div class="contact-grid fade-in">

          <!-- Info side -->
          <div>
            <div class="contact-info-cards">
              <div v-for="ci in contactInfo" :key="ci.label" class="ci-card">
                <div class="ci-icon">{{ ci.icon }}</div>
                <div>
                  <div class="ci-label">{{ ci.label }}</div>
                  <div class="ci-value">{{ ci.value }}</div>
                  <div v-if="ci.sub" class="ci-sub">{{ ci.sub }}</div>
                </div>
              </div>
            </div>

            <div class="hours-card" style="margin-top:16px;">
              <h4>🕐 Office Hours</h4>
              <p>
                Mon – Fri &nbsp;&nbsp;: 9:00 AM – 6:30 PM<br>
                Saturday &nbsp;&nbsp;: 10:00 AM – 2:00 PM<br>
                Sunday &nbsp;&nbsp;&nbsp;: Closed
              </p>
            </div>

            <div class="social-strip">
              <p style="font-size:13px;color:var(--text2);margin-bottom:12px;">Follow us on</p>
              <div style="display:flex;gap:10px;">
                <a :href="brand.linkedin"  class="social-btn" target="_blank">in</a>
                <a :href="brand.twitter"   class="social-btn" target="_blank">𝕏</a>
                <a :href="brand.youtube"   class="social-btn" target="_blank">▶</a>
                <a :href="brand.instagram" class="social-btn" target="_blank">📸</a>
              </div>
            </div>
          </div>

          <!-- Form side -->
          <div class="contact-form">
            <h3>Send us a message</h3>

            <div class="form-row">
              <div class="form-group">
                <label>First Name *</label>
                <input v-model="form.firstName" type="text" class="form-control" placeholder="Rahul">
              </div>
              <div class="form-group">
                <label>Last Name *</label>
                <input v-model="form.lastName"  type="text" class="form-control" placeholder="Sharma">
              </div>
            </div>

            <div class="form-group">
              <label>Email Address *</label>
              <input v-model="form.email" type="email" class="form-control" placeholder="rahul@yourcompany.com">
            </div>

            <div class="form-group">
              <label>Phone Number</label>
              <input v-model="form.phone" type="tel" class="form-control" placeholder="+91 98765 43210">
            </div>

            <div class="form-group">
              <label>I'm interested in</label>
              <select v-model="form.interest" class="form-control form-select">
                <option value="">Select an option</option>
                <option v-for="opt in interests" :key="opt" :value="opt">{{ opt }}</option>
              </select>
            </div>

            <div class="form-group">
              <label>Your Message *</label>
              <textarea v-model="form.message" class="form-control"
                        placeholder="Tell us about your project, idea, or course interest..."></textarea>
            </div>

            <button class="submit-btn" @click="submit" :disabled="submitting">
              <span v-if="!submitting">Send Message ✉️</span>
              <span v-else>Sending… ⏳</span>
            </button>

            <transition name="fade">
              <div v-if="formStatus === 'success'" class="form-feedback success">
                ✅ Message received! We'll get back to you within 24 hours.
              </div>
              <div v-else-if="formStatus === 'error'" class="form-feedback error">
                ⚠️ {{ formError }}
              </div>
            </transition>
          </div>
        </div>
      </div>
    </section>
  `,
});

/* ═══════════════════════════════════════════════════════════════
   COMPONENT: FooterComponent
═══════════════════════════════════════════════════════════════ */
const FooterComponent = defineComponent({
  name: 'FooterComponent',
  setup() {
    return { brand: BRAND, links: DATA.footerLinks };
  },
  template: `
    <footer>
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <div class="logo" style="margin-bottom:14px;">
              <img src="logo.svg" alt="Arambh Technologies logo" class="logo-image">
              {{ brand.short }}<span class="logo-accent">.</span>
            </div>
            <p>{{ brand.tagline }}</p>
            <p style="margin-top:10px;">Custom software &amp; IT training for businesses and aspiring engineers across India.</p>
            <div class="footer-social">
              <a :href="brand.linkedin"  class="social-btn" target="_blank" title="LinkedIn">in</a>
              <a :href="brand.twitter"   class="social-btn" target="_blank" title="Twitter">𝕏</a>
              <a :href="brand.youtube"   class="social-btn" target="_blank" title="YouTube">▶</a>
              <a :href="brand.instagram" class="social-btn" target="_blank" title="Instagram">📸</a>
            </div>
          </div>

          <div v-for="(items, col) in links" :key="col" class="footer-col">
            <h4>{{ col }}</h4>
            <ul>
              <li v-for="item in items" :key="item"><a href="#">{{ item }}</a></li>
            </ul>
          </div>
        </div>

        <div class="footer-bottom">
          <p>© {{ brand.founded }} {{ brand.name }}. All rights reserved. · Bengaluru, India</p>
          <p>Built with ❤️ · {{ brand.tagline }}</p>
        </div>
      </div>
    </footer>
  `,
});

/* ═══════════════════════════════════════════════════════════════
   COMPONENT: EnrollModal
═══════════════════════════════════════════════════════════════ */
const EnrollModal = defineComponent({
  name: 'EnrollModal',
  props: { course: { type: Object, default: null } },
  emits: ['close'],
  setup(props, { emit }) {
    const form       = ref({ name:'', email:'', phone:'', background:'' });
    const submitting = ref(false);
    const status     = ref('');

    watch(() => props.course, () => {
      form.value = { name:'', email:'', phone:'', background:'' };
      status.value = '';
    });

    async function submit() {
      const { name, email, phone } = form.value;
      if (!name.trim() || !isEmail(email) || !phone.trim()) {
        status.value = 'error'; return;
      }
      submitting.value = true;
      status.value = '';
      try {
        await saveToFirestore('enrollments', {
          ...form.value,
          course:  props.course?.title,
          source:  'arambhtech.in',
        });
        status.value = 'success';
        form.value = { name:'', email:'', phone:'', background:'' };
      } catch (e) {
        status.value = 'error';
      } finally {
        submitting.value = false;
      }
    }

    return { form, submitting, status, backgrounds: DATA.enrollBackgrounds, submit, close: () => emit('close') };
  },
  template: `
    <transition name="fade">
      <div v-if="course" class="modal-backdrop" @click.self="close">
        <div class="modal-box">
          <div class="modal-header">
            <div>
              <div style="font-size:11px;color:var(--text2);text-transform:uppercase;letter-spacing:.1em;margin-bottom:4px;">Enroll Now</div>
              <h3>{{ course.title }}</h3>
            </div>
            <button class="modal-close" @click="close">✕</button>
          </div>

          <div class="course-info-strip">
            <span>📅 {{ course.duration }}</span>
            <span>👥 {{ course.mode }}</span>
            <span>🏆 {{ course.cert }}</span>
          </div>

          <div class="form-group">
            <label>Full Name *</label>
            <input v-model="form.name" type="text" class="form-control" placeholder="Your full name">
          </div>
          <div class="form-group">
            <label>Email Address *</label>
            <input v-model="form.email" type="email" class="form-control" placeholder="your@email.com">
          </div>
          <div class="form-group">
            <label>Phone Number *</label>
            <input v-model="form.phone" type="tel" class="form-control" placeholder="+91 XXXXX XXXXX">
          </div>
          <div class="form-group">
            <label>Your Background</label>
            <select v-model="form.background" class="form-control form-select">
              <option value="">Select your background</option>
              <option v-for="b in backgrounds" :key="b" :value="b">{{ b }}</option>
            </select>
          </div>

          <button class="submit-btn" @click="submit" :disabled="submitting">
            <span v-if="!submitting">Submit Enrollment 🎓</span>
            <span v-else>Submitting… ⏳</span>
          </button>

          <transition name="fade">
            <div v-if="status === 'success'" class="form-feedback success" style="margin-top:16px;">
              ✅ You're enrolled! Our team will contact you within 24 hours.
            </div>
            <div v-else-if="status === 'error'" class="form-feedback error" style="margin-top:16px;">
              ⚠️ Please fill all required fields with valid information.
            </div>
          </transition>
        </div>
      </div>
    </transition>
  `,
});

/* ═══════════════════════════════════════════════════════════════
   ROOT APP
═══════════════════════════════════════════════════════════════ */
const App = defineComponent({
  name: 'App',
  components: {
    NavbarComponent,
    HeroSection,
    ServicesSection,
    IndustriesSection,
    TrainingSection,
    PortfolioSection,
    WhyUsSection,
    AboutSection,
    TestimonialsSection,
    ContactSection,
    FooterComponent,
    EnrollModal,
  },
  setup() {
    const activeSection = ref('home');
    const enrollCourse  = ref(null);

    function onScroll() {
      const ids = ['home','services','industries','training','portfolio','why-us','about','contact'];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const { top, bottom } = el.getBoundingClientRect();
        if (top <= 130 && bottom >= 130) { activeSection.value = id; break; }
      }
    }

    onMounted(()  => window.addEventListener('scroll', onScroll, { passive: true }));
    onUnmounted(() => window.removeEventListener('scroll', onScroll));

    return {
      activeSection,
      enrollCourse,
      handleNavigate: id => { activeSection.value = id; },
      openEnroll:     course => { enrollCourse.value = course; },
      closeEnroll:    ()     => { enrollCourse.value = null;   },
    };
  },
  template: `
    <div>
      <NavbarComponent    :activeSection="activeSection" @navigate="handleNavigate" />
      <HeroSection />
      <ServicesSection />
      <IndustriesSection />
      <TrainingSection    @enroll="openEnroll" />
      <PortfolioSection />
      <WhyUsSection />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
      <FooterComponent />
      <EnrollModal        :course="enrollCourse" @close="closeEnroll" />
    </div>
  `,
});

createApp(App).mount('#app');
