import cakesForYou from "../assets/cakesForYou.png";
import chess from "../assets/chessappmainpage.png";
import connectFour from "../assets/connectFour.png";
import measureMate from "../assets/measureMate.png";
import flexiCharge from "../assets/flexiCharge.png";
import fileOrganizer from "../assets/fileOrganizer.png";
import jonkopingStores from "../assets/jonkopingStoresMainPage1.png";
import notesApp from "../assets/noteapp.png";
import minesweeper from "../assets/Minesweeper.png";
import DevOps from "../assets/DevOps-fundamentals.png";
import portfolio from "../assets/portfolio.png";
import tetris from "../assets/Tetris.png";
import todoList from "../assets/todo_List.png";
import weatherApp from "../assets/weatherApp.png";
import bluetoothReader from "../assets/bluetoothReader.png";


export type ProjectCategory = "web" | "mobile" | "desktop" | "systems" | "devops";

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
    id: "tetris",
    slug: "tetris",
    title: "Tetris",
    summary:
      "A browser-based Tetris game built with Blazor WebAssembly and .NET.",
    description:
      "A live Tetris game with a Blazor WebAssembly UI and a .NET backend foundation. The project uses C# and the ASP.NET Core ecosystem, with GitHub Actions handling the build and deployment workflow.",
    outcome: "A playable web game with automated delivery through GitHub Actions.",
    image: tetris,
    gallery: [tetris],
    technologies: ["C#", ".NET", "ASP.NET Core", "Blazor WebAssembly", "GitHub Actions"],
    categories: ["web", "devops"],
    status: "completed",
    featured: true,
  },
  {
    id: "minesweeper",
    slug: "minesweeper",
    title: "Minesweeper",
    summary:
      "A C++ and Qt Minesweeper game with an automatic solving feature.",
    description:
      "A desktop Minesweeper project built in C++ with Qt Creator. Alongside the regular game experience, it includes an auto-solving feature that can analyze the board and find safe moves.",
    image: minesweeper,
    gallery: [minesweeper],
    technologies: ["C++", "Qt", "Qt Creator", "Algorithms", "Desktop UI"],
    categories: ["desktop", "systems"],
    status: "completed",
    featured: true,
  },
  {
    id: "measuremate",
    slug: "measuremate",
    title: "MeasureMate",
    summary:
      "A university and Husqvarna collaboration exploring robotic floor measurement.",
    description:
      "A collaboration with the university and Husqvarna to turn a robotic lawnmower into a floor-measuring robot. A LiDAR sensor tracks and maps rooms to help renovation projects estimate floor areas more efficiently.",
    image: measureMate,
    gallery: [measureMate],
    technologies: ["Robotics", "LiDAR", "Mapping", "Sensors", "Husqvarna collaboration"],
    categories: ["systems"],
    status: "completed",
    featured: true,
  },
  {
    id: "flexicharge",
    slug: "flexicharge",
    title: "Flexicharge",
    summary:
      "Backend services for an EV charging system with AWS, CI/CD, and automated tests.",
    description:
      "A collaboration project for an electric vehicle charging system. I worked on the TypeScript backend, connected the AWS database, built and maintained CI/CD pipelines, supported backend uptime, and wrote tests for reliable delivery.",
    image: flexiCharge,
    gallery: [flexiCharge],
    technologies: ["TypeScript", "AWS", "Backend", "CI/CD", "Automated testing"],
    categories: ["web", "devops"],
    status: "completed",
    featured: true,
  },
  {
    id: "file-organizer",
    slug: "file-organizer",
    title: "File Organizer",
    summary:
      "A C# and .NET utility that sorts cluttered folders into useful categories.",
    description:
      "A desktop utility that cleans up folders by grouping files into meaningful directories. Point it at a Downloads folder, for example, and it can move MP3s and similar files into an Audio folder for a more organized workspace.",
    image: fileOrganizer,
    gallery: [fileOrganizer],
    technologies: ["C#", ".NET", "File systems", "Automation", "Desktop utility"],
    categories: ["desktop", "systems"],
    status: "completed",
    featured: true,
  },
  {
    id: "devops-fundamentals",
    slug: "devops-fundamentals",
    title: "DevOps Fundamentals",
    summary:
      "A cloud and testing project covering AWS, Docker, automation, and delivery practices.",
    description:
      "A school project focused on cloud hosting through AWS, Docker, and practical DevOps principles. It included a Python calculator and a broad testing strategy covering unit, API, end-to-end, frontend, and performance tests with PyTest, Playwright, and Locust.",
    image: DevOps,
    gallery: [DevOps],
    technologies: ["AWS", "Docker", "Python", "PyTest", "Playwright", "Locust"],
    categories: ["devops", "web"],
    status: "completed",
    featured: true,
  },
  {
    id: "bluetooth-reader",
    slug: "bluetooth-reader",
    title: "Bluetooth Reader",
    summary:
      "A Flutter app for exploring nearby Bluetooth signal strength and dead zones.",
    description:
      "A Flutter learning project that scans nearby Bluetooth devices and lets users select a device to monitor. It visualizes live connection strength so users can discover dead zones around their phone or laptop without creating a map of their physical location.",
    image: bluetoothReader,
    gallery: [bluetoothReader],
    technologies: ["Flutter", "Dart", "Bluetooth", "Mobile UI", "Live data"],
    categories: ["mobile"],
    status: "completed",
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
