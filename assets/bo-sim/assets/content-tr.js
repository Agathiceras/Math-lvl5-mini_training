/* ============================================================
   Backoffice simulation · TURKISH content
   Translate only the text inside quotes / backticks. Keep HTML tags, ${...} placeholders, keys, ids, file names and URLs unchanged.
   ============================================================ */
window.CONTENT = { lang: 'tr' };

/* ---------- PAGE CHROME, BO SCREENS, TOASTS ---------- */
CONTENT.ui = {
  pageTitle: 'Yeni Eğitim Modeli — BO Simülasyonu — Kodland Eğitimi',
  simBadge: '🧪 SİMÜLASYON — Kodland Eğitimi (kurgusal veri)',
  tourBtn: '🚀 Rehberli turu başlat',
  tourMinimize: 'Küçült ▾', tourResume: '📍 Rehberli tura devam et',
  stepOf: 'Adım {n} / {total}', nextArrow: 'İleri →', finish: 'Tamamla ✓',
  groupsTitle: 'Gruplar', tabExtra: 'Ekstra Dersler', tabParallel: 'Paralel Gruplar', tabRegular: 'Normal Gruplar',
  emptyRegular: 'Bu simülasyonda gösterilecek grup yok — sol menüden <b>Dersler</b> (Courses) sekmesini açın.',
  colID: 'Kimlik', colTitle: 'Başlık', colTutor: 'Eğitmen', colType: 'Tür', colCurrentCourse: 'Mevcut kurs', colStart: 'Başlangıç',
  colStudentsPaid: 'Öğrenciler/Ödenen', colPreviousLesson: 'Önceki ders', colNextLesson: 'Sonraki ders', colPremium: 'Premium',
  containerType: 'Grup', no: 'Hayır', yes: 'Evet',
  itemsPage100_1: 'Sayfa başına öğe: 100 &nbsp;|&nbsp; 1-1 / 1', itemsPage10_4: 'Sayfa başına öğe: 10 &nbsp;|&nbsp; 1-4 / 4',
  itemsPage100_19: 'Sayfa başına öğe: 100 &nbsp;|&nbsp; 1-9 / 9',
  backToGroups: 'Gruplara Dön', backToCourses: 'Kurslara Dön', backToAssignments: 'Görevlere Dön',
  tutorLabel: 'Eğitmen:', openConsoleTip: 'Konsolu aç', colLessonTime: 'Ders saati', colCourse: 'Kurs', colNextTopic: 'Sonraki ders konusu',
  simOpenCourseFromDetail: 'Kurs kaydını buradan da açabilirsiniz',
  teacherName: 'Demo Eğitmen', teacherCountry: '🌎 LatAm',
  profileTitle: 'Profil', teacherCoursesH: 'Eğitmen kursları', availabilityH: 'Musaitlik saatleri', notAssigned: 'Atanmadı',
  groupsTabLbl: 'Gruplar', scheduleTabLbl: 'Program', regularGroupsNote: 'Grup listeniz.',
  currentWeek: 'Mevcut Hafta', available: 'Müsait',
  days: ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar'],
  coursesTitle: 'Dersler', colBusinessBranch: 'İş kolu', colActive: 'Aktif', colNumberOfLessons: 'Ders sayısı',
  badgeActive: 'Aktif', fieldBranch: 'İş kolu: ENG', fieldLanguage: 'Dil: English 🇬🇧', fieldCourseType: 'Kurs türü: Ücretli kurslar',
  fieldCourseGroup: 'Kurs grubu: Code & Game lvl 1', fieldLessons: 'Ders sayısı: 40', fieldModules: 'Modül sayısı: 10',
  fieldExcluded: 'Overbooking hariç: Hayır', fieldCertificate: 'Sertifika: —',
  lessonsTab: 'Dersler', assignmentsTab: 'Görevler', moduleFirstSteps: 'M1. Creator Lab: ilk görevler', viewAssignments: 'Görevleri görüntüle →',
  colNo: 'No', colActions: 'İşlemler',
  lessonSelectLbl: 'Ders', lessonOption: 'L1. Dance Party: sahneyi canlandırma',
  inClassH: 'Ders içi görevler', homeworkH: 'Ödev görevleri', studyGuidesH: 'Çalışma rehberleri',
  colNumber: 'Numara', colAssignmentTitle: 'Görev başlığı', colTheory: 'Teori', colProject: 'Proje', colMaxScore: 'Maksimum puan',
  interactive: 'ETKİLEŞİMLİ', noData: 'Kullanılabilir veri yok',
  noWikiNote: 'Burada wiki bağlantısı yok — bu kasıtlı bir durumdur. Yeni eğitim modeli kurslarında eğitmen rehberi, ayrı bir wiki dokümanı olarak değil, etkinliklerin içinde Öğretmen Notları (Teacher Notes) olarak yer alır.',
  modalGroups: 'GRUPLAR', modalExit: 'Çıkış', modalOpenConsole: 'Konsolu Aç',
  toastConsoleDetail: '🔗 Bu işlem, bu grup için Classroom bağlantısını açar.',
  toastConsoleModal: '🔗 Bu, Programınızdan ulaşılan aynı Classroom bağlantısıdır.',
  toastSimClick: '🧪 Bu bir simülasyondur — gerçek BO’da bu işlem: «{label}» yapacaktır.',
  toastBlocked: '👉 Devam etmek için vurgulanan adımı takip edin — ilk geçişte rehberli tur zorunludur.',
  reflect: '🎉 <strong>Rehberli tur tamamlandı!</strong> Artık yeni model bir kursu Dersler sekmesinden nasıl açacağınızı, derslerinin ve etkinliklerinin nerede olduğunu, neden wiki bağlantısı bulunmadığını ve her etkinliğin içindeki Öğretmen Notları’na nereden ulaşacağınızı biliyorsunuz. Bu simülasyonu kendi başınıza incelemeye devam edebilirsiniz.',
  /* Assignment titles in the "In-class assignments" table (same order as the rows) */
  inClass: ['İlki Creator Lab görevini başlatın! 💃', 'Creator Lab’e hoş geldiniz! 👋', 'Birbirimizi tanıyalım! 🎤', 'Yaratıcı ekip sözleşmesi 🤝', 'Bağlantınızı kontrol edin 📡', 'Creator Lab nedir? ✨', 'Projeyi indirin ve açın 📥', 'Nelerin çalıştığını kontrol edin 🔎', 'Blokların nasıl çalıştığını keşfedin 🧩'],
  homework: []
};

