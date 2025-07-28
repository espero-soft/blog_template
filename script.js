"use client"

// Données simulées pour le blog
const blogData = {
  articles: [
    {
      id: 1,
      title: "Introduction à React 18",
      excerpt:
        "Découvrez les nouvelles fonctionnalités de React 18 et comment elles peuvent améliorer vos applications.",
      content: `
        <p>React 18 apporte de nombreuses améliorations et nouvelles fonctionnalités qui révolutionnent la façon dont nous développons des applications React.</p>
        
        <h2>Les principales nouveautés</h2>
        <p>Parmi les fonctionnalités les plus importantes, nous retrouvons :</p>
        <ul>
          <li>Le Concurrent Rendering</li>
          <li>Les Suspense améliorés</li>
          <li>Les nouvelles hooks comme useId et useDeferredValue</li>
          <li>Le Strict Mode amélioré</li>
        </ul>
        
        <h2>Concurrent Rendering</h2>
        <p>Le Concurrent Rendering permet à React d'interrompre le rendu pour traiter des tâches plus urgentes, améliorant ainsi la réactivité de l'interface utilisateur.</p>
        
        <h2>Migration vers React 18</h2>
        <p>La migration vers React 18 est généralement simple, mais il y a quelques points à considérer pour s'assurer que votre application fonctionne correctement.</p>
      `,
      author: "Jean Dupont",
      date: "2024-01-15",
      category: "React",
      image: "assets/images/27.jpg",
      tags: ["React", "JavaScript", "Frontend", "Web Development"],
    },
    {
      id: 2,
      title: "CSS Grid vs Flexbox : Quand utiliser quoi ?",
      excerpt: "Une comparaison détaillée entre CSS Grid et Flexbox pour vous aider à choisir la meilleure solution.",
      content: `
        <p>CSS Grid et Flexbox sont deux systèmes de mise en page puissants, mais ils ont des cas d'usage différents.</p>
        
        <h2>CSS Grid : Pour les mises en page 2D</h2>
        <p>CSS Grid excelle dans la création de mises en page complexes en deux dimensions. Il est parfait pour :</p>
        <ul>
          <li>Les grilles de cartes</li>
          <li>Les mises en page de magazines</li>
          <li>Les interfaces complexes</li>
        </ul>
        
        <h2>Flexbox : Pour les mises en page 1D</h2>
        <p>Flexbox est idéal pour les mises en page unidimensionnelles :</p>
        <ul>
          <li>Les barres de navigation</li>
          <li>Les composants de cartes</li>
          <li>L'alignement d'éléments</li>
        </ul>
        
        <h2>Conclusion</h2>
        <p>Les deux technologies sont complémentaires et peuvent être utilisées ensemble pour créer des interfaces modernes et responsives.</p>
      `,
      author: "Marie Martin",
      date: "2024-01-10",
      category: "CSS",
      image: "assets/images/28.jpg",
      tags: ["CSS", "Layout", "Grid", "Flexbox", "Responsive"],
    },
    {
      id: 3,
      title: "Node.js et les API REST : Guide complet",
      excerpt: "Apprenez à créer des API REST robustes avec Node.js, Express et les meilleures pratiques.",
      content: `
        <p>Node.js est devenu l'un des choix les plus populaires pour créer des API REST performantes et scalables.</p>
        
        <h2>Pourquoi Node.js pour les API ?</h2>
        <p>Node.js offre plusieurs avantages pour le développement d'API :</p>
        <ul>
          <li>Performance élevée grâce à l'architecture événementielle</li>
          <li>Écosystème riche avec npm</li>
          <li>JavaScript côté serveur</li>
          <li>Communauté active</li>
        </ul>
        
        <h2>Structure d'une API REST</h2>
        <p>Une API REST bien structurée suit les principes RESTful et utilise les méthodes HTTP appropriées.</p>
        
        <h2>Sécurité et authentification</h2>
        <p>La sécurité est cruciale dans le développement d'API. Nous couvrirons JWT, CORS, et les meilleures pratiques de sécurité.</p>
      `,
      author: "Pierre Durand",
      date: "2024-01-05",
      category: "Backend",
      image: "assets/images/29.jpg",
      tags: ["Node.js", "API", "REST", "Express", "Backend"],
    },
    {
      id: 4,
      title: "TypeScript : Pourquoi l'adopter en 2024 ?",
      excerpt: "Les avantages de TypeScript et pourquoi il est devenu incontournable dans le développement moderne.",
      content: `
        <p>TypeScript a révolutionné le développement JavaScript en apportant un système de types statique robuste.</p>
        
        <h2>Les avantages de TypeScript</h2>
        <p>TypeScript offre de nombreux bénéfices :</p>
        <ul>
          <li>Détection d'erreurs à la compilation</li>
          <li>Meilleure expérience de développement</li>
          <li>Code plus maintenable</li>
          <li>Refactoring sécurisé</li>
        </ul>
        
        <h2>TypeScript dans l'écosystème moderne</h2>
        <p>La plupart des frameworks modernes supportent TypeScript nativement, ce qui facilite son adoption.</p>
        
        <h2>Migration progressive</h2>
        <p>Il est possible de migrer progressivement un projet JavaScript vers TypeScript, ce qui réduit les risques.</p>
      `,
      author: "Sophie Leroy",
      date: "2023-12-28",
      category: "TypeScript",
      image: "assets/images/30.jpg",
      tags: ["TypeScript", "JavaScript", "Types", "Development", "Programming"],
    },
    {
      id: 5,
      title: "Optimisation des performances web",
      excerpt:
        "Techniques avancées pour optimiser les performances de vos applications web et améliorer l'expérience utilisateur.",
      content: `
        <p>L'optimisation des performances web est cruciale pour offrir une excellente expérience utilisateur.</p>
        
        <h2>Métriques importantes</h2>
        <p>Les Core Web Vitals sont devenus essentiels :</p>
        <ul>
          <li>Largest Contentful Paint (LCP)</li>
          <li>First Input Delay (FID)</li>
          <li>Cumulative Layout Shift (CLS)</li>
        </ul>
        
        <h2>Techniques d'optimisation</h2>
        <p>Plusieurs techniques peuvent améliorer les performances :</p>
        <ul>
          <li>Lazy loading des images</li>
          <li>Code splitting</li>
          <li>Mise en cache efficace</li>
          <li>Optimisation des images</li>
        </ul>
        
        <h2>Outils de mesure</h2>
        <p>Utilisez des outils comme Lighthouse, WebPageTest, et les DevTools pour mesurer et améliorer les performances.</p>
      `,
      author: "Thomas Blanc",
      date: "2023-12-20",
      category: "Performance",
      image: "assets/images/31.jpg",
      tags: ["Performance", "Optimization", "Web Vitals", "Speed", "UX"],
    },
    {
      id: 6,
      title: "Introduction à Docker pour les développeurs",
      excerpt: "Découvrez Docker et comment il peut simplifier le déploiement et la gestion de vos applications.",
      content: `
        <p>Docker a révolutionné la façon dont nous développons, testons et déployons nos applications.</p>
        
        <h2>Qu'est-ce que Docker ?</h2>
        <p>Docker est une plateforme de conteneurisation qui permet d'empaqueter une application avec toutes ses dépendances.</p>
        
        <h2>Avantages de Docker</h2>
        <ul>
          <li>Portabilité entre environnements</li>
          <li>Isolation des applications</li>
          <li>Déploiement simplifié</li>
          <li>Scalabilité</li>
        </ul>
        
        <h2>Docker vs Machines Virtuelles</h2>
        <p>Docker est plus léger et efficace que les machines virtuelles traditionnelles.</p>
        
        <h2>Premiers pas avec Docker</h2>
        <p>Nous verrons comment créer votre premier conteneur Docker et les commandes essentielles.</p>
      `,
      author: "Lucas Moreau",
      date: "2023-12-15",
      category: "DevOps",
      image: "assets/images/32.jpg",
      tags: ["Docker", "DevOps", "Containers", "Deployment", "Infrastructure"],
    },
  ],
  comments: {
    1: [
      {
        id: 1,
        author: "Alice Dubois",
        email: "alice@example.com",
        date: "2024-01-16",
        content: "Excellent article ! React 18 apporte vraiment des améliorations significatives.",
      },
      {
        id: 2,
        author: "Bob Martin",
        email: "bob@example.com",
        date: "2024-01-17",
        content: "Merci pour ce guide détaillé. J'ai hâte de migrer mes projets vers React 18.",
      },
    ],
    2: [
      {
        id: 3,
        author: "Claire Petit",
        email: "claire@example.com",
        date: "2024-01-11",
        content: "Très utile cette comparaison entre Grid et Flexbox. Cela m'aide à mieux choisir.",
      },
    ],
    3: [
      {
        id: 4,
        author: "David Rousseau",
        email: "david@example.com",
        date: "2024-01-06",
        content: "Super guide sur Node.js ! Les exemples sont très clairs.",
      },
    ],
  },
}

