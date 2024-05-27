function filterProjects() {
  const projects = document.querySelectorAll(".list-item");
  if (projects?.length) {
    const tagsContainer = document.getElementById("searchTags");
    const filterTags = Array.from(tagsContainer.childNodes).map((tag) =>
      tag.dataset.value.toLowerCase()
    );
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
          projectTags.includes(filterTag) ||  projectTitle.includes(filterTag)
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
      addTag(value);
      input.value = ""; // Clear input after adding tag
      filterProjects();
    }
  }

  function addTag(value) {
    const tagsContainer = document.getElementById("searchTags");
    if (tagsContainer) {
      const tag = document.createElement("div");
      tag.className = "search-tag";
      tag.textContent = value;
      tag.dataset.value = value;
      const closeBtn = document.createElement("span");
      closeBtn.textContent = "×";
      closeBtn.className = "x-icon";
      closeBtn.onclick = function () {
        tagsContainer.removeChild(tag);
        filterProjects();
      };
      tag.appendChild(closeBtn);
      tagsContainer.appendChild(tag);
      const length = tagsContainer.childNodes.length;
      if (length) {
        tagsContainer.classList.add("space-t");
      } else {
        tagsContainer.classList.remove("space-t");
      }
    }
  }
});
