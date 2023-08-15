# React + TypeScript + Vite + Tailwind + DaisyUI

A simple project showcasing a navbar, footer, and login form UI/UX design using popular front-end technologies.

## Technologies Used

- [Daisy UI](https://daisyui.com): A collection of components for Tailwind CSS.
- [Tailwind CSS](https://tailwindcss.com): A utility-first CSS framework.
- [React](https://react.dev): A JavaScript library for building user interfaces.
- [Vite](https://vitejs.dev): A fast build tool and development server.
- [TypeScript](https://typescriptlang.org): A statically typed superset of JavaScript.

Feel free to explore these resources to learn more about the technologies and frameworks used in this project.

## Getting Started

Follow these steps to set up the project from scratch:

Create a new project using Vite:

```sh

npm init vite@latest
```
Change into the project directory:

```sh

cd your-project-directory
```
Install project dependencies:

```sh

npm install
```
Start the development server:

```sh

npm start
```
Alternatively, you can use:

```sh

npm run dev
```
Install Tailwind CSS and its dependencies:

```sh

npm install -D tailwindcss postcss autoprefixer
```
Initialize Tailwind CSS configuration:

```sh

npx tailwind init -p
```
Install DaisyUI for additional UI components:

```sh

npm install -D daisyui@latest
```
Final Steps

To redirect the port for Vite, use:

```sh

npx vite --port 4000
```
To start the development server with the adjusted port, run:

```sh

npm run dev
```
_______________________________________
inside tailwind.config.js with daisyui configured:

```CSS
import daisyui from 'daisyui';
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui,
  ],
}
```

_____________________________
main index.css/app.css:

```CSS
@tailwind base;
@tailwind components;
@tailwind utilities;

```

