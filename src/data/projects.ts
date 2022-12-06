export type Project = {
  type: string;
  title: string;
  body: string;
  date: string;
  href: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    "type": "Thesis",
    "title": "Property Graph Schemas",
    "body": "In my master's thesis, I formulated a practical and comprehensive schema language for graph databases, which I applied to Neo4j and others.",
    "date": "2022-10-16",
    "href": "https://github.com/nimobeeren/thesis/",
    "featured": true
  },
  {
    "type": "Paper",
    "title": "Visual Property Graph Schema Design",
    "body": "I interviewed people from Google, Uber and TigerGraph with the goal of designing a UI that helps people work with property graph schemas.",
    "date": "2022-01-10",
    "href": "https://arxiv.org/abs/2201.03643",
    "featured": true
  },
  {
    "type": "Tool",
    "title": "WebTeX",
    "body": "Frustrated with LaTeX, I developed a tool for scientific and technical writing based on Markdown. It lets you write math, citations, and cross-references.",
    "date": "2021-12-09",
    "href": "https://webtex.vercel.app/",
    "featured": true
  },
  {
    "type": "Simulation",
    "title": "VR Search Experiment",
    "body": "We developed a VR experiment to research how people search for objects in a room.",
    "date": "2021-10-20",
    "href": "http://2imv25.vercel.app/",
    "featured": false
  },
  {
    "type": "Game",
    "title": "DM-Guessr",
    "body": "A game I made to play with the photography association, where you are challenged to guess where our member's photos were taken. Try to beat our high score of 123718!",
    "date": "2021-05-11",
    "href": "https://dm-guessr.netlify.app/",
    "featured": true
  },
  {
    "type": "Visualization",
    "title": "Bird Migration",
    "body": "We show how temperature is related to the migration pattern of birds in Europe. As global temperatures rise, birds start their breeding season earlier.",
    "date": "2021-02-06",
    "href": "https://github.com/nimobeeren/2IMV20/tree/main/InfoVis",
    "featured": false
  },
  {
    "type": "Visualization",
    "title": "Load Balancing Algorithms",
    "body": "This was a fun challenge to implement some algorithms using functional programming patterns in Reason.",
    "date": "2020-11-02",
    "href": "https://algo-vis.vercel.app/",
    "featured": true
  },
  {
    "type": "Tool",
    "title": "spotify-migrate",
    "body": "A script I wrote to migrate my local music files to Spotify.",
    "date": "2020-05-17",
    "href": "https://github.com/nimobeeren/spotify-migrate",
    "featured": false
  },
  {
    "type": "App",
    "title": "Valorant Scrim Finder",
    "body": "I repurposed my original CS:GO Scrim Finder for the game Valorant.",
    "date": "2020-04-25",
    "href": "https://github.com/nimobeeren/scrim-valorant",
    "featured": false
  },
  {
    "type": "Tool",
    "title": "css2js",
    "body": "A tool to transform CSS written using JS object notation or JSX props.",
    "date": "2020-01-10",
    "href": "https://css2js.dotenv.dev/",
    "featured": true
  },
  {
    "type": "Tool",
    "title": "musicdl",
    "body": "Automatically download and tag music from YouTube and Spotify.",
    "date": "2019-12-17",
    "href": "https://github.com/nimobeeren/musicdl",
    "featured": false
  },
  {
    "type": "Simulation",
    "title": "Autonomous Guiding Drone",
    "body": "We used computer vision techniques on a virtual camera to simulate a drone which guides people to their destinations.",
    "date": "2019-04-11",
    "href": "https://github.com/nimobeeren/0LAUK0",
    "featured": false
  },
  {
    "type": "Simulation",
    "title": "AlphaBeast Draughts Player",
    "body": "A program that plays the game of International Draughts, using the alpha-beta pruning algorithm. We had a fun competition with our class.",
    "date": "2018-03-08",
    "href": "https://github.com/nimobeeren/InternationalDraughts",
    "featured": false
  },
  {
    "type": "App",
    "title": "CS:GO Scrim Finder",
    "body": "My very first React project! It's a web app for finding and organizing competitive matches to play in the game CS:GO, which I played at an amateur level at the time.",
    "date": "2018-01-18",
    "href": "https://github.com/nimobeeren/scrim-finder",
    "featured": false
  },
  {
    "type": "App",
    "title": "Rescue Robot Operator",
    "body": null,
    "date": "2017-10-27",
    "href": "https://github.com/nimobeeren/rod-operator",
    "featured": false
  },
  {
    "type": "App",
    "title": "Thermostat",
    "body": "A command-line program to easily download and tag music from a YouTube playlist.",
    "date": "2017-08-07",
    "href": "https://github.com/nimobeeren/2id40",
    "featured": false
  },
  {
    "type": "Website",
    "title": "TU/e Study Guide",
    "body": null,
    "date": "2017-04-08",
    "href": "https://github.com/nimobeeren/2io80",
    "featured": false
  },
  {
    "type": "Visualization",
    "title": "Twitch Stats",
    "body": "One of my first adventures on the web with JavaScript. This app visualizes what's going on in Twitch chat.",
    "date": "2017-01-27",
    "href": "https://github.com/nimobeeren/twitch-stats",
    "featured": false
  },
  {
    "type": "Tool",
    "title": "yt-music-dl",
    "body": "A command-line program to easily download and tag music from a YouTube playlist.",
    "date": "2016-08-31",
    "href": "https://github.com/nimobeeren/yt-music-dl",
    "featured": false
  }
]
