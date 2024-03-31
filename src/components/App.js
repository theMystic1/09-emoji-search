import Nav from "./Nav";
import Emojis from "./Emojis";
import AllEmojis from "./AllEmojis";
import Loader from "./Loader";
import Placeholder from "./Placeholder";
import { useEmojis } from "../contexts/EmojisContext";

function App() {
  const { isLoading, emojis } = useEmojis();
  return (
    <div className="bg-lime-50 min-h-[100vh] relative ">
      {isLoading && <Loader />}
      <Nav />
      <main className="px-2 sm:px-8">
        <div className="my-10 relative  w-full flex items-center justify-between sm:px-8">
          <AllEmojis />
        </div>
        {emojis?.length < 1 && <Placeholder />}
        <Emojis />
      </main>
    </div>
  );
}

export default App;
