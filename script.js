(() => {
  const config = window.EV_SITE_CONFIG || {};
  const dashboardUrl = (config.tableauUrl || "").trim();
  const videoUrl = (config.videoUrl || "").trim();
  const dashboardReady = dashboardUrl.startsWith("https://public.tableau.com/") &&
    !dashboardUrl.includes("PASTE_TABLEAU");
  const videoReady = /^https:\/\/(drive\.google\.com|docs\.google\.com)\//.test(videoUrl) &&
    !videoUrl.includes("PASTE_PUBLIC");

  const iframe = document.getElementById("tableauEmbed");
  const placeholder = document.getElementById("dashboardPlaceholder");
  const directLink = document.getElementById("tableauDirectLink");

  if (dashboardReady) {
    const embedUrl = dashboardUrl.replace(/\/?$/, ".?:showVizHome=no").replace(".?:showVizHome=no", "?showVizHome=no");
    iframe.src = embedUrl;
    iframe.style.display = "block";
    placeholder.style.display = "none";
    directLink.href = dashboardUrl;
    directLink.hidden = false;
  }

  const videoLink = document.getElementById("videoLink");
  const videoPlaceholder = document.getElementById("videoPlaceholder");
  if (videoReady) {
    videoLink.href = videoUrl;
    videoLink.hidden = false;
    videoPlaceholder.hidden = true;
  }

  const toggle = document.getElementById("menuToggle");
  const nav = document.getElementById("mainNav");
  toggle?.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("nav-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
  nav?.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    nav.classList.remove("nav-open");
    toggle?.setAttribute("aria-expanded", "false");
  }));

  let activeFilter = "all";
  const search = document.getElementById("resourceSearch");
  const cards = [...document.querySelectorAll(".resource-card")];
  const noResults = document.getElementById("noResults");
  function filterResources() {
    const query = (search.value || "").trim().toLowerCase();
    let visible = 0;
    cards.forEach(card => {
      const matchesType = activeFilter === "all" || card.dataset.type === activeFilter;
      const matchesQuery = card.dataset.title.toLowerCase().includes(query) ||
        card.textContent.toLowerCase().includes(query);
      const show = matchesType && matchesQuery;
      card.hidden = !show;
      if (show) visible++;
    });
    noResults.hidden = visible !== 0;
  }
  search?.addEventListener("input", filterResources);
  document.querySelectorAll(".filter-button").forEach(button => {
    button.addEventListener("click", () => {
      activeFilter = button.dataset.filter;
      document.querySelectorAll(".filter-button").forEach(b => b.classList.toggle("active", b === button));
      filterResources();
    });
  });
})();
