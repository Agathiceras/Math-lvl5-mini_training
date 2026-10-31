/* ============================================================
   EM course training · Math levels 5, 6 and 7 (Matematik Maceraları) [2218 · 2219 · 2220] · TURKISH ONLY
   Emergency version built from the Turkish course cards (no English base file). Keep HTML tags, {placeholders},
   keys (t:, id:, a:…), links, file names and the 'yes' / 'no' answer keys unchanged.
   ============================================================ */
window.COURSE = { lang: 'tr' };

/* ---------------- Interface strings ---------------- */
COURSE.ui = {
  pageTitle: 'EM kurs eğitimi',
  footer: 'kodland · Yeni Eğitim Modeli · Kurs eğitimi',
  devLink: '🛠 Developer',
  logoSub: 'Yeni Eğitim Modeli',
  navHome: '← Ana sayfa',
  navBackModule: '← Modüle dön',
  moduleN: 'Modül {n}',
  badgeStart: 'Başla →',
  badgeLocked: '🔒 Önce Modül {n}’i tamamla',
  badgeDone: '✓ Tamamlandı · %{score}',
  progLabel: 'modül tamamlandı',
  progAllDone: 'Modüller tamamlandı 🎉',
  eyebrow: '{course} · Modül {n} / {total}',
  ctaTitle: 'Modül kontrolü',
  ctaText: '{n} kısa soru. Geçmek için %70 veya üzeri gerekir.',
  lockSim: '🔒 Kontrolü açmak için yukarıdaki simülasyonu tamamla.',
  startCheck: 'Kontrole başla →',
  retake: '🔁 Kontrolü tekrarla',
  qmeta: '{e} Modül {n} kontrolü · Soru {i} / {total}',
  fbRight: '✅ <b>Doğru!</b> ',
  fbWrong: '❌ <b>Tam olarak değil.</b> ',
  nextQuestion: 'Sonraki soru →',
  seeResult: 'Sonucumu gör →',
  passedTitle: 'Geçtin!',
  failTitle: 'Az kaldı',
  scoreLine: '<b>{n} sorudan {score}</b> tanesini doğru cevapladın.',
  failText: '%70 veya üzeri gerekiyor. Modülü tekrar gözden geçir ve yeniden dene — istediğin kadar tekrar edebilirsin.',
  nextUnlocked: '<b>Modül {n} · {title}</b> açıldı.',
  goModule: 'Modül {n}’e git →',
  allDoneText: 'Bu eğitimin yedi modülünün hepsini tamamladın.',
  seeNext: 'Sıradaki adımı gör →',
  reviewModule: '📖 Modülü gözden geçir',
  homeDoneTitle: 'Modüller tamamlandı!',
  homeDoneText: 'Son bir adım kaldı: LMS’teki eğitim sayfasında DST testi.',
  homeDoneBtn: 'Şimdi ne yapmalıyım →',
  doneBadge: '✓ Tamamlandı',
  doneBack: 'Modüllere dön',
  lockedTitle: 'Henüz kilitli',
  lockedModule: 'Önce Modül {n}’i tamamla.',
  lockedStep: 'Bunu açmak için önceki adımı tamamla.',
  ok: 'Tamam',
  linkOpen: 'Aç ↗',
  projPlay: '▶ Aç ↗',
  simOpen: '▶ Simülasyonu burada aç',
  simClose: '✕ Simülasyonu kapat',
  simNewTab: 'Yeni sekmede aç ↗',
  simDone: '✅ Simülasyon tamamlandı',
  simTodo: '○ Simülasyon bekliyor',
  checkTag: 'İşaretle',
  mythTag: 'Efsane',
  mythTap: 'Gerçeği görmek için dokun →',
  mythReality: 'Gerçek ✓',
  sortWrong: '✗ Tam olarak değil.'
};

/* ---------------- Course ---------------- */
COURSE.id = 'math567';
COURSE.code = '2218 · 2219 · 2220';
COURSE.title = 'Math 5–7';
COURSE.color = '#0EA5E9';

COURSE.home = {
  kicker: '🎓 Kurs eğitimi · [2218] [2219] [2220]',
  title: 'Matematik <span class="hl">5 · 6 · 7. Seviye</span>',
  lead: 'Math Adventures, 9–13 yaş öğrenciler için: 5., 6. ve 7. seviyelerin kurs içeriği ve derslerin teknik tarafı. Yedi modül: matematiğe uyarlanmış üç Yeni Eğitim Modeli modülü, her seviye için bir modül ve ortak teknik modül.',
  facts: [
    ['🧑‍💻', '<b>Kendi hızında.</b> İlerlemen bu tarayıcıda kaydedilir. Her modül kısa bir kontrolle biter.'],
    ['🧮', '<b>Uygulamaya yönelik.</b> Derslerden gerçek durumlar, neyin işe yaradığına karar verdiğin bir etkinlik ve ilk derslerin için teknik bir kontrol listesi.']
  ]
};

/* Notes shown at the top of the home page */
COURSE.notes = [
  { kind:'pink', e:'🧭', html:'<b>Başlamadan önce:</b> ilk üç modül, <b>Yeni Eğitim Modeli’ni (EM) matematik derslerine uyarlanmış hâliyle</b> anlatır: metodoloji, öğretmen notları ve Follow Mode ile teknik hazırlık ve ders kalitesi. Seviye modülleri ve teknik modül bunların üzerine kurulur.' },
  { kind:'warn', e:'🔄', html:'<b>Backoffice’teki ders içerikleri, öğrencilerden ve eğitmenlerden gelen geri bildirimlere göre güncellenmeye devam edecek.</b> Endişelenme: bir değişiklik olduğunda, dersi hazırlayabilmen için sana önceden haber verilecek.' }
];