// Variables globales
let currentPage = 1
const articlesPerPage = 6
let filteredArticles = [...blogData.articles]
let currentTheme = localStorage.getItem("theme") || "light"

// Initialisation
document.addEventListener("DOMContentLoaded", () => {
  initializeTheme()
  initializeNavigation()

  // Initialisation spécifique selon la page
  const currentPath = window.location.pathname

  if (currentPath.includes("index.html") || currentPath === "/") {
    initializeHomePage()
  } else if (currentPath.includes("article.html")) {
    initializeArticlePage()
  } else if (currentPath.includes("contact.html")) {
    initializeContactPage()
  }
})

// Gestion du thème
function initializeTheme() {
  document.documentElement.setAttribute("data-theme", currentTheme)
  updateThemeToggle()
}

function toggleTheme() {
  currentTheme = currentTheme === "light" ? "dark" : "light"
  document.documentElement.setAttribute("data-theme", currentTheme)
  localStorage.setItem("theme", currentTheme)
  updateThemeToggle()
}

function updateThemeToggle() {
  const themeToggle = document.getElementById("theme-toggle")
  if (themeToggle) {
    themeToggle.textContent = currentTheme === "light" ? "🌙" : "☀️"
  }
}

// Navigation
function initializeNavigation() {
  const themeToggle = document.getElementById("theme-toggle")
  const navToggle = document.getElementById("nav-toggle")
  const navMenu = document.getElementById("nav-menu")

  if (themeToggle) {
    themeToggle.addEventListener("click", toggleTheme)
  }

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active")
    })

    // Fermer le menu mobile lors du clic sur un lien
    const navLinks = navMenu.querySelectorAll(".nav-link")
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active")
      })
    })
  }
}

