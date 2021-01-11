import imgStoryplan from './img/app_storyplan.jpg';
import imgSketchbook from './img/app_sketchbook.jpg';
import imgSteamNavigator from './img/app_steam_navigator.jpg';
import imgGoogleNews from './img/app_google_news.jpg';
import imgTheValley from './img/app_the_valley.jpg';
import imgPostIt from './img/app_post_it.jpg';
import imgSimpleBlog from './img/app_simple_blog.jpg';
import imgFrazetta from './img/app_frazetta.jpg';
import imgArtSmart from './img/app_artsmart.jpg';
import imgCmd from './img/app_cmd.jpg';

export const gaTrackingID = 'UA-6842596-2'; //Unique Google Analytics tracking number

export const profileData = {
  name: "Mitul Mistry",
  title: "Full Stack Web Developer",
  description: "I'm a web developer with experience in Rails, React, and AngularJS",
  github: "https://github.com/MitulMistry",
  linkedin: "https://www.linkedin.com/in/mitulmistry",
  linkedinUser: "MitulMistry",
  twitter: "https://twitter.com/Jackal_MM",
  email: "MitulMistryDev@gmail.com",
  blog: "http://mitulmistry.github.io/"
};

export const techSkillsData = {
  "Languages": "Ruby, JavaScript, HTML/CSS, Sass",
  "Frameworks": "Ruby on Rails, React, AngularJS",
  "Databases": "PostgreSQL, SQLite",
  "Tools": "jQuery, ActiveRecord, Git, Github, Bootstrap, Heroku, Webpack",
  "Concepts": "Object-oriented programming, AJAX, RESTful architecture/APIs",
  "Software": "Linux, Photoshop, Illustrator"
}

export const webApps = [
  {
    title: "Storyplan",
    image: imgStoryplan,
    description: "A web application for writers to plan and share their work-in-progress stories",
    bullets: [
      "Built application with Ruby on Rails using MVC pattern and RESTful routes",
      "Implemented Devise gem for user registration and authentication",
      "Set up OmniAuth for additional authentication via Facebook",
      "Developed SQLite database schema and established ActiveRecord associations",
      "Deployed to Heroku with a PostgreSQL database",
      "Created front end with Rails templates and partials, then styled with Bootstrap (HTML, CSS, ERB)",
      "Wrote test suite with RSpec"
    ],
    url: "https://rails-storyplan.herokuapp.com/",
    github: "https://github.com/MitulMistry/rails-storyplan"
  },
  {
    title: "Sketchbook",
    image: imgSketchbook,
    description: "A Rails/AngularJS app for artists to curate and share their sketches",
    bullets: [
      "Created single-page AngularJS front end and integrated with Rails",
      "Developed a Rails JSON API back end using ActiveModel Serializers",
      "Used Webpacker to manage front end dependencies",
      "Implemented Active Storage and integrated with AngularJS to handle image uploading, along with AWS S3 for production",
      "Set up filtering based on associated tags for images"
    ],
    url: "https://angular-sketchbook.herokuapp.com/",
    github: "https://github.com/MitulMistry/sketchbook"
  },
  {
    title: "Steam Navigator",
    image: imgSteamNavigator,
    description: "A front end AngularJS web application for viewing the Steam Store",
    bullets: [
      "Designed and developed a responsive single-page AngularJS front end",
      "Developed a Node + Express back end proxy to interact with external API to circumvent cross-origin (CORS) denial",
      "Implemented AngularJS Material for layout and styling"
    ],
    url: "https://steam-navigator.herokuapp.com/",
    github: "https://github.com/MitulMistry/steam-navigator"
  },
  {
    title: "React Google News",
    image: imgGoogleNews,
    description: "A React front end application using the Google News API",
    bullets: [
      "Designed and developed a responsive single-page React front end",
      "Developed a Node + Express back end to interact with external API",
      "Used Webpack to build project"
    ],
    url: "https://react-google-news.herokuapp.com/",
    github: "https://github.com/MitulMistry/react-google-news"
  },
  {
    title: "The Valley",
    image: imgTheValley,
    description: "An HTML5 text adventure system using JavaScript and Phaser CE",
    bullets: [
      "Implemented a text display system using HTML canvas via Phaser",
      "Developed a system for non-linear storytelling and branching user choices",
      "Designed a story production pipeline for CSV to JSON files which are then parsed in game"
    ],
    url: "https://the-valley.herokuapp.com/",
    github: "https://github.com/MitulMistry/the-valley"
  },
  {
    title: "Post-It",
    image: imgPostIt,
    description: "A Rails/jQuery app to make and sort notes",
    bullets: [
      "Integrated jQuery into Rails templates via Webpacker",
      "Leveraged jQuery to make AJAX calls to load, create, and modify notes without page reloads",
      "Set up a Rails JSON API to communicate with jQuery via AJAX"
    ],
    url: "https://rails-post-it.herokuapp.com/",
    github: "https://github.com/MitulMistry/post-it"
  },
  {
    title: "Simple Blog",
    image: imgSimpleBlog,
    description: "A blog application built with Sinatra",
    bullets: [
      "Set up custom sessions and authentication using bcrypt",
      "Incorporated ActiveRecord and set up database schema with SQLite"
    ],
    github: "https://github.com/MitulMistry/sinatra-simple-blog"
  }
];

export const webDesigns = [
  {
    title: "Frank Frazetta",
    image: imgFrazetta,
    description: "Front page for fantasy illustration website",
    url: "https://mitulmistry.github.io/frazetta-front-page/",
    github: "https://github.com/MitulMistry/frazetta-front-page"
  },
  {
    title: "ArtSmart",
    image: imgArtSmart,
    description: "Front page for art history website",
    url: "https://mitulmistry.github.io/artsmart-front-page/",
    github: "https://github.com/MitulMistry/artsmart-front-page"
  }
];

export const otherApps = [
  {
    title: "Steam Top Sellers CLI Gem",
    image: imgCmd,
    description: "A Ruby command line application to get the current top selling games on Steam",
    bullets: [
      "Built with object-oriented programming",
      "Queried Steam API and parsed JSON response into custom classes"
    ],
    github: "https://github.com/MitulMistry/steam-top-sellers-cli-gem"
  }
];