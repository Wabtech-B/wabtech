import CardOne from "@/components/posts/post-cards/card-one";
import Scrollable from "@/components/scrollable";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface RelatedPostsProps {
  posts: TTPost[];
}

const RelatedPosts = ({ posts }: RelatedPostsProps) => {
  return (
    <>
      {posts.length > 0 && (
        <div>
          <h1 className="text-2xl font-bold">Related Posts</h1>
          <div className="-mt-4">
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
                  showAuthor={false}
                  showTags={true}
                  showCommentCount={false}
                  showLikes={false}
                  showDescription={false}
                  width="w-[320px]"
                />
              ))}
            </Scrollable>
          </div>
        </div>
      )}
    </>
  );
};

export default RelatedPosts;
