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

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UsersContextProvider>
        <PostsContextProvider>
          <Router>
            <div className="bg-gray-100 w-screen flex justify-center">
              <div className="w-full flex flex-col overflow-hidden items-center">
                <Header />
                <div className="max-w-3xl w-full min-h-screen px-5 py-10 mt-12 flex flex-col">
                  <Routes>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/users" element={<UsersList />} />
                    <Route path="/users/:id" element={<UserDetails />} />
                    <Route path="/post/:id" element={<Post />} />
                    <Route path="/" element={<Home />} />
                  </Routes>
                </div>
                <button className="fixed bottom-10 right-10">Git hub</button>
              </div>
            </div>
          </Router>
        </PostsContextProvider>
      </UsersContextProvider>
    </QueryClientProvider>
  );
}

export default App;
