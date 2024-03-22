import Avatar from "@/components/avatar";

import hljs from "highlight.js";
import "highlight.js/styles/github-dark.css";

import { formatRelativeTime } from "@/lib/utils";
import { Metadata } from "next";
import RelatedPosts from "../../_components/blog/related-posts";
import Image from "next/image";
import ShareButtons from "../../_components/blog/share-buttons";
import Breadcrumbs from "@/components/breadcrumb";
import { notFound } from "next/navigation";
import Link from "next/link";
hljs.configure({});

// Get Post
const getPost = async (slug: string) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/${slug}`, {
    cache: "no-store",
  });
  return res.json();
};

// Update Views
const updatePostViews = async (slug: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/posts/${slug}/views`,
    {
      cache: "no-store",
    }
  );
  return res.json();
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const slug = params.slug;
  try {
    const { post }: { post: TTPost } = await getPost(slug);
    return {
      title: post?.title,
      description: post?.description,
    };
  } catch (error) {
    return notFound();
  }
}

const PostDetails = async ({ params }: { params: { slug: string } }) => {
  const { post, relatedPosts }: { post: TTPost; relatedPosts: TTPost[] } =
    await getPost(params.slug);

  const shareUrl = `https://www.wabtech.tech/blog/${post.slug}`;

  return (
    <div className="max-w-7xl mx-auto px-3 pt-20">
      <div className="my-2 flex justify-end">
        <Breadcrumbs separator="/" />
      </div>
      <div className="mt-4">
        <div className="relative h-[200px] sm:h-[400px] w-full">
          <Image
            src={post!.coverImage}
            alt={post!.title}
            fill
            className="h-full w-full object-cover rounded-lg"
          />
        </div>
        <div className="mt-5">
          <h1 className="text-3xl md:text-4xl font-bold my-3">{post!.title}</h1>
          <div className="flex-center-between">
            <div className="text-sm py-[3px] px-3 bg-brand/20 text-brand rounded-full w-fit">
              {post!.category.name}
            </div>
            <ShareButtons shareUrl={shareUrl} title={post.title} />
          </div>
        </div>
        <div className="my-2 flex-align-center flex-wrap gap-x-2">
          {post!.tags.map((tag) => (
            <Link
              href={`/blog/tags/${tag}`}
              key={tag}
              className="mt-3 sm:mt-0 text-sm py-[3px] px-3 bg-slate-100 dark:bg-slate-900 rounded-full"
            >
              {tag}
            </Link>
          ))}
        </div>
        <div className="mt-6 flex-align-center gap-x-2">
          <div>
            {post!.author.image ? (
              <Avatar src={post!.author.image} />
            ) : (
              <Avatar />
            )}
          </div>
          <div>
            <h1>{post!.author.name}</h1>
            <span className="text-sm text-muted-foreground">
              Posted {formatRelativeTime(post!.datePublished)}
            </span>
          </div>
        </div>

        <div className="mt-6 post-content">
          <div dangerouslySetInnerHTML={{ __html: post!.content }} />
        </div>
      </div>
      <div className="mt-6">
        {/* Related Posts */}
        <RelatedPosts posts={relatedPosts} />
      </div>
    </div>
  );
};

export default PostDetails;
