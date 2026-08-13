import { useEffect, useState } from "react";

function GitHubProjects({ darkMode }) {
  const username = "chintharishithkumar";

  const [repositories, setRepositories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        setLoading(true);
        setError("");

        const token = import.meta.env.VITE_GITHUB_TOKEN;

        const response = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&direction=desc&per_page=12`,
          {
            headers: token
              ? {
                  Authorization: `Bearer ${token}`,
                  Accept: "application/vnd.github+json",
                }
              : {
                  Accept: "application/vnd.github+json",
                },
          }
        );

        if (!response.ok) {
          const errorData = await response.json().catch(() => null);

          throw new Error(
            errorData?.message ||
              `GitHub API error: ${response.status}`
          );
        }

        const data = await response.json();

        if (!Array.isArray(data)) {
          throw new Error(
            "GitHub returned an unexpected response."
          );
        }

        setRepositories(data);
      } catch (err) {
        console.error("GitHub API Error:", err);

        setError(
          err.message ||
            "Unable to fetch GitHub repositories."
        );
      } finally {
        setLoading(false);
      }
    };

    const timer = setTimeout(() => {
      fetchRepositories();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="github"
      className="relative z-10 px-6 py-24"
    >
      <div className="mx-auto max-w-5xl">

        {/* ================= HEADER ================= */}
        <div className="flex flex-col md:flex-row justify-between gap-6 md:items-end text-left">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.25em] text-cyan-500 dark:text-cyan-400">
              GitHub
            </p>

            <h2 className="mt-3 text-3xl font-extrabold md:text-4xl text-slate-900 dark:text-white">
              Open Source Work
            </h2>
            <div className="mt-1.5 h-1.5 w-16 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500"></div>

            <p className="mt-4 max-w-xl text-sm text-slate-500 dark:text-slate-400">
              My latest public repositories fetched directly from GitHub API.
            </p>
          </div>

          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-300 dark:border-slate-800 bg-white/10 dark:bg-slate-900/30 backdrop-blur-sm px-6 py-3 text-xs font-bold text-slate-700 dark:text-slate-300 hover:border-cyan-400 dark:hover:border-cyan-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-all duration-300 hover:-translate-y-0.5 shadow-sm"
          >
            View GitHub Profile ↗
          </a>
        </div>

        {/* ================= LOADING SKELETONS ================= */}
        {loading && (
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="animate-pulse rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/40 dark:bg-slate-900/30 p-6 h-[250px]"
              >
                <div className="h-10 w-10 rounded-xl bg-slate-200 dark:bg-slate-800"></div>
                <div className="mt-6 h-5 w-2/3 rounded bg-slate-200 dark:bg-slate-800"></div>
                <div className="mt-4 h-4 w-full rounded bg-slate-200 dark:bg-slate-800"></div>
                <div className="mt-2 h-4 w-5/6 rounded bg-slate-200 dark:bg-slate-800"></div>
                <div className="mt-6 h-8 w-1/3 rounded bg-slate-200 dark:bg-slate-800"></div>
              </div>
            ))}
          </div>
        )}

        {/* ================= ERROR STATE ================= */}
        {!loading && error && (
          <div className="mt-12 rounded-2xl border border-red-400/20 bg-red-400/5 p-8 text-center glass-card max-w-xl mx-auto">
            <div className="text-3xl">⚠️</div>

            <h3 className="mt-4 text-lg font-bold text-red-500">
              GitHub Repositories Could Not Be Loaded
            </h3>

            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              {error}
            </p>

            <a
              href={`https://github.com/${username}?tab=repositories`}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex rounded-xl bg-gradient-to-r from-red-500 to-orange-500 text-white px-5 py-2.5 text-xs font-bold shadow-md"
            >
              Open GitHub Profile →
            </a>
          </div>
        )}

        {/* ================= EMPTY STATE ================= */}
        {!loading && !error && repositories.length === 0 && (
          <div className="mt-12 rounded-2xl border border-dashed border-slate-300 dark:border-slate-800 p-10 text-center glass-card max-w-xl mx-auto">
            <div className="text-3xl">📂</div>

            <h3 className="mt-4 text-lg font-bold text-slate-800 dark:text-white">
              No Public Repositories Found
            </h3>

            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              GitHub did not return any public repositories for this user.
            </p>
          </div>
        )}

        {/* ================= REPOSITORIES LIST ================= */}
        {!loading && !error && repositories.length > 0 && (
          <>
            <div className="mt-10 text-left">
              <p className="text-xs font-semibold text-slate-400">
                Showing {repositories.length} public repositories
              </p>
            </div>

            <div className="mt-5 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {repositories.map((repo) => (
                <article
                  key={repo.id}
                  className="group glass-card rounded-2xl p-6 flex flex-col justify-between text-left h-full"
                >
                  <div>
                    {/* Top row */}
                    <div className="flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 text-base">
                        📁
                      </div>

                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-lg text-slate-400 transition-colors hover:text-cyan-400"
                        title="Open in GitHub"
                      >
                        ↗
                      </a>
                    </div>

                    {/* Name */}
                    <h3 className="mt-5 break-words text-lg font-bold text-slate-800 dark:text-slate-200 group-hover:text-cyan-400 transition-colors">
                      {repo.name}
                    </h3>

                    {/* Description */}
                    <p className="mt-3 text-sm leading-relaxed text-slate-500 dark:text-slate-400 line-clamp-3">
                      {repo.description || "No repository description available."}
                    </p>
                  </div>

                  <div>
                    {/* Language dot */}
                    <div className="mt-5 flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
                      <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                        {repo.language || "Web Tech"}
                      </span>
                    </div>

                    {/* Stats footer */}
                    <div className="mt-4 flex gap-4 border-t border-slate-100 dark:border-slate-900 pt-4 text-xs font-bold text-slate-400">
                      <span className="flex items-center gap-1">
                        ⭐ {repo.stargazers_count}
                      </span>
                      <span className="flex items-center gap-1">
                        🍴 {repo.forks_count}
                      </span>
                    </div>

                    {/* Button link */}
                    <div className="mt-5">
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex w-full justify-center rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 hover:from-cyan-400 hover:to-indigo-400 text-white px-4 py-2.5 text-xs font-bold shadow-md hover:shadow-cyan-500/10 hover:-translate-y-0.5 transition-all duration-300"
                      >
                        View Repository
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default GitHubProjects;