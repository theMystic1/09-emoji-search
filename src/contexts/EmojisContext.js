import { createContext, useContext, useState } from "react";
import { searchEmoji } from "../services/apiCall";

const EmojisContext = createContext();

function EmojisProvider({ children }) {
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
      throw error;
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <EmojisContext.Provider
      value={{
        emojis,
        setEmojis,
        query,
        setQuery,
        isLoading,
        setIsLoading,
        handleSearch,
      }}
    >
      {children}
    </EmojisContext.Provider>
  );
}

function useEmojis() {
  const context = useContext(EmojisContext);

  if (context === undefined)
    throw new Error("Emojis context was used outside the emoji provider");

  // console.log(context);
  return context;
}

export { EmojisProvider, useEmojis };
