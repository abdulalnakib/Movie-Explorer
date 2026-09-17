import { Link } from 'react-router';

const Home = () => {
  return (
    <main>
      <section id="home" className="px-4 py-10 sm:py-14">
        <div className="mx-auto w-[min(980px,calc(100%-1.5rem))] rounded-3xl border border-white/10 bg-linear-to-br from-violet-900/80 via-teal-800/70 to-slate-900 p-6 shadow-2xl shadow-slate-950/40 sm:p-8 lg:p-12">
          <span className="mb-4 inline-block rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-100 sm:text-xs">
            Discover something new
          </span>

          <h1 className="max-w-xl text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
            Explore a world of movies and TV shows
          </h1>

          <p className="mt-4 max-w-xl text-sm text-slate-200 sm:text-base">
            Browse trending titles, search by name, and dive into featured stories,
            ratings, and details.
          </p>

          <Link
            to="/movies"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-linear-to-r from-rose-500 to-pink-400 px-5 py-2.5 text-sm font-semibold text-white no-underline transition hover:scale-[1.02]"
          >
            Explore Now
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Home;
