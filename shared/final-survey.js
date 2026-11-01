/* =====================================================================
   FINAL SURVEY — satisfaction survey at the end of the Part 2 course trainings
   Loaded right after ../shared/course-engine.js (and start-survey.js) in each course page.
   - Adds a "How you feel now" section at the end of the LAST module. The check of that module
     unlocks once the survey is sent (flag 'finalSurvey', saved with the progress like a simulation).
   - Same questions as the final survey of the EM core training, plus two open questions (the second one optional).
   - Answers go to the same Google Sheet as the start survey (tab "final", created automatically).
   - Question ids/keys are NOT translated: they are what arrives in the Google Sheet.
   - Developer mode (?dev=1) unlocks it like every other step.
   ===================================================================== */
(function(){
  'use strict';
  const SURVEY_URL = 'https://script.google.com/macros/s/AKfycbyz59venGaOX2Vh-XcC67yHGAOTv4VoUZIMEXjo1tC5uQGt8fkSJR4ieuwUJbIU5gXpcQ/exec';
  const FLAG = 'finalSurvey';
  // Region preselected from the language (the tutor can change it). en and ar are used by several regions: no default.
  const REGION_BY_LANG = { es:'latam', pt:'brazil', it:'italy', pl:'poland', ru:'cis', tr:'mena', id:'indonesia', 'en-US':'usa' };
  const GROUPS = [
    { key:'feel', q:[['feeling','choice'], ['confidence','scale'], ['understand_why','scale'], ['know_where','scale']] },
    { key:'teach', q:[['ready_first_lesson','scale'], ['know_course','scale'], ['ready_tools','scale']] },
    { key:'materials', q:[['training_clear','scale'], ['simulators_helped','scale'], ['training_length','length']] },
    { key:'opinion', q:[['improve_training','open'], ['course_feedback','open', true]] }   // true = optional
  ];

  /* ---------- texts (from module0-<lang>.js of the EM core training + the new questions) ---------- */
  const T = {
    en: {
      sec: "How you feel now",
      title: "A last reflection: how do you feel now?",
      intro: "This isn’t a test — there are no right or wrong answers. Your answers help the team improve the training and the courses. Send them to unlock the check of this module.",
      groups: { feel:"How you feel", teach:"Your confidence to teach", materials:"The training materials", opinion:"Your opinion" },
      q: {
        feeling: "How do you feel about this new launch now?",
        confidence: "How confident do you feel about teaching this new course or format?",
        understand_why: "I understand why we are making this change.",
        know_where: "I know where to find what I need and who to ask for help.",
        ready_first_lesson: "I feel ready to run my first lesson from start to finish.",
        know_course: "I know what students do and achieve in this course.",
        ready_tools: "I feel ready to use Back Office, the Classroom and the tools in class.",
        training_clear: "The training was clear and easy to follow.",
        simulators_helped: "The simulators helped me feel more confident.",
        training_length: "The length of the training was:",
        improve_training: "Is there anything you’d change about the training, or anything you think we could improve? Let us know what you think!",
        course_feedback: "If you have any comments or suggestions about the course content, please let us know!"
      },
      s: { emailLabel:"Your Kodland corporate e-mail", emailPlaceholder:"name.surname@kodland.org", emailError:"Please write your Kodland corporate e-mail (it ends in @kodland…).", regionLabel:"Your region", regionPlaceholder:"Choose your region…", regionError:"Please choose your region.", missing:"Please answer every question marked with ★.", send:"Send my answers", sending:"Sending…", thanks:"✅ <b>Thank you!</b> Your answers have been sent.", unlocked:"The module check is now unlocked.", low:"Not at all", high:"Completely", openPlaceholder:"Write anything you like…", optional:"optional", lockMsg:"🔒 Send the survey above to unlock the module check." },
      feelings: [["excited","🤩 Excited"],["curious","🤔 Curious"],["calm","😌 Calm"],["unsure","😕 Unsure"],["worried","😟 Worried"],["overwhelmed","😵 Overwhelmed"]],
      lengths: [["too_short","Too short"],["just_right","Just right"],["too_long","Too long"]],
      regions: [["brazil","Brazil"],["latam","LATAM (incl. Spain)"],["mena","MENA"],["italy","Italy"],["poland","Poland"],["uk","UK"],["usa","USA"],["indonesia","Indonesia"],["gcc","GCC"],["cis","CIS"]]
    },
    es: {
      sec: "Cómo te sientes ahora",
      title: "Una última reflexión: ¿cómo te sientes ahora?",
      intro: "Esto no es un test: no hay respuestas correctas ni incorrectas. Tus respuestas ayudan al equipo a mejorar la formación y los cursos. Envíalas para desbloquear la verificación de este módulo.",
      groups: { feel:"Cómo te sientes", teach:"Tu confianza para enseñar", materials:"Los materiales de la formación", opinion:"Tu opinión" },
      q: {
        feeling: "¿Cómo te sientes ahora con este nuevo lanzamiento?",
        confidence: "¿Qué tan seguro te sientes para dar este nuevo curso o formato?",
        understand_why: "Entiendo por qué estamos haciendo este cambio.",
        know_where: "Sé dónde encontrar lo que necesito y a quién pedir ayuda.",
        ready_first_lesson: "Me siento listo para dar mi primera clase de principio a fin.",
        know_course: "Sé qué hacen y qué logran los estudiantes en este curso.",
        ready_tools: "Me siento listo para usar Backoffice, Classroom y las herramientas en clase.",
        training_clear: "La formación fue clara y fácil de seguir.",
        simulators_helped: "Los simuladores me ayudaron a sentirme más seguro.",
        training_length: "La duración de la formación fue:",
        improve_training: "¿Hay algo que cambiarías de la capacitación o que crees que podríamos mejorar? ¡Cuéntanos qué opinas!",
        course_feedback: "Si tienes algún comentario o sugerencia sobre el contenido del curso, ¡compártelo con nosotros!"
      },
      s: { emailLabel:"Tu correo corporativo de Kodland", emailPlaceholder:"nombre.apellido@kodland.org", emailError:"Escribe tu correo corporativo de Kodland (termina en @kodland…).", regionLabel:"Tu región", regionPlaceholder:"Elige tu región…", regionError:"Elige tu región.", missing:"Responde todas las preguntas marcadas con ★.", send:"Enviar mis respuestas", sending:"Enviando…", thanks:"✅ <b>¡Gracias!</b> Tus respuestas se enviaron.", unlocked:"La verificación del módulo ya está desbloqueada.", low:"Nada", high:"Totalmente", openPlaceholder:"Escribe lo que quieras…", optional:"opcional", lockMsg:"🔒 Envía la encuesta de arriba para desbloquear la verificación del módulo." },
      feelings: [["excited","🤩 Entusiasmado"],["curious","🤔 Con curiosidad"],["calm","😌 Tranquilo"],["unsure","😕 Inseguro"],["worried","😟 Preocupado"],["overwhelmed","😵 Abrumado"]],
      lengths: [["too_short","Demasiado corta"],["just_right","Adecuada"],["too_long","Demasiado larga"]],
      regions: [["brazil","Brasil"],["latam","LATAM (incl. España)"],["mena","MENA"],["italy","Italia"],["poland","Polonia"],["uk","UK"],["usa","USA"],["indonesia","Indonesia"],["gcc","GCC"],["cis","CIS"]]
    },
    pt: {
      sec: "Como você se sente agora",
      title: "Uma última reflexão: como você se sente agora?",
      intro: "Isto não é um teste — não há respostas certas ou erradas. As suas respostas ajudam a equipe a melhorar a formação e os cursos. Envie-as para liberar a verificação deste módulo.",
      groups: { feel:"Como você se sente", teach:"A sua confiança para ensinar", materials:"Os materiais da formação", opinion:"A sua opinião" },
      q: {
        feeling: "Como você se sente agora em relação a este novo lançamento?",
        confidence: "Quão seguro você se sente para dar este novo curso ou formato?",
        understand_why: "Eu entendo por que estamos fazendo esta mudança.",
        know_where: "Eu sei onde encontrar o que preciso e a quem pedir ajuda.",
        ready_first_lesson: "Eu me sinto pronto para conduzir a minha primeira aula do começo ao fim.",
        know_course: "Eu sei o que os alunos fazem e conquistam neste curso.",
        ready_tools: "Eu me sinto pronto para usar o Backoffice, o Classroom e as ferramentas em aula.",
        training_clear: "A formação foi clara e fácil de acompanhar.",
        simulators_helped: "Os simuladores me ajudaram a me sentir mais seguro.",
        training_length: "A duração da formação foi:",
        improve_training: "Tem algo que você mudaria no treinamento ou que acha que poderíamos melhorar? Conte para nós o que você pensa!",
        course_feedback: "Se tiver algum comentário ou sugestão sobre o conteúdo do curso, compartilhe com a gente!"
      },
      s: { emailLabel:"O seu e-mail corporativo da Kodland", emailPlaceholder:"nome.sobrenome@kodland.org", emailError:"Escreva o seu e-mail corporativo da Kodland (ele termina em @kodland…).", regionLabel:"A sua região", regionPlaceholder:"Escolha a sua região…", regionError:"Escolha a sua região.", missing:"Responda a todas as perguntas marcadas com ★.", send:"Enviar minhas respostas", sending:"Enviando…", thanks:"✅ <b>Obrigado!</b> As suas respostas foram enviadas.", unlocked:"A verificação do módulo já está liberada.", low:"Nem um pouco", high:"Totalmente", openPlaceholder:"Escreva o que quiser…", optional:"opcional", lockMsg:"🔒 Envie a pesquisa acima para liberar a verificação do módulo." },
      feelings: [["excited","🤩 Animado"],["curious","🤔 Curioso"],["calm","😌 Tranquilo"],["unsure","😕 Inseguro"],["worried","😟 Preocupado"],["overwhelmed","😵 Sobrecarregado"]],
      lengths: [["too_short","Curto demais"],["just_right","Na medida certa"],["too_long","Longo demais"]],
      regions: [["brazil","Brasil"],["latam","LATAM (incl. Espanha)"],["mena","MENA"],["italy","Itália"],["poland","Polônia"],["uk","UK"],["usa","USA"],["indonesia","Indonésia"],["gcc","GCC"],["cis","CIS"]]
    },
    tr: {
      sec: "Şimdi nasıl hissediyorsunuz",
      title: "Son bir değerlendirme: şimdi nasıl hissediyorsunuz?",
      intro: "Bu bir test değil — doğru ya da yanlış cevap yok. Yanıtlarınız ekibin eğitimi ve kursları geliştirmesine yardımcı olur. Bu modülün kontrolünün kilidini açmak için gönderin.",
      groups: { feel:"Nasıl hissediyorsunuz", teach:"Ders anlatma özgüveniniz", materials:"Eğitim materyalleri", opinion:"Görüşünüz" },
      q: {
        feeling: "Şimdi bu yeni lansman hakkında nasıl hissediyorsunuz?",
        confidence: "Bu yeni kursu ya da formatı anlatma konusunda kendinize ne kadar güveniyorsunuz?",
        understand_why: "Bu değişikliği neden yaptığımızı anlıyorum.",
        know_where: "İhtiyacım olanı nerede bulacağımı ve kimden yardım isteyeceğimi biliyorum.",
        ready_first_lesson: "İlk dersimi baştan sona yürütmeye hazır hissediyorum.",
        know_course: "Bu kursta öğrencilerin ne yaptığını ve neler başardığını biliyorum.",
        ready_tools: "Back Office’i, Classroom’u ve derste kullanılan araçları kullanmaya hazır hissediyorum.",
        training_clear: "Eğitim açık ve takip etmesi kolaydı.",
        simulators_helped: "Simülatörler kendime daha fazla güvenmeme yardımcı oldu.",
        training_length: "Eğitimin uzunluğu:",
        improve_training: "Eğitimde değiştirmek istediğiniz veya geliştirebileceğimizi düşündüğünüz bir şey var mı? Düşüncelerinizi bizimle paylaşın!",
        course_feedback: "Kurs içeriğiyle ilgili yorum veya önerileriniz varsa lütfen bizimle paylaşın!"
      },
      s: { emailLabel:"Kodland kurumsal e-posta adresiniz", emailPlaceholder:"ad.soyad@kodland.org", emailError:"Lütfen Kodland kurumsal e-posta adresinizi yazın (@kodland… ile biter).", regionLabel:"Bölgeniz", regionPlaceholder:"Bölgenizi seçin…", regionError:"Lütfen bölgenizi seçin.", missing:"Lütfen ★ ile işaretlenmiş tüm soruları yanıtlayın.", send:"Yanıtlarımı gönder", sending:"Gönderiliyor…", thanks:"✅ <b>Teşekkürler!</b> Yanıtlarınız gönderildi.", unlocked:"Modül kontrolünün kilidi artık açık.", low:"Hiç", high:"Tamamen", openPlaceholder:"İstediğinizi yazın…", optional:"isteğe bağlı", lockMsg:"🔒 Modül kontrolünün kilidini açmak için yukarıdaki anketi gönderin." },
      feelings: [["excited","🤩 Heyecanlı"],["curious","🤔 Meraklı"],["calm","😌 Sakin"],["unsure","😕 Emin değilim"],["worried","😟 Endişeli"],["overwhelmed","😵 Bunalmış"]],
      lengths: [["too_short","Çok kısa"],["just_right","Tam kararında"],["too_long","Çok uzun"]],
      regions: [["brazil","Brezilya"],["latam","LATAM (İspanya dahil)"],["mena","MENA"],["italy","İtalya"],["poland","Polonya"],["uk","UK"],["usa","USA"],["indonesia","Endonezya"],["gcc","GCC"],["cis","CIS"]]
    },
    pl: {
      sec: "Jak się teraz czujesz",
      title: "Ostatnia refleksja: jak się teraz czujesz?",
      intro: "To nie jest test — nie ma dobrych ani złych odpowiedzi. Twoje odpowiedzi pomagają zespołowi ulepszać szkolenie i kursy. Wyślij je, żeby odblokować sprawdzian tego modułu.",
      groups: { feel:"Jak się czujesz", teach:"Twoja pewność w prowadzeniu zajęć", materials:"Materiały szkoleniowe", opinion:"Twoja opinia" },
      q: {
        feeling: "Jak się teraz czujesz w związku z tym nowym startem?",
        confidence: "Jak pewnie czujesz się z prowadzeniem tego nowego kursu lub formatu?",
        understand_why: "Rozumiem, dlaczego wprowadzamy tę zmianę.",
        know_where: "Wiem, gdzie znaleźć to, czego potrzebuję, i kogo poprosić o pomoc.",
        ready_first_lesson: "Czuję się gotowy/a, żeby poprowadzić moją pierwszą lekcję od początku do końca.",
        know_course: "Wiem, co uczniowie robią i co osiągają na tym kursie.",
        ready_tools: "Czuję się gotowy/a, żeby korzystać z Back Office, Classroom i narzędzi na zajęciach.",
        training_clear: "Szkolenie było jasne i łatwe do przejścia.",
        simulators_helped: "Symulatory pomogły mi poczuć się pewniej.",
        training_length: "Długość szkolenia była:",
        improve_training: "Czy jest coś, co zmienił(a)byś w szkoleniu lub co Twoim zdaniem moglibyśmy ulepszyć? Daj nam znać, co o tym myślisz!",
        course_feedback: "Jeśli masz jakieś uwagi lub sugestie dotyczące treści kursu, podziel się nimi z nami!"
      },
      s: { emailLabel:"Twój służbowy e-mail Kodland", emailPlaceholder:"imie.nazwisko@kodland.org", emailError:"Wpisz swój służbowy e-mail Kodland (kończy się na @kodland…).", regionLabel:"Twój region", regionPlaceholder:"Wybierz swój region…", regionError:"Wybierz swój region.", missing:"Odpowiedz na każde pytanie oznaczone ★.", send:"Wyślij moje odpowiedzi", sending:"Wysyłanie…", thanks:"✅ <b>Dziękujemy!</b> Twoje odpowiedzi zostały wysłane.", unlocked:"Sprawdzian modułu jest już odblokowany.", low:"Wcale", high:"Całkowicie", openPlaceholder:"Napisz, co chcesz…", optional:"opcjonalnie", lockMsg:"🔒 Wyślij powyższą ankietę, żeby odblokować sprawdzian modułu." },
      feelings: [["excited","🤩 Podekscytowany/a"],["curious","🤔 Zaciekawiony/a"],["calm","😌 Spokojny/a"],["unsure","😕 Niepewny/a"],["worried","😟 Zaniepokojony/a"],["overwhelmed","😵 Przytłoczony/a"]],
      lengths: [["too_short","Za krótkie"],["just_right","W sam raz"],["too_long","Za długie"]],
      regions: [["brazil","Brazylia"],["latam","LATAM (z Hiszpanią)"],["mena","MENA"],["italy","Włochy"],["poland","Polska"],["uk","UK"],["usa","USA"],["indonesia","Indonezja"],["gcc","GCC"],["cis","CIS"]]
    },
    ru: {
      sec: "Как вы себя чувствуете сейчас",
      title: "Последнее размышление: как вы себя чувствуете сейчас?",
      intro: "Это не тест — правильных и неправильных ответов здесь нет. Ваши ответы помогают команде улучшать обучение и курсы. Отправьте их, чтобы открыть проверку этого модуля.",
      groups: { feel:"Как вы себя чувствуете", teach:"Ваша уверенность в преподавании", materials:"Материалы обучения", opinion:"Ваше мнение" },
      q: {
        feeling: "Что вы чувствуете по поводу этого нового запуска сейчас?",
        confidence: "Насколько уверенно вы себя чувствуете, думая о том, чтобы вести этот новый курс или формат?",
        understand_why: "Я понимаю, зачем мы вносим это изменение.",
        know_where: "Я знаю, где найти всё необходимое и к кому обратиться за помощью.",
        ready_first_lesson: "Я чувствую, что готов(а) провести свой первый урок от начала до конца.",
        know_course: "Я знаю, что ученики делают на этом курсе и каких результатов достигают.",
        ready_tools: "Я чувствую, что готов(а) работать с Backoffice, Classroom и инструментами на уроке.",
        training_clear: "Обучение было понятным, и его было легко проходить.",
        simulators_helped: "Тренажёры помогли мне почувствовать себя увереннее.",
        training_length: "Продолжительность обучения:",
        improve_training: "Есть ли что-то, что вы хотели бы изменить в обучении или что, по вашему мнению, можно улучшить? Поделитесь с нами своим мнением!",
        course_feedback: "Если у вас есть комментарии или предложения по содержанию курса, пожалуйста, поделитесь ими с нами!"
      },
      s: { emailLabel:"Ваш корпоративный e-mail Kodland", emailPlaceholder:"imya.familiya@kodland.org", emailError:"Пожалуйста, укажите свой корпоративный e-mail Kodland (он заканчивается на @kodland…).", regionLabel:"Ваш регион", regionPlaceholder:"Выберите свой регион…", regionError:"Пожалуйста, выберите свой регион.", missing:"Пожалуйста, ответьте на все вопросы, отмеченные ★.", send:"Отправить ответы", sending:"Отправка…", thanks:"✅ <b>Спасибо!</b> Ваши ответы отправлены.", unlocked:"Проверка модуля теперь открыта.", low:"Совсем нет", high:"Полностью", openPlaceholder:"Напишите всё, что хотите…", optional:"необязательно", lockMsg:"🔒 Отправьте опрос выше, чтобы открыть проверку модуля." },
      feelings: [["excited","🤩 Воодушевление"],["curious","🤔 Любопытство"],["calm","😌 Спокойствие"],["unsure","😕 Неуверенность"],["worried","😟 Тревога"],["overwhelmed","😵 Перегруженность"]],
      lengths: [["too_short","Слишком короткое"],["just_right","В самый раз"],["too_long","Слишком длинное"]],
      regions: [["brazil","Бразилия"],["latam","LATAM (вкл. Испанию)"],["mena","MENA"],["italy","Италия"],["poland","Польша"],["uk","UK"],["usa","USA"],["indonesia","Индонезия"],["gcc","GCC"],["cis","СНГ"]]
    },
    it: {
      sec: "Come ti senti ora",
      title: "Un’ultima riflessione: come ti senti ora?",
      intro: "Non è un test: non ci sono risposte giuste o sbagliate. Le tue risposte aiutano il team a migliorare la formazione e i corsi. Inviale per sbloccare la verifica di questo modulo.",
      groups: { feel:"Come ti senti", teach:"La tua sicurezza nell’insegnare", materials:"I materiali della formazione", opinion:"La tua opinione" },
      q: {
        feeling: "Come ti senti ora rispetto a questo nuovo lancio?",
        confidence: "Quanto ti senti sicuro nell’insegnare questo nuovo corso o formato?",
        understand_why: "Capisco perché stiamo facendo questo cambiamento.",
        know_where: "So dove trovare ciò che mi serve e a chi chiedere aiuto.",
        ready_first_lesson: "Mi sento pronto a condurre la mia prima lezione dall’inizio alla fine.",
        know_course: "So che cosa fanno e che cosa ottengono gli studenti in questo corso.",
        ready_tools: "Mi sento pronto a usare Backoffice, Classroom e gli strumenti in classe.",
        training_clear: "La formazione è stata chiara e facile da seguire.",
        simulators_helped: "I simulatori mi hanno aiutato a sentirmi più sicuro.",
        training_length: "La durata della formazione è stata:",
        improve_training: "C’è qualcosa che cambieresti nella formazione o che pensi potremmo migliorare? Facci sapere cosa ne pensi!",
        course_feedback: "Se hai commenti o suggerimenti sui contenuti del corso, condividili con noi!"
      },
      s: { emailLabel:"La tua e-mail aziendale Kodland", emailPlaceholder:"nome.cognome@kodland.org", emailError:"Inserisci il tuo indirizzo e-mail aziendale Kodland (ad esempio nome.cognome@kodland.org).", regionLabel:"La tua regione", regionPlaceholder:"Scegli la tua regione…", regionError:"Scegli la tua regione.", missing:"Rispondi a tutte le domande contrassegnate con ★.", send:"Invia le mie risposte", sending:"Invio in corso…", thanks:"✅ <b>Grazie!</b> Le tue risposte sono state inviate.", unlocked:"La verifica del modulo è ora sbloccata.", low:"Per niente", high:"Completamente", openPlaceholder:"Scrivi quello che vuoi…", optional:"facoltativa", lockMsg:"🔒 Invia il questionario qui sopra per sbloccare la verifica del modulo." },
      feelings: [["excited","🤩 Entusiasta"],["curious","🤔 Curioso"],["calm","😌 Tranquillo"],["unsure","😕 Incerto"],["worried","😟 Preoccupato"],["overwhelmed","😵 Sopraffatto"]],
      lengths: [["too_short","Troppo breve"],["just_right","Giusta"],["too_long","Troppo lunga"]],
      regions: [["brazil","Brasile"],["latam","LATAM (Spagna inclusa)"],["mena","MENA"],["italy","Italia"],["poland","Polonia"],["uk","UK"],["usa","USA"],["indonesia","Indonesia"],["gcc","GCC"],["cis","CIS"]]
    },
    ar: {
      sec: "كيف تشعر الآن",
      title: "تأمّل أخير: كيف تشعر الآن؟",
      intro: "هذا ليس اختبارًا — لا توجد إجابات صحيحة أو خاطئة. تساعد إجاباتك الفريق على تحسين التدريب والدورات. أرسلها لفتح اختبار هذه الوحدة.",
      groups: { feel:"كيف تشعر", teach:"ثقتك في التدريس", materials:"مواد التدريب", opinion:"رأيك" },
      q: {
        feeling: "كيف تشعر تجاه هذا الإطلاق الجديد الآن؟",
        confidence: "ما مدى ثقتك في تدريس هذه الدورة أو الصيغة الجديدة؟",
        understand_why: "أفهم لماذا نُجري هذا التغيير.",
        know_where: "أعرف أين أجد ما أحتاجه ومن أسأل للحصول على المساعدة.",
        ready_first_lesson: "أشعر أنني جاهز لإدارة درسي الأول من بدايته إلى نهايته.",
        know_course: "أعرف ما يفعله الطلاب في هذه الدورة وما يحققونه.",
        ready_tools: "أشعر أنني جاهز لاستخدام Backoffice وClassroom والأدوات في الحصة.",
        training_clear: "كان التدريب واضحًا وسهل المتابعة.",
        simulators_helped: "ساعدتني المحاكاة على الشعور بثقة أكبر.",
        training_length: "كانت مدّة التدريب:",
        improve_training: "هل هناك أي شيء تود تغييره في التدريب أو تعتقد أنه يمكننا تحسينه؟ أخبرنا برأيك!",
        course_feedback: "إذا كانت لديك أي تعليقات أو اقتراحات حول محتوى الدورة، فيرجى مشاركتها معنا!"
      },
      s: { emailLabel:"بريدك الإلكتروني المؤسسي في Kodland", emailPlaceholder:"name.surname@kodland.org", emailError:"يُرجى كتابة بريدك الإلكتروني المؤسسي في Kodland (ينتهي بـ ‎@kodland…).", regionLabel:"منطقتك", regionPlaceholder:"اختر منطقتك…", regionError:"يُرجى اختيار منطقتك.", missing:"يُرجى الإجابة عن كل سؤال عليه علامة ★.", send:"أرسل إجاباتي", sending:"جارٍ الإرسال…", thanks:"✅ <b>شكرًا لك!</b> تمّ إرسال إجاباتك.", unlocked:"تم فتح اختبار الوحدة الآن.", low:"إطلاقًا", high:"تمامًا", openPlaceholder:"اكتب ما تشاء…", optional:"اختياري", lockMsg:"🔒 أرسل الاستبيان أعلاه لفتح اختبار الوحدة." },
      feelings: [["excited","🤩 متحمّس"],["curious","🤔 فضولي"],["calm","😌 هادئ"],["unsure","😕 متردّد"],["worried","😟 قلق"],["overwhelmed","😵 مُثقَل"]],
      lengths: [["too_short","قصير جدًا"],["just_right","مناسب تمامًا"],["too_long","طويل جدًا"]],
      regions: [["brazil","البرازيل"],["latam","LATAM (بما فيها إسبانيا)"],["mena","MENA"],["italy","إيطاليا"],["poland","بولندا"],["uk","UK"],["usa","USA"],["indonesia","إندونيسيا"],["gcc","GCC"],["cis","CIS"]]
    },
    id: {
      sec: "Perasaan Anda sekarang",
      title: "Refleksi terakhir: bagaimana perasaan Anda sekarang?",
      intro: "Ini bukan tes — tidak ada jawaban yang benar atau salah. Jawaban Anda membantu tim meningkatkan pelatihan dan kursus. Kirimkan untuk membuka evaluasi modul ini.",
      groups: { feel:"Bagaimana perasaan Anda", teach:"Kepercayaan diri Anda untuk mengajar", materials:"Materi pelatihan", opinion:"Pendapat Anda" },
      q: {
        feeling: "Bagaimana perasaan Anda tentang peluncuran baru ini sekarang?",
        confidence: "Seberapa percaya diri Anda untuk mengajar kursus atau format baru ini?",
        understand_why: "Saya memahami mengapa kita melakukan perubahan ini.",
        know_where: "Saya tahu di mana menemukan apa yang saya butuhkan dan kepada siapa meminta bantuan.",
        ready_first_lesson: "Saya merasa siap menjalankan pelajaran pertama saya dari awal sampai akhir.",
        know_course: "Saya tahu apa yang dilakukan dan dicapai siswa di kursus ini.",
        ready_tools: "Saya merasa siap menggunakan Backoffice, Classroom, dan tool di kelas.",
        training_clear: "Pelatihannya jelas dan mudah diikuti.",
        simulators_helped: "Simulator membantu saya merasa lebih percaya diri.",
        training_length: "Durasi pelatihannya:",
        improve_training: "Apakah ada hal yang ingin kamu ubah dari pelatihan ini atau menurutmu masih bisa kami tingkatkan? Beri tahu kami pendapatmu!",
        course_feedback: "Jika kamu punya komentar atau saran tentang materi kursus, silakan bagikan kepada kami!"
      },
      s: { emailLabel:"E-mail korporat Kodland Anda", emailPlaceholder:"nama.belakang@kodland.org", emailError:"Silakan tulis e-mail korporat Kodland Anda (berakhiran @kodland…).", regionLabel:"Wilayah Anda", regionPlaceholder:"Pilih wilayah Anda…", regionError:"Silakan pilih wilayah Anda.", missing:"Silakan jawab setiap pertanyaan yang bertanda ★.", send:"Kirim jawaban saya", sending:"Mengirim…", thanks:"✅ <b>Terima kasih!</b> Jawaban Anda sudah terkirim.", unlocked:"Evaluasi modul sekarang sudah terbuka.", low:"Sama sekali tidak", high:"Sepenuhnya", openPlaceholder:"Tulis apa saja…", optional:"opsional", lockMsg:"🔒 Kirim survei di atas untuk membuka evaluasi modul." },
      feelings: [["excited","🤩 Bersemangat"],["curious","🤔 Penasaran"],["calm","😌 Tenang"],["unsure","😕 Ragu"],["worried","😟 Khawatir"],["overwhelmed","😵 Kewalahan"]],
      lengths: [["too_short","Terlalu singkat"],["just_right","Pas"],["too_long","Terlalu panjang"]],
      regions: [["brazil","Brasil"],["latam","LATAM (termasuk Spanyol)"],["mena","MENA"],["italy","Italia"],["poland","Polandia"],["uk","UK"],["usa","USA"],["indonesia","Indonesia"],["gcc","GCC"],["cis","CIS"]]
    }
  };

  /* ---------- helpers ---------- */
  // Safe storage (same pattern as the engine's STORE): memory + localStorage + sessionStorage, every access in try/catch.
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

  const css = '' +
  '.kfs{background:var(--surface,#fff);border:2px solid var(--line,#D8F07A);border-radius:var(--r,20px);padding:22px;box-shadow:0 4px 16px rgba(0,0,0,.06)}' +
  '.kfs *{box-sizing:border-box}' +
  '.kfs-head{display:flex;gap:18px;align-items:center;margin-bottom:6px}' +
  '.kfs-head img{flex:0 0 110px;width:110px;height:110px;border-radius:18px;object-fit:cover;background:var(--soft,#F7FDE6)}' +
  '.kfs-head h3{margin:0 0 6px;font-family:Nunito,"Plus Jakarta Sans",sans-serif;font-weight:900;font-size:21px;line-height:1.25}' +
  '.kfs-head p{margin:0;font-size:14.5px;line-height:1.6;color:var(--muted,#6B6F7D)}' +
  '.kfs-id{display:grid;grid-template-columns:1.4fr 1fr;gap:12px;margin:16px 0 4px}' +
  '.kfs-id label{display:block;font-size:13px;font-weight:800;margin-bottom:6px}' +
  '.kfs-id input,.kfs-id select,.kfs-open{width:100%;font:inherit;font-size:15px;padding:11px 13px;border-radius:12px;border:2px solid var(--line,#D8F07A);background:var(--soft,#F7FDE6);color:inherit}' +
  '.kfs-id input:focus,.kfs-id select:focus,.kfs-open:focus{outline:none;border-color:#AEDD2E;box-shadow:0 0 0 3px rgba(196,240,70,.35)}' +
  '.kfs-open{min-height:84px;resize:vertical}' +
  '.kfs-g{margin:18px 0 0;font-family:Nunito,sans-serif;font-weight:900;font-size:16px;color:var(--pink,#F03D9E)}' +
  '.kfs-q{border-top:1px solid #E7EFCF;padding:13px 0 5px}' +
  '.kfs-q.miss .kfs-qt{color:#E5484D}' +
  '.kfs-qt{margin:0 0 10px;font-weight:700;font-size:15px;line-height:1.45}' +
  '.kfs-qt::before{content:"\\2605  ";color:#5E7F07}' +
  '.kfs-q.opt .kfs-qt::before{content:""}.kfs-qt em{font-style:normal;font-weight:600;color:var(--muted,#6B6F7D);font-size:13.5px}' +
  '.kfs-opts{display:flex;flex-wrap:wrap;gap:8px;align-items:center}' +
  '.kfs-opt{font:inherit;font-size:14.5px;font-weight:700;padding:9px 15px;border-radius:999px;border:2px solid var(--line,#D8F07A);background:var(--soft,#F7FDE6);color:inherit;cursor:pointer;transition:transform .15s,border-color .15s,background .15s}' +
  '.kfs-opt:hover{border-color:#AEDD2E}' +
  '.kfs-opt.on{background:#C4F046;border-color:#AEDD2E;color:#111;transform:translateY(-1px)}' +
  '.kfs-scale .kfs-opt{width:46px;height:46px;padding:0;border-radius:14px;font-size:16px}' +
  '.kfs-scale small{font-size:12px;color:var(--muted,#6B6F7D);font-weight:700}' +
  '.kfs-foot{display:flex;gap:14px;align-items:center;flex-wrap:wrap;margin-top:18px}' +
  '.kfs-send{font:inherit;font-weight:800;font-size:15px;border:0;border-radius:999px;padding:13px 24px;background:#111;color:#fff;cursor:pointer;transition:transform .15s,background .15s}' +
  '.kfs-send:hover{background:#F03D9E;transform:translateY(-1px)}' +
  '.kfs-send:disabled{background:#D5D8DE;color:#8C909C;cursor:default;transform:none}' +
  '.kfs-msg{font-size:14.5px;font-weight:600}.kfs-msg.err{color:#E5484D}' +
  '.kfs-done{border-radius:14px;padding:16px 18px;background:rgba(196,240,70,.22);border:2px solid #C4F046;font-size:16px;margin-top:12px}' +
  '[dir="rtl"] .kfs input[type="email"]{direction:ltr;text-align:right}' +
  '@media (max-width:700px){.kfs{padding:16px}.kfs-id{grid-template-columns:1fr}.kfs-head{flex-direction:column;align-items:flex-start}.kfs-head img{width:90px;height:90px;flex-basis:90px}.kfs-scale .kfs-opt{width:42px;height:42px}}';

  const SCRIPT_SRC = (document.currentScript && document.currentScript.src) || '';
  const GIF = SCRIPT_SRC ? SCRIPT_SRC.replace(/[^\/]*$/, '') + 'images/just-checking-in-on-you-peek.gif' : '';

  function init(){
    const C = window.COURSE;
    // Needs the shared course engine (its globals: MODS, BLOCK, SIMS, flag, setFlag, ctaHTML…). Anything else: do nothing.
    if (!C || !C.id || typeof MODS === 'undefined' || typeof BLOCK === 'undefined' || typeof SIMS === 'undefined' || typeof ctaHTML !== 'function') return;
    const lang = C.lang || window.LANG || 'en';
    const X = T[lang] || T[String(lang).split('-')[0]] || T.en, S = X.s;
    const KEY = 'kl-final-survey-' + C.id;
    const last = MODS[MODS.length - 1];

    const st = document.createElement('style'); st.id = 'kfs-style'; st.textContent = css; document.head.appendChild(st);

    // The survey: a section at the end of the last module, and one more step before its check
    BLOCK.fsurvey = () => '<div class="kfs" data-fsurvey></div>';
    if (!last.sections.some(s => s.id === 'fsurvey')) last.sections.push({ id:'fsurvey', e:'💬', title:X.sec, blocks:[{ t:'fsurvey' }] });
    last.needs = (last.needs || []).filter(f => f !== FLAG).concat(FLAG);
    SIMS[FLAG] = { flag:FLAG, title:X.sec, src:'' };     // registered like a simulation, so developer mode unlocks it too
    if (store(KEY) && !flag(FLAG)) setFlag(FLAG, true);  // already sent in this browser
    if (P.dev && !flag(FLAG)) setFlag(FLAG, true);

    // Lock message of the last module: say that the survey is missing
    const prevCta = ctaHTML;
    ctaHTML = function(m){
      let h = prevCta(m);
      if (m === last && !flag(FLAG)){
        const others = simsMissing(m).filter(f => f !== FLAG).length;
        h = h.replace(/<div class="lockmsg">[\s\S]*?<\/div>/, '<div class="lockmsg">' + (others ? UI.lockSim + '<br>' : '') + S.lockMsg + '</div>');
      }
      return h;
    };

    function prefill(){
      try { const s = JSON.parse(store('kl-start-survey-' + C.id) || 'null'); if (s) return { email:s.email || '', region:s.region || '' }; } catch(e){}
      return { email:'', region:REGION_BY_LANG[lang] || REGION_BY_LANG[String(lang).split('-')[0]] || '' };
    }

    function render(box){
      box.dataset.ready = '1';
      const head = '<div class="kfs-head">' + (GIF ? '<img src="' + esc(GIF) + '" alt="">' : '') + '<div><h3>' + esc(X.title) + '</h3><p>' + esc(X.intro) + '</p></div></div>';
      if (store(KEY)){ box.innerHTML = head + '<div class="kfs-done">' + S.thanks + ' ' + esc(S.unlocked) + '</div>'; return; }
      const pre = prefill();
      const qHTML = GROUPS.map(g => '<p class="kfs-g">' + esc(X.groups[g.key]) + '</p>' + g.q.map(([id, type, optional]) => {
        let body;
        if (type === 'open') body = '<textarea class="kfs-open" placeholder="' + esc(S.openPlaceholder) + '"></textarea>';
        else if (type === 'choice') body = '<div class="kfs-opts">' + X.feelings.map(o => '<button type="button" class="kfs-opt" data-v="' + esc(o[0]) + '">' + esc(o[1]) + '</button>').join('') + '</div>';
        else if (type === 'length') body = '<div class="kfs-opts">' + X.lengths.map(o => '<button type="button" class="kfs-opt" data-v="' + esc(o[0]) + '">' + esc(o[1]) + '</button>').join('') + '</div>';
        else body = '<div class="kfs-opts kfs-scale"><small>' + esc(S.low) + '</small>' + [1,2,3,4,5].map(n => '<button type="button" class="kfs-opt" data-v="' + n + '">' + n + '</button>').join('') + '<small>' + esc(S.high) + '</small></div>';
        return '<div class="kfs-q' + (optional ? ' opt' : '') + '" data-q="' + id + '" data-type="' + type + '"' + (optional ? ' data-optional="1"' : '') + '><p class="kfs-qt">' + esc(X.q[id]) + (optional ? ' <em>(' + esc(S.optional) + ')</em>' : '') + '</p>' + body + '</div>';
      }).join('')).join('');
      box.innerHTML = head + '<div class="kfs-body"><div class="kfs-id">' +
        '<div><label>' + esc(S.emailLabel) + '</label><input type="email" class="kfs-email" placeholder="' + esc(S.emailPlaceholder) + '" value="' + esc(pre.email) + '" autocomplete="email"></div>' +
        '<div><label>' + esc(S.regionLabel) + '</label><select class="kfs-region"><option value="">' + esc(S.regionPlaceholder) + '</option>' +
          X.regions.map(r => '<option value="' + esc(r[0]) + '"' + (r[0] === pre.region ? ' selected' : '') + '>' + esc(r[1]) + '</option>').join('') + '</select></div>' +
        '</div>' + qHTML +
        '<div class="kfs-foot"><button type="button" class="kfs-send">' + esc(S.send) + '</button><span class="kfs-msg" aria-live="polite"></span></div></div>';

      box.addEventListener('click', e => {
        const o = e.target.closest('.kfs-opt');
        if (o){ const q = o.closest('.kfs-q'); q.querySelectorAll('.kfs-opt').forEach(b => b.classList.toggle('on', b === o)); q.classList.remove('miss'); return; }
        if (e.target.closest('.kfs-send')) send(box);
      });
      box.addEventListener('input', e => { const q = e.target.closest('.kfs-q'); if (q) q.classList.remove('miss'); });
    }

    function send(box){
      const msg = box.querySelector('.kfs-msg'), btn = box.querySelector('.kfs-send');
      const emailEl = box.querySelector('.kfs-email'), regionEl = box.querySelector('.kfs-region');
      const email = emailEl.value.trim(), reg = regionEl.value;
      msg.className = 'kfs-msg';
      if (!/^[^@\s]+@kodland\.[a-z.]+$/i.test(email)){ msg.className = 'kfs-msg err'; msg.textContent = S.emailError; emailEl.focus(); return; }
      if (!reg){ msg.className = 'kfs-msg err'; msg.textContent = S.regionError; regionEl.focus(); return; }
      const answers = {}; let missing = false;
      box.querySelectorAll('.kfs-q').forEach(q => {
        const id = q.dataset.q;
        if (q.dataset.type === 'open'){ const v = q.querySelector('textarea').value.trim(), opt = !!q.dataset.optional; q.classList.toggle('miss', !v && !opt); answers[id] = v; if (!v && !opt) missing = true; return; }
        const on = q.querySelector('.kfs-opt.on'); q.classList.toggle('miss', !on);
        if (on) answers[id] = on.dataset.v; else missing = true;
      });
      if (missing){ msg.className = 'kfs-msg err'; msg.textContent = S.missing; const m = box.querySelector('.kfs-q.miss'); if (m && m.scrollIntoView) m.scrollIntoView({ block:'center', behavior:'smooth' }); return; }
      const payload = Object.assign({ survey:'final', training:'EM-COURSE-' + C.id, course:(C.title || '').replace(/<[^>]*>/g, ''), lang:C.lang || lang, email, region:reg, sent_at:new Date().toISOString() }, answers);
      btn.disabled = true; msg.textContent = S.sending;
      let done = false;
      function finish(){
        if (done) return; done = true;
        store(KEY, JSON.stringify(payload));
        setFlag(FLAG, true);
        box.querySelector('.kfs-body').innerHTML = '<div class="kfs-done">' + S.thanks + ' ' + esc(S.unlocked) + '</div>';
        if (findMod(curId()) === last) refreshCTA(last);
      }
      if (!SURVEY_URL){ console.warn('[Final survey] SURVEY_URL is empty: answers not sent', payload); finish(); return; }
      try {
        // text/plain avoids the CORS preflight that Apps Script doesn't answer; no-cors = fire and forget
        fetch(SURVEY_URL, { method:'POST', mode:'no-cors', headers:{ 'Content-Type':'text/plain;charset=utf-8' }, body:JSON.stringify(payload) }).then(finish, finish);
      } catch(err){ finish(); }
    }

    // Fill the survey box every time the last module is drawn
    function scan(){ document.querySelectorAll('[data-fsurvey]:not([data-ready])').forEach(render); }
    const view = document.getElementById('view');
    if (view) new MutationObserver(scan).observe(view, { childList:true });
    route();   // draw the current page again, now with the survey section
    scan();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
