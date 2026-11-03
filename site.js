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
  document.title = `${p.name} — CV`;
  document.querySelector('meta[name="description"]').content = p.intro || `${p.name} — personal website`;
  byId("name").textContent = p.name;
  byId("site-name").textContent = p.name;
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
  if (p.email) addLink(byId("social-links"), p.email, `mailto:${p.email}`);
  (p.links || []).forEach(link => addLink(byId("social-links"), link.label, link.url));
  addLink(byId("social-links"), "CV (PDF)", p.cv);
  (p.bio || []).forEach(text => byId("bio").append(el("p", "", text)));
  (p.interests || []).forEach(text => byId("interests").append(el("span", "tag", text)));
  (p.publications || []).forEach(item => {
    const row = el("article", "publication");
    const body = el("div", "publication-body");
    const title = el("h3", "paper-title", item.title);
    const authors = el("p", "authors");
    const authorName = p.authorName || p.name;
    const chunks = (item.authors || "").split(authorName);
    chunks.forEach((chunk, i) => {
      if (i) authors.append(el("strong", "", authorName));
      authors.append(document.createTextNode(chunk));
    });
    body.append(title);
    if (item.authors) body.append(authors);
    if (item.venue) body.append(el("p", "venue", item.venue));
    if (item.note) body.append(el("p", "paper-note", item.note));
    const links = el("div", "paper-links");
    (item.links || []).forEach(link => addLink(links, link.label, link.url));
    body.append(links);
    if (item.year) row.append(el("span", "year", item.year));
    else row.classList.add("no-year");
    row.append(body);
    byId("publication-list").append(row);
  });
  const timeline = (id, items) => (items || []).forEach(item => {
    const entry = el("article", "timeline-entry");
    entry.append(el("p", "date", item.date), el("h4", "", item.title));
    if (item.organization) entry.append(el("p", "organization", item.organization));
    if (item.detail) entry.append(el("p", "detail", item.detail));
    byId(id).append(entry);
  });
  timeline("education-list", p.education);
  timeline("experience-list", p.experience);
  (p.awards || []).forEach(item => {
    const row = el("article", "award");
    const text = el("div");
    text.append(el("h3", "", item.title));
    if (item.organization) text.append(el("p", "detail", item.organization));
    row.append(el("span", "year", item.year), text);
    byId("award-list").append(row);
  });
  if (!p.awards?.length) byId("awards-section").hidden = true;
  byId("role").hidden = !p.role;
  byId("intro").hidden = !p.intro;
  byId("portrait").hidden = !p.photo;
  byId("portrait").parentElement.classList.toggle("text-only", !p.photo);
  byId("about").hidden = !p.bio?.length && !p.interests?.length;
  byId("interests-heading").hidden = !p.interests?.length;
  byId("publications").hidden = !p.publications?.length;
  byId("education-column").hidden = !p.education?.length;
  byId("experience-column").hidden = !p.experience?.length;
  byId("background").hidden = !p.education?.length && !p.experience?.length;
  byId("background").querySelector(".background-grid").classList.toggle("single-column", !p.education?.length || !p.experience?.length);
  if (p.education?.length && !p.experience?.length) {
    byId("background-title").textContent = "Education";
    byId("education-column").querySelector(".column-heading").hidden = true;
    document.querySelector('nav a[href="#background"]').textContent = "Education";
  }
  document.querySelectorAll('nav a[href^="#"]').forEach(link => {
    const section = document.querySelector(link.getAttribute("href"));
    link.hidden = !section || section.hidden;
  });
  byId("copyright").textContent = `© ${new Date().getFullYear()} ${p.name}`;
})();
