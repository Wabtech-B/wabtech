import NoResults from "@/components/no-results";
import CardOne from "@/components/posts/post-cards/card-one";
import React from "react";
import PostPagination from "../../../_components/blog/post-pagination";
import { Metadata } from "next";

const getCategory = async (category: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/posts/categories/${category}`,
    { cache: "no-store" }
  );
  return res.json();
};

const getPostsByCategory = async (
  category: string,
  { page, limit }: { page: number; limit: number }
) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/posts/categories/${category}`,
    { cache: "no-store" }
  );
  return res.json();
};

export async function generateMetadata({
  params,
}: {
  params: { category: string };
}): Promise<Metadata> {
  const category = await getCategory(decodeURI(params.category));
  return {
    title: category?.name,
  };
}

type Params = {
  searchParams: {
    page: string;
    limit: string;
  };
  params: { category: string };
};

const CategoryPage = async ({ params, searchParams }: Params) => {
  const page = Number(searchParams.page) || 1;
  const limit = Number(searchParams.limit) || 8;

  const { posts, pages }: { posts: TTPost[]; pages: number } =
    await getPostsByCategory(decodeURI(params.category), {
      page,
      limit,
    });

  return (
    <div className="max-w-7xl mx-auto px-3 pt-20">
      <div className="flex-center-between flex-col sm:flex-row gap-3">
        <h1 className="text-xl md:text-3xl font-bold mt-3">
          {decodeURI(params.category)}
        </h1>
        {posts.length > 0 && <PostPagination pages={pages} />}
      </div>
      <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4">
        {posts.map((post) => (
          <CardOne
            key={post.id}
            post={post}
            showAuthor={true}
            showTags={true}
            showCommentCount={false}
            showLikes={false}
            showDescription={true}
          />
        ))}
      </div>
      {posts.length < 1 && <NoResults title="Posts Found" />}
    </div>
  );
};

export default CategoryPage;
