import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <Link href="/">
          <a>
            <h1>
              <span>Toast</span>
              <span>Recipes</span>
            </h1>
            <h2>Spread The Joy</h2>
          </a>
        </Link>
      </header>

      <div className="page-content">
        {/* whatever page comp we are viewing */}
        {children}
      </div>

      <footer>
        <p>Copyright 2021 Toast Recipes</p>
      </footer>
    </div>
  );
}
