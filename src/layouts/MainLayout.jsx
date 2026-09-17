import { Outlet, Link } from 'react-router';

const MainLayout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-base-200 text-base-content">
      <header className="sticky top-0 z-10 border-b border-base-300/80 bg-base-100/80 backdrop-blur">
        <div className="mx-auto flex min-h-18 w-[min(1100px,calc(100%-2rem))] flex-wrap items-center justify-between gap-3 py-3 sm:flex-nowrap sm:gap-4 sm:py-0">
          <Link to="/" className="text-lg font-bold tracking-wide text-primary no-underline sm:text-2xl">
            🎬 MovieExplorer
          </Link>

          <nav className="order-3 flex w-full items-center justify-center gap-5 text-sm font-semibold text-base-content/80 sm:order-0 sm:w-auto sm:text-base">
            <Link to="/" className="no-underline text-base-content/80 hover:text-primary">Home</Link>
            <Link to="/movies" className="no-underline text-base-content/80 hover:text-primary">Movies</Link>
          </nav>

          <Link
            to="/movies"
            className="btn btn-primary btn-sm"
          >
            Movies
          </Link>
        </div>
      </header>

      <div className="flex-1">
        <Outlet />
      </div>

      <footer className="border-t border-base-300 bg-base-100/90">
        <div className="mx-auto flex w-[min(1100px,calc(100%-2rem))] flex-wrap items-center justify-between gap-3 py-5 text-sm text-base-content/70">
          <div>MovieExplorer</div>
          <div className="flex items-center gap-4">
            <span>© 2026 MovieExplorer</span>
            <a
              href="https://github.com/abdulalnakib/Movie-Explorer.git"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-semibold text-base-content/70 hover:text-base-content hover:underline"
            >
              <img
                src="/icons/github-invertocat.svg"
                alt=""
                className="h-4 w-4"
              />
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
