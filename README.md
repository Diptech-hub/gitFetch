# GitHub API Fetch Application

This project is a React application that asically fetches data using the GitHub API, such that the list of my GitHub repositories is display. It displays informations about individual repositories when clicked, makes use of nested routes, as an error boundary and custom error 404 page.

## Technologies Used

- React: A JavaScript library for building user interfaces.
- React Router: A routing library for React applications.
- GitHub API: Used to fetch repository data from GitHub.
- CSS: Used for styling and creating a visually appealing UI.
- HTML: The basic boilerplate code to link the JS ans CSS pages
- Vite: The bundler of Choice
- React Feather: A NPM package used to access icons

## Getting Started

To get started with the project:

1. You clone the repository: `git clone <repository-url>`
2. Install dependencies: `pnpm install`
3. Set up a personal access token on GitHub: [Guide](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)
4. Start the development server: `pnpm run dev`
5. Open the application in your browser: `http://localhost:5173`

## Features
- A page showing the list of my repositories
- A page that shows details about a single repository
- An Error boundary
- An Error 404 Page

### Repository Details Page

- Clicking on a repository from the list navigates to a RepoDetails page for that repository.  The RepoDetails page includes additional information about the repository, such as the number of stars, id, and forks and others. Provides a back button to navigate back to the list of repositories and a button to the Error 404 Page.

### Nested Routes

- Made use of React Router to implement nested routes to display the list of repositories and individual repository details.

### Error Boundary

- Implements an error boundary component to catch and handle errors that may occur within the application.

### 404 Page

- Includes a custom 404 page to handle invalid routes or pages that do not exist. Provides a simple message and an option to navigate back to the home page.
