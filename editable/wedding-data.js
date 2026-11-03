/**
 * wedding-data.js — Customer-facing editable data layer for wax-seal-royale
 * Configured for Harshit & Disha Wedding Celebrations
 */

window.WEDDING_DATA = {
  couple: {
    groom: "Harshit",
    bride: "Disha",
    groomFull: "Harshit Gupta",
    brideFull: "Disha Varshney",
    groomGrandParents: "Smt. Late Ramvati Devi & Late Shri Shankar Lal Gupta",
    groomParents: "Mrs. Sandhya Gupta & Mr. Hariom Gupta",
    brideGrandParents: "Smt. Pushplata Varshney & Shri Mahesh Chand Varshney",
    brideParents: "Mrs. Kumkum Varshney & Mr. Lokesh Varshney",
    subtitle: "॥ श्री गणेशाय नमः ॥<br />Two Souls, One Destiny, Blessed by the Divine",
    hashtag: "#HarshitWedsDisha",
  },

  wedding: {
    dateLabel: "26.11.26",
    longDate: "Thursday, 26 November 2026",
    dateISO: "2026-11-26T11:00:00+05:30",
    invitationNote: "With the divine grace of God and blessings of our elders,<br /><strong>Mrs. Sandhya Gupta & Mr. Hariom Gupta</strong><br />cordially invite you to celebrate the joyous wedding ceremony of their son<br /><span class=\"inv-couple-names\"><span class=\"inv-c-name\">Harshit</span><span class=\"inv-c-amp\">&amp;</span><span class=\"inv-c-name\">Disha</span></span>",
  },

  family: {
    groom: {
      name: "Harshit",
      grandRelation: "Grand S/o Smt. Late Ramvati Devi & Late Shri Shankar Lal Gupta",
      parentsRelation: "S/o Mrs. Sandhya Gupta & Mr. Hariom Gupta",
    },
    bride: {
      name: "Disha",
      grandRelation: "Grand D/o Smt. Pushplata Varshney & Shri Mahesh Chand Varshney",
      parentsRelation: "D/o Mrs. Kumkum Varshney & Mr. Lokesh Varshney",
    },
  },

  address: {
    residence: "14/100 Moti Mill Compound, Achal Tal, Aligarh - 202001",
    city: "Aligarh, Uttar Pradesh",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Moti+Mill+Compound+Achal+Tal+Aligarh+202001",
  },

  specialRequest: [
    "Mrs. Meera & Mr. Naresh Chand Gupta",
    "Mrs. Raj Rani Gupta",
    "Mrs. Brijesh & Mr. Pawan Gupta",
    "Mrs. Khushboo & Mr. Yatendra Gupta",
    "Mrs. Sakshi Gupta & ENGG Jatin Varshney",
    "Bhawna Gupta",
  ],

  withWarmRegards: {
    title: "WITH WARM REGARDS (AWAITING EYES)",
    name: "Mr. Shantanu Gupta (Lavi)",
    phone: "9548916969",
    phoneLink: "tel:+919548916969",
    whatsappLink: "https://wa.me/919548916969",
  },

  withBestCompliments: {
    title: "WITH BEST COMPLIMENTS",
    members: [
      "Mr. Om Prakash Gupta",
      "Mr. Dushyant Gupta",
      "Mr. Mahesh Gupta",
      "Mr. Rahul Gupta",
      "Mr. Yogesh Gupta",
      "Nakul, Udit, Krishna, Raghav, Yashi",
    ],
  },

  functions: [
    {
      num: 1,
      name: "Haldi Hungama",
      date: "25 - November - 2026",
      day: "Wednesday",
      time: "11:00 AM onwards",
      venue: "Mango lawn (opp. to bar)",
      dressCode: "Pretty in pastels",
      badge: "Haldi",
    },
    {
      num: 2,
      name: "Mastani Shaam",
      date: "25 November 2026",
      day: "Wednesday",
      time: "5:00 PM onwards",
      venue: "Mango Courtyard",
      dressCode: "Glamour Edit",
      badge: "Sangeet",
    },
    {
      num: 3,
      name: "Jashan - e - Barat",
      date: "26 November 2026",
      day: "Thursday",
      time: "11:00 AM",
      venue: "",
      dressCode: "Timeless Traditionals",
      badge: "Barat",
    },
    {
      num: 4,
      name: "Vivah Sankalp",
      date: "26 November 2026",
      day: "Thursday",
      time: "12:00 PM onwards",
      venue: "Kosi Deck",
      dressCode: "",
      badge: "Wedding",
    },
    {
      num: 5,
      name: "Prem Mala",
      subtitle: "A varmala ceremony",
      date: "26 November 2026",
      day: "Thursday",
      time: "8:00 PM",
      venue: "Kosi Deck - river side lawn",
      dressCode: "",
      badge: "Varmala",
    },
    {
      num: 6,
      name: "Jal Mata Celebration",
      date: "26 November 2026",
      day: "Thursday",
      time: "8:00 PM onwards",
      venue: "The Radha Van, Agra Road, Aligarh",
      dressCode: "",
      badge: "Celebration",
    },
    {
      num: 7,
      name: "Gala Celebration",
      date: "26/30 November 2026",
      day: "",
      time: "7:30 PM onwards",
      venue: "Rudraksh Lawn",
      dressCode: "",
      badge: "Gala",
    },
    {
      num: 8,
      name: "Pyaar Bhari Vidai",
      date: "1 December 2026",
      day: "Tuesday",
      time: "10:00 AM",
      venue: "",
      dressCode: "",
      badge: "Vidai",
    },
  ],

  // Standard 5-row schedule for backwards compatibility
  schedule: [
    { title: "Haldi Hungama", time: "25 Nov · 11:00 AM" },
    { title: "Mastani Shaam", time: "25 Nov · 5:00 PM" },
    { title: "Jashan - e - Barat", time: "26 Nov · 11:00 AM" },
    { title: "Vivah Sankalp & Prem Mala", time: "26 Nov · 12:00 PM" },
    { title: "Gala Celebration", time: "26/30 Nov · 7:30 PM" },
  ],

  venue: {
    name: "The Radha Van & Associated Venues",
    address: "14/100 Moti Mill Compound, Achal Tal, Aligarh - 202001",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=Moti+Mill+Compound+Achal+Tal+Aligarh+202001",
  },

  details: {
    giftPreference: "Your warm presence and heartfelt blessings are our greatest gift.",
    dressCode: "Pretty in pastels · Glamour Edit · Timeless Traditionals.",
  },

  media: {
    monogram: "./editable/assets/monogram.png",
    monogramTight: "./editable/assets/monogram-tight.png",
    overlayImage: "./editable/assets/ChatGPT Image Jun 23, 2026, 04_40_29 PM.png",
    sealVideo: "./editable/assets/1782224012851.mp4",
    heroVideo: "./editable/assets/Swans2.mov",
    audio: "./editable/assets/Einaudi_ Divenire (1) (1).mp3",
  },
};
