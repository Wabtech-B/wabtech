import CardOne from "./post-cards/card-one";
import CardTwo from "./post-cards/card-two";

interface ThreeGridProps {
  posts: TTPost[];
  showAuthor: boolean;
  showTags: boolean;
  showCommentCount: boolean;
  showLikes: boolean;
  showDescription: boolean;
}

const ThreeGrid = ({
  posts,
  showAuthor,
  showTags,
  showCommentCount,
  showLikes,
  showDescription,
}: ThreeGridProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-7 gap-4">
      <div className="lg:col-span-2 md:grid md:gap-4 lg:gap-0 grid-cols-2 lg:grid-cols-1">
        {posts.slice(0, 2).map((post) => (
          <div className="mt-4 md:mt-0 lg:mt-4 first:mt-0" key={post.id}>
            <CardOne
              post={post}
              showAuthor={false}
              showTags={showTags}
              showCommentCount={showCommentCount}
              showLikes={showLikes}
              showDescription={false}
            />
          </div>
        ))}
      </div>
      <div className="lg:col-span-3">
        {posts.slice(2, 3).map((post) => (
          <CardTwo
            post={post}
            key={post.id}
            showAuthor={showAuthor}
            showTags={showTags}
            showCommentCount={showCommentCount}
            showLikes={showLikes}
            showDescription={true}
            height={posts.length < 2 ? "h-[250px]" : "h-[300px] lg:h-full"}
          />
        ))}
      </div>
      <div className="lg:col-span-2 md:grid md:gap-4 lg:gap-0 grid-cols-2 lg:grid-cols-1">
        {posts.slice(3, 5).map((post) => (
          <div className="mt-4 md:mt-0 lg:mt-4 first:mt-0" key={post.id}>
            <CardOne
              post={post}
              showAuthor={false}
              showTags={showTags}
              showCommentCount={showCommentCount}
              showLikes={showLikes}
              showDescription={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThreeGrid;
