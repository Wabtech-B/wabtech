"use client";

interface SidebarProps {
  sections: { id: string; title: string }[];
}

const RightSidebar: React.FC<SidebarProps> = ({ sections }) => {
  window.addEventListener("scroll", () => {
    showActiveSection();
  });

  const showActiveSection = () => {
    const sections = document.querySelectorAll("section");
    const links = document.querySelectorAll(".right-sidebar li a");
    sections.forEach((sec) => {
      let top = window.scrollY;
      let height = sec.offsetHeight;
      let offset = sec.offsetTop - 150;
      let id = sec.getAttribute("id");

      if (top >= offset && top < offset + height) {
        links.forEach((link) => {
          link.classList.remove("active");
          document
            ?.querySelector(".right-sidebar a[href*=" + id + "]")!
            .classList.add("active");
        });
      }
    });
  };

  return (
    <div>
      <div className="hidden md:w-[200px] md:block fixed right-0 top-0  mt-14 border-gray-300 border-l dark:border-zinc-600 overflow-y-auto right-sidebar">
        <ul className="py-6 right-sidebar">
          {sections.map((section) => (
            <li key={section.id}>
              <a href={`#${section.id}`} className="block px-4 py-2">
                {section.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RightSidebar;
