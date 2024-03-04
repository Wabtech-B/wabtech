import CardThree from "./post-cards/card-three";

interface SimpleTwoGridProps {
  posts: TTPost[];
  showAuthor: boolean;
  showTags: boolean;
  showCommentCount: boolean;
  showLikes: boolean;
  showDescription: boolean;
}

const SimpleTwoGrid = ({
  posts,
  showAuthor,
  showTags,
  showCommentCount,
  showLikes,
  showDescription,
}: SimpleTwoGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {posts.map((post) => (
        <CardThree
          post={post}
          key={post.id}
          showAuthor={showAuthor}
          showTags={showTags}
          showCommentCount={false}
          showLikes={false}
          showDescription={showDescription}
          height="h-[50px] sm:h-full"
        />
      ))}
    </div>
  );
};

export default SimpleTwoGrid;
