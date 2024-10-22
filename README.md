This is a React application built with Vite and styled using Tailwind CSS. It leverages the DummyJSON API to display a blog posts application where users can view blog posts, comments, users' activity, and geographical information.

# Live Demo

The application is hosted on GitHub Pages and can be accessed here:

https://surendra6.github.io/blog-posts/

# Features

- **Blog Posts**: Fetch and display blog posts from the DummyJSON API.
- **Comments**: View comments associated with each blog post.
- **Users List**: Fetch and display a list of users.
- **User Information**: Display detailed information about each user, including their address, geo-location, and activity (posts, etc.).
- **Geo Location Map**: Display the user's geo-location on a map.
- **Search Functionality**:
  - Search blog posts by title.
  - Search users by name.
- **Git hub link**: Git hub fixed at the bottomm right corder Link provides the access to the source code.

## Upcoming Features

- **Albums**: Display and manage user albums.

# Tech Stack

- **React**: UI development.
- **Vite**: Fast build tool for modern web applications.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **React Icons**: For adding icons to the UI.
- **DummyJSON API**: Free fake REST API to simulate real-world data.
- **React Router**: For handling navigation.
- **Axios**: For making HTTP requests to the API.

# Installation

To get started with this project, clone the repository and install the dependencies:

```bash
git clone https://github.com/Surendra6/blog-posts.git
cd your-project-directory
npm install
```

# Running the App

After installing dependencies, run the app using the following command:

```bash
npm run dev
```

This will start the development server. You can view the application in your browser at `http://localhost:5173`.

# Search Features

## Blog Post Search

You can search blog posts by their title. The search bar is located at the top of the blog posts page. The results will dynamically filter based on the search input.

## User Search

You can search for users by their name. The user search bar is located on the users page, and results will update dynamically as you type.

# API Endpoints Used

This app leverages the following endpoints from the DummyJSON API:

- `/posts`: Fetch all blog posts.
- `/users`: Fetch all users.
- `/comments`: Fetch all comments.
- `/albums`: (Upcoming Feature) Fetch a list of user albums.

# Geo Location Map

For each user, the application will display their geo-location on a map, based on the latitude and longitude provided in the API.

# Upcoming Features

- **Albums**: Display albums created by users, with the ability to view individual photos.
