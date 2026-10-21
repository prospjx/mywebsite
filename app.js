/**
 * Interactive Developer Portfolio Engine
 * Author: Prosper Olusegun-Joseph
 */

// PROJECTS DATABASE
const PROJECTS_DATA = [
  // Cloud & DevOps
  {
    id: "devops-project",
    category: "devops",
    categoryLabel: "Cloud & DevOps",
    name: "DevOps-Project",
    headline: "Production-style Task Management API & Pipeline",
    desc: "An end-to-end cloud engineering implementation featuring FastAPI, PostgreSQL persistence, Docker containerization, Kubernetes manifests, Terraform IaC, and full Prometheus/Grafana telemetry.",
    technologies: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "Docker", "Kubernetes", "Terraform", "Prometheus", "Grafana", "GitHub Actions"],
    github: "https://github.com/prospjx/DevOps-Project",
    architecture: "FastAPI REST API -> PostgreSQL -> Prometheus scraping /metrics -> Grafana visualization -> GitHub Actions CI/CD to K8s cluster",
    highlights: [
      "Containerized microservice with multi-stage Docker build reducing image footprint",
      "Infrastructure defined declaratively via Terraform modules",
      "Full observability pipeline with custom metrics exported to Prometheus and visualized on Grafana",
      "Automated continuous integration workflow running linting, unit tests, and security scans on push"
    ]
  },
  {
    id: "gitops",
    category: "devops",
    categoryLabel: "Continuous Delivery",
    name: "gitops",
    headline: "GitOps Continuous Delivery Platform (ArgoCD + EKS)",
    desc: "Declarative GitOps infrastructure automating continuous reconciliation of microservices on AWS EKS using ArgoCD, Helm charts, autoscaling policies, and network isolation.",
    technologies: ["GitOps", "ArgoCD", "AWS EKS", "Kubernetes", "Helm", "Docker", "Terraform", "Prometheus"],
    github: "https://github.com/prospjx/gitops",
    architecture: "Git Repo (Single Source of Truth) -> ArgoCD Controller -> AWS EKS Cluster (Namespaces: Prod/Staging) -> Helm Charts -> Continuous Drift Reconciliation",
    highlights: [
      "Zero-touch automated deployment triggered via declarative repository commits",
      "Configured Horizontal Pod Autoscalers (HPA) and Pod Disruption Budgets (PDB)",
      "Strict network policies and RBAC security boundaries across namespaces",
      "Unified Helm charts managing Course, Student, Scheduler, and AI services"
    ]
  },
  {
    id: "infra-terraform",
    category: "devops",
    categoryLabel: "Infrastructure as Code",
    name: "infra-terraform",
    headline: "Modular Cloud Infrastructure as Code",
    desc: "Terraform configurations provisioning VPC networking, subnet topologies, security groups, RDS PostgreSQL instances, and managed compute environments with remote state management.",
    technologies: ["Terraform", "HCL", "AWS", "VPC", "RDS PostgreSQL", "IAM", "Cloud Architecture"],
    github: "https://github.com/prospjx/infra-terraform",
    architecture: "Terraform HCL -> S3 Remote Backend + DynamoDB State Locking -> AWS VPC / Subnets / Security Groups / RDS Database clusters",
    highlights: [
      "Production-ready modular HCL design with isolated environment parameterization",
      "State locking with DynamoDB ensuring zero concurrent modification collisions",
      "Least-privilege IAM roles and encrypted storage configurations"
    ]
  },
  {
    id: "ci-cd-final-project",
    category: "devops",
    categoryLabel: "CI/CD Pipeline",
    name: "ci-cd-final-project",
    headline: "Enterprise Continuous Integration & Delivery",
    desc: "Demonstration of advanced continuous delivery, test automation, branch protection policies, artifact publishing, and automated canary/staged deployment stages.",
    technologies: ["Python", "CI/CD", "GitHub Actions", "Docker", "Pytest", "Automation"],
    github: "https://github.com/prospjx/ci-cd-final-project",
    architecture: "Code Push -> Lint & Security Audit -> Automated Unit & Integration Tests -> Container Image Tagging -> Staged Deployment",
    highlights: [
      "Multi-stage pipeline validation gate ensuring code quality thresholds",
      "Automated test coverage reporting and vulnerability scanning",
      "Fast container caching strategies accelerating build times"
    ]
  },

  // Backend & Microservices
  {
    id: "scheduler-api",
    category: "backend",
    categoryLabel: "Core Orchestrator",
    name: "scheduler-api",
    headline: "Constraint-Satisfaction Scheduler Engine & Gateway",
    desc: "The central microservice orchestrator for the Smart Course Scheduler platform. Solves conflict-free timetable combinations and acts as an intelligent gateway across backend services.",
    technologies: ["Python", "FastAPI", "PostgreSQL", "CSP Algorithms", "Microservices", "Docker", "Kubernetes", "Prometheus"],
    github: "https://github.com/prospjx/scheduler-api",
    architecture: "Client / Frontend -> scheduler-api (Gateway & Engine) -> course-api (Metadata) -> student-api (Preferences) -> ai-assistant-api (Gemini LLM)",
    highlights: [
      "Constraint satisfaction algorithm optimizing schedules against conflicts and student preferences",
      "Service-to-service communication with timeout handling and circuit breakers",
      "RESTful API design with comprehensive OpenAPI documentation and Pydantic validation"
    ]
  },
  {
    id: "course-api",
    category: "backend",
    categoryLabel: "Microservices",
    name: "course-api",
    headline: "University Course Catalog & Lecture Microservice",
    desc: "A high-performance FastAPI service managing catalog courses, lecture sections, time slots, prerequisites, and credit allocations with PostgreSQL persistence.",
    technologies: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "Pydantic", "Alembic", "Docker", "Kubernetes"],
    github: "https://github.com/prospjx/course-api",
    architecture: "Client / Scheduler Engine -> FastAPI -> SQLAlchemy ORM -> PostgreSQL (Alembic Migrations) -> Dockerized Container",
    highlights: [
      "Structured data model handling lecture sections, prerequisite graphs, and room capacities",
      "Database schema versioning and zero-downtime migrations managed with Alembic",
      "High-throughput querying with indexed course code lookups"
    ]
  },
  {
    id: "student-api",
    category: "backend",
    categoryLabel: "Microservices",
    name: "student-api",
    headline: "Student Profiles & Routine Preferences Service",
    desc: "Manages student academic records, enrolled credit hours, and personal daily preferences such as commute time, study hours, sleep schedules, and workout routines.",
    technologies: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "Alembic", "Docker", "Kubernetes"],
    github: "https://github.com/prospjx/student-api",
    architecture: "FastAPI endpoints -> Student schema validation -> PostgreSQL storage -> Secure token authentication",
    highlights: [
      "Flexible schema allowing tailored preferences (earliest class, break duration, workout windows)",
      "Strict data validation with Pydantic v2 ensuring data integrity",
      "Seamless integration with Scheduler Engine for personalized schedule generation"
    ]
  },
  {
    id: "postgres-microservice",
    category: "backend",
    categoryLabel: "Data Layer",
    name: "postgres-microservice",
    headline: "Distributed PostgreSQL Data Architecture",
    desc: "Specialized service focused on PostgreSQL-driven application patterns, connection pooling, automated backups, and containerized deployment blueprints.",
    technologies: ["PostgreSQL", "Backend Development", "Microservices", "Docker", "Service Architecture"],
    github: "https://github.com/prospjx/postgres-microservice",
    architecture: "Application Services -> PgBouncer / Connection Pool -> PostgreSQL Primary -> Replication / Backup Volume",
    highlights: [
      "Optimized connection pooling configuration reducing database latency under load",
      "Automated seed scripts and volume backup strategies",
      "Container healthchecks and readiness probes for resilient startup"
    ]
  },

  // AI & Full-Stack / Mobile
  {
    id: "ai-assistant-api",
    category: "ai",
    categoryLabel: "Multimodal AI",
    name: "ai-assistant-api",
    headline: "Multimodal AI Scheduling & Advisory Service (Google Gemini)",
    desc: "An intelligent scheduling service powered by FastAPI and Google Gemini. Extracts timetable data directly from schedule images, analyzes constraints, and generates personalized routines with heuristic fallback.",
    technologies: ["Python", "FastAPI", "Google Gemini", "Multimodal AI", "Pydantic", "Docker", "Kubernetes"],
    github: "https://github.com/prospjx/ai-assistant-api",
    architecture: "Image / Prompt -> FastAPI Router -> Google Gemini Vision API -> Structured JSON Extraction -> Fallback Heuristic Engine",
    highlights: [
      "Multimodal document parsing extracting course codes and times directly from photos/screenshots",
      "Resilient heuristic fallback algorithm ensuring uptime if external AI API experiences outages",
      "Structured output enforcement ensuring 100% compliant JSON responses to caller microservices"
    ]
  },
  {
    id: "timely-dev",
    category: "ai",
    categoryLabel: "AI & Mobile App",
    name: "TimelyDev",
    headline: "AI-Powered Personal Time & Routine Assistant",
    desc: "Transforms natural-language tasks into actionable schedules. Features an async FastAPI backend, Flutter cross-platform mobile frontend, MongoDB persistence, AI task parsing, and voice brief generation.",
    technologies: ["Flutter", "Dart", "Python", "FastAPI", "MongoDB", "Gemini", "ElevenLabs", "Firebase"],
    github: "https://github.com/prospjx/TimelyDev",
    architecture: "Flutter Mobile App -> FastAPI Async Backend -> Gemini LLM Parser -> ElevenLabs Audio Synthesizer -> MongoDB -> Push Notifications via Firebase",
    highlights: [
      "Natural language understanding converting free-form text into calendar blocks",
      "AI-generated daily voice briefs synthesized with ElevenLabs audio API",
      "Cross-platform Flutter mobile UI delivering seamless iOS and Android experience"
    ]
  },
  {
    id: "amazingheartcentre",
    category: "ai",
    categoryLabel: "Full-Stack Web",
    name: "amazingheartcentre",
    headline: "Interactive Healthcare Booking & Contact Platform",
    desc: "A production web application managing appointments and inquiries using TypeScript, Supabase storage, and automated transactional emails through serverless Edge Functions.",
    technologies: ["TypeScript", "Supabase", "Netlify", "Edge Functions", "Tailored UI"],
    github: "https://github.com/prospjx/amazingheartcentre",
    architecture: "TypeScript Single Page App -> Netlify Edge CDN -> Supabase Database & Auth -> Edge Functions for transactional notifications",
    highlights: [
      "Clean, accessible appointment booking workflow with client-side validation",
      "Serverless Edge Functions delivering instantaneous email notifications",
      "Real-time database synchronisation via Supabase"
    ]
  }
];

