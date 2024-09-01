const GALLERY_INFORMATION: {
  [key: string]: {
    link: string;
    text: string;
  };
} = {
  'La Stalla At Stables': {
    link: 'https://la-stalla-at-stables.vercel.app/',
    text: 'Commissioned website for an Italian restaurant, introducing the restaurant and displaying its menu. Made with Next.js to allow for server-side rendering and single-page application (SPA) functionality. Includes an animated navigation bar, an image gallery and an integrated Google Map.',
  },
  'Tank Battle Game': {
    link: 'https://lfcourtney.github.io/Luke-Courtney-s-Tank-Battle/',
    text: 'Inspired by the popular online arcade game Tank Trouble, this game retains all the core mechanics of the original. A defining feature is its development using pure JavaScript and HTML5 canvas, without relying on any JavaScript frameworks. The game boasts smooth gameplay and real-time collision detection.',
  },
  'Kings Chippy & Chinese Takeaway': {
    link: 'https://www.youtube.com/watch?v=Sumy8ZOkn58',
    text: 'Client project for a local Chinese takeaway. The website includes essential restaurant information and features an interactive menu, allowing users to customize their orders with preferred sides and sauces. Additionally, it integrates a fully functional payment and transaction system. (This website is no longer hosted).',
  },
  'Replica BBC Website': {
    link: 'https://www.youtube.com/watch?v=F8ss3kjCp4I&t=526s',
    text: 'Recreation of the BBC News website as it appeared at the time. It replicates the HTML and CSS of the original site, including responsive elements such as the navbar and connected dropdown menu, which function seamlessly together. The design is fully responsive, adapting to both desktop and mobile screen sizes.',
  },
  'Circus Game': {
    link: 'https://lfcourtney.github.io/Circus-Canvas-Game/',
    text: 'A web-based version of Circus, an arcade game released in 1977 by Exidy. This version was developed entirely using JavaScript and the HTML5 canvas. Includes original sound effects and is controlled by the mouse.',
  },
  'Live Extreme Weather Tracker': {
    link: 'https://www.youtube.com/watch?v=uMSGnZFW-h8&t=13s',
    text: 'A real-time extreme weather tracker developed in React.js using the Google Maps API. Key features include a real-time search bar for filtering events by type, clustering to prevent marker overload and an information box providing details on selected events.',
  },
  'YouTube Style Comments System': {
    link: 'https://www.youtube.com/watch?v=F_8QqP6GgxE&t=242s',
    text: 'This React.js project replicates the YouTube comments system, emulating the same fonts and colors used by YouTube. It utilizes the Intersection Observer API to lazily load new comments as the user scrolls. Users can post new comments, like, and reply to existing comments, with interactions updating immediately without page refresh. Data is stored in a MongoDB database, with a Node.js backend handling CRUD operations.',
  },
  'Typing Test Game': {
    link: 'https://www.youtube.com/watch?v=oYf_u040C60&t=23s',
    text: 'This web-based speed typing game challenges players to type as many words as possible within 60 seconds. Words are randomly selected from a MySQL database containing the 1,000 most common words in the English language, facilitated by a Node.js backend. At the end of the game, players receive their average words-per-minute score.',
  },
  'Preference Finder Interactive Quiz': {
    link: 'https://24fe4ddd.pereference-finder-interactive-quiz.pages.dev/',
    text: 'This React.js single-page application enables users to input a series of items based on any criteria. Users answer a series of questions, comparing items and indicating their preferences. Upon completion, users receive an objective list ranked according to their choices. (The web application is a proof of concept, demonstrating a potential user story. It is not recommended to submit lists of more than five items as the algorithm used is inefficient; hence the number of comparisons made will become substantially larger past this point).',
  },
};

export default GALLERY_INFORMATION;
