module.exports = {
  siteTitle: 'Abhishek Gupta | Technical Analyst',
  siteDescription:
    'I\'m a Technical Analyst based in Bangalore specializing in Planning aspects of Supply Chain tools, Relational Databases and Automations.',
  siteKeywords:
    'Abhishek Gupta, Abhishek, Gupta, abhishek-gupta, Technical Analyst, big data engineer, jda software, pesit',
  siteUrl: 'https://prateek-devaraju.github.io',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'todo',
  googleVerification: 'todo',
  name: 'Abhishek Gupta',
  location: 'Bangalore, India',
  email: 'abhishek.gupta0724@gmail.com',
  github: 'https://github.com/prateek-devaraju',
  twitterHandle: '@abhishek070795',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/prateek-devaraju',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/abhishek_xavi',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/abhishek-gupta-863a00aa/',
    },
    {
      name: 'Twitter',
      url: 'https://www.twitter.com/abhishek070795',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
