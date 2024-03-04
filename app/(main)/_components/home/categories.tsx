import Pill from "@/components/pill";
import CategoryPill from "../category-pill";

const Categories = ({ categories }: { categories: TemplateCategory[] }) => {
  return (
    <section className="pt-20">
      <div className="text-center">
        <Pill text="Categories" />
        <h1 className="-mt-8 text-3xl font-bold">Explore By Category</h1>
        <p className="mt-2">
          Explore from a wide range of categories both for personal and
          commercial use
        </p>
      </div>

      <div className="mt-8 overflow-hidden px-4 sm:px-6 flex flex-col gap-4 relative">
        <div className="absolute bg-gradient-to-r from-background via-background to-transparent w-28 h-full top-0 left-0 z-20"></div>
        <div className="flex-align-center gap-4 animate-[slide_100s_linear_infinite] hover:paused">
          {[...Array(2)].map((_, index) =>
            categories
              .slice(0, 8)
              .map((category) => (
                <CategoryPill
                  key={category.id}
                  name={category.name}
                  image={category.image!}
                />
              ))
          )}
        </div>

        <div className="flex-align-center gap-4 animate-[slide_100s_linear_infinite_reverse] hover:paused">
          {[...Array(2)].map((_, index) =>
            categories
              .slice(8, categories.length - 1)
              .map((category) => (
                <CategoryPill
                  key={category.id}
                  name={category.name}
                  image={category.image!}
                />
              ))
          )}
        </div>
        <div className="absolute bg-gradient-to-l from-background via-background to-transparent w-28 h-full top-0 right-0 z-20"></div>
      </div>
    </section>
  );
};

export default Categories;