// ARCHITECTURE VISUALIZER NODES
const ARCH_NODES = {
  "gateway": {
    name: "scheduler-api (Gateway & Engine)",
    role: "Central Orchestrator",
    detail: "Receives incoming timetable requests, calls Course and Student APIs, executes constraint satisfaction solver, queries Gemini for intelligent routing, and returns conflict-free schedules."
  },
  "course": {
    name: "course-api",
    role: "Course Catalog Microservice",
    detail: "Maintains course offerings, sections, credit requirements, prerequisite trees, and lecture schedule slots backed by PostgreSQL."
  },
  "student": {
    name: "student-api",
    role: "Student Preferences Service",
    detail: "Manages student profiles, enrolled hours, commute constraints, work shifts, and personal routines (gym, study hours, sleep)."
  },
  "ai": {
    name: "ai-assistant-api (Google Gemini)",
    role: "Multimodal AI Service",
    detail: "Parses timetable syllabus images and provides personalized AI advisory recommendations, backed by Google Gemini with heuristic fallback."
  },
  "db": {
    name: "PostgreSQL Database Cluster",
    role: "Persistent Storage Layer",
    detail: "Reliable relational data persistence with connection pooling, Alembic migration histories, and automated backup routines."
  },
  "gitops": {
    name: "GitOps Continuous Delivery (ArgoCD + EKS)",
    role: "Infrastructure & Deployment",
    detail: "AWS EKS cluster automatically reconciled by ArgoCD controller from Helm charts, maintaining declarative desired state."
  }
};

