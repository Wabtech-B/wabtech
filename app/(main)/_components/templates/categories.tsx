import Scrollable from "@/components/scrollable";
import CategoryPill from "../category-pill";

const Categories = ({ categories }: { categories: TemplateCategory[] }) => {
  return (
    <section className="pt-8 sticky top-0 z-[1000] bg-background/80 backdrop-blur-sm">
      <Scrollable autoHideControls>
        {categories.map((category) => (
          <CategoryPill
            key={category.id}
            name={category.name}
            image={category.image!}
          />
        ))}
      </Scrollable>
    </section>
  );
};

export default Categories;
