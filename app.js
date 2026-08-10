/* ==========================================================================
   NEW MAHARASHTRA GARJANA - FULLY FUNCTIONAL NEWS PLATFORM ENGINE
   ========================================================================== */

// ── INITIAL DATASET (PERMANENT & LOCALSTORAGE PERSISTED) ──
const defaultNewsData = {
  ticker: [
    "महाराष्ट्र सरकारने नव्या सर्वसमावेशक विकास योजनेची घोषणा केली",
    "राज्यात मान्सूनचा जोरदार पुनरागमन; प्रमुख धरणे १००% भरण्याच्या मार्गावर",
    "मुंबई शेअर बाजारात ऐतिहासिक तेजी; सेन्सेक्स ८५,००० च्या नव्या उच्चांकावर",
    "पुण्यात नव्या मेट्रो मार्गाचे मुख्यमंत्री व उपमुख्यमंत्र्यांच्या हस्ते भव्य उद्घाटन",
    "विधानसभेत क्रीडा धोरण आणि रोजगाराबाबत ऐतिहासिक विधेयक एकमताने मंजूर",
    "शेती क्षेत्रासाठी ५,००० कोटी रुपयांच्या विशेष अनुदानाची घोषणा"
  ],
  latest: [
    {
      id: 101,
      cat: 'महाराष्ट्र',
      title: 'महाराष्ट्रात नव्या विकास योजनांची मुख्यमंत्र्यांकडून घोषणा, राज्याचा कायापालट होणार',
      desc: 'राज्य सरकारने आज एक महत्त्वाकांक्षी विकास योजना जाहीर केली असून यामुळे लाखो नागरिकांना थेट लाभ होणार आहे. मुख्यमंत्र्यांनी पत्रकार परिषदेत सविस्तर माहिती दिली.',
      content: `<p>राज्य सरकारने आज महाराष्ट्रातील ग्रामीण व शहरी भागाचा कायापालट करण्यासाठी तब्बल १५,००० कोटी रुपयांच्या विशेष विकास आराखड्याची घोषणा केली आहे. मुख्यमंत्र्यांनी घेतलेल्या पत्रकार परिषदेत या योजनेचे मुख्य पैलू मांडले.</p>
      <p>या योजनेअंतर्गत रस्ते विकास, आरोग्य सुविधांमध्ये सुधारणा, रोजगार निर्मिती आणि कृषी क्षेत्रासाठी नवीन तंत्रज्ञानाचा वापर यावर विशेष भर दिला जाणार आहे. राज्यातील प्रत्येक जिल्ह्यासाठी स्वतंत्र विकास निधीची तरतूद करण्यात आली आहे.</p>
      <blockquote>"महाराष्ट्रातील प्रत्येक नागरिकापर्यंत विकासाची फळे पोहोचवणे हेच आमच्या सरकारचे मुख्य ध्येय आहे." — मुख्यमंत्री</blockquote>
      <p>विरोधी पक्षांनी देखील या योजनेचे स्वागत केले असून, योजनेची अंमलबजावणी पारदर्शक पद्धतीने व्हावी अशी अपेक्षा व्यक्त केली आहे.</p>`,
      time: '१० ऑगस्ट २०२६ • १०:३० AM',
      author: 'न्यू महाराष्ट्र गर्जना विशेष प्रतिनिधी',
      img: 'https://picsum.photos/800/480?random=101',
      isHero: true,
      isBreaking: true
    },
    {
      id: 102,
      cat: 'राजकारण',
      title: 'विधानसभेत विरोधकांचा जोरदार गदारोळ; महत्त्वाचे अर्थ विधेयक चर्चेविना मंजूर',
      desc: 'विधानसभेचे पावसाळी अधिवेशन सध्या चांगलेच तापले असून विरोधकांनी विविध मुद्द्यांवरून सरकारला घेरण्याचा प्रयत्न केला.',
      content: `<p>विधानसभेत आज सलग तिसऱ्या दिवशी विरोधकांनी विविध जनहितार्थ मुद्द्यांवरून जोरदार आंदोलन केले. गदारोळातच राज्य सरकारने चालू आर्थिक वर्षाचे महत्त्वाचे पुरवणी मागण्यांचे विधेयक मंजूर करून घेतले.</p><p>अध्यक्ष महोदयांनी सभागृहाचे कामकाज उद्यापर्यंत तहकूब केले आहे.</p>`,
      time: '१० ऑगस्ट २०२६ • ०९:१५ AM',
      author: 'राजकीय संपादक',
      img: 'https://picsum.photos/800/480?random=102',
      isHero: false,
      isBreaking: true
    },
    {
      id: 103,
      cat: 'मुंबई',
      title: 'मुंबईत नव्या सागरी किनाऱ्याच्या रस्त्याचे (Coastal Road) ३ रे टप्पे पूर्ण',
      desc: 'मुंबईतील वाहतूक कोंडीवर मात करण्यासाठी हा प्रकल्प अतिशय महत्त्वपूर्ण ठरणार असून प्रवासाचा वेळ ४५ मिनिटांनी कमी होणार आहे.',
      content: `<p>मुंबईच्या कोस्टल रोड प्रकल्पाचा तिसरा टप्पा आता वाहतुकीसाठी सज्ज झाला आहे. पालिका आयुक्तांनी दिलेल्या माहितीनुसार, या नवीन मार्गामुळे दक्षिण मुंबई आणि बांद्रा दरम्यानचा प्रवास अत्यंत जलद आणि सुखकर होणार आहे.</p>`,
      time: '१० ऑगस्ट २०२६ • ०८:०० AM',
      author: 'मुंबई प्रतिनिधी',
      img: 'https://picsum.photos/800/480?random=103',
      isHero: false,
      isBreaking: false
    },
    {
      id: 104,
      cat: 'क्रीडा',
      title: 'टी-२० मालिकेत भारताची ऑस्ट्रेलियावर ५ गडी राखून मात; रोहित शर्मा सामनावीर',
      desc: 'भारतीय संघाने उत्कृष्ट फलंदाजीच्या जोरावर ऑस्ट्रेलियाने दिलेले १९५ धावांचे आव्हान १७ षटकांतच लीलया पार केले.',
      content: `<p>मेलबर्न क्रिकेट ग्राऊंडवर खेळल्या गेलेल्या अटीतटीच्या सामन्यात भारताने ऑस्ट्रेलियाचा पराभव केला. कर्णधार रोहित शर्माने अवघ्या ४२ चेंडूंत ८५ धावांची धडाकेबाज खेळी केली.</p>`,
      time: '०९ ऑगस्ट २०२६ • १०:४५ PM',
      author: 'क्रीडा प्रतिनिधी',
      img: 'https://picsum.photos/800/480?random=104',
      isHero: false,
      isBreaking: false
    },
    {
      id: 105,
      cat: 'पुणे',
      title: 'पुण्यात आंतरराष्ट्रीय दर्जाचे नवीन आयटी पार्क उभारण्यास मंत्रिमंडळाची मंजुरी',
      desc: 'या प्रकल्पामुळे पुण्यातील सुमारे ५०,००० तरुण अभियंत्यांना रोजगाराच्या नवीन संधी उपलब्ध होतील.',
      content: `<p>पुण्यातील हिंजवडी टप्पा ४ जवळ आणखी एक विशाल आयटी पार्क उभारण्यात येणार आहे. विदेशी कंपन्यांनी यात सुमारे २,००० कोटींची गुंतवणूक करण्याची तयारी दर्शवली आहे.</p>`,
      time: '०९ ऑगस्ट २०२६ • ०६:३० PM',
      author: 'पुणे प्रतिनिधी',
      img: 'https://picsum.photos/800/480?random=105',
      isHero: false,
      isBreaking: false
    },
    {
      id: 106,
      cat: 'व्यापार',
      title: 'शेअर बाजारात विक्रमी तेजी; आयटी आणि बँक शेअर्समध्ये मोठी खरेदी',
      desc: 'परदेशी गुंतवणूकदारांनी भारतीय बाजारात पुन्हा मोठा विश्वास दाखवत जोरदार खरेदी सुरू केली आहे.',
      content: `<p>बॉम्बे स्टॉक एक्सचेंज (BSE) चे निर्देशांक आज ५०० अंकांनी वधारले. भारतीय अर्थव्यवस्थेच्या मजबूत पायाभूत स्थितीमुळे गुंतवणूकदार उत्साही आहेत.</p>`,
      time: '०९ ऑगस्ट २०२६ • ०४:१५ PM',
      author: 'अर्थशास्त्र विभाग',
      img: 'https://picsum.photos/800/480?random=106',
      isHero: false,
      isBreaking: false
    },
    {
      id: 107,
      cat: 'तंत्रज्ञान',
      title: 'भारतीय इस्रो (ISRO) ची नवी मोहीम यशस्वी; सूर्याचा अभ्यास करणारा उपग्रह स्थापित',
      desc: 'भारताच्या अंतराळ संशोधनात आणखी एक सुवर्ण अध्याय जोडला गेला असून जगभरातून कौतुक होत आहे.',
      content: `<p>भारतीय अंतराळ संशोधन संस्थेने आज सकाळी श्रीहरिकोटा येथून आपल्या शक्तिशाली रॉकेटच्या साहाय्याने सूर्य मोहिमेचा दुसरा टप्पा यशस्वीरीत्या पूर्ण केला.</p>`,
      time: '०९ ऑगस्ट २०२६ • ०१:२० PM',
      author: 'विज्ञान प्रतिनिधी',
      img: 'https://picsum.photos/800/480?random=107',
      isHero: false,
      isBreaking: false
    },
    {
      id: 108,
      cat: 'मनोरंजन',
      title: 'राष्ट्रीय चित्रपट पुरस्कारात मराठी चित्रपटाचा डंका; "मातीचा सुगंध" चित्रपटाला सर्वोत्कृष्ट पुरस्कार',
      desc: 'दिल्लीत आयोजित विशेष सोहळ्यात राष्ट्रपतींच्या हस्ते पुरस्कार प्रदान करण्यात आले.',
      content: `<p>मराठी चित्रपटसृष्टीसाठी आजचा दिवस अत्यंत अभिमानास्पद ठरला आहे. ग्रामीण पार्श्वभूमीवर आधारित दिग्दर्शक महेश मांजरेकरांच्या चित्रपटाला सुवर्णकमळ मिळाले.</p>`,
      time: '०८ ऑगस्ट २०२६ • ०८:५० PM',
      author: 'मनोरंजन विभाग',
      img: 'https://picsum.photos/800/480?random=108',
      isHero: false,
      isBreaking: false
    }
  ],
  maharashtra: [
    { id: 201, cat: 'महाराष्ट्र', title: 'नागपूर मेट्रोच्या दुसऱ्या टप्प्यासाठी १,५०० कोटींचा निधी मंजूर', time: '२ तासांपूर्वी', img: 'https://picsum.photos/400/260?random=201' },
    { id: 202, cat: 'महाराष्ट्र', title: 'कोकणात पर्यटन विकासासाठी हॉस्पिटॅलिटी धोरण लागू करणार', time: '४ तासांपूर्वी', img: 'https://picsum.photos/400/260?random=202' },
    { id: 203, cat: 'महाराष्ट्र', title: 'नाशिकमध्ये द्राक्ष बागायतदारांसाठी नवीन निर्यात अनुदान', time: '५ तासांपूर्वी', img: 'https://picsum.photos/400/260?random=203' },
    { id: 204, cat: 'महाराष्ट्र', title: 'छत्रपती संभाजीनगर येथे आंतरराष्ट्रीय ड्राय पोर्ट उभारणार', time: '६ तासांपूर्वी', img: 'https://picsum.photos/400/260?random=204' }
  ],
  politics: [
    { id: 301, cat: 'राजकारण', title: 'स्थानिक स्वराज्य संस्थांच्या निवडणुका लवकरच; राज्य निवडणूक आयोगाची तयारी', time: '१ तासापूर्वी', img: 'https://picsum.photos/400/260?random=301' },
    { id: 302, cat: 'राजकारण', title: 'महाआघाडी आणि महायुतीत जागावाटपाची चर्चा अंतिम टप्प्यात', time: '३ तासांपूर्वी', img: 'https://picsum.photos/400/260?random=302' },
    { id: 303, cat: 'राजकारण', title: 'राज्यपाल महोदयांची विविध पक्षांच्या ज्येष्ठ नेत्यांसोबत बैठक', time: '४ तासांपूर्वी', img: 'https://picsum.photos/400/260?random=303' },
    { id: 304, cat: 'राजकारण', title: 'नव्या पक्षाध्यक्षांची घोषणा; कार्यकर्त्यांमध्ये उत्साह', time: '७ तासांपूर्वी', img: 'https://picsum.photos/400/260?random=304' }
  ],
  sports: [
    { id: 401, cat: 'क्रीडा', title: 'आयपीएल (IPL 2026) साठी खेळाडूंचा लिलाव पुढील महिन्यात मुंबईत', time: '२ तासांपूर्वी', img: 'https://picsum.photos/400/260?random=401' },
    { id: 402, cat: 'क्रीडा', title: 'पुण्याच्या युवा कुस्तीपटूने आशियाई स्पर्धेत पटकावले सुवर्णपदक', time: '४ तासांपूर्वी', img: 'https://picsum.photos/400/260?random=402' },
    { id: 403, cat: 'क्रीडा', title: 'प्रो कबड्डी लीग: पुणेरी पलटनची शानदार घोडदौड सुरूच', time: '६ तासांपूर्वी', img: 'https://picsum.photos/400/260?random=403' }
  ],
  entertainment: [
    { id: 501, cat: 'मनोरंजन', title: 'झी मराठी पुरस्कार सोहळा: सर्वोत्कृष्ट मालिका म्हणून "तुझ्यात जीव रंगला" ची निवड', time: '३ तासांपूर्वी', img: 'https://picsum.photos/400/260?random=501' },
    { id: 502, cat: 'मनोरंजन', title: 'सुबोध भावे आणि मुक्ता बर्वे यांच्या नवीन नाटकाचा शुभारंभ', time: '५ तासांपूर्वी', img: 'https://picsum.photos/400/260?random=502' },
    { id: 503, cat: 'मनोरंजन', title: 'ओटीटी प्लॅटफॉर्मवर नव्या मराठी थ्रिलर वेब सिरीजचा जलवा', time: '८ तासांपूर्वी', img: 'https://picsum.photos/400/260?random=503' }
  ],
  videos: [
    { id: 601, title: 'मुख्यमंत्र्यांची विशेष मुलाखत - महाराष्ट्राच्या विकासाचा रोडमॅप', dur: '14:20', img: 'https://picsum.photos/400/250?random=601' },
    { id: 602, title: 'मुंबई लोकल ट्रेन अपडेट: नव्या एसी गाड्यांची सुरुवात', dur: '06:45', img: 'https://picsum.photos/400/250?random=602' },
    { id: 603, title: 'पुण्यातील मान्सूनचा मनमोहक व्ह्यू - विहंगम दृश्ये', dur: '04:15', img: 'https://picsum.photos/400/250?random=603' },
    { id: 604, title: 'क्रिकेट विश्लेषण: टी-२० मालिकेत भारताचा ऐतिहासिक विजय', dur: '18:30', img: 'https://picsum.photos/400/250?random=604' }
  ],
  photos: [
    { id: 701, caption: 'गेटवे ऑफ इंडिया आणि मुंबईतील मान्सूनचे विहंगम दृश्य', img: 'https://picsum.photos/400/300?random=701' },
    { id: 702, caption: 'पुण्यातील ऐतिहासिक शनिवारवाडा परिसर रोषणाईने उजळला', img: 'https://picsum.photos/400/300?random=702' },
    { id: 703, caption: 'कोकणातील निसर्गरम्य हिरवळ आणि धबधबे', img: 'https://picsum.photos/400/300?random=703' },
    { id: 704, caption: 'नागपुरातील जगप्रसिद्ध संत्रा बागांचा नयनरम्य नजराणा', img: 'https://picsum.photos/400/300?random=704' },
    { id: 705, caption: 'पंढरपूर आषाढी वारी: लाखो वारकऱ्यांचा अथांग भक्तिसागर', img: 'https://picsum.photos/400/300?random=705' }
  ]
};

