import { useEmojis } from "../contexts/EmojisContext";
import { getEmojis } from "../services/apiCall";

function AllEmojis() {
  const { setEmojis, setIsLoading, emojis } = useEmojis();

  async function getAllEmojis() {
    setIsLoading(true);
    try {
      const emojis = await getEmojis();

      setEmojis(emojis);
    } catch (error) {
      throw new Error(error);
    } finally {
      setIsLoading(false);
    }
  }

  function clearEmojis() {
    setEmojis([]);
  }
  return (
    <>
      {emojis.length < 1 && (
        <button
          className=" bg-lime-600 px-2 sm:px-8 py-2 rounded-md text-lime-100  font-bold text-lg"
          onClick={getAllEmojis}
        >
          Get All Emojis
        </button>
      )}

      {emojis.length > 0 && (
        <button className="px-8 py-2 bg-lime-200" onClick={clearEmojis}>
          cancel
        </button>
      )}
    </>
  );
}

export default AllEmojis;