/* ---------- LESSON VIEWER (Teacher Note + student card) ---------- */
CONTENT.lesson = {
  lessonCrumb: 'Kurslarım &gt; İlk Creator Lab görevini başla...', teacherNoteBadge: '👁 Öğretmen notu — bu bloğu yalnızca eğitmenler görür',
  lessonTitle: 'Derse hazırlık · Dance Party: sahneyi canlandırma',
  hOverview: 'Derse genel bakış',
  pOverview: 'Bu ders, Code & Game lvl 1 programının ilk dersidir (Creator Lab: Oyunlar ve Yapay Zekâ, 8–9 yaş). Öğrenciler Creator Lab’i tanır, Scratch’te hazır bir prototipi keşfeder ve Kodland Sparks platformunda kendi etkileşimli Dance Party gösterilerini oluştururlar. Temel amaç, «olay → eylem → sonuç» ilişkisini kavramak, hızla çalışan bir proje elde etmek ve yapay zekâyı yaratıcı bir yardımcı olarak güvenle kullanmaktır.',
  hMission: 'Ders hikâyesi görevi',
  pMission: 'Öğrenciler gizli yaratıcı laboratuvara, yani Creator Lab’e adım atarlar. İlk görevleri «Dijital sahneyi canlandır»dır: Tuşların hareketleri, sesleri, kostüm değişikliklerini ve görsel efektleri tetiklediği bir dans gösterisi oluşturmak için kod ve yapay zekâ kullanırlar.',
  hGoal: 'Temel ders hedefi',
  pGoal: 'Her öğrencinin kişiselleştirilmiş bir etkileşimli gösteri oluşturmasına ve bir tuşa basma olayının nasıl bir karakter eylemini tetikleyip görsel bir sonuç ürettiğini basit kelimelerle açıklamasına yardımcı olun.',
  hResult: 'Kilit sonuç',
  resultItems: ['Dance Party projesi Kodland Sparks içindeki Scratch alanında sorunsuz çalışır.', 'Gösteri, öğrenci tarafından seçilen bir karakter ve müzik ile yapay zekâ yardımıyla oluşturulmuş bir arka plan içerir.', 'Karakter, tuşa basılmasına hareket, kostüm değişikliği, ses veya efekt ile yanıt verir.', 'Öğrenci projesini sunar ve en az bir «olay → eylem → sonuç» ilişkisini açıklar.'],
  calloutLbl: 'Derse başlamadan önce', callout: 'Aşağıdaki ders videosunu izleyin ve her kartın notlarını okuyun — tüm dersin rehberi bir wiki sayfasında değil, doğrudan burada yer almaktadır.',
  videoTag: 'DERS 1', videoTitle: 'Creator Lab: Dance Party — odaklanılması gerekenler',
  videoDesc: 'Eğitmen için açıklanan ilk ders: Hedef, tümdengelimli akış ve dikkatinizi gerektiren anlar. ▶',
  hRole: 'Eğitmenin rolü',
  pRole1: 'Öğrencileri Creator Lab hikâyesiyle tanıştırın ve nihai sonuç için bir referans olarak tamamlanmış dans gösterisini gösterin. Prototipi keşfetmekten karakteri, müziği ve yapay zekâ ile oluşturulmuş arka planı seçmeye ve farklı tuşlara en az iki yanıt oluşturmaya kadar onlara rehberlik edin.',
  pRole2: 'Açıklayıcı sorular, kısa ipuçları ve yaratıcılık, bağımsız kararlar ile düzeltilen hataları takdir ederek destek olun. Sandbox Spark ve AI Buddy’nin güvenli kullanımını gözetin; <b>yapay zekânın öğrenci yerine mekanikleri inşa etmesine izin vermeyin.</b>',
  hFocus: 'Metodolojik yaklaşım',
  pFocus1: 'Nihai sonucu göstererek ve hazır prototipi keşfederek başlayın. Teoriyi gözlem yoluyla sunun: Öğrenci bir tuşa basar, karakterin yanıtını görür ve «olay → eylem → sonuç» ilişkisini ifade eder.',
  pFocus2: 'Öğrenme Döngüsünü (Learning Loop) koruyun: <b>hedef → deneme → zorluk → destek → geliştirme → sunum → değerlendirme.</b> Hataları yaratıcı sürecin doğal bir parçası olarak sunun.',
  pFocus3: 'Karakter, müzik, hareketler, efektler, yapay zekâ isteminin ifadesi ve yapay zekâ ile oluşturulan arka plan seçimini öğrenciye bırakın. Projeye dair nihai kararlar öğrencinin kendisine ait olmalıdır.',
  hImportant: 'Önemli noktalar',
  importantItems: ['Kısa talimatlar, bolca görsel destek kullanın ve kart başına tek bir etkinlik planlayın.', 'Öğrencinin tuş basmalarına en az iki farklı yanıt eklediğini ve her birini test ettiğini kontrol edin.', 'Puanlar, kazanma veya kaybetme koşulları, değişkenler, karmaşık koşullar, listeler, klonlar veya kuklalar arası mesajlar eklemeyin.', 'Yapay zekâ istemlerinin kişisel veri içermediğini ve yalnızca güvenli Kodland Spark ortamı içinde oluşturulduğunu kontrol edin.'],
  hEnding: 'Dersin kapanışı',
  pEnding: 'Projelerin kısa bir sunumunu gerçekleştirin. Öğrencilerden hangi tuşun seçtikleri eylemi tetiklediğini açıklamalarını ve şu formülü kullanarak geri bildirim vermelerini isteyin: «Şunu beğendim… Şunu eklerdim…». Dersi projenin öz değerlendirmesiyle sonlandırın.',
  hNext: 'Sonraki ders',
  pNext: 'M01L02 dersinde, «Portal Guardian: kahraman ve kristaller» başlığı altında öğrenciler ilk oyun mekaniklerine başlayacaklar: Karakteri hareket ettirme ve nesneleri toplama.',
  studentTitle: 'İlk Creator Lab görevini başlatın! 💃',
  studentLead: 'Dijital bir sahneyi canlandıracak ve farklı tuşlara bastığınızda yanıt veren kendi dans gösterinizi oluşturacaksınız.',
  hEquip: '⌨️ Ekipmanınızı kontrol edin', equipItems: ['Klavyenizi kontrol edin: Dans gösterisini kumanda etmek için onu kullanacaksınız.'],
  hSpace: '✨ Çalışma alanınızı hazırlayın', spaceItems: ['Proje üzerinde rahatça çalışabilecek ve klavyeyi kullanabilecek şekilde oturun.', 'Karakterinizi, müziğinizi, hareketlerinizi ve sahnenizin arka planını seçmeye hazırlanın.'],
  tipLbl: '💡 Bugünün görevi', tipBody: 'Zaten çalışan bir dans gösterisini keşfedin, ardından onu kendinize uyarlayın: Kendi karakteriniz, kendi müziğiniz, kendi arka planınız ve kendi hareketleriniz.'
};

