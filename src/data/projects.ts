import cakesForYou from "../assets/cakesForYou.png";
import chess from "../assets/chessappmainpage.png";
import connectFour from "../assets/connectFour.png";
import measureMate from "../assets/measureMate.png";
import flexiCharge from "../assets/flexiCharge.png";
import fileOrganizer from "../assets/fileOrganizer.png";
import jonkopingStoresMainPage from "../assets/JonkopingStores/jonkopingStoresMainPage.png";
import jonkopingStoresAddStore from "../assets/JonkopingStores/JonkopingStoresAddStore.png";
import jonkopingStoresSearchStore from "../assets/JonkopingStores/JonkopingStoresSearchStore.png";
import jonkopingStoresSignin from "../assets/JonkopingStores/JonkopingStoresSignin.png";
import jonkopingStoresStoreList from "../assets/JonkopingStores/JonkopingStoresStores.png";
import notesApp from "../assets/noteapp.png";
import minesweeper from "../assets/Minesweeper.png";
import DevOps from "../assets/DevOps-fundamentals.png";
import portfolio from "../assets/portfolio.png";
import portfolioLegacy from "../assets/portfolio-legacy.png";
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
      "iOS chess app built using Swift and SwiftUI, with rule engine, checkmate detection, and turn-based play ontop of plus Lichess API integration to retrieve player statistics.",
    description:
      "A Chess app written in Swift using SwiftUI for the frontend and coded inside xCode. It comes with features such as rule engine, which verifies that ensures that only valid moves are played according to official rules, ontop of a checmate detection algorithm. \n\n It integrates the Lichess API to fetch player statistics and uses Apple's official unit tests XCTest to verify move validation and game logic work as intended.",
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
    title: "Online connect four",
    summary:
      "Multiplayer Connect Four game built in Kotlin using Android Studio. Features real-time gameplay using Firebase Realtime Database for seamless game updates.  ",
    description:
      "A real-time multiplayer Connect Four app built in Kotlin using Android Studio for the IDE. Players can register, join a lobby, send game invitations, and play turn-based matches with Firebase realtime database used for the backend, which supports real-time synchronization, win detection, and persistent player data.",
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
      "Fullstack web application for discovering and managing local businesses in Jönköping City. Built with Vue.js, JavaScript, HTML, and a PostgreSQL, which all was contained in Docker. ",
    description:
      "A fullstack web app for discovering local businesses and stores in Jönköping city. The website was built using JavaScript and Vue.js framework for the frontend, and a PostgreSQL database running in a Docker container serving as the backend.\n\nIt also utilized a custom REST API with Node.js and Express.js which made it capable for authorized users to have access to Create, Read, Update and Delete (CRUD) permissions in the administration panel.",
    image: jonkopingStoresMainPage,
    gallery: [
      jonkopingStoresMainPage,
      jonkopingStoresStoreList,
      jonkopingStoresSignin,
      jonkopingStoresAddStore,
      jonkopingStoresSearchStore,
    ],
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
      "A live browser based Tetris game built with Blazor WebAssembly, C# and .NET. The live website for the game can be played down below, using GitHub Actions for build and deployment of the website.",
    description:
      "A live Tetris game built with  Blazor WebAssembly for UI and a .NET backend foundation. The project uses C# and the ASP.NET Core ecosystem, with GitHub Actions handling the build and deployment workflow, meanwhile GitHub Pages hosts the live website..",
    outcome: "A playable web game with automated delivery through GitHub Actions.",
    image: tetris,
    gallery: [tetris],
    technologies: ["C#", ".NET", "ASP.NET Core", "Blazor WebAssembly", "GitHub Actions"],
    categories: ["web", "devops"],
    status: "completed",
    live: "https://oscarassaf.github.io/Tetris/",
    github: "https://github.com/OscarAssaf/Tetris",
    featured: true,
  },
  {
    id: "minesweeper",
    slug: "minesweeper",
    title: "Minesweeper",
    summary:
      "A Minesweeper game written in C++ using Qt creator and its Qt 6 widget components to create the graphical user interface (GUI). Comes with an automatic solving feature, in case you need some help solving the puzzle.",
    description:
      "A desktop Minesweeper project built in C++ with Qt Creator. Alongside the regular game experience, it includes an auto solving feature that can analyze the board and find safe moves. \n\n Implemented a Breadth First Search (BFS) algorithm to automatically expand the playfield, which follows official Minesweeper gameplay rules.",
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
      "An autonomous floor measuring robot robot built in collaboration with Husqvarna. It utilized Lidar sensors to map out the measurements, and I was responsible for building the backend in Python with REST API, real-time Socket.IO alerts, AI image classification, and Docker container deployment.",
    description:
      "Aroup project at Jonkoping University in collaboration with Husqvarna, where a team of 10 built an autonomous floor measuring robot. The robot navigates a confined area using lidar-based SLAM, detects objects with a YOLO model, captures images, and sends real-time alerts to a mobile app. \n\n I was responsible for the entire backend, built with Python and FastAPI. The system includes a full REST API for managing the robot, movement, alerts, positions, maps, and routes. Real-time communication between the robot (running ROS 2 on a Jetson Orin Nano) and the frontend is handled through Socket.IO, with authenticated connections and structured event handling for detection alerts, position updates, and remote commands. \n\n When the robot detects something (a person, a bag, or an obstacle), it captures an image, sends it to the backend via Socket.IO, and the backend stores it, classifies it, creates an alert record in the database, and pushes a real-time notification to all connected frontend clients. \n\n The backend is containerized with Docker for consistent development across the team.",
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
      "Worked in an agile Scrum team to build an electric vehicle charging system with AWS, CI/CD, and automated tests as a collaboration project with Knowit. I worked on the backend, where my main responsibility was working with system integration between the charging station, hardware and backend services.",
    description:
      "A collaboration project with Knowit to create an electric vehicle charging system called Flexicharge. I worked on the backend written in TypeScript which was running on AWS EC2, so it was always live. I also designed, built and connected the the system's AWS database hosted with AWS RDS built. \n\n Additional responsibilities were to maintain CI/CD pipelines that performed tests with every Git push, to verify stability alongside documentation of the system. \n\n I also worked in agile teams, where we followed the Scrum methodology, where I partook activities such as daily sprint standups, weekly sprint planning, backlog grooming, and many more. ",
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
      "A file organizer built in C# and .NET utility that makes it easier to sort cluttered folders by categorizing the files and storing them in separate folders.",
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
      "A project I worked during my DevOps fundamentals course, where I build a calculator web application written in Python and performed Unit-, API,-End-to-end, performance and UI tests that were automated with CI/CD-pipelines through GitHub actions. I also learned about DevOps principles, Test Driven Development, Docker Containerization, and cloud hosting with Azure.",
    description:
      "A school project I worked alongside my DevOps fundamentals course which focused on learning us practical DevOps principles, and cloud hosting with Azure. I build a calculator web application in Python, and applied a broad testing strategy covering unit, API, and end-to-end tests performed with PyTest. Other tests consisted of frontend with the framework PlayWright, and performance tests with the framework Locust. \n\n We also automated these tests and deployment as a whole of the application by creating CI/CD pipelines with GitHub actions that always perform these tests with every Git push to my GitHub repository.",
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
      "A multi-platform app build in Flutter that scans for nearby Bluetooth Low Energy devices in real time, visualizing signal strength with colored indicators and a live-updating chart to help locate devices, and to also find dead bluetooth zones. Built with the latest flutter blue plus, and also includes unit tests and a GitHub Actions CI pipeline that performs tests automatically with every commit to the Git repository",
    description:
      "The app continuously scans for BLE advertisements and lists every nearby device sorted by signal strength (RSSI), with a colored strength indicator (green/orange/red). Tapping any device opens a live line chart tracking its signal strength over time, useful for a rough proximity read as you move around a space, but can also be utilized to identifying dead zones from for example your speaker where the connection would be worse.",
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
      "Built a full-stack web application written in HTML, CSS, JavaScript, Handlebars, and SQLite3 for the database, to managing and showcasing a local cake shop business. Features include CSM tools for admins with full CRUD operations.",
    description:
      "A fullstack web app for managing a local cake shop with features such as product catalog, customer records, and order history with SQL and joining the database. Added cyber security protection so that only permitted can access and interact at the administrator panel. \n\n Other features consist of user registration and secure password hashing using bcrypt with utilization of session-based verification using SQLite.",
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
      "A weather application created using the Open-Meteo API. It displays current weather conditions and forecast with a clean, intuitive user interface build with Swift with iOS design principles in mind.",
    description:
      "An iOS weather app that shows current conditions and a 7-day forecast based on the user's location. Utilizes Core Location to detect the users' gps postion while Open-Meteo provides the data. The app follows MVVM with JSON decoding for API responses and was built using Swift with SwiftUI frontend tools, and was written inside Apple's xCode IDE.",
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
      "ToDo list app built with Swift and utilizing Swift UI for a modern iOS frontend. Features category-based organization and filtering todos with categories.",
    description:
      "A todo app with category-based organization (Work, Personal, School), filtering, completion tracking, and swipe-to-delete features. The app utilizes Core Data, so that data is persisted even if the app gets restarted. \n\n Built with Swift and using SwiftUI and was written inside Apple's xCode IDE for iOS applications.",
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
      "Notes app with CRUD operations, form validation, and navigation built using Jetpack Compose for a responsive layout.",
    description:
      "A notes app with CRUD, form validation, and navigation in Jetpack Compose. \n\n Implemented Implements Material Design 3 components with dynamic theming, comprehensive input validation (title length, content limits), and responsive UI that adapts to different screen sizes and content lengths. \n\n Created this application for my Android Development course to teach me fundamentals about Android development. ",
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
      "This site, a website built with Vite, React, TypeScript and Tailwind",
    description:
      "Personal portfolio showcasing projects my experience and skills. The website was built using Vite, React, TypeScript and Tailwind with consistent project imagery, a gallery, and data-driven project pages so new work is easy to add.",
    image: portfolio,
    gallery: [portfolio],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    categories: ["web"],
    status: "in-progress",
    github: "https://github.com/OscarAssaf/Portfolio",
    live: "https://oscarassaf.github.io/portfolio/",
  },
  {
    id: "portfolio-legacy",
    slug: "portfolio-legacy",
    title: "Portfolio-legacy",
    summary:
      "My old portfolio website built to showcase my projects and skills.",
    description:
      "My old previous portfolio website built for showcasing my projects and skills. Built with HTML, CSS, and JavaScript with smooth animations, interactive elements, and a responsive layout for any screen size.\n\nI rebuilt it to use more modern frontend tools, as this project was mainly created to learn the basics of web development.",
    image: portfolioLegacy,
    gallery: [portfolioLegacy],
    technologies: ["HTML", "CSS", "JavaScript"],
    categories: ["web"],
    status: "completed",
  }
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects() {
  return projects.filter((project) => project.featured);
}
