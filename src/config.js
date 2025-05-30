module.exports = {
  siteTitle: 'Prateek Devaraju',
  siteDescription:
    'Future ITC Marketing Head',
  siteKeywords:
    'Prateek Devaraju, Prateek, Devaraju, Prateek-Devaraju, Sales Consultant, Marketing, Aston University, MBA',
  siteUrl: 'https://prateek-devaraju.github.io',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'todo',
  googleVerification: 'todo',
  name: 'Prateek Devaraju',
  location: 'Bangalore, India',
  email: 'pratheek.devraj@gmail.com',
  github: 'https://github.com/prateek-devaraju',
  twitterHandle: '@prateekdevraj02',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/prateek-devaraju',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/iamprateekdevraj/',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/prateekdevaraju/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/prateekdevraj02',
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
