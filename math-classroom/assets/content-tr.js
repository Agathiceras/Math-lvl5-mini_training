/* ============================================================
   EM lesson guide (Classroom) · Math Levels 5–7 training
   Lesson shown in the simulated Classroom: Level 5 · Lesson 1 (school park, Sofya and Rafi's architecture team),
   from the first card up to and including "✍️ Bir doğru parçası çizin (bireysel çalışma №1)".
   The guide texts are in TURKISH; the lesson cards are in TURKISH (as taught).
   Translate only the text inside quotes / backticks. Keep HTML tags, ${...} placeholders, keys, ids, file names and URLs unchanged.
   ============================================================ */
window.CONTENT = { lang: 'tr' };

/* =========================================================
   INTERFACE STRINGS (page title, replicated Classroom, guide card)
   ========================================================= */
CONTENT.ui = {
  title: 'YEM Ders Rehberi · Matematik',

  // Classroom header
  headerTitle: 'Matematik · Seviye 5 · Ders 1',
  online: '2 çevrim içi',
  guideChip: 'YEM ders rehberi',
  leave: 'Ayrıl',

  // Classroom toolbar (tooltips included)
  classroom: 'Classroom',
  assignments: 'Assignments',
  prevTask: 'Önceki görev',
  nextTask: 'Sonraki görev',
  leadGroup: 'Lead the group',
  endSession: 'Oturumu sonlandır',

  // Video tiles
  student: 'Elif',                  // the student's name (also used in the guide texts below)
  tutorInitial: 'E',                // letter in the tutor's avatar
  tutorYou: 'Eğitmen (sen)',
  following: 'Eğitmen takip ediliyor',

  // Lesson platform header shown inside Assignments
  platformLang: 'TR ˅',
  platformUser: 'Eğitmen',

  // Shared pieces of the lesson cards
  teacherNotes: 'Teacher notes',
  submit: '✔ Gönder',
  choose: 'Seç…',
  yourAnswer: 'Cevabın',
  correct: '✔ Doğru!',
  wrong: '✖ Yanlış, tekrar dene.',
  scoreLabel: '✍️ Bireysel çalışma · otomatik kontrol',
  scoreHint: (done, total) => `Kontrol edilen sorular: ${done}/${total}. Her doğru cevap 1 puan.`,

  // Segment editor (replica of the graded activity in the card "Bir doğru parçası çizin")
  seg: {
    title: '📏 Doğru parçası çizici',
    count: n => `Doğru parçası: ${n}`,
    auto: 'Otomatik kontrol',
    reset: 'Temizle',
    hint: 'Bir noktadan diğerine sürükle (ya da iki noktaya sırayla tıkla). Çizgi yeşile döndüğünde bırak.',
    added: s => `✔ ${s} doğru parçası çizildi.`,
    dup: s => `${s} zaten çizildi: [AB] ile [BA] aynı doğru parçasıdır.`,
    all: '🎉 Mümkün olan tüm doğru parçalarını çizdin! Şimdi sayıyı aşağıya yaz.'
  },

  // Guide card (coach)
  coachStep: (n, total) => `YEM ders rehberi · ${n}/${total}`,
  next: 'İleri →',
  clickHint: '👆 Vurgulanan öğeye tıkla',
  openSections: (opened, total) => `Her bölümü aç (${opened}/${total})`,
  scrollEndNotes: 'Notların sonuna kadar kaydır',
  scrollEndCard: 'Kartın sonuna kadar kaydır',
  checks: {
    seg: 'Etkinlikte en az bir doğru parçası çiz',
    answer: 'Bir cevap gir ve «Gönder» ile kontrol et'
  }
};

/* =========================================================
   WELCOME PAGE
   ========================================================= */
CONTENT.welcome = {
  kicker: 'Yeni Eğitim Modeli · Eğitmen eğitimi',
  title: 'YEM ders <span>rehberi</span>',
  lead: 'Bu rehber, <b>yeni eğitim modeline (YEM)</b> ait bir dersin Classroom’da nasıl göründüğünü sana gösterir. Gerçek bir YEM dersinin ilk kartlarını — <b>Matematik · Seviye 5, Ders 1: Mimari çizimin temelleri</b> (okul parkı, Sofya ve Rafi’nin mimarlık ekibi) — ve sınıfta hazır bekleyen Elif adlı öğrenciyi kullanır.',
  seeTitle: 'Görecekleriniz',
  see: [
    'Bir <b>YEM dersinin</b> nasıl düzenlendiği: Tüm rehberliğin dersin içinde yer aldığı bir dizi kart.',
    '<b>Senin ne gördüğün</b> ve <b>Elif’in ne gördüğü</b>: <b>Teacher notes</b> her kartın içinde yer alır ve bunları yalnızca eğitmen görebilir.',
    'Dersin en ayrıntılı notları olan <b>Eğitmen kartı</b>: Hedefler, iki kart türü, süre planı, yaygın hatalar, her kart için hızlı cevap anahtarı ve açıklayıcı bir video.',
    'Öğrencilerin açtığın kartı takip etmesini sağlayan <b>Lead the group</b> özelliği.',
    '<b>Otomatik değerlendirilen</b> bireysel çalışma kartları: Her öğrenci bunları kendi kopyasında çözer.'
  ],
  howTitle: 'Nasıl kullanılır',
  howText: 'Bu bir alıştırma simülasyonu değil, yönlendirici bir rehber: Verilecek kararlar veya kaybedilecek puanlar yok. Sadece vurgulanan adımları takip et ve rehberin gösterdiği yerlere tıkla. İstediğin kadar tekrar oynatabilirsin.',
  start: 'REHBERİ BAŞLAT →'
};

/* =========================================================
   LESSON CONTENT (Math · Level 5 — Lesson 1, in Turkish), cards 1–7 of the real lesson
   Each card: title (shown in the Assignments list and above the card) + html,
   built with the page's helpers: card = coloured card, pic = picture, media = picture + text
   ('narrow' / 'narrow right'), spoiler = collapsible section, tnSpoiler = "Eğitmen notları" section
   with the Teacher notes inside, quiz = test with automatic check (id, question, options, correct indexes,
   multiple), choice = drop-down, group = matching pairs, testImg = quiz with pictures,
   inputEx = answer field with automatic check, segApp = segment editor, scoreBox = score of the graded card.
   P.xxx are image paths and links.
   ========================================================= */
// Questions that give points on the graded card (card 7: puan = 3)
CONTENT.graded = ['seg-count', 'l1-seg-symbol', 'l1-seg-tf'];

