export enum ProjectType {
  Thesis,
  Paper,
  Tool,
  Visualization,
  Simulation,
  Game,
  App,
  Website
}

export type Project ={
  image?: string;
  imageAlt?: string;
  type: ProjectType;
  title: string;
  body: string;
  date: string;
  url: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    image: "/projects/thesis.webp",
    imageAlt:
      "Master thesis title page listing Eindhoven University of Technology, Department of Mathematics and Computer Science, Databases Research Group",
    type: ProjectType.Thesis,
    title: "Property Graph Schemas",
    body: "In my master's thesis, I formulated a practical and comprehensive schema language for graph databases, which I applied to Neo4j and others.",
    date: "2022-10-16",
    url: "https://github.com/nimobeeren/thesis/",
    featured: true,
  },
  {
    type: ProjectType.Paper,
    title: "Visual Property Graph Schema Design",
    body: "I interviewed people from Google, Uber and TigerGraph with the goal of designing a UI that helps people work with property graph schemas.",
    date: "2022-01-10",
    url: "https://arxiv.org/abs/2201.03643",
    featured: true,
  },
  {
    type: ProjectType.Tool,
    title: "WebTeX",
    body: "Frustrated with LaTeX, I developed a tool for scientific and technical writing based on Markdown. It supports math, citations, and cross-references.",
    date: "2021-12-09",
    url: "https://webtex.vercel.app/",
    featured: true,
  },
  {
    type: ProjectType.Simulation,
    title: "VR Search Experiment",
    body: "We developed and conducted a VR experiment to research how people search for objects in a room.",
    date: "2021-10-20",
    url: "http://2imv25.vercel.app/",
  },
  {
    type: ProjectType.Game,
    title: "DM-Guessr",
    body: "A game I made to play with the photography association, where you are challenged to guess where our member's photos were taken. Try to beat our high score of 123718!",
    date: "2021-05-11",
    url: "https://dm-guessr.netlify.app/",
    featured: true,
  },
  {
    type: ProjectType.Visualization,
    title: "Bird Migration",
    body: "We show how temperature is related to the migration pattern of birds in Europe. As global temperatures rise, birds start their breeding season earlier.",
    date: "2021-02-06",
    url: "https://github.com/nimobeeren/2IMV20/tree/main/InfoVis",
  },
  {
    type: ProjectType.Visualization,
    title: "Load Balancing Algorithms",
    body: "This was a fun challenge to implement some algorithms using functional programming patterns in Reason.",
    date: "2020-11-02",
    url: "https://algo-vis.vercel.app/",
    featured: true,
  },
  {
    type: ProjectType.Tool,
    title: "spotify-migrate",
    body: "A script I wrote to migrate my local music files to Spotify.",
    date: "2020-05-17",
    url: "https://github.com/nimobeeren/spotify-migrate",
  },
  {
    type: ProjectType.App,
    title: "Valorant Scrim Finder",
    body: "I repurposed my original CS:GO Scrim Finder for the game Valorant.",
    date: "2020-04-25",
    url: "https://github.com/nimobeeren/scrim-valorant",
  },
  {
    type: ProjectType.Tool,
    title: "css2js",
    body: "Transforms CSS between various different syntaxes like vanilla CSS, JS objects and JSX props. I enjoyed collaborating with lots of new people in this open-source project!",
    date: "2020-01-10",
    url: "https://css2js.dotenv.dev/",
    featured: true,
  },
  {
    type: ProjectType.Tool,
    title: "musicdl",
    body: "Automatically download and tag music from YouTube and Spotify.",
    date: "2019-12-17",
    url: "https://github.com/nimobeeren/musicdl",
  },
  {
    type: ProjectType.Simulation,
    title: "Autonomous Guiding Drone",
    body: "We used computer vision techniques on a virtual camera to simulate a drone which guides people to their destinations.",
    date: "2019-04-11",
    url: "https://github.com/nimobeeren/0LAUK0",
  },
  {
    type: ProjectType.Simulation,
    title: "AlphaBeast Draughts Player",
    body: "A program that plays the game of International Draughts, using the alpha-beta pruning algorithm. We had a fun competition with our class.",
    date: "2018-03-08",
    url: "https://github.com/nimobeeren/InternationalDraughts",
  },
  {
    type: ProjectType.App,
    title: "CS:GO Scrim Finder",
    body: "My very first React project! It's a web app for finding and organizing competitive matches to play in the game CS:GO, which I played at an amateur level at the time.",
    date: "2018-01-18",
    url: "https://github.com/nimobeeren/scrim-finder",
  },
  {
    type: ProjectType.App,
    title: "Rescue Robot Operator",
    body: "We built a remote-controlled robot with wheels, some servos and a camera. It is operated through a web interface.",
    date: "2017-10-27",
    url: "https://github.com/nimobeeren/rod-operator",
  },
  {
    type: ProjectType.App,
    title: "Thermostat",
    body: null,
    date: "2017-08-07",
    url: "https://github.com/nimobeeren/2id40",
  },
  {
    type: ProjectType.Website,
    title: "TU/e Study Guide",
    body: "A new website containing information about study programs at TU/e. Old tech alert!",
    date: "2017-04-08",
    url: "https://github.com/nimobeeren/2io80",
  },
  {
    type: ProjectType.Visualization,
    title: "Twitch Stats",
    body: "One of my first adventures on the web with JavaScript. This app visualizes what's going on in Twitch chat.",
    date: "2017-01-27",
    url: "https://github.com/nimobeeren/twitch-stats",
  },
  {
    type: ProjectType.Tool,
    title: "yt-music-dl",
    body: "A command-line program to easily download and tag music from a YouTube playlist.",
    date: "2016-08-31",
    url: "https://github.com/nimobeeren/yt-music-dl",
  },
];