// Page d'accueil
function initializeHomePage() {
  loadArticles()
  initializeSearch()
}

function loadArticles() {
  const articlesGrid = document.getElementById("articles-grid")
  if (!articlesGrid) return

  const startIndex = (currentPage - 1) * articlesPerPage
  const endIndex = startIndex + articlesPerPage
  const articlesToShow = filteredArticles.slice(startIndex, endIndex)

  articlesGrid.innerHTML = ""

  articlesToShow.forEach((article) => {
    const articleCard = createArticleCard(article)
    articlesGrid.appendChild(articleCard)
  })

  updatePagination()
}

function createArticleCard(article) {
  const card = document.createElement("div")
  card.className = "article-card"
  card.onclick = () => navigateToArticle(article.id)

  card.innerHTML = `
    <img src="${article.image}" alt="${article.title}" loading="lazy">
    <div class="article-card-content">
      <div class="article-meta">
        <span class="article-date">${formatDate(article.date)}</span>
        <span class="article-category">${article.category}</span>
      </div>
      <h3>${article.title}</h3>
      <p>${article.excerpt}</p>
    </div>
  `

  return card
}

function navigateToArticle(articleId) {
  window.location.href = `article.html?id=${articleId}`
}

function updatePagination() {
  const pagination = document.getElementById("pagination")
  if (!pagination) return

  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage)
  pagination.innerHTML = ""

  // Bouton précédent
  const prevBtn = document.createElement("button")
  prevBtn.textContent = "← Précédent"
  prevBtn.disabled = currentPage === 1
  prevBtn.onclick = () => changePage(currentPage - 1)
  pagination.appendChild(prevBtn)

  // Numéros de page
  for (let i = 1; i <= totalPages; i++) {
    const pageBtn = document.createElement("button")
    pageBtn.textContent = i
    pageBtn.className = i === currentPage ? "active" : ""
    pageBtn.onclick = () => changePage(i)
    pagination.appendChild(pageBtn)
  }

  // Bouton suivant
  const nextBtn = document.createElement("button")
  nextBtn.textContent = "Suivant →"
  nextBtn.disabled = currentPage === totalPages
  nextBtn.onclick = () => changePage(currentPage + 1)
  pagination.appendChild(nextBtn)
}