// INITIALIZATION
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  renderProjects();
  initTabs();
  initTerminal();
  initArchitectureExplorer();
  initModal();
  initContact();
  updateLiveTimestamp();
  fetchGitHubStats();
});

// THEME TOGGLE
function initTheme() {
  const themeToggle = document.getElementById("themeToggle");
  const savedTheme = localStorage.getItem("poj_theme") || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme");
      const next = current === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("poj_theme", next);
      updateThemeIcon(next);
    });
  }
}

function updateThemeIcon(theme) {
  const icon = document.querySelector("#themeToggle i");
  if (icon) {
    icon.className = theme === "dark" ? "fas fa-sun" : "fas fa-moon";
  }
}

// RENDER PROJECT CARDS
function renderProjects() {
  const devopsContainer = document.getElementById("devopsProjectsGrid");
  const backendContainer = document.getElementById("backendProjectsGrid");
  const aiContainer = document.getElementById("aiProjectsGrid");

  if (devopsContainer) {
    devopsContainer.innerHTML = PROJECTS_DATA
      .filter(p => p.category === "devops")
      .map(createProjectCard)
      .join("");
  }

  if (backendContainer) {
    backendContainer.innerHTML = PROJECTS_DATA
      .filter(p => p.category === "backend")
      .map(createProjectCard)
      .join("");
  }

  if (aiContainer) {
    aiContainer.innerHTML = PROJECTS_DATA
      .filter(p => p.category === "ai")
      .map(createProjectCard)
      .join("");
  }
}

