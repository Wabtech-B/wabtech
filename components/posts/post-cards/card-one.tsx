import Avatar from "@/components/avatar";
import Badge from "@/components/badge";
import { cn, formatRelativeTime } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { BsChatDots, BsHeart } from "react-icons/bs";

interface CardOneProps {
  post: TTPost;
  showAuthor: boolean;
  showTags: boolean;
  showCommentCount: boolean;
  showLikes: boolean;
  showDescription: boolean;
  width?: string;
}

const CardOne = ({
  post,
  showAuthor,
  showTags,
  showCommentCount,
  showLikes,
  showDescription,
  width,
}: CardOneProps) => {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={cn("block group p-2 border rounded-lg shrink-0", width)}
      title={post.title}
    >
      <div className="relative w-full h-[200px] rounded-lg overflow-hidden">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          className="object-cover"
        />
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
        {showTags && (
          <div className="absolute bottom-2 p-1 flex-align-center gap-2 flex-wrap">
            {post.tags.map((tag) => (
              <Badge label={tag} key={tag} />
            ))}
          </div>
        )}
      </div>
      <div className="p-2 mt-2">
        <div className="flex-align-center">
          <div className="shrink-0">
            <Badge
              label={post.category.name}
              className="!bg-brand !text-slate-100"
            />
          </div>
          <span className="text-sm text-muted-foreground ml-2 flex-1 shrink-0 truncate">
            {formatRelativeTime(post.datePublished)}
          </span>
        </div>
        <h1 className="text-lg md:text-xl group-hover:text-brand transition-colors capitalize mt-4 line-clamp-2">
          {post.title}
        </h1>
        {showDescription && (
          <div className="my-2">
            <p className="line-clamp-2">{post.description}</p>
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
              <p className="text-sm">Author</p>
            </div>
          </div>
        )}
      </div>
    </Link>
  );
};

export default CardOne;