function changePage(page) {
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage)
  if (page < 1 || page > totalPages) return

  currentPage = page
  loadArticles()
  window.scrollTo({ top: 0, behavior: "smooth" })
}

// Recherche
function initializeSearch() {
  const searchInput = document.getElementById("search-input")
  const searchBtn = document.getElementById("search-btn")

  if (searchInput && searchBtn) {
    searchBtn.addEventListener("click", performSearch)
    searchInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        performSearch()
      }
    })

    // Recherche en temps réel
    searchInput.addEventListener("input", debounce(performSearch, 300))
  }
}

function performSearch() {
  const searchInput = document.getElementById("search-input")
  const query = searchInput.value.toLowerCase().trim()

  if (query === "") {
    filteredArticles = [...blogData.articles]
  } else {
    filteredArticles = blogData.articles.filter(
      (article) =>
        article.title.toLowerCase().includes(query) ||
        article.excerpt.toLowerCase().includes(query) ||
        article.content.toLowerCase().includes(query) ||
        article.tags.some((tag) => tag.toLowerCase().includes(query)),
    )
  }

  currentPage = 1
  loadArticles()
}

// Page d'article
function initializeArticlePage() {
  const urlParams = new URLSearchParams(window.location.search)
  const articleId = Number.parseInt(urlParams.get("id"))

  if (articleId) {
    loadArticle(articleId)
    loadComments(articleId)
    initializeCommentForm(articleId)
  }
}

function loadArticle(articleId) {
  const article = blogData.articles.find((a) => a.id === articleId)
  if (!article) {
    document.querySelector(".article-page .container").innerHTML = "<h1>Article non trouvé</h1>"
    return
  }

  // Mettre à jour le titre de la page
  document.title = `${article.title} - Mon Blog`

  // Remplir les éléments de l'article
  document.getElementById("article-title").textContent = article.title
  document.getElementById("article-date").textContent = formatDate(article.date)
  document.getElementById("article-author").textContent = article.author
  document.getElementById("article-category").textContent = article.category
  document.getElementById("article-image").src = article.image
  document.getElementById("article-image").alt = article.title
  document.getElementById("article-body").innerHTML = article.content

  // Afficher les tags
  const tagsContainer = document.getElementById("article-tags")
  tagsContainer.innerHTML = ""
  article.tags.forEach((tag) => {
    const tagElement = document.createElement("a")
    tagElement.href = `index.html?tag=${encodeURIComponent(tag)}`
    tagElement.className = "tag"
    tagElement.textContent = tag
    tagsContainer.appendChild(tagElement)
  })

  // Navigation entre articles
  updateArticleNavigation(articleId)
}

function updateArticleNavigation(currentId) {
  const currentIndex = blogData.articles.findIndex((a) => a.id === currentId)
  const prevArticle = currentIndex > 0 ? blogData.articles[currentIndex - 1] : null
  const nextArticle = currentIndex < blogData.articles.length - 1 ? blogData.articles[currentIndex + 1] : null

  const prevLink = document.getElementById("prev-article")
  const nextLink = document.getElementById("next-article")

  if (prevArticle) {
    prevLink.href = `article.html?id=${prevArticle.id}`
    prevLink.querySelector("strong").textContent = prevArticle.title
    prevLink.style.display = "block"
  } else {
    prevLink.style.display = "none"
  }

  if (nextArticle) {
    nextLink.href = `article.html?id=${nextArticle.id}`
    nextLink.querySelector("strong").textContent = nextArticle.title
    nextLink.style.display = "block"
  } else {
    nextLink.style.display = "none"
  }
}