// GLOBAL APP STATE
let appState = {
  news: null,
  activeCategory: 'सर्व',
  searchTerm: '',
  isAdminLoggedIn: false,
  commentsMap: {}
};

// ── LOCAL STORAGE ENGINE ──
function loadStateFromStorage() {
  try {
    const saved = localStorage.getItem('nmg_news_data');
    if (saved) {
      appState.news = JSON.parse(saved);
    } else {
      appState.news = JSON.parse(JSON.stringify(defaultNewsData));
      saveStateToStorage();
    }

    const savedComments = localStorage.getItem('nmg_comments_data');
    if (savedComments) {
      appState.commentsMap = JSON.parse(savedComments);
    }

    const adminSession = sessionStorage.getItem('nmg_admin_session');
    if (adminSession === 'true') {
      appState.isAdminLoggedIn = true;
    }
  } catch (e) {
    console.error('Error loading state:', e);
    appState.news = JSON.parse(JSON.stringify(defaultNewsData));
  }
}

function saveStateToStorage() {
  try {
    localStorage.setItem('nmg_news_data', JSON.stringify(appState.news));
  } catch (e) {
    console.error('Failed to save to localStorage:', e);
  }
}

function saveCommentsToStorage() {
  try {
    localStorage.setItem('nmg_comments_data', JSON.stringify(appState.commentsMap));
  } catch (e) {
    console.error('Failed to save comments:', e);
  }
}

