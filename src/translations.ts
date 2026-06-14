export interface TranslationDict {
  header: {
    tagline: string;
    toggleLabel: string;
    navProposal: string;
    navProperty: string;
    navPricing: string;
    navFaq: string;
  };
  hero: {
    badgePresentedBy: string;
    badgePresentedTo: string;
    categoryPill: string;
    title: string;
    subtitle: string;
    metaDocId: string;
    metaCommitment: string;
    metaPriceFrom: string;
    ctaSchedule: string;
    interactiveNotice: string;
  };
  stats: {
    unitsTitle: string;
    unitsSub: string;
    nursesTitle: string;
    nursesSub: string;
    distanceTitle: string;
    distanceSub: string;
    optionsTitle: string;
    optionsSub: string;
    introParagraph: string;
  };
  priorities: {
    sectionTitle: string;
    proximityTitle: string;
    proximityDesc: string;
    efficiencyTitle: string;
    efficiencyDesc: string;
  };
  property: {
    sectionTitle: string;
    sectionSub: string;
    photosLabel: string;
    photosPlaceholder: string;
    openInMaps: string;
    facts: {
      locationLabel: string;
      locationValue: string;
      distanceLabel: string;
      distanceValue: string;
      categoryLabel: string;
      categoryValue: string;
      totalUnitsLabel: string;
      totalUnitsValue: string;
      occupancyLabel: string;
      occupancyValue: string;
      capacityLabel: string;
      capacityValue: string;
    };
  };
  pricing: {
    sectionTitle: string;
    sectionSub: string;
    bestValueBadge: string;
    perNurseMonth: string;
    perNurseYear: string;
    perUnitMonth: string;
    perUnitYear: string;
    vatDisclaimer: string;
    opt1Title: string;
    opt1Differentiator: string;
    opt2Title: string;
    opt2Differentiator: string;
    comparisonTitle: string;
    comparisonSub: string;
    tableHeaders: {
      feature: string;
      opt1: string;
      opt2: string;
    };
    tableRows: {
      commitment: string;
      commitmentValue1: string;
      commitmentValue2: string;
      nurseMonth: string;
      nurseYear: string;
      unitMonth: string;
      unitYear: string;
      totalAnnual: string;
      totalAnnualValue1: string;
      totalAnnualValue2: string;
      essentialServices: string;
      valueAddedServices: string;
      vat: string;
      vatExcluded: string;
    };
    calculatorTitle: string;
    calculatorSub: string;
    calcUnitsLabel: string;
    calcCapacityNotice: string;
    calcAnnualCost: string;
    calcSavings: string;
    calcSelectPackage: string;
  };
  services: {
    essentialTitle: string;
    essentialSub: string;
    essentialItems: Array<{ title: string; desc: string }>;
    valueAddedTitle: string;
    valueAddedSub: string;
    valueAddedItems: Array<{ title: string; desc: string }>;
    valueAddedSmallCaption: string;
  };
  about: {
    sectionTitle: string;
    body: string;
  };
  terms: {
    sectionTitle: string;
    list: string[];
  };
  faq: {
    sectionTitle: string;
    sectionSub: string;
    questions: Array<{ q: string; a: string }>;
  };
  nextSteps: {
    sectionTitle: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
  };
  contact: {
    sectionTitle: string;
    title: string;
    role: string;
    phone: string;
    email: string;
    footerConfidential: string;
    address: string;
  };
}

