// const SearchBar = ({ search, setSearch }) => {
//   return (
//     <input
//       type="text"
//       placeholder="Search users..."
//       value={search}
//       onChange={(e) => setSearch(e.target.value)}
//       className="w-full md:w-80 border border-gray-500 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-zinc-500"
//     />
//   );
// };

// export default SearchBar;









import { useState } from "react";

const SearchBar = ({ setSearch }) => {

  const [inputValue, setInputValue] = useState("");

  const handleSearch = () => {
    setSearch(inputValue);
  };

  const handleChange = (e) => {

    const value = e.target.value;

    setInputValue(value);

    // input empty => show all data
    if (value.trim() === "") {
      setSearch("");
    }
  };

  return (

    <div className="flex items-center gap-3">

      <input
        type="text"
        placeholder="Search users..."
        value={inputValue}
        onChange={handleChange}
        className="
          w-full
          md:w-80
          border
          border-gray-400
          rounded
          px-4
          py-2
          outline-none
          focus:ring-2
          focus:ring-[#a94442]
        "
      />

      <button
        onClick={handleSearch}
        className="
          bg-[#a94442]
          hover:bg-[#923b39]
          text-white
          px-5
          py-2
          rounded
          transition
          cursor-pointer
        "
      >
        Search
      </button>

    </div>
  );
};

export default SearchBar;