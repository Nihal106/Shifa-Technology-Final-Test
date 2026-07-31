export function scrollToCategories() {
  const section = document.getElementById("categories");

  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}