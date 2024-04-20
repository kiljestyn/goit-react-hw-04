import { IoIosSearch } from "react-icons/io";
import css from "./SearchBar.module.css";
import toast from "react-hot-toast";

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchQuery = e.currentTarget.elements.searchQuery.value.trim();

    if (!searchQuery) {
      toast.error("Please enter a search query");
      return;
    }
    onSubmit(searchQuery);
  };

  return (
    <>
      <header className={css.searchHeader}>
        <>
          <form className={css.searchForm} onSubmit={handleSubmit}>
            <div className={css.searchContainer}>
              <button type="submit" className={css.btnForm}>
                <IoIosSearch className={css.searchIcon} />
              </button>

              <input
                className={css.searchInput}
                type="text"
                name="searchQuery"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
              />
            </div>
          </form>
        </>
      </header>
    </>
  );
};

export default SearchBar;
