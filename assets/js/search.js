function filterProjects() {
  const projects = document.querySelectorAll(".list-item");
  if (projects?.length) {
    const filterTags = [...new Set(Array.from(document.querySelectorAll(".search-tag.active")).map((tag) => tag.dataset.value.toLowerCase()))];
    let visibleCount = 0;
    if (filterTags.length > 0) {
      // Apply filters only if there are tags
      projects.forEach((project) => {
        const projectTags = [
          ...project.dataset.tags
            .toLowerCase()
            .split(",")
            .flatMap((tag) => tag.split(" ")),
          ...project.dataset.tags.toLowerCase().split(","),
        ];
        const projectTitle = project.dataset.title.toLowerCase();
        const isVisible = filterTags.some((filterTag) =>
          projectTags.includes(filterTag) || projectTitle.includes(filterTag)
        );
        project.style.display = isVisible ? "" : "none";
        if (isVisible) visibleCount++;
      });
    } else {
      projects.forEach((project, index) => {
        project.style.display = index < 40 ? "" : "none";
        if (index < 40) visibleCount++;
      });
    }

    const noResults = document.getElementById("noResultsMessage");
    if (visibleCount > 0) {
      if (noResults) noResults.style.display = "none";
    } else {
      if (noResults) {
        noResults.style.display = "block";
        noResults.textContent = "No projects found with the given search.";
      }
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  filterProjects();

  const input = document.getElementById("searchInput");
  const form = document.getElementById("searchForm");
  const icon = document.getElementById("searchIcon");

  const language = checkLanguage();

  if (language == "en") {
    addTag("Indoor spaces", "disabled", "permanent");
    addTag("Policy and planning", "disabled", "permanent");
    addTag("Public outreach", "disabled", "permanent");
    addTag("Public spaces", "disabled", "permanent");
    addTag("Simulation", "disabled", "permanent");
    addTag("Sound art", "disabled", "permanent");
  } else if (language == "fr") {
    addTag("Espaces intérieurs", "disabled", "permanent");
    addTag("Politique et planification", "disabled", "permanent");
    addTag("Sensibilisation du public", "disabled", "permanent");
    addTag("Espaces publics", "disabled", "permanent");
    addTag("Simulation", "disabled", "permanent");
    addTag("Art sonore", "disabled", "permanent");
  }

  if (form) {
    form.addEventListener("submit", handleKeyPress);
  }
  if (icon) {
    icon.addEventListener("click", handeSearhInput);
  }
  if (input) {
    input.addEventListener("keypress", handleKeyPress);
  }
  function handleKeyPress(event) {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent form submission if form tag exists
      handeSearhInput();
    }
  }

  function handeSearhInput() {
    const input = document.getElementById("searchInput");
    const value = input.value.trim();
    if (value) {
      addTag(value, "active", "");
      input.value = ""; // Clear input after adding tag
      filterProjects();
    }
  }

  function addTag(value, status, type) {
    const tagsContainer = document.getElementById("searchTags");
    if (tagsContainer) {
      const tag = document.createElement("div");
      tag.className = "search-tag";
      tag.textContent = value;
      tag.dataset.value = value;
      tag.dataset.type = type;
      tag.classList.add(status);
      if (type != "permanent") {
        const closeBtn = document.createElement("span");
        closeBtn.textContent = "×";
        closeBtn.className = "x-icon";
        if (status == "disabled") {
          closeBtn.classList.add("disabled");
        }
        closeBtn.onclick = function () {
          tagsContainer.removeChild(tag);
          filterProjects();
        };
        tag.appendChild(closeBtn);
      }
      tagsContainer.appendChild(tag);
      const length = tagsContainer.childNodes.length;
      if (length) {
        tagsContainer.classList.add("space-t");
      } else {
        tagsContainer.classList.remove("space-t");
      }
      tag.onclick = function () {
        if (tag.classList.contains("active")) {
          tag.classList.remove("active");
          tag.classList.add("disabled");
          filterProjects();
        } else if (tag.classList.contains("disabled")) {
          tag.classList.remove("disabled");
          tag.classList.add("active");
          filterProjects();
        }

      }
    }
  }

  function checkLanguage() {
    // Get the current URL path
    const path = window.location.pathname;

    // Check if the path starts with '/fr/'
    if (path.startsWith('/fr/')) {
      console.log("Language is French");
      return 'fr';
    }
    // Check if the path starts with '/en/'
    else if (path.startsWith('/en/')) {
      console.log("Language is English");
      return 'en';
    }
    
    // Default case when the language is not specified
    else {
      console.log("Language not specified or different");
      return null;
    }
  }

});
