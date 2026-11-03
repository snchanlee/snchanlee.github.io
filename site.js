/* Rendering only. Edit your content in profile.js. */
(() => {
  "use strict";
  const p = window.PROFILE;
  if (!p) return;
  const byId = (id) => document.getElementById(id);
  const el = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  };
  const safeUrl = (value, allowMail = false) => {
    if (typeof value !== "string" || !value.trim()) return null;
    try {
      const url = new URL(value, window.location.href);
      return ["https:", "http:", ...(allowMail ? ["mailto:"] : [])].includes(url.protocol) ? url.href : null;
    } catch { return null; }
  };
  const addLink = (parent, label, href, className = "") => {
    const url = safeUrl(href, true);
    if (!url) return;
    const a = el("a", className, label);
    a.href = url;
    if (new URL(url).origin !== window.location.origin && !url.startsWith("mailto:")) {
      a.target = "_blank";
      a.rel = "noopener noreferrer";
    }
    parent.append(a);
  };
  document.title = `${p.name} — Research & CV`;
  document.querySelector('meta[name="description"]').content = p.intro || `${p.name} — personal website`;
  byId("name").textContent = p.name;
  byId("wordmark").replaceChildren(document.createTextNode(p.name), el("span", "accent", "."));
  byId("role").textContent = p.role;
  byId("intro").textContent = p.intro;
  byId("initials").textContent = p.initials || p.name.split(/\s+/).map(s => s[0]).slice(0, 2).join("");
  if (safeUrl(p.photo)) {
    const img = el("img");
    img.src = p.photo;
    img.alt = p.name;
    img.style.objectPosition = p.photoPosition || "center";
    img.addEventListener("error", () => { img.remove(); byId("portrait").classList.remove("has-photo"); });
    byId("portrait").append(img);
    byId("portrait").classList.add("has-photo");
  }
  if (p.email) addLink(byId("social-links"), "Email ↗", `mailto:${p.email}`);
  (p.links || []).forEach(link => addLink(byId("social-links"), `${link.label} ↗`, link.url));
  addLink(byId("social-links"), "Download CV ↓", p.cv);
  (p.bio || []).forEach(text => byId("bio").append(el("p", "", text)));
  (p.interests || []).forEach(text => byId("interests").append(el("span", "tag", text)));
  (p.publications || []).forEach(item => {
    const row = el("article", "publication");
    const body = el("div", "publication-body");
    const title = el("h3", "paper-title", item.title);
    const authors = el("p", "authors");
    const chunks = (item.authors || "").split(p.name);
    chunks.forEach((chunk, i) => {
      if (i) authors.append(el("strong", "", p.name));
      authors.append(document.createTextNode(chunk));
    });
    body.append(title, authors, el("p", "venue", item.venue));
    if (item.note) body.append(el("p", "paper-note", item.note));
    const links = el("div", "paper-links");
    (item.links || []).forEach(link => addLink(links, `${link.label} ↗`, link.url));
    body.append(links);
    row.append(el("span", "year", item.year), body);
    byId("publication-list").append(row);
  });
  const timeline = (id, items) => (items || []).forEach(item => {
    const entry = el("article", "timeline-entry");
    entry.append(el("p", "date", item.date), el("h4", "", item.title), el("p", "organization", item.organization));
    if (item.detail) entry.append(el("p", "detail", item.detail));
    byId(id).append(entry);
  });
  timeline("education-list", p.education);
  timeline("experience-list", p.experience);
  (p.awards || []).forEach(item => {
    const row = el("article", "award");
    const text = el("div");
    text.append(el("h3", "", item.title), el("p", "detail", item.organization));
    row.append(el("span", "year", item.year), text);
    byId("award-list").append(row);
  });
  if (!p.awards?.length) byId("awards-section").hidden = true;
  if (p.email) byId("contact-link").href = `mailto:${p.email}`;
  else byId("contact-link").hidden = true;
  byId("copyright").textContent = `© ${new Date().getFullYear()} ${p.name}`;
  byId("print-cv").addEventListener("click", () => window.print());
})();
