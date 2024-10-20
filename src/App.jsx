import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import UserDetails from "./pages/UserDetails";
import Home from "./pages/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { UsersContextProvider } from "./hooks/context/UsersContext";
import { PostsContextProvider } from "./hooks/context/PostsContext";
import UsersList from "./pages/UserList";
import Header from "./components/Header";
import Post from "./pages/Post";
import WorkInProgress from "./pages/WorkInProgress";
import ErrorPage from "./pages/ErrorPage";
import { FaGithub } from "react-icons/fa";
import { AlbumsContextProvider } from "./hooks/context/AlbumsContext";
import { TodosContextProvider } from "./hooks/context/TodosContext";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PostsContextProvider>
        <UsersContextProvider>
          <TodosContextProvider>
            <AlbumsContextProvider>
              <Router>
                <div className="bg-gray-100 w-screen flex justify-center">
                  <div className="w-full flex flex-col overflow-hidden items-center">
                    <Header />
                    <div className="max-w-3xl w-full min-h-screen px-5 py-10 mt-12 flex flex-col">
                      <Routes>
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route
                          path="/blog-posts/todos"
                          element={<WorkInProgress />}
                        />
                        <Route
                          path="/blog-posts/albums"
                          element={<WorkInProgress />}
                        />
                        <Route
                          path="/blog-posts/users"
                          element={<UsersList />}
                        />
                        <Route
                          path="/blog-posts/users/:id"
                          element={<UserDetails />}
                        />
                        <Route path="/blog-posts/post/:id" element={<Post />} />
                        <Route path="/blog-posts" element={<Home />} />
                        <Route path="*" element={<ErrorPage />} />
                      </Routes>
                    </div>
                    <a
                      href="https://github.com/Surendra6/blog-posts"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="fixed bottom-10 right-10 animate-pulse duration-100 flex bg-white border hover:bg-gray-100 text-black font-bold size-16 py-2 px-4 rounded-full shadow-xl items-center justify-center"
                    >
                      <FaGithub size={30} />
                    </a>
                  </div>
                </div>
              </Router>
            </AlbumsContextProvider>
          </TodosContextProvider>
        </UsersContextProvider>
      </PostsContextProvider>
    </QueryClientProvider>
  );
}

export default App;