function loadComments(articleId) {
  const commentsList = document.getElementById("comments-list")
  const comments = blogData.comments[articleId] || []

  commentsList.innerHTML = ""

  if (comments.length === 0) {
    commentsList.innerHTML = "<p>Aucun commentaire pour le moment. Soyez le premier à commenter !</p>"
    return
  }

  comments.forEach((comment) => {
    const commentElement = createCommentElement(comment)
    commentsList.appendChild(commentElement)
  })
}

function createCommentElement(comment) {
  const commentDiv = document.createElement("div")
  commentDiv.className = "comment"

  commentDiv.innerHTML = `
    <div class="comment-header">
      <span class="comment-author">${comment.author}</span>
      <span class="comment-date">${formatDate(comment.date)}</span>
    </div>
    <p>${comment.content}</p>
  `

  return commentDiv
}

function initializeCommentForm(articleId) {
  const commentForm = document.getElementById("comment-form")

  commentForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const name = document.getElementById("comment-name").value
    const email = document.getElementById("comment-email").value
    const content = document.getElementById("comment-text").value

    // Simuler l'ajout d'un commentaire
    const newComment = {
      id: Date.now(),
      author: name,
      email: email,
      date: new Date().toISOString().split("T")[0],
      content: content,
    }

    if (!blogData.comments[articleId]) {
      blogData.comments[articleId] = []
    }

    blogData.comments[articleId].push(newComment)

    // Recharger les commentaires
    loadComments(articleId)

    // Réinitialiser le formulaire
    commentForm.reset()

    // Afficher un message de succès
    showNotification("Commentaire ajouté avec succès !", "success")
  })
}

// Page de contact
function initializeContactPage() {
  const contactForm = document.getElementById("contact-form")

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Simuler l'envoi du formulaire
      const formData = new FormData(contactForm)
      const data = Object.fromEntries(formData)

      // Afficher le message de succès
      contactForm.style.display = "none"
      document.getElementById("form-success").style.display = "block"

      // Réinitialiser après 5 secondes
      setTimeout(() => {
        contactForm.style.display = "block"
        document.getElementById("form-success").style.display = "none"
        contactForm.reset()
      }, 5000)
    })
  }
}

// Fonctions utilitaires
function formatDate(dateString) {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  }
  return new Date(dateString).toLocaleDateString("fr-FR", options)
}

function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

function showNotification(message, type = "info") {
  const notification = document.createElement("div")
  notification.className = `notification notification-${type}`
  notification.textContent = message

  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: ${type === "success" ? "#10b981" : "#3b82f6"};
    color: white;
    padding: 1rem 2rem;
    border-radius: 8px;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    z-index: 1000;
    animation: slideIn 0.3s ease-out;
  `

  document.body.appendChild(notification)

  setTimeout(() => {
    notification.style.animation = "slideOut 0.3s ease-out"
    setTimeout(() => {
      document.body.removeChild(notification)
    }, 300)
  }, 3000)
}

// Styles pour les animations des notifications
const style = document.createElement("style")
style.textContent = `
  @keyframes slideIn {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes slideOut {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(100%);
      opacity: 0;
    }
  }
`
document.head.appendChild(style)

// Gestion du scroll pour la navigation sticky
let lastScrollTop = 0
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header")
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop

  if (scrollTop > lastScrollTop && scrollTop > 100) {
    // Scroll vers le bas
    header.style.transform = "translateY(-100%)"
  } else {
    // Scroll vers le haut
    header.style.transform = "translateY(0)"
  }

  lastScrollTop = scrollTop
})

// Lazy loading pour les images
if ("IntersectionObserver" in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target
        img.src = img.dataset.src || img.src
        img.classList.remove("lazy")
        observer.unobserve(img)
      }
    })
  })

  document.querySelectorAll('img[loading="lazy"]').forEach((img) => {
    imageObserver.observe(img)
  })
}

// Gestion des erreurs globales
window.addEventListener("error", (e) => {
  console.error("Erreur JavaScript:", e.error)
  showNotification("Une erreur est survenue. Veuillez rafraîchir la page.", "error")
})

// Service Worker pour la mise en cache (optionnel)
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then((registration) => {
        console.log("ServiceWorker enregistré avec succès:", registration.scope)
      })
      .catch((error) => {
        console.log("Échec de l'enregistrement du ServiceWorker:", error)
      })
  })
}
