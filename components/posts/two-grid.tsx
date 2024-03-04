import CardThree from "./post-cards/card-three";
import CardTwo from "./post-cards/card-two";

interface TwoGridProps {
  posts: TTPost[];
  showAuthor: boolean;
  showTags: boolean;
  showCommentCount: boolean;
  showLikes: boolean;
  showDescription: boolean;
}

const TwoGrid = ({
  posts,
  showAuthor,
  showTags,
  showCommentCount,
  showLikes,
  showDescription,
}: TwoGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {posts.slice(0, 1).map((post) => (
        <CardTwo
          post={post}
          key={post.id}
          showAuthor={showAuthor}
          showTags={false}
          showCommentCount={showCommentCount}
          showLikes={showLikes}
          showDescription={false}
          height={posts.length < 2 ? "h-[250px]" : "h-[300px] md:h-full"}
        />
      ))}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        {posts.slice(1, posts.length).map((post) => (
          <CardThree
            post={post}
            key={post.id}
            showAuthor={false}
            showTags={false}
            showCommentCount={false}
            showLikes={false}
            showDescription={false}
            height="xl:h-[50px]"
          />
        ))}
      </div>
    </div>
  );
};

export default TwoGrid;