// ── RENDER ENGINE ──

function renderAll() {
  renderTicker();
  renderHeroSection();
  renderLatestGrid();
  renderCategorySections();
  renderVideoGrid();
  renderPhotoGrid();
  updateCategoryStatusBar();
}

// 1. TICKER
function renderTicker() {
  const track = document.getElementById('tickerTrack');
  if (!track || !appState.news) return;

  const items = appState.news.ticker || defaultNewsData.ticker;
  const html = items.map(t => `
    <div class="ticker-item" onclick="openTickerArticle('${t.replace(/'/g, "\\'")}')">
      <span class="ticker-bullet">●</span>
      <span>${t}</span>
    </div>
  `).join('');

  // Duplicate for seamless infinite loop scroll
  track.innerHTML = html + html;
}

// 2. HERO SECTION
function renderHeroSection() {
  const heroCard = document.getElementById('heroCard');
  const sideContainer = document.getElementById('heroSideContainer');
  if (!appState.news) return;

  // Find hero article or fallback to first latest
  const allArticles = [...(appState.news.latest || [])];
  const heroArticle = allArticles.find(a => a.isHero) || allArticles[0];

  if (heroArticle && heroCard) {
    document.getElementById('heroImg').src = heroArticle.img;
    document.getElementById('heroCatBadge').textContent = heroArticle.cat || 'महाराष्ट्र';
    document.getElementById('heroTitle').textContent = heroArticle.title;
    document.getElementById('heroDesc').textContent = heroArticle.desc || heroArticle.title;
    document.getElementById('heroTime').textContent = `📅 ${heroArticle.time || '१० ऑगस्ट २०२६'}`;
    heroCard.onclick = () => openArticle(heroArticle.id);
  }

  // Render Side Stack (up to 4 items excluding hero)
  if (sideContainer) {
    const sideArticles = allArticles.filter(a => a.id !== heroArticle?.id).slice(0, 4);
    sideContainer.innerHTML = sideArticles.map(a => `
      <div class="side-news-card" onclick="openArticle(${a.id})">
        <img src="${a.img}" alt="${a.title}" loading="lazy">
        <div class="side-news-body">
          <span class="side-cat">${a.cat}</span>
          <h3>${a.title}</h3>
          <span class="side-time">${a.time}</span>
        </div>
      </div>
    `).join('');
  }
}

