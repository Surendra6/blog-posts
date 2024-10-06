import { useEffect, useMemo, useState } from "react";
import Card from "../components/Card";
import useFetchPosts from "../hooks/services/useFetchPosts";

const Dashboard = () => {
  const [showSplashScreen, setShowSplashScreen] = useState(true);
  const [searchValue, setSearchValue] = useState("");

  const { data } = useFetchPosts();

  const filteredPosts = useMemo(() => {
    return searchValue
      ? data.filter(
          ({ title, body }) =>
            title.toLowerCase().includes(searchValue.toLowerCase().trim()) ||
            body.toLowerCase().includes(searchValue.toLowerCase().trim())
        )
      : data;
  }, [data, searchValue]);

  useEffect(() => {
    const splashTimeout = setTimeout(() => {
      setShowSplashScreen(false); // Hide the splash screen after 3000ms
    }, 3000);
    return () => clearTimeout(splashTimeout);
  }, [setShowSplashScreen]);

  return showSplashScreen ? (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center">
        <img src="/loading-bulb.gif" alt="Logo" className="w-32 h-32" />
      </div>
    </div>
  ) : (
    <>
      <span>{filteredPosts.length} Items</span>
      <input
        placeholder="Search for Title, Description ...."
        onChange={(event) => setSearchValue(event.target.value)}
      />
      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredPosts.map(({ title, body, id }) => (
          <Card
            key={id}
            title={title}
            description={body}
            image={`https://picsum.photos/200?+${id}`}
          />
        ))}
      </div>
    </>
  );
};

export default Dashboard;