/* ---------------- Modules ---------------- */
COURSE.modules = [
  /* ---- Yeni Eğitim Modeli · matematiğe uyarlanmış üç modül ---- */
  { id:'em1', n:1, e:'🧩', color:'#84CC16', title:'Yeni model metodolojisi',
    desc:'Yeni matematik kursunun metodolojik çerçevesi: yedi ilke ve derste neye dönüştükleri.',
    obj:'Yeni Eğitim Modeli’nin matematikte nasıl uygulandığını öğren. Yeni matematik kursunun çerçevesi, genel çerçeveden biraz farklıdır: her ilkenin bir matematik dersinde neye dönüştüğünü gör.',
    offer:[['🧱','Bir matematik dersinin nasıl açıldığını ve görevlerin nasıl sıralandığını anla.'],['🔁','Kodland Öğrenme Döngüsü’nü ve ev ödevinin rolünü öğren.'],['✅','Sonuç kontrollerini, modül testini ve üç yönlü geri bildirimi tanı.'],['🚫','Hangi bölümlerin asla atlanmayacağını bil.']],
    sections:[
      { id:'emfw', e:'🧭', title:'Matematikte yeni model', blocks:[
        { t:'p', html:'Yeni matematik kursu, Yeni Eğitim Modeli’nin çerçevesini izler; ancak bu çerçeve matematikte <b>biraz farklı</b> uygulanır. Her ilkeyi aç ve derste neye dönüştüğünü oku:' },
        { t:'acc', items:[
          ['🧱','Hikâye anlatımı · Somut → Görsel → Soyut','<p>Her ders, konuyla yakından ilişkili <b>gerçek yaşamdan bir problemle</b> başlar. Öğrenci önce somut bir durumla (S), ardından bu durumun görsel temsiliyle (G) karşılaşır. Ancak bundan sonra soyut formüllere ve kurallara geçer (S).</p><p>Dersin başlangıcındaki görev, <b>öğrencinin ilgisini çekmeyi amaçlar; konuyu açıklamak için kullanılmaz</b>.</p>'],
          ['📶','Tümdengelimli öğrenme · Basitten karmaşığa','<p>Görevler, her ders içinde zorluk düzeyi giderek artacak şekilde sıralanır. Her düzey, anlamanın bir adımına odaklanır: önce temel uygulama, ardından daha karmaşık durumlar. Zorluk düzeyleri sabittir ve <b>açıkça etiketlenmiştir</b>.</p>'],
          ['🌱','Gelişim odaklı zihniyet · Yeni Nesil Sorular','<p>Öğrenciler yalnızca problem çözmekle kalmaz, <b>problemin arkasındaki matematiği de açıklar</b>: Bu yöntem neden işe yarıyor? Bir koşul değişirse ne olur?</p>'],
          ['🔁','Kodland Öğrenme Döngüsü','<p>Hedef → taslak çözüm → zorluk veya hata → strateji veya ipucu → iyileştirme → sonuç kontrolü → yansıma. Döngü hem derste hem de sonraki bağımsız çalışmada devam eder. <b>Ev ödevi dersin zorunlu bir parçasıdır.</b></p>'],
          ['✅','Sonuç kontrolleri ve modül testi','<p>Her ders, o dersin öğrenme çıktısına bağlı kısa bir görevle, yani bir <b>sonuç kontrolüyle</b> kapanır. Modül, tüm sonuç kontrollerini kapsayan toplu bir test veya quiz ile biter. Sonuçlar öğrenci, öğretmen ve veli tarafından görülebilir.</p>'],
          ['💬','Üç yönlü geri bildirim','<p><b>Öğretmen</b> çözümün niteliğini ve öğrencinin çözüm adımlarını ne ölçüde anladığını değerlendirir. <b>Grup</b>, çözümün gözden geçirilmesi sırasında arkadaşlarına tepki verir. <b>Öğrenci</b> ise hangi sonuç kontrollerini tamamladığını kendisi işaretler.</p>'],
          ['🪜','Sorumluluğun aşamalı olarak öğrenciye devredilmesi','<p>Modülün başında öğrencilere adım adım yönergeler ve çözüm şablonları sunulur. Modülün sonunda ise öğrenciler <b>yöntemi kendileri seçer</b> ve çözümü herhangi bir ipucu almadan tamamlar.</p>']
        ]}
      ]},
      { id:'emnever', e:'🚫', title:'Asla atlanmayan bölüm', blocks:[
        { t:'callout', kind:'bad', e:'🛑', html:'<b>Bireysel çalışma bölümünü ve Yeni Nesil Sorular bölümünü asla atlama</b>, grup geride kalsa bile. Bu iki bölüm, öğrencinin dersin kazanımına ulaşıp ulaşmadığını gösterir.' }
      ]}
    ]},

  /* em2 and em3 = EM Core Modules 2 and 3 (proofread Turkish texts reused verbatim), with the math rules applied
     (Follow Mode always, no screen sharing, Whiteboard) and an 80-minute lesson. Their interactive parts
     (Follow Mode demo, zoomable videos, stage carousels, compare switch, tags, timeline) are started by COURSE.emw at the end of this file. */
  { id:'em2', n:2, e:'🛠️', color:'#3E7BFA', title:'Teknik Hazırlık',
    needs:['boSim','mathClassroom'],
    desc:'Backoffice ve Öğretmen Notları ile Follow Mode’lu Classroom — iki pratik simülasyonuyla birlikte.',
    obj:'Backoffice’te bir kursu ve Öğretmen Notlarını bulun ve Classroom’da Follow Mode ile ders yürütün. Her bölüm, modül kontrolünü açan bir simülasyonla sona erer.',
    offer:[['🗂️','Tüm kurs materyallerini Backoffice’te bulun — wiki artık kullanılmıyor.'],['📒','Her dersten önce Öğretmen Notlarını ve güncellemeleri okuyun.'],['🎥','Follow Mode, etkinlik kartları ve Beyaz Tahtayı anlayın.']],
    sections:[
      { id:'bo', e:'🗂️', title:'Backoffice: kursun yer aldığı platform', blocks:[
        { t:'p', html:'Yeni modele sahip kurslarda <b>wiki kılavuzları ve sunumlar yoktur</b>. Her dersin kılavuzu Backoffice’te <b>dersin kendi içinde</b> yer alır: her etkinlik kartı kendi <b>Öğretmen Notlarını</b> taşır — kartın ne için olduğu, ne kadar sürdüğü, ne yapılacağı ve nelere dikkat edileceği. Bunları sadece siz görebilirsiniz.' },
        { t:'callout', kind:'warn', e:'📒', html:'<b>Her dersten önce Öğretmen Notlarını okuyun</b> — ve güncellemeleri kontrol edin. Kurslar sürekli geliştirilmektedir, bu nedenle bir ders bir grupla diğeri arasında değişebilir. Her dersin ilk kartı en kapsamlı notlara ve genellikle kısa bir videoya sahiptir.' },
        { t:'p', html:'Erişim yolu her kurs için aynıdır: bir kursun içeriğine Gruplar üzerinden değil, <b>Courses</b> (Kurslar) üzerinden ulaşırsınız.' },
        { t:'trio', items:[
          ['📚','Courses (Kurslar)','Kurs kaydını açın: iş kolu, dil, ders ve modül sayısı.'],
          ['🃏','Assignments (Ödevler/Atamalar)','Dersi seçtiğinizde etkinlik kartlarını görürsünüz. Bu kartlar ders içeriğinin <b>kendisidir</b>.'],
          ['📒','Öğretmen Notları','Bir kart açın: turuncu kesikli kutu sizin notunuzdur. Hemen altında öğrencinin gördüğü şey yer alır.']
        ]},
        { t:'callout', kind:'tip', e:'🧭', html:'Şimdi kendiniz görün. Simülasyon, yeni modeli takip eden kurslardan biriyle Backoffice’in birebir kopyasıdır: kursu açacak, ilk dersine gidecek, çalışma kılavuzunun neden boş olduğunu görecek ve ilk kartın Öğretmen Notlarını okuyacaksınız.' },
        { t:'sim', flag:'boSim', src:'bo-sim/Simulacion_BO_EM.html', e:'🗂️', badge:'Simülasyon 1 / 2', title:'Backoffice simülasyonu', text:'Backoffice’in tıklanabilir bir kopyası: kursu açın, dersin etkinliklerini bulun, neden wiki bağlantısı olmadığını görün ve içeriden bir Öğretmen Notu okuyun.' }
      ]},
      { id:'classroom', e:'🎥', title:'Derste: kartlar, Follow Mode ve gösterimler', blocks:[
        { t:'p', html:'Dersi öğrendikten sonra, onu anlatma zamanı gelir. Classroom’da artık slayt sunmazsınız: Backoffice’te okuduğunuz <b>aynı etkinlik kartlarını</b> açar ve öğrencilerinizle birlikte bunların üzerinden geçersiniz. Bunu üç şey sağlar.' },
        { t:'h', html:'👁️ 1. Follow Mode: öğrencileriniz siz nereye giderseniz oraya gelir' },
        { t:'p', html:'<b>Follow Mode</b> ile öğrenciler otomatik olarak sizin açık tuttuğunuz kartı görürler. Bu <b>ekran paylaşımı değildir</b>: her öğrenci kartın gerçekten çalışabileceği kendi kopyasını alır — ve Öğretmen Notları yalnızca size görünür kalır. Bunu, açık bir kartın yanında görünen <b>Lead the group</b> anahtarıyla açarsınız. Deneyin:' },
        { t:'p', html:'<div class="card" id="fmDemo"><div class="fm-ctrl"><button class="lead-sw" id="fmSw"><i></i> Lead the group</button><button class="btn-g" id="fmNext">Next card →</button><span style="font-size:13px;color:var(--muted);font-weight:700" id="fmHint">Anahtarı açın, ardından sonraki karta geçin.</span></div><div class="fm"><div class="screen"><div class="sc-h"><span>👩‍🏫 Ekranınız</span><span>Eğitmen</span></div><div class="sc-card" id="fmT"></div></div><div class="screen"><div class="sc-h"><span>👧 Sofia’nın ekranı</span><span>Öğrenci</span></div><div class="sc-card" id="fmS"></div></div></div><div class="fm-out" id="fmOut"></div></div>' },
        { t:'cards', cols:3, items:[
          ['➡️','Kartı değiştirirsiniz','Sizi takip eden herkes için değişir.'],
          ['🖱️','Aşağı kaydırırsınız','Etkileşimli kartlarda, onların konumu sizinkine yetişir.'],
          ['🕐','Biri geç katılır','Doğrudan açık tuttuğunuz karta gelir.'],
          ['🚪','Uzaklaşırsınız','Öğrenciler bir “eğitmen uzaklaştı” bildirimi görür; geri döndüğünüzde takip devam eder.'],
          ['👥','Kim takip ediyor?','Her ismin yanındaki bir işaretçi kimin sizi takip ettiğini ve kimin yalnız çalıştığını gösterir.'],
          ['🔓','Kilitli değil','Bir öğrenci “Work independently” butonuna tıklayabilir ve “Return” ile geri dönebilir.']
        ]},
        { t:'h', html:'🖥️ 2. Follow Mode mu yoksa ekran paylaşımı mı?' },
        { t:'p', html:'Matematik derslerinde kural basittir: ders materyallerini gösterirken <b>her zaman Follow Mode</b> kullanın — ekran paylaşımı istenmez. Bir şeyi <b>göstermek</b> veya açıklamak için Classroom’daki <b>Beyaz Tahta</b> aracını kullanın:' },
        { t:'okbad', ok:['👁️ Kartlar için Follow Mode kullanın',['Grubu ders boyunca ilerletmek için.','Her öğrenci kendi kopyasında çalışır.','Öğretmen Notlarınız gizli kalır.']], bad:['🖥️ Ekran paylaşımı istenmez',['Gösterimler ve açıklamalar için <b>Beyaz Tahta</b> aracını kullanın.','Classroom’da henüz Zoom’daki gibi bir çizim aracı yoktur — Beyaz Tahta bu işi görür.','Ders kartını asla paylaşmayın: notlarınız görünür olur.']] },
        { t:'h', html:'🧩 3. Etkileşimli Etkinlikler' },
        { t:'p', html:'Birçok kart etkileşimlidir. Bazıları “Submit” butonuna basmanıza gerek kalmadan ilerlemenizi ve puanınızı kaydederken, bazıları basmanızı gerektirir.' },
        { t:'p', html:'Etkinliklerde — <b>Choice Questions (Çoktan Seçmeli Sorular)</b>, <b>Text and Formula Fields (Metin ve Formül Alanları)</b> ve <b>Drag-and-Drop (Sürükle-Bırak)</b> — işiniz bittiğinde puanınızın otomatik olarak kaydedildiğini göreceksiniz.' },
        { t:'p', html:'<div class="zoomtip"><span>🔍</span><div><b>İpucu:</b> Daha büyük bir pencerede açmak için aşağıdaki 3 videodan birine tıklayın. Buradan <b>yakınlaştırabilir</b> (+ / − butonları, fare tekerleği veya çift tıklama) ve her detayı görmek için sürükleyebilirsiniz.</div></div><div class="vidpair"><figure class="card gifcard"><span class="gtag ok">✅ Otomatik kaydedildi</span><button class="gclip" data-zoom="em/images/result_good_EM.mp4" data-ztitle="Otomatik kaydedildi" aria-label="Videoyu daha büyük aç"><video src="em/images/result_good_EM.mp4" autoplay loop muted playsinline></video><span class="zbadge">🔍 Büyütmek için tıklayın</span></button><figcaption>Sonuç otomatik olarak sağ üst köşede görünür.</figcaption></figure><figure class="card gifcard"><span class="gtag ko">🔁 Yanlış bir cevap</span><button class="gclip" data-zoom="em/images/result_bad_EM.mp4" data-ztitle="Yanlış bir cevap" aria-label="Videoyu daha büyük aç"><video src="em/images/result_bad_EM.mp4" autoplay loop muted playsinline></video><span class="zbadge">🔍 Büyütmek için tıklayın</span></button><figcaption>Bir hata varsa, sağ üst köşedeki ‘Redo’ simgesine tıklayıp tekrar deneyebilirsiniz.</figcaption></figure></div>' },
        { t:'p', html:'Bu arada metin, bağlantı veya dosya göndermeyi içeren etkinliklerde öğrencilerinizin <b>“Send”</b> butonuna tıkladığından emin olun:' },
        { t:'p', html:'<figure class="card gifcard wide"><button class="gclip" data-zoom="em/images/send_bottom.mp4" data-ztitle="“Send” butonu" aria-label="Videoyu daha büyük aç"><video src="em/images/send_bottom.mp4" autoplay loop muted playsinline></video><span class="zbadge">🔍 Büyütmek için tıklayın</span></button></figure>' },
        { t:'sim', flag:'mathClassroom', src:'math-classroom/EM_Classroom_Guide.html', e:'🎥', badge:'Simülasyon 2 / 2', title:'Classroom rehberi', text:'Classroom’da yeni modelin gerçek bir dersinin rehberli turu: kartlar, yalnızca sizin görebildiğiniz Öğretmen Notları, ilk kartın tüm notları ve Lead the group.' }
      ]},
    ]},

  { id:'em3', n:3, e:'⭐', color:'#F97316', title:'Ders Kalitesi',
    desc:'Bir dersin nasıl yapılandırıldığı — ve yapıyı koruyan üç alışkanlık: düzgün bir giriş, akıl yürütme soruları ve sabit bir kapanış.',
    obj:'Yeni modelde bir dersin nasıl yapılandırıldığını, kalite incelemelerinde nelere bakıldığını anlayın ve her derste bu yapıyı koruyan üç alışkanlık edinin: düzgün bir giriş, öğrencilere gerekçelerini açıklatan sorular ve sabit bir kapanış rutini.',
    offer:[['🧱','Yeni modelde bir dersin nasıl yapılandırıldığını anlayın.'],['🎬','Her dersi düzgün açın: ısınma, son dersle bağlantı, ödev, ders hedefi.'],['🧠','Belirli öğrencilere gerekçelerini açıklatan sorular sorun.'],['🏁','Her dersi 5–7 dakikalık sabit bir rutinle kapatın.']],
    sections:[
      { id:'structure', e:'🧱', title:'Ders nasıl yapılandırılır?', blocks:[
        { t:'p', html:'Yeni modele sahip kurslarda ders artık büyük bloklar içeren bir sunum ve ne zaman “özetleyeceğinizi” veya “kapatacağınızı” söyleyen bir slayt değildir. Ders, platformdaki <b>etkinlik kartlarının</b> bir dizisidir ve her kart öğrenci için kendi içeriğini, sizin için kendi notlarını getirir. Bu büyük bir anlama gelir: <b>dersin ritmini siz yönetirsiniz — slayt değil.</b>' },
        { t:'h', html:'🏷️ Etiketler size ne tür bir an olduğunu söyler' },
        { t:'p', html:'Birçok kart Öğretmen Notlarında <b>(CORE)</b> veya <b>(SUBMIT)</b> gibi bir etiket taşır. Bunlar size bir bakışta kartın ne tür bir öğretim anı olduğunu — ve öğrencinin özerkliğine ne kadar alan bırakacağınızı söyler. Her birine dokunun:' },
        { t:'p', html:'<div class="grid4"><button class="oq" data-oq><b>🧱 CORE</b><span>Dersin temel yapım aşaması.</span></button><button class="oq" data-oq><b>🪞 SELF-CHECK</b><span>Öğrenci kendi kavrayışını kontrol eder.</span></button><button class="oq" data-oq><b>🤖 AI-CREATE</b><span>Yapay zekanın kullanıldığı tek an — net bir sınırla.</span></button><button class="oq" data-oq><b>🎨 CHOICE/INTEREST</b><span>Kişisel bir seçim: kendi tarzları, kendi fikirleri.</span></button><button class="oq" data-oq><b>📤 SUBMIT</b><span>Bir şey teslim edilmeli veya yayınlanmalıdır.</span></button><button class="oq" data-oq><b>👥 PEER-FEEDBACK</b><span>Sınıf arkadaşları birbirlerinin çalışmaları hakkında yorum yapar.</span></button><button class="oq" data-oq><b>💭 REFLECT</b><span>Ne öğrendikleri hakkında düşünme anı.</span></button><button class="oq" data-oq><b>🏆 CHALLENGE</b><span>Ekstra, isteğe bağlı bir meydan okuma.</span></button><button class="oq" data-oq><b>🐞 DEBUG</b><span>Bile bile bir hatayı bulun ve düzeltin.</span></button><button class="oq" data-oq><b>🧪 SYSTEM-TEST</b><span>Tüm projeyi baştan sona test edin.</span></button></div>' }
      ]},
      { id:'seeing', e:'🔎', title:'Kalite incelemelerinde nelere bakılır?', blocks:[
        { t:'p', html:'Size hatırlatacak bir slayt olmadığı için dersin yapısını korumak artık sizin elinizdedir. Kalite incelemeleri her derse bir bütün olarak bakar: <b>ısınma</b>, <b>ders hedefi</b>, <b>uygulama</b>, sorduğunuz <b>sorular</b>, <b>özet</b>, <b>ödev</b> ve bir sonraki dersin <b>önizlemesi</b>.' },
        { t:'p', html:'Yeni modele sahip dersler genellikle canlı ve ilgi çekicidir. Zorluk, yol boyunca yapıyı kaybetmemektir — özellikle dersin başında ve sonunda:' },
        { t:'okbad', ok:['💚 Yapmaya devam edin',['Birden fazla öğrenciyi sürece dahil etmek.','Öğrencilere isimleriyle hitap etmek.','Gerçek pratik süresi vermek.']], bad:['💗 Güçlendirilecek noktalar',['Isınma ve selamlama.','Ödev kontrolü.','Öğrencilere gerekçelerini açıklatan sorular.','Sondaki özet.','Bir sonraki ders için merak uyandırma (teaser).']] },
        { t:'p', html:'Bunlar alışkanlıktır ve alışkanlıklar inşa edilebilir. Bu modülün geri kalanı size üç alışkanlık kazandırır: düzgün bir giriş, belirli öğrencilere yöneltilen akıl yürütme soruları ve sabit bir kapanış rutini.' }
      ]},
      { id:'opening', e:'🎬', title:'Düzgün bir giriş', blocks:[
        { t:'p', html:'Düzgün bir giriş sadece birkaç dakika sürer ve ardından gelen her şeyi hazırlar: öğrenciler karşılandıklarını hisseder, projelerinin ne durumda olduğunu hatırlar, evde ne yaptıklarını gösterir ve bugünün dersinin neyi hedeflediğini bilirler. Dört bölümden oluşur. Kullanabileceğiniz gerçek cümleler ve gerçek bir dersin videosuyla her birinin üzerinden geçin:' },
        { t:'p', html:'<div class="stc" data-set="open"><div class="stc-l"></div><div class="stc-r"></div></div>' },
        { t:'callout', kind:'tip', e:'⏱️', html:'Kısa tutun: dört bölüm toplamda <b>yaklaşık 5–7 dakika</b>. Bağ kurarak başlayan bir ders daha iyi işler — daha yavaş değil.' }
      ]},
      { id:'reasoning', e:'🧠', title:'Öğrencilere sesli düşündüren sorular', blocks:[
        { t:'p', html:'“Anlaşıldı mı?” sorusu neredeyse her zaman “evet” yanıtını alır — ve size hiçbir şey anlatmaz. İşe yarayan sorular, bir öğrenciye <b>gerekçesini açıklatan</b> sorulardır: bir şey neden oluyor, nereden biliyorlar, … değişseydi ne değişirdi. Ve en çok <b>belirli bir öğrenciye ismiyle hitap ettiğinizde</b> işe yararlar.' },
        { t:'p', html:'<div class="card"><div class="wh"><b>Kapalı mı yoksa akıl yürütme sorusu mu? Değiştirip karşılaştırın</b><span class="tag">Deneyin</span></div><div class="seg" data-cmp="questions"><button data-k="v" aria-pressed="true">😐 Kapalı</button><button data-k="s" aria-pressed="false">🧠 Akıl yürütme</button></div><div class="fbx" data-cmpout="questions"></div></div>' },
        { t:'h', html:'🎯 Hangi sorular öğrencileri düşündürür? Her biri için karar verin' },
        { t:'sorter', yes:'🧠 Düşündürür', no:'😐 Düşündürmez', items:[
          ['🙋','“Leo, oyuncu dokunduğunda parayı nasıl kaybettirdin?”','yes','<b>Evet.</b> Bir isim artı bir “nasıl”: Leo mantığı kendi kelimeleriyle açıklamak zorundadır.'],
          ['🙂','“Herkes tamam mı? Devam edelim mi?”','no','<b>Hayır.</b> Gruba sorulan evet/hayır sorusu — cevap vermek için kimsenin düşünmesine gerek yoktur.'],
          ['🔍','“Ana, bu satırı kaldırırsak ne olacağını düşünüyorsun? Dene ve bize söyle.”','yes','<b>Evet.</b> Tahmin eder, test eder ve açıklar — tek bir soruda Öğrenme Döngüsü.'],
          ['✅','“Puanın nasıl çalıştığı anlaşıldı mı?”','no','<b>Hayır.</b> Anlaşılsa da anlaşılmasa da “evet” yanıtı alırsınız. Bunun yerine birinden bunu açıklamasını isteyin.']
        ]},
        { t:'callout', kind:'good', e:'💡', html:'Soruları yayın: farklı öğrenciler, farklı anlar — kontrol noktasında, üretim yaparlarken ve özette.' }
      ]},
      { id:'closing', e:'🏁', title:'Sabit bir kapanış rutini', blocks:[
        { t:'p', html:'Dersin sonu genellikle kenara itilir — çünkü zaman tükenir veya etkinliği bitirmek kadar önemli görünmez. Ancak öğrencilerin öğrendiklerini kelimelere döktükleri, bir sonraki dersi merak ettikleri ve evde ne yapacaklarını bilerek ayrıldıkları an burasıdır. İyi bir zaman yönetimiyle bunu her derste gerçekleştirebilirsiniz: <b>son 5–7 dakikayı</b> <b>sabit bir kapanış rutinine</b> ayırın ve etkinlik bitmemiş olsa bile zamanında başlatın. Matematik dersleriniz <b>80 dakikadır</b>: nasıl çalıştığını görmek için kaydırın:' },
        { t:'p', html:'<div class="tline" id="tline"><div class="seg" id="tlLen" style="margin-bottom:12px"><button data-len="80" aria-pressed="true">⏱️ 80 dakikalık ders</button></div><div style="display:flex;align-items:center;gap:14px;flex-wrap:wrap"><span class="clock" id="tlClock">0′</span><input type="range" min="0" max="80" value="0" id="tlRange" style="flex:1;min-width:220px" aria-label="Dersin dakikası"></div><div class="tl-bar"><div class="tl-open" id="tlOpen" style="width:8.75%">Giriş</div><div class="tl-main" id="tlMain" style="width:81.25%">Kartlar: üret, keşfet, düzelt, sun</div><div class="tl-close" id="tlClose" style="width:10%">Kapanış</div><span class="tl-head" id="tlHead" style="left:0"></span></div><div class="tl-scale" id="tlScale"><span>0′</span><span>20′</span><span>40′</span><span>60′</span><span>80′</span></div><div class="tl-out" id="tlOut"><span>👋</span><span><b>Giriş.</b> Isınma ve selamlama, önceki dersle bağlantı, ödev kontrolü, ders hedefi.</span></div></div>' },
        { t:'p', html:'Rutinin üç adımı vardır. Üzerinden geçin — her biri gerçek bir dersin videosuyla:' },
        { t:'p', html:'<div class="stc" data-set="close"><div class="stc-l"></div><div class="stc-r"></div></div>' },
        { t:'callout', kind:'warn', e:'⏰', html:'<b>İşe yarayan bir ipucu:</b> Dersin <b>bitiminden 5–8 dakika öncesine</b> (80 dakikalık bir derste 72.–75. dakikaya) bir zamanlayıcı kurun. Çaldığında, nerede olursanız olun dersi kapatın. Bitmeyen bir kart bir sonraki derste veya ödevin bir parçası olarak devam edebilir.' }
      ]},
      { id:'metrics', e:'📊', title:'Hâlâ sorumlu olduğunuz metrikler', blocks:[
        { t:'defn', e:'📈', html:'<b>Slaytlar gitti — yapı gitmedi.</b> Ders yapısının <b>katılım</b>, <b>öğrenci elde tutma (retention)</b> ve <b>ödev teslimi</b> gibi önemli metriklerle yakından bağlantılı olduğunu unutmayın. Öğrencilere ödevi hatırlatmak, açıklamak ve incelemek, ısınma ve kapanış yapmak, ders hedeflerini açıklamak ve bir sonraki dersin önizlemesini yapmak öğrencinin derse bağlılığına, kalıcılığına ve katılımına katkıda bulunur.' },
        { t:'h', html:'Üç metrik, üç somut alışkanlık' },
        { t:'trio', items:[
          ['🗓','Katılım / Yoklama','Başlangıçta, ısınma sırasında, öğrenciler yerleşirken işaretleyin. Dersin sonuna, toparlandığınız ve unutma ihtimalinizin yüksek olduğu anlara bırakmayın.'],
          ['📚','Ödev','Ödev artık “aynı projenin bir sonraki yinelemesi” olduğundan, bunu önceki dersin kontrol noktası içinde inceleyin. Bir öğrencinin ödevi yoksa bu sadece sıfır vermek için değil, teknik olarak takılıp takılmadığına bakmanız için bir sinyaldir.'],
          ['💚','Elde tutma (Retention)','Çalışmalarını teslim etmeyi bırakan bir öğrenci, genellikle derse katılmayı bırakmadan önce kopuş yaşıyordur. Bu sinyal sizin en erken uyarınızdır.']
        ]},
        { t:'callout', kind:'warn', e:'⚠️', html:'<b>Unutmayın:</b> Öğrencilerin metin, bağlantı veya dosya gönderdiği etkinliklerde çalışmaları yalnızca <b>“Send”</b> butonuna tıkladıklarında kaydedilir. Harika geçen bir ders yine de sıfır sınıf çalışması tamamlaması olarak görünebilir. Bu hatırlatmayı kapanış rutininizin bir parçası yapın.' }
      ]},
      { id:'qcheck', e:'✅', title:'Ders kalitesi kontrol listeniz', blocks:[
        { t:'p', html:'İşte bu modüldeki her şey tek bir kontrol listesi olarak. Bir alışkanlık haline gelene kadar ilk dersleriniz sırasında yanınızda bulundurun:' },
        { t:'check', title:'✅ Ders kalitesi kontrol listeniz', groups:[
          { h:'☑️ Dersten önce', items:['Backoffice’te bu ders için öğretmen notlarını okudum.','Kapanışta merak uyandırabilmek (teaser) için <b>bir sonraki</b> dersi de okudum.','Başlangıçta göstereceğim bitmiş sonucu açtım (video, GIF veya çalışan proje).','Bu dersin izin verdiği tek yapay zeka adımını ve kapsam sınırını biliyorum.','Bir proje bozulursa yedek şablonun nerede olduğunu biliyorum.','Isınma sırasında yoklamayı almak için bir planım var.','Kapatmadan önce ihtiyaç duyan etkinliklerde öğrencilere <b>“Send”</b> butonuna tıklamalarını hatırlatacağım.'] },
          { h:'🎬 Giriş', items:['Her öğrenciyi ismiyle selamlıyorum ve kısa bir ısınma yapıyorum.','Bugünün dersini bir önceki derse bağlıyorum.','Ödevi kontrol ediyorum ve iyi giden özel bir şeyi belirtiyorum.'] },
          { h:'🧠 Ders sırasında', items:['Belirli öğrencilere, isimleriyle hitap ederek akıl yürütme soruları soruyorum.','Birden fazla öğrenciyi dahil etmeye devam ediyor ve gerçek pratik zamanı veriyorum.','Kapanışın zamanında başlaması için saate göz kulak oluyorum.'] },
          { h:'🏁 Kapanış — son 5–7 dakika', items:['Özeti öğrenciler yapıyor: ne öğrendiklerini söylüyorlar.','Bir sonraki ders için motive edici bir teaser veriyorum.','Bir sonraki ödevi ve nasıl teslim edileceğini açıklıyorum.'] }
        ]}
      ]},
      { id:'emmath3', e:'🧮', title:'Matematik derslerinde odak noktaları', blocks:[
        { t:'h', html:'📤 Gönderim ve puanlı kartlar' },
        { t:'cards', cols:2, items:[
          ['📤','Sınıf çalışması ve ödev','Öğrencilerin görevlerini ders sırasında göndermelerini sağla. Ödevi teşvik et ve gönderildiğinden emin ol.'],
          ['🧮','Puanlı her kart, bireysel olarak','<b>Puanlı her kartı</b> her öğrenci platformda bireysel olarak tamamlamalıdır. Yalnızca öğretmenin ekranında çözülen puanlı bir kart, <b>her öğrenci için sıfır</b> sayılır.']
        ]},
        { t:'h', html:'📊 Öğretmen paneli ve geri bildirim' },
        { t:'steps', items:[
          ['Sonuçları kontrol et','Öğrenciler gönderdikten sonra sonuçları <b>öğretmen panelinden</b> kontrol et.'],
          ['Birçok öğrenci hata yaptıysa','Konuyu <b>farklı bir örnekle</b> yeniden açıkla ve öğrencilerin tekrar denemelerini sağla.'],
          ['Açıklama iste','Bir veya iki öğrenciden çözümlerini açıklamalarını iste. Hataları birer öğrenme fırsatı olarak değerlendir.'],
          ['Cevap değil, ipucu ver','Görevde ipucu yoksa ipucunu sen ver: cevabı söylemek yerine <b>yönlendirici sorular</b> sor ve tam çözümü yalnızca öğrenci denedikten sonra göster. Bu sorular ve cevapları öğretmen notlarında yer alır.']
        ]},
        { t:'h', html:'⚡ Açıklama sırasında anlık kontroller' },
        { t:'p', html:'Açıklama yaparken öğrencileri aktif tut: herkesin aynı anda cevap verdiği <b>anlık kontroller</b> kullan.' },
        { t:'okbad', ok:['✅ Bunları kullan',['Sohbete hızlı cevaplar.','Parmaklarla gösterme.','Kısa tepkiler.']], bad:['🚫 Bundan kaçın',['“Her şey anlaşıldı mı?” — neredeyse her zaman “evet” cevabı alırsın ve ne anladıkları hakkında hiçbir şey öğrenmezsin.']] },
        { t:'h', html:'✍️ Açık uçlu görevler' },
        { t:'callout', kind:'tip', e:'✍️', html:'Açık uçlu görevleri (örneğin kompozisyon soruları) <b>bir sonraki dersten önce elle</b> değerlendir. Nadirdirler ama olurlar.' },
        { t:'callout', kind:'bad', e:'⚠️', html:'<b>Modül kontrolü: riskli stratejiyi tespit edin.</b> Dikkat: Bu testte derse <b>ZARAR VERECEK</b> olan <b>YANLIŞ</b> stratejiyi seçmelisiniz. İyi olanı değil!' }
      ]}
    ]},

  { id:'m1', n:4, e:'📐', color:'#0EA5E9', title:'5. Seviye · Kursun içeriği',
    desc:'Math 5’in yeni modelde nasıl işlendiği ve kursun 1. modülünün ilk dersi.',
    obj:'Math 5’in ilk dersine hazırlan. Bu kursta 9–11 yaş aralığındaki öğrenciler her modülde gerçek hayattan bir problemi çözer ve ihtiyaç duydukları matematiksel kavramları bu süreçte keşfeder.',
    offer:[['🏙️','Kursu ve vakaya dayalı hikâyesini tanı.'],['🧠','Yeni eğitim modelinin matematik derslerinde nasıl uygulandığını anla.'],['📖','İlk dersin her bölümünde ne olduğunu öğren.'],['📘','Dersleri ve öğretmen notlarını Backoffice’te gözden geçir.']],
    sections:[
      { id:'ov', e:'🏙️', title:'Kurs', blocks:[
        { t:'meta', items:[['🙂','Yaş','9–11'],['⏱️','Ders','80 dk'],['👥','Grup','en fazla 8 öğrenci'],['📅','Süre','32 hafta']] },
        { t:'p', html:'<b>Math Adventures 5. Seviye</b> vakaya dayalı bir kurstur. Öğrenciler konuları tek tek çalışmak yerine <b>her modülde gerçek hayattan bir problemi</b> çözer — bir şehir parkı tasarlamak, okul şenliği düzenlemek, bir tarifle yemek yapmak, spor rekorlarını takip etmek — ve ihtiyaç duydukları matematiği yol boyunca keşfeder.' },
        { t:'p', html:'Modül 1’in ilk dersinde öğrenci, <b>Sofya ve Rafi’nin mimarlık ekibine</b> katılır. Ekip bir <b>okul parkı</b> tasarlıyor; ancak önce tasarım fikirlerini çizimlerle doğru ve net bir şekilde ifade etmeleri gerekiyor. Bunun için öğrenciler “mimarın araç kutusunu” tanır: nokta, doğru parçası, ışın ve doğru.' },
        { t:'callout', kind:'tip', e:'🇹🇷', html:'Kurs, <b>Maarif programının 5. sınıf matematik müfredatıyla</b> (<code>MAT.5.1</code> – <code>MAT.5.6</code>) tamamen uyumludur: her kazanım, uygulamalı bir vakanın içinde ele alınır.' }
      ]},
      { id:'model', e:'🧠', title:'Matematikte yeni model', blocks:[
        { t:'callout', kind:'tip', e:'🧩', html:'<b>Hatırlatma:</b> Math 5, yeni matematik kursunun yedi ilkesini izler: Somut → Görsel → Soyut, basitten karmaşığa, Yeni Nesil Sorular, Öğrenme Döngüsü, sonuç kontrolleri, üç yönlü geri bildirim ve sorumluluğun aşamalı devri (bkz. Modül 1).' }
      ]},
      { id:'les', e:'📖', title:'İlk ders', blocks:[
        { t:'p', html:'Modül 1: <b>Doğrular ve açılar. Çokgenler ve çemberler.</b> İlk derste öğrenci, okul parkı planını çizebilmek için geometrinin temel dilini öğrenir. Dersi aç:' },
        { t:'lessons', key:'m1', items:[
          { tab:'D1', e:'🏛️', h:'1. Ders — Mimari çizimin temelleri', p:'Matematik Maceraları’nın ilk dersi, öğrenciyi Sofya ve Rafi’nin mimarlık ekibiyle tanıştırır. Ekip bir okul parkı tasarlamaktadır; ancak önce tasarım fikirlerini çizimlerle doğru ve net bir şekilde ifade etmeleri gerekir. Öğrenci nokta, doğru parçası, ışın ve doğruyu öğrenirken “mimarın araç çantasını” tanır. <code>MAT.5.3.1</code>',
            acc:[['📚','Bilmen gerekenler','<ul><li><b>Nokta</b>: tam olarak bir yeri gösterir ve boyutu yoktur (uzunluğu, genişliği ve kalınlığı yoktur). Büyük harfle gösterilir: A.</li><li><b>Doğru parçası</b>: iki noktayla sınırlıdır ve belirli bir uzunluğu vardır. [AB] şeklinde gösterilir; [AB] ve [BA] aynı doğru parçasıdır. Cetvelle ölçülebilen tek şekildir.</li><li><b>Işın</b>: bir başlangıç noktası vardır ve tek yönde sonsuza kadar uzanır. [AB şeklinde gösterilir: ilk harf başlangıç noktasıdır. [AB ve [BA <b>iki farklı ışındır</b>.</li><li><b>Doğru</b>: Her iki yönde de sonsuza kadar uzanır ve uç noktası yoktur. AB doğrusu şeklinde adlandırılır.</li><li>Bir doğru parçası bir uçtan uzatılırsa ışın, iki uçtan uzatılırsa doğru olur.</li><li>Mimarın araç çantası: cetvel, pergel ve gönye. Pergel ve gönye ilerideki dersler için önceden tanıtılır.</li><li>Derste iki tür kart vardır: <b>mavi</b> kartlar tüm sınıfla birlikte işlenir ve puanlanmaz (5, 6 ve 8. teori kartları); <b>yeşil ✍️</b> kartlar bireysel olarak çözülür, puanlıdır ve otomatik kontrol edilir (7, 9, 12 ve 13. kartlar).</li></ul>'],
                 ['⏱️','80 dakikanın dağılımı','<ul><li><b>Giriş (17 dk):</b> Sofya ve Rafi ile tanışma ve bağlantı kontrolü (5 dk), roller ve ruh hâli (5 dk), kurallar ve iki kart türü (4 dk), mimarın araç çantası (3 dk).</li><li><b>Nokta ve doğru parçası (16 dk):</b> nokta (5 dk) ve doğru parçası (4 dk) teori kartları, ardından ✍️ Bireysel çalışma 1 (7 dk).</li><li><b>Işın ve doğru (12 dk):</b> teori kartı (5 dk), ardından ✍️ Bireysel çalışma 2 (7 dk).</li><li><b>Mola (3 dk).</b></li><li><b>Dersin kazanımları (14 dk):</b> ✍️ Bireysel çalışma 3 (7 dk) ve ✍️ Yeni Nesil Sorular (7 dk).</li><li><b>Kapanış (10 dk):</b> değerlendirme ve yansıtma (3 dk); modül hedefi, ödev ve sonraki ders (7 dk).</li><li>Toplam yaklaşık 72 dakika ve geçişler, geç kalanlar ve sorular için yaklaşık 8 dakika pay. “Yaygın hataları kontrol etme” ve “Ek görev” kartları 80 dakikaya dâhil değildir: yalnızca zaman kalırsa yapılır.</li></ul>'],
                 ['🎯','Kazanımlar','<ul><li>Nokta, doğru parçası, ışın ve doğruyu uçlarına göre birbirinden ayırt eder.</li><li>Gösterimleri okur ve yazar: A, [AB], [AB, AB; [AB] = [BA] olduğunu, ancak [AB ≠ [BA olduğunu bilir.</li><li>Yalnızca doğru parçasının ölçülebileceğini ve bir doğru parçası uzatıldığında önce ışına, sonra doğruya dönüştüğünü bilir.</li><li>Dersin 4 yaygın hatasından kaçınır.</li></ul>'],
                 ['🧑‍🏫','Senin rolün','<ul><li>Teori kartlarını tüm sınıfla birlikte işle: önce animasyonu göster, sonra tanımı açıkla ve kontrol sorularını grupla birlikte cevapla. Bu kartlar puanlanmaz.</li><li>Bireysel çalışma kartlarında öğrenci tek başına çalışır: <b>ilk denemeden önce ipucu verme</b>. Öğrenci hata yaparsa cevabı söyleme; onu öğretmen notlarında belirtilen teori kartına yönlendir.</li><li>Bu ilk ders olduğu için her öğrencinin derse katıldığından, arayüzü gördüğünden ve iki kart türünü anladığından emin ol.</li><li>Yeni Nesil Sorulardan sonra yalnızca “Cevap ne?” diye sorma; “Nasıl karar verdin?” diye sor.</li><li>Kapanışta her öğrenci bir modül hedefi seçer ve bunun kendisi için neden önemli olduğunu söyler. Ödevi hatırlat: zorunlu bölüm 3 sorudur ve yaklaşık 5 dakika sürer, diğer sorular bonustur.</li></ul>'],
                 ['📌','Dikkat edilmesi gerekenler','<ul><li>Doğru parçası doğru değildir: uç noktalarının ötesine uzanmaz.</li><li>[AB] = [BA], çünkü doğru parçasında harf sırası önemli değildir; ancak [AB ≠ [BA, çünkü ışında ilk harf başlangıç noktasını gösterir.</li><li>Işında harflerin sırası önemlidir: [AB ışını A’dan başlar, B’den başlamaz.</li><li>Noktanın boyutu yoktur: “alanı olan küçük bir nokta” değildir.</li><li>Dersin 60 dakikası geçtiyse “Yaygın hataları kontrol etme” kartını atla; bireysel çalışmayı ve Yeni Nesil Soruları ise asla atlama.</li><li>Bireysel çalışma 1’deki interaktif cetveli dersten önce kendin dene.</li></ul>']] }
        ]},
        { t:'callout', kind:'tip', e:'🗺️', html:'<b>Hatırlatma:</b> dersten önce bu dersin tüm öğretmen notlarını incele ve ilk slayttaki video bilgilendirmesini izle (bkz. Modül 2).' }
      ]},
      { id:'goals', e:'🏆', title:'Öğrenci neler kazanır', blocks:[
        { t:'cards', cols:2, items:[
          ['🔢','Sayılar, işlemler ve ekonomi','Öğrenciler çok basamaklı işlemleri güvenle yapar ve bunları gerçek bütçeleme ve kâr/zarar durumlarına (okul kermesi örneği) uygular.'],
          ['📐','Geometri ve ölçme','Noktalar, doğrular, açılar, çokgenler, daireler, çevre ve alan kavramlarını kullanarak gerçek mekân düzenleri tasarlar (park ve oyun alanı örnekleri).'],
          ['🍰','Kesirler, ondalık sayılar ve yüzdeler','Yemek pişirme ve spor karşılaştırması bağlamlarında kesirleri, ondalık sayıları ve yüzdeleri akıcı biçimde dönüştürür ve karşılaştırır.'],
          ['📊','Veri, cebir ve olasılık','Kendi verilerini toplar ve görselleştirir, denklem temelli bulmacaları çözer, sayı dizilerini tanır ve günlük olayların olasılıklarını tahmin eder.']
        ]},
        { t:'acc', open:false, items:[
          ['🎯','Kursun hedefleri','<ul><li><b>Temel işlemleri kavramak:</b> çok basamaklı çarpma/bölme, basamak değeri ve dört işlemde akıcı olmak.</li><li><b>Kesir, ondalık sayı ve yüzde becerileri:</b> bunları karşılaştırmak, dönüştürmek, toplamak ve çıkarmak.</li><li><b>Geometri ve ölçme:</b> şekilleri tanımlamak, açıları ölçmek, çevre ve alan hesaplamak.</li><li><b>Veri analizi:</b> araştırma sorusu kurmak, sıklık tablosu ve çubuk grafik hazırlamak, kanıta dayalı sonuca varmak.</li><li><b>Cebirsel ve olasılıksal akıl yürütme:</b> eşitliğin korunması, işlem sırası, sayı dizileri, basit algoritmalar ve 0–1 ölçeğinde olasılık.</li><li><b>Analitik düşünme:</b> hesaplamanın ötesinde açıklama gerektiren Yeni Nesil Sorular.</li></ul>'],
          ['👀','İlerleme nasıl takip edilir?','<ul><li><b>Modül görevleri:</b> her modülün sonunda (yaklaşık her 4 derste bir) vaka temelli bir görev.</li><li><b>Uygulamalı ödevler:</b> her dersin ikinci yarısında, o dersin kazanımına bağlı bireysel görev.</li><li><b>Çözüm belgeleri:</b> öğrencinin çözüm sürecini, hatalarını ve son cevabını gösteren, öğretmenin incelediği şablon.</li><li><b>İlerleme panosu</b> ve <b>veli raporları</b> (her modülün 1., 4. ve 8. dersinden sonra).</li></ul>']
        ]}
      ]},
      { id:'syl', e:'📜', title:'Kurs müfredatı', blocks:[
        { t:'p', html:'Kurs 32 haftadır ve 4 modülden oluşur. Her modülü aç:' },
        { t:'acc', open:false, items:[
          ['📐','Modül 1 · Doğrular ve açılar. Çokgenler ve daireler','<ol><li>Mimari çizimin temelleri <code>MAT.5.3.1</code></li><li>Nokta, Doğru Parçası ve Doğrunun Özellikleri <code>MAT.5.3.2</code></li><li>Açıları Hassas Bir Şekilde Ölçme <code>MAT.5.3.3</code></li><li>Modül incelemesi <code>MAT.5.3.4</code></li><li>Oyun alanları oluşturma: çokgenlere giriş <code>MAT.5.3.5</code></li><li>Şekillerin özellikleri: üçgenlerin ve dörtgenlerin sırları <code>MAT.5.3.6</code></li><li>Çember İçine Çokgen Çizme <code>MAT.5.3.7</code></li><li>Şekilleri birleştirme. Modül tekrarı</li></ol><p><b>Sonuç:</b> çizim temelleri, noktaların, doğru parçalarının ve doğruların özellikleri ile hassas açı ölçümü; çokgenler ve daireler konusunda sağlam bir kavrayış ve şekilleri birleştirerek geometrik problemleri özgüvenle çözme.</p>'],
          ['🔢','Modül 2 · Sayılar ve işlemler. Çevre ve alan','<ol start="9"><li>Büyük sayıların okunması ve yazılması, basamak değerleri <code>MAT.5.1.1</code></li><li>Büyük sayılarla toplama ve çıkarma <code>MAT.5.1.1</code></li><li>Doğal sayılarla çarpma ve bölme <code>MAT.5.1.2</code></li><li>Karmaşık Hesaplamalar ve İşlem Önceliği: Modül Tekrarı <code>MAT.5.1.2</code></li><li>Doğal Sayıların Günlük Yaşamda Kullanımı: Dikdörtgenin Çevresi <code>MAT.5.1.2</code>, <code>MAT.5.4.1</code></li><li>Alan ölçümü <code>MAT.5.4.1</code>, <code>MAT.5.4.2</code></li><li>Alan ve çevre: hangisi daha önemli? <code>MAT.5.4.3</code></li><li>Yenileme Problemlerini Çözme: Modül Tekrarı <code>MAT.5.4.4</code></li></ol><p><b>Sonuç:</b> büyük sayıları okuma ve yazma, basamak değeri, dört işlem; dikdörtgenlerin çevresini ve alanını hesaplama ve bunları yenileme ve alan planlaması gibi pratik problemlere uygulama.</p>'],
          ['🍰','Modül 3 · Kesirler, ondalık sayılar ve yüzdeler','<ol start="17"><li>Kesirler, bileşik kesirler ve karma sayılar <code>MAT.5.1.3</code></li><li>Kesirleri Ondalık Sayılara ve Yüzdelere Dönüştürme <code>MAT.5.1.3</code></li><li>Kesirlerde toplama ve çıkarma <code>MAT.5.1.3</code></li><li>Modül incelemesi <code>MAT.5.1.3</code>, <code>MAT.5.1.4</code></li><li>Kesirlerin karşılaştırılması <code>MAT.5.1.4</code></li><li>Kesirlerin, karma sayıların ve bileşik kesirlerin karşılaştırılması <code>MAT.5.1.4</code></li><li>Ondalık sayıların karşılaştırılması <code>MAT.5.1.4</code></li><li>Modül incelemesi</li></ol><p><b>Sonuç:</b> kesirleri, karma sayıları, bileşik kesirleri ve ondalık sayıları doğru karşılaştırma ve sayısal değerleri güvenle sıralama.</p>'],
          ['📊','Modül 4 · Veri toplama: istatistiğe giriş','<ol start="25"><li>Kategorik verilerle çalışma: araştırma sorusu ve anket <code>MAT.5.5.1</code></li><li>Çetele tabloları ve sıklık tabloları <code>MAT.5.5.1</code></li><li>Nokta Grafikleri ve Sütun Grafikleri <code>MAT.5.5.1</code></li><li>Daire grafikleriyle çalışma. Modül özeti <code>MAT.5.5.1</code>, <code>MAT.5.5.2</code></li><li>Örüntülere ve dizilere giriş <code>MAT.5.2.2</code>, <code>MAT.5.2.3</code></li><li>Olasılık ölçeğini anlama <code>MAT.5.6.1</code></li><li>Final sınavlarına hazırlık</li><li>Mezuniyet dersi</li></ol><p><b>Sonuç:</b> anketler, çetele ve sıklık tablolarıyla kategorik veri toplama; nokta, sütun ve daire grafikleriyle gösterme; istatistiksel ifadeleri yorumlama ile sayısal ve geometrik örüntüleri fark edip sürdürme.</p>']
        ]}
      ]},
      { id:'req', e:'🤓', title:'Katılım koşulları', blocks:[
        { t:'p', html:'<ul><li>4. sınıf matematik müfredatını veya eşdeğer düzeyde bir programı tamamlamış olmak.</li><li>Çok basamaklı sayılarla toplama, çıkarma, çarpma ve bölme işlemlerini güvenle yapabilmek.</li><li>Temel kesir ve ondalık sayı kavramlarını bilmek ve yüz binlere kadar olan sayılarda basamak değerini anlayabilmek.</li><li>Bulmaca çözmeye, örüntüleri keşfetmeye ve gerçek hayat problemleriyle öğrenmeye ilgi duymak.</li></ul>' }
      ]},      { id:'bo', e:'📘', title:'Dersleri Backoffice’te gözden geçir', blocks:[
        { t:'p', html:'Kontrolden önce kursu Backoffice’te aç ve ilk dersi kendi hızında oku — etkinlik kartları ve öğretmen notları orada. Süre sınırı yok.' },
        { t:'link', href:'https://bo.kodland.org/courses/2218', e:'📘', title:'Kursu Backoffice’te aç', small:'[2218] Math 5 — dersler ve öğretmen notları' },
        { t:'callout', kind:'warn', e:'🔄', html:'Backoffice’teki ders içerikleri, öğrencilerden ve eğitmenlerden gelen geri bildirimlere göre güncellenmeye devam edecek. Bir değişiklik olduğunda, dersi hazırlayabilmen için sana önceden haber verilecek.' }
      ]}
    ]},

  { id:'m2', n:5, e:'🧮', color:'#8B5CF6', title:'6. Seviye · Kursun içeriği',
    desc:'Math Adventures 6. Seviye: kurs kartı, kazanımlar, ilk ders, müfredat ve katılım koşulları.',
    obj:'10–12 yaş öğrencilere yönelik Math Adventures 6. Seviye kursunun genel yapısını, kazanımlarını ve 4 modüllük müfredatını tanı ve ilk derse hazırlan.',
    offer:[['📋','Kursun genel bilgilerini ve hedeflerini öğren.'],['🏆','Öğrencilerin kurs sonunda hangi becerileri kazanacağını öğren.'],['📖','İlk dersin her bölümünde ne olduğunu öğren.'],['📜','4 modülün konularını ve sonuçlarını gör.'],['📘','Dersleri ve öğretmen notlarını Backoffice’te gözden geçir.']],
    sections:[
      { id:'l6ov', e:'📋', title:'Kurs', blocks:[
        { t:'meta', items:[['🙂','Yaş','10–12'],['⏱️','Ders','80 dk'],['👥','Grup','en fazla 8 öğrenci'],['📅','Süre','32 hafta']] },
        { t:'p', html:'<b>Math Adventures 6. Seviye</b>, 10–12 yaş arası çocuklar için tasarlanmış kapsamlı ve ilgi çekici bir matematik kursudur. Temel aritmetik becerilerini geliştirmeyi, kesirler ve ondalık sayılarla çalışmayı ve geometriyle problem çözmeyi amaçlar. Gerçek hayattan örnekler derse entegre edilir; öğrenciler her 8 derste bir interaktif ve macera tarzı görevlerle matematiğin günlük hayatta nasıl kullanıldığını öğrenir.' },
        { t:'callout', kind:'tip', e:'🏠', html:'<b>Ödev:</b> Her hafta bir <b>“Haftalık Meydan Okuma”</b> görevi verilir. Öğrenciler 32 hafta boyunca oyunlaştırılmış bir öğrenme deneyimine katılır. Bu etkileşimli görevler, ders materyalini pekiştirir ve öğrenci gelişiminin takip edilmesini sağlar.' },
        { t:'callout', kind:'warn', e:'🧭', html:'<b>Grup ve birebir dersler:</b> grup dersleri 80 dakika, birebir dersler 50 dakikadır. Yeni modelin ilkeleri (Modül 1–3) ve teknik adımlar (Modül 7) bu seviye için de geçerlidir.' }
      ]},
      { id:'l6goals', e:'🏆', title:'Öğrenci neler kazanır', blocks:[
        { t:'cards', cols:2, items:[
          ['🔢','İşlemlerde yeterlilik','Öğrenciler tam sayılar, kesirler ve ondalık sayılarla işlemlerde uzmanlaşır.'],
          ['🧩','Temel cebir ustalığı','Basit denklemleri anlar ve çözer, cebirsel ifadeleri sadeleştirir.'],
          ['📐','Geometrik beceriler','Geometrik şekillerin alanlarını ve hacimlerini hesaplar, geometrik dönüşümleri uygular.'],
          ['📊','Veri analizi yetenekleri','Verileri etkili biçimde analiz eder, tablo ve grafikleri yorumlar.']
        ]},
        { t:'acc', open:false, items:[
          ['🎯','Kursun hedefleri','<ul><li><b>Oranlar ve yüzdelerle problem çözme:</b> oran ve orantı ile yüzdeleri içeren gerçek yaşam problemlerini çözmek.</li><li><b>Temel cebire giriş:</b> cebirsel ifadeler ve basit denklemler.</li><li><b>Geometrinin temelleri:</b> alan ve hacim hesaplamak, şekil dönüşümlerini anlamak.</li><li><b>Veri yorumlama:</b> grafikleri yorumlamak ve istatistiklerle çalışmak.</li></ul>'],
          ['🧮','Zor beceriler','<ul><li>Tam sayılarla, kesirlerle ve ondalık sayılarla işlemler.</li><li>Basit cebirsel denklemlerin çözümü.</li><li>Geometrik şekillerin alan ve hacimlerinin hesaplanması.</li><li>Yüzde ve orantılarla çalışmak.</li><li>Verileri yorumlama ve ortalamayı hesaplama.</li></ul>'],
          ['🤝','Kolay beceriler (soft skills)','<ul><li>Mantıksal ve analitik düşünmede gelişme.</li><li>Problem çözme ve karar verme becerisi.</li><li>Çözümleri planlama ve yapılandırma becerisi.</li><li>Matematiksel bilgiyi günlük yaşamda uygulama konusunda güven.</li></ul>'],
          ['👀','İlerleme nasıl takip edilir?','<ul><li><b>Göreve dayalı zorluklar:</b> her 8 derste bir, öğrencilerin modüldeki ustalığını değerlendiren eğlenceli görevler.</li><li><b>Pratik ödevler:</b> her dersin ikinci bölümünde öğrenciler görevleri kendi hızlarında tamamlar; bireysel ilerleme izlenir ve gerektiğinde zamanında destek verilir.</li><li><b>Haftalık zorluklar:</b> geleneksel ev ödevinin yerine geçen 32 haftalık oyunlaştırılmış deneyim.</li></ul>']
        ]}
      ]},
      { id:'l6les', e:'📖', title:'İlk ders', blocks:[
        { t:'p', html:'Modül 1: <b>Sayılar, bölünebilirlik ve tamsayılar.</b> İlk derste öğrenci, Rafi’nin şenlik fırınında bölenleri ve katları keşfeder. Dersi aç:' },
        { t:'lessons', key:'m2', items:[
          { tab:'D1', e:'🧁', h:'1. Ders — Doğal sayıların çarpanları ve katları', p:'Rafi, okul şenliği için kendi fırınını açmak istiyor ve Sofya’nın titizliğine ihtiyacı var. Öğrenci fırıncı yardımcısıdır ve bu ders onun ilk vardiyasıdır: kapkekleri eşit sıralara dizerken, fırından çıkan partileri sayarken ve kumbarada para biriktirirken bölenleri ve katları kullanır.',
            acc:[['📚','Bilmen gerekenler','<ul><li><b>Çarpan ve çarpım</b>: 2 × 6 = 12 eşitliğinde 2 ve 6 çarpan, 12 ise çarpımdır.</li><li><b>Bölen</b>: bir sayıyı kalansız bölen sayıdır. 12’nin bölenleri 1, 2, 3, 4, 6 ve 12’dir. Bir sayının çarpanları ve bölenleri aynı sayılardır; yalnızca adları farklıdır.</li><li>1 her sayının bölenidir; sayının kendisi de en büyük bölenidir.</li><li><b>Kat</b>: bir sayının 1, 2, 3… ile çarpılmasıyla elde edilir (5, 10, 15, 20…). Her sayının sonsuz sayıda katı vardır.</li><li>Derste iki tür kart bulunur. <b>Mavi</b> kartları sen yönetirsin; bu kartlardaki kontrol soruları tüm grupla birlikte yanıtlanır ve puanlanmaz. <b>Yeşil ✍️</b> kartlar (8., 11. ve 13. kartlar) ise bireysel olarak çözülür, puanlanır ve otomatik olarak kontrol edilir.</li><li>Jestler: “3–2–1 — gösterin!” denince herkes aynı anda gösterir (👍 / 👎, parmaklarla seçenek numarası veya sayı). Kamerası olmayanlar cevabı sohbete yazar. Jestler hiçbir zaman zorunlu değildir.</li></ul>'],
                 ['⏱️','80 dakikanın dağılımı','<ul><li><b>Giriş (19 dk):</b> tanışma ve bağlantı kontrolü (10 dk), “Merhaba, fırıncı yardımcısı” (3 dk), kurallar ve iki kart türü (3 dk), ısınma: 12 kapkek (3 dk).</li><li><b>Bölenler (20 dk):</b> çarpan ve çarpım (3 dk), 12 sayısının çarpanları (3 dk), bölen teori kartı (7 dk), ✍️ Bireysel çalışma 1 (7 dk).</li><li><b>Mola (3 dk).</b></li><li><b>Katlar (14 dk):</b> kumbara ve kat teori kartı (7 dk), ✍️ Bireysel çalışma 2 (7 dk).</li><li><b>✍️ Yeni nesil problemler (9 dk).</b></li><li><b>Kapanış (12 dk):</b> değerlendirme (5 dk); çeyrek hedefi, ödev ve sonraki ders (7 dk).</li><li>Planlanan etkinliklerin toplam süresi 77 dakikadır. Geçişler, geç kalan öğrenciler ve sorular için ayrıca 3 dakika ayrılmıştır. Böylece toplam ders süresi 80 dakikaya ulaşır. İlk ders her zaman daha yavaş ilerler. “Stajyerin Hatasını Bulun” ve “Ek Görev: Çarpan Çiftleri” kartları 80 dakikalık ders planına dâhil değildir. Bu kartları erken bitiren öğrencilere verebilir veya evde tamamlamalarını önerebilirsin.</li></ul>'],
                 ['🎯','Kazanımlar','<ul><li>“Çarpan”, “çarpım” ve “bölen” terimlerini bilir; çarpan ile bölenin aynı şey olduğunu bilir.</li><li>Sayıları sırayla deneyerek bir sayının tüm bölenlerini bulur.</li><li>1, 2, 3… ile çarparak katları bulur ve neden sonsuz sayıda olduklarını açıklar.</li><li>Bölenleri ve katları paketleme ve para biriktirme gibi günlük hayat problemlerinde kullanır.</li></ul>'],
                 ['🧑‍🏫','Senin rolün','<ul><li>Her kavramı mavi kartta birlikte ele al: önce fırındaki durum (kapkek sıraları, kumbara, kutular), sonra tanım, en son grupla kontrol. <b>Tanımı deneyimden önce verme.</b></li><li>Yeşil kartlarda öğrenci tek başına çalışır: <b>ilk denemeden önce ipucu verme</b>. Hata yaparsa cevabı söyleme; onu ilgili teori kartına yönlendir (8 → 7, 11 → 10, 13 → 5, 7 ve 10).</li><li>Bu ilk ders olduğu için her öğrencinin iki kart türünü anladığından emin ol. Jest yapmayanları öne çıkarma; tüm grubu cesaretlendir.</li><li>Yeni nesil problemlerden sonra “Cevap ne?” yerine “Nasıl çözdün?” diye sor.</li><li>Kapanışta her öğrenci, çeyrek dönem için bir hedef belirler. Ödevin platformda nerede bulunduğunu göster. Zorunlu bölüm, yaklaşık 5 dakikada tamamlanabilen üç kısa görevden oluşur; bonus bölüm ise isteğe bağlıdır.</li></ul>'],
                 ['📌','Dikkat edilmesi gerekenler','<ul><li>Çarpan ile çarpımı karıştırmak.</li><li>Kalanlı bölünen bir sayıyı bölen sanmak (örneğin 5’i 12’nin böleni saymak).</li><li>Bölenler arasında 1’i ve sayının kendisini unutmak.</li><li>Bölen ile katı karıştırmak: Bireysel çalışma 2’de 20 ve 25, 5’in katıdır ama 6’nın katı değildir.</li><li>Katların sonlu sayıda olduğunu düşünmek.</li><li>Dersin 60 dakikası geçtiyse “Stajyerin hatasını bulun” kartını atla; bireysel çalışmayı ve yeni nesil problemleri ise asla atlama.</li></ul>']] }
        ]},
        { t:'callout', kind:'tip', e:'🗺️', html:'<b>Hatırlatma:</b> dersten önce bu dersin tüm öğretmen notlarını incele ve ilk slayttaki video bilgilendirmesini izle (bkz. Modül 2).' }
      ]},
      { id:'l6syl', e:'📜', title:'Kurs müfredatı', blocks:[
        { t:'p', html:'Kurs 32 haftadır ve 4 modülden oluşur. Her modülü aç:' },
        { t:'acc', open:false, items:[
          ['🔢','Modül 1 · Sayılar, bölünebilirlik ve tamsayılar','<ol><li>Doğal sayıların çarpanları ve katları</li><li>Bölünebilirlik kuralları</li><li>Üsleri ve kuvvetleri anlama</li><li>Ortak bölenleri ve katları bulma</li><li>Kümelere giriş</li><li>Tamsayılara giriş</li><li>Tam sayıların karşılaştırılması ve sıralanması, mutlak değer</li><li>Problem Çözme Uygulaması: Modül Tekrarı</li></ol><p><b>Sonuç:</b> öğrenciler sayı özellikleri, bölünebilirlik, çarpanlar ve katlar konusundaki anlayışlarını derinleştirir; tamsayılar ve kümelerle ilgili temel kavramlarla tanışır.</p>'],
          ['🍰','Modül 2 · Kesirler, ondalıklar ve cebirsel işlemler','<ol><li>Kesirler ve kesirlerle işlemlerin tekrarı</li><li>Kesirlerde çarpma ve bölme işlemleri</li><li>Ondalık sayıların gözden geçirilmesi</li><li>Ondalık sayılarla çarpma işlemleri</li><li>Ondalık sayılarla bölme işlemleri</li><li>Oran</li><li>Cebirsel ifadeler</li><li>Problem Çözme Uygulaması: Modül Tekrarı</li></ol><p><b>Sonuç:</b> öğrenciler kesirler ve ondalık sayılarla işlem yapmada yeterlilik kazanır, oranlar konusunda bir kavrayış geliştirir ve cebirsel ifadelerin temelleriyle tanışır.</p>'],
          ['📐','Modül 3 · Geometri ve ölçme','<ol><li>Açılar</li><li>Üçgenlerin alanını hesaplama</li><li>Dikdörtgenlerin ve paralelkenarların alanını hesaplama</li><li>Bir dairenin çevresini hesaplama</li><li>Dikdörtgen prizmaların hacmini anlama</li><li>Dikdörtgen prizmaların hacmini hesaplama</li><li>Sıvı ölçümü</li><li>Problem Çözme Uygulaması: Modül Tekrarı</li></ol><p><b>Sonuç:</b> öğrenciler kapsamlı bir geometri kavrayışı geliştirir; alanları ve hacimleri hesaplamayı ve açılarla çalışmayı öğrenir, uzamsal farkındalıklarını ve ölçüm becerilerini güçlendirir.</p>'],
          ['📊','Modül 4 · Veri analizi ve olasılık','<ol><li>İkili sıklık tabloları ve sütun grafikleri</li><li>Bir veri kümesinin açıklığının hesaplanması</li><li>Bir veri kümesinin aritmetik ortalamasının hesaplanması</li><li>Olasılığın temel kavramları</li><li>Olasılık hesaplama</li><li>Sayı dizileri ve mantık problemleri</li><li>Genel Tekrar: Modül Değerlendirmesi</li><li>Sınıf geçme sınavı</li></ol><p><b>Sonuç:</b> öğrenciler verileri analiz etme ve sunma ile mantık yürüterek problem çözme yaklaşımı kazanır; veri gösterimi, ortalama, açıklık ve olasılığa giriş konularında analitik becerilerini geliştirir.</p>']
        ]}
      ]},
      { id:'l6req', e:'🤓', title:'Katılım koşulları ve donanım', blocks:[
        { t:'cards', cols:2, items:[
          ['🤓','Katılım koşulları','<ul><li>Çok basamaklı sayılarla işlemlerde (toplama, çıkarma, çarpma, bölme) yeterlilik.</li><li>Kesirlerle işlem yapma konusunda güven.</li><li>Açı ve alan gibi temel geometrik kavramların anlaşılması.</li><li>İfadeleri içeren temel işlemlere (sadeleştirme) aşinalık.</li></ul>'],
          ['💻','Bilgisayar gereksinimleri','<ul><li><b>İşlemci:</b> en az 2 çekirdek, 2 GHz (önerilen: 4 çekirdek, 2,5 GHz).</li><li><b>RAM:</b> en az 4 GB (önerilen: 16 GB).</li><li>Google Chrome tarayıcısı.</li><li>Kişisel bilgisayar veya dizüstü bilgisayar (tablet veya telefon değil).</li></ul>']
        ]}
      ]},
      { id:'l6bo', e:'📘', title:'Dersleri Backoffice’te gözden geçir', blocks:[
        { t:'p', html:'Kontrolden önce kursu Backoffice’te aç ve derslerin etkinlik kartlarını ve öğretmen notlarını kendi hızında incele. Süre sınırı yok.' },
        { t:'link', href:'https://bo.kodland.org/courses/2219', e:'📘', title:'Kursu Backoffice’te aç', small:'[2219] Math 6 — dersler ve öğretmen notları' },
        { t:'callout', kind:'warn', e:'🔄', html:'Backoffice’teki ders içerikleri, öğrencilerden ve eğitmenlerden gelen geri bildirimlere göre güncellenmeye devam edecek. Bir değişiklik olduğunda, dersi hazırlayabilmen için sana önceden haber verilecek.' }
      ]}
    ]},
  { id:'m3', n:6, e:'📈', color:'#10B981', title:'7. Seviye · Kursun içeriği',
    desc:'Math Adventures 7. Seviye: kurs kartı, kazanımlar, ilk ders, müfredat ve katılım koşulları.',
    obj:'11–13 yaş öğrencilere yönelik Math Adventures 7. Seviye kursunun genel yapısını, kazanımlarını ve 4 modüllük müfredatını tanı ve ilk derse hazırlan.',
    offer:[['📋','Kursun genel bilgilerini ve hedeflerini öğren.'],['🏆','Öğrencilerin kurs sonunda hangi becerileri kazanacağını öğren.'],['📖','İlk dersin her bölümünde ne olduğunu öğren.'],['📜','4 modülün konularını ve sonuçlarını gör.'],['📘','Dersleri ve öğretmen notlarını Backoffice’te gözden geçir.']],
    sections:[
      { id:'l7ov', e:'📋', title:'Kurs', blocks:[
        { t:'meta', items:[['🙂','Yaş','11–13'],['⏱️','Ders','80 dk'],['👥','Grup','en fazla 8 öğrenci'],['📅','Süre','32 hafta']] },
        { t:'p', html:'<b>Math Adventures 7. Seviye</b>, 11–13 yaş arası çocuklara yönelik ilgi çekici ve derinlemesine bir 7. sınıf matematik kursudur. Öğrencilerin rasyonel sayılarla işlemlerde uzmanlaşmasına, cebirsel ifadelerle çalışmasına ve oranlar, yüzdeler ve geometriyle gerçek dünya problemlerini çözmesine yardımcı olur. Ayrıca öğrenciler istatistik ve olasılık yoluyla veri analizini keşfeder.' },
        { t:'callout', kind:'tip', e:'🏠', html:'<b>Ödev:</b> Her hafta bir <b>“Haftalık Meydan Okuma”</b> görevi verilir. Öğrenciler 32 hafta boyunca oyunlaştırılmış bir öğrenme deneyimine katılır; her 8 derste bir interaktif dersler, gerçek hayattan uygulamalar ve macera tarzı görevler eleştirel düşünme ve problem çözme becerilerini geliştirir.' },
        { t:'callout', kind:'warn', e:'🧭', html:'<b>Grup ve birebir dersler:</b> grup dersleri 80 dakika, birebir dersler 50 dakikadır. Yeni modelin ilkeleri (Modül 1–3) ve teknik adımlar (Modül 7) bu seviye için de geçerlidir.' }
      ]},
      { id:'l7goals', e:'🏆', title:'Öğrenci neler kazanır', blocks:[
        { t:'cards', cols:2, items:[
          ['🔢','Rasyonel sayılarda yeterlilik','Kesirler, ondalık sayılar ve tam sayılarla işlemlerde ustalaşır ve bu becerileri gerçek dünya problemlerine uygular.'],
          ['🧩','Cebir ustalığı','Cebirsel ifadeleri sadeleştirir, doğrusal denklemleri çözer ve doğrularını grafikte gösterir; denklem sistemlerini hem cebirsel hem de grafiksel yöntemlerle çözer.'],
          ['⚖️','Oranlar ve yüzdelerle problem çözme','Oran, orantı ve yüzde kavramlarını kullanarak gerçek yaşam problemlerini çözer.'],
          ['📐','Geometri becerileri','İki boyutlu şekillerin alanlarını ve çevrelerini, üç boyutlu cisimlerin yüzey alanlarını ve hacimlerini hesaplar; geometrik şekillere dönüşümler uygular.'],
          ['📊','Veri analizi ve istatistik','Verileri analiz eder, grafikleri yorumlar; ortalama, medyan ve mod gibi istatistikleri hesaplar.']
        ]},
        { t:'acc', open:false, items:[
          ['🎯','Kursun hedefleri','<ul><li><b>Temel matematik işlemleri:</b> tam sayılar, kesirler ve ondalık sayılarla işlemlerde yetkinlik.</li><li><b>İleri cebir becerileri:</b> ifadeleri basitleştirme, doğrusal denklemleri ve grafik denklemlerini çözme; denklem sistemlerinin temelleri.</li><li><b>Oranlar ve yüzdeler:</b> gerçek dünya problemlerinde pratik uygulama.</li><li><b>Geometri:</b> üçgenler, dörtgenler ve daireler dahil 2B ve 3B şekillerin alanları, hacimleri ve geometrik dönüşümler.</li><li><b>Veri yorumlama ve istatistik:</b> verileri analiz etme, grafikleri yorumlama; ortalama, medyan ve mod.</li><li><b>Eleştirel düşünme ve problem çözme:</b> mantıksal akıl yürütme ve karar verme.</li></ul>'],
          ['🧮','Zor beceriler','<ul><li>Kesirler, ondalık sayılar ve tam sayılar dahil <b>rasyonel sayılarla işlemler</b>.</li><li>Cebirsel ifadeleri basitleştirme, doğrusal denklemleri çözme ve denklem sistemleriyle çalışma.</li><li>2B ve 3B şekillerin alanlarını, yüzey alanlarını ve hacimlerini hesaplama.</li><li>Oranları, orantıları ve yüzdeleri kullanarak gerçek dünya problemlerini çözme.</li><li>Veri yorumlama, ortalama, medyan ve mod hesaplama, grafik oluşturma ve yorumlama.</li></ul>'],
          ['🤝','Kolay beceriler (soft skills)','<ul><li>Eleştirel düşünme ve analitik akıl yürütme.</li><li>Yapılandırılmış bir yaklaşımla güçlü problem çözme becerileri.</li><li>Matematiksel kavramları gerçek hayata uygulamada gelişmiş karar verme.</li><li>Matematiği günlük yaşamda kullanma konusunda özgüven; konuya dair korku veya kaygıda azalma.</li><li>Karmaşık görevlerde adım adım ilerlemeyi sağlayan azim ve odaklanma.</li></ul>'],
          ['👀','İlerleme nasıl takip edilir?','<ul><li><b>Göreve dayalı zorluklar:</b> her 8 derste bir, öğrencilerin modüldeki ustalığını değerlendiren eğlenceli görevler.</li><li><b>Pratik ödevler:</b> her dersin ikinci bölümünde öğrenciler görevleri kendi hızlarında tamamlar; bireysel ilerleme izlenir ve gerektiğinde zamanında destek verilir.</li><li><b>Haftalık zorluklar:</b> geleneksel ev ödevinin yerine geçen 32 haftalık oyunlaştırılmış deneyim.</li></ul>']
        ]}
      ]},
      { id:'l7les', e:'📖', title:'İlk ders', blocks:[
        { t:'p', html:'Modül 1: <b>Sayılar, rasyonel sayılar ve oranlar.</b> İlk derste öğrenci, robot Nova’nın test ölçümlerini okurken tam sayılarla toplama ve çıkarma yapar. Dersi aç:' },
        { t:'lessons', key:'m3', items:[
          { tab:'D1', e:'🤖', h:'1. Ders — Tam sayılarla toplama ve çıkarma', p:'Modül 1’in hikâyesi başlar: Sofya ve Rafi, okulun bilim ekibi CodeCrew’e katılır ve robot Nova’yı Robotik ve Bilim Fuarı’na hazırlar. Nova ilk testlerini dondurucu bir laboratuvarda, okyanusun derinliklerinde ve yüksek bir kulede yapar; öğrenciler de onun sıfırın altındaki ve üstündeki ölçümlerini okur, toplar ve çıkarır.',
            acc:[['📚','Bilmen gerekenler','<ul><li><b>Tam sayılar</b>: negatif tam sayılar, sıfır ve pozitif tam sayılar. Sıfır ne pozitif ne de negatiftir: işareti yoktur.</li><li>Bu derste kullanılan tek model <b>sayı doğrusudur</b>: sağa gittikçe sayılar büyür, sola gittikçe küçülür.</li><li><b>Mutlak değer</b>: bir sayının sayı doğrusunda sıfıra olan uzaklığıdır ve asla negatif olmaz. <b>Zıt sayılar</b> sıfırın farklı taraflarında, sıfıra eşit uzaklıktadır.</li><li><b>Toplama</b>: işaretler aynıysa mutlak değerler toplanır ve ortak işaret korunur; işaretler farklıysa küçük mutlak değer büyükten çıkarılır ve mutlak değeri büyük olan sayının işareti alınır.</li><li><b>Çıkarma</b>: zıt sayıyı toplamaya dönüştürülür: a − b = a + (−b) ve a − (−b) = a + b.</li><li>Yalnızca yeşil ✍️ bireysel çalışma kartları ve ödev değerlendirilir; mavi kartlarda grup birlikte cevap verir.</li></ul>'],
                 ['⏱️','80 dakikanın dağılımı','<ul><li><b>Giriş (10 dk):</b> Sofya ve Rafi ile tanışma ve bağlantı kontrolü (6 dk), Modül 1’in hikâyesi, bugünün görevi ve iki kart türü (4 dk).</li><li><b>Tam sayılar (15 dk):</b> Nova’nın test bölgelerinde tam sayılar, sayı doğrusu, mutlak değer ve zıt sayılar (10 dk), ardından ✍️ Bireysel çalışma 1 (5 dk).</li><li><b>Toplama (17 dk):</b> tam sayıları toplama, dersin temel kartı (12 dk), ardından ✍️ Bireysel çalışma 2 (5 dk).</li><li><b>Mola (3 dk).</b></li><li><b>Çıkarma (13 dk):</b> tam sayıları çıkarma (9 dk), ardından ✍️ Bireysel çalışma 3 (4 dk).</li><li><b>✍️ Yeni Nesil Sorular (6 dk):</b> dersin kazanımlarını kontrol eder ve asla atlanmaz.</li><li><b>Kapanış (8 dk):</b> değerlendirme (5 dk); modül hedefi, ödev ve sonraki ders (3 dk).</li><li>Zorunlu kartlar 72 dakikadır; kalan 8 dakika iki isteğe bağlı kart içindir: “Hatayı bulun” (yalnızca Bireysel çalışma 3 60. dakikada biterse) ve “Ek görev” (yalnızca Yeni Nesil Sorular 66. dakikada biterse). Genellikle bunlardan yalnızca biri için zaman olur.</li></ul>'],
                 ['🎯','Kazanımlar','<ul><li>Pozitif sayıları, negatif sayıları ve sıfırı ayırt eder ve sayı doğrusunda gösterir; sıfırın işareti olmadığını bilir.</li><li>Bir sayının mutlak değerini ve zıttını bulur; tam sayıları karşılaştırır.</li><li>Aynı ve farklı işaretli tam sayıları toplar.</li><li>Zıt sayıyı ekleyerek çıkarma yapar; a − (−b) = a + b durumu da buna dâhildir.</li></ul>'],
                 ['🧑‍🏫','Senin rolün','<ul><li>Yeşil ✍️ kartlar dışındaki tüm kartları sen yönetirsin. Her kuralı önce sayı doğrusundaki oklarla göster, sonra kural olarak yaz.</li><li>Grup cevapları: galeri görünümünü aç ve “3–2–1 — gösterin!” de. Sonucu grup sayısı olarak söyle (“6 kişiden 5’i 2. seçeneği gösteriyor”) ve yanlış cevap verenin adını asla söyleme. Doğru cevap oranı %80 veya üzerindeyse “Cevap ✅” bölümünü aç; altındaysa sayı doğrusuyla bir ipucu ver ve ikinci bir deneme yaptır.</li><li>Yeşil kartlarda <b>ilk denemeden önce ipucu verme</b>. Öğrenci yanlış cevap verdikten sonra onu ilgili teori kartına yönlendir: tam sayılar, mutlak değer ve zıt sayılar için 3. kartı; toplama için 5. kartı; çıkarma için 8. kartı kullan.</li><li>Bu, grubun ilk dersidir. Öğrencilerin isimlerini öğren, çabalarını takdir et ve hiçbir öğrenciyi kamera karşısında tek başına cevap vermeye zorlama.</li><li>Kapanışta her öğrenci bir modül hedefi seçer. Ödevin platformda nerede bulunduğunu göster. Üç zorunlu sorunun yaklaşık 5 dakika sürdüğünü, bonus soruların ise ek puan kazandırdığını açıkla.</li></ul>'],
                 ['📌','Dikkat edilmesi gerekenler','<ul><li>Sıfırı pozitif kabul etmek.</li><li>Negatif bir sayının mutlak değerini eksi işaretiyle yazmak.</li><li>İşaretler aynıyken mutlak değerleri çıkarmak veya işaretler farklıyken yanlış sayının işaretini almak. Her zaman oklara geri dön.</li><li>a − (−b) ifadesindeki çift eksiyi gözden kaçırmak. “−3’ün zıttı nedir?” diye sor.</li><li>“İki negatif artı eder” kuralı çarpmadan gelir: toplamada iki negatif sayının toplamı negatiftir.</li><li>Zaman yetmezse isteğe bağlı kartları atla, ama “Zamanımız yetmedi.” deme: “Bu, daha fazlasını isteyenler için bonus bir görev.” de.</li></ul>']] }
        ]},
        { t:'callout', kind:'tip', e:'🗺️', html:'<b>Hatırlatma:</b> dersten önce bu dersin tüm öğretmen notlarını incele ve ilk slayttaki video bilgilendirmesini izle (bkz. Modül 2).' }
      ]},
      { id:'l7syl', e:'📜', title:'Kurs müfredatı', blocks:[
        { t:'p', html:'Kurs 32 haftadır ve 4 modülden oluşur. Her modülü aç:' },
        { t:'acc', open:false, items:[
          ['🔢','Modül 1 · Sayılar, rasyonel sayılar ve oranlar','<ol><li>Tam sayılarla toplama ve çıkarma</li><li>Tam sayılarda çarpma ve bölme</li><li>Üslü sayıları anlama ve kullanma</li><li>Kesirler ve ondalık sayıların tekrarı</li><li>Kesirler ve ondalık sayılarla işlemler</li><li>Oran ve orantının temelleri</li><li>Yüzdelerle çalışma</li><li>Problem Çözme Uygulaması: Modül Tekrarı</li></ol><p><b>Sonuç:</b> öğrenciler sayısal ve oransal muhakemede güçlü bir temel oluşturmak için tamsayılar, rasyonel sayılar, oranlar ve yüzdeler dahil sayı özellikleri hakkında kapsamlı bir kavrayış geliştirir.</p>'],
          ['🧩','Modül 2 · İfadeler, örüntüler ve denklemler','<ol><li>Cebirsel ifadelerin gözden geçirilmesi</li><li>Cebirsel ifadelerin sadeleştirilmesi</li><li>Cebirsel ifadelerin genişletilmesi</li><li>Örüntüler ve Cebirsel Kurallar</li><li>Denklemlerde eşitlik ilkesi</li><li>İki adımlı denklemlere giriş</li><li>Ondalık sayılar ve kesirlerle iki adımlı denklemler</li><li>Problem Çözme Uygulaması: Modül Tekrarı</li></ol><p><b>Sonuç:</b> öğrenciler mantık yürütme ve problem çözme yeteneklerini geliştirmek için çok önemli olan ifadelere, örüntülere ve denklem çözmeye odaklanarak temel cebirsel beceriler kazanır.</p>'],
          ['📐','Modül 3 · Geometri ve ölçme','<ol><li>Doğrular ve açılar</li><li>Çokgenlere giriş</li><li>Dörtgenlerin özellikleri</li><li>Dörtgenlerin alan ve çevresinin hesaplanması</li><li>Çemberin Uzunluğunu ve Yay Uzunluğunu Hesaplama</li><li>Dairelerin ve Daire Dilimlerinin Alanlarını Hesaplama</li><li>Katıların farklı görünümleri</li><li>Problem Çözme Uygulaması: Modül Tekrarı</li></ol><p><b>Sonuç:</b> öğrenciler alan ve çevre hesaplamaya ve iki ve üç boyutlu şekillerin özelliklerini anlamaya odaklanarak uzamsal farkındalık ve geometri muhakemelerini geliştirir.</p>'],
          ['📊','Modül 4 · Veri analizi ve olasılık','<ol><li>Çizgi grafiklerinin oluşturulması ve yorumlanması</li><li>Ortalama, medyan ve modun hesaplanması</li><li>Daire grafiklerini anlama ve oluşturma</li><li>Grafik türleri arasında dönüştürme</li><li>Uygun ölçümlerin seçilmesi ve verilerin karşılaştırılması</li><li>Gerçek yaşam verilerini analiz etme ve grafikleri yorumlama</li><li>Genel Tekrar: Modül Değerlendirmesi</li><li>Sınıf geçme sınavı</li></ol><p><b>Sonuç:</b> öğrenciler veri gösterimi, istatistiksel analiz ve olasılık konularında becerilerini geliştirir ve veri kümelerini etkin biçimde yorumlayıp analiz edebilecekleri araçlarla donatılır.</p>']
        ]}
      ]},
      { id:'l7req', e:'🤓', title:'Katılım koşulları ve donanım', blocks:[
        { t:'cards', cols:2, items:[
          ['🤓','Katılım koşulları','<ul><li>Tam sayılar, kesirler ve ondalık sayılarla işlemlerde yeterlilik.</li><li>Basit cebirsel denklemleri çözme ve ifadeleri basitleştirme konusunda güven.</li><li>Açılar, alanlar ve şekillerin temel özellikleri dahil geometrik kavramların anlaşılması.</li><li>Oranlara ve yüzdelere aşinalık; bu kavramlarla temel problem çözme.</li><li>Grafiklerden veri yorumlama ve ortalama gibi basit istatistikleri hesaplama.</li></ul>'],
          ['💻','Bilgisayar gereksinimleri','<ul><li><b>İşlemci:</b> en az 2 çekirdek, 2 GHz (önerilen: 4 çekirdek, 2,5 GHz).</li><li><b>RAM:</b> en az 4 GB (önerilen: 16 GB).</li><li>Google Chrome tarayıcısı.</li><li>Kişisel bilgisayar veya dizüstü bilgisayar (tablet veya telefon değil).</li></ul>']
        ]}
      ]},
      { id:'l7bo', e:'📘', title:'Dersleri Backoffice’te gözden geçir', blocks:[
        { t:'p', html:'Kontrolden önce kursu Backoffice’te aç ve derslerin etkinlik kartlarını ve öğretmen notlarını kendi hızında incele. Süre sınırı yok.' },
        { t:'link', href:'https://bo.kodland.org/courses/2220', e:'📘', title:'Kursu Backoffice’te aç', small:'[2220] Math 7 — dersler ve öğretmen notları' },
        { t:'callout', kind:'warn', e:'🔄', html:'Backoffice’teki ders içerikleri, öğrencilerden ve eğitmenlerden gelen geri bildirimlere göre güncellenmeye devam edecek. Bir değişiklik olduğunda, dersi hazırlayabilmen için sana önceden haber verilecek.' }
      ]}
    ]},
  { id:'m4', n:7, e:'⚙️', color:'#F03D9E', title:'Derslerin teknik tarafı',
    desc:'Follow Mode, puanlı kartlar, öğretmen paneli ve bir şey çalışmadığında ne yapılacağı.',
    obj:'Bir Math dersinin teknik işleyişini öğren: Her zaman Follow Mode kullanımı, her öğrencinin bireysel olarak tamamladığı puanlı kartlar, öğretmen panelinin kullanımı ve sorunların nasıl bildirileceği.',
    offer:[['👁️','Materyalleri her zaman Follow Mode ile göster.'],['🧮','Her öğrencinin kartları bireysel olarak tamamlayıp göndermesini sağla.'],['📊','Öğrencilere zamanında geri bildirim vermek için öğretmen panelini kullan.'],['🚨','Neyin, nereye bildirileceğini bil.']],
    sections:[
      { id:'class', e:'🎥', title:'Ders sırasında', blocks:[
        { t:'cards', cols:2, items:[
          ['👁️','Her zaman Follow Mode','Materyalleri her zaman Follow Mode ile göster, ekran paylaşma (bkz. Modül 2).'],
          ['🧮','Puanlı her kart, bireysel olarak','Puanlı kartları her öğrenci platformda kendisi tamamlar; aksi hâlde 0 puan (bkz. Modül 3).'],
          ['📤','Sınıf çalışması ve ödev gönderimi','Sınıf çalışmasının ve ödevin gönderildiğini kontrol et (bkz. Modül 3).'],
          ['🖍️','Çizim aracı yerine Beyaz Tahta','Bir şeyi görsel olarak açıklamak için Beyaz Tahtayı kullan (bkz. Modül 2).']
        ]}
      ]},
      { id:'panel', e:'📊', title:'Öğretmen paneli ve geri bildirim', blocks:[
        { t:'steps', items:[
          ['Sonuçları kontrol et','Gönderimden sonra öğretmen panelini kontrol et (bkz. Modül 3).'],
          ['Birçok öğrenci hata yaptıysa','Farklı bir örnekle yeniden açıkla, tekrar denesinler (bkz. Modül 3).'],
          ['Açıklama iste','1–2 öğrenciye çözümünü açıklat (bkz. Modül 3).'],
          ['Cevap değil, ipucu ver','Cevap yerine yönlendirici sorular sor (bkz. Modül 3).']
        ]},
        { t:'h', html:'Aşağıdaki uygulamalar öğrencilerin derse aktif katılımını destekler mi? Her birini değerlendirin.' },
        { t:'sorter', yes:'✅ İşe yarar', no:'❌ İşe yaramaz', items:[
          ['💬','“İlk adımın sonucunu sohbete yazın. Hep birlikte, aynı anda cevaplayalım.”','yes','<b>İşe yarar.</b> Anlık bir kontroldür: kimin anladığını hemen görürsün.'],
          ['🙂','“Her şey anlaşıldı mı?”','no','<b>İşe yaramaz.</b> Neredeyse her zaman “evet” cevabı alırsın ve ne anladıkları hakkında hiçbir şey öğrenmezsin.'],
          ['✋','“Parmaklarınızla gösterin: çizimde kaç kiriş görüyorsunuz?”','yes','<b>İşe yarar.</b> Herkes katılır ve cevapları anında görürsün.'],
          ['🖥️','Zaman kazanmak için puanlı kartı kendi ekranında çözmek.','no','<b>İşe yaramaz.</b> Her öğrenci için 0 puan sayılır.']
        ]}
      ]},
      { id:'after', e:'🗂️', title:'Dersten sonra ve bir şey ters gittiğinde', blocks:[
        { t:'acc', open:false, items:[
          ['✍️','Açık uçlu cevapları değerlendir','Bir sonraki dersten önce elle değerlendir (bkz. Modül 3).'],
          ['🚫','Bireysel çalışmayı asla atlama','Bireysel çalışma ve Yeni Nesil Sorular asla atlanmaz (bkz. Modül 1).'],
          ['🐞','Bir kart çalışmıyor','Bir kart çalışmıyorsa, gönderilemiyorsa veya garip bir puan veriyorsa, <b>ders numarasını</b> ve <b>kart adını</b> belirterek metodoloji ekibine bildir.'],
          ['🔌','Follow Mode ile ilgili sorunlar','Follow Mode’u kullanırken teknik bir sorunla karşılaşırsan, sorunu Slack’teki <b>#mena-math-newcontent-questions</b> kanalından ürün ve içerik ekibine bildir.']
        ]}
      ]},
      { id:'check', e:'✅', title:'Her ders için teknik kontrol listesi', blocks:[
        { t:'check', title:'✅ Teknik kontrol listem', groups:[
          { h:'☑️ Dersten önce', items:['Tüm öğretmen notlarını inceledim ve ilk karttaki video bilgilendirmesini izledim.','Harici bir araca bağlı interaktif görevleri denedim.'] },
          { h:'🎬 Ders sırasında', items:['Materyalleri ekran paylaşmadan, Follow Mode ile gösteriyorum.','Her öğrenci puanlı kartları platformda çözüp gönderiyor.','Öğretmen panelini kontrol ediyorum ve gerektiğinde farklı bir örnekle tekrar açıklıyorum.','“Her şey anlaşıldı mı?” diye sormak yerine anlık kontroller yapıyorum.','Bireysel çalışmayı ve Yeni Nesil Soruları atlamıyorum.'] },
          { h:'📤 Dersten sonra', items:['Açık uçlu cevapları bir sonraki dersten önce manuel olarak değerlendirdim.','Öğrencilerin ödevlerini gönderdiğini kontrol ettim.','Çalışmayan her kartı ders numarasını ve kart adını belirterek bildirdim.'] }
        ]}
      ]}
    ]}
];