// 3. LATEST NEWS GRID
function renderLatestGrid() {
  const grid = document.getElementById('latestNewsGrid');
  if (!grid || !appState.news) return;

  let articles = [...(appState.news.latest || [])];

  // Filter if specific category or search active
  if (appState.activeCategory !== 'सर्व' && appState.activeCategory !== 'थेट') {
    articles = articles.filter(a => a.cat === appState.activeCategory);
  }

  if (appState.searchTerm) {
    const term = appState.searchTerm.toLowerCase();
    articles = articles.filter(a => 
      a.title.toLowerCase().includes(term) || 
      (a.desc && a.desc.toLowerCase().includes(term)) ||
      a.cat.toLowerCase().includes(term)
    );
  }

  if (articles.length === 0) {
    grid.innerHTML = `<div style="grid-column: 1/-1; padding: 40px; text-align: center; color: #64748B;">
      <h3>या वर्गात कोणतीही बातमी सापडली नाही.</h3>
      <p>कृपया वेगळा शोध शब्द वापरा किंवा सर्व बातम्या पाहा.</p>
    </div>`;
    return;
  }

  grid.innerHTML = articles.map((n, i) => `
    <div class="news-card fade-in" style="animation-delay:${i * 0.05}s" onclick="openArticle(${n.id})">
      <div class="news-card-img-wrap">
        <img class="news-card-img" src="${n.img}" alt="${n.title}" loading="lazy">
        <span class="news-card-cat">${n.cat}</span>
      </div>
      <div class="news-card-body">
        <h3>${n.title}</h3>
        <div class="news-card-meta">
          <span>🕒 ${n.time}</span>
          <span>👁️ ${Math.floor(100 + n.id * 12)} वाचले</span>
        </div>
      </div>
    </div>
  `).join('');
}

// 4. CATEGORY LIST SECTIONS (MAHARASHTRA, POLITICS, SPORTS, ENTERTAINMENT)
function renderCategorySections() {
  if (!appState.news) return;

  renderListContainer('maharashtraNews', appState.news.maharashtra || []);
  renderListContainer('politicsNews', appState.news.politics || []);
  renderListContainer('sportsNews', appState.news.sports || []);
  renderListContainer('entertainmentNews', appState.news.entertainment || []);
}

function renderListContainer(containerId, items) {
  const el = document.getElementById(containerId);
  if (!el) return;

  el.innerHTML = items.map((n, i) => `
    <div class="list-news-item fade-in" style="animation-delay:${i * 0.05}s" onclick="openArticle(${n.id})">
      <img class="list-news-img" src="${n.img}" alt="${n.title}" loading="lazy">
      <div class="list-news-body">
        <span class="list-news-cat">${n.cat}</span>
        <h3>${n.title}</h3>
        <span class="list-news-time">${n.time}</span>
      </div>
    </div>
  `).join('');
}

// 5. VIDEO GRID
function renderVideoGrid() {
  const grid = document.getElementById('videoGrid');
  if (!grid || !appState.news) return;

  grid.innerHTML = (appState.news.videos || []).map((v, i) => `
    <div class="video-card fade-in" style="animation-delay:${i * 0.08}s" onclick="openVideoModal('${v.title}', '${v.dur}', '${v.img}')">
      <div class="video-thumb-wrap">
        <img class="video-thumb" src="${v.img}" alt="${v.title}" loading="lazy">
        <div class="play-btn">▶</div>
        <span class="video-duration">${v.dur}</span>
      </div>
      <div class="video-body">
        <h3>${v.title}</h3>
        <span>न्यू महाराष्ट्र गर्जना व्हिडिओ बुलेटिन</span>
      </div>
    </div>
  `).join('');
}

// 6. PHOTO GRID
function renderPhotoGrid() {
  const grid = document.getElementById('photoGrid');
  if (!grid || !appState.news) return;

  grid.innerHTML = (appState.news.photos || []).map((p, i) => `
    <div class="photo-card fade-in" style="animation-delay:${i * 0.08}s" onclick="openPhotoModal('${p.caption}', '${p.img}')">
      <img src="${p.img}" alt="${p.caption}" loading="lazy">
      <div class="photo-overlay">
        <p>${p.caption}</p>
      </div>
    </div>
  `).join('');
}

// ── CATEGORY FILTERING SYSTEM ──

