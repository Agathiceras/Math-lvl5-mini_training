/* =====================================================================
   START SURVEY — mandatory check-in pop-up of the Part 2 course trainings
   Loaded right after ../shared/course-engine.js in each course page. It does NOT touch the engine:
   it only reads window.COURSE (lang, id, dir) once the page is ready.
   - Shown when the training opens; the training can't be used until the survey is sent.
   - Sent once per browser and training (key kl-start-survey-<COURSE.id>, kept in memory + localStorage + sessionStorage).
   - Same questions, ids and translations as the Module 0 survey of the EM core training
     (New training EM/assets/module0.js + module0-<lang>.js). Question ids/keys are NOT translated:
     they are what arrives in the Google Sheet.
   - ?dev=1 in the URL shows a "Skip (dev)" link (closes without sending).
   ===================================================================== */
(function(){
  'use strict';
  /* ---------- CONFIG ----------
     ONE Google Sheet for the start survey of ALL the course trainings (its own Apps Script Web App).
     Empty = answers are not sent anywhere: the payload is logged (console.warn), kept in storage and the pop-up closes. */
  const SURVEY_URL = 'https://script.google.com/macros/s/AKfycbyz59venGaOX2Vh-XcC67yHGAOTv4VoUZIMEXjo1tC5uQGt8fkSJR4ieuwUJbIU5gXpcQ/exec';  // paste the Web App URL of the "Start survey" Google Sheet here
  // Region preselected from the language (the tutor can change it). en and ar are used by several regions: no default.
  var REGION_BY_LANG = { es:'latam', pt:'brazil', it:'italy', pl:'poland', ru:'cis', tr:'mena', id:'indonesia', 'en-US':'usa' };
  var QUESTIONS = [
    { id:'feeling', type:'choice' },
    { id:'confidence', type:'scale' },
    { id:'understand_why', type:'scale' },
    { id:'know_where', type:'scale' },
    { id:'worries', type:'open', optional:true }
  ];
  // The GIF lives in shared/images, next to this script: computed from the script's own src so it works
  // locally (../shared/) and on GitHub (shared/).
  var SCRIPT_SRC = (document.currentScript && document.currentScript.src) || '';
  var GIF = SCRIPT_SRC ? SCRIPT_SRC.replace(/[^\/]*$/, '') + 'images/how-do-you-feel-matty-matheson.gif' : '';

  /* ---------- texts (from module0-<lang>.js; title/intro adapted to "before you start the training") ---------- */
  var T = {
    en: {
      title: "Before you start: how do you feel?",
      intro: "A short check-in — there are no right or wrong answers. It helps your mentor and the team support you better. Send it to open the training.",
      gifAlt: "How do you feel?",
      s: {
        emailLabel: "Your Kodland corporate e-mail",
        emailPlaceholder: "name.surname@kodland.org",
        emailError: "Please write your Kodland corporate e-mail (it ends in @kodland…).",
        regionLabel: "Your region",
        regionPlaceholder: "Choose your region…",
        regionError: "Please choose your region.",
        missing: "Please answer every question marked with ★.",
        send: "Send my answers",
        sending: "Sending…",
        thanks: "✅ <b>Thank you!</b> Your answers have been sent.",
        low: "Not at all",
        high: "Completely",
        optional: "optional",
        openPlaceholder: "Write anything you like…"
      },
      q: {
        feeling: "How do you feel about this new launch right now?",
        confidence: "How confident do you feel about teaching this new course or format?",
        understand_why: "I understand why we are making this change.",
        know_where: "I know where to find what I need and who to ask for help.",
        worries: "What worries you most about this launch?"
      },
      feelings: [["excited", "🤩 Excited"], ["curious", "🤔 Curious"], ["calm", "😌 Calm"], ["unsure", "😕 Unsure"], ["worried", "😟 Worried"], ["overwhelmed", "😵 Overwhelmed"]],
      regions: [["brazil", "Brazil"], ["latam", "LATAM (incl. Spain)"], ["mena", "MENA"], ["italy", "Italy"], ["poland", "Poland"], ["uk", "UK"], ["usa", "USA"], ["indonesia", "Indonesia"], ["gcc", "GCC"], ["cis", "CIS"]]
    },
    es: {
      title: "Antes de empezar: ¿cómo te sientes?",
      intro: "Un breve chequeo: no hay respuestas correctas ni incorrectas. Ayuda a tu mentor y al equipo a apoyarte mejor. Envíalo para abrir la formación.",
      gifAlt: "¿Cómo te sientes?",
      s: {
        emailLabel: "Tu correo corporativo de Kodland",
        emailPlaceholder: "nombre.apellido@kodland.org",
        emailError: "Escribe tu correo corporativo de Kodland (termina en @kodland…).",
        regionLabel: "Tu región",
        regionPlaceholder: "Elige tu región…",
        regionError: "Elige tu región.",
        missing: "Responde todas las preguntas marcadas con ★.",
        send: "Enviar mis respuestas",
        sending: "Enviando…",
        thanks: "✅ <b>¡Gracias!</b> Tus respuestas se enviaron.",
        low: "Nada",
        high: "Totalmente",
        optional: "opcional",
        openPlaceholder: "Escribe lo que quieras…"
      },
      q: {
        feeling: "¿Cómo te sientes ahora mismo con este nuevo lanzamiento?",
        confidence: "¿Qué tan seguro te sientes para dar este nuevo curso o formato?",
        understand_why: "Entiendo por qué estamos haciendo este cambio.",
        know_where: "Sé dónde encontrar lo que necesito y a quién pedir ayuda.",
        worries: "¿Qué es lo que más te preocupa de este lanzamiento?"
      },
      feelings: [["excited", "🤩 Entusiasmado"], ["curious", "🤔 Con curiosidad"], ["calm", "😌 Tranquilo"], ["unsure", "😕 Inseguro"], ["worried", "😟 Preocupado"], ["overwhelmed", "😵 Abrumado"]],
      regions: [["brazil", "Brasil"], ["latam", "LATAM (incl. España)"], ["mena", "MENA"], ["italy", "Italia"], ["poland", "Polonia"], ["uk", "UK"], ["usa", "USA"], ["indonesia", "Indonesia"], ["gcc", "GCC"], ["cis", "CIS"]]
    },
    pt: {
      title: "Antes de começar: como você se sente?",
      intro: "Um check-in rápido — não há respostas certas ou erradas. Ele ajuda o seu mentor e a equipe a apoiar você melhor. Envie para abrir a formação.",
      gifAlt: "Como você se sente?",
      s: {
        emailLabel: "O seu e-mail corporativo da Kodland",
        emailPlaceholder: "nome.sobrenome@kodland.org",
        emailError: "Escreva o seu e-mail corporativo da Kodland (ele termina em @kodland…).",
        regionLabel: "A sua região",
        regionPlaceholder: "Escolha a sua região…",
        regionError: "Escolha a sua região.",
        missing: "Responda a todas as perguntas marcadas com ★.",
        send: "Enviar minhas respostas",
        sending: "Enviando…",
        thanks: "✅ <b>Obrigado!</b> As suas respostas foram enviadas.",
        low: "Nem um pouco",
        high: "Totalmente",
        optional: "opcional",
        openPlaceholder: "Escreva o que quiser…"
      },
      q: {
        feeling: "Como você se sente agora em relação a este novo lançamento?",
        confidence: "Quão seguro você se sente para dar este novo curso ou formato?",
        understand_why: "Eu entendo por que estamos fazendo esta mudança.",
        know_where: "Eu sei onde encontrar o que preciso e a quem pedir ajuda.",
        worries: "O que mais te preocupa neste lançamento?"
      },
      feelings: [["excited", "🤩 Animado"], ["curious", "🤔 Curioso"], ["calm", "😌 Tranquilo"], ["unsure", "😕 Inseguro"], ["worried", "😟 Preocupado"], ["overwhelmed", "😵 Sobrecarregado"]],
      regions: [["brazil", "Brasil"], ["latam", "LATAM (incl. Espanha)"], ["mena", "MENA"], ["italy", "Itália"], ["poland", "Polônia"], ["uk", "UK"], ["usa", "USA"], ["indonesia", "Indonésia"], ["gcc", "GCC"], ["cis", "CIS"]]
    },
    tr: {
      title: "Başlamadan önce: nasıl hissediyorsunuz?",
      intro: "Kısa bir durum değerlendirmesi — doğru ya da yanlış cevap yok. Mentörünüzün ve ekibin size daha iyi destek olmasına yardımcı olur. Eğitimi açmak için gönderin.",
      gifAlt: "Nasıl hissediyorsunuz?",
      s: {
        emailLabel: "Kodland kurumsal e-posta adresiniz",
        emailPlaceholder: "ad.soyad@kodland.org",
        emailError: "Lütfen Kodland kurumsal e-posta adresinizi yazın (@kodland… ile biter).",
        regionLabel: "Bölgeniz",
        regionPlaceholder: "Bölgenizi seçin…",
        regionError: "Lütfen bölgenizi seçin.",
        missing: "Lütfen ★ ile işaretlenmiş tüm soruları yanıtlayın.",
        send: "Yanıtlarımı gönder",
        sending: "Gönderiliyor…",
        thanks: "✅ <b>Teşekkürler!</b> Yanıtlarınız gönderildi.",
        low: "Hiç",
        high: "Tamamen",
        optional: "isteğe bağlı",
        openPlaceholder: "İstediğinizi yazın…"
      },
      q: {
        feeling: "Şu anda bu yeni lansman hakkında nasıl hissediyorsunuz?",
        confidence: "Bu yeni kursu ya da formatı anlatma konusunda kendinize ne kadar güveniyorsunuz?",
        understand_why: "Bu değişikliği neden yaptığımızı anlıyorum.",
        know_where: "İhtiyacım olanı nerede bulacağımı ve kimden yardım isteyeceğimi biliyorum.",
        worries: "Bu lansmanla ilgili sizi en çok endişelendiren şey nedir?"
      },
      feelings: [["excited", "🤩 Heyecanlı"], ["curious", "🤔 Meraklı"], ["calm", "😌 Sakin"], ["unsure", "😕 Emin değilim"], ["worried", "😟 Endişeli"], ["overwhelmed", "😵 Bunalmış"]],
      regions: [["brazil", "Brezilya"], ["latam", "LATAM (İspanya dahil)"], ["mena", "MENA"], ["italy", "İtalya"], ["poland", "Polonya"], ["uk", "UK"], ["usa", "USA"], ["indonesia", "Endonezya"], ["gcc", "GCC"], ["cis", "CIS"]]
    },
    pl: {
      title: "Zanim zaczniesz: jak się czujesz?",
      intro: "Krótkie „jak się masz” — nie ma tu dobrych ani złych odpowiedzi. Pomaga to twojemu mentorowi i zespołowi lepiej cię wspierać. Wyślij ankietę, żeby otworzyć szkolenie.",
      gifAlt: "Jak się czujesz?",
      s: {
        emailLabel: "Twój służbowy e-mail Kodland",
        emailPlaceholder: "imie.nazwisko@kodland.org",
        emailError: "Wpisz swój służbowy e-mail Kodland (kończy się na @kodland…).",
        regionLabel: "Twój region",
        regionPlaceholder: "Wybierz swój region…",
        regionError: "Wybierz swój region.",
        missing: "Odpowiedz na każde pytanie oznaczone ★.",
        send: "Wyślij moje odpowiedzi",
        sending: "Wysyłanie…",
        thanks: "✅ <b>Dziękujemy!</b> Twoje odpowiedzi zostały wysłane.",
        low: "Wcale",
        high: "Całkowicie",
        optional: "opcjonalnie",
        openPlaceholder: "Napisz, co chcesz…"
      },
      q: {
        feeling: "Jak się teraz czujesz w związku z tym nowym startem?",
        confidence: "Jak pewnie czujesz się z prowadzeniem tego nowego kursu lub formatu?",
        understand_why: "Rozumiem, dlaczego wprowadzamy tę zmianę.",
        know_where: "Wiem, gdzie znaleźć to, czego potrzebuję, i kogo poprosić o pomoc.",
        worries: "Co najbardziej niepokoi cię w związku z tym startem?"
      },
      feelings: [["excited", "🤩 Podekscytowany/a"], ["curious", "🤔 Zaciekawiony/a"], ["calm", "😌 Spokojny/a"], ["unsure", "😕 Niepewny/a"], ["worried", "😟 Zaniepokojony/a"], ["overwhelmed", "😵 Przytłoczony/a"]],
      regions: [["brazil", "Brazylia"], ["latam", "LATAM (z Hiszpanią)"], ["mena", "MENA"], ["italy", "Włochy"], ["poland", "Polska"], ["uk", "UK"], ["usa", "USA"], ["indonesia", "Indonezja"], ["gcc", "GCC"], ["cis", "CIS"]]
    },
    ru: {
      title: "Перед началом: как вы себя чувствуете?",
      intro: "Короткий опрос — правильных и неправильных ответов здесь нет. Он помогает вашему ментору и команде лучше вас поддерживать. Отправьте его, чтобы открыть обучение.",
      gifAlt: "Как вы себя чувствуете?",
      s: {
        emailLabel: "Ваш корпоративный e-mail Kodland",
        emailPlaceholder: "imya.familiya@kodland.org",
        emailError: "Пожалуйста, укажите свой корпоративный e-mail Kodland (он заканчивается на @kodland…).",
        regionLabel: "Ваш регион",
        regionPlaceholder: "Выберите свой регион…",
        regionError: "Пожалуйста, выберите свой регион.",
        missing: "Пожалуйста, ответьте на все вопросы, отмеченные ★.",
        send: "Отправить ответы",
        sending: "Отправка…",
        thanks: "✅ <b>Спасибо!</b> Ваши ответы отправлены.",
        low: "Совсем нет",
        high: "Полностью",
        optional: "необязательно",
        openPlaceholder: "Напишите всё, что хотите…"
      },
      q: {
        feeling: "Что вы чувствуете по поводу этого нового запуска прямо сейчас?",
        confidence: "Насколько уверенно вы себя чувствуете, думая о том, чтобы вести этот новый курс или формат?",
        understand_why: "Я понимаю, зачем мы вносим это изменение.",
        know_where: "Я знаю, где найти всё необходимое и к кому обратиться за помощью.",
        worries: "Что вас больше всего беспокоит в этом запуске?"
      },
      feelings: [["excited", "🤩 Воодушевление"], ["curious", "🤔 Любопытство"], ["calm", "😌 Спокойствие"], ["unsure", "😕 Неуверенность"], ["worried", "😟 Тревога"], ["overwhelmed", "😵 Перегруженность"]],
      regions: [["brazil", "Бразилия"], ["latam", "LATAM (вкл. Испанию)"], ["mena", "MENA"], ["italy", "Италия"], ["poland", "Польша"], ["uk", "UK"], ["usa", "USA"], ["indonesia", "Индонезия"], ["gcc", "GCC"], ["cis", "СНГ"]]
    },
    it: {
      title: "Prima di iniziare: come ti senti?",
      intro: "Un breve questionario per fare il punto: non ci sono risposte giuste o sbagliate. Le tue risposte aiutano il tuo mentor e il team a sostenerti meglio. Invia il questionario per aprire la formazione.",
      gifAlt: "Come ti senti?",
      s: {
        emailLabel: "La tua e-mail aziendale Kodland",
        emailPlaceholder: "nome.cognome@kodland.org",
        emailError: "Inserisci il tuo indirizzo e-mail aziendale Kodland (ad esempio nome.cognome@kodland.org).",
        regionLabel: "La tua regione",
        regionPlaceholder: "Scegli la tua regione…",
        regionError: "Scegli la tua regione.",
        missing: "Rispondi a tutte le domande contrassegnate con ★.",
        send: "Invia le mie risposte",
        sending: "Invio in corso…",
        thanks: "✅ <b>Grazie!</b> Le tue risposte sono state inviate.",
        low: "Per niente",
        high: "Completamente",
        optional: "facoltativa",
        openPlaceholder: "Scrivi quello che vuoi…"
      },
      q: {
        feeling: "Come ti senti in questo momento rispetto a questo nuovo lancio?",
        confidence: "Quanto ti senti sicuro nell’insegnare questo nuovo corso o formato?",
        understand_why: "Capisco perché stiamo facendo questo cambiamento.",
        know_where: "So dove trovare ciò che mi serve e a chi chiedere aiuto.",
        worries: "Che cosa ti preoccupa di più di questo lancio?"
      },
      feelings: [["excited", "🤩 Entusiasta"], ["curious", "🤔 Curioso"], ["calm", "😌 Tranquillo"], ["unsure", "😕 Incerto"], ["worried", "😟 Preoccupato"], ["overwhelmed", "😵 Sopraffatto"]],
      regions: [["brazil", "Brasile"], ["latam", "LATAM (Spagna inclusa)"], ["mena", "MENA"], ["italy", "Italia"], ["poland", "Polonia"], ["uk", "UK"], ["usa", "USA"], ["indonesia", "Indonesia"], ["gcc", "GCC"], ["cis", "CIS"]]
    },
    ar: {
      title: "قبل أن تبدأ: كيف تشعر؟",
      intro: "وقفة قصيرة للاطمئنان — لا توجد إجابات صحيحة أو خاطئة. فهي تساعد مرشدك والفريق على مساندتك بشكل أفضل. أرسلها لفتح التدريب.",
      gifAlt: "كيف تشعر؟",
      s: {
        emailLabel: "بريدك الإلكتروني المؤسسي في Kodland",
        emailPlaceholder: "name.surname@kodland.org",
        emailError: "يُرجى كتابة بريدك الإلكتروني المؤسسي في Kodland (ينتهي بـ ‎@kodland…).",
        regionLabel: "منطقتك",
        regionPlaceholder: "اختر منطقتك…",
        regionError: "يُرجى اختيار منطقتك.",
        missing: "يُرجى الإجابة عن كل سؤال عليه علامة ★.",
        send: "أرسل إجاباتي",
        sending: "جارٍ الإرسال…",
        thanks: "✅ <b>شكرًا لك!</b> تمّ إرسال إجاباتك.",
        low: "إطلاقًا",
        high: "تمامًا",
        optional: "اختياري",
        openPlaceholder: "اكتب ما تشاء…"
      },
      q: {
        feeling: "كيف تشعر تجاه هذا الإطلاق الجديد الآن؟",
        confidence: "ما مدى ثقتك في تدريس هذه الدورة أو الصيغة الجديدة؟",
        understand_why: "أفهم لماذا نُجري هذا التغيير.",
        know_where: "أعرف أين أجد ما أحتاجه ومن أسأل للحصول على المساعدة.",
        worries: "ما أكثر ما يقلقك بشأن هذا الإطلاق؟"
      },
      feelings: [["excited", "🤩 متحمّس"], ["curious", "🤔 فضولي"], ["calm", "😌 هادئ"], ["unsure", "😕 متردّد"], ["worried", "😟 قلق"], ["overwhelmed", "😵 مُثقَل"]],
      regions: [["brazil", "البرازيل"], ["latam", "LATAM (بما فيها إسبانيا)"], ["mena", "MENA"], ["italy", "إيطاليا"], ["poland", "بولندا"], ["uk", "UK"], ["usa", "USA"], ["indonesia", "إندونيسيا"], ["gcc", "GCC"], ["cis", "CIS"]]
    },
    id: {
      title: "Sebelum mulai: bagaimana perasaan Anda?",
      intro: "Check-in singkat — tidak ada jawaban yang benar atau salah. Ini membantu mentor Anda dan tim untuk mendukung Anda dengan lebih baik. Kirimkan untuk membuka pelatihan.",
      gifAlt: "Bagaimana perasaan Anda?",
      s: {
        emailLabel: "E-mail korporat Kodland Anda",
        emailPlaceholder: "nama.belakang@kodland.org",
        emailError: "Silakan tulis e-mail korporat Kodland Anda (berakhiran @kodland…).",
        regionLabel: "Wilayah Anda",
        regionPlaceholder: "Pilih wilayah Anda…",
        regionError: "Silakan pilih wilayah Anda.",
        missing: "Silakan jawab setiap pertanyaan yang bertanda ★.",
        send: "Kirim jawaban saya",
        sending: "Mengirim…",
        thanks: "✅ <b>Terima kasih!</b> Jawaban Anda sudah terkirim.",
        low: "Sama sekali tidak",
        high: "Sepenuhnya",
        optional: "opsional",
        openPlaceholder: "Tulis apa saja…"
      },
      q: {
        feeling: "Bagaimana perasaan Anda tentang peluncuran baru ini saat ini?",
        confidence: "Seberapa percaya diri Anda untuk mengajar kursus atau format baru ini?",
        understand_why: "Saya memahami mengapa kita melakukan perubahan ini.",
        know_where: "Saya tahu di mana menemukan apa yang saya butuhkan dan kepada siapa meminta bantuan.",
        worries: "Apa yang paling Anda khawatirkan tentang peluncuran ini?"
      },
      feelings: [["excited", "🤩 Bersemangat"], ["curious", "🤔 Penasaran"], ["calm", "😌 Tenang"], ["unsure", "😕 Ragu"], ["worried", "😟 Khawatir"], ["overwhelmed", "😵 Kewalahan"]],
      regions: [["brazil", "Brasil"], ["latam", "LATAM (termasuk Spanyol)"], ["mena", "MENA"], ["italy", "Italia"], ["poland", "Polandia"], ["uk", "UK"], ["usa", "USA"], ["indonesia", "Indonesia"], ["gcc", "GCC"], ["cis", "CIS"]]
    }
  };

  /* ---------- helpers ---------- */
  // Safe storage (same pattern as the engine's STORE): memory + localStorage + sessionStorage, every access in try/catch.
  // Inside the LMS iframe, Safari and strict browsers can block or wipe storage; the memory copy keeps the visit working.
  const MEM = {};
  function areas(){ const a = []; try { a.push(window.localStorage); } catch(e){} try { a.push(window.sessionStorage); } catch(e){} return a; }
  function store(k, v){
    if (v === undefined){
      for (const st of areas()){ try { const x = st.getItem(k); if (x !== null) return x; } catch(e){} }
      return Object.prototype.hasOwnProperty.call(MEM, k) ? MEM[k] : null;
    }
    v = String(v); MEM[k] = v;
    for (const st of areas()){ try { st.setItem(k, v); } catch(e){} }
  }
  function esc(s){ return String(s == null ? '' : s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }
  function isDev(){ try { return new URLSearchParams(location.search).get('dev') === '1'; } catch(e){ return /[?&]dev=1(&|$)/.test(location.search); } }

  var css = '' +
  '.kss-ov{position:fixed;inset:0;z-index:2147483000;background:rgba(17,17,17,.55);-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px);overflow-y:auto;-webkit-overflow-scrolling:touch;overscroll-behavior:contain;display:flex;justify-content:center;align-items:flex-start;padding:28px 16px;font-family:"Plus Jakarta Sans",system-ui,"Segoe UI",Arial,sans-serif;color:var(--ink,#111)}' +
  '.kss-card{position:relative;width:100%;max-width:720px;margin:auto 0;background:var(--surface,#fff);border:2px solid var(--line,#D8F07A);border-radius:var(--r,20px);box-shadow:0 10px 30px rgba(0,0,0,.18);padding:24px;animation:kssin .35s ease}' +
  '.kss-card *{box-sizing:border-box}' +
  '.kss-head{display:flex;gap:18px;align-items:center;margin-bottom:6px}' +
  '.kss-head img{flex:0 0 120px;width:120px;height:120px;border-radius:18px;object-fit:cover;background:var(--soft,#F7FDE6)}' +
  '.kss-head h2{margin:0 0 6px;font-family:Nunito,"Plus Jakarta Sans",sans-serif;font-weight:900;letter-spacing:-.02em;font-size:23px;line-height:1.2}' +
  '.kss-head p{margin:0;font-size:14.5px;line-height:1.6;color:var(--muted,#6B6F7D)}' +
  '.kss-id{display:grid;grid-template-columns:1.4fr 1fr;gap:12px;margin:16px 0 6px}' +
  '.kss-id label{display:block;font-size:13px;font-weight:800;margin-bottom:6px}' +
  '.kss-id input,.kss-id select,.kss-open{width:100%;font:inherit;font-size:15px;padding:11px 13px;border-radius:var(--rs,12px);border:2px solid var(--line,#D8F07A);background:var(--soft,#F7FDE6);color:inherit}' +
  '.kss-id input:focus,.kss-id select:focus,.kss-open:focus{outline:none;border-color:var(--lime-d,#AEDD2E);box-shadow:0 0 0 3px rgba(196,240,70,.35)}' +
  '.kss-open{min-height:80px;resize:vertical}' +
  '.kss-q{border-top:1px solid var(--hair,#E7EFCF);padding:14px 0 6px}' +
  '.kss-q.miss .kss-qt{color:var(--red,#E5484D)}' +
  '.kss-qt{margin:0 0 10px;font-weight:700;font-size:15.5px;line-height:1.45}' +
  '.kss-qt::before{content:"\\2605  ";color:var(--lime-dd,#5E7F07)}' +
  '.kss-q.opt .kss-qt::before{content:""}' +
  '.kss-qt em{font-style:normal;font-weight:600;color:var(--muted,#6B6F7D);font-size:13.5px}' +
  '.kss-opts{display:flex;flex-wrap:wrap;gap:8px;align-items:center}' +
  '.kss-opt{font:inherit;font-size:14.5px;font-weight:700;padding:9px 15px;border-radius:999px;border:2px solid var(--line,#D8F07A);background:var(--soft,#F7FDE6);color:inherit;cursor:pointer;transition:transform .15s,border-color .15s,background .15s}' +
  '.kss-opt:hover{border-color:var(--lime-d,#AEDD2E)}' +
  '.kss-opt.on{background:var(--lime,#C4F046);border-color:var(--lime-d,#AEDD2E);color:var(--ink,#111);transform:translateY(-1px)}' +
  '.kss-scale .kss-opt{width:46px;height:46px;padding:0;border-radius:14px;font-size:16px}' +
  '.kss-scale small{font-size:12px;color:var(--muted,#6B6F7D);font-weight:700}' +
  '.kss-foot{display:flex;gap:14px;align-items:center;flex-wrap:wrap;margin-top:18px}' +
  '.kss-send{font:inherit;font-weight:800;font-size:15px;border:0;border-radius:999px;padding:13px 24px;background:var(--ink,#111);color:#fff;cursor:pointer;transition:transform .15s,background .15s}' +
  '.kss-send:hover{background:var(--pink,#F03D9E);transform:translateY(-1px)}' +
  '.kss-send:disabled{background:#D5D8DE;color:#8C909C;cursor:default;transform:none}' +
  '.kss-msg{font-size:14.5px;font-weight:600}' +
  '.kss-msg.err{color:var(--red,#E5484D)}' +
  '.kss-skip{margin-inline-start:auto;font-size:12.5px;font-weight:700;color:var(--muted,#6B6F7D);text-decoration:underline;background:none;border:0;cursor:pointer;font-family:inherit}' +
  '.kss-done{border-radius:14px;padding:16px 18px;background:rgba(196,240,70,.22);border:2px solid var(--lime,#C4F046);font-size:16px;margin-top:10px}' +
  '[dir="rtl"] .kss-card,.kss-ov[dir="rtl"]{text-align:right}' +
  '.kss-ov[dir="rtl"] .kss-id input[type="email"]{direction:ltr;text-align:right}' +
  'html.kss-lock,html.kss-lock body{overflow:hidden!important}' +
  '@keyframes kssin{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}' +
  '@media (max-width:700px){.kss-ov{padding:12px 10px}.kss-card{padding:18px}.kss-id{grid-template-columns:1fr}.kss-head{flex-direction:column;align-items:flex-start}.kss-head img{width:96px;height:96px;flex-basis:96px}.kss-head h2{font-size:20px}.kss-scale .kss-opt{width:42px;height:42px}}';

  function init(){
    var C = window.COURSE;
    if (!C || !C.id) return;                              // not a course page: do nothing
    var KEY = 'kl-start-survey-' + C.id;
    if (store(KEY)) return;                                // already sent in this browser
    var lang = C.lang || window.LANG || 'en';
    var X = T[lang] || T[String(lang).split('-')[0]] || T.en;
    var rtl = C.dir === 'rtl' || /^ar\b/.test(lang);
    var region = REGION_BY_LANG[lang] || REGION_BY_LANG[String(lang).split('-')[0]] || '';
    var S = X.s;

    var st = document.createElement('style'); st.id = 'kss-style'; st.textContent = css; document.head.appendChild(st);

    var qHTML = QUESTIONS.map(function(q){
      var body;
      if (q.type === 'open') body = '<textarea class="kss-open" placeholder="' + esc(S.openPlaceholder) + '"></textarea>';
      else if (q.type === 'choice') body = '<div class="kss-opts">' + X.feelings.map(function(o){ return '<button type="button" class="kss-opt" data-v="' + esc(o[0]) + '">' + esc(o[1]) + '</button>'; }).join('') + '</div>';
      else body = '<div class="kss-opts kss-scale"><small>' + esc(S.low) + '</small>' + [1,2,3,4,5].map(function(n){ return '<button type="button" class="kss-opt" data-v="' + n + '">' + n + '</button>'; }).join('') + '<small>' + esc(S.high) + '</small></div>';
      return '<div class="kss-q' + (q.optional ? ' opt' : '') + '" data-q="' + q.id + '" data-type="' + q.type + '"><p class="kss-qt">' + esc(X.q[q.id]) + (q.optional ? ' <em>(' + esc(S.optional) + ')</em>' : '') + '</p>' + body + '</div>';
    }).join('');

    var ov = document.createElement('div');
    ov.className = 'kss-ov'; ov.id = 'klStartSurvey';
    ov.setAttribute('role', 'dialog'); ov.setAttribute('aria-modal', 'true'); ov.setAttribute('aria-labelledby', 'kssTitle');
    ov.setAttribute('lang', lang); if (rtl) ov.setAttribute('dir', 'rtl');
    ov.innerHTML = '<div class="kss-card">' +
      '<div class="kss-head">' + (GIF ? '<img src="' + esc(GIF) + '" alt="' + esc(X.gifAlt) + '">' : '') + '<div><h2 id="kssTitle">' + esc(X.title) + '</h2><p>' + esc(X.intro) + '</p></div></div>' +
      '<div class="kss-body">' +
        '<div class="kss-id">' +
          '<div><label for="kssEmail">' + esc(S.emailLabel) + '</label><input type="email" id="kssEmail" class="kss-email" placeholder="' + esc(S.emailPlaceholder) + '" autocomplete="email"></div>' +
          '<div><label for="kssRegion">' + esc(S.regionLabel) + '</label><select id="kssRegion" class="kss-region"><option value="">' + esc(S.regionPlaceholder) + '</option>' +
            X.regions.map(function(r){ return '<option value="' + esc(r[0]) + '"' + (r[0] === region ? ' selected' : '') + '>' + esc(r[1]) + '</option>'; }).join('') + '</select></div>' +
        '</div>' + qHTML +
        '<div class="kss-foot"><button type="button" class="kss-send">' + esc(S.send) + '</button><span class="kss-msg" aria-live="polite"></span>' +
          (isDev() ? '<button type="button" class="kss-skip">Skip (dev)</button>' : '') + '</div>' +
      '</div></div>';

    // Block the training behind: no scroll, no clicks, no keyboard focus
    var inerted = [];
    Array.prototype.forEach.call(document.body.children, function(el){
      if (el.tagName !== 'SCRIPT' && el.tagName !== 'STYLE' && !el.hasAttribute('inert')){ el.setAttribute('inert', ''); el.setAttribute('aria-hidden', 'true'); inerted.push(el); }
    });
    document.documentElement.classList.add('kss-lock');
    document.body.appendChild(ov);
    setTimeout(function(){ var e = ov.querySelector('.kss-email'); if (e) try { e.focus({ preventScroll:true }); } catch(err){ e.focus(); } }, 50);

    function close(){
      inerted.forEach(function(el){ el.removeAttribute('inert'); el.removeAttribute('aria-hidden'); });
      document.documentElement.classList.remove('kss-lock');
      if (ov.parentNode) ov.parentNode.removeChild(ov);
    }
    // Keep Tab inside the pop-up (for browsers without "inert") and ignore Escape
    ov.addEventListener('keydown', function(e){
      if (e.key === 'Escape'){ e.preventDefault(); return; }
      if (e.key !== 'Tab') return;
      var f = ov.querySelectorAll('button:not([disabled]),input,select,textarea'); if (!f.length) return;
      var first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first){ e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last){ e.preventDefault(); first.focus(); }
    });

    ov.addEventListener('click', function(e){
      var o = e.target.closest('.kss-opt');
      if (o){ var q = o.closest('.kss-q'); Array.prototype.forEach.call(q.querySelectorAll('.kss-opt'), function(b){ b.classList.toggle('on', b === o); }); q.classList.remove('miss'); return; }
      if (e.target.closest('.kss-skip')){ close(); return; }   // dev only: nothing sent, nothing stored
      if (e.target.closest('.kss-send')) send();
    });

    function send(){
      var msg = ov.querySelector('.kss-msg'), btn = ov.querySelector('.kss-send');
      var emailEl = ov.querySelector('.kss-email'), regionEl = ov.querySelector('.kss-region');
      var email = emailEl.value.trim(), reg = regionEl.value;
      msg.className = 'kss-msg';
      if (!/^[^@\s]+@kodland\.[a-z.]+$/i.test(email)){ msg.className = 'kss-msg err'; msg.textContent = S.emailError; emailEl.focus(); return; }
      if (!reg){ msg.className = 'kss-msg err'; msg.textContent = S.regionError; regionEl.focus(); return; }
      var answers = {}, missing = false;
      Array.prototype.forEach.call(ov.querySelectorAll('.kss-q'), function(s){
        if (s.getAttribute('data-type') === 'open'){ answers[s.getAttribute('data-q')] = s.querySelector('textarea').value.trim(); return; }   // optional
        var on = s.querySelector('.kss-opt.on'); s.classList.toggle('miss', !on);
        if (on) answers[s.getAttribute('data-q')] = on.getAttribute('data-v'); else missing = true;
      });
      if (missing){ msg.className = 'kss-msg err'; msg.textContent = S.missing; var m = ov.querySelector('.kss-q.miss'); if (m && m.scrollIntoView) m.scrollIntoView({ block:'center', behavior:'smooth' }); return; }
      var payload = {
        survey:'start', training:'EM-COURSE-' + C.id, course:C.title || '', lang:C.lang || lang, email:email, region:reg, sent_at:new Date().toISOString(),
        feeling:answers.feeling, confidence:answers.confidence, understand_why:answers.understand_why, know_where:answers.know_where, worries:answers.worries || ''
      };
      btn.disabled = true; msg.textContent = S.sending;
      var done = false;
      function finish(){
        if (done) return; done = true;
        store(KEY, JSON.stringify(payload));
        ov.querySelector('.kss-body').innerHTML = '<div class="kss-done">' + S.thanks + '</div>';   // S.thanks is trusted HTML from the texts
        setTimeout(close, 1800);
      }
      if (!SURVEY_URL){ console.warn('[Start survey] SURVEY_URL is empty: answers not sent', payload); finish(); return; }
      try {
        // text/plain avoids the CORS preflight that Apps Script doesn't answer; no-cors = fire and forget
        fetch(SURVEY_URL, { method:'POST', mode:'no-cors', headers:{ 'Content-Type':'text/plain;charset=utf-8' }, body:JSON.stringify(payload) }).then(finish, finish);
      } catch(err){ finish(); }
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
