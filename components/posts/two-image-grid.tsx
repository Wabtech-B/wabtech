import CardTwo from "./post-cards/card-two";

interface TwoImageGridProps {
  posts: TTPost[];
  showAuthor: boolean;
  showTags: boolean;
  showCommentCount: boolean;
  showLikes: boolean;
  showDescription: boolean;
}

const TwoImageGrid = ({
  posts,
  showAuthor,
  showTags,
  showCommentCount,
  showLikes,
  showDescription,
}: TwoImageGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {posts.slice(0, 1).map((post) => (
        <CardTwo
          post={post}
          key={post.id}
          showAuthor={showAuthor}
          showTags={showTags}
          showCommentCount={showCommentCount}
          showLikes={showLikes}
          showDescription={true}
          height={posts.length < 2 ? "h-[300px]" : "h-[300px] md:h-full"}
        />
      ))}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {posts.slice(1, posts.length).map((post) => (
          <CardTwo
            post={post}
            key={post.id}
            showAuthor={showAuthor}
            showTags={false}
            showCommentCount={showCommentCount}
            showLikes={showLikes}
            showDescription={showDescription}
            height="h-[250px]"
          />
        ))}
      </div>
    </div>
  );
};

export default TwoImageGrid;
