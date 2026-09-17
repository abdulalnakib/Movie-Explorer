const MovieModal = ({ show, onClose }) => {
  return (
    <div className="fixed inset-0 z-30 flex items-center justify-center overflow-y-auto bg-base-content/70 p-3" onClick={onClose}>
      <div className="card relative flex max-h-[calc(100dvh-1.5rem)] w-full max-w-2xl flex-col overflow-hidden border border-base-300 bg-base-100 shadow-2xl" onClick={(event) => event.stopPropagation()}>
        <button
          type="button"
          className="btn btn-circle btn-sm absolute right-3 top-3 z-10"
          onClick={onClose}
          aria-label="Close modal"
        >
          ✕
        </button>

        <img
          src={show.image?.original || 'https://placehold.co/800x450/1f2937/ffffff?text=Movie+Poster'}
          alt={show.name}
          className="h-50 w-full shrink-0 object-cover sm:h-55"
        />

        <div className="card-body min-h-0 flex-1 overflow-y-auto p-4 sm:p-5">
          <h2 className="card-title mb-2 text-xl text-base-content sm:text-2xl">{show.name}</h2>
          <p className="mb-3 text-xs text-base-content/80 sm:text-sm">
            ⭐ Rating: {show.rating?.average ?? 'N/A'} • 📅 Release: {show.premiered || 'Unknown'}
          </p>
          <p className="mb-2 text-xs text-base-content/80 sm:text-sm">
            <strong className="text-base-content">Genres:</strong> {show.genres?.join(', ') || 'N/A'}
          </p>
          <p className="mb-4 text-xs leading-5 text-base-content/80 sm:text-sm">
            <strong className="text-base-content">Summary:</strong>{' '}
            {show.summary ? show.summary.replace(/<[^>]+>/g, '') : 'No summary available.'}
          </p>

        </div>

        <div className="border-t border-base-300 bg-base-100 p-4 sm:p-5">
          <button
            type="button"
            className="btn btn-primary w-full"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
