# PROJECT_STANDARD.md
## Portfolio Website — Development Standards

**Stack:** React (Vite) · Static Site · Deployed on Vercel
**Owner:** [Your Name]
**Last Updated:** July 2026

---

## 1. Tech Stack

| Layer            | Choice                          |
|------------------|----------------------------------|
| Framework        | React (Vite)                    |
| Styling          | Tailwind CSS (or CSS Modules)    |
| Animations       | Framer Motion                    |
| Icons            | Lucide React / React Icons       |
| Forms            | Formspree / EmailJS (no backend) |
| Hosting          | Vercel                           |
| Version Control  | Git + GitHub                     |
| Design Reference | Canva (mockups/assets)           |

No custom backend — this is a static site. Contact form uses a third-party form service (Formspree/EmailJS) since there's no Node/Express server.

---

## 2. Folder Structure

```
portfolio/
├── public/
│   ├── favicon.ico
│   ├── resume.pdf
│   └── images/
│       └── projects/
├── src/
│   ├── assets/              # images, icons, logos
│   ├── components/
│   │   ├── layout/          # Navbar, Footer
│   │   ├── sections/        # Hero, About, Skills, Projects, Contact
│   │   └── ui/              # Button, Card, Badge, reusable bits
│   ├── data/                # projects.js, skills.js (content as data)
│   ├── hooks/                # custom hooks (e.g. useTheme)
│   ├── styles/               # global.css, tailwind config
│   ├── App.jsx
│   └── main.jsx
├── .env.example
├── .gitignore
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

**Rule:** Content (project data, skills list, links) lives in `src/data/` as plain JS/JSON — never hardcoded inline in components. This makes updates fast and keeps components clean.

---

## 3. Naming Conventions

- **Components:** PascalCase → `ProjectCard.jsx`, `Navbar.jsx`
- **Files (non-component):** camelCase → `useTheme.js`, `projects.js`
- **CSS classes (if not Tailwind-only):** kebab-case → `project-card`, `hero-section`
- **Branches:** `feature/hero-section`, `fix/navbar-mobile`, `chore/deploy-config`
- **Commits:** Conventional Commits format
  - `feat: add projects section`
  - `fix: mobile nav overlap`
  - `style: update hero spacing`
  - `docs: update README`

---

## 4. Git & GitHub Workflow

1. `main` branch is always deployable — never commit broken code directly to it.
2. Work in feature branches, merge via Pull Request (even solo — good habit for team readiness).
3. Write meaningful commit messages (no `"update"` or `"fix stuff"`).
4. Tag releases when major versions ship (`v1.0.0`, `v1.1.0`).
5. `.env` files are never committed — only `.env.example` with dummy keys.

---

## 5. Required Sections (Content Standard)

| Section     | Must Include                                                        |
|-------------|----------------------------------------------------------------------|
| Hero        | Name, role title, one-line tagline, CTA button                      |
| About       | Short bio (3-4 lines), what you build, your focus area               |
| Skills      | MERN stack, Git/GitHub, Canva, + tools — shown with icons            |
| Projects    | Min. 3 projects: title, tech stack, description, live link, repo link|
| Contact     | Email, GitHub, LinkedIn, working contact form                        |
| Footer      | Copyright, quick links, social icons                                 |

Each project entry in `src/data/projects.js` must follow this shape:

```js
{
  id: "project-slug",
  title: "Project Name",
  description: "1-2 sentence summary of what it does and the problem it solves.",
  techStack: ["React", "Node.js", "Express", "MongoDB"],
  liveUrl: "https://...",
  githubUrl: "https://github.com/...",
  image: "/images/projects/project-slug.png",
  featured: true
}
```

---

## 6. Design Standards

- **Theme:** Dark base, 1–2 accent colors max
- **Typography:** One heading font + one body font (max 2 font families)
- **Spacing:** Consistent scale (Tailwind default spacing scale recommended)
- **Responsiveness:** Mobile-first — test at 375px, 768px, 1024px, 1440px
- **Images:** WebP format where possible, compressed, lazy-loaded
- **Accessibility:** Proper alt text, sufficient color contrast, semantic HTML tags (`<nav>`, `<main>`, `<section>`, `<footer>`)

---

## 7. Performance & SEO Checklist

- [ ] Lighthouse score 90+ on Performance, Accessibility, SEO
- [ ] All images optimized/compressed
- [ ] Meta title + description set per page
- [ ] Open Graph tags for social link previews
- [ ] Favicon set
- [ ] `robots.txt` and `sitemap.xml` present
- [ ] No console errors/warnings in production build

---

## 8. Deployment (Vercel)

- Connect GitHub repo directly to Vercel (auto-deploy on push to `main`)
- Preview deployments auto-generated for PRs/feature branches
- Environment variables (e.g. Formspree/EmailJS keys) set in Vercel dashboard, not committed to repo
- Custom domain connected once live (recommended over default `.vercel.app` subdomain)

---

## 9. Definition of Done (per feature/section)

A section/feature is "done" only when:
1. Responsive on mobile, tablet, and desktop
2. No hardcoded content — pulled from `src/data/`
3. No console errors
4. Reviewed against Section 5 (Required Sections) checklist
5. Committed with a proper conventional commit message
6. Deployed preview checked on Vercel before merging to `main`

---

## 10. Future Enhancements (Backlog)

- [ ] Dark/light mode toggle
- [ ] GitHub contribution graph via GitHub API
- [ ] Blog section
- [ ] Case-study style project detail pages
- [ ] Testimonials section
- [ ] Analytics (Vercel Analytics)