/* ---------------- Module checks ('a' = number of the correct option, 0 = first) ---------------- */
COURSE.quiz = {
  em1:[
    { q:'Yeni matematik kursunda bir ders nasıl açılır?',
      o:['Konunun tanımı ve formülüyle.','Konuyla yakından ilişkili gerçek bir problemle: önce somut durum, sonra görsel temsil, en son soyut kural.','Geçen dersin ödevinin tam çözümüyle.'],
      a:1, e:'Somut → Görsel → Soyut. Açılış görevi öğrencinin ilgisini çekmek içindir; konuyu açıklamak için kullanılmaz.' },
    { q:'Bir ders içinde görevler nasıl sıralanır?',
      o:['Zorluk düzeyi giderek artacak şekilde; düzeyler sabittir ve açıkça etiketlenmiştir.','Rastgele, öğrencilerin ilgisini canlı tutmak için.','En zor görevden başlayarak.'],
      a:0, e:'Basitten karmaşığa: önce temel uygulama, sonra daha karmaşık durumlar.' },
    { q:'Kodland Öğrenme Döngüsü’nde ev ödevinin yeri nedir?',
      o:['İsteğe bağlıdır; yalnızca isteyen öğrenciler yapar.','Dersin zorunlu bir parçasıdır: döngü, sonraki bağımsız çalışmada da devam eder.','Yalnızca modül sonunda verilir.'],
      a:1, e:'Döngü hem derste hem de bağımsız çalışmada sürer. Ev ödevi dersin zorunlu bir parçasıdır.' },
    { q:'Sonuç kontrolleri ve modül testi nasıl işler?',
      o:['Yalnızca öğretmen sonuçları görür.','Her ders, o dersin kazanımına bağlı kısa bir görevle kapanır; modül, tüm sonuç kontrollerini kapsayan bir testle biter ve sonuçları öğrenci, öğretmen ve veli görür.','Sonuç kontrolleri yalnızca modülün son dersinde yapılır.'],
      a:1, e:'Her dersin bir sonuç kontrolü vardır, modülün sonunda toplu bir test yapılır ve sonuçlar üç taraf için de görünürdür.' },
    { ctx:'Grup geride kaldı. Dersin bitmesine az kaldı ve sırada bireysel çalışma ile Yeni Nesil Sorular var.',
      q:'Ne yaparsın?',
      o:['Yeni Nesil Soruları atlayıp ödeve geçersin.','Bireysel çalışmayı ve Yeni Nesil Soruları atlamazsın.','Bireysel çalışmayı kendi ekranında hızlıca çözersin.'],
      a:1, e:'Bireysel çalışma ve Yeni Nesil Sorular, grup geride kalsa bile asla atlanmaz.' }
  ],
  // em2 = EM Core Module 2 check (question 4 follows the math rule: Follow Mode + Whiteboard, no screen sharing)
  em2:[
    { q:'Backoffice’te, bu kurslardaki bir dersin etkinliklerine ve Öğretmen Notlarına nasıl ulaşırsınız?',
      o:['Gruplar → grubunuz → wiki bağlantısı.',
         'Kurslar → ilgili kurs → Assignments → dersi seçin → bir etkinliği açın.',
         'Profil → Program → ilgili ders.'],
      a:1, e:'Kurs içeriğine Gruplar üzerinden değil, Kurslar üzerinden ulaşılır. Assignments bölümünde dersin etkinlik kartlarını görürsünüz — Öğretmen Notları her kartın içindedir. Çalışma kılavuzları tablosu kasıtlı olarak boştur.' },
    { ctx:'Geçen ay başka bir grupla 3. Dersi işlediniz ve harika geçti.',
      q:'Dersi tekrar işlemeden önce ne yaparsınız?',
      o:['Hiçbir şey: dersi biliyorsunuz, bu yüzden bu sefer notları atlayabilirsiniz.',
         'Öğretmen Notlarını tekrar okuyun ve güncellemeleri kontrol edin — kurslar sürekli geliştirilmektedir, etkinlikler, süreler veya notlar değişebilir.',
         'Wiki’deki sunumu arayın.'],
      a:1, e:'Öğretmen Notlarını okumak, her seferinde her dersin hazırlığının bir parçasıdır. Anlattığınız önceki sürüm, anlatacağınız yeni sürümle aynı olmayabilir.' },
    { ctx:'Lead the group anahtarınız açık. Dersin ortasında bir öğrenci “Work independently” butonuna tıklıyor ve önceki bir karta geri dönüyor.',
      q:'O andan itibaren ne olur?',
      o:['Öğrenci dersten çıkarılır ve tekrar katılması gerekir.',
         'Öğrencinin ekranında nerede olduğunuzu gösteren ve Geri Dön butonu içeren bir başlık kalır; adının yanında bağımsız çalıştığını görürsünüz.',
         'Sizin kartınızdaki yanıtları size canlı olarak gönderilir.'],
      a:1, e:'Follow Mode öğrenciyi asla kısıtlamaz. Kendi başlarına çalışabilir, sizin nerede olduğunuzu görebilir ve tek tıkla geri dönebilirler.' },
    { q:'Bir matematik dersinde bir şeyi göstermek veya açıklamak istiyorsunuz. Bunu göstermenin doğru yolu nedir?',
      o:['Ders kartı açıkken ekranınızı paylaşın, böylece yönergeleri ve notlarınızı görürler.',
         'Kartları Follow Mode ile gösterin ve açıklamalar için Beyaz Tahta aracını kullanın — ekran paylaşımı istenmez.',
         'Hiçbir şey göstermeyin: tüm açıklamayı kartlar yapar.'],
      a:1, e:'Follow Mode kartlar içindir: her öğrencinin kendi kopyası vardır ve notlarınızı asla görmezler. Matematik derslerinde ekran paylaşımı istenmez: bir şeyi göstermek veya açıklamak için Beyaz Tahtayı kullanın.' },
    { ctx:'Öğrencileriniz bir çoktan seçmeli soruyu ve ardından projelerinin bağlantısını yapıştırmaları gereken bir etkinliği tamamladılar.',
      q:'Hangi ifade doğrudur?',
      o:['Her ikisi de otomatik olarak kaydedilir: öğrencilerin hiçbir şeye tıklamasına gerek yoktur.',
         'Çoktan seçmeli soru puanı otomatik olarak kaydeder; bağlantı etkinliği için öğrencilerin “Send” butonuna tıklaması gerekir.',
         'Her ikisi için de Submit butonuna basılması gerekir, aksi takdirde hiçbir şey kaydedilmez.'],
      a:1, e:'Çoktan seçmeli sorular, metin/formül alanları ve sürükle-bırak etkinlikleri puanı otomatik olarak kaydeder. Öğrencilerin metin, bağlantı veya dosya gönderdiği etkinliklerde “Send” butonuna basılması gerekir.' },
  ],
  // em3 = EM Core Module 3 “risk” check, as multiple choice: in every case the right answer is the strategy that would HARM that part of the lesson
  em3:[
    { ctx:'<b>👋 Isınma</b> · Öğrenciler kameraları kapalı bir şekilde sessizce katılıyor. Kimse tek bir kelime bile söylemiyor.',
      q:'Hangisi dersin bu bölümüne <span class="hurt">ZARAR VERİR</span>?',
      o:['Her öğrenciyi ismiyle selamlayın ve haftaları hakkında kısa bir soru sorun.',
         'Zaman kazanmak için ısınmayı atlayın ve doğrudan projeye geçin.',
         'Onlar yerleşirken yoklamayı alın ve bir emoji ile tepki vermeye davet edin.'],
      a:1, e:'Isınmayı atlamak iki dakika kazandırır ama bağ kurmayı kaybettirir. Kısa ve samimi bir açılış, sessiz öğrencilerin konuşmasını ve dersin geri kalanına katılımını sağlar.' },
    { ctx:'<b>📓 Ödev kontrolü</b> · Grubun yarısı ödevini yapmadı.',
      q:'Hangisi dersin bu bölümüne <span class="hurt">ZARAR VERİR</span>?',
      o:['Kimlerin takıldığını ve ne olduğunu sorun — belki teknik bir sorundu.',
         'Bir öğrenciden ödevini göstermesini isteyin ve iyi giden spesifik bir şeyi belirtin.',
         '“Tamam, size sıfır veriyorum” deyin ve nedenini sormadan devam edin.'],
      a:2, e:'Yapılmayan bir ödev sadece bir sıfır değil, bir sinyaldir. Takılıp takılmadıklarını öğrenmek, onlara yardımcı olmanın ve geride kalmalarını önlemenin yoludur.' },
    { ctx:'<b>🧠 Kavrama</b> · Yeni bir fikri açıkladınız. “Anlaşıldı mı?” diye sorduğunuzda herkes evet diyor — ancak gerçekten anlamadıklarından şüpheleniyorsunuz.',
      q:'Hangisi dersin bu bölümüne <span class="hurt">ZARAR VERİR</span>?',
      o:['Belirli bir öğrenciden ismiyle hitap ederek neden çalıştığını açıklamasını isteyin.',
         'Evet cevabını kabul edin ve devam edin: anlaşıldı diyorlarsa anlaşıldı demektir.',
         'Bir şeyi değiştirirseniz ne olacağını tahmin etmelerini isteyin, ardından birlikte deneyin.'],
      a:1, e:'“Anlaşıldı mı?” sorusu neredeyse her zaman evet yanıtını alır. Kontrol etmeden devam etmek, öğrencilerin daha sonra takılmasına neden olur — bunun yerine birinden gerekçesini açıklamasını isteyin.' },
    { ctx:'<b>📋 Özet</b> · Son 7 dakika kaldı ve grup son kartı bitirmedi.',
      q:'Hangisi dersin bu bölümüne <span class="hurt">ZARAR VERİR</span>?',
      o:['Kartı bitirebilmeleri için son ana kadar çalışmaya devam edin ve özeti atlayın.',
         'Kapanış rutinine şimdi başlayın: bitmeyen kart bir sonraki derste veya evde devam edebilir.',
         'İki veya üç öğrenciden bugün ne öğrendiklerini söylemelerini isteyin.'],
      a:0, e:'Son saniyeye kadar çalışmak, özetin, merak uyandırma adımının ve ödevin kaybolmasının tam nedenidir. Kapanışı zamanında başlatın — kart bekleyebilir, kapanış bekleyemez.' },
    { ctx:'<b>🔮 Gelecek ders (Teaser) &amp; ödev</b> · Dersin son dakikası ve öğrenciler ayrılmak üzere.',
      q:'Hangisi dersin bu bölümüne <span class="hurt">ZARAR VERİR</span>?',
      o:['Merak uyandırma adımını projeleriyle ilişkilendirin: bir sonraki sefer için merak uyandıran tek bir cümle.',
         'Ödevi bir veya iki cümleyle açıklayın ve nasıl teslim edeceklerini hatırlatın.',
         'Çıkarken merak uyandıran cümleyi hızlıca okuyun ve “ödev platformda” deyin.'],
      a:2, e:'Aceleye getirilmiş bir merak uyandırma adımı ve açıklanmayan bir ödev, öğrencilerin sırada ne olduğunu bilmeden ayrılması anlamına gelir. Motive edici tek bir cümle ve net bir açıklama iki dakikadan az sürer.' }
  ],
  m1:[
    { q:'Math 5 nasıl düzenlenmiştir?',
      o:['Ayrı konular ve alıştırmalarla.','Vakalarla: her modül gerçek hayattan bir problemdir ve matematik, öğrenciler ihtiyaç duyduğunda ortaya çıkar.','Haftalık sınavlarla.'],
      a:1, e:'Her modülde gerçek hayattan bir vaka — park, şenlik, tarif — ve matematik yol boyunca keşfedilir.' },
    { q:'Bir derste yeni bir kavram hangi sırayla sunulur?',
      o:['Soyut → Görsel → Somut.','Somut → Görsel → Soyut: önce gerçek bir durum, sonra onun görsel temsili ve en son kural.','Önce tanım, sonra alıştırmalar.'],
      a:1, e:'Dersin başlangıcındaki görev, öğrencinin ilgisini çekmeyi amaçlar. Tanım asla örnekten önce gelmez.' },
    { q:'Yeni Nesil Soru nedir?',
      o:['Daha zor bir çoktan seçmeli soru.','Öğrencinin yönteminin neden işe yaradığını veya koşullar değişirse neyin değişeceğini açıkladığı bir soru.','Erken bitiren öğrenciler için isteğe bağlı bir soru.'],
      a:1, e:'Her ders bir tanesiyle biter ve asla atlanmaz: odak yalnızca hesaplamak değil, açıklamaktır.' },
    { ctx:'1. Derste bir öğrenci, [AB ve [BA’nın aynı ışın olduğunu yazıyor.',
      q:'Hangisi doğru?',
      o:['Haklı: ikisi de aynı iki noktadan geçiyor.','Hayır: ışın ilk harften başlar, bu yüzden [AB ve [BA iki farklı ışındır.','Yalnızca ışın dikeyse yanlıştır.'],
      a:1, e:'[AB, A’dan başlar ve B’den geçer; [BA, B’den başlar ve A’dan geçer. Buna karşılık [AB] ve [BA] doğru parçaları aynı doğru parçasıdır.' },
    { q:'Modül boyunca sorumluluğun aşamalı olarak öğrenciye devredilmesi ne anlama gelir?',
      o:['Öğretmen modülün sonunda her şeyi çözer.','Başta adım adım talimatlar ve şablonlar vardır; sonunda öğrenci yöntemi seçer ve ipucu olmadan çözer.','Ev ödevi isteğe bağlı hâle gelir.'],
      a:1, e:'Destek modül boyunca azalır ve sonunda öğrenci bağımsız olarak çözer.' }
  ],
  m2:[
    { q:'Math 6 kursu kimler için ve bir grup dersi ne kadar sürer?',
      o:['9–11 yaş, 60 dakika.','10–12 yaş, 80 dakika.','11–13 yaş, 90 dakika.'],
      a:1, e:'6. Seviye 10–12 yaş içindir; grup dersleri 80 dakika, birebir dersler 50 dakikadır.' },
    { q:'Ödev, 6. Seviye kursunda nasıl işler?',
      o:['Haftada bir haftalık Meydan Okuma ile: 32 haftalık oyunlaştırılmış bir deneyim.','Her derste ayrı bir yazılı ödevle.','Yalnızca modül sonlarında bir sınavla.'],
      a:0, e:'Haftalık Meydan Okuma, geleneksel ev ödevinin yerine geçer ve öğrencinin gelişimini takip eder.' },
    { q:'6. Seviyede alan ve hacim hangi modülde işlenir?',
      o:['Modül 1 · Sayılar, bölünebilirlik ve tamsayılar.','Modül 4 · Veri analizi ve olasılık.','Modül 3 · Geometri ve ölçme.'],
      a:2, e:'Modül 3 açılar, alan, çevre ve hacim konularını kapsar.' },
    { q:'6. Seviyenin ilk dersinin ana fikri nedir?',
      o:['Kesirleri ondalık sayılara dönüştürmek.','Bir sayının tüm bölenlerini bulmak ve bölenleri katlardan ayırt etmek: bölenlerin sayısı sınırlıdır, katlar ise sonsuz sayıdadır.','Dikdörtgenin alanını ve çevresini hesaplamak.'],
      a:1, e:'Rafi’nin fırınında öğrenciler bölenleri (kalansız bölen sayılar) ve katları (1, 2, 3… ile çarpılarak elde edilen sayılar) keşfeder ve bu iki kavramı açıkça ayırt eder.' },
    { q:'Her 8 derste bir öğrencileri ne bekler?',
      o:['Hiçbir değerlendirme yoktur.','Modüldeki ustalıklarını ölçen eğlenceli, macera tarzı görevler (göreve dayalı zorluklar).','Öğretmenin tüm konuyu yeniden anlattığı bir ders.'],
      a:1, e:'Göreve dayalı zorluklar, modülün temel kavramlarının kavrandığından emin olmak içindir.' }
  ],
  m3:[
    { q:'Math 7 kursu kimler için ve bir grup dersi ne kadar sürer?',
      o:['11–13 yaş, 80 dakika.','9–11 yaş, 80 dakika.','10–12 yaş, 50 dakika.'],
      a:0, e:'7. Seviye 11–13 yaş içindir; grup dersleri 80 dakika, birebir dersler 50 dakikadır.' },
    { q:'7. Seviyede cebirsel ifadeler ve denklemler hangi modülün konusudur?',
      o:['Modül 3 · Geometri ve ölçme.','Modül 2 · İfadeler, örüntüler ve denklemler.','Modül 4 · Veri analizi ve olasılık.'],
      a:1, e:'Modül 2, ifadelerin sadeleştirilmesi ve genişletilmesi, örüntüler ve iki adımlı denklemleri kapsar.' },
    { q:'Veri analizi modülünde hangi istatistikler hesaplanır?',
      o:['Yalnızca toplam.','Ortalama, medyan ve mod.','Yalnızca en büyük değer.'],
      a:1, e:'Öğrenciler ortalama, medyan ve modu hesaplar; çizgi ve daire grafikleriyle çalışır.' },
    { q:'Kurs denklem sistemlerini nasıl ele alır?',
      o:['Hiç ele almaz.','Cebirsel ve grafiksel olarak çözmenin temellerini tanıtır.','Yalnızca ezberlenecek formüllerle.'],
      a:1, e:'Kurs, denklem sistemlerini hem cebirsel hem grafiksel olarak çözmenin temellerini tanıtır.' },
    { q:'7. Seviyenin ilk dersinde tam sayılarla toplama ve çıkarma nasıl öğretilir?',
      o:['İşaret kuralları önce ezberletilir, sonra alıştırma yapılır.','Sayı doğrusuyla: her kural önce oklarla gösterilir, sonra kural olarak yazılır; çıkarma her zaman zıt sayıyı toplamaya dönüştürülür.','Her öğrenci kendi seçtiği bir modeli kullanır.'],
      a:1, e:'Bu derste kullanılan tek model sayı doğrusudur. Kurallar oklardan çıkarılır ve a − b = a + (−b) olarak yazılır.' }
  ],  m4:[
    { q:'Ders materyallerini nasıl gösterirsin?',
      o:['Ekranını paylaşarak.','Her zaman Follow Mode ile.','Sohbete ekran görüntüleri göndererek.'],
      a:1, e:'Her zaman Follow Mode kullanılır. Materyalleri göstermek için ekran paylaşımı yapılmaz.' },
    { ctx:'Zaman kazanmak için bir eğitmen, grup izlerken puanlı bir kartı kendi ekranında çözüyor.',
      q:'Öğrencilerin puanlarına ne olur?',
      o:['Herkes tam puan alır.','Her öğrenci için sıfır puan olarak değerlendirilir: her öğrenci kartı platformda bireysel olarak tamamlamalıdır.','Puan öğrenciler arasında paylaştırılır.'],
      a:1, e:'Her öğrenci puanlı kartları platformda bireysel olarak tamamlamalıdır.' },
    { ctx:'Öğretmen paneli, öğrencilerin çoğunun bir görevi yanlış yaptığını gösteriyor.',
      q:'Ne yaparsın?',
      o:['Zaman kaybetmemek için sonraki karta geçersin.','Konuyu farklı bir örnek üzerinden yeniden açıklar ve öğrencilerin tekrar denemelerini sağlarsın.','Doğru cevabı sohbete yazarsın.'],
      a:1, e:'Öğretmen paneli, öğrencilere zamanında geri bildirim vermen içindir: farklı bir örnek ve yeni bir deneme.' },
    { q:'Bir kart garip bir puan veriyor. Ne yaparsın?',
      o:['Hiçbir şey — oluyor böyle şeyler.','Ders numarasını ve kart adını belirterek metodoloji ekibine bildirirsin.','Öğrencilere o kartı bir daha yapmamalarını söylersin.'],
      a:1, e:'Ders numarası ve kart adı belirtilirse ekip kartı bulup düzeltebilir.' },
    { q:'Classroom’da bir şeyi görsel olarak açıklamak için hangi aracı kullanırsın?',
      o:['Zoom’daki gibi çizim ve açıklama aracını.','Beyaz Tahtayı.','Ayrı bir paylaşılan belgeyi.'],
      a:1, e:'Classroom’da henüz Zoom’daki gibi bir çizim ve açıklama aracı bulunmuyor: bir konuyu görsel olarak açıklamak için Beyaz Tahta kullanılır.' }
  ]
};

