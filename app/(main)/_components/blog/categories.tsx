import Link from "next/link";
import React from "react";

const getCategories = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/posts/categories`,
    { cache: "no-store" }
  );
  return res.json();
};

const Categories = async () => {
  const categories: Category[] = await getCategories();
  return (
    <>
      {categories.length > 0 && (
        <div className="py-10">
          <h1 className="text-2xl md:text-3xl text-center mb-4 font-bold">
            Explore By Categories
          </h1>
          <div className="bg-slate-50 dark:bg-gray-900 py-10 px-6 flex-align-center gap-4 flex-wrap">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/blog/categories/${category.name}`}
                className="px-5 py-1 border bg-background shadow-sm rounded-lg hover:text-brand"
              >
                {category.name} ({category._count.posts})
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Categories;