/* ---------- GUIDED TOUR STEPS (same order as STEPS in the page) ---------- */
CONTENT.steps = [
  { title: '1 · Kursu açın', body: 'Bir kursun içeriğini görmek için Gruplar üzerinden değil, <b>Dersler</b> (Courses) sekmesi üzerinden gidersiniz. <b>[2063] Code &amp; Game. Level 1</b> seçeneğine tıklayın.' },
  { title: '2 · Kurs kaydı', body: 'İş kolu, dil, ders ve modül sayısı — her kurstaki aynı alanlar. Yeni model, bir kursun BO’ya kaydolma şeklini değiştirmez.' },
  { title: '3 · Görevleri açın', body: '<b>Görevler</b> (Assignments) sekmesine tıklayın.' },
  { title: '4 · Dersin etkinlikleri', body: 'Bu etkileşimli kartlar ders içeriğinin KENDİSİDİR — talimatlar, ipuçları, görseller ve videoların tümü her kartın içinde yer alır. Ders anlatımı için ayrı bir sunum yoktur.' },
  { title: '5 · Kasıtlı olarak wiki bağlantısı yok', body: '<b>Çalışma rehberleri</b> (Study guides) tablosu boştur. Bu bir hata değildir: Yeni modelde eğitmen rehberi, ayrı bir wiki dokümanı olarak değil, etkinliklerin içinde Öğretmen Notları (Teacher Notes) olarak yer alır.' },
  { title: '6 · İlk etkinliği açın', body: 'Bir Öğretmen Notunun içeriden nasıl göründüğünü incelemek için <b>İlk Creator Lab görevini başlatın!</b> seçeneğine tıklayın.' },
  { title: '7 · Eğitmenin notu, doğrudan kartın içinde', body: 'Ayrı bir «eğitmen» sekmesi yoktur — aynı kaydırılabilir karttır. Kesikli turuncu çerçeveli bu blok bir <b>Öğretmen Notudur</b> (Teacher Note). Bir dersin ilk kartı en kapsamlı nota sahiptir: Genel bakış, hikâye görevi, hedef, rolünüz, yöntem, önemli noktalar, kapanış ve sonraki ders. Bu bloğu yalnızca eğitmenler görür.' },
  { title: '8 · Aşağı kaydırın: Öğrencinin gördüğü kısım', body: 'Hemen altında, aynı kartın içinde öğrencinin gerçekte gördüğü kısım yer alır: Görev ve hazırlanma kontrol listesi. Öğretmen Notu yoktur, anahtar düğmesi yoktur — platform bu bloğu bir öğrenci hesabına kesinlikle göstermez.' }
];

/* ---------- FINISH SCREEN (completion code overlay) ---------- */
CONTENT.done = {
  title: 'Simülasyon tamamlandı!',
  body: 'BO rehberli turunu tamamladınız: Yeni model bir kursu açma, görevleri inceleme, neden wiki bulunmadığı ve her etkinliğin içindeki Öğretmen Notları.',
  codeLabel: '🔑 Tamamlama kodunuz',
  codeHint: 'Bu simülasyonu tamamlamak için kodu eğitime girin.',
  nextStep: '<b>Sonraki adım:</b> Eğitime geri dönün. Simülasyonu eğitim sayfasının içinde açtıysanız, otomatik olarak tamamlandı olarak işaretlenir.',
  stay: 'Keşfetmeye devam et',
  close: 'Kapat ve eğitime dön',
  closedMsg: '<b>Bu sekmeyi şimdi kapatabilir</b> ve eğitim sekmesinde devam edebilirsiniz.'
};
