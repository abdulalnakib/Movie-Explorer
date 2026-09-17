const MovieCard = ({ show, onSelect }) => {
  return (
    <article className="card overflow-hidden border border-base-300 bg-base-100 shadow-xl shadow-base-300/20">
      <img
        src={show.image?.medium || 'https://placehold.co/210x295/1f2937/ffffff?text=No+Image'}
        alt={show.name}
        className="h-auto w-full object-contain bg-base-200"
      />

      <div className="card-body p-4">
        <h3 className="card-title mb-2 min-h-12 text-lg text-base-content">{show.name}</h3>
        <p className="mb-4 text-sm text-base-content/80">
          ⭐ {show.rating?.average ?? 'N/A'} • 📅 {show.premiered?.slice(0, 4) || 'Unknown'}
        </p>

        <button
          type="button"
          onClick={() => onSelect(show)}
          className="btn btn-primary btn-block"
        >
          See Details
        </button>
      </div>
    </article>
  );
};

export default MovieCard;
