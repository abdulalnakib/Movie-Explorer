const SearchBar = ({ value, onChange }) => {
  return (
    <div className="mb-8">
      <input
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search for a movie..."
        aria-label="Search for a movie"
        className="input input-bordered input-primary w-full bg-base-100 text-base-content placeholder:text-base-content/60"
      />
    </div>
  );
};

export default SearchBar;