function createProjectCard(proj) {
  const techBadges = proj.technologies.slice(0, 5).map(t => `<span class="tech-tag">${escapeHtml(t)}</span>`).join("");

  return `
    <article class="project-card" data-id="${proj.id}">
      <div class="card-top">
        <span class="project-category-tag">${escapeHtml(proj.categoryLabel)}</span>
        <div class="card-actions">
          <span class="repo-meta-badge stars" id="stars-${proj.id}" title="GitHub Stars">
            <i class="fas fa-star"></i> <span class="count">0</span>
          </span>
          <span class="repo-meta-badge" id="forks-${proj.id}" title="GitHub Forks">
            <i class="fas fa-code-fork"></i> <span class="count">0</span>
          </span>
          <a href="${proj.github}" target="_blank" rel="noopener noreferrer" class="icon-link" title="View Source on GitHub" aria-label="GitHub Repository">
            <i class="fab fa-github fa-lg"></i>
          </a>
        </div>
      </div>
      <h3 class="project-name">${escapeHtml(proj.name)}</h3>
      <div class="project-headline">${escapeHtml(proj.headline)}</div>
      <p class="project-desc">${escapeHtml(proj.desc)}</p>
      <div class="tech-tag-cloud">${techBadges}</div>
      <div class="card-footer">
        <button class="btn-detail" onclick="openProjectModal('${proj.id}')">
          System Details & Architecture <i class="fas fa-arrow-right"></i>
        </button>
      </div>
    </article>
  `;
}

// TAB SWITCHING LOGIC
function initTabs() {
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabPanels = document.querySelectorAll(".tab-panel");

  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetTab = btn.getAttribute("data-tab");

      tabButtons.forEach(b => b.classList.remove("active"));
      tabPanels.forEach(p => p.classList.remove("active"));

      btn.classList.add("active");
      const activePanel = document.getElementById(targetTab);
      if (activePanel) {
        activePanel.classList.add("active");
      }
    });
  });
}

