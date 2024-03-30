function Form({ query, setQuery, handleSearch }) {
  async function search(e) {
    e.preventDefault();

    await handleSearch(query);
  }
  return (
    <form className="sm:m-8 flex gap-1 sm:gap-4" onSubmit={search}>
      <input
        className="border w-[60%] rounded-md px-2 sm:px-8 py-2 border-lime-700 bg-lime-100"
        type="text"
        placeholder="Search emoji"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="bg-lime-600 px-2 sm:px-8 py-2 rounded-md ">
        &#128512;
      </button>
    </form>
  );
}

export default Form;
