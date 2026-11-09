import React, { useEffect, useMemo, useState } from "react";
import { FiArrowUpRight, FiGithub, FiGitBranch, FiRefreshCw } from "react-icons/fi";

const ACCOUNT = "patrickdovale";
const API_URL = `https://api.github.com/users/${ACCOUNT}/repos?type=owner&sort=created&direction=desc&per_page=100`;
const CACHE_KEY = "patrick-portfolio-public-github-v1";
const CACHE_DURATION_MS = 60 * 60 * 1000;
const PAGE_SIZE = 9;

function readCache() {
  try {
    const data = JSON.parse(window.localStorage.getItem(CACHE_KEY) || "null");
    return Array.isArray(data?.repos) && typeof data?.savedAt === "number" ? data : null;
  } catch (_) {
    return null;
  }
}

function normalizeRepos(repos) {
  if (!Array.isArray(repos)) return [];
  return repos
    .filter((repo) => repo && repo.private === false && repo.fork === false && typeof repo.name === "string"
      && typeof repo.html_url === "string" && repo.html_url.startsWith(`https://github.com/${ACCOUNT}/`)
      && !Number.isNaN(new Date(repo.created_at).getTime()))
    .map((repo) => ({
      id: repo.id,
      name: repo.name,
      description: typeof repo.description === "string" ? repo.description : "",
      url: repo.html_url,
      language: repo.language || "",
      createdAt: repo.created_at,
      archived: Boolean(repo.archived)
    }))
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
}