// INTERACTIVE ARCHITECTURE EXPLORER
function initArchitectureExplorer() {
  const nodes = document.querySelectorAll(".arch-node");
  const panelTitle = document.getElementById("archNodeTitle");
  const panelDesc = document.getElementById("archNodeDesc");

  nodes.forEach(node => {
    node.addEventListener("click", () => {
      nodes.forEach(n => n.classList.remove("active-node"));
      node.classList.add("active-node");

      const key = node.getAttribute("data-node-key");
      const data = ARCH_NODES[key];
      if (data && panelTitle && panelDesc) {
        panelTitle.textContent = `${data.name} [${data.role}]`;
        panelDesc.textContent = data.detail;
      }
    });
  });
}

// PROJECT MODAL
function initModal() {
  const overlay = document.getElementById("projectModalOverlay");
  const closeBtn = document.getElementById("modalCloseBtn");

  if (overlay && closeBtn) {
    closeBtn.addEventListener("click", closeModal);
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) closeModal();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && overlay.classList.contains("open")) {
        closeModal();
      }
    });
  }
}

function openProjectModal(id) {
  const project = PROJECTS_DATA.find(p => p.id === id);
  if (!project) return;

  const modalBody = document.getElementById("modalContentBody");
  const overlay = document.getElementById("projectModalOverlay");

  const highlightsHtml = project.highlights.map(h => `<li><i class="fas fa-check-circle" style="color:#10b981; margin-right:8px;"></i>${escapeHtml(h)}</li>`).join("");
  const techBadges = project.technologies.map(t => `<span class="tech-tag" style="background:rgba(37,99,235,0.12); color:#93c5fd; border-color:rgba(59,130,246,0.3);">${escapeHtml(t)}</span>`).join(" ");

  modalBody.innerHTML = `
    <div style="margin-bottom: 1.25rem;">
      <span class="project-category-tag">${escapeHtml(project.categoryLabel)}</span>
      <h2 style="font-size: 1.85rem; margin: 0.6rem 0 0.3rem;">${escapeHtml(project.name)}</h2>
      <div style="color: var(--accent-cyan); font-weight: 600; font-size: 1rem; margin-bottom: 1rem;">
        ${escapeHtml(project.headline)}
      </div>
      <p style="color: var(--text-secondary); line-height: 1.7; font-size: 0.98rem; margin-bottom: 1.5rem;">
        ${escapeHtml(project.desc)}
      </p>
    </div>

    <div style="background: var(--bg-tertiary); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 1.25rem; margin-bottom: 1.5rem; font-family: var(--font-mono); font-size: 0.85rem;">
      <div style="color: #94a3b8; font-weight: 700; margin-bottom: 0.5rem; text-transform: uppercase; font-size: 0.75rem; letter-spacing: 0.05em;">
        <i class="fas fa-network-wired"></i> Architecture Flow:
      </div>
      <div style="color: #38bdf8; line-height: 1.6;">
        ${escapeHtml(project.architecture)}
      </div>
    </div>

    <div style="margin-bottom: 1.5rem;">
      <h4 style="font-size: 0.95rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-muted); margin-bottom: 0.75rem;">Key Engineering Highlights</h4>
      <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.65rem; color: var(--text-secondary); font-size: 0.92rem;">
        ${highlightsHtml}
      </ul>
    </div>

    <div style="margin-bottom: 2rem;">
      <h4 style="font-size: 0.95rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--text-muted); margin-bottom: 0.75rem;">Technology Stack</h4>
      <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">${techBadges}</div>
    </div>

    <div style="display: flex; gap: 1rem; align-items: center; padding-top: 1rem; border-top: 1px solid var(--border-subtle);">
      <a href="${project.github}" target="_blank" rel="noopener noreferrer" class="btn-primary" style="flex: 1; justify-content: center;">
        <i class="fab fa-github"></i> View GitHub Repository
      </a>
      <button class="btn-secondary" onclick="closeModal()">Close</button>
    </div>
  `;

  overlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const overlay = document.getElementById("projectModalOverlay");
  if (overlay) overlay.classList.remove("open");
  document.body.style.overflow = "";
}