export const translations: Record<"ar" | "en", TranslationDict> = {
  ar: {
    header: {
      tagline: "مثوى: حلول السكن المؤسسي",
      toggleLabel: "English",
      navProposal: "المقترح",
      navProperty: "العقار",
      navPricing: "أسعار الوحدات",
      navFaq: "الأسئلة الشائعة",
    },
    hero: {
      badgePresentedBy: "مقدَّم من مثوى لخدمات السكن المؤسسي",
      badgePresentedTo: "مقدَّم إلى مستشفى المملكة",
      categoryPill: "حل سكني مؤسسي مخصص للطاقم التمريضي",
      title: "سكن متكامل لطاقمكم التمريضي",
      subtitle: "وحدات مؤثثة في حي العارض بالرياض، مخصّصة لطاقم التمريض في مستشفى المملكة. ١٥٨ وحدة، إشغال ثنائي، عقد واحد ومشغّل واحد.",
      metaDocId: "MATHWAA-KINGDOM-2026",
      metaCommitment: "الالتزام ٢٤ شهرًا",
      metaPriceFrom: "تبدأ من ١٬٣٢١ ريال / ممرضة / شهريًا",
      ctaSchedule: "جدولة زيارة ميدانية",
      interactiveNotice: "عرض مالي تفاعلي ومقترح معتمد لمشروع إسكان الطواقم الطبية",
    },
    stats: {
      unitsTitle: "١٥٨",
      unitsSub: "وحدة مؤثثة مجهزة بالكامل",
      nursesTitle: "٣١٦",
      nursesSub: "ممرضة (السعة القصوى)",
      distanceTitle: "١٢ كم · ٢٠ دقيقة",
      distanceSub: "المسافة والزمن من مستشفى المملكة",
      optionsTitle: "٢٤",
      optionsSub: "شهرًا مدة الالتزام للتعاقد",
      introParagraph: "تقدّم مثوى لمستشفى المملكة حلاً سكنيًا متكاملاً لطاقم التمريض في حي العارض بالرياض: ١٥٨ وحدة مؤثثة بإشغال ثنائي (ممرضتان لكل وحدة)، بسعة إجمالية تصل إلى ٣١٦ ممرضة، تُدار بالكامل تحت عقد واحد ومشغّل واحد ونقطة تواصل واحدة. جميع الساكنين من طاقم التمريض لضمان الخصوصية والتجانس المجمعي.",
    },
    priorities: {
      sectionTitle: "ركائز القيمة الأساسية للمشروع",
      proximityTitle: "قرب الموقع الجغرافي",
      proximityDesc: "يبعد السكن ١٢ كم (نحو ٢٠ دقيقة) عن مستشفى المملكة، ليصل طاقمكم التمريضي إلى مقر العمل بسهولة ودون عناء التنقل والازدحامات اليومية.",
      efficiencyTitle: "كفاءة التكلفة لكل ممرضة",
      efficiencyDesc: "بفضل نموذج الإشغال الثنائي المتكامل، تبدأ التكلفة الفردية من ١٬٣٢١ ريال لكل ممرضة شهرياً شاملةً كافة الخدمات والتشغيل الأساسي.",
    },
    property: {
      sectionTitle: "تفاصيل العقار والمواصفات الفنية",
      sectionSub: "مجمع سكني مخصص ومجهز بالكامل لطاقم التمريض الخاص بمستشفى المملكة",
      photosLabel: "المعرض الافتراضي والمعاينة التفاعلية",
      photosPlaceholder: "صور الوحدات السكنية (مخطط نموذجي مؤثث)",
      openInMaps: "فتح موقع العقار في خرائط Google",
      facts: {
        locationLabel: "الموقع الجغرافي",
        locationValue: "حي العارض، الرياض",
        distanceLabel: "المسافة إلى مستشفى المملكة",
        distanceValue: "١٢ كم · نحو ٢٠ دقيقة",
        categoryLabel: "فئة الوحدة السكنية",
        categoryValue: "غرفة نوم مجهزة تكفي لشخصين",
        totalUnitsLabel: "إجمالي الوحدات المتوفرة",
        totalUnitsValue: "١٥٨ وحدة سكنية",
        occupancyLabel: "طبيعة الإشغال للوحدة",
        occupancyValue: "ثنائي (ممرضتان لكل وحدة)",
        capacityLabel: "الطاقة الاستيعابية القصوى",
        capacityValue: "٣١٦ ممرضة",
      },
    },
    pricing: {
      sectionTitle: "باقة السكن والحلول المالية",
      sectionSub: "نقدّم باقة سكنية متكاملة ذات هيكل تسعيري شفاف يركّز على الكفاءة وخفض التكاليف التشغيلية للمستشفى",
      bestValueBadge: "الباقة القياسية",
      perNurseMonth: "ريال / ممرضة / شهريًا",
      perNurseYear: "ريال / ممرضة / سنويًا",
      perUnitMonth: "ريال / وحدة / شهريًا",
      perUnitYear: "ريال / وحدة / سنويًا",
      vatDisclaimer: "جميع الأسعار المذكورة أعلاه لا تشمل ضريبة القيمة المضافة، وتُضاف فواتيرها تلقائيًا وفقًا للأنظمة والتعليمات الضريبية المعمول بها.",
      opt1Title: "الباقة القياسية الأساسية",
      opt1Differentiator: "التزام ٢٤ شهرًا (أعلى توفير مالي للمستشفى)",
      opt2Title: "",
      opt2Differentiator: "",
      comparisonTitle: "الملخص والبيان المالي للتعاقد",
      comparisonSub: "تفاصيل هيكل تسعير وتشغيل المجمع لعدد ١٥٨ وحدة سكنية مغطاة بالكامل",
      tableHeaders: {
        feature: "محددات الخدمة والمواصفات المالية",
        opt1: "الباقة القياسية (٢٤ شهرًا)",
        opt2: "",
      },
      tableRows: {
        commitment: "مدة الالتزام والتعاقد",
        commitmentValue1: "٢٤ شهرًا متواصلة",
        commitmentValue2: "",
        nurseMonth: "التكلفة لكل ممرضة (شهريًا)",
        nurseYear: "التكلفة لكل ممرضة (سنوياً)",
        unitMonth: "التكلفة للوحدة السكنية (شهريًا)",
        unitYear: "التكلفة للوحدة السكنية (سنويًا)",
        totalAnnual: "الإجمالي المالي السنوي لقاء ١٥٨ وحدة",
        totalAnnualValue1: "٥٬٠٠٨٬٦٠٠ ريال سعودي",
        totalAnnualValue2: "",
        essentialServices: "باقة الخدمات الأساسية والتشغيل",
        valueAddedServices: "خدمات إضافية (تُسعَّر عند الطلب)",
        vat: "ضريبة القيمة المضافة (VAT)",
        vatExcluded: "غير مشمولة (تُضاف قانونيًا)",
      },
      calculatorTitle: "مستكشف التكلفة التقديرية التفاعلي",
      calculatorSub: "قم بتعديل عدد الغرف لمعاينة الطاقة الاستيعابية والتكاليف المتوقعة مباشرةً للباقة القياسية",
      calcUnitsLabel: "عدد الوحدات السكنية المطلوبة:",
      calcCapacityNotice: "تستوعب هذه الوحدات ما يصل إلى {n} ممرضة (إشغال ثنائي)",
      calcAnnualCost: "التكلفة الكلية السنوية التقديرية للمجمع:",
      calcSavings: "",
      calcSelectPackage: "باقة ٢٤ شهراً التشغيلية المعتمدة",
    },
    services: {
      essentialTitle: "الخدمات الأساسية والتشغيل",
      essentialSub: "تشكّل البنية التحتية لرفاهية الساكنين ومشمولة بالكامل ضمن قيمة الإيجار الأساسية",
      essentialItems: [
        { title: "إمدادات المياه", desc: "تغطية كاملة لاستهلاك وإمدادات المياه النقية طوال فترة العقد." },
        { title: "الكهرباء والطاقة", desc: "استهلاك الكهرباء والخدمات الكهربائية مغطى لتجنب أي تكاليف متغيرة." },
        { title: "الاتصال بالإنترنت", desc: "شبكة إنترنت لاسلكي (Wi-Fi) عالية السرعة تغطي كامل مبنى السكن والوحدات." },
        { title: "تنظيف المرافق", desc: "خدمة تنظيف دورية للممرات الفائضة والمرافق المشتركة والواحات الخارجية." },
        { title: "صيانة الوحدات", desc: "صيانة دورية وقائية وإصلاح طارئ متكامل للوحدات والسباكة والتكييف." },
      ],
      valueAddedTitle: "خدمات إضافية (تُسعَّر عند الطلب)",
      valueAddedSub: "خدمات إضافية متاحة برسوم تُحدَّد عند الطلب.",
      valueAddedItems: [
        { title: "مدير علاقة مخصص", desc: "توفير نقطة اتصال رسمية ومباشرة مع مستشفى المملكة لمعالجة الطلبات بسرعة فائقة." },
        { title: "مدير مجمع مقيم", desc: "إشراف دائم لمدير مجمع مخصص على راحة الساكنين وإدارة شؤون الطاقم التمريضي اليومية." },
        { title: "جدولة وتنسيق النقل", desc: "التنسيق التشغيلي لدعم حركة تنقل الطاقم بالتعاون مجمعيًا لحفظ الالتزام بالورديات." },
        { title: "الفعاليات والتواصل الداخلي", desc: "ابتكار مبادرات مجتمعية وثقافية لتعزيز ألفة الساكنين وتخفيف وطأة العمل الطبي." },
        { title: "خدمة عملاء ٢٤/٧", desc: "قناة اتصال مفتوحة لتلقي شكاوى واقتراحات الطاقم الطبي وضمان استجابة عاجلة." },
        { title: "الأنشطة الترفيهية", desc: "تنظيم فعاليات وأنشطة رياضية وترفيهية دورية داخل ساحات المجمع." },
      ],
      valueAddedSmallCaption: "خدمات إضافية متاحة برسوم تُحدَّد عند الطلب.",
    },
    about: {
      sectionTitle: "عن شركة مثوى",
      body: "مثوى مؤسسة سعودية مقرّها الرياض، متخصصة في حلول السكن المؤسسي لقطاع الرعاية الصحية والقطاعات الحيوية الأخرى، لتضمن للجهات الحصول على نقطة تواصل واحدة وعقد واحد وفاتورة واحدة مهما كان حجم الكادر والتحديات اللوجستية.",
    },
    terms: {
      sectionTitle: "الشروط والأحكام الخاصة بالمقترح",
      list: [
        "يسري عرض السعر لمدة (٧) أيام من تاريخ إصداره.",
        "يشمل عرض السعر تقديم الخدمات الأساسية المرتبطة بالوحدات السكنية.",
        "لا يشمل عرض السعر ضريبة القيمة المضافة، وسيتم إضافتها وفقًا للأنظمة المعمول بها.",
        "الحد الأدنى لمدة التعاقد هو (١٢) شهرًا، وذلك وفقًا للأسعار المذكورة في هذا العرض.",
        "الأسعار المذكورة أعلاه مشروطة بسداد كامل قيمة الإيجار مقدمًا عند بداية العقد.",
      ],
    },
    faq: {
      sectionTitle: "الأسئلة الشائعة والاستفسارات",
      sectionSub: "الأجوبة الرسمية والشفافة حول طبيعة العقار، الشروط، والآلية التشغيلية المعتمدة",
      questions: [
        {
          q: "هل يمكن تعديل عدد الوحدات بعد التوقيع؟",
          a: "نعم، يخضع ذلك للمتوفر والاتفاق المتبادل بين الطرفين بموجب ملحق تعاقدي رسمي يعدل نطاق العمل والالتزامات المالية والضمانات المرتبطة به."
        },
        {
          q: "ما هي مدة الالتزام للتعاقد السكني؟",
          a: "الباقة الأساسية تشترط التزاماً تشغيلياً لمدة ٢٤ شهراً لضمان توفير أعلى كفاءة مالية وأقل كلفة لكل ممرضة (١٬٣٢١ ريال شهرياً)."
        },
        {
          q: "هل يمكن لممثلي مستشفى المملكة معاينة الوحدات والاطلاع عليها قبل التوقيع التشغيلي؟",
          a: "بالتأكيد، نرحب بكم وفريق العمل لزيارة المجمع ومعاينة الوحدات السكنية وجاهزية التأثيث والمرافق عبر زر جدولة الزيارة الميدانية لتنسيق الموعد الملائم."
        },
        {
          q: "متى يبدأ سكن الطاقم بعد اعتماد وتوقيع العقد الرسمي؟",
          a: "يمكن تسليم السكن وبدء الإشغال الفعلي للطاقم التمريضي خلال ٣٠ يوماً كحد أقصى من توقيع العقد وسداد الدفعة الإيجارية المتفق عليها مقدمًا."
        },
        {
          q: "هل تشمل الأسعار المعروضة ضريبة القيمة المضافة (VAT)؟",
          a: "لا، جميع الأسعار المعلنة مستبعدة من الضريبة؛ ويتم فرض ضريبة القيمة المضافة وتوريدها للجهات المعنية بمقدار ١٥٪ أو حسب النسبة القانونية المعتمدة وقت إصدار الفاتورة."
        }
      ],
    },
    nextSteps: {
      sectionTitle: "خطوات التنسيق والمضي قدمًا",
      step1Title: "١. جدولة زيارة ميدانية",
      step1Desc: "زيارة تفقدية للموقع المجمع في حي العارض بالرياض لمعاينة الوحدات المشطبة والمؤثثة على الطبيعة والالتقاء بطاقم التشغيل المقيم.",
      step2Title: "٢. تأكيد عدد الغرف والميزانية",
      step2Desc: "تأكيد العدد النهائي المطلوب من الوحدات السكنية، وتحديد تاريخ تدشين السكن الفعلي للتمريض.",
      step3Title: "٣. استلام مسودة العقد الرسمي",
      step3Desc: "يقوم الفريق القانوني لدى مثوى بإعداد وإرسال مسودة العقد الموحد للشراكة لاعتماده وتوقيعه والبدء في تجهيز الاستلام المجمعي.",
    },
    contact: {
      sectionTitle: "معلومات الاتصال وخاتمة المقترح",
      title: "إدارة علاقات الشركاء ومبيعات السكن",
      role: "مدير العمليات والتشغيل المؤسسي",
      phone: "+٩٦٦ ٥٦ ٢٧٩ ٧٢٩٠",
      email: "info@mathwaa.com",
      footerConfidential: "سري للغاية ومخصص لمستشفى المملكة حصرياً. يُحظر التداول الخارجي أو الاستنساخ دون إذن كتابي.",
      address: "مؤسسة مثوى للنزل السياحية، المملكة العربية السعودية، الرياض، حي العارض",
    },
  },
  en: {
    header: {
      tagline: "Mathwaa: Corporate Residential Solutions",
      toggleLabel: "العربية",
      navProposal: "Proposal",
      navProperty: "Property",
      navPricing: "Pricing Options",
      navFaq: "FAQ",
    },
    hero: {
      badgePresentedBy: "Presented by Mathwaa Corporate Residential Solutions",
      badgePresentedTo: "Presented to Kingdom Hospital",
      categoryPill: "Corporate Residential Solution for Nursing Staff",
      title: "Complete Housing for Your Nursing Staff",
      subtitle: "Furnished units in Al Aarid, Riyadh, dedicated to Kingdom Hospital's nursing staff. 158 units, double occupancy, one operator, one contract.",
      metaDocId: "MATHWAA-KINGDOM-2026",
      metaCommitment: "24-month commitment",
      metaPriceFrom: "Starts from SAR 1,321 / nurse / month",
      ctaSchedule: "Schedule a field visit",
      interactiveNotice: "B2B Interactive Pricing Proposal and Authorized Medical Housing Document",
    },
    stats: {
      unitsTitle: "158",
      unitsSub: "Fully furnished premium units ready",
      nursesTitle: "316",
      nursesSub: "Nurses (maximum capacity limit)",
      distanceTitle: "12 km · 20 mins",
      distanceSub: "Distance & travel time from Kingdom Hospital",
      optionsTitle: "24",
      optionsSub: "Months contract commitment duration",
      introParagraph: "Mathwaa offers Kingdom Hospital a complete residential solution for nursing staff in Al Aarid, Riyadh: 158 furnished units at double occupancy (two nurses per unit), a total capacity of up to 316 nurses, managed end-to-end under a single contract, a single operator, and a single point of contact. All residents are exclusively nursing staff to maintain privacy and community cohesion.",
    },
    priorities: {
      sectionTitle: "Key Strategic Pillars",
      proximityTitle: "Proximity & Convenience",
      proximityDesc: "The accommodation is located just 12 km (about 20 minutes) from Kingdom Hospital, ensuring your nursing staff can travel with minimal stress and commute easily.",
      efficiencyTitle: "Cost Efficiency per Nurse",
      efficiencyDesc: "Thanks to modular double occupancy, individual pricing starts at a highly optimized rate of SAR 1,321 per nurse per month, which includes all essential operational costs.",
    },
    property: {
      sectionTitle: "Property Specifications & Assets",
      sectionSub: "Custom residential compound fully designated and optimized for Kingdom Hospital's nurses",
      photosLabel: "Virtual Gallery & Inspection",
      photosPlaceholder: "Residential unit photos (standard furnished bedroom layout)",
      openInMaps: "Open Location in Google Maps",
      facts: {
        locationLabel: "Location / Address",
        locationValue: "Al Aarid district, Riyadh",
        distanceLabel: "Distance to Kingdom Hospital",
        distanceValue: "12 km · approx. 20 minutes",
        categoryLabel: "Unit Classification",
        categoryValue: "Furnished bedroom for two persons",
        totalUnitsLabel: "Total Available Units",
        totalUnitsValue: "158 housing units",
        occupancyLabel: "Occupancy Type",
        occupancyValue: "Double (two nurses per unit)",
        capacityLabel: "Total Maximum Capacity",
        capacityValue: "316 nurses",
      },
    },
    pricing: {
      sectionTitle: "Residential Package & Financials",
      sectionSub: "We present our complete standard residential package with a flat and transparent pricing layout designed to maximize your healthcare operational efficiency.",
      bestValueBadge: "Standard Package",
      perNurseMonth: "SAR / nurse / month",
      perNurseYear: "SAR / nurse / year",
      perUnitMonth: "SAR / unit / month",
      perUnitYear: "SAR / unit / year",
      vatDisclaimer: "All listed prices exclude VAT, which will be computed and invoiced separately in compliance with official Saudi tax authority regulations.",
      opt1Title: "Standard Package",
      opt1Differentiator: "24-month commitment (Max cost savings)",
      opt2Title: "",
      opt2Differentiator: "",
      comparisonTitle: "Operational & Pricing Summary",
      comparisonSub: "Detailed monetary breakdown of the annual and individual occupancy scopes for all 158 covered units",
      tableHeaders: {
        feature: "Contract Terms & Price Parameters",
        opt1: "Standard Package (24-mo)",
        opt2: "",
      },
      tableRows: {
        commitment: "Commitment Term / Duration",
        commitmentValue1: "24 consecutive months",
        commitmentValue2: "",
        nurseMonth: "Cost per nurse (monthly)",
        nurseYear: "Cost per nurse (annually)",
        unitMonth: "Cost per apartment unit (monthly)",
        unitYear: "Cost per apartment unit (annually)",
        totalAnnual: "Total Annual Value (for all 158 units)",
        totalAnnualValue1: "SAR 5,008,600",
        totalAnnualValue2: "",
        essentialServices: "Essential Utilities & Services Pack",
        valueAddedServices: "Additional Services (Priced on Request)",
        vat: "Value Added Tax (VAT)",
        vatExcluded: "Excluded extra (Added legally)",
      },
      calculatorTitle: "Interactive Annual Cost Estimator",
      calculatorSub: "Change the number of units to instantly view the calculated capacity and estimate yearly budget options dynamically.",
      calcUnitsLabel: "Number of units requested:",
      calcCapacityNotice: "These units will optimally house up to {n} nurses (Double Occupancy)",
      calcAnnualCost: "Estimated Total Annual Community Cost:",
      calcSavings: "",
      calcSelectPackage: "Standard 24-Month Operational Package",
    },
    services: {
      essentialTitle: "Essential Operational Services",
      essentialSub: "Fundamental services defining residential well-being, integrated directly into the baseline lease structure",
      essentialItems: [
        { title: "Water Supply", desc: "Uninterrupted clean water utility coverage throughout the full contract duration." },
        { title: "Electricity & Power", desc: "Standard electricity connection fees and monthly loads fully aggregated under flat lease rates." },
        { title: "High-Speed Internet", desc: "Premium, building-wide Wi-Fi connection covering both bedrooms and joint outdoor spaces." },
        { title: "Janitorial Facilities", desc: "Regular cleaning of paths, stairways, waste dumps, and outdoor shared corridors." },
        { title: "Unit Maintenance", desc: "Comprehensive plumbing, electrical repair, and rapid diagnostic AC maintenance on demand." },
      ],
      valueAddedTitle: "Additional Services (Priced on Request)",
      valueAddedSub: "Additional services available for a fee, quoted on request.",
      valueAddedItems: [
        { title: "Dedicated Relationship Manager", desc: "A singular off-site corporate gateway for Kingdom Hospital administration to expedite tickets." },
        { title: "Residing Community Manager", desc: "Resident community leader living on-site to assist nurses and maintain daily rules and harmony." },
        { title: "Transport Coordination Logistics", desc: "Active management and alignment to support daily medical shift transit routes." },
        { title: "Internal Events & Comms", desc: "Carefully designed community social activities to ease long clinical working burdens." },
        { title: "24/7 Concierge & Support", desc: "Round-the-clock emergency desk accessible via digital tickets and mobile contacts." },
        { title: "Recreational & Well-being Sports", desc: "Periodic physical wellness events, outdoor socials, and holiday celebrations inside the secure compound." },
      ],
      valueAddedSmallCaption: "Additional services available for a fee, quoted on request.",
    },
    about: {
      sectionTitle: "About Mathwaa",
      body: "Mathwaa is a Riyadh-based Saudi company specializing in corporate residential solutions. We design and operate structured housing programs for organizations in healthcare and other vital industries to provide a single point of contact, a single contract, and a single consolidated invoice regardless of headcount or logistical challenges.",
    },
    terms: {
      sectionTitle: "Proposal Terms & Conditions",
      list: [
        "This quotation is valid for (7) days from the issue date.",
        "The quotation includes the essential services associated with the residential units.",
        "The quotation excludes VAT, which will be added per applicable regulations.",
        "The minimum contract term is (12) months, per the prices stated in this quotation.",
        "The above prices are conditional on full payment of the rent in advance at the start of the contract.",
      ],
    },
    faq: {
      sectionTitle: "Frequently Asked Questions",
      sectionSub: "Clear answers to critical operational, contract, and housing policies",
      questions: [
        {
          q: "What is the key commitment duration required?",
          a: "The Standard Package is based on a stable 24-month operational period, which guarantees the highly optimized pricing model of SAR 1,321/nurse/month."
        },
        {
          q: "Can Kingdom Hospital inspect the property before signing?",
          a: "Absolutely. We encourage representatives to visit the compound in Al Aarid, inspect rooms, furniture, and review facilities. Use the Schedule Visit button to book."
        },
        {
          q: "When can occupancy begin after contract signing?",
          a: "Active housing of medical staff can physically start within 30 days of contract execution and receipt of the upfront rent payment."
        },
        {
          q: "Do pricing schedules include VAT?",
          a: "No, all figures represent baseline prices. Active Saudi VAT (currently 15%) is added to the legal tax bills subsequently."
        }
      ],
    },
    nextSteps: {
      sectionTitle: "How to Proceed",
      step1Title: "1. Schedule a Site Visit",
      step1Desc: "Reserve a guided visit to Al Aarid compound to physically inspect layout models, furnished interiors, and operational setups.",
      step2Title: "2. Confirm Headcount & Setup",
      step2Desc: "Confirm the final requested unit headcount, custom requirements, and coordinate the precise contract launch dates.",
      step3Title: "3. Draft and Execute Contract",
      step3Desc: "Our legal department issues the standard corporate residential agreement for review, final sign-off, and launch.",
    },
    contact: {
      sectionTitle: "Contact Coordinates & Summary",
      title: "Partnership & Residential Growth Division",
      role: "Director of Operations",
      phone: "+966 56 279 7290",
      email: "info@mathwaa.com",
      footerConfidential: "Strictly Confidential, prepared for Kingdom Hospital exclusively. External trade or photocopying is strictly forbidden.",
      address: "Mathwaa Corporate Tourism Hostels - Kingdom of Saudi Arabia, Riyadh, Al Aarid District",
    },
  },
};
