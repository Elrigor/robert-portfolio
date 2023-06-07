export const technologyData = {
    ReactJS: {
      color: "#61DAFB",
      link: "https://reactjs.org/",
    },
    Django: {
      color: "#092E20",
      link: "https://www.djangoproject.com/",
    },
    Python: {
      color: "#FFD43B",
      link: "https://www.python.org/",
    },
    HTML: {
      color: "#E34C26",
      link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    CSS: {
      color: "#264de4",
      link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    JS: {
      color: "#F7DF1E",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    Bootstrap: {
      color: "#7952B3",
      link: "https://getbootstrap.com/",
    },
    "Material UI": {
      color: "#0081CB",
      link: "https://mui.com/",
    },
    Heroku: {
      color: "#430098",
      link: "https://www.heroku.com/",
    },
    AWS: {
      color: "#FF9900",
      link: "https://aws.amazon.com/",
    },
    PostgreSQL: {
      color: "#336791",
      link: "https://www.postgresql.org/",
    },
    Firebase: {
      color: "#FFCB2B",
      link: "https://firebase.google.com/",
    },
    VueJS: {
      color: "#41B883",
      link: "https://vuejs.org/",
    },
    Vuetify: {
      color: "#1867C0",
      link: "https://vuetifyjs.com/",
    },    
    Angular: {
      color: "#DD0031",
      link: "https://angular.io/",
    },
    TypeScript: {
      color: "#007ACC",
      link: "https://www.typescriptlang.org/",
    },
    PHP: {
      color: "#777BB4",
      link: "https://www.php.net/",
    },
    Laravel: {
      color: "#FF2D20",
      link: "https://laravel.com/",
    },
    NuxtJS: {
      color: "#00C58E",
      link: "https://nuxtjs.org/",
    },
    WordPress: {
      color: "#5accff",
      link: "https://wordpress.org/",
    },
    Wix: {
      color: "#7FBA00",
      link: "https://www.wix.com/",
    },
    SQLite: {
      color: "#0f6087",
      link: "https://www.sqlite.org/",
    },
    Wagtail: {
      color: "#2e1f5e",
      link: "https://wagtail.io/",
    },
    JQuery: {
      color: "#0769AD",
      link: "https://jquery.com/",
    },    
    i18n: {
      color: "#E6A400",
      link: "https://www.i18next.com/",
    },    
    DiscordPY: {
      color: "#7289DA",
      link: "https://discordpy.readthedocs.io/",
    },
    DiscordJS: {
      color: "#5865F2",
      link: "https://discord.js.org/",
    },
    Tailwind: {
      color: "#38B2AC",
      link: "https://tailwindcss.com/",
    },
        
  };
  
  
  export const getTextColor = (backgroundColor) => {
    const r = parseInt(backgroundColor.substr(1, 2), 16);
    const g = parseInt(backgroundColor.substr(3, 2), 16);
    const b = parseInt(backgroundColor.substr(5, 2), 16);
  
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  
    return brightness > 125 ? "#000000" : "#ffffff";
  };