import Scrollable from "@/components/scrollable";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import CardOne from "./post-cards/card-one";

interface SimpleGridScrollableProps {
  posts: TTPost[];
  showAuthor: boolean;
  showTags: boolean;
  showCommentCount: boolean;
  showLikes: boolean;
  showDescription: boolean;
}

const SimpleGridScrollable = ({
  posts,
  showAuthor,
  showTags,
  showCommentCount,
  showLikes,
  showDescription,
}: SimpleGridScrollableProps) => {
  return (
    <Scrollable
      rightControl={
        <button className="p-2 rounded-full bg-brand hover:bg-brand/80 text-white">
          <FiChevronRight />
        </button>
      }
      leftControl={
        <button className="p-2 rounded-full bg-brand hover:bg-brand/80 text-white">
          <FiChevronLeft />
        </button>
      }
      autoDisableControls
    >
      {posts.map((post) => (
        <CardOne
          post={post}
          key={post.id}
          showAuthor={showAuthor}
          showTags={showTags}
          showCommentCount={showCommentCount}
          showLikes={showLikes}
          showDescription={showDescription}
          width="w-[320px]"
        />
      ))}
    </Scrollable>
  );
};

export default SimpleGridScrollable;
