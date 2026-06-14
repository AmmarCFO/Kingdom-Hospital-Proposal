import { useState, FormEvent } from "react";
import { 
  Languages, 
  MapPin, 
  Clock, 
  Building, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  Calendar, 
  ChevronDown, 
  ChevronUp, 
  Wifi, 
  Droplets, 
  Zap, 
  Shield, 
  Heart, 
  Info, 
  Calculator, 
  FileText, 
  Users, 
  Sparkles, 
  Check, 
  Phone, 
  Mail, 
  X,
  Compass,
  Map,
  BadgeAlert,
  MessageCircle
} from "lucide-react";
import { translations } from "./translations";

export default function App() {
  const [lang, setLang] = useState<"ar" | "en">("ar");
  const t = translations[lang];
  const isRTL = lang === "ar";

  // State for interactive calculator
  const [units, setUnits] = useState<number>(158);
  const maxNurses = units * 2;

  // Standard Package Calculations
  const perNurseMonth = 1321;
  const perNurseYear = 15850;
  const perUnitMonth = 2642;
  const perUnitYear = 31700;
  const totalAnnual = units * perUnitYear;

  // State for FAQ accordion
  const [openFaq, setOpenFaq] = useState<number[]>([]);

  const toggleFaq = (index: number) => {
    if (openFaq.includes(index)) {
      setOpenFaq(openFaq.filter((i) => i !== index));
    } else {
      setOpenFaq([...openFaq, index]);
    }
  };

  // State for Unit Photo gallery mockup tab
  const [activeTab, setActiveTab] = useState<number>(0);
  const layoutTabs = [
    {
      titleAr: "جناح نوم ثنائي مؤثث",
      titleEn: "Furnished Double Bedroom",
      descAr: "غرفة مجهزة بسريرين فرديين مريحين، خزانة ملابس منفصلة لكل ممرضة، منطقة مكتبية للدراسة، ومقاعد مريحة.",
      title: "double_room",
    },
    {
      titleAr: "المساحات المشتركة والمطبخ",
      titleEn: "Common Living & Kitchen",
      descAr: "مساحة متسعة مجهزة بثلاجة غسالة، ميكروويف، طاولة طعام مجهزة لتناول الوجبات، ومرافق ترفيهية جيدة الإضاءة.",
      title: "kitchen_living",
    },
    {
      titleAr: "ساحة الترفيه والمجمع",
      titleEn: "Recreation & Compound Court",
      descAr: "منطقة ترفيهية خارجية ومساحات خضراء لتخفيف أعباء العمل وممارسة الأنشطة الاجتماعية الرياضية.",
      title: "recreational_court",
    }
  ];

  // State for site-visit schedule dialog
  const [showVisitModal, setShowVisitModal] = useState<boolean>(false);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [visitForm, setVisitForm] = useState({
    name: "",
    title: "مستشفى المملكة / Kingdom Hospital",
    email: "",
    phone: "",
    date: "2026-06-20",
    notes: ""
  });

  const handleLangToggle = () => {
    setLang(lang === "ar" ? "en" : "ar");
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const resetForm = () => {
    setVisitForm({
      name: "",
      title: "مستشفى المملكة / Kingdom Hospital",
      email: "",
      phone: "",
      date: "2026-06-20",
      notes: ""
    });
    setFormSubmitted(false);
    setShowVisitModal(false);
  };

  const handleScheduleVisit = (pkg?: "standard" | "flexible" | "visit") => {
    let message = "";
    if (pkg === "standard") {
      message = lang === "ar"
        ? "مرحباً أ. ناصر (مدير العمليات)، نود الاستفسار وجدولة زيارة ميدانية للمجمع السكني وبحث اختيار الباقة الأساسية (التزام ٢٤ شهراً) لطاقم مستشفى المملكة."
        : "Hello Mr. Nasser (Director of Operations), we would like to inquire about scheduling a site visit and discussing the Standard Package (24-month commitment) for Kingdom Hospital nursing staff.";
    } else if (pkg === "flexible") {
      message = lang === "ar"
        ? "مرحباً أ. ناصر (مدير العمليات)، نود الاستفسار وجدولة زيارة ميدانية للمجمع السكني وبحث اختيار الباقة المرنة (التزام ١٢ شهراً) لطاقم مستشفى المملكة."
        : "Hello Mr. Nasser (Director of Operations), we would like to inquire about scheduling a site visit and discussing the Flexible Package (12-month commitment) for Kingdom Hospital nursing staff.";
    } else {
      message = lang === "ar"
        ? "مرحباً أ. ناصر (مدير العمليات)، نود الاستفسار وجدولة زيارة ميدانية لمجمع السكن بطاقم التمريض لمستشفى المملكة."
        : "Hello Mr. Nasser (Director of Operations), we would like to inquire and schedule a field visit for the Kingdom Hospital nursing staff housing compound.";
    }
    const whatsappUrl = `https://wa.me/966562797290?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div 
      className={`min-h-screen text-navy bg-light-bg antialiased selection:bg-gold selection:text-white transition-all duration-300`} 
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* BRAND & STICKY HEADER */}
      <header className="sticky top-0 z-40 bg-navy backdrop-blur-md border-b border-gold/20 shadow-luxury transition-all text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo & Branding */}
          <a href="#hero" className="flex items-center gap-3 group">
            {/* Real Styled SVG logo matching user image */}
            <div className="flex items-center gap-2">
              <svg width="42" height="42" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gold">
                <g>
                  {/* Upper loop/ribbon with central slit */}
                  <path d="M110 0 C70 0 45 40 45 80 L75 80 C75 55 90 30 110 30 C130 30 145 50 145 75 C145 120 110 160 110 160 L110 80 L140 80 C140 100 175 140 175 75 C175 35 150 0 110 0 Z" fill="#C8A45C" />
                  {/* Left parallelogram block */}
                  <path d="M22 153 L78 153 L96 95 L40 95 Z" fill="#C8A45C" />
                  {/* Right rounded block */}
                  <path d="M110 83 C110 83 145 95 155 120 C165 145 145 165 110 165 Z" fill="#C8A45C" />
                  {/* TM label */}
                  <text x="180" y="25" fill="#C8A45C" fontSize="18" fontWeight="bold" fontFamily="sans-serif">TM</text>
                </g>
              </svg>
              <div className={`flex flex-col leading-tight border-gold ${isRTL ? 'border-r-2 pr-3 mr-3 text-right' : 'border-l-2 pl-3 ml-3 text-left'}`}>
                <span className="heading-font font-bold text-xl sm:text-2xl text-white tracking-tight leading-none group-hover:text-gold transition-colors">
                  {lang === "ar" ? "مثوى" : "MATHWAA"}
                </span>
                <span className="text-[10px] text-gold font-medium tracking-widest mt-0.5 leading-none opacity-90 hidden sm:block">
                  {t.header.tagline}
                </span>
              </div>
            </div>
          </a>

          {/* Navigation & Language Toggle */}
          <div className="flex items-center gap-2 sm:gap-4">
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-white/80">
              <a href="#intro" className="hover:text-gold transition-colors">{t.header.navProposal}</a>
              <a href="#property" className="hover:text-gold transition-colors">{t.header.navProperty}</a>
              <a href="#pricing" className="hover:text-gold transition-colors">{t.header.navPricing}</a>
              <a href="#faq" className="hover:text-gold transition-colors">{t.header.navFaq}</a>
            </nav>

            <button 
              onClick={handleLangToggle}
              id="langToggleBtn"
              className="px-2.5 py-1.5 sm:px-4 sm:py-2 bg-white/10 hover:bg-white/20 border border-white/25 rounded-full text-[10px] sm:text-xs font-semibold flex items-center gap-1 sm:gap-2 transition-all text-white shrink-0"
            >
              <Languages className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold" />
              <span>{t.header.toggleLabel}</span>
            </button>

            <button 
              onClick={() => handleScheduleVisit("visit")}
              id="headerCtaBtn"
              className="hidden sm:inline-block bg-gold hover:bg-[#b18e47] text-white font-bold text-xs sm:text-sm px-4 py-2.5 rounded-lg shadow-luxury transition-all shrink-0"
            >
              {t.hero.ctaSchedule}
            </button>
          </div>
        </div>
      </header>

      {/* 1) HERO SECTION */}
      <section id="hero" className="relative bg-navy text-white overflow-hidden py-16 sm:py-24 lg:py-28">
        {/* Background visual arches */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="arch-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M30 0 C45 0 60 15 60 30 L60 60 L0 60 L0 30 C0 15 15 0 30 0 Z" fill="none" stroke="#C8A45C" strokeWidth="1.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#arch-pattern)" />
          </svg>
        </div>

        {/* Ambient Gradient Backdrop */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gold/10 blur-[150px] rounded-full pointer-events-none" />
        
        {/* Luxury Gold Circle Ornament */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full -mr-16 -mt-16 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Top Badges */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="bg-gold/20 text-gold text-xs font-semibold px-3 py-1.5 rounded-full border border-gold/30">
              {t.hero.badgePresentedBy}
            </span>
            <span className="bg-white/10 text-white/90 text-xs font-semibold px-3 py-1.5 rounded-full border border-white/20">
              {t.hero.badgePresentedTo}
            </span>
          </div>

          <div className="max-w-3xl">
            {/* Category Pill in Immersive Theme Style */}
            <div className="inline-flex items-center gap-1.5 bg-gold text-white text-[10px] font-bold uppercase px-3 py-1 rounded-full mb-4 shadow-luxury">
              <Sparkles className="w-3.5 h-3.5 animate-pulse" />
              {t.hero.categoryPill}
            </div>

            {/* Serif Heading */}
            <h1 className="heading-font text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-[1.15]">
              {t.hero.title}
            </h1>

            {/* Subtitle DESCRIPTION */}
            <p className="text-lg text-white/80 leading-relaxed mb-8 font-light max-w-2xl">
              {t.hero.subtitle}
            </p>

            {/* Document stats metadata */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10 max-w-2xl">
              <div className="bg-white/5 border border-white/10 px-4 py-3 rounded-lg flex items-center gap-2.5">
                <FileText className="w-5 h-5 text-gold shrink-0" />
                <div className="text-xs">
                  <p className="text-white/40 leading-none">{lang === "ar" ? "رمز المستند" : "Doc ID"}</p>
                  <p className="font-mono text-white/90 font-semibold mt-1">{t.hero.metaDocId}</p>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 px-4 py-3 rounded-lg flex items-center gap-2.5">
                <Clock className="w-5 h-5 text-gold shrink-0" />
                <div className="text-xs">
                  <p className="text-white/40 leading-none">{lang === "ar" ? "الالتزام" : "Commitment"}</p>
                  <p className="font-semibold text-white/95 mt-1">{t.hero.metaCommitment}</p>
                </div>
              </div>

              <div className="bg-white/5 border border-gold/30 gold-glow px-4 py-3 rounded-lg flex items-center gap-2.5">
                <Building className="w-5 h-5 text-gold shrink-0" />
                <div className="text-xs">
                  <p className="text-white/40 leading-none">{lang === "ar" ? "معدل الأسعار" : "Pricing Scale"}</p>
                  <p className="font-bold text-gold mt-1">{t.hero.metaPriceFrom}</p>
                </div>
              </div>
            </div>

            {/* CTA action Repeat */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button 
                onClick={() => handleScheduleVisit("visit")}
                id="heroApplyCta"
                className="bg-gold hover:bg-[#b18e47] text-white text-base font-bold px-8 py-4 rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                {t.hero.ctaSchedule}
              </button>
              <a 
                href="#pricing"
                className="border border-white/30 hover:border-white text-white font-medium px-6 py-4 rounded-xl text-center hover:bg-white/5 transition-all flex items-center justify-center gap-2"
              >
                <span>{lang === "ar" ? "استكشاف الباقات المالية" : "Explore Pricing Options"}</span>
                {isRTL ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
              </a>
            </div>

            <p className="text-white/40 text-xs mt-4 flex items-center gap-1.5 font-light">
              <Info className="w-3.5 h-3.5 shrink-0" />
              {t.hero.interactiveNotice}
            </p>
          </div>
        </div>
      </section>

      {/* 2) STATS BAND + INTRO */}
      <section id="intro" className="py-12 bg-white border-b border-navy/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Four Stat Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8 -mt-10 sm:-mt-20 lg:-mt-24 mb-12 relative z-20">
            
            {/* Stat 1 */}
            <div className="bg-white border border-gold/20 rounded-2xl p-4 sm:p-6 shadow-luxury hover:shadow-2xl transition-all relative overflow-hidden group">
              <div className={`absolute ${isRTL ? 'right-0' : 'left-0'} top-0 w-1.5 h-full bg-gold`} />
              <p className="text-2xl sm:text-4xl font-extrabold heading-font text-navy group-hover:text-gold transition-colors">
                {t.stats.unitsTitle}
              </p>
              <p className="text-[11px] sm:text-sm text-navy/60 font-semibold mt-1.5 sm:mt-2">
                {t.stats.unitsSub}
              </p>
            </div>

            {/* Stat 2 */}
            <div className="bg-white border border-gold/20 rounded-2xl p-4 sm:p-6 shadow-luxury hover:shadow-2xl transition-all relative overflow-hidden group">
              <div className={`absolute ${isRTL ? 'right-0' : 'left-0'} top-0 w-1.5 h-full bg-gold`} />
              <p className="text-2xl sm:text-4xl font-extrabold heading-font text-navy group-hover:text-gold transition-colors">
                {t.stats.nursesTitle}
              </p>
              <p className="text-[11px] sm:text-sm text-navy/60 font-semibold mt-1.5 sm:mt-2">
                {t.stats.nursesSub}
              </p>
            </div>

            {/* Stat 3 */}
            <div className="bg-white border border-gold/20 rounded-2xl p-4 sm:p-6 shadow-luxury hover:shadow-2xl transition-all relative overflow-hidden group">
              <div className={`absolute ${isRTL ? 'right-0' : 'left-0'} top-0 w-1.5 h-full bg-gold animate-pulse`} />
              <p className="text-xl sm:text-3xl font-extrabold heading-font text-navy group-hover:text-gold transition-colors">
                {t.stats.distanceTitle}
              </p>
              <p className="text-[11px] sm:text-sm text-navy/60 font-semibold mt-2 sm:mt-2.5">
                {t.stats.distanceSub}
              </p>
            </div>

            {/* Stat 4 */}
            <div className="bg-white border border-gold/20 rounded-2xl p-4 sm:p-6 shadow-luxury hover:shadow-2xl transition-all relative overflow-hidden group">
              <div className={`absolute ${isRTL ? 'right-0' : 'left-0'} top-0 w-1.5 h-full bg-gold`} />
              <p className="text-2xl sm:text-4xl font-extrabold heading-font text-navy group-hover:text-gold transition-colors">
                {t.stats.optionsTitle}
              </p>
              <p className="text-[11px] sm:text-sm text-navy/60 font-semibold mt-1.5 sm:mt-2">
                {t.stats.optionsSub}
              </p>
            </div>

          </div>

          {/* Intro description */}
          <div className="max-w-4xl mx-auto text-center py-4">
            <Compass className="w-10 h-10 text-gold mx-auto mb-4" />
            <p className="text-lg sm:text-xl text-navy/90 leading-relaxed font-light">
              {t.stats.introParagraph}
            </p>
          </div>

        </div>
      </section>

      {/* 3) TWO PRIORITIES */}
      <section className="py-16 bg-light-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <h2 className="heading-font text-2xl sm:text-3xl font-bold text-center text-navy mb-12">
            {t.priorities.sectionTitle}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Priority 1 (Navy Card) */}
            <div className="bg-navy text-white rounded-3xl p-8 sm:p-10 shadow-luxury border border-gold/25 flex flex-col justify-between hover:scale-[1.01] transition-all relative overflow-hidden">
              <div className="absolute -right-12 -bottom-12 w-44 h-44 bg-gold/15 rounded-full" />
              <div>
                <div className="w-12 h-12 bg-gold/20 text-gold border border-gold/40 rounded-full flex items-center justify-center mb-6">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="heading-font text-2xl font-bold mb-4">{t.priorities.proximityTitle}</h3>
                <p className="text-white/80 leading-relaxed font-light">{t.priorities.proximityDesc}</p>
              </div>
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-2 text-gold font-mono text-sm">
                <span>12 {lang === "ar" ? "عملاء" : "Minutes"}</span>
                <span className="text-white/30">•</span>
                <span>20 {lang === "ar" ? "دقيقة" : "Min drive"}</span>
              </div>
            </div>

            {/* Priority 2 (Cream Card) */}
            <div className="bg-cream text-navy rounded-3xl p-8 sm:p-10 shadow-luxury border border-gold/20 flex flex-col justify-between hover:scale-[1.01] transition-all relative overflow-hidden">
              <div className="absolute -right-12 -bottom-12 w-44 h-44 bg-navy/5 rounded-full" />
              <div>
                <div className="w-12 h-12 bg-navy/10 text-navy/80 rounded-full flex items-center justify-center mb-6">
                  <Calculator className="w-6 h-6 text-gold" />
                </div>
                <h3 className="heading-font text-2xl font-bold mb-4">{t.priorities.efficiencyTitle}</h3>
                <p className="text-navy/80 leading-relaxed font-light">{t.priorities.efficiencyDesc}</p>
              </div>
              <div className="mt-8 pt-6 border-t border-gold/30 flex items-center gap-2 text-gold font-mono text-sm">
                <span>{lang === "ar" ? "تبدأ من" : "Starts at"} 1,321 SAR</span>
                <span className="text-navy/20">•</span>
                <span>{lang === "ar" ? "شاملة الخدمات" : "Essential inclusive"}</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4) PROPERTY KEY FACTS (image placeholder LEFT, facts table RIGHT) */}
      <section id="property" className="py-16 bg-white border-y border-navy/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold font-semibold uppercase tracking-wider text-xs block mb-2">{lang === "ar" ? "مواصفات المجمع" : "Premises Scope"}</span>
            <h2 className="heading-font text-3xl font-bold text-navy">{t.property.sectionTitle}</h2>
            <p className="text-navy/60 mt-2">{t.property.sectionSub}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
            
            {/* Left - Visual mockup of Unit layouts (Placeholder Carousel Interactive) */}
            <div className="lg:col-span-6 flex flex-col bg-white rounded-3xl border border-gold/20 p-4 sm:p-6 shadow-luxury">
              <div className="flex items-center justify-between mb-4 border-b border-navy/5 pb-4">
                <span className="font-semibold text-sm text-navy">{t.property.photosLabel}</span>
                <span className="text-xs text-gold/90 font-mono flex items-center gap-1.5 bg-gold/10 px-2 py-1 rounded">
                  <span className="w-2 h-2 bg-gold rounded-full animate-ping" />
                  {lang === "ar" ? "حي العارض، شمال الرياض" : "Al Aarid, North Riyadh"}
                </span>
              </div>

              {/* Tabs for different visual renders */}
              <div className="flex gap-2 mb-4 overflow-x-auto pb-1.5 scrollbar-thin">
                {layoutTabs.map((tab, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTab(idx)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                      activeTab === idx 
                        ? "bg-gold text-white font-bold shadow-luxury" 
                        : "bg-navy/5 text-navy/70 hover:bg-gold/15"
                    }`}
                  >
                    {lang === "ar" ? tab.titleAr : tab.titleEn}
                  </button>
                ))}
              </div>

              {/* Interactive Virtual Blueprint Canvas */}
              <div className="relative flex-1 min-h-[300px] bg-navy rounded-2xl flex flex-col justify-between p-6 overflow-hidden text-white border border-gold/25 shadow-luxury">
                
                {/* Visual decoration circles */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gold/10 rounded-full -mr-12 -mt-12 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-gold/5 rounded-full -ml-8 -mb-8 pointer-events-none"></div>
                
                {/* SVG Blueprint grid background */}
                <div className="absolute inset-0 opacity-15 pointer-events-none">
                  <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#FFFFFF" strokeWidth="0.5" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                  </svg>
                </div>

                {/* Aesthetic label "UNIT PHOTOS PLACEHOLDER" */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <span className="w-2.5 h-2.5 bg-gold rounded-full" />
                    <span className="text-[10px] font-mono uppercase tracking-widest text-gold">{t.property.photosPlaceholder}</span>
                  </div>
                  <span className="text-[10px] font-mono text-white/40">{layoutTabs[activeTab].title.toUpperCase()} layout v2</span>
                </div>

                {/* Blueprint Render Graphic */}
                <div className="relative z-10 my-8 flex flex-col items-center text-center">
                  {/* Drawing corresponding to active layout */}
                  {activeTab === 0 && (
                    <div className="w-full max-w-sm border border-gold/30 p-4 rounded-xl bg-white/5 backdrop-blur-sm self-center">
                      <p className="text-xs text-gold font-bold mb-1">{lang === "ar" ? "مخطط سكن ثنائي الكادر" : "2-Nurse Staff Studio Layout"}</p>
                      <div className="grid grid-cols-2 gap-2 mt-3 text-[10px] text-white/70">
                        <div className="border border-white/10 p-2 rounded text-center">Bed A (بسرير أ)</div>
                        <div className="border border-white/10 p-2 rounded text-center">Bed B (بسرير ب)</div>
                        <div className="border border-white/10 p-2 rounded text-center">Private Bath (حمام خاص)</div>
                        <div className="border border-white/10 p-2 rounded text-center">Workdesk (مكتب دراسة)</div>
                      </div>
                      <p className="text-[11px] text-white/50 mt-3 font-light">{layoutTabs[0].descAr}</p>
                    </div>
                  )}

                  {activeTab === 1 && (
                    <div className="w-full max-w-sm border border-gold/30 p-4 rounded-xl bg-white/5 backdrop-blur-sm self-center">
                      <p className="text-xs text-gold font-bold mb-1">{lang === "ar" ? "المطبخ والخدمات الملحقة" : "Kitchen & Shared Facilities"}</p>
                      <div className="grid grid-cols-3 gap-2 mt-3 text-[10px] text-white/70">
                        <div className="border border-white/10 p-2 rounded">Kitchen Counter</div>
                        <div className="border border-white/10 p-2 rounded">Washing Corner</div>
                        <div className="border border-white/10 p-2 rounded">Dining space</div>
                      </div>
                      <p className="text-[11px] text-white/50 mt-3 font-light">{lang === "ar" ? "مجهزة بكامل الأجهزة الكهربائية عالية الجودة: غسالة أواني وملابس، ثلاجة، غلاية، فرن كهربائي وغيرها." : "Completely set up with essential kitchen products: washer/dryer, oven, dining tables, etc."}</p>
                    </div>
                  )}

                  {activeTab === 2 && (
                    <div className="w-full max-w-sm border border-gold/30 p-4 rounded-xl bg-white/5 backdrop-blur-sm self-center">
                      <p className="text-xs text-gold font-bold mb-1">{lang === "ar" ? "المجمع والأثنية الترفيهية" : "Compound Open Amenities"}</p>
                      <div className="grid grid-cols-2 gap-2 mt-3 text-[10px] text-white/70">
                        <div className="border border-white/10 p-2 rounded">Green Yard</div>
                        <div className="border border-white/10 p-2 rounded">Seating Lounge</div>
                      </div>
                      <p className="text-[11px] text-white/50 mt-3 font-light">{lang === "ar" ? "يوفر أثنية خارجية رحبة للجلوس وتبادل الأحاديث بعيداً عن ضغط العمل والورديات الشاقة." : "Offers visual greens, soft benches, and fresh air outside clinical settings."}</p>
                    </div>
                  )}
                </div>

                {/* Sub info */}
                <div className="relative z-10 flex items-center justify-between border-t border-white/10 pt-4 text-xs text-white/60">
                  <span className="font-light">{lang === "ar" ? "جودة التشطيب: ديلوكس" : "Finishing quality: Deluxe"}</span>
                  <span className="font-mono text-gold font-bold">MATHWAA PREMIUM</span>
                </div>
              </div>
            </div>

            {/* Right - Key Facts Table */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <h3 className="heading-font text-2xl font-bold text-navy mb-6">
                  {lang === "ar" ? "جدول المواصفات والخصائص المعمارية" : "Property Specifications"}
                </h3>

                <div className="border border-gold/20 rounded-2xl overflow-hidden bg-white shadow-luxury">
                  <div className="divide-y divide-navy/5">
                    
                    {/* Row 1 */}
                    <div className="flex flex-col sm:grid sm:grid-cols-2 p-4 gap-1 sm:gap-0 hover:bg-navy/[0.02] transition-colors">
                      <span className="text-sm text-navy/60 font-semibold">{t.property.facts.locationLabel}</span>
                      <span className="text-sm text-navy font-bold">{t.property.facts.locationValue}</span>
                    </div>

                    {/* Row 2 */}
                    <div className="flex flex-col sm:grid sm:grid-cols-2 p-4 gap-1 sm:gap-0 hover:bg-navy/[0.02] transition-colors">
                      <span className="text-sm text-navy/60 font-semibold">{t.property.facts.distanceLabel}</span>
                      <span className="text-sm text-navy font-bold">{t.property.facts.distanceValue}</span>
                    </div>

                    {/* Row 3 */}
                    <div className="flex flex-col sm:grid sm:grid-cols-2 p-4 gap-1 sm:gap-0 hover:bg-navy/[0.02] transition-colors">
                      <span className="text-sm text-navy/60 font-semibold">{t.property.facts.categoryLabel}</span>
                      <span className="text-sm text-navy font-bold">{t.property.facts.categoryValue}</span>
                    </div>

                    {/* Row 4 */}
                    <div className="flex flex-col sm:grid sm:grid-cols-2 p-4 gap-1 sm:gap-0 hover:bg-navy/[0.02] transition-colors">
                      <span className="text-sm text-navy/60 font-semibold">{t.property.facts.totalUnitsLabel}</span>
                      <span className="text-sm text-navy font-bold">{t.property.facts.totalUnitsValue}</span>
                    </div>

                    {/* Row 5 */}
                    <div className="flex flex-col sm:grid sm:grid-cols-2 p-4 gap-1 sm:gap-0 hover:bg-navy/[0.02] transition-colors">
                      <span className="text-sm text-navy/60 font-semibold">{t.property.facts.occupancyLabel}</span>
                      <span className="text-sm text-navy font-bold">{t.property.facts.occupancyValue}</span>
                    </div>

                    {/* Row 6 */}
                    <div className="flex flex-col sm:grid sm:grid-cols-2 p-4 gap-1 sm:gap-0 hover:bg-navy/[0.02] transition-colors">
                      <span className="text-sm text-navy/60 font-semibold">{t.property.facts.capacityLabel}</span>
                      <span className="text-sm text-gold font-extrabold">{t.property.facts.capacityValue}</span>
                    </div>

                  </div>
                </div>
              </div>

              {/* Maps Open Link */}
              <div className="mt-6">
                <a 
                  href="https://maps.google.com/?q=Al+Aarid+District+Riyadh" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-gold hover:text-navy bg-gold/10 hover:bg-gold/20 font-bold px-5 py-3 rounded-xl transition-all"
                >
                  <Map className="w-4 h-4" />
                  <span>{t.property.openInMaps}</span>
                </a>
                <span className="text-navy/40 text-[11px] block mt-1.5 mx-1 font-light">
                  {lang === "ar" ? "*(ملاحظة: هذا هو الرابط النموذجي لموقع السكن بحي العارض بالرياض)" : "*(Note: Real location in Al Aarid Al Riyadh coordinates)"}
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5) TWO PRICING OPTIONS (THE CENTERPIECE) */}
      <section id="pricing" className="py-20 bg-light-bg relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold font-bold tracking-widest text-xs uppercase bg-gold/10 px-3 py-1.5 rounded">{lang === "ar" ? "الهيكل والاستحقاق المالي" : "Financial Proposal"}</span>
            <h2 className="heading-font text-3xl sm:text-4xl font-bold text-navy mt-4">{t.pricing.sectionTitle}</h2>
            <p className="text-navy/60 mt-2 font-light">{t.pricing.sectionSub}</p>
          </div>

          <div className="max-w-md mx-auto">
            
            {/* CORE HOUSING PACKAGE CARD */}
            <div className="bg-navy text-white rounded-[32px] p-6 sm:p-10 shadow-luxury border-2 border-gold flex flex-col justify-between relative transform hover:scale-[1.01] transition-all">

              <div>
                <div className="flex items-start justify-between border-b border-white/10 pb-6 mb-6">
                  <div>
                    <h3 className="heading-font text-xl sm:text-2xl font-bold">{t.pricing.opt1Title}</h3>
                    <p className="text-gold text-xs font-semibold mt-1 flex items-center gap-1">
                      <Check className="w-3.5 h-3.5" />
                      {t.pricing.opt1Differentiator}
                    </p>
                  </div>
                  <div className="bg-white/10 text-white/95 text-[11px] px-3 py-1 rounded font-mono shrink-0">
                    MATHWAA-STD
                  </div>
                </div>

                {/* HERO PRICE: PER NURSE */}
                <div className="mb-6">
                  <p className="text-white/60 text-xs sm:text-sm font-semibold uppercase">{lang === "ar" ? "التكلفة التشغيلية لكل ممرضة شهريًا" : "Cost Per Nurse / Month"}</p>
                  <div className="flex items-baseline gap-1.5 mt-1.5">
                    <span className="text-4xl sm:text-6xl font-black heading-font text-gold">1,321</span>
                    <span className="text-sm font-semibold text-white/80">{lang === "ar" ? "ريال سعودي" : "SAR"}</span>
                  </div>
                  <p className="text-xs text-white/40 mt-1">
                    {lang === "ar" ? "يعادل" : "Equivalent to"} <span className="font-mono text-white/80">SAR 15,850</span> {lang === "ar" ? "لكل ممرضة سنويًا" : "per nurse / year"}
                  </p>
                </div>

                {/* SECONDARY PRICE: PER UNIT */}
                <div className="bg-white/5 border border-white/10 rounded-xl p-4 mb-6">
                  <div className="flex justify-between items-center text-xs text-white/50 mb-1">
                    <span>{lang === "ar" ? "كلفة الوحدة السكنية (الغرفة)" : "Cost Per Apartment Unit"}</span>
                    <span className="font-semibold text-white/70">{lang === "ar" ? "إشغال ثنائي" : "Double occupancy"}</span>
                  </div>
                  <div className="flex flex-col xs:flex-row justify-between xs:items-baseline gap-1">
                    <p className="text-sm sm:text-base text-white/90 font-bold">
                      <span className="text-gold font-mono font-black text-base sm:text-lg">2,642</span> {lang === "ar" ? "ريال / شهريًا" : "SAR / month"}
                    </p>
                    <p className="text-[11px] sm:text-xs font-mono text-white/70">
                      SAR 31,700 / {lang === "ar" ? "سنوياً" : "year"}
                    </p>
                  </div>
                </div>

                {/* Benefits Bullet Points */}
                <ul className="space-y-3.5 text-xs text-white/80 mb-8">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                    <span>{lang === "ar" ? "عقد تشغيلي مستدام ومستقر لمستشفى المملكة." : "High sustainable operational tenure stability for Kingdom Hospital."}</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                    <span>{lang === "ar" ? "الأقل تكلفة والأوفر ميزانية على المدى الطويل." : "Lowest financial overhead rate and highest visual cash utility conservation."}</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                    <span>{lang === "ar" ? "شامل تنظيف الصيانة والمياه والكهرباء والإنترنت والشركاء." : "Water, power, high-speed Wi-Fi & maintenance fully fixed."}</span>
                  </li>
                </ul>
              </div>

              <button 
                onClick={() => handleScheduleVisit("standard")}
                className="w-full bg-gold hover:bg-[#b18e47] text-white text-sm font-bold py-3 px-4 rounded-xl transition-all shadow-luxury mt-6"
              >
                {lang === "ar" ? "طلب الباقة السكنية الآن" : "Request Standard Package"}
              </button>

            </div>

          </div>

          <div className="text-center mt-8">
            <span className="inline-flex items-center gap-1.5 text-xs text-navy/55 bg-white/40 border border-navy/5 px-4 py-2 rounded-lg font-light shadow-sm">
              <BadgeAlert className="w-4 h-4 text-gold shrink-0" />
              {t.pricing.vatDisclaimer}
            </span>
          </div>

        </div>
      </section>

      {/* 5.5) INTERACTIVE BUDGET ESTIMATOR & CALCULATOR */}
      <section className="py-16 bg-white border-y border-navy/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto bg-white rounded-[32px] border border-gold/20 p-6 sm:p-10 shadow-luxury relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full pointer-events-none" />

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gold/10 text-gold flex items-center justify-center">
                <Calculator className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold heading-font text-navy">
                  {t.pricing.calculatorTitle}
                </h3>
                <p className="text-xs text-navy/50">{t.pricing.calculatorSub}</p>
              </div>
            </div>

            {/* Slider Controls */}
            <div className="space-y-6 mt-8">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-bold text-navy flex items-center gap-1">
                    {t.pricing.calcUnitsLabel}
                    <span className="bg-navy text-white text-xs px-2.5 py-0.5 rounded-full font-mono">{units} {lang === "ar" ? "وحدة" : "units"}</span>
                  </span>
                  <span className="text-xs text-navy/40 font-mono">{lang === "ar" ? "١٠ - ١٥٨ وحدة" : "10 - 158 units"}</span>
                </div>
                
                <input 
                  type="range" 
                  min="10" 
                  max="158"
                  value={units}
                  onChange={(e) => setUnits(Number(e.target.value))}
                  id="unitsCalcSlider"
                  className="w-full accent-gold bg-navy/10 rounded-lg h-2" 
                />
              </div>

              {/* Computed Capacity Banner */}
              <div className="bg-gold/10 border border-gold/20 rounded-xl p-3 flex items-center gap-2.5 text-xs text-navy">
                <Users className="w-4 h-4 text-gold shrink-0 animate-bounce" />
                <span className="font-medium">
                  {t.pricing.calcCapacityNotice.replace("{n}", maxNurses.toString())}
                </span>
              </div>

              {/* Calculations display */}
              <div className="pt-4 border-t border-navy/5">
                
                {/* Standard Card */}
                <div className="bg-navy text-white rounded-2xl p-6 shadow-luxury flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-2.5 mb-4">
                      <p className="text-xs font-bold text-white/75">{t.pricing.opt1Title}</p>
                      <span className="text-[10px] bg-gold text-white font-extrabold px-2.5 py-1 rounded uppercase shrink-0">
                        {lang === "ar" ? "باقة ٢٤ شهرًا" : "24-mo Commitment"}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                        <p className="text-[11px] text-white/50">{lang === "ar" ? "التكلفة الشهرية للمجمع:" : "Total Monthly Cost:"}</p>
                        <p className="text-xl sm:text-2xl font-black text-gold mt-1 font-mono">
                          SAR {(units * perUnitMonth).toLocaleString()}
                        </p>
                      </div>

                      <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                        <p className="text-[11px] text-white/50">{lang === "ar" ? "التكلفة الكلية السنوية للمجمع:" : "Total Annual Cost:"}</p>
                        <p className="text-xl sm:text-2xl font-black text-gold mt-1 font-mono">
                          SAR {totalAnnual.toLocaleString()}
                        </p>
                      </div>
                    </div>

                    <p className="text-[11px] text-white/40 mt-3 text-center sm:text-right">
                      {lang === "ar" 
                        ? "* تعادل هذه الباقة تكلفة سكنية سنوية متميزة ومستقرة لطاقمكم الطبي بالكامل." 
                        : "* This calculation offers a highly optimized corporate flat-rate residential budget with maximum long-term stability."}
                    </p>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 6) WHAT'S INCLUDED - ESSENTIAL SERVICES */}
      <section className="py-20 bg-light-bg border-b border-navy/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold font-bold text-xs uppercase tracking-wider">{lang === "ar" ? "المرفقات المادية الأساسية" : "Baseline Core Utilities"}</span>
            <h2 className="heading-font text-3xl font-bold text-navy mt-1.5">{t.services.essentialTitle}</h2>
            <p className="text-navy/60 mt-1">{t.services.essentialSub}</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {t.services.essentialItems.map((item, idx) => {
              const icons = [
                <Droplets className="w-4 h-4 sm:w-5 sm:h-5" />,
                <Zap className="w-4 h-4 sm:w-5 sm:h-5" />,
                <Wifi className="w-4 h-4 sm:w-5 sm:h-5" />,
                <Shield className="w-4 h-4 sm:w-5 sm:h-5" />,
                <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
              ];
              // On mobile (2 columns), let the 5th item take full width so the grid is perfectly balanced!
              const mdColSpan = idx === 4 ? "col-span-2 sm:col-span-1" : "";
              return (
                <div key={idx} className={`bg-white border border-gold/20 rounded-2xl p-4 sm:p-6 shadow-luxury hover:border-gold hover:shadow-xl transition-all ${mdColSpan}`}>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gold/10 text-gold rounded-full flex items-center justify-center mb-3 sm:mb-4">
                    {icons[idx] || <Check className="w-4 h-4" />}
                  </div>
                  <h4 className="heading-font font-bold text-navy mb-1.5 sm:mb-2 text-sm sm:text-base">{item.title}</h4>
                  <p className="text-[11px] sm:text-xs text-navy/60 leading-relaxed font-light">{item.desc}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 7) VALUE-ADDED SERVICES (No separate prices) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-gold font-bold text-xs uppercase tracking-widest">{lang === "ar" ? "رعاية فائقة وقيمة مضافة" : "Elite Value-Adds"}</span>
            <h2 className="heading-font text-3xl font-bold text-navy mt-1.5">{t.services.valueAddedTitle}</h2>
            <p className="text-navy/60 mt-1">{t.services.valueAddedSub}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {t.services.valueAddedItems.map((item, idx) => (
              <div key={idx} className="bg-light-bg rounded-2xl p-6 sm:p-7 border border-gold/20 shadow-luxury hover:border-gold hover:shadow-xl transition-all relative overflow-hidden group flex flex-col justify-between">
                <div>
                  <div className="absolute right-0 top-0 w-1.5 h-0 bg-gold transition-all group-hover:h-full" />
                  <h4 className="heading-font font-bold text-navy mb-2 text-lg flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-gold rounded-full shrink-0" />
                    {item.title}
                  </h4>
                  <p className="text-xs text-navy/60 leading-relaxed font-light">{item.desc}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-navy/5 flex items-center justify-between">
                  <span className="text-[10px] font-bold text-[#b18e47] bg-gold/10 px-2 py-0.5 rounded font-sans uppercase tracking-wider">
                    {lang === "ar" ? "تُسعَّر عند الطلب" : "Priced on request"}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-navy/40 text-xs font-light bg-light-bg inline-block px-5 py-2.5 rounded-full border border-navy/5">
              💡 {t.services.valueAddedSmallCaption}
            </p>
          </div>

        </div>
      </section>

      {/* 8) SINGLE SPECIFICATION & PRICING SUMMARY */}
      <section className="py-20 bg-light-bg border-t border-navy/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-font text-3xl font-bold text-navy">{t.pricing.comparisonTitle}</h2>
            <p className="text-navy/60 mt-2 font-light">{t.pricing.comparisonSub}</p>
          </div>

          <div className="max-w-2xl mx-auto bg-white rounded-3xl border border-gold/20 overflow-hidden shadow-luxury">
            
            {/* Single Column Specification Summary */}
            <div className="p-6 sm:p-10">
              <div className="flex items-center gap-3 border-b border-navy/5 pb-4 mb-6">
                <CheckCircle2 className="w-6 h-6 text-gold shrink-0" />
                <h3 className="heading-font text-lg font-bold text-navy">
                  {lang === "ar" ? "تفاصيل ومحددات الخدمة السكنية" : "Service Specifications & Pricing"}
                </h3>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                
                {/* 1. Commitment */}
                <div className="flex justify-between items-center py-3 border-b border-navy/5">
                  <span className="font-semibold text-navy/70 text-start">{t.pricing.tableRows.commitment}</span>
                  <span className="font-bold text-navy text-end">{t.pricing.tableRows.commitmentValue1}</span>
                </div>

                {/* 2. Cost Per Nurse Monthly */}
                <div className="flex justify-between items-center py-3 border-b border-navy/5">
                  <span className="font-semibold text-navy/70 text-start">{t.pricing.tableRows.nurseMonth}</span>
                  <span className="font-extrabold text-gold text-end">{lang === "ar" ? "١٬٣٢١ ريال" : "SAR 1,321"}</span>
                </div>

                {/* 3. Cost Per Nurse Annual */}
                <div className="flex justify-between items-center py-3 border-b border-navy/5">
                  <span className="font-semibold text-navy/70 text-start">{t.pricing.tableRows.nurseYear}</span>
                  <span className="font-bold text-navy text-end">{lang === "ar" ? "١٥٬٨٥٠ ريال" : "SAR 15,850"}</span>
                </div>

                {/* 4. Cost Per Apartment Unit Month */}
                <div className="flex justify-between items-center py-3 border-b border-navy/5">
                  <span className="font-semibold text-navy/70 text-start">{t.pricing.tableRows.unitMonth}</span>
                  <span className="font-bold text-navy text-end">{lang === "ar" ? "٢٬٦٤٢ ريال" : "SAR 2,642"}</span>
                </div>

                {/* 5. Cost Per Apartment Unit Year */}
                <div className="flex justify-between items-center py-3 border-b border-navy/5">
                  <span className="font-semibold text-navy/70 text-start">{t.pricing.tableRows.unitYear}</span>
                  <span className="font-bold text-navy text-end">{lang === "ar" ? "٣١٬٧٠٠ ريال" : "SAR 31,700"}</span>
                </div>

                {/* 6. Total Annual Price (158 units) */}
                <div className="flex justify-between items-center py-3.5 border-b border-navy/5 bg-gold/5 px-4 rounded-xl">
                  <span className="font-extrabold text-navy text-start">{t.pricing.tableRows.totalAnnual}</span>
                  <span className="font-black text-navy text-end">{t.pricing.tableRows.totalAnnualValue1}</span>
                </div>

                {/* 7. Essential Utilities */}
                <div className="flex justify-between items-center py-3 border-b border-navy/5">
                  <span className="font-semibold text-navy/70 text-start">{t.pricing.tableRows.essentialServices}</span>
                  <span className="font-bold text-gold text-end">✓ {lang === "ar" ? "مشمولة بالكامل" : "Fully Included"}</span>
                </div>

                {/* 8. Value-Added Services */}
                <div className="flex justify-between items-center py-3 border-b border-navy/5">
                  <span className="font-semibold text-navy/70 text-start">{t.pricing.tableRows.valueAddedServices}</span>
                  <span className="font-bold text-navy/60 text-end">{lang === "ar" ? "تُسعَّر عند الطلب" : "Priced on request"}</span>
                </div>

                {/* 9. VAT */}
                <div className="flex justify-between items-center py-3 text-red-600/90">
                  <span className="font-semibold text-start">{t.pricing.tableRows.vat}</span>
                  <span className="font-medium text-end">{t.pricing.tableRows.vatExcluded}</span>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 9) WHY MATHWAA (About) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-gold font-bold tracking-widest text-xs uppercase px-3.5 py-1.5 bg-cream/30 text-gold-hover rounded-full">{lang === "ar" ? "الشريك الاستراتيجي" : "Corporate Partner"}</span>
            <h2 className="heading-font text-3xl font-bold text-navy mt-4 mb-6">{t.about.sectionTitle}</h2>
            
            <p className="text-lg sm:text-xl text-navy/85 leading-relaxed font-light mb-8 max-w-3xl mx-auto">
              {t.about.body}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-2xl mx-auto border-t border-navy/5 pt-10 text-center">
              <div>
                <p className="text-3xl font-extrabold text-gold heading-font">2026</p>
                <p className="text-xs text-navy/50 font-semibold uppercase mt-1">{lang === "ar" ? "رؤية تشغيلية ممتدة" : "Operational Horizon"}</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-navy heading-font">{lang === "ar" ? "الرياض" : "Riyadh"}</p>
                <p className="text-xs text-navy/50 font-semibold uppercase mt-1">{lang === "ar" ? "الاستقرار والمقر" : "Headquarters Scope"}</p>
              </div>
              <div className="col-span-2 md:col-span-1">
                <p className="text-3xl font-extrabold text-gold heading-font">١٠٠٪</p>
                <p className="text-xs text-navy/50 font-semibold uppercase mt-1">{lang === "ar" ? "جودة مضمونة وموثقة" : "Deluxe Quality Rate"}</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 10) TERMS & CONDITIONS (Exactly five, listed in order) */}
      <section className="py-16 bg-cream border-t border-[#C8A45C]/35 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-full bg-navy/15 text-navy flex items-center justify-center">
              <FileText className="w-5 h-5 text-gold" />
            </div>
            <h2 className="heading-font text-2xl sm:text-3xl font-bold text-navy">
              {t.terms.sectionTitle}
            </h2>
          </div>

          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gold/20 shadow-sm">
            <div className="space-y-4 text-xs sm:text-sm text-navy/85 divide-y divide-navy/5">
              {t.terms.list.map((term, index) => (
                <div key={index} className="pt-3.5 first:pt-0 flex items-start gap-3 text-start">
                  <span className="w-6 h-6 rounded-full bg-gold/15 text-gold flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <p className="leading-relaxed font-bold text-navy/90">{term}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 11) FAQ SECTION (Accordion dropdowns) */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-16">
            <h2 className="heading-font text-3xl font-bold text-navy">{t.faq.sectionTitle}</h2>
            <p className="text-navy/60 mt-2 font-light">{t.faq.sectionSub}</p>
          </div>

          <div className="space-y-4">
            {t.faq.questions.map((faq, idx) => {
              const isOpen = openFaq.includes(idx);
              return (
                <div 
                  key={idx} 
                  className={`border rounded-2xl transition-all duration-300 ${
                    isOpen 
                      ? "border-gold bg-cream/20 shadow-luxury" 
                      : "border-gold/15 hover:border-gold bg-white hover:shadow-luxury"
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-start p-5 sm:p-6 flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-navy"
                  >
                    <span>{faq.q}</span>
                    <div className={`p-1 rounded-full bg-navy/5 ${isOpen ? "rotate-180 bg-gold/10 text-gold" : "text-navy/60"} transition-transform`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 text-xs sm:text-sm text-navy/75 leading-relaxed border-t border-navy/5 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 12) NEXT STEPS & CONTACT CARD + FOOTER */}
      <section className="py-20 bg-navy text-white relative overflow-hidden">
        
        {/* visual decoration shapes */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-gold/5 blur-[100px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="heading-font text-3xl font-bold">{t.nextSteps.sectionTitle}</h2>
          </div>

          {/* Three steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
            
            {/* Step 1 */}
            <div className="bg-white/5 border border-gold/25 rounded-[20px] p-6 shadow-luxury relative">
              <span className="absolute -top-4 right-6 bg-gold text-white text-[11px] font-extrabold px-3 py-1 rounded-full uppercase shadow-luxury">
                {lang === "ar" ? "أولاً" : "Step 01"}
              </span>
              <h4 className="heading-font font-bold text-lg text-white mb-3 mt-1">{t.nextSteps.step1Title}</h4>
              <p className="text-xs text-white/70 leading-relaxed font-light">{t.nextSteps.step1Desc}</p>
            </div>

            {/* Step 2 */}
            <div className="bg-white/5 border border-gold/25 rounded-[20px] p-6 relative">
              <span className="absolute -top-4 right-6 bg-gold text-white text-[11px] font-extrabold px-3 py-1 rounded-full uppercase shadow-luxury">
                {lang === "ar" ? "ثانياً" : "Step 02"}
              </span>
              <h4 className="heading-font font-bold text-lg text-white mb-3 mt-1">{t.nextSteps.step2Title}</h4>
              <p className="text-xs text-white/70 leading-relaxed font-light">{t.nextSteps.step2Desc}</p>
            </div>

            {/* Step 3 */}
            <div className="bg-white/5 border border-gold/25 rounded-[20px] p-6 relative">
              <span className="absolute -top-4 right-6 bg-gold text-white text-[11px] font-extrabold px-3 py-1 rounded-full uppercase shadow-luxury">
                {lang === "ar" ? "ثالثاً" : "Step 03"}
              </span>
              <h4 className="heading-font font-bold text-lg text-white mb-3 mt-1">{t.nextSteps.step3Title}</h4>
              <p className="text-xs text-white/70 leading-relaxed font-light">{t.nextSteps.step3Desc}</p>
            </div>

          </div>

          {/* Contact Representative Card */}
          <div className="max-w-2xl mx-auto bg-white text-navy rounded-3xl p-8 sm:p-10 shadow-luxury border border-gold/30">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-6 border-b border-navy/10 mb-6">
              
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gold/15 text-gold flex items-center justify-center font-bold text-lg">
                  {lang === "ar" ? "ن" : "N"}
                </div>
                <div>
                  <h4 className="heading-font font-extrabold text-navy text-lg">{lang === "ar" ? "الاستاذ ناصر - مدير العمليات" : "Mr. Nasser - Director of Operations"}</h4>
                  <p className="text-xs text-navy/55">{lang === "ar" ? "مدير العمليات والتشغيل المؤسسي" : "Director of Operations"}</p>
                </div>
              </div>

              <span className="bg-gold/10 text-gold text-xs font-bold px-3 py-1.5 rounded-full border border-gold/20">
                {lang === "ar" ? "مفوض تشغيلي معتمد" : "Authorized Representative"}
              </span>
            </div>

            {/* real details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="bg-[#F8F9FB] p-4 rounded-xl flex items-center gap-3 border border-navy/5">
                <div className="p-2 bg-white rounded-lg text-gold shadow-sm">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] text-navy/40 leading-none">{lang === "ar" ? "اتصال هاتفي مباشر" : "Direct Phone Call"}</p>
                  <a href={`tel:${t.contact.phone}`} className="font-mono text-xs sm:text-sm font-bold text-navy hover:text-gold transition-colors block mt-1">
                    {t.contact.phone}
                  </a>
                </div>
              </div>

              <div className="bg-[#F8F9FB] p-4 rounded-xl flex items-center gap-3 border border-navy/5">
                <div className="p-2 bg-white rounded-lg text-gold shadow-sm">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] text-navy/40 leading-none">{lang === "ar" ? "البريد الإلكتروني المعتمد" : "Corporate Email"}</p>
                  <a href={`mailto:${t.contact.email}`} className="font-mono text-xs sm:text-sm font-bold text-navy hover:text-gold transition-colors block mt-1">
                    {t.contact.email}
                  </a>
                </div>
              </div>

            </div>

            <div className="text-center mt-8">
              <button 
                onClick={() => handleScheduleVisit("visit")}
                className="inline-flex items-center gap-2 bg-gold hover:bg-[#b18e47] text-white font-bold px-6 py-3.5 rounded-xl transition-all shadow-md text-sm sm:text-base cursor-pointer"
              >
                <Calendar className="w-5 h-5" />
                <span>{lang === "ar" ? "طلب تنظيم زيارة المجمع السكني" : "Schedule Project Site Visit"}</span>
              </button>
            </div>
          </div>

          {/* Footer Text */}
          <footer className="mt-20 pt-8 border-t border-white/10 text-center text-white/55 text-xs sm:text-sm">
            <p className="font-medium tracking-tight mb-2">
              {t.contact.address}
            </p>
            <p className="text-white/30 text-[11px] mb-4">
              {t.contact.footerConfidential}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-white/40 max-w-4xl mx-auto mt-4 pt-4 border-t border-white/5">
              <p>© 2026 Mathwaa for Tourism Hostels. {lang === "ar" ? "جميع الحقوق محفوظة لمؤسسة مثوى للنزل السياحية." : "All rights reserved."}</p>
              <div className="flex gap-4">
                <a href="#hero" className="hover:text-gold transition-colors">{lang === "ar" ? "الأعلى" : "Back to top"}</a>
                <span>·</span>
                <span className="font-mono text-gold">CONFIDENTIAL B2B</span>
              </div>
            </div>
          </footer>

        </div>
      </section>

      {/* MODAL DIALOG - SCHEDULE SITE VISIT */}
      {showVisitModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            {/* Dark Backdrop */}
            <div onClick={() => setShowVisitModal(false)} className="fixed inset-0 transition-opacity bg-navy/85 backdrop-blur-sm" aria-hidden="true"></div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

            {/* Modal Body */}
            <div className={`inline-block align-bottom bg-white rounded-3xl text-left overflow-hidden shadow-2xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full ${isRTL ? "text-right" : "text-left"}`} dir={isRTL ? "rtl" : "ltr"}>
              
              <div className={`absolute top-4 ${isRTL ? "left-4" : "right-4"} z-10 font-mono`}>
                <button 
                   onClick={() => setShowVisitModal(false)}
                  className="p-1.5 rounded-full text-navy/45 hover:text-navy hover:bg-navy/5 transition-all"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 sm:p-8">
                
                {!formSubmitted ? (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    
                    <div className="flex items-center gap-3 border-b border-navy/5 pb-4 mb-4">
                      <div className="w-10 h-10 rounded-full bg-gold/15 text-gold flex items-center justify-center">
                        <Calendar className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-navy heading-font">
                          {lang === "ar" ? "جدولة زيارة تفقدية للمجمع" : "Schedule a Field Inspection"}
                        </h3>
                        <p className="text-xs text-navy/55">{lang === "ar" ? "مخصص لإدارة مستشفى المملكة والوفد المرافق" : "Dedicated to Kingdom Hospital management delegation"}</p>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-navy/70 mb-1.5">{lang === "ar" ? "الاسم الكريم:" : "Delegation Leader Name:"}</label>
                      <input 
                        type="text" 
                        required
                        value={visitForm.name}
                        onChange={(e) => setVisitForm({...visitForm, name: e.target.value})}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-navy/15 focus:border-gold outline-none text-sm transition-all focus:ring-2 focus:ring-gold/10" 
                        placeholder={lang === "ar" ? "أدخل اسم المنسق" : "e.g., Dr. Abdulrahman Al-Fahad"}
                        id="visitNameInput"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-navy/70 mb-1.5">{lang === "ar" ? "الجهة الطبية / المسمى:" : "Organization / Title:"}</label>
                      <input 
                        type="text" 
                        value={visitForm.title}
                        disabled
                        className="w-full px-3.5 py-2.5 rounded-xl border border-navy/10 bg-navy/5 text-navy/60 outline-none text-sm cursor-not-allowed" 
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-navy/70 mb-1.5">{lang === "ar" ? "البريد الإلكتروني المعتمد:" : "Official Email:"}</label>
                        <input 
                          type="email" 
                          required
                          value={visitForm.email}
                          onChange={(e) => setVisitForm({...visitForm, email: e.target.value})}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-navy/15 focus:border-gold outline-none text-sm transition-all" 
                          placeholder="name@kh.com.sa"
                          id="visitEmailInput"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-navy/70 mb-1.5">{lang === "ar" ? "رقم الجوال الفعال:" : "Active Mobile:"}</label>
                        <input 
                          type="tel" 
                          required
                          value={visitForm.phone}
                          onChange={(e) => setVisitForm({...visitForm, phone: e.target.value})}
                          className="w-full px-3.5 py-2.5 rounded-xl border border-navy/15 focus:border-gold outline-none text-sm transition-all" 
                          placeholder="+966 5x xxx xxxx"
                          id="visitPhoneInput"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-navy/70 mb-1.5">{lang === "ar" ? "تاريخ الزيارة المقترح:" : "Suggested Visit Date:"}</label>
                      <input 
                        type="date" 
                        required
                        value={visitForm.date}
                        onChange={(e) => setVisitForm({...visitForm, date: e.target.value})}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-navy/15 focus:border-gold outline-none text-sm" 
                        id="visitDateInput"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-navy/70 mb-1.5">{lang === "ar" ? "تفاصيل إضافية / متطلبات خاصة (اختياري):" : "Additional Special Requirements (Optional):"}</label>
                      <textarea 
                        value={visitForm.notes}
                        onChange={(e) => setVisitForm({...visitForm, notes: e.target.value})}
                        rows={2}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-navy/15 focus:border-gold outline-none text-sm resize-none" 
                        placeholder={lang === "ar" ? "مثال: رغبة في جولة خاصة للمرافق الترفيهية الفردية..." : "e.g., Private tour of the kitchen layouts requested"}
                      />
                    </div>

                    <div className="pt-4 flex items-center justify-end gap-3 border-t border-navy/5">
                      <button 
                        type="button" 
                        onClick={() => setShowVisitModal(false)}
                        className="px-4 py-2.5 bg-navy/5 text-navy/85 hover:bg-navy/10 rounded-xl text-xs font-bold transition-all"
                      >
                        {lang === "ar" ? "إلغاء الموعد" : "Cancel"}
                      </button>
                      <button 
                        type="submit" 
                        id="submitVisitBtn"
                        className="px-6 py-2.5 bg-gold hover:bg-[#b18e47] text-white rounded-xl text-xs font-bold shadow-md transition-all"
                      >
                        {lang === "ar" ? "تأكيد طلب الزيارة" : "Confirm Schedule"}
                      </button>
                    </div>

                  </form>
                ) : (
                  <div className="py-6 text-center space-y-4">
                    <div className="w-16 h-16 bg-gold/15 text-gold rounded-full flex items-center justify-center mx-auto text-3xl">
                      ✓
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-navy heading-font">
                        {lang === "ar" ? "تم استلام طلب الجدولة بنجاح!" : "Visit Scheduled Successfully!"}
                      </h3>
                      <p className="text-xs text-navy/60 leading-relaxed mt-2 max-w-sm mx-auto">
                        {lang === "ar" 
                          ? `شكرًا لك أ. ${visitForm.name}. لقد تم توثيق الموعد المقترح (${visitForm.date}). سيقوم مدير علاقة مستشفى المملكة لدى شركة مثوى بالتواصل الهاتفي معكم فورًا لتأكيد الترتيبات.`
                          : `Thank you, Mr. ${visitForm.name}. Your proposed inspection date (${visitForm.date}) has been logged. Our Kingdom Hospital key account manager will call you shortly today.`}
                      </p>
                    </div>

                    <button 
                      onClick={resetForm}
                      className="px-6 py-2.5 bg-navy text-white text-xs font-bold rounded-xl shadow-sm hover:bg-gold transition-all"
                    >
                      {lang === "ar" ? "العودة للمقترح المالي" : "Return to Proposal"}
                    </button>
                  </div>
                )}

              </div>

            </div>
          </div>
        </div>
      )}

      {/* Floating WhatsApp Button */}
      <a
        href={`https://wa.me/966562797290?text=${encodeURIComponent(
          lang === "ar"
            ? "مرحباً أ. ناصر (مدير العمليات)، نود الاستفسار وجدولة زيارة ميدانية لمجمع السكن بطاقم التمريض لمستشفى المملكة."
            : "Hello Mr. Nasser (Director of Operations), we would like to inquire and schedule a field visit for the Kingdom Hospital nursing staff housing compound."
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed bottom-6 ${isRTL ? "left-4 sm:left-6" : "right-4 sm:right-6"} z-50 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 font-bold text-sm sm:text-base border border-white/20 w-14 h-14 sm:w-auto sm:h-auto`}
        id="floatingWhatsappBtn"
      >
        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 shrink-0 animate-pulse" />
        <span className="hidden sm:inline">{lang === "ar" ? "جدول زيارتك عبر واتساب" : "Schedule via WhatsApp"}</span>
      </a>

    </div>
  );
}
