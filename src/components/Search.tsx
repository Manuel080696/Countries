import "boxicons";
import "../styles/Search.css";
import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";

export const Search = () => {
  const { searchTerm, setSearchTerm } = useContext(SearchContext);

  return (
    <form>
      <input
        type="search"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      ></input>
      <button className="search">
        <box-icon name="search" color="#000000" />
      </button>
    </form>
  );
};
