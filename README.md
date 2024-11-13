My Latest News My Latest News is a Next.js application written in TypeScript that serves as a news aggregation platform. This app fetches top headlines from NewsAPI.org and displays them by category. It’s designed for local development on a Windows host and uses Turbopack for fast refresh and bundling.

Getting Started Prerequisites Node.js: Ensure Node.js is installed on your system. This project was tested with Node.js version 22.9.0. npm: This app requires npm version 10.9.0. You can check your version by running:

npm --version

Installation Clone the repository: git clone https://github.com/your-username/your-repository-name.git

Navigate to the project directory: cd your-repository-name

Install dependencies: npm install

Configure API Key: Obtain a free API key from NewsAPI.org. Open src/app/page.tsx and update the API key in the following line (around line 20): const url = https://newsapi.org/v2/top-headlines?country=us${apiCategory ? &category=${apiCategory} : ''}&apiKey=YOUR_API_KEY_HERE; Replace YOUR_API_KEY_HERE with your actual NewsAPI key.

Running the Application To start the application in development mode, use: npm run dev The app will be available at http://localhost:3000.

Dependencies This project includes the following key dependencies:

Next.js: 15.0.3 – Framework for React applications. React: 19.0.0-rc – JavaScript library for building user interfaces. Tailwind CSS: 3.4.1 – Utility-first CSS framework. TypeScript: 5.x – Type-safe JavaScript. Dev Dependencies ESLint: ^8.x – Linter for identifying and reporting on patterns in JavaScript. PostCSS: ^8.x – Tool for transforming CSS.
