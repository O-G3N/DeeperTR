"use client";

import { useState } from "react";
import type { AdminActionResultDto, AdminPageResponseDto } from "@deepertr/types";
import { DashboardIcon, MessageIcon, ShieldIcon, UsersIcon } from "../../components/icons";
import { postApiData } from "../api-client";

type CategoryKey = "dashboard" | "branding" | "chapters" | "users" | "comments";

const categories: Array<{ key: CategoryKey; label: string; icon: JSX.Element }> = [
  { key: "dashboard", label: "Genel Bakış", icon: <DashboardIcon /> },
  { key: "branding", label: "Logo & Site", icon: <ShieldIcon /> },
  { key: "chapters", label: "Bölümler", icon: <ShieldIcon /> },
  { key: "users", label: "Kullanıcılar", icon: <UsersIcon /> },
  { key: "comments", label: "Yorumlar", icon: <MessageIcon /> }
];

export function AdminPanel({ initialData }: { initialData: AdminPageResponseDto }) {
  const [data, setData] = useState(initialData);
  const [message, setMessage] = useState("");
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("dashboard");
  const [siteName, setSiteName] = useState(initialData.siteSettings.siteName);
  const [tagline, setTagline] = useState(initialData.siteSettings.tagline);
  const [logoPosition, setLogoPosition] = useState<"left" | "center" | "right">(initialData.siteSettings.logoPosition);

  const runAction = async (body: {
    type: "chapter-upload" | "chapter-delete" | "user-ban" | "comment-delete" | "site-settings-update";
    targetId?: string;
    payload?: { title?: string; series?: string; siteName?: string; tagline?: string; logoPosition?: "left" | "center" | "right" };
  }) => {
    const response = await postApiData<AdminActionResultDto, typeof body>("/api/admin/action", body);
    setData(response.dashboard);
    setMessage(response.message);
    setSiteName(response.dashboard.siteSettings.siteName);
    setTagline(response.dashboard.siteSettings.tagline);
    setLogoPosition(response.dashboard.siteSettings.logoPosition);
  };

  return (
    <div className="admin-layout">
      <aside className="panel admin-sidebar">
        {categories.map((category) => (
          <button
            key={category.key}
            className={`admin-category-btn ${activeCategory === category.key ? "active" : ""}`}
            onClick={() => setActiveCategory(category.key)}
          >
            {category.icon}
            <span>{category.label}</span>
          </button>
        ))}
      </aside>

      <section className="admin-content">
        {message ? <p className="muted">{message}</p> : null}

        {(activeCategory === "dashboard" || activeCategory === "branding") && (
          <article className="panel mb16">
            <h3>Logo & Site İsmi Yönetimi</h3>
            <div className="admin-form-grid">
              <label>
                Site Adı
                <input value={siteName} onChange={(event) => setSiteName(event.target.value)} />
              </label>
              <label>
                Alt Başlık
                <input value={tagline} onChange={(event) => setTagline(event.target.value)} />
              </label>
              <label>
                Logo Yeri
                <select value={logoPosition} onChange={(event) => setLogoPosition(event.target.value as "left" | "center" | "right")}>
                  <option value="left">Sol</option>
                  <option value="center">Orta</option>
                  <option value="right">Sağ</option>
                </select>
              </label>
            </div>
            <button
              className="white-pill"
              onClick={() => runAction({ type: "site-settings-update", payload: { siteName, tagline, logoPosition } })}
            >
              Site Ayarlarını Kaydet
            </button>
          </article>
        )}

        {(activeCategory === "dashboard" || activeCategory === "chapters") && (
          <article className="panel mb16">
            <h3>Bölüm Yönetimi</h3>
            <button
              className="white-pill"
              onClick={() => runAction({ type: "chapter-upload", payload: { title: "Yeni Bölüm", series: "Yeni Seri" } })}
            >
              Bölüm Yükle
            </button>
            {data.chapters.map((chapter) => (
              <div key={chapter.id} className="row-item">
                <div>
                  <strong>{chapter.series}</strong>
                  <small>{chapter.title}</small>
                </div>
                <button className="ghost-btn" onClick={() => runAction({ type: "chapter-delete", targetId: chapter.id })}>
                  Sil
                </button>
              </div>
            ))}
          </article>
        )}

        {(activeCategory === "dashboard" || activeCategory === "users") && (
          <article className="panel mb16">
            <h3>Kullanıcı Moderasyonu</h3>
            {data.users.map((user) => (
              <div key={user.id} className="row-item">
                <div>
                  <strong>{user.username}</strong>
                  <small>{user.role}</small>
                </div>
                <button
                  className="ghost-btn"
                  disabled={user.isBanned}
                  onClick={() => runAction({ type: "user-ban", targetId: user.id })}
                >
                  {user.isBanned ? "Banlı" : "Banla"}
                </button>
              </div>
            ))}
          </article>
        )}

        {(activeCategory === "dashboard" || activeCategory === "comments") && (
          <article className="panel">
            <h3>Yorum Moderasyonu</h3>
            {data.comments.map((comment) => (
              <div key={comment.id} className="row-item">
                <div>
                  <strong>{comment.author}</strong>
                  <small>{comment.chapterRef}</small>
                  <p>{comment.content}</p>
                </div>
                <button className="ghost-btn" onClick={() => runAction({ type: "comment-delete", targetId: comment.id })}>
                  Kaldır
                </button>
              </div>
            ))}
          </article>
        )}
      </section>
    </div>
  );
}
