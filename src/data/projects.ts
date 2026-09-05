import cakesForYou from "../assets/cakesForYou.png";
import chess from "../assets/chessappmainpage.png";
import connectFour from "../assets/connectFour.png";
import jonkopingStores from "../assets/jonkopingStoresMainPage1.png";
import notesApp from "../assets/noteapp.png";
import portfolio from "../assets/portfolio.png";
import todoList from "../assets/todo_List.png";
import weatherApp from "../assets/weatherApp.png";

export type ProjectCategory = "web" | "mobile";

export type Project = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  description: string;
  outcome?: string;
  image: string;
  gallery: string[];
  technologies: string[];
  categories: ProjectCategory[];
  status: "completed" | "in-progress";
  github?: string;
  live?: string;
  featured?: boolean;
  spotlight?: boolean;
};

export const projects: Project[] = [
  {
    id: "chess-app",
    slug: "chess-app",
    title: "Chess App",
    summary:
      "iOS chess with rule validation, checkmate detection, and turn-based play — plus Lichess stats.",
    description:
      "A Chess app with rule validation, a checkmate detection algorithm, and turn-based gameplay. It integrates the Lichess API to fetch player statistics and uses unit tests to keep move validation and game logic accurate.",
    outcome: "Playable chess with tested game rules and live player stats.",
    image: chess,
    gallery: [chess],
    technologies: ["iOS", "Swift", "SwiftUI", "Unit testing", "API integration"],
    categories: ["mobile"],
    status: "completed",
    github: "https://github.com/OscarAssaf/ChessApp",
    featured: true,
    spotlight: true,
  },
  {
    id: "connect-four",
    slug: "online-connect-four",
    title: "Online Connect Four",
    summary:
      "Kotlin multiplayer Connect Four with registration, lobbies, invitations, and live turns.",
    description:
      "A real-time multiplayer Connect Four app built in Kotlin. Players can register, join a lobby, send game invitations, and play turn-based matches with Firebase-backed synchronization, win detection, and persistent player data.",
    image: connectFour,
    gallery: [connectFour],
    technologies: [
      "Android",
      "Kotlin",
      "Jetpack Compose",
      "Firebase Firestore",
      "Realtime multiplayer",
    ],
    categories: ["mobile"],
    status: "completed",
    github: "https://github.com/OscarAssaf/ConnectFour",
    featured: true,
  },
  {
    id: "jonkoping-stores",
    slug: "jonkoping-stores",
    title: "Jönköping Stores",
    summary:
      "Fullstack app for discovering local businesses, with auth, admin CRUD, and Dockerized Postgres.",
    description:
      "A fullstack web app for discovering and managing local businesses in Jönköping. Store listings are served through a REST API, with secure authentication, protected admin routes for CRUD, and containerized deployment using Docker and PostgreSQL.",
    image: jonkopingStores,
    gallery: [jonkopingStores],
    technologies: [
      "Admin dashboard",
      "PostgreSQL",
      "Docker",
      "Authentication",
      "REST API",
    ],
    categories: ["web"],
    status: "completed",
    github: "https://github.com/OscarAssaf/JonkopingStores",
    featured: true,
  },
  {
    id: "cakes-for-you",
    slug: "cakes-for-you",
    title: "CakesForYou",
    summary:
      "Cake shop admin: catalog CRUD, customers, order history, and session-based auth.",
    description:
      "A fullstack web app for managing a local cake shop — product catalog, customer records, and order history with SQL joins. Admin access uses bcrypt password hashing and session-based verification with SQLite storage.",
    image: cakesForYou,
    gallery: [cakesForYou],
    technologies: [
      "Node.js",
      "Express.js",
      "SQLite3",
      "Handlebars",
      "bcrypt",
      "Sessions",
    ],
    categories: ["web"],
    status: "completed",
    github: "https://github.com/OscarAssaf/CakesForYou",
  },
  {
    id: "weather-app",
    slug: "weather-app",
    title: "Weather App",
    summary:
      "SwiftUI weather with Core Location, current conditions, and a 7-day forecast.",
    description:
      "An iOS weather app that shows current conditions and a 7-day forecast based on the user's location. Core Location detects position, Open-Meteo provides the data, and the app follows MVVM with JSON decoding for API responses.",
    image: weatherApp,
    gallery: [weatherApp],
    technologies: [
      "Swift",
      "SwiftUI",
      "Core Location",
      "MVVM",
      "Open-Meteo API",
    ],
    categories: ["mobile"],
    status: "completed",
    github: "https://github.com/OscarAssaf/weatherApp",
  },
  {
    id: "todo-list",
    slug: "todo-list",
    title: "ToDo List App",
    summary:
      "SwiftUI todos with categories, filters, swipe-to-delete, and persistent state.",
    description:
      "A todo app with category-based organization (Work, Personal, School), filtering, completion tracking, and swipe-to-delete. State is persisted so lists survive app restarts.",
    image: todoList,
    gallery: [todoList],
    technologies: ["Swift", "SwiftUI", "Core Data", "State management"],
    categories: ["mobile"],
    status: "completed",
    github: "https://github.com/OscarAssaf/todo_List",
  },
  {
    id: "notes-app",
    slug: "notes-app",
    title: "Notes App",
    summary:
      "Jetpack Compose notes with Material 3, validation, and responsive layouts.",
    description:
      "A notes app with CRUD, form validation, and navigation in Jetpack Compose. Material Design 3 theming, input limits, and a UI that adapts to different screen sizes and content lengths.",
    image: notesApp,
    gallery: [notesApp],
    technologies: [
      "Kotlin",
      "Jetpack Compose",
      "Material Design 3",
      "Form validation",
    ],
    categories: ["mobile"],
    status: "completed",
    github: "https://github.com/OscarAssaf/Note_Taking_App",
  },
  {
    id: "portfolio",
    slug: "portfolio",
    title: "Portfolio Website",
    summary:
      "This site — a React rebuild with a project gallery, filters, and case-study pages.",
    description:
      "Personal portfolio showcasing projects, experience, and skills. The current version is a React + TypeScript + Tailwind rebuild with consistent project imagery, a gallery, and data-driven project pages so new work is easy to add.",
    image: portfolio,
    gallery: [portfolio],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    categories: ["web"],
    status: "in-progress",
    github: "https://github.com/OscarAssaf/Portfolio",
    live: "https://oscarassaf.github.io/portfolio/",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects() {
  return projects.filter((project) => project.featured);
}

export function getGalleryProjects() {
  return projects.filter((project) => !project.featured);
}
