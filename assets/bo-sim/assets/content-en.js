/* ============================================================
   Backoffice simulation · ENGLISH content
   Translate only the text inside quotes / backticks. Keep HTML tags, ${...} placeholders, keys, ids, file names and URLs unchanged.
   ============================================================ */
window.CONTENT = { lang: 'en' };

/* ---------- PAGE CHROME, BO SCREENS, TOASTS ---------- */
CONTENT.ui = {
  pageTitle:'New Educational Model — BO Simulation — Kodland Training',
  simBadge:'🧪 SIMULATION — Kodland Training (fictional data)',
  tourBtn:'🚀 Start guided walkthrough',
  tourMinimize:'Minimize ▾', tourResume:'📍 Resume guided walkthrough',
  stepOf:'Step {n} of {total}', nextArrow:'Next →', finish:'Finish ✓',
  groupsTitle:'Groups', tabExtra:'Extra Lessons', tabParallel:'Parallel Groups', tabRegular:'Regular Groups',
  emptyRegular:'No groups to show in this simulation — open <b>Courses</b> in the sidebar.',
  colID:'ID', colTitle:'Title', colTutor:'Tutor', colType:'Type', colCurrentCourse:'Current course', colStart:'Start',
  colStudentsPaid:'Students/Paid', colPreviousLesson:'Previous lesson', colNextLesson:'Next lesson', colPremium:'Premium',
  containerType:'Group', no:'No', yes:'Yes',
  itemsPage100_1:'Items per page: 100 &nbsp;|&nbsp; 1-1 of 1', itemsPage10_4:'Items per page: 10 &nbsp;|&nbsp; 1-4 of 4',
  itemsPage100_19:'Items per page: 100 &nbsp;|&nbsp; 1-9 of 9',
  backToGroups:'Back to Groups', backToCourses:'Back to Courses', backToAssignments:'Back to Assignments',
  tutorLabel:'Tutor:', openConsoleTip:'Open console', colLessonTime:'Lesson time', colCourse:'Course', colNextTopic:'Next lesson topic',
  simOpenCourseFromDetail:'Open the course record from here too',
  teacherName:'Demo Teacher', teacherCountry:'🌎 LatAm',
  profileTitle:'Profile', teacherCoursesH:'Teacher courses', availabilityH:'Availability hours', notAssigned:'Not assigned',
  groupsTabLbl:'Groups', scheduleTabLbl:'Schedule', regularGroupsNote:'Your groups list.',
  currentWeek:'Current Week', available:'Available',
  days:['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
  coursesTitle:'Courses', colBusinessBranch:'Business branch', colActive:'Active', colNumberOfLessons:'Number of lessons',
  badgeActive:'Active', fieldBranch:'Business branch: ENG', fieldLanguage:'Language: English 🇬🇧', fieldCourseType:'Course type: Paid courses',
  fieldCourseGroup:'Course group: Code & Game lvl 1', fieldLessons:'Number of lessons: 40', fieldModules:'Number of modules: 10',
  fieldExcluded:'Excluded from overbooking: No', fieldCertificate:'Certificate: —',
  lessonsTab:'Lessons', assignmentsTab:'Assignments', moduleFirstSteps:'M1. Creator Lab: first missions', viewAssignments:'View assignments →',
  colNo:'Nº', colActions:'Actions',
  lessonSelectLbl:'Lesson', lessonOption:'L1. Dance Party: bringing the stage to life',
  inClassH:'In-class assignments', homeworkH:'Homework assignments', studyGuidesH:'Study guides',
  colNumber:'Number', colAssignmentTitle:'Assignment title', colTheory:'Theory', colProject:'Project', colMaxScore:'Max score',
  interactive:'INTERACTIVE', noData:'No data available',
  noWikiNote:'No wiki links here — that\'s intentional. In the new educational model courses, the tutor\'s guide lives inside the activities themselves, as Teacher Notes, not as a separate wiki document.',
  modalGroups:'GROUPS', modalExit:'Exit', modalOpenConsole:'Open Console',
  toastConsoleDetail:'🔗 This opens the Classroom link for this group.',
  toastConsoleModal:'🔗 This is the same Classroom link, reached from your Schedule.',
  toastSimClick:'🧪 This is a simulation — in the real BO, this would: "{label}".',
  toastBlocked:'👉 Follow the highlighted step to continue — the walkthrough is required the first time through.',
  reflect:'🎉 <strong>Walkthrough complete!</strong> You now know how to open a new-model course from Courses, where its lessons and activities are, why there is no wiki link, and where to find the Teacher Notes inside each activity. Feel free to keep exploring this replica on your own.',
  /* Assignment titles in the "In-class assignments" table (same order as the rows) */
  inClass:['Start the first Creator Lab mission! 💃','Welcome to Creator Lab! 👋','Let’s get to know each other! 🎤','Creative team agreement 🤝','Check that you’re connected 📡','What is Creator Lab? ✨','Download and open the project 📥','Check what already works 🔎','Discover how the blocks work 🧩'],
  homework:[]
};

/* ---------- LESSON VIEWER (Teacher Note + student card) ---------- */
CONTENT.lesson = {
  lessonCrumb:'My courses &gt; Start the first Creator Lab mi...', teacherNoteBadge:'👁 Teacher note — only tutors see this block',
  lessonTitle:'Preparing for the lesson · Dance Party: bringing the stage to life',
  hOverview:'Lesson overview',
  pOverview:'This is the first lesson of the Code & Game lvl 1 programme (Creator Lab: Games and AI, ages 8–9). Students get to know Creator Lab, explore a ready-made prototype in Scratch and create their own interactive Dance Party show on the Kodland Sparks platform. The main goal is to understand the “event → action → result” relationship, get a working project quickly and use AI safely as a creative assistant.',
  hMission:'Lesson story mission',
  pMission:'The students enter the secret creative lab, Creator Lab. Their first mission is “Bring the digital stage to life”: use code and AI to create a dance show where keys trigger movements, sounds, costume changes and visual effects.',
  hGoal:'Main lesson goal',
  pGoal:'Help each student create a personalised interactive show and explain in simple words how an event — pressing a key — triggers a character action and produces a visible result.',
  hResult:'Key result',
  resultItems:['The Dance Party project runs and works in Scratch inside Kodland Sparks.','The show includes a character and music chosen by the student, plus a background created with the help of AI.','The character responds to a key press with a movement, a costume change, a sound or an effect.','The student presents their project and explains at least one “event → action → result” relationship.'],
  calloutLbl:'Before you teach', callout:'Watch the lesson video below and read the notes of every card — the guide for the whole lesson lives here, not in a wiki.',
  videoTag:'LESSON 1', videoTitle:'Creator Lab: Dance Party — what to focus on',
  videoDesc:'The first lesson explained for the tutor: the goal, the deductive flow and the moments that need your attention. ▶',
  hRole:'The tutor\'s role',
  pRole1:'Introduce the students to the Creator Lab story and show the finished dance show as a reference for the final result. Guide them from exploring the prototype to choosing the character, the music and the AI-made background, and creating at least two reactions to different keys.',
  pRole2:'Support with clarifying questions, short hints and recognition for creativity, independent decisions and fixed mistakes. Supervise the safe use of Sandbox Spark and AI Buddy, <b>without letting the AI build the mechanics instead of the student.</b>',
  hFocus:'Methodological approach',
  pFocus1:'Start by showing the final result and exploring the ready-made prototype. Introduce the theory through observation: the student presses a key, sees the character’s reaction and formulates the “event → action → result” relationship.',
  pFocus2:'Keep the Learning Loop: <b>goal → attempt → difficulty → support → improvement → showcase → reflection.</b> Present mistakes as a normal part of the creative process.',
  pFocus3:'Let the student choose the character, the music, the movements, the effects, the wording of the AI request and the AI-made background. The final decisions about the project must be theirs.',
  hImportant:'Important points',
  importantItems:['Use short instructions, plenty of visual support and a single activity per card.','Check that the student has added at least two different reactions to key presses and has tested each one.','Do not add scores, win or lose conditions, variables, complex conditions, lists, clones or messages between sprites.','Check that the AI requests contain no personal data and are created only inside the safe Kodland Spark environment.'],
  hEnding:'Lesson closing',
  pEnding:'Hold a short showcase of the projects. Ask the students to explain which key triggers the action they chose, and to give feedback using this formula: “I liked… I would add…”. End with a project self-check.',
  hNext:'Next lesson',
  pNext:'In lesson M01L02, “Portal Guardian: the hero and the crystals”, the students will start their first game mechanic: moving the character and collecting objects.',
  studentTitle:'Start the first Creator Lab mission! 💃',
  studentLead:'You will bring a digital stage to life and create your own dance show that reacts when you press different keys.',
  hEquip:'⌨️ Check your equipment', equipItems:['Check your keyboard: you’ll use it to control the dance show.'],
  hSpace:'✨ Get your workspace ready', spaceItems:['Sit so that you can work comfortably on the project and use the keyboard.','Get ready to choose your character, your music, your moves and the background of your stage.'],
  tipLbl:'💡 Today\'s mission', tipBody:'Explore a dance show that already works, then turn it into your own: your character, your music, your background and your moves.'
};

/* ---------- GUIDED TOUR STEPS (same order as STEPS in the page) ---------- */
CONTENT.steps = [
  {title:'1 · Open the course',body:'To see a course\'s content you go through <b>Courses</b>, not through Groups. Click on <b>[2063] Code &amp; Game. Level 1</b>.'},
  {title:'2 · The course record',body:'Business branch, language, number of lessons and modules — the same fields as any course. The new model doesn\'t change how a course is registered in BO.'},
  {title:'3 · Open Assignments',body:'Click the <b>Assignments</b> tab.'},
  {title:'4 · The lesson\'s activities',body:'These interactive cards ARE the lesson content — instructions, tips, images and videos, all inside each card. There\'s no separate presentation to teach from.'},
  {title:'5 · No wiki link — on purpose',body:'The <b>Study guides</b> table is empty. That\'s not a bug: in the new model, the guide for the tutor lives inside the activities themselves as Teacher Notes — not as a separate wiki document.'},
  {title:'6 · Open the first activity',body:'Click on <b>Start the first Creator Lab mission!</b> to see what a Teacher Note looks like from the inside.'},
  {title:'7 · The tutor\'s note, right inside the card',body:'There\'s no separate "tutor" tab — it\'s the same scrollable card. This dashed, orange-bordered block is a <b>Teacher Note</b>. The first card of a lesson has the most complete one: overview, story mission, goal, your role, the method, important points, the closing and the next lesson. Only tutors ever see this block.'},
  {title:'8 · Scroll down: what the student sees',body:'Right below it, in the same card, is what the student actually sees: the mission and the checklist to get ready. No Teacher Note, no toggle — the platform simply never shows that block to a student account.'}
];

/* ---------- FINISH SCREEN (completion code overlay) ---------- */
CONTENT.done = {
  title:'Simulation complete!',
  body:'You’ve finished the BO walkthrough: opening a new-model course, its assignments, why there’s no wiki, and the Teacher Notes inside each activity.',
  codeLabel:'🔑 Your completion code',
  codeHint:'Enter it in the training to complete this simulation.',
  nextStep:'<b>Next step:</b> copy the code, close this tab and go back to the training.',
  stay:'Keep exploring',
  close:'Close and return to the training',
  closedMsg:'<b>You can close this tab now</b> and continue in the training tab.'
};