export default function GitHubTimeline({ language }) {
  const pt = language === "pt";
  const [repos, setRepos] = useState(() => readCache()?.repos || []);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [sort, setSort] = useState("oldest");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  useEffect(() => {
    const cache = readCache();
    if (cache && Date.now() - cache.savedAt < CACHE_DURATION_MS) return;

    const controller = new AbortController();
    async function load() {
      setLoading(true);
      setError(false);
      try {
        const response = await fetch(API_URL, {
          headers: { Accept: "application/vnd.github+json" },
          signal: controller.signal
        });
        if (!response.ok) throw new Error(`GitHub API: ${response.status}`);
        const firstPage = await response.json();
        let result = firstPage;
        // Se ultrapassar 100 repositórios públicos, busca a segunda página.
        if (firstPage.length === 100) {
          const second = await fetch(API_URL + "&page=2", {
            headers: { Accept: "application/vnd.github+json" },
            signal: controller.signal
          });
          if (second.ok) result = firstPage.concat(await second.json());
        }
        const normalized = normalizeRepos(result);
        if (!controller.signal.aborted) {
          setRepos(normalized);
          try { window.localStorage.setItem(CACHE_KEY, JSON.stringify({ repos: normalized, savedAt: Date.now() })); } catch (_) { /* storage unavailable */ }
        }
      } catch (err) {
        if (!controller.signal.aborted) setError(true);
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }
    load();
    return () => controller.abort();
  }, []);

  const ordered = useMemo(() => [...repos].sort((a, b) =>
    sort === "oldest" ? new Date(a.createdAt) - new Date(b.createdAt) : new Date(b.createdAt) - new Date(a.createdAt)
  ), [repos, sort]);

  const visible = ordered.slice(0, visibleCount);
  const dateLocale = pt ? "pt-BR" : "en-US";

  return (
    <section className="github-timeline section-pad" id="github-timeline" aria-labelledby="github-timeline-heading">
      <div className="layout-container">
        <div className="section-heading">
          <div>
            <span className="section-index">06 / GITHUB</span>
            <p className="section-kicker">{pt ? "DO PRIMEIRO COMMIT EM DIANTE" : "FROM MY EARLY REPOS ONWARD"}</p>
            <h2 id="github-timeline-heading">{pt ? "Meu GitHub, em ordem cronológica." : "My GitHub, in chronological order."}</h2>
          </div>
          <p>{pt
            ? "Projetos públicos importados automaticamente do meu GitHub. A data é a de criação do repositório, não necessariamente o início do desenvolvimento."
            : "Public projects imported automatically from GitHub. Dates reflect repository creation, not necessarily the start of development."}</p>
        </div>
        <div className="github-timeline-controls">
          <span><FiGithub aria-hidden="true" /> {pt ? "Repositórios públicos" : "Public repositories"} {repos.length ? `· ${repos.length}` : ""}</span>
          <div className="github-order" role="group" aria-label={pt ? "Ordenar projetos" : "Order projects"}>
            <button type="button" className={sort === "oldest" ? "active" : ""} onClick={() => { setSort("oldest"); setVisibleCount(PAGE_SIZE); }} aria-pressed={sort === "oldest"}>{pt ? "Mais antigos" : "Oldest first"}</button>
            <button type="button" className={sort === "newest" ? "active" : ""} onClick={() => { setSort("newest"); setVisibleCount(PAGE_SIZE); }} aria-pressed={sort === "newest"}>{pt ? "Mais recentes" : "Newest first"}</button>
          </div>
        </div>
        {loading && repos.length === 0 && <p className="github-state" role="status"><FiRefreshCw aria-hidden="true" /> {pt ? "Carregando repositórios do GitHub..." : "Loading GitHub repositories..."}</p>}
        {error && (
          <p className="github-state" role="status">{pt
            ? "Não consegui atualizar a lista agora. Os projetos em destaque continuam disponíveis acima."
            : "GitHub could not be reached right now. Featured projects are still available above."}{" "}
            <a href={`https://github.com/${ACCOUNT}?tab=repositories`} target="_blank" rel="noopener noreferrer">{pt ? "Ver direto no GitHub" : "Open GitHub"}</a>
          </p>
        )}
        {visible.length > 0 && <div className="github-repos-grid">
          {visible.map((repo) => (
            <article key={repo.id || repo.url} className="github-repo">
              <div className="github-repo-date"><FiGitBranch aria-hidden="true" /><time dateTime={repo.createdAt}>{new Date(repo.createdAt).toLocaleDateString(dateLocale, { year: "numeric", month: "short" })}</time></div>
              <h3>{repo.name}</h3>
              <p>{repo.description || (pt ? "Projeto público disponível no GitHub." : "Public project available on GitHub.")}</p>
              <div className="github-repo-footer">
                <span>{repo.language || (pt ? "Repositório" : "Repository")}{repo.archived ? " · Archived" : ""}</span>
                <a href={repo.url} target="_blank" rel="noopener noreferrer" aria-label={`${pt ? "Ver" : "View"} ${repo.name} ${pt ? "no GitHub" : "on GitHub"}`}><FiArrowUpRight aria-hidden="true" /></a>
              </div>
            </article>
          ))}
        </div>}
        {!loading && !error && repos.length === 0 && <p className="github-state">{pt ? "Nenhum projeto público encontrado no momento." : "No public repositories found at the moment."}</p>}
        <div className="github-timeline-bottom">
          {visibleCount < ordered.length && <button type="button" onClick={() => setVisibleCount((count) => count + PAGE_SIZE)} className="button-secondary">{pt ? "Mostrar mais projetos" : "Show more projects"} <FiArrowUpRight aria-hidden="true" /></button>}
          <a className="text-link" href={`https://github.com/${ACCOUNT}?tab=repositories`} target="_blank" rel="noopener noreferrer">{pt ? "Explorar todos no GitHub" : "Browse all on GitHub"} <FiArrowUpRight aria-hidden="true" /></a>
        </div>
        <p className="github-timeline-note">{pt
          ? "Apenas repositórios públicos e próprios são exibidos; forks e repositórios privados não entram na lista. Dados atualizados automaticamente, com cache local de até 1 hora."
          : "Only owned public repositories are shown; forks and private repositories are excluded. Data refreshes automatically, with up to one hour of local cache."}</p>
      </div>
    </section>
  );
}