// INTERACTIVE TERMINAL
function initTerminal() {
  const input = document.getElementById("terminalInput");
  const body = document.getElementById("terminalBody");
  if (!input || !body) return;

  const cmdHistory = [];
  let historyIdx = -1;

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      const rawCmd = input.value.trim();
      input.value = "";
      if (!rawCmd) return;

      cmdHistory.push(rawCmd);
      historyIdx = cmdHistory.length;

      executeTerminalCommand(rawCmd, body);
      body.scrollTop = body.scrollHeight;
    } else if (e.key === "ArrowUp") {
      if (cmdHistory.length > 0 && historyIdx > 0) {
        historyIdx--;
        input.value = cmdHistory[historyIdx];
      }
    } else if (e.key === "ArrowDown") {
      if (historyIdx < cmdHistory.length - 1) {
        historyIdx++;
        input.value = cmdHistory[historyIdx];
      } else {
        historyIdx = cmdHistory.length;
        input.value = "";
      }
    }
  });
}

function executeTerminalCommand(rawCmd, body) {
  const parts = rawCmd.split(" ").filter(Boolean);
  const cmd = parts[0].toLowerCase();
  const arg = parts[1] ? parts[1].toLowerCase() : "";

  let output = "";

  switch (cmd) {
    case "help":
      output = `
Available commands:
  <span class="cmd-badge">whoami</span>       Display summary and engineering focus
  <span class="cmd-badge">resume</span>       Download Prosper's PDF Resume
  <span class="cmd-badge">projects</span>     List all featured repositories & microservices
  <span class="cmd-badge">devops</span>       Show Cloud & DevOps infrastructure details
  <span class="cmd-badge">arch</span>         Display Smart Course Scheduler architecture
  <span class="cmd-badge">skills</span>       Print core languages, frameworks, & cloud tools
  <span class="cmd-badge">contact</span>      Get verified contact email & LinkedIn link
  <span class="cmd-badge">github</span>       Open Prosper's GitHub in a new tab
  <span class="cmd-badge">linkedin</span>     Open Prosper's LinkedIn profile in a new tab
  <span class="cmd-badge">theme</span>        Toggle dark/light luxury theme
  <span class="cmd-badge">clear</span>        Clear the terminal history
      `;
      break;

    case "whoami":
      output = `
<b style="color:#60a5fa;">Prosper Olusegun-Joseph</b>
Role: Software Engineer / Cloud and DevOps Engineer
Education: Georgia State University (Computer Science)
Focus: Microservices, Distributed Systems, Cloud Architecture, GitOps, AI Systems
Status: <span style="color:#10b981;">● Open for SWE & Cloud/DevOps Opportunities</span>
Location: Atlanta, GA (Open to Hybrid & Remote)
Resume: <a href="resume.pdf" download="Prosper_Olusegun_Joseph_Resume.pdf" style="color:#38bdf8; text-decoration:underline;">Download Resume PDF</a>
      `;
      break;

    case "resume":
      const link = document.createElement("a");
      link.href = "resume.pdf";
      link.download = "Prosper_Olusegun_Joseph_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      output = `<span style="color:#10b981;">✔ Resume download initiated:</span> <a href="resume.pdf" download="Prosper_Olusegun_Joseph_Resume.pdf" style="color:#38bdf8; text-decoration:underline;">Prosper_Olusegun_Joseph_Resume.pdf</a>`;
      break;

    case "projects":
      output = `
<b style="color:#38bdf8;">Production Microservices & DevOps Repositories:</b>
  • <a href="https://github.com/prospjx/DevOps-Project" target="_blank" style="color:#60a5fa; text-decoration:underline;">DevOps-Project</a>: FastAPI + PostgreSQL + K8s + Terraform + Prometheus
  • <a href="https://github.com/prospjx/gitops" target="_blank" style="color:#60a5fa; text-decoration:underline;">gitops</a>: Continuous delivery via ArgoCD on AWS EKS
  • <a href="https://github.com/prospjx/scheduler-api" target="_blank" style="color:#60a5fa; text-decoration:underline;">scheduler-api</a>: CSP engine & microservices gateway
  • <a href="https://github.com/prospjx/ai-assistant-api" target="_blank" style="color:#60a5fa; text-decoration:underline;">ai-assistant-api</a>: Gemini Multimodal Vision & advisory service
  • <a href="https://github.com/prospjx/course-api" target="_blank" style="color:#60a5fa; text-decoration:underline;">course-api</a>: Course catalog & lecture slot service
  • <a href="https://github.com/prospjx/student-api" target="_blank" style="color:#60a5fa; text-decoration:underline;">student-api</a>: Student profiles & routine preferences
  • <a href="https://github.com/prospjx/TimelyDev" target="_blank" style="color:#60a5fa; text-decoration:underline;">TimelyDev</a>: Flutter + FastAPI + MongoDB + ElevenLabs AI assistant
      `;
      break;

    case "devops":
      output = `
<b style="color:#f59e0b;">Cloud & DevOps Stack:</b>
  • Infrastructure: AWS EKS, VPC, RDS PostgreSQL, Terraform IaC, Helm Charts
  • Delivery: ArgoCD GitOps, GitHub Actions automated CI/CD pipelines
  • Telemetry: Prometheus metric scraping, Grafana dashboards, Alerting
  • Containers: Docker multi-stage builds, Kubernetes (HPA, PDB, Network Policies)
      `;
      break;

    case "arch":
      output = `
<b style="color:#38bdf8;">Smart Course Scheduler Architecture Topology:</b>
[Client App]
     │ (HTTP/REST)
     ▼
[scheduler-api (Gateway & Constraint Engine)]
     ├───► [course-api (PostgreSQL)]
     ├───► [student-api (PostgreSQL)]
     └───► [ai-assistant-api (Google Gemini Multimodal)]
     ▲
[GitOps ArgoCD] ── Continuous Reconciliation ──► [AWS EKS Cluster]
      `;
      break;

    case "skills":
      output = `
<b>Languages:</b> Python, C++, Dart, JavaScript, TypeScript, SQL, HCL
<b>Frameworks & Libs:</b> FastAPI, Flutter, SQLAlchemy, Pydantic, Alembic
<b>DevOps & Cloud:</b> AWS, Docker, Kubernetes, Helm, Terraform, ArgoCD, GitHub Actions
<b>Databases:</b> PostgreSQL, MongoDB, Supabase, Redis
<b>Monitoring:</b> Prometheus, Grafana
      `;
      break;

    case "contact":
      output = `
Email: <a href="mailto:prospergodsson@gmail.com" style="color:#38bdf8;">prospergodsson@gmail.com</a>
GitHub: <a href="https://github.com/prospjx" target="_blank" style="color:#60a5fa;">https://github.com/prospjx</a>
LinkedIn: <a href="https://www.linkedin.com/in/polusegun-joseph/" target="_blank" style="color:#60a5fa;">https://www.linkedin.com/in/polusegun-joseph/</a>
      `;
      break;

    case "github":
      window.open("https://github.com/prospjx", "_blank");
      output = "Opening GitHub profile in a new tab...";
      break;

    case "linkedin":
      window.open("https://www.linkedin.com/in/polusegun-joseph/", "_blank");
      output = "Opening LinkedIn profile in a new tab...";
      break;

    case "theme":
      const cur = document.documentElement.getAttribute("data-theme");
      const next = cur === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("poj_theme", next);
      updateThemeIcon(next);
      output = `Switched theme to ${next} mode.`;
      break;

    case "clear":
      body.innerHTML = `
        <div class="terminal-welcome">
          Type <span class="highlight">help</span> to view available commands.
        </div>
        <div id="terminalCommandAnchor"></div>
      `;
      return;

    default:
      output = `<span style="color:#f43f5e;">command not found: ${escapeHtml(cmd)}</span>. Type <span class="cmd-badge">help</span> for a list of commands.`;
      break;
  }

  const entry = document.createElement("div");
  entry.className = "terminal-history-entry";
  entry.innerHTML = `
    <div class="terminal-prompt-line">
      <span class="prompt-symbol">➜</span>
      <span class="prompt-path">~/portfolio</span>
      <span style="color:#f8fafc;">${escapeHtml(rawCmd)}</span>
    </div>
    <div class="terminal-output">${output}</div>
  `;

  const anchor = document.getElementById("terminalCommandAnchor");
  if (anchor) {
    body.insertBefore(entry, anchor);
  } else {
    body.appendChild(entry);
  }
}

