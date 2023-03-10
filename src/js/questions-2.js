var questions = [
  {
    type: "choose",
    question: "<h3>Яку позицію займала Українська Центральна Рада у відносинах з Тимчасовим урядом Росії?</h3>",
    answers: [
      "намагалась знайти компроміс",
      "ігнорувала будь-які спроби Тимчасового уряду налагодити переговорний процес",
      "підбурювала неросійські народи до розвалу Російської імперії"
    ],
    correct: [1]
  },
  {
    type: "choose",
    question: "<h3>Українська Центральна Рада створена в</h3>",
    answers: [
      "липні 1917 р.",
      "листопаді 1917 р",
      "березні 1917 р."
    ],
    correct: [3]
  },
  {
    type: "choose",
    question: "<h3>Яке гасло українського національно-визвольного руху відповідає змісту Першого Універсалу Української Центральної Ради?</h3>",
    answers: [
      "«Автономію Україні!»",
      "«Геть Тимчасовий уряд!»",
      "«Хай живе незалежна Україна!»"
    ],
    correct: [1]
  },
  {
    type: "choose",
    question: "<h3>Ухвалення якого Універсалу Української Центральної Ради дало поштовх до створення Генерального Секретаріату?</h3>",
    answers: [
      "Четвертого",
      "Другого",
      "Першого"
    ],
    correct: [3]
  },
  {
    type: "choose",
    question: "<h3>Кримська Народна Республіка була</h3>",
    answers: [
      "радянською республікою, створеною у Криму більшовиками",
      "результатом самовизначення кримськотатарського народу",
      "автономною одиницею Української Народної Республіки"
    ],
    correct: [2]
  },
  {
    type: "choose",
    question: "<h3>Коли було підписано ІV Універсал УЦР?</h3>",
    answers: [
      "10 червня 1917 року",
      "22 січня 1918 року",
      "3 липня 1917 року",
    ],
    correct: [2]
  },
  {
    type: "choose",
    question: "<h3> Яка подія прискорила прийняття УЦР Четвертого універсалу?</h3>",
    answers: [
      "наступ більшовицьких військ на Київ і прагнення підписати мирний договір із країнами Четвертного союзу",
      "більшовицький переворот У Петрограді та повалення Тимчасового уряду Росії.",
      "завершення Першої світової війни і проголошення Західноукраїнської Народної Республіки."
    ],
    correct: [1]
  },
  {
    type: "choose",
    question: "<h3>Яким був привід до початку Української революції в 1917 р.?</h3>",
    answers: [
      "початок Листопадової революції в Німеччині та повалення монархії",
      "початок революції в Росії та повалення монархії",
      "піднесення українського національно-визвольного руху в роки Першої світової війни"
    ],
    correct: [2]
  },
  {
    type: "choose",
    question: "<h3>Як поставився Тимчасовий уряд до виголошення Центральною Радою І Універсалу:</h3>",
    answers: [
      "схвалив документ",
      "висловив надію на співпрацю",
      "засудив як злочинний і сепаратистський"
    ],
    correct: [3]
  },
  {
    type: "choose",
    question: "Якої умови НЕ БУЛО в Брест-Литовському мирному договорі?",
    answers: [
      "Зобов’язання УНР поставляти продовольство до Німеччини",
      "Припинення війни між Україною та країнами Четвертного Союзу",
      "проголошення Української Радянської республіки"
    ],
    correct: [3]
  },
];

$("document").ready(function () {
  $("#jQuizler").jQuizler(questions);
});