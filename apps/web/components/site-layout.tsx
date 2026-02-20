import Link from "next/link";
import { ChevronRightIcon, SearchIcon } from "./icons";

type NavItem = {
  label: string;
  href: string;
};

export function SiteHeader({ nav }: { nav: NavItem[] }) {
  return (
    <header className="container header">
      <Link href="/index.html" className="brand">
        <span className="brand-dot" />
        <div>
          <strong>TSUKI</strong>
          <small>PROJECT</small>
        </div>
      </Link>
      <nav>
        {nav.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="search-login">
        <label className="search-box">
          <SearchIcon />
          <input aria-label="Ara" placeholder="Seri ara..." />
        </label>
        <Link href="/main/login" className="white-pill">
          Giriş
        </Link>
      </div>
    </header>
  );
}

export function Footer({ tags }: { tags: string[] }) {
  return (
    <footer className="container footer">
      <div>
        <h4>TSUKI</h4>
        <p>Roman kültürünü en kaliteli şekilde okuyucularla buluşturan modern bir platform.</p>
      </div>
      <div>
        <h5>Keşfet</h5>
        <a>Tüm Seriler</a>
        <a>Editörün Seçimi</a>
      </div>
      <div>
        <h5>Topluluk</h5>
        <a>Discord</a>
        <a>Kurallar</a>
      </div>
      <div>
        <h5>Etiketler</h5>
        <div className="tag-list">
          {tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
      <p className="muted">
        © 2024 Tsuki Project • Gizlilik <ChevronRightIcon />
      </p>
    </footer>
  );
}
