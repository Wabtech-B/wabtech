import Avatar from "@/components/avatar";
import Badge from "@/components/badge";
import { cn, formatRelativeTime } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { BsChatDots, BsHeart } from "react-icons/bs";

interface CardTwoProps {
  post: TTPost;
  showAuthor: boolean;
  showTags: boolean;
  showCommentCount: boolean;
  showLikes: boolean;
  showDescription: boolean;
  width?: string;
  height?: string;
}

const CardTwo = ({
  post,
  showAuthor,
  showTags,
  showCommentCount,
  showLikes,
  showDescription,
  width,
  height,
}: CardTwoProps) => {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={cn(
        "block group rounded-lg relative h-[300px] w-full overflow-hidden shrink-0",
        height && height,
        width
      )}
      title={post.title}
    >
      <Image
        src={post.coverImage}
        alt={post.title}
        fill
        className="object-cover h-full w-full group-hover:scale-110 transition-a"
      />
      <div className="absolute w-full h-full bottom-0">
        <div className="absolute top-2 p-1 flex-center-between gap-2 w-full md:opacity-0 md:[visibility:hidden] group-hover:opacity-100 group-hover:[visibility:visible] transition-a">
          {showLikes && (
            <div className="flex-align-center">
              <div className="flex-align-center gap-x-2 px-3 py-1 rounded-full bg-secondary hover:bg-slate-200 dark:hover:bg-slate-700 cursor-pointer">
                <div className="shrink-0">
                  <BsHeart />
                </div>
                <p>{post._count.likes}</p>
              </div>
            </div>
          )}
          {showCommentCount && (
            <div className="flex-align-center">
              <div className="flex-align-center gap-x-2 px-3 py-1 rounded-full bg-secondary hover:bg-slate-200 dark:hover:bg-slate-700 cursor-pointer">
                <div className="shrink-0">
                  <BsChatDots />
                </div>
                <p>{post._count.comments}</p>
              </div>
            </div>
          )}
        </div>

        <div className="p-2 mt-2 flex items-end w-full h-full bg-gradient-to-t from-gray-950 to-transparent text-white pb-4">
          <div>
            <div className="flex-align-center">
              <div className="shrink-0">
                <Badge
                  label={post.category.name}
                  className="!bg-yellow-200 !text-yellow-800"
                  variant="warning"
                />
              </div>
              <span className="text-sm text-slate-200 ml-2">
                {formatRelativeTime(post.datePublished)}
              </span>
            </div>
            <h1 className="text-xl md:text-2xl group-hover:text-brand transition-colors capitalize mt-4 line-clamp-1">
              {post.title}
            </h1>
            {showTags && (
              <div className="p-1 flex-align-center gap-2 flex-wrap">
                {post.tags.map((tag) => (
                  <Badge
                    label={tag}
                    key={tag}
                    className="text-slate-600 dark:text-slate-300"
                  />
                ))}
              </div>
            )}
            {showDescription && (
              <div className="my-2">
                <p className="line-clamp-2 text-slate-300">
                  {post.description}
                </p>
              </div>
            )}

            {showAuthor && (
              <div className="flex-align-center gap-x-2">
                <div className="shrink-0">
                  {post.author.image ? (
                    <Avatar src={post.author.image} size="small" />
                  ) : (
                    <Avatar size="small" />
                  )}
                </div>
                <div>
                  <h1>{post.author.name}</h1>
                  <p className="text-sm text-slate-400">Author</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardTwo;
