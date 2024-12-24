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
  MaterialUI: {
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
  NextJS: {
    color: "#000000",
    link: "https://nextjs.org/",
  },
  Electron: {
    color: "#2B2E3B",
    link: "https://www.electronjs.org/",
  },
  Svelte: {
    color: "#FF3E00",
    link: "https://svelte.dev/",
  },
  Ruby: {
    color: "#CC342D",
    link: "https://www.ruby-lang.org/",
  },
  Rails: {
    color: "#CC0000",
    link: "https://rubyonrails.org/",
  },
  Kotlin: {
    color: "#0095D5",
    link: "https://kotlinlang.org/",
  },
  Flutter: {
    color: "#02569B",
    link: "https://flutter.dev/",
  },
  Docker: {
    color: "#2496ED",
    link: "https://www.docker.com/",
  },
  Kubernetes: {
    color: "#326CE5",
    link: "https://kubernetes.io/",
  },
  GraphQL: {
    color: "#E10098",
    link: "https://graphql.org/",
  },
  Prisma: {
    color: "#2D3748",
    link: "https://www.prisma.io/",
  },
  MongoDB: {
    color: "#47A248",
    link: "https://www.mongodb.com/",
  },
  Strapi: {
    color: "#8E75FF",
    link: "https://strapi.io/",
  },
  ThreeJS: {
    color: "#000000",
    link: "https://threejs.org/",
  },
  Redux: {
    color: "#764ABC",
    link: "https://redux.js.org/",
  },
  Cypress: {
    color: "#17202C",
    link: "https://www.cypress.io/",
  },
  Jest: {
    color: "#C21325",
    link: "https://jestjs.io/",
  },
  Vite: {
    color: "#646CFF",
    link: "https://vitejs.dev/",
  },
  SolidJS: {
    color: "#2C4F7C",
    link: "https://www.solidjs.com/",
  },
  EmailJS: {
    color: "#4B89DC",
    link: "https://www.emailjs.com/",
  },
  ChartJS: {
    color: "#FF6384",
    link: "https://www.chartjs.org/",
  },
  Supabase: {
    color: "#3ECF8E",
    link: "https://supabase.com/",
  },
  
};
 
  
  export const getTextColor = (backgroundColor) => {
    const r = parseInt(backgroundColor.substr(1, 2), 16);
    const g = parseInt(backgroundColor.substr(3, 2), 16);
    const b = parseInt(backgroundColor.substr(5, 2), 16);
  
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  
    return brightness > 125 ? "#000000" : "#ffffff";
  };