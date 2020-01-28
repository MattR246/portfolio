const DATA = {
    name: "Matt Ruehling",
    role: "Full Stack Developer",
    description: "Web Developer - Musician - Gamer", // </>, (a bass guitar symbol), (ps4 controller) Object containing things about me?
    social: [
        {
          id: 1,
          platform: "linkedin",
          url: "https://www.linkedin.com/in/matt-ruehling-562b65b0/",
          icon: "fab fa-linkedin fa-3x"
        },
        {
          id: 2,
          platform: "github",
          url: "https://github.com/MattR246",
          icon: "fab fa-github fa-3x"
        }
      ],
    about: "I am a self taught Full Stack Web Developer, with a preference for the Front End. I've always been fascinated with the Internet and decided to dig into that fascination and learn the technologies that drive it. I have an eye for detail and enjoy solving problems. I strive to always be continually learning and improving my abilities. In my free time, I enjoy playing video games and bass guitar.",
    portfolio: [
      {
        id: 1,
        project: "Smart Brain",
        description: "This project will find a face in a given image. React project utilizing Clarifai API. Connected to a server and database. Completed as the final project for Andrei Neagoie's \"The Complete Web Developer in 2019: Zero to Mastery\" Udemy Course. ",
        link: "https://thesmartbrain.herokuapp.com/"
      },
      {
        id: 2,
        project: "Robot Masters",
        description: "This React + Redux project allows one to search the Robot Masters from Megaman 2 though 5. Modification of a project completed in Andrei Neagoie's \"The Complete Web Developer in 2019: Zero to Mastery\" Udemy Course. ",
        link: "https://mattr246.github.io/robofoes/"
      },
      {
        id: 3,
        project: "Web Store",
        description: "This mock web store project allows users to add items to their cart and purchase the items. A React project using Redux, Redux-Sagas and Hooks. Firebase is used to handle and store users and the shop items. The Back-End has been implemented to handle Stripe payments. This project is part of Andrei Neagoie's and Yihua Zhang's \"Complete React Developer in 2019\" Udemy course. ",
        link: "https://project-crwn-clothing-live.herokuapp.com/"
      }
    ]
  }
  
  export default DATA;