// CONTACT & COPY EMAIL TOAST
function initContact() {
  const copyBtn = document.getElementById("copyEmailBtn");
  if (copyBtn) {
    copyBtn.addEventListener("click", () => {
      const email = "prospergodsson@gmail.com";
      navigator.clipboard.writeText(email).then(() => {
        showToast("Email address copied to clipboard!");
      }).catch(() => {
        showToast("Email: prospergodsson@gmail.com");
      });
    });
  }
}

function showToast(message) {
  let toast = document.getElementById("toastNotice");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toastNotice";
    toast.className = "toast-notice";
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<i class="fas fa-check-circle" style="color:#38bdf8;"></i> ${escapeHtml(message)}`;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3200);
}

// LIVE TIMESTAMP
function updateLiveTimestamp() {
  const elem = document.getElementById("liveSystemTime");
  if (elem) {
    const now = new Date();
    elem.textContent = now.toLocaleDateString(undefined, {
      month: "short",
      day: "numeric",
      year: "numeric"
    });
  }
}

// ESCAPE HTML HELPER
function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// LIVE GITHUB API STATS FETCHER
async function fetchGitHubStats() {
  const username = "prospjx";
  try {
    // 1. Fetch user general profile
    const userRes = await fetch(`https://api.github.com/users/${username}`);
    if (userRes.ok) {
      const userData = await userRes.json();
      const reposCountElem = document.getElementById("ghReposCount");
      if (reposCountElem && userData.public_repos !== undefined) {
        reposCountElem.textContent = userData.public_repos;
      }
    }

    // 2. Fetch user repositories (up to 100)
    const reposRes = await fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`);
    if (reposRes.ok) {
      const repos = await reposRes.json();
      let totalStars = 0;
      let latestPushDate = null;

      repos.forEach(repo => {
        totalStars += (repo.stargazers_count || 0);

        const pushDate = new Date(repo.pushed_at);
        if (!latestPushDate || pushDate > latestPushDate) {
          latestPushDate = pushDate;
        }

        // Match card elements
        const matchedProj = PROJECTS_DATA.find(p => p.name.toLowerCase() === repo.name.toLowerCase());
        if (matchedProj) {
          const starElem = document.getElementById(`stars-${matchedProj.id}`);
          if (starElem) {
            starElem.querySelector(".count").textContent = repo.stargazers_count || 0;
          }
          const forkElem = document.getElementById(`forks-${matchedProj.id}`);
          if (forkElem) {
            forkElem.querySelector(".count").textContent = repo.forks_count || 0;
          }
        }
      });

      const starsCountElem = document.getElementById("ghStarsCount");
      if (starsCountElem) {
        starsCountElem.textContent = totalStars;
      }

      const recentPushElem = document.getElementById("ghRecentPush");
      if (recentPushElem && latestPushDate) {
        const diffDays = Math.floor((new Date() - latestPushDate) / (1000 * 60 * 60 * 24));
        if (diffDays <= 7) {
          recentPushElem.textContent = "This Week";
        } else if (diffDays <= 30) {
          recentPushElem.textContent = `${Math.floor(diffDays / 7)}w ago`;
        } else {
          recentPushElem.textContent = "Active";
        }
      }
    }
  } catch (err) {
    console.warn("GitHub API rate limit or network offline, keeping fallback numbers:", err);
    const starsCountElem = document.getElementById("ghStarsCount");
    if (starsCountElem) starsCountElem.textContent = "0";
  }
}

