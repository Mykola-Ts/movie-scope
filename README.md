# 🎥 MovieScope

**MovieScope** is an interactive web app that works as a movie discovery and
information tool. On this site, users can search for films, and view detailed
information about them, such as posters, titles, genres, ratings, and more.

![App logo](./assets/logo.jpg)

## 📑 Table of Contents

- [About the Project](#-about-the-project)
- [Web App Structure](#-web-app-structure)
- [Useful Links](#-useful-links)
- [Technologies Used](#-technologies-used)
- [Libraries Used](#-libraries-used)
- [Folder and File Structure](#-folder-and-file-structure)
- [Features](#-features)
- [PageSpeed Results](#-pagespeed-results)
- [Installation & Setup](#-installation--setup)
- [Author](#-author)

## 📝 About the Project

This project is a responsive two-page web application developed as a movie
discovery platform. It allows users to browse popular movies, search for
specific titles, and explore detailed information about each film in a clean and
intuitive interface. The application provides a convenient way to discover new
movies and quickly access essential details such as ratings, genres, and
posters.

The app is built with React and modern JavaScript, following a component-based
architecture. It features dynamic data fetching from an external movie API,
real-time search functionality, and a responsive layout that ensures a smooth
and user-friendly experience across different devices and screen sizes.

![Web app start page](./assets/movie-scope.jpg)

## 🏗 Web App Structure

## 🔗 Useful Links

- [Live Demo](https://mykola-ts.github.io/movie-scope) — deployed version of the
  web app

- [GitHub Repository](https://github.com/Mykola-Ts/movie-scope) — source code of
  the project

## 🛠 Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- React
- React Router DOM — routing and navigation
- Styled Components — CSS-in-JS styling
- Git / GitHub — version control and collaboration
- ESLint — code linting and style consistency

## 📦 Libraries Used

- [react-router-dom](https://reactrouter.com/) — routing for React applications;
- [axios](https://axios-http.com/) — promise-based HTTP client;
- [react-hot-toast](https://react-hot-toast.com/) — beautiful notifications &
  toasts;
- [react-icons](https://react-icons.github.io/react-icons/) — popular icon packs
  for React;
- [react-loader-spinner](https://www.npmjs.com/package/react-loader-spinner) —
  loading spinners for React;
- [modern-normalize](https://github.com/sindresorhus/modern-normalize) —
  normalize default browser styles;
- [styled-components](https://styled-components.com/) — CSS-in-JS styling
  library.

## 📁 Folder and File Structure

- **.github/**: GitHub-specific configuration and workflows;

- **assets/**: Folder stores images used in the README.md file to visually
  document and represent the project;

- **public**: Contains static assets that are served directly without
  processing. Files inside are copied to the build folder as-is and can be
  accessed by their root path;

- **src/**: The main source folder of the React application. Contains all the
  code, components, assets, and logic of the project:
  - **components/**: Reusable UI components of the application;

  - **fonts/**: Custom fonts used in the project;

  - **helpers/**: Utility functions or helper modules that provide reusable
    logic across the app;

  - **hooks/**: Custom React hooks that encapsulate logic for state, effects, or
    reusable patterns;

  - **img/**: Images and graphic assets used in the application;

  - **pages/**: Page-level components representing different views/routes of the
    app;

  - **services/**: a collection of service modules responsible for handling
    external interactions, such as API requests, data fetching, and
    communication with third-party services;

  - **index.js**: The main entry point of the React app. Renders the root
    component into the DOM (ReactDOM.createRoot).

- **.editorconfig**: Editor configuration file;

- **.gitignore**: Specifies which files and directories to ignore in Git;

- **.prettierrc.json**: Prettier configuration for code formatting;

- **jsconfig.json**: Configuration file for JavaScript/TypeScript in VS Code —
  defines compiler options, path aliases, and IntelliSense settings;

- **package.json**: Contains metadata about the project and dependencies;

- **README.md**: Project documentation and setup instructions;

- **uk_translation.yml**: Translation configuration file — specifies source
  files and where localized (e.g., Ukrainian) translations should be stored.

## 🎯 Features

- **Keyboard Accessibility**  
  Modal windows and navigation elements support keyboard interactions (e.g., Esc
  to close modals), improving accessibility.

- **Clean & Modular Code**  
  Code is split into logical modules.

- **Performance & Accessibility**  
  The web app achieves high performance, accessibility, best practices, and SEO
  standards. Optimized code and structure ensure fast loading, smooth
  interactions, and an inclusive, user-friendly experience across all devices.

## 🚀 PageSpeed Results

## ⚙ Installation & Setup

To run the project locally, follow these steps:

1. **Clone the repository**

   ```bash
   git clone https://github.com/Mykola-Ts/movie-scope.git
   cd movie-scope
   ```

2. **Install dependencies**

   ```bash
    npm install
   ```

3. **Start the development server**

   ```bash
    npm start
   ```

4. **Open in browser**

   Visit http://localhost:3000/movie-scope to view the project.

## 👨‍💻 Author

**Mykola Tsybulskyi**

🔗 GitHub https://github.com/Mykola-Ts

🔗 Email tsybulskiyk@gmail.com

🔗 LinkedIn https://www.linkedin.com/in/mykola-tsybulskyi
