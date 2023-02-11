export enum ProjectType {
  Thesis = "Thesis",
  Paper = "Paper",
  Tool = "Tool",
  Visualization = "Visualization",
  Simulation = "Simulation",
  Game = "Game",
  App = "App",
  Website = "Website",
}

export type Project = {
  image?: string;
  emoji?: string;
  alt: string;
  type: ProjectType;
  title: string;
  body: string;
  date: string;
  url: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    image: "/projects/thesis.jpg",
    alt: "Nimo Beeren and George Fletcher posing at Nimo's graduation ceremony. Nimo is holding his degree.",
    type: ProjectType.Thesis,
    title: "Property Graph Schemas",
    body: "In my master's thesis, I formulated a practical and comprehensive schema language for graph databases, which I applied to Neo4j and others.",
    date: "2022-10-16",
    url: "https://github.com/nimobeeren/thesis/",
    featured: true,
  },
  {
    emoji: "📝",
    alt: "paper and pencil",
    type: ProjectType.Paper,
    title: "Visual Property Graph Schema Design",
    body: "I interviewed people from Google, Uber and TigerGraph with the goal of designing a UI that helps people work with property graph schemas.",
    date: "2022-01-10",
    url: "https://arxiv.org/abs/2201.03643",
    featured: true,
  },
  {
    image: "/projects/webtex.png",
    alt: "WebTeX",
    type: ProjectType.Tool,
    title: "WebTeX",
    body: "Frustrated with LaTeX, I developed a tool for scientific and technical writing based on Markdown. It supports math, citations, and cross-references.",
    date: "2021-12-09",
    url: "https://webtex.vercel.app/",
    featured: true,
  },
  {
    image: "/projects/vr-search.png",
    alt: "The left half shows a white room with letters scattered over the walls. The right half shows the same room, but the view is obstructed so that only a circular area in the center is visible.",
    type: ProjectType.Simulation,
    title: "VR Search Experiment",
    body: "We developed and conducted a VR experiment to investigate how people search for objects in a room.",
    date: "2021-10-20",
    url: "http://2imv25.vercel.app/",
  },
  {
    image: "/projects/dm-guessr.png",
    alt: "On the left, a photo of a building and a car. On the right, a map with a marker on it.",
    type: ProjectType.Game,
    title: "DM-Guessr",
    body: "A game I made to play with the photography association, where you are challenged to guess where our member's photos were taken. Try to beat our high score of 123718!",
    date: "2021-05-11",
    url: "https://dm-guessr.netlify.app/",
    featured: true,
  },
  {
    image: "/projects/deity.png",
    alt: "The homepage of the DEITY Store ecommmerce website",
    type: ProjectType.Website,
    title: "DEITY Store",
    body: "My team at DEITY built a headless ecommerce framework for React, which we used to create this demo store. Some of the more complex components were really fun to make!",
    date: "2021-03-31",
    url: "https://demo.deity.io/",
    featured: true,
  },
  {
    image: "/projects/birdvis.png",
    alt: "An interface containing controls to change time and bird species, a map showing temperature anomaly and a map showing bird frequency.",
    type: ProjectType.Visualization,
    title: "Bird Migration",
    body: "We show how temperature is related to the migration pattern of birds in Europe. As global temperatures rise, birds start their breeding season earlier.",
    date: "2021-02-06",
    url: "https://github.com/nimobeeren/2IMV20/tree/main/InfoVis",
  },
  {
    image: "/projects/algo-vis.png",
    alt: "An interface containing controls to change the algorithm, number of machines and jobs, a visualization of the distribution of jobs over machines, and a resulting makespan.",
    type: ProjectType.Visualization,
    title: "Load Balancing Algorithms",
    body: "This was a fun challenge to implement some algorithms using functional programming patterns in Reason.",
    date: "2020-11-02",
    url: "https://algo-vis.vercel.app/",
  },
  {
    emoji: "🎧️",
    alt: "headphones",
    type: ProjectType.Tool,
    title: "spotify-migrate",
    body: "A script I wrote to migrate my local music files to Spotify.",
    date: "2020-05-17",
    url: "https://github.com/nimobeeren/spotify-migrate",
  },
  {
    image: "/projects/scrim-valorant.png",
    alt: "An interface with heading ScrimVALORANT.com. On the left, filters for region, level, maps and post age are shown. In the middle is a list of posts from teams who want to play a scrim match.",
    type: ProjectType.App,
    title: "Valorant Scrim Finder",
    body: "I repurposed my original CS:GO Scrim Finder for the game Valorant.",
    date: "2020-04-25",
    url: "https://github.com/nimobeeren/scrim-valorant",
  },
  {
    image: "/projects/css2js.png",
    alt: "An interface containing vanilla CSS on the left, and JS object style CSS on the right. A dropdown allows changing the CSS style.",
    type: ProjectType.Tool,
    title: "css2js",
    body: "Transforms CSS between various different syntaxes like vanilla CSS, JS objects and JSX props. I enjoyed collaborating with lots of new people in this open-source project!",
    date: "2020-01-10",
    url: "https://css2js.dotenv.dev/",
    featured: true,
  },
  {
    emoji: "🎵",
    alt: "musical note",
    type: ProjectType.Tool,
    title: "musicdl",
    body: "Automatically download and tag music from YouTube and Spotify.",
    date: "2019-12-17",
    url: "https://github.com/nimobeeren/musicdl",
  },
  {
    image: "/projects/drone.png",
    alt: "A 3D computer simulation of a person following a drone. Some debugging aids are visible.",
    type: ProjectType.Simulation,
    title: "Autonomous Guiding Drone",
    body: "We used computer vision techniques on a virtual camera to simulate a drone which guides people to their destinations.",
    date: "2019-04-11",
    url: "https://github.com/nimobeeren/0LAUK0",
  },
  {
    emoji: "🦖",
    alt: "dinosaur",
    type: ProjectType.Simulation,
    title: "AlphaBeast Draughts Player",
    body: "A program that plays the game of International Draughts, using the alpha-beta pruning algorithm. We had a fun competition with our class.",
    date: "2018-03-08",
    url: "https://github.com/nimobeeren/InternationalDraughts",
  },
  {
    emoji: "🌐",
    alt: "globe",
    type: ProjectType.App,
    title: "CS:GO Scrim Finder",
    body: "My very first React project! It's a web app for finding and organizing competitive matches to play in the game CS:GO, which I played at an amateur level at the time.",
    date: "2018-01-18",
    url: "https://github.com/nimobeeren/scrim-finder",
  },
  {
    emoji: "🕹️",
    alt: "joystick",
    type: ProjectType.App,
    title: "Rescue Robot Operator",
    body: "We built a remote-controlled robot with wheels, some servos and a camera. It is operated through a web interface with gamepad support.",
    date: "2017-10-27",
    url: "https://github.com/nimobeeren/rod-operator",
  },
  {
    image: "/projects/thermostat.png",
    alt: "Person holding a phone showing a thermostat app.",
    type: ProjectType.App,
    title: "Thermostat",
    body: "A web interface for a thermostat which supports a weekly schedule.",
    date: "2017-08-07",
    url: "https://github.com/nimobeeren/2id40",
  },
  {
    image: "/projects/study-guide.png",
    alt: "The hero section of a study guide website.",
    type: ProjectType.Website,
    title: "TU/e Study Guide",
    body: "A new website containing information about study programs at TU/e. Old tech alert!",
    date: "2017-04-08",
    url: "https://github.com/nimobeeren/2io80",
  },
  {
    image: "/projects/twitch-stats.png",
    alt: "Website with heading Twitch Stats, a channel picker and a table of common words.",
    type: ProjectType.Visualization,
    title: "Twitch Stats",
    body: "One of my first adventures on the web with JavaScript. This app tracks what's going on in Twitch chat by listing the most common words.",
    date: "2017-01-27",
    url: "https://github.com/nimobeeren/twitch-stats",
  },
  {
    emoji: "🎶",
    alt: "musical notes",
    type: ProjectType.Tool,
    title: "yt-music-dl",
    body: "A command-line program to easily download and tag music from a YouTube playlist.",
    date: "2016-08-31",
    url: "https://github.com/nimobeeren/yt-music-dl",
  },
];