/* ---------------- Final page ---------------- */
COURSE.done = {
  title: 'Son adım: LMS’e dön ve DST’yi tamamla',
  html: `<p>Neredeyse bitirdin! Bu eğitime eriştiğin LMS eğitim sayfasına geri dön. DST testi, eğitimin hemen altında yer alıyor.</p>
    <p>👉 <b>Eğitimin başarıyla tamamlanmış sayılması için DST testini yapman ve geçmen gerekir.</b> DST testini yapmazsan eğitim tamamlanmamış olarak kalır ve süresi dolabilir.</p>
    <p>Geçme notu en az <b>%80</b>’dir.</p>
    <p>Bol şans! ❤️</p>`,
  nexts: [
    ['📒', '<b>Her dersten önce:</b> tüm öğretmen notlarını incele ve video bilgilendirmesini izle.'],
    ['👁️', '<b>Derste:</b> her zaman Follow Mode, ve her öğrenci kartlarını bireysel olarak tamamlar.'],
    ['📊', '<b>Öğretmen paneli:</b> birçok öğrenci yanlış yaparsa farklı bir örnek ve yeni bir deneme.'],
    ['🌱', '<b>Asla atlama:</b> bireysel çalışmayı ve Yeni Nesil Soruları.']
  ]
};

/* ---------------- EM Core widgets for em2 and em3 ----------------
   course-engine.js has no blocks for these EM Core widgets: Follow Mode demo, zoomable videos,
   stage carousels with real-lesson videos, closed/reasoning switch, tag cards and the 80-minute timeline.
   Their HTML sits in the module blocks above; this script brings them to life after every render.
   It only reads and changes the page: course-engine.js is not modified. Texts = EM Core Turkish (proofread). */
