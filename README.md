# Tarini Yadav | Developer Portfolio

Personal portfolio website of **Tarini Yadav**, a 2026 BCA graduate and **Java Full Stack Development Intern at Tekloomy (OPC) Private Limited**, focused on building and deploying secure backend applications with **Java, Spring Boot, Spring Security, and PostgreSQL**.

🔗 **Live Portfolio:** https://tarini-codes.github.io/my-portfolio/

## About

I build secure REST APIs and web applications using Java, Spring Boot, Spring Security, JWT, and PostgreSQL, containerize them with Docker, and deploy them live on Render. Alongside backend engineering, I built a scoped VAPT security assessment agent in Python during the DataOps Innovation Hackathon and practice Data Structures and Algorithms.

I am actively looking for **Java Backend Developer**, **Software Engineer Trainee**, and **Software Developer Intern** opportunities.

## Featured & Recent Projects

### SocialMediaPlanner
A full-stack Spring Boot and PostgreSQL application for scheduling and automating social media posts with server-side post ownership enforcement, a 30-second `@Scheduled` background worker, and live Telegram Bot API publishing.
- **Live Demo:** https://social-media-planner-6.onrender.com/login
- **Repository:** https://github.com/tarini-codes/social-media-planner

### Spring Boot Login Demo
A REST authentication service implementing stateless JWT tokens, server-assigned `USER`/`ADMIN` role-based access control, BCrypt password hashing, 5-attempt brute-force lockout (`423 Locked`), centralized exception handling, and OpenAPI/Swagger documentation.
- **Live Demo:** https://spring-boot-login-demo.onrender.com
- **Swagger UI:** https://spring-boot-login-demo.onrender.com/swagger-ui/index.html
- **Repository:** https://github.com/tarini-codes/spring-boot-login-demo

### AI Agent for Automated Security Assessment (VAPT)
Built at the DataOps Innovation Hackathon using Python and the Gemini API to plan scoped assessments while deterministic Python code enforces target boundaries, requests human approval, runs Nmap and OWASP ZAP, and compiles PDF audit reports from tool output.
- **Repository:** https://github.com/tarini-codes/vapt_agent

> **Note:** Live demos on Render free tier may take 60–90 seconds on initial cold start.

## Other Projects
- **Mochi Portfolio:** Interactive web & Web Audio API project — https://github.com/tarini-codes/mochi-portfolio

## Certifications & Simulations
- **HackerRank Software Engineer Intern (Role Certification):** Problem Solving and SQL (Oct 2026)
- **Datacom Software Development Job Simulation (Forage):** Root-cause debugging on a MapLibre coordinate bug (`[lng, lat]` vs. `[lat, lng]`) and 10/10 final quiz score (Nov 2026)
- **Unstop Hackathons:** DataOps Innovation Hackathon & Baby's First Website Hackathon (Nov 2026)

## Portfolio Architecture & Features
- **Markup & Styling:** Semantic HTML5 and modular CSS3 with CSS custom properties (`style.css`)
- **Interactivity:** Persistent dark/light mode toggle (`localStorage`) and click-to-enlarge screenshot lightbox (`script.js`)
- **Hosting:** GitHub Pages

### Run Locally
```bash
git clone [https://github.com/tarini-codes/my-portfolio.git](https://github.com/tarini-codes/my-portfolio.git)
cd my-portfolio
# Open index.html directly or serve with a local static server
python -m http.server 8080