CONTENT.activities = ({ P, tnotes, spoiler, media, ul, ol, group, testImg, card, pic, tnSpoiler, quiz, choice, inputEx, segApp, scoreBox }) => [
  /* ---------- 1 ---------- */
  { title:`Matematik Maceralarına Hoş Geldiniz!`, html:
    pic(P.welcomeBanner, `Geometri dersine hoş geldiniz!`) +
    card('blue', `<h1>👋 Mimarlar ekibine hoş geldiniz!</h1>`) +
    `<h2>Sofya ve Rafi ile tanışın!</h2>
     <p>Matematik maceralarınızda size <strong>Sofya ve Rafi</strong> eşlik edecek. Birlikte araştıracak, fikirler üretecek, fikirlerinizi deneyecek ve beklenmedik durumlara çözümler bulacaksınız!</p>` +
    media(P.sofya, card('purple', `<h3>💜 Sofya</h3><blockquote><p>"Merhaba! Ben Sofi. Resim çizmeyi, sıra dışı yapılar tasarlamayı ve çevremdeki geometrik şekilleri fark etmeyi seviyorum. Herkesin sevdiği bir yer bulabileceği bir park tasarlamayı hayal ediyorum. Hadi birlikte fikir üretelim!"</p></blockquote>`), 'narrow') +
    media(P.rafi, card('green', `<h3>💚 Rafi</h3><blockquote><p>"Ben de Rafi! Bulmacaları, deneyleri ve 'Peki ya...?' sorularını seviyorum. Her şeyin nasıl çalıştığını anlamayı seviyorum. Bazen fikirlerim ilk denemede işe yaramıyor; o zaman başka bir yol deniyorum!"</p></blockquote>`), 'narrow right') +
    `<h3>🎙️ Şimdi sıra sizde!</h3>
     <p>Bugün bizi geometrik keşifler ve ilk projemiz olan <strong>okul parkı</strong> bekliyor! Tanışalım ve birlikte çalışmak için her şeyin hazır olup olmadığını kontrol edelim.</p>` +
    card('purple', `<h2>📡 Adım 1. Bağlantıyı kontrol ediyoruz</h2><p><strong>Eğitmeni duyabiliyor musunuz?</strong> Kameraya el sallayın 👋</p><p>Şimdi mikrofonunuzu açın ve şunu söyleyin: <strong>"Merhaba! Benim adım ..., ... yaşındayım."</strong></p><p>Tanıştıktan sonra diğerlerini duymak için mikrofonunuzu kapatın.</p>`) +
    `<h3>✅ Neler çalışıyor? Uygun olan tüm seçenekleri işaretleyin</h3>` +
    quiz('geometry-welcome-tech-check', `Bağlantınızı kontrol edin:`, [`👀 Eğitmeni görüyorum`, `🔊 Eğitmeni duyuyorum`, `🎙️ Mikrofonumu açıp kapatabiliyorum`, `🎥 Kameram açık`], [0, 1, 2, 3], true) +
    `<p>Bir şey çalışmıyorsa, <strong>sohbete yazın.</strong> — eğitmen size yardımcı olacaktır.</p>` +
    card('green', `<h2>🌳 Adım 2. İlk fikriniz</h2><p>Hayal edin: Önümüzde okul parkı için boş bir alan var. <strong>İlk olarak ne eklemeyi önerirsiniz?</strong></p><p>${choice([`⛲ Fıskiye`, `🛝 Oyun alanı`, `🌳 Gölgeli ağaçlı yol`, `💡 Yollar boyunca lambalar`])}</p><p>Eğitmen size söz verdiğinde mikrofonunuzu açın ve şunu anlatın: <em>"... seçiyorum, çünkü ..."</em> Ardından mikrofonunuzu tekrar kapatın.</p>`) +
    `<p><strong>Ekip hazır, fikirler de var; şimdi onları geometrik bir çizime nasıl dönüştürebileceğinizi öğrenme zamanı! 📐</strong></p>` +
    card('plain',
      spoiler(`🛠️ Mikrofon ve kamera düğmelerini bulamıyorum.`, ol([`Ders penceresindeki kontrol panelini bulun.`, `Mikrofon 🎙️ ve kamera 🎥 simgelerini bulun.`, `Cihazı açmak veya kapatmak için ilgili simgeye tıklayın.`]) + `<p>Olmazsa eğitmene sohbetten yazın.</p>`) +
      spoiler(`🔊 Eğitmeni duyamıyorum.`, ol([`Bilgisayarınızın ve kulaklığınızın ses düzeyini kontrol edin.`, `Ders ayarlarında doğru hoparlörün veya kulaklığın seçili olduğundan emin olun.`, `Ses hâlâ gelmiyorsa sohbete "Sizi duyamıyorum." yazın.`])) +
      spoiler(`🎙️ Mikrofon çalışmıyor.`, ol([`Tarayıcının mikrofona erişmesine izin verilip verilmediğini kontrol edin.`, `Ders penceresindeki ses ayarlarını açın ve doğru mikrofonu seçin.`, `Olmazsa eğitmene sohbetten yazın.`])) +
      spoiler(`🎥 Kamera açılmıyor.`, ol([`Tarayıcının kameraya erişmesine izin verilip verilmediğini kontrol edin.`, `Kamerayı kullanıyor olabilecek diğer programları kapatın.`, `Kamera yine de çalışmıyorsa eğitmene haber verin ve sesinizle ya da sohbet üzerinden katılın.`]))) +
    pic(P.welcomeEnd, `Açıklama`) +
    `<div id="tn-first">` +
    tnSpoiler(`Eğitmen notları ✅`, `
      <p><strong>Süre:</strong> 4–5 dakika.</p>
      <p><strong>Hedef:</strong> öğrencileri tanıştırmak, teknik hazırlığı kontrol etmek ve grubu okul parkı tasarlama hikâyesine dâhil etmek.</p>
      <p><strong>Nasıl uygulanır:</strong> önce kameranızı ve mikrofonunuzu açın, örneğe göre kendinizi tanıtın. Öğrencilere sırayla söz verin. Karşılama sırasında öğrenciyi duyup duymadığınızı, onun sizi görüp duyduğunu ve mikrofonunu kapatabildiğini kontrol edin.</p>
      <p><strong>Kısa etkileşim:</strong> öğrencilerden park için bir nesne seçmelerini ve seçimlerini kısaca açıklamalarını isteyin. Tüm seçenekler kabul edilebilir. Büyük gruplarda herkes seçim yapar, ancak sözlü olarak 2–3 öğrenci cevap verir.</p>
      <p><strong>Geçiş:</strong> "Park için fikirlerimiz hazır. Şimdi geometri yardımıyla bunları doğru şekilde çizmeyi öğreneceğiz."</p>
      <p><strong>Teknik sorun yaşanırsa:</strong> temel ayarlarla ilgili yardım edin. Sorun hızlıca çözülemiyorsa teknik desteğe başvurun ve öğrenciye katılabileceği bir yol sunun.</p>`) +
    tnSpoiler(`Eğitmen kartı ❗`, `
      <h1>Ders hazırlığı: Mimari çizimin temelleri</h1>
      ${spoiler(`Dersin ilgi çekici hikâyesi`, `<p>Bu, Matematik Maceraları serisinin 1. dersidir. Öğrenci, Sofya ve Rafi’nin mimarlık ekibine katılır: Bir okul parkı tasarlıyorlar, ancak önce fikirlerini kesin çizgilerle göstermeleri gerekiyor. Öğrenci; noktayı, doğru parçasını, ışını ve doğruyu öğrenirken "mimarın araç kutusunu" tanır.</p>`)}
      ${spoiler(`Dersin ana hedefi`, `<p>Öğrencinin nokta, doğru parçası, ışın ve doğruyu birbirinden ayırt etmeyi; bunları Latin harfleriyle adlandırmayı, sembolik gösterimlerini okumayı ve özellikleri hakkında düşünmeyi öğrenmesini sağlamak (hangi şeklin uçları vardır, hangisi ölçülebilir veya hangisi iki farklı şekilde adlandırılabilir).</p>`)}
      ${spoiler(`Temel kazanım`, ol([`Nokta, doğru parçası, ışın ve doğruyu uçlarına göre ayırt eder.`, `Gösterimleri okur ve yazar: nokta (A), [AB], [AB, AB; [AB]=[BA] ancak [AB ≠ [BA.`, `Hangi şeklin ölçülebileceğini (yalnızca doğru parçası) ve doğru parçası uzatıldığında önce ışına, sonra doğruya dönüştüğünü bilir.`, `Yaygın 4 hatadan kaçınır (aşağıdaki "Dikkat edilmesi gerekenler" listesine bakın).`]))}
      <div class="tn-video"><iframe src="${P.video}" allow="autoplay; fullscreen" allowfullscreen loading="lazy" title="Ders videosu"></iframe></div>
      <p><strong>Eğitmenin görevi:</strong> Bu derste İKİ tür kart vardır — birbirine karıştırmayın: <br>• <strong>Teori kartları (TÜM SINIFLA · değerlendirilmez):</strong> 5. Nokta, 6. Doğru Parçası, 8. Işın ve Doğru — bu kartları birlikte işleyin, kontrol sorularını sınıfça cevaplayın, değerlendirmeyin. <br>• <strong>Bireysel çalışma kartları ✍️ (BAĞIMSIZ · değerlendirilir · otomatik kontrol):</strong> 7. bireysel çalışma #1, 9. bireysel çalışma #2, 12. bireysel çalışma #3, 13. yeni nesil — öğrenci TEK BAŞINA çalışır; ilk denemeden önce ipucu vermeyin. Hata yaparsa ilgili teori kartına yönlendirin (bireysel çalışma notlarında yeniden anlatım için kullanılacak kartın numarası belirtilir).</p>
      ${spoiler(`Ders süre dağılımı (80 dakika)`, `<table>
        <tr><th>Kart</th><th>Tür</th><th>Süre</th></tr>
        <tr><td>1. Matematik Maceraları’na hoş geldiniz!</td><td>Tüm sınıfla</td><td>5 dakika</td></tr>
        <tr><td>2. 1. derse hoş geldiniz (roller)</td><td>Tüm sınıfla</td><td>5 dakika</td></tr>
        <tr><td>3. Kurallar ve görev</td><td>Tüm sınıfla</td><td>4 dakika</td></tr>
        <tr><td>4. Mimarın araçları</td><td>Tüm sınıfla</td><td>3 dakika</td></tr>
        <tr><td>5. Nokta nedir?</td><td>Teori</td><td>5 dakika</td></tr>
        <tr><td>6. Doğru parçası</td><td>Teori</td><td>4 dakika</td></tr>
        <tr><td>7. Doğru parçası çizin</td><td>Bireysel çalışma #1</td><td>7 dakika</td></tr>
        <tr><td>8. Işın ve doğru</td><td>Teori</td><td>5 dakika</td></tr>
        <tr><td>9. Işın ve doğru kontrolü</td><td>Bireysel çalışma #2</td><td>7 dakika</td></tr>
        <tr><td>10. Mola</td><td>Fiziksel etkinlik</td><td>3 dakika</td></tr>
        <tr><td>11. Yaygın hataları kontrol etme</td><td>Ek çalışma (zaman kalırsa)</td><td>0 dakika</td></tr>
        <tr><td>12. Bireysel çalışma #3 (kazanımlar)</td><td>Bireysel çalışma #3</td><td>7 dakika</td></tr>
        <tr><td>13. Yeni nesil sorular</td><td>Bireysel çalışma #4</td><td>7 dakika</td></tr>
        <tr><td>14. Ek görev</td><td>Ek çalışma (zaman kalırsa)</td><td>0 dakika</td></tr>
        <tr><td>15. Özetleme ve değerlendirme</td><td>Tüm sınıfla</td><td>3 dakika</td></tr>
        <tr><td>16. Kapanış: hedef + ödev + sonraki ders</td><td>Tüm sınıfla</td><td>7 dakika</td></tr>
      </table>
      <p><em>Toplam: yaklaşık 72 dakika + yaklaşık 8 dakika pay (geçişler, geç kalanlar, sorular) = 80 dakika.</em></p>
      <p><strong>0 dakika olarak işaretlenen kartlar ek çalışmadır:</strong> "Yaygın hataları kontrol etme" ve "Ek görev" yalnızca zaman kalırsa yapılır; 80 dakikalık planın parçası değildir. "Yaygın Hatalar" kartındaki notta da süre kısıtlıysa bu kartın atlanması gerektiği belirtilir.</p>`)}
      ${spoiler(`Yöntemsel odak`, `<p>Her kavram önce TÜM SINIFLA teori kartında birlikte öğrenilir (gif/animasyonu gösterin → tanımı açıklayın → grupça kontrol edin). Ardından öğrenci, otomatik kontrol özelliği bulunan sonraki BİREYSEL ÇALIŞMA kartında kavramı tek başına hemen uygular. Ders, iki birikimli bireysel çalışma kartıyla (12 — tanıma ve akıl yürütme, 13 — yeni nesil) tamamlanır. Bireysel çalışma, dersin Bireysel çalışma-KPI’ının temelidir: İlk denemeden önce asla ipucu vermeyin. Öğrenci doğru cevap veremezse cevabı söylemek yerine onu ilgili teori kartına yönlendirin; kartın adı notta belirtilmiştir.</p>`)}
      ${spoiler(`Dikkat edilmesi gerekenler (4 yaygın hata)`, ol([`Doğru parçası ≠ doğru: Doğru parçası uç noktalarının dışına uzanmaz.`, `[AB]=[BA] (bir doğru parçasında sıra önemli değildir), AMA [AB ≠ [BA (bir ışında ilk harf başlangıç noktasını gösterir).`, `Işın harflerinin sırası: İlk harf başlangıç noktasını gösterir.`, `Noktanın boyutu yoktur — nokta, "alanı olan küçük bir nokta" DEĞİLDİR (çubuğun uzunluğu vardır, artı işareti kesişen doğrulardır).`]))}
      ${spoiler(`Kartlara göre hızlı cevap anahtarı (tüm derse genel bakış)`, `
        <h4>1-4. Giriş kartları (karşılama, roller, kurallar, araç seti)</h4>
        <p><strong>Tür:</strong> Tüm sınıfla, değerlendirilmez. <strong>Cevap:</strong> Yok / tüm seçenekler doğru. Araç seti eşleştirmesini birlikte yapın (örneğin, cetvel → doğru parçaları/doğrular çizer).</p>
        <h4>5. Nokta nedir? (TEORİ)</h4>
        <p><strong>Tanım:</strong> Bir nokta, tam olarak bir yeri gösterir ve boyutu yoktur (uzunluğu/genişliği/kalınlığı yoktur). Büyük Latin harfiyle adlandırılır (A). <strong>Nokta olmayanlar:</strong> bir çubuk (uzunluğu vardır) ya da artı/çarpı işareti (kesişen doğrular). 4. hatayı ele alır.</p>
        <h4>6. Doğru parçası (TEORİ)</h4>
        <p><strong>Tanım:</strong> İki noktayla sınırlıdır ve kesin bir uzunluğu vardır. Gösterimi [AB]=[BA]. 1. ve 2. hataları ele alır. Doğru, noktaların ötesine uzanmaz.</p>
        <h4>7. Doğru parçası çizin (BİREYSEL ÇALIŞMA #1 · puan=3)</h4>
        <p>1) Verilen noktalardan kaç doğru parçası oluşturulabilir? → <strong>15</strong>. 2) Gösterimi → <strong>[AB]</strong>. 3) "[AB] ve [BA] iki farklı doğru parçasıdır" → <strong>Yanlış, aynı doğru parçasıdır.</strong></p>
        <h4>8. Işın ve doğru (TEORİ)</h4>
        <p><strong>Işın:</strong> başlangıç noktası vardır, bitiş noktası yoktur; ilk harf başlangıç noktasını gösterir ([AB, A noktasından başlar). <strong>Doğru:</strong> başlangıç noktası da bitiş noktası da yoktur. 1. ve 3. hataları ele alır.</p>
        <h4>9. Işın ve doğru kontrolü (BİREYSEL ÇALIŞMA #2 · puan=5)</h4>
        <p>1) Işın ve doğru arasındaki fark → <strong>Işının bir başlangıç noktası vardır; doğrunun başlangıç noktası da bitiş noktası da yoktur.</strong> 2) [AB hangi noktadan başlar → <strong>A</strong>. 3) [AB ve [BA aynı mıdır → <strong>Hayır, farklı ışınlardır</strong>. 4) Bir doğrunun kaç ucu vardır → <strong>Hiç</strong>. 5) Günlük hayatta ışına en yakın örnek → <strong>El fenerinin ışığı</strong>.</p>
        <h4>10. Mola (3 dakika)</h4>
        <p>Pasif mola, görev yok.</p>
        <h4>12. Bireysel çalışma #3 — ders kazanımları (BİREYSEL ÇALIŞMA · değerlendirilen, tek ölçek)</h4>
        <p><strong>Seviye 1 (tanıma):</strong> S1 doğru parçası sembolü → <strong>[AB]</strong>; S2 tam olarak İKİ ucu olan şekil → <strong>doğru parçası</strong>; S3’te uç noktası olmayan şekil → <strong>doğru</strong>; S4’te A’dan başlayıp B’den geçen ışın → <strong>[AB</strong>.</p>
        <p><strong>Seviye 2 (akıl yürütme):</strong> S1’de kaç doğru parçası var → <strong>3</strong> ([AB], [BC], [AC]; yaygın hatalar: 2, [AC]’yi unutuyor; 6, [AB]/[BA]’yı iki kez sayıyor); S2’de [AB ve [BA aynı mı → <strong>Hayır, başlangıç noktaları ve yönleri farklıdır</strong>; S3’te hangi şekil cetvelle ölçülebilir → <strong>[AB] doğru parçası</strong> (yalnızca bunun iki uç noktası ve uzunluğu vardır).</p>
        <p><em>Yanlış cevapta, not bölümünde tekrar anlatılması gereken kartın adı (Doğru Parçası ya da Işın ve Doğru) belirtilir.</em></p>
        <h4>13. Yeni nesil sorular (BİREYSEL ÇALIŞMA)</h4>
        <p>S1 sayın/doldurun → <strong>1</strong>; ardından <strong>6</strong> ve <strong>6</strong>.</p>
        <p>S (aynı şekil grupları, tümünü seçin): <strong>[KL] ve [LK] aynı gruptadır</strong> VE <strong>KL ve LK aynı gruptadır</strong> (doğru parçasında ve doğru üzerinde harflerin sırası önemli değildir; [KL ve [LK ışınlarında ise önemlidir — bunlar tuzak seçeneklerdir).</p>
        <p>S (hangi uzunluk gösterimleri doğru olabilir, tümünü seçin): <strong>[GF]=40 m</strong> VE <strong>[PK]=30 m</strong> (yalnızca doğru parçalarının uzunluğu vardır; ışın ve doğru için yapılan uzunluk gösterimleri mümkün değildir). Bir giriş alanı → <strong>70</strong>.</p>
        <p>S (Sofya [AB]’yi uzatıyor): <strong>1. adım → [AB ışını · 2. adım → AB doğrusu</strong>.</p>
        <h4>15. Değerlendirme ve yansıtma (SINIFÇA)</h4>
        <p>Bireysel çalışma sonuçlarındaki yaygın hataları tartışın, öz kontrol spoilerlarını ve duygu ölçeğini açın. <strong>Cevap:</strong> Yok.</p>
        <h4>16. Kapanış: hedef + ödev + sonraki ders (SINIFÇA)</h4>
        <p>Modül hedefi seçimi + ödev için motivasyon + sonraki derse kısa bakış. Her öğrenci bir hedef seçer ve bu hedefin kendisi için neden önemli olduğunu söyler. <strong>Cevap:</strong> Yok.</p>
        <h4>Yaygın Hataları Kontrol Etme (BONUS — 80 dakikaya dâhil değildir)</h4>
        <p>"Hatayı bulun" — bireysel çalışmadan hemen önce, temel hatalara karşı bir önlem. Her Notta doğru seçenek ORTADAKİ seçenektir (hatayı belirtir ve doğru hâlini verir). Bunu sınıfça yapın, puanlamayın. Süre kısıtlıysa atlayın.</p>
        <h4>Ek görev (BONUS — 80 dakikaya dâhil değildir)</h4>
        <p>Yalnızca süre kalırsa yapılacak ek görev.</p>
        <h4>Ödev 1 (zorunlu + bonus)</h4>
        <p><strong>Zorunlu bölüm (S1-3, ~5 dakika):</strong> 1) [AB]; 2) ışın; 3) 5. <strong>Bonus:</strong> 4) [AB; 5) ışın; 6) Doğru; 7) doğru.</p>`)}
      <p><strong>Dersin kapanışı:</strong> Kapanış kartında bireysel çalışma sonuçlarındaki yaygın hataları tartışın ve öz değerlendirme ile duygu durumunu konuşarak dersi bitirin. Kapanış kartında her öğrencinin bir modül hedefi seçmesini sağlayın; onlara ödevi (zorunlu bölüm ~5 dakika) ve sonraki dersi hatırlatın.</p>
      <p><strong>Sonraki ders:</strong> Açılar, dik doğrular ve paralel doğrular.</p>
      <h3>HER SLAYTTAKİ TÜM EĞİTMEN NOTLARINI MUTLAKA İNCELEYİN.</h3>`) +
    `</div>`
  },

  /* ---------- 2 ---------- */
  { title:`1. derse hoş geldiniz`, html:
    pic(P.officeBanner, `Sofya ve Rafi mimarlık bürosunda`) +
    card('blue', `<h1>Mimarlık Bürosuna hoş geldiniz! 🏛️</h1>`) +
    media(P.officeA, `<p><em>"Hoş geldiniz! Bu hafta büro, yeni bir okul parkı tasarlıyor ve öğrencilerin fikirlerini almaya karar verdi! Ama bu odadan hiçbir plan, bir şey olmadan çıkmaz: Kesin ve net bir geometri dili."</em></p>`, 'narrow') +
    media(P.officeB, `<p><em>"Planları açmadan önce, ekibin bugün hangi modda olduğunu görelim. Sizinkini seçin — yanlış cevap yok!"</em></p>`, 'narrow right') +
    quiz('l1-mood', `Modunuzu seçin`, [`🚀 Turbo — enerji doluyum!`, `⭐ Parlak — çalışmaya hazırım`, `🌙 Güç tasarrufu — yavaş yavaş açılıyorum`, `☄️ Biraz kıvılcımlı — bugün zor geçiyor`, `🛸 Gözlemliyorum — henüz emin değilim`], [0, 1, 2, 3, 4]) +
    pic(P.officeEnd, `Açıklama`) +
    `<div id="tn-c2">` +
    tnSpoiler(`Eğitmen notları ✅`, `
      <p>👩‍🏫 <strong>SINIFÇA · puan yok.</strong> <strong>Süre:</strong> 5 dakika.</p>
      <p><strong>Yöntem:</strong> rolleri (Sofya — ekip lideri, Rafi — çizim) ve hikâyeyi belirleyin. Isınma amaçlı dokunma etkinliği; iki cevap da doğrudur.</p>
      <p><strong>duygu durumu · puan yok.</strong></p>
      <p><strong>Format:</strong> Ruh hâli puanlanmaz, tüm seçenekler doğrudur (tek tıklama). Grup: Gönüllüler ruh hâllerini sohbette ya da sesli olarak söyler; kimseyi bekletmeyin.</p>`) +
    `</div>`
  },

  /* ---------- 3 ---------- */
  { title:`Kurallar ve görev`, html:
    card('blue', `<h1>Bugün nasıl çalışacağız? 🤝</h1>`) +
    media(P.rulesImg, `<p><em>"Bugün iki tür kart var: Bazılarını birlikte inceleyeceğiz, bazılarını ise siz kendi başınıza hazırlayacaksınız."</em></p>`, 'narrow') +
    card('blue', `<p>👩‍🏫 <strong>Birlikte incelenecek kartların</strong> başlığı mavi arka planlıdır. İzleyin, tartışın ve cevaplarınızı sesli söyleyin.</p>`, true) +
    card('green', `<p>✍️ <strong>Kendi başınıza yapacağınız kartların</strong> başlığı yeşil arka planlıdır. Anlayışınızı ve ilerlemenizi takip etmek, profil sayfanızı güncellemek için puan kazanırsınız.</p>`, true) +
    `<hr><h3>🎯 Bugün yapacaklarınız</h3>` +
    ul([`📍 nokta, doğru parçası, ışın ve doğruyu tanımak;`, `✏️ bunları doğru yazmayı ve okumayı öğrenmek;`, `🏗️ okul parkının gerçek bölümlerini taslak olarak çizmek.`]) +
    pic(P.rulesEnd, `Açıklama`) +
    tnSpoiler(`Eğitmen notları ✅`, `
      <p>👩‍🏫 <strong>TÜM SINIFLA · puan yok.</strong> <strong>Süre:</strong> 4 dk.</p>
      <p><strong>Başlangıç yönlendirmesi (ilk ders — devamlılık için kritik):</strong> Her öğrencinin derse katıldığından, arayüzü gördüğünden ve bireysel çalışma sürecini anladığından emin olun. İki kart türünü sesli olarak söyleyin.</p>`)
  },

  /* ---------- 4 ---------- */
  { title:`Mimarın araç çantası`, html:
    pic(P.toolsBanner, `Mimarın araç çantası`) +
    card('blue', `<h1>Tasarımcının araç çantasını açın 🧰</h1>`) +
    media(P.toolsImg, `<p><em>"Her mimarın çizime başlamadan önce doğru araçlara ihtiyacı vardır. Bakalım çantamızda neler var."</em></p>`, 'narrow') +
    `<h3>Her aracı göreviyle eşleştirin</h3>` +
    group([[`📏 Cetvel`, `düz doğru parçaları ve doğrular çizer`], [`🧭 Pergel`, `çemberler çizer`], [`📐 Gönye`, `dik açıları kontrol eder`]]) +
    pic(P.toolsEnd, `Açıklama`) +
    tnSpoiler(`Eğitmen notları ✅`, `
      <p>👩‍🏫 <strong>TÜM SINIFLA · puan yok.</strong> <strong>Süre:</strong> 3 dk.</p>
      <p><strong>Yöntem:</strong> eşleştirmeyi birlikte yapın, puanlama yapmayın. Pergel ve gönye, ilerideki dersler için önceden tanıtılır.</p>`)
  },

  /* ---------- 5 ---------- */
  { title:`Nokta nedir?`, html:
    card('blue', `<h1>Nokta nedir? 📍</h1>`) +
    `<p>Geometrik çizimin en küçük ögesiyle başlayalım. Kalem kâğıda yalnızca bir kez dokunduğunda ne olduğuna bakın.</p>` +
    pic(P.pointGif, `Açıklama`, '50%') +
    `<h2>Böyle işaretlerle nerelerde karşılaşırız? 🔍</h2>
     <p>Günlük hayatta buna benzer, minicik dokunma izleri olan noktaları nerelerde gördünüz? Bir ya da birkaç örnek yazın.</p>` +
    spoiler(`İpucu ister misiniz?`, `<p>Tek bir kesin yeri gösteren çok küçük işaretleri veya nesneleri düşünün.</p>`) +
    `<h2>Üç soruyu cevaplayın:</h2>` +
    quiz('geometry-l1-card07-point-length', `Bir noktanın uzunluğu var mıdır?`, [`Evet`, `Hayır`], [1]) +
    quiz('geometry-l1-card07-point-width', `Bir noktanın genişliği var mıdır?`, [`Evet`, `Hayır`], [1]) +
    quiz('geometry-l1-card07-point-thickness', `Bir noktanın kalınlığı var mıdır?`, [`Evet`, `Hayır`], [1]) +
    `<div class="example"><h3>🎓 Önemli bilgi:</h3><p><strong>Bir noktanın uzunluğu, genişliği ve derinliği yoktur.</strong></p><p>Kalemin kâğıda ya da tahtaya tek bir dokunuşu, bir noktanın modelidir (örneğidir).</p><img src="${P.pointModelGif}" alt="Açıklama"></div>
     <h2>Nokta nasıl gösterilir?</h2>` +
    media(P.pointA, `<p><strong>Geometrik çizim:</strong> A harfiyle adlandırılmış bir nokta.</p><p><strong>Sembol:</strong> A</p><p><strong>Okunuşu:</strong> A noktası.</p>`, 'narrow') +
    pic(P.sofyaPlan, `Sofya, büyütülmüş park planını inceliyor.`) +
    `<h2>Gerçek bir nokta modeli bulun. 👀</h2>
     <p>Hangi görsel gerçekten bir noktanın modeli olabilir? Bir seçenek seçin.</p>` +
    testImg(`Hangi görsel bir noktanın modeli olabilir?`, [P.opt1, P.opt2, P.opt3, P.opt4]) +
    `<blockquote><p>Açıklama: Küçük bir dairenin iç bölgesi vardır, çubuğun uzunluğu vardır ve artı (çarpı) işareti kesişen doğrulardan oluşur. Bu yüzden bunların hiçbiri geometrik nokta değildir.</p></blockquote>` +
    tnSpoiler(`Eğitmen notları ✅`, `
      <p>👩‍🏫 <strong>TÜM SINIFLA · puan yok.</strong> <strong>Süre:</strong> 5 dk.</p>
      <p><strong>5 numaralı hataya odaklanır</strong> (noktanın boyutu yoktur). Kontrolü sınıfça yanıtlayın, puanlamayın.</p>
      <p><strong>Etkinlik Hedefi:</strong> öğrencilerin, noktanın tam bir yeri gösteren ve boyutları olmayan bir geometrik nesne olduğunu kavramalarını sağlamak.</p>
      <p><strong>Eğitmen ne yapmalı:</strong> Önce kalemin dokunduğu yeri gösteren animasyonu açın ve A harfinin belirmesine dikkat çekin. Ardından öğrencilere, dokunma izlerine örnek vermeleri ve noktanın özellikleriyle ilgili üç soruyu yanıtlamaları için zaman tanıyın.</p>
      <p><strong>Dokunma izi örnekleri:</strong> iğne deliği, camdaki su damlası, uzaktaki yıldız, ekrandaki piksel, çivi deliği, sivrisinek ısırığı izi.</p>
      <p><strong>Dikkat edilmesi gereken noktalar:</strong> Bir sorunun bağlamında yalnızca konumlar önemliyse öğrenciler büyük, gerçek nesneleri de nokta modeli olarak adlandırabilir. Örneğin, haritadaki bir şehir veya plandaki bir ağaç noktayla gösterilebilir.</p>`)
  },

  /* ---------- 6 ---------- */
  { title:`Doğru parçası (teori)`, html:
    pic(P.segBanner, `Park planındaki A ve B noktaları`) +
    card('blue', `<h1>İki noktayı birleştirelim — doğru parçası 📏</h1>`) +
    media(P.segImg, `<p><em>"İki önemli yer işaretlendi: A kapısı ve B çeşmesi. Bakalım aralarında ne oluşuyor!"</em></p><img src="${P.segGif}" alt="A ile B arasında oluşan doğru parçası">`, 'narrow') +
    `<div class="example"><h3>🎓 Doğru parçası</h3><p>A ve B sabit noktaları arasında, bu noktalar da dâhil olmak üzere bulunan tüm noktaların oluşturduğu kümedir. Belirli bir uzunluğu vardır. Köşeli parantezle gösterilir: [AB] veya [BA].</p></div>` +
    pic(P.segStrip, `Şerit olarak doğru parçası`, '80%') +
    pic(P.segEnd, `Açıklama`) +
    tnSpoiler(`Eğitmen notları ✅`, `
      <p>👩‍🏫 <strong>TÜM SINIFLA · puan yok.</strong> <strong>Süre:</strong> 4 dk.</p>
      <p><strong>1 ve 3 numaralı hatalara odaklanır.</strong> GIF’i gösterin; doğrunun noktaların ötesine uzanmadığını ve [AB]=[BA] olduğunu vurgulayın. Sıradaki aşama bireysel çalışmadır.</p>`)
  },

  /* ---------- 7 (graded) ---------- */
  { title:`✍️ Bir doğru parçası çizin (bireysel çalışma №1)`, html:
    card('green', `<h1>✍️ Sıra sizde: doğru parçası</h1>`) +
    `<p><strong>Şimdi tek başınıza çalışın.</strong> Üçünü de yapın, ardından sonucu öğretmeninize söyleyin.</p>` +
    media(P.drawImg, `<p><em>"İlk tek başına çizim göreviniz — bunu başarabilirsiniz!"</em></p>`, 'narrow') +
    `<h3>1. Çizin</h3>
     <h4>Verilen noktalardan geçen mümkün olduğunca çok doğru parçası çizin. Kaç doğru parçası elde ettiniz?</h4>
     <p>Fareyle cetveli tutun (gövdesinden sürükleyin, sağdaki daireden döndürün) ve üzerindeki bölmeli turuncu kenarı tam iki noktaya hizalayın. Bunu, aralarına gerçekten kalemle çizgi çekecekmişsiniz gibi yapın. Cetvel doğru yerleştiğinde yeşil renkle vurgulanır. Bu, fareyi bırakabileceğiniz anlamına gelir: Noktaların arasında hazır bir doğru parçası oluşur!</p>
     <p class="sim-note">Bu simülasyonda cetvel yerine: bir noktadan diğerine sürükle (ya da iki noktaya sırayla tıkla). Çizgi yeşile döndüğünde bırak.</p>` +
    segApp() +
    `<p>Kaç doğru parçası elde ettiniz?</p>` +
    inputEx('seg-count', '15') +
    spoiler(`💡 İpucu`, `<p>Bir doğru parçasının tam iki ucu vardır; noktaların ötesine devam etmez.</p>`) +
    `<h3>2. Sembolü yazın</h3>` +
    quiz('l1-seg-symbol', `"A ile B arasındaki doğru parçası" hangi sembolle gösterilir?`, [`AB`, `[AB]`, `[AB`], [1]) +
    spoiler(`💡 İpucu`, `<p>Doğru parçası, HER İKİ ucunda da köşeli parantez kullanılarak gösterilir.</p>`) +
    `<h3>3. Doğru mu, yanlış mı?</h3>` +
    quiz('l1-seg-tf', `[AB] ve [BA] iki farklı doğru parçasıdır.`, [`Doğru - Bunlar iki farklı nesnedir.`, `Yanlış — Aynı doğru parçasıdır.`], [1]) +
    scoreBox() +
    `<div id="tn-seg">` +
    tnSpoiler(`Eğitmen notları ✅`, `
      <p>✍️ <strong>BİREYSEL · değerlendirilen = 3 · otomatik kontrol.</strong> <strong>Süre:</strong> 7 dk.</p>
      <p><strong>Eski "herkesin 0 aldığı" çizim kartının yerine geçer.</strong> 1. soruda öğrencilerden mümkün olduğunca çok doğru parçası çizmelerini isteyin. Kaç doğru parçası elde ettiğinizi göstermeniz gerekirse ekran paylaşımını açın. Cevaplar: 1) 15; 2) [AB]; 3) Yanlış. Sınıfa "Tek başınıza çalışın, cevaplarınızı girin." deyin.</p>`) +
    `</div>`
  }
];

/* =========================================================
   GUIDED TOUR STEPS
   Translate title, text and btn. Keep target / accept / read / side / wide / next / last / scrollTo / checks as they are.
   ========================================================= */
CONTENT.guide = [
  { title: 'Classroom’a hoş geldin', next: true,
    text: '<b>Yeni Eğitim Modelinde (YEM)</b> dersi anlatmak için ihtiyacın olan her şey Classroom’da, <b>doğrudan dersin içinde</b> yer alır. Wiki ya da ayrı bir doküman yok: Her dersin rehberliği ders kartlarıyla birlikte gelir.<br><br>Bu rehberde gerçek bir dersin ilk kartlarını kullanacağız: <b>Matematik · Seviye 5, Ders 1</b>. Hadi kartları açalım.' },
  { title: 'Ders materyallerini aç', target: '.tb-group', accept: ['openTasks', 'toggleDropdown'],
    text: 'Ders materyalleri <b>Assignments</b> sekmesinde. <b>Assignments</b> düğmesine tıkla — fareyi üzerine getirdiğinde maviye döner.' },
  { title: 'İlk kartı seç', target: '#dd-0', accept: ['pickActivity:0'],
    text: 'Bu liste, dersin <b>görevlerinin</b> (assignments) sırasıyla listesi. Matematik Maceraları serisinin ilk dersindeyiz: Sofya ve Rafi’nin mimarlık ekibi bir <b>okul parkı</b> tasarlıyor.<br><br>İlk sıradakine tıkla: <b>«Matematik Maceralarına Hoş Geldiniz!»</b>.' },
  { title: 'Aynı kartın iki görünümü', next: true, wide: true,
    text: 'Devam etmeden önce <b>senin ne gördüğünü</b> ve <b>Elif’in ne gördüğünü</b> anlaman önemli. İkiniz de aynı karttasınız ama aynı ekranda değilsiniz:' +
      `<div class="views">
        <div class="view"><div class="vh">👩‍🏫 <b>Senin</b> gördüğün</div>
          <div class="mock"><div class="mk-c">Kart içeriği</div><div class="m-tn">Eğitmen notları ✅<small>yalnızca sen görürsün</small></div></div></div>
        <div class="view"><div class="vh">👧 <b>Elif’in</b> gördüğü</div>
          <div class="mock"><div class="mk-c">Kart içeriği</div></div></div>
      </div>` +
      '<ul class="c-list"><li>Bu derste <b>Teacher notes</b>, her kartın en altındaki <b>«Eğitmen notları ✅»</b> açılır bölümünün içindedir. İlk kartta bir de <b>«Eğitmen kartı ❗»</b> vardır: dersin tam brifingi.</li><li><b>Turuncu kesikli çerçeveli</b> Teacher notes alanını yalnızca eğitmen görür. Elif bunu <b>asla</b> göremez — sadece kart içeriğini görür. Notları ona sesli okuma.</li><li>Her kartın kendi notları vardır; her karttan önce ve kart sırasında ilk bakacağın yer burası.</li></ul>' },
  { title: 'Elif’in gördüğü kısım', target: '#taskScroll', side: true, read: {},
    text: 'Kartın büyük bölümü Elif’in gördüğü içeriktir: Afiş, Sofya ve Rafi ile tanışma, bağlantı kontrolü (bir test) ve park için ilk fikir (bir açılır liste).<br><br>Başlığı <b>mavi</b>: Bu kart <b>tüm sınıfla</b> birlikte işlenir ve puanlanmaz.<br><br><b>Tüm kartı</b> sonuna kadar kaydır. En altta yalnızca senin gördüğün iki açılır bölüm var.' },
  { title: 'Eğitmen notları ve Eğitmen kartı', target: '#taskScroll', side: true, read: { scope: '#tn-first' }, scrollTo: 'tn-first',
    text: '<b>«Eğitmen notları ✅»</b> bu kartın kısa notlarıdır: süre, hedef, nasıl uygulanacağı ve bir sonraki adıma geçiş cümlesi.<br><br><b>«Eğitmen kartı ❗»</b> dersin en ayrıntılı notlarıdır: Hikâye, ana hedef ve temel kazanım, <b>açıklayıcı video</b>, <b>iki kart türü</b> (teori / bireysel çalışma), 80 dakikalık <b>süre planı</b>, <b>4 yaygın hata</b>, her kart için <b>hızlı cevap anahtarı</b> ve kapanış.<br><br>Videoyu derse hazırlanırken izle.<br><br>Devam etmek için <b>her bölümü aç</b> ve <b>notların sonuna kadar kaydır</b>.' },
  { title: 'Lead the group özelliğini aç', target: '#leadToggle', accept: ['toggleLead'],
    text: 'Şimdi <b>Lead the group</b> anahtarını aç. Bu anahtar yalnızca sende var — öğrencilerde yok.' +
      `<div class="lead-demo">
        <div><span class="ld-sw"></span><b>KAPALI</b> — Sen başka bir karta geçsen ya da kaydırsan bile Elif olduğu yerde kalır. Başka bir şeye bakıyor olabilir.</div>
        <div><span class="ld-sw on"></span><b>AÇIK</b> — Açtığın her kartı ve yaptığın her kaydırmayı Elif de aynı anda görür.</div>
      </div>` +
      'Anahtara tıkla — açıkken maviye döner.' },
  { title: 'Elif seni takip ediyor', target: '.vt.student', next: true,
    text: '<b>Lead the group</b> açık ✅ Elif’in görüntüsüne bak: Artık <b>Eğitmen takip ediliyor</b> yazıyor.<br><br>Şu andan itibaren:<ul class="c-list"><li>Elif seninle <b>aynı kartı</b> açık tutar ve aynı kaydırma konumunu görür (Teacher notes olmadan).</li><li>Kendi başına incelemek için <b>Work independently</b> düğmesine tıklayabilir. O zaman nerede olduğunu gösteren bir afiş ve <b>Return</b> düğmesi görür.</li></ul>' },
  { title: 'Sonraki kart', target: '#btnNext', accept: ['nextTask'],
    text: 'Sağa bakan ok seni <b>sonraki karta</b> götürür. Lead the group açık olduğu için Elif de seninle birlikte geçer. Tıkla.' },
  { title: 'Her karttaki notlar', target: '#taskScroll', side: true, read: { scope: '#tn-c2' },
    text: 'Bu kart ekibi mimarlık bürosunda karşılar ve kısa bir ruh hâli seçimi içerir (tüm cevaplar doğru, puan yok).<br><br>En altta kartın kendi <b>«Eğitmen notları ✅»</b> bölümü var. İlk karttakinden çok daha kısadır ve genellikle şöyle başlar: <b>kart türü</b> (👩‍🏫 TÜM SINIFLA ya da ✍️ BİREYSEL), <b>puan</b> ve <b>süre</b>. Ardından yöntem gelir.<br><br>Bölümü aç ve sonuna kadar oku.' },
  { title: 'Devam et', target: '#btnNext', accept: ['nextTask'],
    text: 'Sonraki karta geçmek için <b>Sonraki görev</b> düğmesine tıkla.' },
  { title: 'İki tür kart', target: '#taskScroll', side: true, read: {},
    text: 'Bu kart öğrencilere dersin nasıl işleyeceğini anlatır:<ul class="c-list"><li>👩‍🏫 <b>Mavi başlıklı kartlar</b> birlikte işlenir: izlenir, tartışılır, cevaplar sesli söylenir. Puan yok.</li><li>✍️ <b>Yeşil başlıklı kartlar</b> öğrencinin <b>tek başına</b> yaptığı <b>bireysel çalışmalardır</b>: otomatik kontrol edilir ve puan verir.</li></ul>İlk derste bu iki türü sesli olarak açıkla. Kartın sonuna kadar kaydır.' },
  { title: 'Kart listesini aç', target: '#btnList', accept: ['toggleDropdown'],
    text: 'Şimdi ilk yeşil karta, yani ilk <b>bireysel çalışmaya</b> geçelim. Kartları tek tek geçmek zorunda değilsin: Listeden istediğin karta gidebilirsin.<br><br><b>Assignments</b> düğmesinin yanındaki <b>liste simgesine</b> tıkla.' },
  { title: 'Bireysel çalışma kartını seç', target: '#dd-6', accept: ['pickActivity:6'],
    text: '<b>«✍️ Bir doğru parçası çizin (bireysel çalışma №1)»</b> kartına tıkla. Lead the group açık: Elif de bu karta geçer.' },
  { title: 'Otomatik değerlendirilen etkinlikler', target: '#taskScroll', side: true, read: {}, checks: ['seg', 'answer'],
    text: 'Bu bir <b>değerlendirilen kart</b> (yeşil başlık). İçindeki etkinlik, park planındaki noktalar arasında <b>doğru parçası çizme</b> aracıdır; cevaplar <b>otomatik kontrol edilir</b> ve kart <b>3 puan</b> verir.<br><br><b>Önemli:</b> Değerlendirilen kartları <b>her öğrenci kendi kopyasında</b>, tek başına tamamlar. Sistem cevapları <b>otomatik</b> kontrol eder ve puanı o öğrenciye yazar. Kart yalnızca <b>senin ekranında</b> çözülürse Elif’in puanı <b>0</b> olur. Ekranını en fazla sonucu göstermek için paylaş; cevapları herkes kendi kopyasına girer.<br><br>Etkinliği dene: Bir doğru parçası çiz, bir cevap gir ve kontrol et. Sonra kartın sonuna kadar kaydır.' },
  { title: 'Değerlendirilen kartın notları', target: '#taskScroll', side: true, read: { scope: '#tn-seg' }, last: true, btn: 'Tamamla ✓',
    text: 'Değerlendirilen kartların notları <b>✍️ BİREYSEL · değerlendirilen · otomatik kontrol</b> ile başlar ve cevapları verir (burada: 15, [AB], Yanlış).<br><br>Bu kartlarda:<ul class="c-list"><li>İlk denemeden önce <b>ipucu verme</b>, cevabı söyleme.</li><li>Öğrenci yanılırsa onu ilgili <b>teori kartına</b> yönlendir (burada: «Doğru parçası (teori)»).</li><li>Herkesin cevabını <b>kendi kopyasına</b> girdiğinden emin ol.</li></ul>Bölümü aç ve sonuna kadar oku. YEM ders formatı hakkında bilmen gerekenler bu kadar!' }
];

/* =========================================================
   FINISH SCREEN (the page tells the training that the simulation is complete)
   ========================================================= */
CONTENT.finish = {
  kicker: 'Rehber tamamlandı',
  title: '🎓 Classroom’da bir YEM dersi böyle görünür',
  intro: 'Yeni eğitim modelindeki bir dersin Classroom’da nasıl göründüğünü ve grubu nasıl yöneteceğini gördün:',
  steps: [
    'Ders, <b>Assignments</b> sekmesindeki bir dizi <b>karttan</b> oluşur: Tüm rehberlik dersin içindedir.',
    '<b>Teacher notes</b> her kartın sonundaki «Eğitmen notları ✅» bölümündedir ve bunları yalnızca <b>sen</b> görürsün. Öğrenciler asla göremez.',
    'İlk karttaki <b>«Eğitmen kartı ❗»</b> en ayrıntılı notlardır: hedefler, iki kart türü, süre planı, yaygın hatalar, her kart için cevap anahtarı ve açıklayıcı video.',
    '<b>Lead the group</b>, öğrencilerin açtığın kartı ve kaydırdığın yeri takip etmesini sağlar.',
    '✍️ <b>Değerlendirilen kartları</b> her öğrenci kendi kopyasında tek başına çözer ve otomatik kontrol edilir. Yalnızca senin ekranında çözülen kart öğrenciye 0 puan getirir.'
  ],
  tip: '<b>İpucu:</b> Dersi anlatmadan <b>önce</b> tüm dersin Teacher notes bölümlerini oku ve Eğitmen kartındaki videoyu izle.',
  doneLabel: '✅ Simülasyon tamamlandı',
  doneHint: 'Eğitim sayfasına bildirildi: Oradan devam edebilirsin. İstersen Classroom’u serbestçe keşfetmeye devam et.',
  again: '↺ Baştan başla',
  explore: 'Classroom’u keşfet'
};
