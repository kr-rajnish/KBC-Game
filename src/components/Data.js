const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "National Animal of India?",
      answers: [
        {
          text: " Deep",
          correct: false,
        },
        {
          text: "Leopard",
          correct: false,
        },
        {
          text: " Tiger",
          correct: true,
        },
        {
          text: " Lion ",
          correct: false,
        },
      ],
    },
    {
      id: 4,
      question: "What is the National Tree of India?",
      answers: [
        {
          text: " Tamarind Tree",
          correct: false,
        },
        {
          text: "Banyan Tree",
          correct: true,
        },
        {
          text: " Neem Tree",
          correct: false,
        },
        {
          text: " Peepal Tree ",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "Who designed Indian National Flag? ",
      answers: [
        {
          text: "Dr. B.R.Ambedkat",
          correct: false,
        },
        {
          text: "Nehru",
          correct: false,
        },
        {
          text: " Dr. Sarvepalli Radhakrishnan",
          correct: false,
        },
        {
          text: "Pingali Venkayya",
          correct: true,
        },
      ],
    },
    {
      id: 6,
      question: "The motto on National Emblem is_______________.?",
      answers: [
        {
          text: "Jai Hind",
          correct: true,
        },
        {
          text: "Satyameva Jayate",
          correct: false,
        },
        {
          text: " Vruksho Rakshitha Rakshithaha",
          correct: false,
        },
        {
          text: " Vande mataram ",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "Who is the 'Bharat Ka Veer Putra Aaccording to the title of a 2013 TV Series?",
      answers: [
        {
          text: " Tipu Sultan",
          correct: false,
        },
        {
          text: "Chandragupta Maurya",
          correct: false,
        },
        {
          text: "Maharana Pratap",
          correct: true,
        },
        {
          text: " Ashoka ",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "In 2013, where did the natural calamity known as Himalayan tsunami occur?",
      answers: [
        {
          text: "Uttrakhand",
          correct: true,
        },
        {
          text: "Arunachal Pradesh",
          correct: false,
        },
        {
          text: " Arunachal Pradesh",
          correct: false,
        },
        {
          text: " Sikkim ",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "In the Ramayana, Which demon impersonated Rama's voice, screaming, 'Lakshman! Help me'?",
      answers: [
        {
          text: " Surpanakha",
          correct: false,
        },
        {
          text: "Khara",
          correct: false,
        },
        {
          text: " Maricha",
          correct: true,
        },
        {
          text: " Dushana ",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "With Which of these cards would you associate the phrase 'Aam Aadmi ka Adhikaar'?",
      answers: [
        {
          text: " PAN Card",
          correct: false,
        },
        {
          text: "Voter ID Card",
          correct: false,
        },
        {
          text: " AADHAR Card",
          correct: true,
        },
        {
          text: " Ration Card ",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "Which of these festivals is also known as 'Khichdi Parv' in northern India?",
      answers: [
        {
          text: " Vaishakhi",
          correct: false,
        },
        {
          text: "Makar Sankranti",
          correct: true,
        },
        {
          text: " Vasant Panchami",
          correct: false,
        },
        {
          text: " Narak Chaturdashi ",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "Which of these cricket tournaments is often referred to as the 'Mini World Cup'?",
      answers: [
        {
          text: " Natwest Series",
          correct: false,
        },
        {
          text: "Asia Cup",
          correct: false,
        },
        {
          text: " ICC Championship Trophy",
          correct: true,
        },
        {
          text: " Twenty20 World Cup ",
          correct: false,
        },
      ],
    },
    {
        id: 13,
        question: "Which is the largest banana producing country in the world?",
        answers: [
          {
            text: " Brazil",
            correct: false,
          },
          {
            text: "India",
            correct: true,
          },
          {
            text: "China",
            correct: false,
          },
          {
            text: " China",
            correct: false,
          },
        ],
      },
      {
        id: 14,
        question: " In the Ramayana, who reminded kaikeyi about the two boons given to her by Dasharatha?",
        answers: [
          {
            text: "Sumitra",
            correct: false,
          },
          {
            text: "Bharata",
            correct: false,
          },
          {
            text: "kaushaliya",
            correct: false,
          },
          {
            text: "Manthara",
            correct: true,
          },
        ],
      },
      {
        id: 15,
        question: "Other than football, which of the following games also has a striker?",
        answers: [
          {
            text: " Carrom",
            correct: true,
          },
          {
            text: "Ludo",
            correct: false,
          },
          {
            text: "Chess",
            correct: false,
          },
          {
            text: "Kho Kho",
            correct: false,
          },
        ],
      },
      {
        id: 16,
        question: "If you achieve the highest title in chess, what would you be called?",
        answers: [
          {
            text: "Grand Master",
            correct: true,
          },
          {
            text: "Master Blaster",
            correct: false,
          },
          {
            text: "Litle Master",
            correct: false,
          },
          {
            text: "Chess King",
            correct: false,
          },
        ],
      },
      {
        id: 17,
        question: "Mughal emperor Babur was a descendant of which ruler from his mother's side?",
        answers: [
          {
            text: "Muhammad Ghori",
            correct: false,
          },
          {
            text: "Timur",
            correct: false,
          },
          {
            text: "Genghis Khan",
            correct: true,
          },
          {
            text: "Mahmud of Ghazni",
            correct: false,
          },
        ],
      },

  ];
  export default data;