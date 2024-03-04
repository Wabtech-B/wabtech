type Template = {
  id: string;
  name: string;
  price: number;
  category: TemplateCategory;
  slug: string;
  description: string | null;
  content: string;
  coverImage: string;
  pages: string[];
  features: string[];
  languages: string[];
  previewUrl: string;
  templateFile: string;
  templateFileSize: number;
  techstacks: Techstack[];
  screenshots: Screenshot[];
  changelogs: Changelog[];
  createdAt: Date;
  updatedAt: Date;
};

type TemplateCategory = {
  id: string;
  name: string;
  image: string | null;
  description: string | null;
  createdAt: Date;
  updatedAt: Date;
};

type Techstack = {
  id: string;
  name: string;
  websiteUrl: string;
  image: string | null;
  description: string | null;
  createdAt: Date;
  updatedAt: Date;
};

type Screenshot = {
  id: string;
  image: string;
  url: string;
  createdAt: Date;
  updatedAt: Date;
};

type Changelog = {
  id: string;
  version: String;
  date: Date;
  changes: string[];
  createdAt: Date;
  updatedAt: Date;
};

type Faq = {
  id: string;
  question: string;
  answer: string;
  createdAt: Date;
  updatedAt: Date;
};

type Author = {
  id: string;
  name: string | null;
  image: string | null;
};

type Post = {
  id: string;
  categoryId: string;
  title: string;
  slug: string;
  coverImage: string;
  tags: string[];
  description: string;
  content: string;
  datePublished: Date;
  showAuthor: boolean;
  showTags: boolean;
  showCommentCount: boolean;
  showLikes: boolean;
  showDescription: boolean;
  createdAt: Date;
  updatedAt: Date;
};

type Collection = {
  id: string;
  name: string;
  displayType: string;
  posts: TTPost[];
  createdAt: Date;
  updatedAt: Date;
};

type Category = {
  id: string;
  name: string;
  _count: { posts: number };
};

type TCategory = {
  name: string;
};

type TPost = Post & { category: TCategory };

type TTPost = Post & {
  category: { id: string; name: string };
  author: Author;
  _count: { likes: number; comments: number };
};

type TCollection = Collection & { posts: Post[] };

type CollectionsPosts = {
  collections: TCollection[];
  posts: TPost[];
};
