import { FiSearch } from "react-icons/fi";

const SearchBar = () => {
    return (
        <div className="relative w-full max-w-md">
            <input
                type="text"
                placeholder="Search products..."
                className="w-full rounded-full border border-gray-300 py-3 pl-5 pr-12 outline-none focus:border-blue-700"
            />

            <FiSearch
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xl text-gray-500"
            />
        </div>
    );
};

export default SearchBar;