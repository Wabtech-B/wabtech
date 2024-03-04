import NoResults from "@/components/no-results";
import CardOne from "@/components/posts/post-cards/card-one";
import PostPagination from "../../_components/blog/post-pagination";

type SearchParams = {
  searchParams: {
    q: string;
    page: string;
    limit: string;
  };
};

const getPostsBySearch = async ({
  search,
  page,
  limit,
}: {
  search: string;
  page: number;
  limit: number;
}) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/posts?search=${search}`,
    { cache: "no-store" }
  );
  return res.json();
};

const SearchPage = async ({ searchParams }: SearchParams) => {
  const params = searchParams;
  const search = (params.q && params.q.toLowerCase()) || "";
  const page = Number(params.page) || 1;
  const limit = Number(params.limit) || 8;
  const {
    posts,
    pages,
    total,
  }: { posts: TTPost[]; pages: number; total: number } = await getPostsBySearch(
    {
      search,
      page,
      limit,
    }
  );

  return (
    <div className="max-w-7xl mx-auto px-3 pt-20">
      <div className="flex-center-between flex-col sm:flex-row gap-3">
        <h1 className="text-xl md:text-3xl font-bold mt-3">
          RESULTS ({total})
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

export default SearchPage;