COURSE.emw = {
  lessonLen: 80,   // every math lesson (levels 5–7) lasts 80 minutes
  ui: {
    stageWas: 'Eski hali: <s>{was}</s> → yeni hali:',
    stageOf: '{i} / {n}',
    stageWatch: 'Gerçek bir derste “{t}” aşamasını izleyin',
    stageFirst: 'İlk aşamaya dön',
    next: 'İleri →',
    close: 'Kapat',
    videoDefault: 'Gerçek ders',
    zoomDefault: 'Video',
    zoomIn: 'Yakınlaştır',
    zoomOut: 'Uzaklaştır',
    zoomReset: 'Sıfırla',
    zoomHint: '+ / − tuşları, fare tekerleği veya çift tıklama ile yakınlaştırın · kaydırmak için sürükleyin · kapatmak için Esc veya ✕',
    fmNotes: '📒 Öğretmen notları — bunu sadece siz görürsünüz',
    fmFollowing: '🔗 Öğretmeni takip ediyor',
    fmStart: '👆 Sofia aynı derste ancak Lead the group anahtarı kapalı. Anahtarı açın.',
    fmOn: '✅ <b>Lead the group AÇIK.</b> Sofia sizin kartınıza atladı — ancak dikkat edin: kartı Öğretmen Notlarınız <b>olmadan</b> görüyor. Şimdi <b>Next card</b> butonunu deneyin.',
    fmOff: '⏸️ <b>Lead the group KAPALI.</b> Nereyi açarsanız açın, Sofia bulunduğu yerde kalır.',
    fmMoved: '➡️ {t}. karta geçtiniz — <b>Sofia da sizinle birlikte geçti</b>.',
    fmMovedAlone: '➡️ {t}. karta geçtiniz ancak <b>Sofia hâlâ {s}. kartta</b>. Başka bir şeye bakıyor olabilir. Lead the group anahtarını açın.',
    tlOpening: '<b>Giriş.</b> Isınma ve selamlama, önceki dersle bağlantı, ödev kontrolü, ders hedefi.',
    tlCards: '<b>Kartlar.</b> Öğrenciler üretir, keşfeder, düzeltir ve sunar. Saate göz kulak olun — son {left} dakika…',
    tlClose: '<b>Bitişten {left} dakika önce: kapanış zamanı.</b> Kartların neresinde olursanız olun, kapanış rutinine şimdi başlayın.',
    tlRoutine: '<b>Kapanış rutini.</b> Öğrencilerden ders özeti → bir sonraki ders için merak uyandırma (teaser) → yeni ödev.',
    tlBye: '<b>Hoşça kalın!</b> Herkes ne öğrendiğini, sırada ne olduğunu ve evde ne yapacağını bilerek dersten ayrılır.'
  },
  // Real-lesson videos of EM Core for Turkish (math lessons); “homework” has no Turkish version, so it keeps the default one, as in EM Core
  videos: {
    warmup:'https://drive.google.com/file/d/1l_8XvxjtHptOJZKDQcm8N7jtsKmodFso/preview',
    link:'https://drive.google.com/file/d/1jp4spDM6-F9HwUsgZQ8d5kRHg9ORE2_3/preview',
    homework:'https://drive.google.com/file/d/1TbSD-nL_tTGGbbyNIChfN5eZD_nzJLzm/preview',
    goal:'https://drive.google.com/file/d/1OMk5x0fiWfwcJKhb2MOsyy5w_Hy9PZ9X/preview',
    recap:'https://drive.google.com/file/d/1v_IasHeGyRnB6pKL1LRbpeYuPckSB5hJ/preview',
    teaser:'https://drive.google.com/file/d/1oJ0KJJ7ebaaCmSmMromuVq2LaaTBc3Wu/preview',
    nexthw:'https://drive.google.com/file/d/1ZVd_mghOXAzFRqPsexRZHQAgiVcxYSVw/preview'
  },
  stagesets: {
    open:[
      { e:'👋', t:'Isınma ve selamlama', ph:'Açılış · 1', c:'#BDE7FF', v:'warmup', goal:'Ders anlatmadan önce bağ kurun: her öğrenciyi ismiyle selamlayın, kamera ve sesi kontrol edin ve gülümsemeleri için bir neden verin.',
        d:['Geldiklerinde her öğrenciyi ismiyle karşılayın.','Haftaları veya ilgi alanları hakkında 1 dakikalık bir soru.','Onlar yerleşirken yoklamayı alın.'],
        say:['“Selam Leo! Seni görmek harika. Başlamadan önce kısa bir soru: Bu hafta hangi oyunu oynadın?”'] },
      { e:'🔗', t:'Önceki dersle bağlantı', ph:'Açılış · 2', c:'#C9F2D6', v:'link', goal:'Öğrencilere projelerinin ne durumda olduğunu ve bugünkü dersin neden onu takip ettiğini hatırlatın — hikaye devam ediyor.',
        d:['Bir öğrenciden geçen sefer ne yaptıklarını gruba anlatmasını isteyin.','Bunu tek cümleyle bugünkü göreve bağlayın.','Kurs hikayesini canlı tutun: “Bugün görevimiz…”.'],
        say:['“Ana, bize hatırlat: Geçen dersin sonunda projen ne yapabiliyordu?”','“Geçen sefer oyununuza bir kahraman eklemiştiniz. Bugün kahraman bir hedef kazanıyor.”'] },
      { e:'📓', t:'Ödev kontrolü', ph:'Açılış · 3', c:'#FFF1B8', v:'homework', goal:'Evde üzerinde çalıştıkları bir sonraki sürümü kontrol edin — ve kimlerin takıldığını fark edin.',
        d:['Bir veya iki öğrenciden ödevlerini göstermelerini isteyin.','İyi giden özel bir şeyi belirtin.','Ödev yok mu? Sadece sıfır vermek yerine teknik olarak takılıp takılmadıklarını öğrenin.'],
        say:['“Mia, bize yeni versiyonunu göster. Bu renkleri seçmene ne sebep oldu?”'] },
      { e:'🎯', t:'Ders hedefi', ph:'Açılış · 4', c:'#E4FFC2', v:'goal', goal:'Bugünün dersinin neyi hedeflediğini belirleyin. Bu, bağımsız çalışma başlamadan önceki son aşamadır.',
        d:['Bugünün projesinin hedefini bir veya iki cümleyle açıklayın.','Öğrenciden planı kendi kelimeleriyle tekrarlamasını isteyin.'] }
    ],
    close:[
      { e:'📋', t:'Özet (Recap)', ph:'Son 5–7 dk · 1', c:'#FFD9EC', v:'recap', goal:'Siz değil, öğrenciler ne öğrendiklerini söyler. Karttaki özet testini veya listeyi kullanın ve cevaplamalarına izin verin.',
        d:['2–3 öğrenciye bugün ne öğrendiklerini sorun.','“Anlaşıldı mı?” yerine neden veya nasıl diye sorun.','Grubun başardığı özel bir şeyi tebrik edin.'],
        say:['“Tom, oyun başladığında ne oluyor — ve nedeni ne?”'] },
      { e:'🔮', t:'Bir sonraki ders için merak uyandırma (Teaser)', ph:'Son 5–7 dk · 2', c:'#E9DDFF', v:'teaser', goal:'Tekrar gelmek istemelerini sağlayacak tek bir cümle. Yalnızca bir sonraki dersi okuduysanız işe yarar.',
        d:['Hazırlık yaparken bir sonraki dersi okuyun.','Teaser’ı onların projesine bağlayın.','Kısa ve heyecan verici tutun — özet değil, bir vaat.'],
        say:['“Gelecek sefer kahramanınızın yolunda tehlikeli bir şey belirecek… Başarabilecek mi?”'] },
      { e:'🏠', t:'Gelecek ödev', ph:'Son 5–7 dk · 3', c:'#C9F2D6', v:'nexthw', goal:'Projenin bir sonraki sürümünü açıklayın, böylece herkes ne yapacağını — ve nasıl teslim edeceğini — tam olarak bilir.',
        d:['Ödevi bir veya iki cümleyle açıklayın.','Bağlantıyı teslim ederken “Send” butonuna tıklamalarını hatırlatın.','Olumlu bir notla vedalaşın.'],
        say:['“Gelecek sefere kadar: Oyununuza yeni bir detay ekleyin, yayınlayın ve bağlantısını bana gönderin.”'] }
    ]
  },
  // Closed vs reasoning questions switch (em3)
  qcmp: {
    v:['“Anlaşıldı mı?”','“Herkes bitirdi mi?”','“Sorusu olan var mı?”'],
    s:['“Mia, karakter neden sadece yön tuşuna bastığında hareket ediyor?”','“Leo, bu satırı en üste taşırsak ne olacağını düşünüyorsun? Deneyin ve bize söyleyin.”','“Ana, puanın çalıştığını nereden bildin?”']
  },
  cmpnote: { v:'“Evet” ile cevaplaması kolaydır — ve ne anladıkları hakkında hiçbir şey öğrenemezsiniz.', s:'Bir isim artı bir “neden” veya “nasıl”: öğrenci düşüncesini sesli olarak açıklamak zorundadır.' },
  // Follow Mode demo cards (em2)
  fmCards: [['1. Kart · Bugünün görevine hazır olun! 🚀','Bugün ilk projenizi oluşturacaksınız…'],['2. Kart · Hoş geldiniz! 👋','Birbirinizi görüp duyabildiğinizden emin olalım…'],['3. Kart · Birbirimizi tanıyalım! 🎤','Her içerik üreticisinin kendine has bir tarzı vardır…']]
};
(function(){
  const W = COURSE.emw, U = W.ui;
  const tx = (s, o) => String(s).replace(/\{(\w+)\}/g, (m, k) => o && k in o ? o[k] : m);
  const q = (s, r) => (r || document).querySelector(s), qq = (s, r) => Array.from((r || document).querySelectorAll(s));
  const esc = s => String(s || '').replace(/"/g, '&quot;');

  /* Video window (real-lesson videos and zoomable clips) */
  function vmodal(){ let v = q('#vmodal'); if (!v){ v = document.createElement('div'); v.className = 'ovl vovl'; v.id = 'vmodal'; document.body.appendChild(v); } return v; }
  function openVideo(key, title){
    const v = vmodal();
    v.innerHTML = `<div class="vbox"><div class="vhead"><b>🎬 ${title}</b><button class="vx" data-vclose aria-label="${U.close}">✕</button></div>
      <div class="vframe"><iframe src="${W.videos[key]}" allow="autoplay; fullscreen" allowfullscreen title="${esc(title)}"></iframe></div></div>`;
    v.classList.add('show');
  }
  function closeVideo(){ const v = q('#vmodal'); if (v){ v.classList.remove('show'); v.innerHTML = ''; } }
  const ZM = { s:1, x:0, y:0 };
  function zApply(){
    const st = q('#zstage'), inn = q('#zinner'); if (!st) return;
    const w = st.clientWidth, h = st.clientHeight;
    ZM.s = Math.min(5, Math.max(1, ZM.s));
    ZM.x = Math.min(0, Math.max(w - w * ZM.s, ZM.x));
    ZM.y = Math.min(0, Math.max(h - h * ZM.s, ZM.y));
    inn.style.transform = `translate(${ZM.x}px,${ZM.y}px) scale(${ZM.s})`;
    st.classList.toggle('zoomed', ZM.s > 1);
    q('#zlvl').textContent = Math.round(ZM.s * 100) + '%';
  }
  function zTo(ns, px, py){
    const st = q('#zstage'); if (px == null){ px = st.clientWidth / 2; py = st.clientHeight / 2; }
    ns = Math.min(5, Math.max(1, ns));
    ZM.x = px - (px - ZM.x) * (ns / ZM.s); ZM.y = py - (py - ZM.y) * (ns / ZM.s); ZM.s = ns; zApply();
  }
  function openZoom(src, title){
    const v = vmodal();
    v.innerHTML = `<div class="vbox zbox"><div class="vhead"><b>🔍 ${title}</b>
        <span class="zctl"><button data-z="-" aria-label="${U.zoomOut}">−</button><span id="zlvl">100%</span><button data-z="+" aria-label="${U.zoomIn}">+</button><button data-z="0">${U.zoomReset}</button></span>
        <button class="vx" data-vclose aria-label="${U.close}">✕</button></div>
      <div class="zstage" id="zstage"><div class="zinner" id="zinner"><video src="${src}" autoplay loop muted playsinline></video></div></div>
      <p class="zhint">${U.zoomHint}</p></div>`;
    v.classList.add('show');
    ZM.s = 1; ZM.x = 0; ZM.y = 0; zApply();
    const st = q('#zstage'), pos = e => { const r = st.getBoundingClientRect(); return [e.clientX - r.left, e.clientY - r.top]; };
    st.addEventListener('wheel', e => { e.preventDefault(); const [px, py] = pos(e); zTo(ZM.s * (e.deltaY < 0 ? 1.2 : 1 / 1.2), px, py); }, { passive:false });
    st.addEventListener('dblclick', e => { const [px, py] = pos(e); zTo(ZM.s >= 4 ? 1 : ZM.s * 2, px, py); });
    let drag = null;
    st.addEventListener('pointerdown', e => { if (ZM.s <= 1) return; drag = { x:e.clientX - ZM.x, y:e.clientY - ZM.y }; st.setPointerCapture(e.pointerId); st.classList.add('drag'); });
    st.addEventListener('pointermove', e => { if (!drag) return; ZM.x = e.clientX - drag.x; ZM.y = e.clientY - drag.y; zApply(); });
    const end = () => { drag = null; st.classList.remove('drag'); };
    st.addEventListener('pointerup', end); st.addEventListener('pointercancel', end);
  }
  const videoBtn = (key, label) => W.videos[key] ? `<button class="vbtn" data-video="${key}" data-vtitle="${esc(label)}">▶ ${label}</button>` : '';

  /* Bring the widgets of the page to life */
  function init(){
    qq('[data-oq]').forEach(b => b.onclick = () => b.classList.toggle('on'));

    // Stage carousels (opening / closing)
    qq('.stc[data-set]').forEach(st => {
      const list = W.stagesets[st.dataset.set]; if (!list) return;
      let i = 0; const seen = new Set();
      const draw = () => {
        const s = list[i]; seen.add(i);
        const L = q('.stc-l', st), R = q('.stc-r', st);
        L.style.background = `radial-gradient(circle at 50% 40%,#fff,${s.c})`;
        L.innerHTML = `<span class="phase">${s.ph}</span><span class="bi">${s.e}</span><span class="bn">${tx(U.stageOf, { i:i + 1, n:list.length })}</span>`;
        R.innerHTML = `${s.was ? `<span class="was">${tx(U.stageWas, { was:s.was })}</span>` : ''}<h3>${s.t}</h3><p class="goal">${s.goal}</p>
          <div class="dolist">${s.d.map((x, k) => `<div style="animation-delay:${k * .1}s">${x}</div>`).join('')}${(s.say || []).map((x, k) => `<div class="say" style="animation-delay:${(s.d.length + k) * .1}s"><i>${x}</i></div>`).join('')}</div>
          ${s.v ? `<div>${videoBtn(s.v, tx(U.stageWatch, { t:s.t }))}</div>` : ''}
          <div class="stc-nav"><div class="stc-dots">${list.map((x, k) => `<button class="${k === i ? 'on' : ''} ${seen.has(k) ? 'seen' : ''}" data-s="${k}" title="${esc(x.t)}">${x.e}</button>`).join('')}</div><span class="sp"></span>
          <button class="btn-g" data-sd="-1" ${i === 0 ? 'disabled style="opacity:.4"' : ''}>←</button><button class="btn-y" data-sd="1" style="padding:11px 18px">${i === list.length - 1 ? U.stageFirst : U.next}</button></div>`;
        qq('[data-s]', st).forEach(x => x.onclick = () => { i = +x.dataset.s; draw(); });
        qq('[data-sd]', st).forEach(x => x.onclick = () => { i = (i + +x.dataset.sd + list.length) % list.length; draw(); });
      };
      draw();
    });

    // Closed / reasoning questions switch
    qq('[data-cmp="questions"]').forEach(sg => {
      const out = q('[data-cmpout="questions"]');
      const draw = k => { qq('button', sg).forEach(b => b.setAttribute('aria-pressed', String(b.dataset.k === k)));
        out.innerHTML = W.qcmp[k].map(x => `<div class="fbi ${k}">${k === 'v' ? '😐' : '🧠'} ${x}</div>`).join('') + `<p class="fbn">${W.cmpnote[k]}</p>`; };
      qq('button', sg).forEach(b => b.onclick = () => draw(b.dataset.k));
      draw('v');
    });

    // Follow Mode demo
    if (q('#fmDemo')){
      const CARDS = W.fmCards; let lead = false, t = 0, s = 0;
      const draw = msg => {
        q('#fmSw').classList.toggle('on', lead);
        q('#fmT').innerHTML = `<span class="tnb">${U.fmNotes}</span><b>${CARDS[t][0]}</b>${CARDS[t][1]}`;
        q('#fmS').innerHTML = `<b>${CARDS[s][0]}</b>${CARDS[s][1]}${lead ? `<span class="follow">${U.fmFollowing}</span>` : ''}`;
        q('#fmOut').innerHTML = msg;
      };
      q('#fmSw').onclick = () => { lead = !lead; if (lead) s = t; draw(lead ? U.fmOn : U.fmOff); };
      q('#fmNext').onclick = () => { t = (t + 1) % CARDS.length; if (lead) s = t; draw(tx(lead ? U.fmMoved : U.fmMovedAlone, { t:t + 1, s:s + 1 })); };
      draw(U.fmStart);
    }

    // Closing timeline: one 80-minute lesson. The opening takes ~7 minutes and the closing starts 8 minutes before the end
    const tl = q('#tlRange');
    if (tl){
      const len = W.lessonLen, o = 7 / len * 100, c = 8 / len * 100;
      tl.max = len;
      q('#tlOpen').style.width = o + '%'; q('#tlClose').style.width = c + '%'; q('#tlMain').style.width = (100 - o - c) + '%';
      q('#tlScale').innerHTML = [0, .25, .5, .75, 1].map(f => `<span>${Math.round(len * f)}′</span>`).join('');
      const draw = () => { const v = +tl.value, left = len - v; q('#tlClock').textContent = v + '′'; q('#tlHead').style.left = `calc(${v / len * 100}% - 2px)`;
        const [e, txt] = v < 7 ? ['👋', U.tlOpening]
          : left > 8 ? ['🃏', tx(U.tlCards, { left })]
          : left >= 5 ? ['⏰', tx(U.tlClose, { left })]
          : left > 0 ? ['🏁', U.tlRoutine]
          : ['👋', U.tlBye];
        q('#tlOut').innerHTML = `<span>${e}</span><span>${txt}</span>`; };
      tl.oninput = draw;
      draw();
    }
  }

  document.addEventListener('click', e => {
    const t = e.target;
    const vb = t.closest('[data-video]'); if (vb){ openVideo(vb.dataset.video, vb.dataset.vtitle || U.videoDefault); return; }
    const zb = t.closest('[data-zoom]'); if (zb){ openZoom(zb.dataset.zoom, zb.dataset.ztitle || U.zoomDefault); return; }
    const zc = t.closest('[data-z]'); if (zc){ const k = zc.dataset.z; if (k === '0'){ ZM.s = 1; ZM.x = 0; ZM.y = 0; zApply(); } else zTo(ZM.s * (k === '+' ? 1.4 : 1 / 1.4)); return; }
    if (t.closest('[data-vclose]') || t.id === 'vmodal') closeVideo();
  });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeVideo(); });
  addEventListener('resize', () => { if (q('#zstage')) zApply(); });

  function start(){
    vmodal();
    // Widget HTML placed inside a text block leaves empty paragraphs around it: hide them
    const css = document.createElement('style'); css.textContent = '#view p:empty{display:none}#view .tline{margin-bottom:18px}'; document.head.appendChild(css);
    init();
    const view = q('#view'); if (view) new MutationObserver(init).observe(view, { childList:true });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