function filterCategory(catName, event) {
  if (event) event.preventDefault();

  appState.activeCategory = catName;
  appState.searchTerm = '';

  // Update Nav UI state
  document.querySelectorAll('.nav-item').forEach(item => {
    if (item.getAttribute('data-category') === catName) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });

  // Show/Hide section blocks if specific category selected
  const heroSection = document.getElementById('heroSection');
  const twoCol1 = document.getElementById('maharashtraPoliticsSection');
  const videoSec = document.getElementById('videoSection');
  const twoCol2 = document.getElementById('sportsEntertainmentSection');
  const photoSec = document.getElementById('photoSection');

  if (catName !== 'सर्व') {
    if (heroSection) heroSection.style.display = (catName === 'महाराष्ट्र' || catName === 'थेट') ? 'grid' : 'none';
    if (twoCol1) twoCol1.style.display = 'none';
    if (videoSec) videoSec.style.display = (catName === 'व्हिडिओ') ? 'block' : 'none';
    if (twoCol2) twoCol2.style.display = 'none';
    if (photoSec) photoSec.style.display = (catName === 'फोटो') ? 'block' : 'none';
  } else {
    if (heroSection) heroSection.style.display = 'grid';
    if (twoCol1) twoCol1.style.display = 'grid';
    if (videoSec) videoSec.style.display = 'block';
    if (twoCol2) twoCol2.style.display = 'grid';
    if (photoSec) photoSec.style.display = 'block';
  }

  renderLatestGrid();
  updateCategoryStatusBar();

  // Smooth scroll down to latest news section
  const target = document.getElementById('latestNewsSection');
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function resetCategoryFilter() {
  filterCategory('सर्व');
}

function updateCategoryStatusBar() {
  const bar = document.getElementById('categoryStatusBar');
  if (!bar) return;

  if (appState.activeCategory !== 'सर्व' || appState.searchTerm !== '') {
    bar.style.display = 'block';
    const nameEl = document.getElementById('activeCategoryName');
    const countEl = document.getElementById('activeCategoryCount');
    
    if (nameEl) nameEl.textContent = appState.searchTerm ? `शोध: "${appState.searchTerm}"` : appState.activeCategory;
    
    let count = 0;
    const allLatest = appState.news ? appState.news.latest : [];
    if (appState.searchTerm) {
      const term = appState.searchTerm.toLowerCase();
      count = allLatest.filter(a => a.title.toLowerCase().includes(term)).length;
    } else {
      count = allLatest.filter(a => a.cat === appState.activeCategory).length;
    }
    
    if (countEl) countEl.textContent = `(${count} बातम्या)`;
  } else {
    bar.style.display = 'none';
  }
}

// ── ARTICLE READER MODAL & SPEECH SYNTHESIS ──

let currentReadingUtterance = null;
let currentReaderFontSize = 1.15;

function openArticle(id) {
  // Find article across all categories
  let article = null;
  const categories = ['latest', 'maharashtra', 'politics', 'sports', 'entertainment'];
  
  for (const cat of categories) {
    if (appState.news[cat]) {
      const found = appState.news[cat].find(a => a.id === id);
      if (found) {
        article = found;
        break;
      }
    }
  }

  if (!article) {
    // Generate fallback article structure
    article = {
      id: id,
      cat: 'महाराष्ट्र',
      title: 'विशेष बातमी सविस्तर',
      desc: 'या बातमीचा सविस्तर तपशील उपलब्ध आहे.',
      content: `<p>न्यू महाराष्ट्र गर्जना डिजिटल वृत्तपत्रात आपले स्वागत आहे. या बातमीबाबत अधिक सविस्तर माहिती लवकरच अद्ययावत केली जात आहे.</p>`,
      time: '१० ऑगस्ट २०२६',
      author: 'न्यू महाराष्ट्र गर्जना प्रतिनिधी',
      img: `https://picsum.photos/800/480?random=${id}`
    };
  }

  const modal = document.getElementById('articleModal');
  const container = document.getElementById('articleReaderContent');
  if (!modal || !container) return;

  const articleComments = appState.commentsMap[id] || [];

  container.innerHTML = `
    <div class="article-header">
      <span class="article-cat-badge">${article.cat}</span>
      <h1 class="article-main-title" id="articleReaderTitle">${article.title}</h1>
      
      <div class="article-meta-bar">
        <div class="article-author-info">
          <div class="author-avatar">${article.author ? article.author.charAt(0) : 'न'}</div>
          <div>
            <strong>${article.author || 'न्यू महाराष्ट्र गर्जना प्रतिनिधी'}</strong><br>
            <small>📅 ${article.time} • ⏱️ ३ मिनिटे वाच वेळ</small>
          </div>
        </div>
        
        <div class="article-controls">
          <button class="audio-read-btn" onclick="toggleAudioRead()">
            <span id="speechIcon">🔊</span> <span id="speechBtnText">बातमी ऐका</span>
          </button>
          <button class="font-size-btn" onclick="changeReaderFontSize(0.1)" title="अक्षर मोठे करा">A+</button>
          <button class="font-size-btn" onclick="changeReaderFontSize(-0.1)" title="अक्षर लहान करा">A-</button>
        </div>
      </div>
    </div>

    <div class="article-main-image-box">
      <img src="${article.img}" alt="${article.title}">
      <div class="image-caption">छायाचित्र: न्यू महाराष्ट्र गर्जना डिजिटल मीडिया • ${article.title}</div>
    </div>

    <div class="article-body-text" id="articleBodyText" style="font-size: ${currentReaderFontSize}rem;">
      ${article.content || `<p>${article.desc || article.title}</p><p>महाराष्ट्रातील क्रीडा, राजकारण आणि सामाजिक घडामोडींचा सर्वात जलद वेगाने आढावा घेण्यासाठी न्यू महाराष्ट्र गर्जना शी जोडलेले राहा.</p>`}
    </div>

    <!-- SOCIAL SHARE BAR -->
    <div class="share-section">
      <span class="share-title">ही बातमी शेअर करा:</span>
      <div class="share-buttons">
        <button class="share-btn share-whatsapp" onclick="shareArticle('whatsapp', ${article.id})">💬 व्हॉट्सॲप</button>
        <button class="share-btn share-facebook" onclick="shareArticle('facebook', ${article.id})">📘 फेसबुक</button>
        <button class="share-btn share-twitter" onclick="shareArticle('twitter', ${article.id})">🐦 एक्स (Twitter)</button>
        <button class="share-btn share-copy" onclick="shareArticle('copy', ${article.id})">🔗 लिंक कॉपी</button>
      </div>
    </div>

    <!-- COMMENTS SECTION -->
    <div class="comments-section">
      <h3>प्रतिक्रिया (<span id="commentCountHeader">${articleComments.length}</span>)</h3>
      <div class="comment-form">
        <input type="text" id="commentAuthorInput" placeholder="तुमचे नाव..." class="form-control">
        <textarea id="commentTextInput" rows="3" placeholder="तुमची प्रतिक्रिया लिहा..." class="form-control"></textarea>
        <button type="button" onclick="submitComment(${article.id})">प्रतिक्रिया पाठवा</button>
      </div>
      
      <div class="comments-list" id="commentsListContainer">
        ${renderCommentsHTML(articleComments)}
      </div>
    </div>
  `;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeArticleModal() {
  const modal = document.getElementById('articleModal');
  if (modal) modal.classList.remove('open');
  document.body.style.overflow = 'auto';

  // Stop speech synthesis if playing
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
}

function openArticleFromHero() {
  const heroArticle = (appState.news.latest || []).find(a => a.isHero) || appState.news.latest[0];
  if (heroArticle) openArticle(heroArticle.id);
}

function openTickerArticle(text) {
  showToast(`ताजी बातमी: "${text.substring(0, 40)}..."`, 'info');
}

// SPEECH SYNTHESIS ENGINE
function toggleAudioRead() {
  if (!('speechSynthesis' in window)) {
    showToast('तुमच्या ब्राउझरमध्ये स्पीच सुविधा उपलब्ध नाही.', 'info');
    return;
  }

  if (window.speechSynthesis.speaking) {
    window.speechSynthesis.cancel();
    document.getElementById('speechIcon').textContent = '🔊';
    document.getElementById('speechBtnText').textContent = 'बातमी ऐका';
  } else {
    const title = document.getElementById('articleReaderTitle')?.textContent || '';
    const body = document.getElementById('articleBodyText')?.textContent || '';
    const fullText = title + ". " + body;

    const utterance = new SpeechSynthesisUtterance(fullText);
    utterance.lang = 'mr-IN'; // Marathi Voice Locale
    utterance.rate = 0.95;

    utterance.onend = () => {
      document.getElementById('speechIcon').textContent = '🔊';
      document.getElementById('speechBtnText').textContent = 'बातमी ऐका';
    };

    window.speechSynthesis.speak(utterance);
    document.getElementById('speechIcon').textContent = '⏹️';
    document.getElementById('speechBtnText').textContent = 'थांबवा';
    showToast('बातमीचे वाचन सुरू झाले आहे...', 'info');
  }
}

function changeReaderFontSize(delta) {
  currentReaderFontSize = Math.min(Math.max(0.9, currentReaderFontSize + delta), 1.6);
  const el = document.getElementById('articleBodyText');
  if (el) el.style.fontSize = `${currentReaderFontSize}rem`;
}

// SOCIAL SHARING
function shareArticle(platform, id) {
  const title = document.getElementById('articleReaderTitle')?.textContent || 'न्यू महाराष्ट्र गर्जना बातमी';
  const url = window.location.href;

  if (platform === 'whatsapp') {
    const text = encodeURIComponent(`*न्यू महाराष्ट्र गर्जना* - ${title}\n\nसविस्तर वाचा: ${url}`);
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  } else if (platform === 'facebook') {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
  } else if (platform === 'twitter') {
    const text = encodeURIComponent(`${title} - न्यू महाराष्ट्र गर्जना`);
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${encodeURIComponent(url)}`, '_blank');
  } else if (platform === 'copy') {
    navigator.clipboard.writeText(url).then(() => {
      showToast('🔗 बातमीची लिंक यशस्वीरीत्या कॉपी झाली!', 'success');
    }).catch(() => {
      showToast('लिंक कॉपी करता आली नाही.', 'info');
    });
  }
}

// COMMENTS SYSTEM
function renderCommentsHTML(comments) {
  if (!comments || comments.length === 0) {
    return `<p style="color: #94A3B8; font-size: 0.88rem;">अद्याप कोणतीही प्रतिक्रिया आलेली नाही. पहिली प्रतिक्रिया द्या!</p>`;
  }
  return comments.map(c => `
    <div class="comment-item">
      <div>
        <span class="comment-author">${c.author}</span>
        <span class="comment-date">${c.date}</span>
      </div>
      <div class="comment-text">${c.text}</div>
    </div>
  `).join('');
}

function submitComment(articleId) {
  const authorInput = document.getElementById('commentAuthorInput');
  const textInput = document.getElementById('commentTextInput');

  const author = authorInput?.value.trim() || 'वाचक';
  const text = textInput?.value.trim();

  if (!text) {
    showToast('कृपया प्रतिक्रिया लिहा.', 'info');
    return;
  }

  if (!appState.commentsMap[articleId]) {
    appState.commentsMap[articleId] = [];
  }

  const now = new Date();
  const dateStr = now.toLocaleDateString('mr-IN', { hour: '2-digit', minute: '2-digit' });

  appState.commentsMap[articleId].unshift({
    author: author,
    text: text,
    date: dateStr
  });

  saveCommentsToStorage();

  // Update UI
  const listEl = document.getElementById('commentsListContainer');
  const countEl = document.getElementById('commentCountHeader');
  if (listEl) listEl.innerHTML = renderCommentsHTML(appState.commentsMap[articleId]);
  if (countEl) countEl.textContent = appState.commentsMap[articleId].length;

  textInput.value = '';
  showToast('आपली प्रतिक्रिया यशस्वीरीत्या नोंदवली गेली!', 'success');
}

// ── SEARCH SYSTEM ──

function setupSearchEvents() {
  const toggleBtn = document.getElementById('searchToggle');
  const bar = document.getElementById('searchBar');
  const input = document.getElementById('searchInput');
  const submitBtn = document.getElementById('searchSubmitBtn');
  const clearBtn = document.getElementById('clearSearchBtn');

  if (toggleBtn && bar) {
    toggleBtn.addEventListener('click', () => {
      bar.classList.toggle('open');
      if (bar.classList.contains('open') && input) {
        input.focus();
      }
    });
  }

  function triggerSearch() {
    const term = input?.value.trim() || '';
    appState.searchTerm = term;
    filterCategory(appState.activeCategory);
  }

  if (input) {
    input.addEventListener('keyup', (e) => {
      if (e.key === 'Enter') triggerSearch();
      else {
        appState.searchTerm = input.value.trim();
        renderLatestGrid();
        updateCategoryStatusBar();
      }
    });
  }

  if (submitBtn) submitBtn.addEventListener('click', triggerSearch);
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      if (input) input.value = '';
      appState.searchTerm = '';
      renderLatestGrid();
      updateCategoryStatusBar();
    });
  }
}

// ── ADMIN PUBLISHING PORTAL ENGINE ──

function openAdminModal() {
  const modal = document.getElementById('adminModal');
  const loginBox = document.getElementById('adminLoginBox');
  const dashBox = document.getElementById('adminDashboardBox');

  if (!modal) return;

  if (appState.isAdminLoggedIn) {
    loginBox.style.display = 'none';
    dashBox.style.display = 'block';
    renderAdminTable();
  } else {
    loginBox.style.display = 'block';
    dashBox.style.display = 'none';
  }

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeAdminModal() {
  const modal = document.getElementById('adminModal');
  if (modal) modal.classList.remove('open');
  document.body.style.overflow = 'auto';
}

function handleAdminLogin(event) {
  event.preventDefault();
  const u = document.getElementById('adminUsernameInput').value;
  const p = document.getElementById('adminPasswordInput').value;

  if (u === 'admin' && p === 'admin') {
    appState.isAdminLoggedIn = true;
    sessionStorage.setItem('nmg_admin_session', 'true');
    document.getElementById('adminLoginBox').style.display = 'none';
    document.getElementById('adminDashboardBox').style.display = 'block';
    renderAdminTable();
    showToast('ॲडमिन पॅनेलमध्ये स्वागत आहे!', 'success');
  } else {
    showToast('चुकीचा युझरनेम किंवा पासवर्ड!', 'danger');
  }
}

function handleAdminLogout() {
  appState.isAdminLoggedIn = false;
  sessionStorage.removeItem('nmg_admin_session');
  document.getElementById('adminLoginBox').style.display = 'block';
  document.getElementById('adminDashboardBox').style.display = 'none';
  showToast('लॉगआउट यशस्वी.', 'info');
}

function switchAdminTab(tab) {
  document.querySelectorAll('.admin-tab-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.admin-tab-content').forEach(c => c.classList.remove('active'));

  if (tab === 'add') {
    document.getElementById('tabAddBtn').classList.add('active');
    document.getElementById('adminTabAdd').classList.add('active');
  } else if (tab === 'manage') {
    document.getElementById('tabManageBtn').classList.add('active');
    document.getElementById('adminTabManage').classList.add('active');
    renderAdminTable();
  } else if (tab === 'ticker') {
    document.getElementById('tabTickerBtn').classList.add('active');
    document.getElementById('adminTabTicker').classList.add('active');
    const txt = (appState.news.ticker || []).join('\n');
    document.getElementById('tickerEditorTextarea').value = txt;
  }
}

function handleSaveArticle(event) {
  event.preventDefault();

  const editId = document.getElementById('editArticleId').value;
  const title = document.getElementById('articleTitleInput').value.trim();
  const cat = document.getElementById('articleCategorySelect').value;
  const img = document.getElementById('articleImgInput').value.trim();
  const desc = document.getElementById('articleDescInput').value.trim();
  const contentRaw = document.getElementById('articleContentInput').value.trim();
  const author = document.getElementById('articleAuthorInput').value.trim() || 'न्यू महाराष्ट्र गर्जना प्रतिनिधी';
  const isHero = document.getElementById('articleIsHeroInput').checked;
  const isBreaking = document.getElementById('articleIsBreakingInput').checked;

  const formattedContent = contentRaw.split('\n\n').map(p => `<p>${p}</p>`).join('');
  const timeStr = new Date().toLocaleDateString('mr-IN', { day: 'numeric', month: 'long', year: 'numeric' });

  if (editId) {
    // EDIT EXISTING
    const id = parseInt(editId);
    let item = appState.news.latest.find(a => a.id === id);
    if (item) {
      item.title = title;
      item.cat = cat;
      item.img = img;
      item.desc = desc;
      item.content = formattedContent;
      item.author = author;
      item.isHero = isHero;
      item.isBreaking = isBreaking;
    }
    showToast('बातमी यशस्वीरीत्या अद्ययावत (Updated) झाली!', 'success');
  } else {
    // ADD NEW ARTICLE
    const newId = Date.now();
    const newArticle = {
      id: newId,
      cat: cat,
      title: title,
      desc: desc,
      content: formattedContent,
      time: timeStr,
      author: author,
      img: img,
      isHero: isHero,
      isBreaking: isBreaking
    };

    if (isHero) {
      // Unset previous hero
      appState.news.latest.forEach(a => a.isHero = false);
    }

    appState.news.latest.unshift(newArticle);

    if (isBreaking) {
      appState.news.ticker.unshift(title);
    }

    showToast('नवी बातमी यशस्वीरीत्या प्रकाशित झाली!', 'success');
  }

  saveStateToStorage();
  resetArticleForm();
  renderAll();
  switchAdminTab('manage');
}

function resetArticleForm() {
  document.getElementById('editArticleId').value = '';
  document.getElementById('articleTitleInput').value = '';
  document.getElementById('articleImgInput').value = '';
  document.getElementById('articleDescInput').value = '';
  document.getElementById('articleContentInput').value = '';
  document.getElementById('articleIsHeroInput').checked = false;
  document.getElementById('articleIsBreakingInput').checked = false;
  document.getElementById('imgPreviewWrap').style.display = 'none';
  document.getElementById('formHeaderTitle').textContent = 'नवीन बातमी प्रकाशित करा';
}

function renderAdminTable() {
  const tbody = document.getElementById('adminNewsTableBody');
  const countEl = document.getElementById('adminTotalCount');
  if (!tbody || !appState.news) return;

  const articles = appState.news.latest || [];
  if (countEl) countEl.textContent = articles.length;

  const search = document.getElementById('adminSearchInput')?.value.toLowerCase() || '';
  const filtered = articles.filter(a => a.title.toLowerCase().includes(search));

  tbody.innerHTML = filtered.map(a => `
    <tr>
      <td>#${a.id}</td>
      <td><img src="${a.img}" class="table-thumb" alt="thumb"></td>
      <td><strong>${a.title}</strong> ${a.isHero ? '<span style="color:var(--red); font-size:0.75rem;">[HERO]</span>' : ''}</td>
      <td><span class="news-card-cat" style="position:static;">${a.cat}</span></td>
      <td><small>${a.time}</small></td>
      <td>
        <button class="btn btn-sm btn-secondary" onclick="editArticle(${a.id})">✏️ संपादन</button>
        <button class="btn btn-sm btn-danger" onclick="deleteArticle(${a.id})">🗑️ हटवा</button>
      </td>
    </tr>
  `).join('');
}

function editArticle(id) {
  const a = appState.news.latest.find(item => item.id === id);
  if (!a) return;

  document.getElementById('editArticleId').value = a.id;
  document.getElementById('articleTitleInput').value = a.title;
  document.getElementById('articleCategorySelect').value = a.cat;
  document.getElementById('articleImgInput').value = a.img;
  document.getElementById('articleDescInput').value = a.desc || '';
  document.getElementById('articleContentInput').value = (a.content || '').replace(/<p>/g, '').replace(/<\/p>/g, '\n\n').trim();
  document.getElementById('articleAuthorInput').value = a.author || '';
  document.getElementById('articleIsHeroInput').checked = !!a.isHero;
  document.getElementById('articleIsBreakingInput').checked = !!a.isBreaking;

  previewArticleImage();
  document.getElementById('formHeaderTitle').textContent = `बातमी संपादन (ID: #${a.id})`;
  switchAdminTab('add');
}

function deleteArticle(id) {
  if (confirm('ही बातमी खरोखर हटवायची आहे का?')) {
    appState.news.latest = appState.news.latest.filter(a => a.id !== id);
    saveStateToStorage();
    renderAll();
    renderAdminTable();
    showToast('बातमी हटवली गेली.', 'info');
  }
}

function previewArticleImage() {
  const url = document.getElementById('articleImgInput').value;
  const wrap = document.getElementById('imgPreviewWrap');
  const img = document.getElementById('imgPreview');
  if (url) {
    img.src = url;
    wrap.style.display = 'block';
  } else {
    wrap.style.display = 'none';
  }
}

function handleFileUpload(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      document.getElementById('articleImgInput').value = e.target.result;
      previewArticleImage();
    };
    reader.readAsDataURL(file);
  }
}

function saveTickerText() {
  const raw = document.getElementById('tickerEditorTextarea').value;
  const lines = raw.split('\n').map(l => l.trim()).filter(l => l.length > 0);
  appState.news.ticker = lines;
  saveStateToStorage();
  renderTicker();
  showToast('ब्रेकिंग टिकर अपडेट झाला!', 'success');
}

function exportNewsData() {
  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(appState.news, null, 2));
  const downloadAnchor = document.createElement('a');
  downloadAnchor.setAttribute("href", dataStr);
  downloadAnchor.setAttribute("download", `nmg_news_backup_${Date.now()}.json`);
  document.body.appendChild(downloadAnchor);
  downloadAnchor.click();
  downloadAnchor.remove();
  showToast('डेटा JSON फाईलमध्ये डाऊनलोड झाला!', 'success');
}

function resetNewsData() {
  if (confirm('सर्व सानुकूल (Custom) बातम्या हटवून मूळ डिफॉल्ट डेटा रीसेट करायचा आहे का?')) {
    appState.news = JSON.parse(JSON.stringify(defaultNewsData));
    saveStateToStorage();
    renderAll();
    renderAdminTable();
    showToast('डेटा डिफॉल्ट स्थितीवर रिसेट झाला.', 'info');
  }
}

// ── MEDIA LIGHTBOX MODALS (VIDEOS & PHOTOS) ──

function openVideoModal(title, dur, img) {
  const modal = document.getElementById('mediaModal');
  const body = document.getElementById('mediaModalBody');
  if (!modal || !body) return;

  body.innerHTML = `
    <div style="text-align: center; color: white; padding: 20px;">
      <h3 style="margin-bottom: 14px; font-size: 1.3rem;">📹 ${title}</h3>
      <div style="position: relative; aspect-ratio: 16/9; background: black; border-radius: 10px; overflow: hidden; margin-bottom: 14px;">
        <img src="${img}" style="width: 100%; height: 100%; object-fit: cover; opacity: 0.6;">
        <div style="position: absolute; top:50%; left:50%; transform:translate(-50%,-50%); background: var(--red); color:white; width:70px; height:70px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:2rem; cursor:pointer;" onclick="showToast('व्हिडिओ प्रवाह लोड होत आहे...', 'info')">▶</div>
      </div>
      <p style="color: #CBD5E1; font-size: 0.9rem;">कालावधी: <strong>${dur}</strong> • न्यू महाराष्ट्र गर्जना एचडी व्हिडिओ</p>
    </div>
  `;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function openPhotoModal(caption, img) {
  const modal = document.getElementById('mediaModal');
  const body = document.getElementById('mediaModalBody');
  if (!modal || !body) return;

  body.innerHTML = `
    <div style="text-align: center; color: white; padding: 20px;">
      <img src="${img}" style="max-width: 100%; max-height: 70vh; border-radius: 10px; margin-bottom: 14px; box-shadow: 0 10px 30px rgba(0,0,0,0.5);">
      <h3 style="font-size: 1.1rem; color: #F1F5F9;">📸 ${caption}</h3>
    </div>
  `;

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeMediaModal() {
  const modal = document.getElementById('mediaModal');
  if (modal) modal.classList.remove('open');
  document.body.style.overflow = 'auto';
}

// ── TOAST NOTIFICATION SYSTEM ──
function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = message;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(-20px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// ── MISCELLANEOUS UTILITIES ──

function updateLiveDate() {
  const el = document.getElementById('live-date');
  if (!el) return;

  const now = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', timeZone: 'Asia/Kolkata' };
  const formatted = now.toLocaleDateString('mr-IN', options);
  el.textContent = formatted;
}

function handleNewsletterSubmit(event) {
  event.preventDefault();
  const input = document.getElementById('newsletterInput');
  if (input && input.value) {
    showToast('आपले सबस्क्रिप्शन यशस्वी झाले! धन्यवाद.', 'success');
    input.value = '';
  }
}

function openStaticInfo(title) {
  alert(`न्यू महाराष्ट्र गर्जना - ${title}\n\nआम्ही महाराष्ट्रातील सत्य घडामोडी जनतेपर्यंत पोहोचवण्यासाठी बांधील आहोत. संपर्कासाठी ईमेल: contact@newmaharashtragarjana.com`);
}

// ── INITIALIZATION ──
document.addEventListener('DOMContentLoaded', () => {
  loadStateFromStorage();
  updateLiveDate();
  renderAll();
  setupSearchEvents();

  // Admin Login Event Listener
  const adminBtn = document.getElementById('adminPortalBtn');
  if (adminBtn) adminBtn.addEventListener('click', openAdminModal);

  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navList = document.getElementById('navList');
  if (mobileMenuBtn && navList) {
    mobileMenuBtn.addEventListener('click', () => {
      navList.style.flexWrap = navList.style.flexWrap === 'wrap' ? 'nowrap' : 'wrap';
    });
  }

  // Back to top scroll tracking & reading progress bar
  const backBtn = document.getElementById('backToTop');
  const progress = document.getElementById('readingProgress');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    
    if (progress && docHeight > 0) {
      const pct = (scrollY / docHeight) * 100;
      progress.style.width = `${pct}%`;
    }

    if (backBtn) {
      if (scrollY > 350) backBtn.classList.add('visible');
      else backBtn.classList.remove('visible');
    }
  });

  if (backBtn) {
    backBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Restore saved Calligraphy font preference
  const savedFont = localStorage.getItem('preferredTitleFont');
  if (savedFont) {
    const siteTitle = document.getElementById('siteTitleText');
    const fontSelect = document.getElementById('titleFontSelect');
    if (siteTitle) {
      siteTitle.classList.remove('font-tiro', 'font-tillana', 'font-rozha', 'font-yatra');
      siteTitle.classList.add(savedFont);
    }
    if (fontSelect) fontSelect.value = savedFont;
  }

  // Restore saved Multi-Language preference
  const savedLang = localStorage.getItem('preferredSiteLanguage');
  if (savedLang) {
    const langSelect = document.getElementById('languageSelect');
    if (langSelect) langSelect.value = savedLang;
    setTimeout(() => {
      const googleCombo = document.querySelector('.goog-te-combo');
      if (googleCombo && googleCombo.value !== savedLang) {
        googleCombo.value = savedLang;
        googleCombo.dispatchEvent(new Event('change'));
      }
    }, 1200);
  }
});

// ── MARATHI CALLIGRAPHY FONT SWITCHER ──
function changeTitleFont(fontClass) {
  const siteTitle = document.getElementById('siteTitleText');
  if (siteTitle) {
    siteTitle.classList.remove('font-tiro', 'font-tillana', 'font-rozha', 'font-yatra');
    siteTitle.classList.add(fontClass);
    localStorage.setItem('preferredTitleFont', fontClass);
    if (typeof showToast === 'function') {
      showToast(`फॉन्ट संपादन अद्ययावत केले: ${fontClass}`, 'info');
    }
  }
}

// ── MULTI-LANGUAGE TRANSLATION ENGINE ──
function translatePageLanguage(langCode) {
  if (!langCode) return;
  localStorage.setItem('preferredSiteLanguage', langCode);

  const googleCombo = document.querySelector('.goog-te-combo');
  if (googleCombo) {
    googleCombo.value = langCode;
    googleCombo.dispatchEvent(new Event('change'));
    if (typeof showToast === 'function') {
      const names = {
        mr: 'मराठी', en: 'English', hi: 'हिंदी', gu: 'ગુજરાતી',
        ta: 'தமிழ்', te: 'తెలుగు', kn: 'ಕನ್ನಡ', bn: 'বাংলা', pa: 'ਪੰਜਾਬੀ', ml: 'മലയാളം'
      };
      showToast(`भाषा यशस्वीरीत्या बदलली: ${names[langCode] || langCode}`, 'success');
    }
  } else {
    // Cookie-based fallback for Google Translate engine
    document.cookie = `googtrans=/mr/${langCode}; path=/; domain=${window.location.hostname}`;
    document.cookie = `googtrans=/mr/${langCode}; path=/;`;
    location.reload();
  }
}
