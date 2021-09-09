export default {
  //   Header Details ---------------------
  name: "manisha",
  headerTagline: [
    //Line 1 For Header
    "",
    //Line 2 For Header
    "",
    //Line 3 For Header
    ""
  ],
  //   Header Paragraph
  headerParagraph: "",

  //Contact Email
  contactEmail: "mmanisha12mantri@gmail.com",
  // Home Secton Start --------------
  headtitle1: "Hello, I'm ",
  headtitle2: "Manisha Mantri",
  headtitle3: "I'm a full-stack developer.",
  headtitle4: "View my work",
  headicon1: <i className="fa fa-arrow-right" aria-hidden="true"></i>,
  navlink: [
    {
      opt: "Home",
      dest: "home"
    },
    {
      opt: "About",
      dest: "about"
    },
    {
      opt: "Projects",
      dest: "portfolio"
    },
    {
      opt: "Blog",
      dest: "blog"
    },
    {
      opt: "Contact",
      dest: "contact"
    },
    {
      opt: ""
    }
  ],
  toggleicon: <i className="fa fa-bars" aria-hidden="true"></i>,
  // Home Secton End --------------
  // About Secton --------------
  about: [
    {
      title: "Fast",
      para: " Fast load times and lag free interaction, my highest priority.",
      icon: <i className="fa fa-tachometer" aria-hidden="true"></i>
    },
    {
      title: "Responsive",
      para: " My layouts will work on any device, big or small.",
      icon: <i className="fa fa-mobile-phone" aria-hidden="true"></i>
    },
    {
      title: "Intuitive",
      para: " Strong preference for easy to use, intuitive UX/UI.",
      icon: <i className="fa fa-lightbulb-o" aria-hidden="true"></i>
    },
    {
      title: "Dynamic",
      para:
        "  Websites don't have to be static, I love making pages come to life.",
      icon: <i className="fa fa-rocket" aria-hidden="true"></i>
    }
  ],

  aboutImage: "images/me.jpg",
  aboutmepara1: "Hi I'm Manisha",
  aboutmepara2: "I'm a Front-End Developer ",
  aboutmepara3:
    "  I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences. I am hard working and passionate towards my work.",
  aboutmepara4: "Let's make something special.",
  aboutmelink1: "#",
  //   End About Section ---------------------

  // Blog Section start------------------------
  blog: [
    {
      title: "Breaking Your Coder's Block",
      para:
        "At one time or another, as a developer, we've all found ourselves hopelessly stuck on a coding issue...",
      url: "https://blog.eyecuelab.com/2016/04/29/breaking-your-coders-block/",
      img: "./images/blog-1.jpg"
    },
    {
      title: "!Awake: This is Your Brain on Caffeine",
      para:
        "If there's one thing I can truly claim to be an expert on, it's staying awake.",
      url:
        "https://blog.eyecuelab.com/2015/03/19/this-is-your-brain-on-caffeine/",
      img: "./images/blog-2.jpg"
    },
    {
      title: "Getting a Handle on Handlebars",
      para:
        " Here at EyeCue Lab we render most of our data-laden HTML pages in Handlebar templates...",
      url:
        "https://blog.eyecuelab.com/2015/03/04/getting-a-handle-on-handlebars/",
      img: "./images/blog-3.jpg"
    },
    {
      title: "5 Extensions for Your Chrome Tool belt",
      para:
        " If you're not using Google Chrome as a front-end web developer, you're missing out. Not only is Chrome the...",
      url: "https://blog.eyecuelab.com/2015/02/23/essential_extensions/",
      img: "./images/blog-4.jpg"
    }
  ],
  // End Blog Section -----------------------

  // Skills Section ---------------
  skills: [
    {
      name: "HTML",
      para: "",
      bar: "90%"
    },
    {
      name: "CSS",
      para: "",
      bar: "90%"
    },
    {
      name: "JavaScript",
      para: "",
      bar: "80%"
    },
    {
      name: "React",
      para: "",
      bar: "80%"
    },
    {
      name: "Node.js",
      para: "",
      bar: "65%"
    }
  ],
  // End Skills Section --------------------------
  // Work Section ------------------------
  projects: [
    {
      title: "To do App", //Project Title - Add Your Project Title Here
      para:
        "To do list app is used add and organize tasks fast. Also we can remove task or can update it easily.",
      url: "https://manisha-to-do-app-react-05-06-2021.netlify.app/"
    },
    {
      title: "ExpenseTracker", //Project Title - Add Your Project Title Here
      para:
        "Expense Tracker offers transaction management, transaction tracking, and transaction history to companies for internal use. A Javascript companion site for the Expense Tracker App.",
      url: "https://expense-tracker-ee4540.netlify.app/"
    }
  ],

  // End Work Section -----------------------
  // Project folio Section start------------------------
  folioProjects: [
    {
      head: "ALL",
      filter: "all",
      title: "To Do App",
      lang: "React JS",
      btnurl: "LEARN MORE"
    },
    {
      head: "REACT-JS",
      filter: ".react",
      title: "Expense Tracker",
      lang: "Vanilla JavaScript",
      btnurl: "LEARN MORE"
    },
    {
      head: "JAVASCRIPT",
      filter: ".js",
      title: "Burger Bar",
      lang: "React, Redux",
      btnurl: "LEARN MORE"
    },
    {
      title: "Weather Forecast",
      lang: "JavaScript",
      btnurl: "LEARN MORE"
    },
    {
      title: "Rock Paper Scissor",
      lang: "JavaScript",
      btnurl: "LEARN MORE"
    }
  ],

  // project folio Section End -----------------------
  //   Contact Section --------------

  contactSubHeading: "Let's create your next experience together",
  social: [
    {
      title: "Linkedin",
      url: "https://www.linkedin.com/in/manisha-mantri-60b449194/",
      icon: <i className="fa fa-linkedin" aria-hidden="true"></i>
    },
    {
      title: "Github",
      url: "https://github.com/Manisha12-96",
      icon: <i className="fa fa-github" aria-hidden="true"></i>
    },
    {
      title: "StackOverflow",
      url: "https://stackoverflow.com/users/15646263/manisha-mantri/",
      icon: <i className="fa fa-stack-overflow" aria-hidden="true"></i>
    }
  ],

  footernoteone: "MANISHA MANTRI",
  footernotetwo: "2021",
  footernotethree: " All rights reserved.",
  // End Contact Section ---------------
  contactinfoOne: "Have a question or want to work together?",
  contactinfoTwo: " Your message was sent successfully. Thanks!"
};
