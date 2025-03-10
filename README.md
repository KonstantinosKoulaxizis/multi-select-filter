# 🌟 Multi Select Filter Assessment

This assessment showcases a simple frontend app built using `React` with `Typescript` and `Vite`.
The app utilizes `scss` for styling, `react-query` for backend API client and `zustand` for state management.

### Why We're Using Vite ⚡
We chose Vite as our build tool for several reasons, particularly for its speed and modern developer experience. Here are the main benefits of using Vite:

1. Fast Development Builds ⏱️: Vite leverages native ES modules in the browser, which makes hot module replacement (HMR) incredibly fast. During development, Vite only transforms and serves the parts of the app that change, rather than rebuilding the entire app. This results in near-instantaneous page reloads and an overall faster development process.
2. Optimized Build Performance 🚀: Vite uses esbuild, a super-fast JavaScript bundler written in Go, to handle the build process. This makes production builds extremely fast compared to traditional bundlers like Webpack, resulting in quicker build times and faster CI/CD pipelines.
3. Out-of-the-box Support for Modern Features 🌐: Vite provides built-in support for TypeScript, SCSS, and modern JavaScript features (like ES modules), which means we don’t need to spend time configuring additional loaders or plugins. This makes setup quick and easy.
4. Developer Experience 🛠️: Vite’s development server is incredibly fast and responsive, and its out-of-the-box support for features like fast hot reloading and pre-configured optimizations gives developers a smoother, more enjoyable experience. The tooling is designed to provide instant feedback on changes, leading to a faster feedback loop.
5. Future-Proof 🌟: Vite is designed for modern web development. It’s built with next-generation web standards and makes it easier to adopt new technologies, like ES modules or tree-shaking, without additional configuration.
6. Growing Ecosystem 🌱: Vite has a rapidly growing community and ecosystem. It’s being adopted by many modern frameworks and libraries, ensuring its long-term stability and support.

### React Query for Data Fetching 📡
We chose React Query for data fetching and caching because it simplifies managing asynchronous data, such as fetching data from a backend API. Some of the key benefits of using React Query include:

1. Automatic caching and refetching: React Query handles caching for us, so we don't need to manually implement caching logic. It also automatically refetches data when needed (e.g., when data is stale or when a component is re-mounted), ensuring the app always has up-to-date information.
2. Declarative data fetching: It allows us to declaratively define how data should be fetched and updated in our UI. This keeps our component code clean and focused on rendering the UI, without worrying about the details of how to fetch, store, or update data.
3. Built-in error handling: React Query provides built-in mechanisms to handle errors and loading states for data-fetching operations, reducing the need for boilerplate code.

### Zustand for State Management 🧠
We chose Zustand as the state management library because of its simplicity, flexibility, and minimal boilerplate. Here are some reasons why Zustand was a great fit for this project:

1. Simplicity: Zustand is extremely lightweight and easy to set up compared to other state management libraries like Redux or MobX. There’s no need to define actions, reducers, or complex state containers. Zustand gives us a simple and effective way to store and update state.
2. Direct store access: Zustand allows components to directly access the store and update the state, reducing the complexity often associated with managing state in larger applications.
3. Scalable: Although Zustand is minimalistic, it’s scalable enough for larger apps. It allows for creating multiple stores, organizing them into different modules, and managing state for different parts of the application.
4. No boilerplate: Unlike more complex state management libraries, Zustand doesn’t require additional code for actions or reducers. This makes it easy to use and maintain.

## 🚀 Running the App

🐳 Docker is being used in this project to provide a consistent and isolated environment for running the app, regardless of the developer's local machine setup. By using Docker, we can ensure that the app runs the same way on every machine.

To run the app using Docker, follow these steps:

1. Make sure you have Docker running on your machine.
2. Navigate to the root of the project directory in your terminal.
```sh
docker build -t zero-tier-assessment .
```
3. Once the build is complete, run the app with the following command:
```sh
docker run -p 5173:5173 zero-tier-assessment
```
4. AAccess the app by visiting `http://localhost:5173/`

## 🧪 Testing

For this project, `Vitest` and `React Testing Library` where used to write and run some basic tests.

To run the tests open your terminal and use the following command
```sh
npm test
```
Your tests will run, and the results will be displayed in the terminal. 📊

## 🛠 Building the App

To build the app for production:

1. Run the build command:
```sh
npm run build
```
2. This will create a dist/ folder containing the production build of your app.
3. You can now serve the production build using any static file server or deploy it to your preferred hosting service.