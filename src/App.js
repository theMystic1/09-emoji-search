import { useState } from "react";
import Nav from "./Nav";
import Emojis from "./components/Emojis";
import { searchEmoji } from "./services/apiCall";
import AllEmojis from "./AllEmojis";
import Loader from "./Loader";
import Placeholder from "./components/Placeholder";

function App() {
  const [emojis, setEmojis] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSearch(data) {
    if (!data) return;

    setIsLoading(true);
    try {
      const emojiData = await searchEmoji(data);
      setEmojis(emojiData);
      setQuery("");
    } catch (error) {
      throw new Error(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="bg-lime-50 min-h-[100vh] relative ">
      {isLoading && <Loader />}
      <Nav query={query} setQuery={setQuery} handleSearch={handleSearch} />
      <main className="px-2 sm:px-8">
        <div className="my-10 relative  w-full flex items-center justify-between sm:px-8">
          <AllEmojis
            setEmojis={setEmojis}
            emojis={emojis}
            setIsLoading={setIsLoading}
          />
        </div>
        {emojis.length < 1 && (
          <Placeholder handleSearch={handleSearch} setQuery={setQuery} />
        )}
        <Emojis emojis={emojis} />
      </main>
    </div>
  );
}

export default App;
