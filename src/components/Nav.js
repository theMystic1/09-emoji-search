import Form from "./Form";

function Nav() {
  return (
    <nav className="bg-lime-700 w-full px-4 h-20 flex items-center justify-between sm:px-8 md:px-20 relative left-0 right-0 top-0">
      <h1 className="text-lime-50 hidden sm:flex font-bold text-lg text-center">
        Search your favorite Emoji
      </h1>
      <Form />
    </nav>
  );
}

export default Nav;
