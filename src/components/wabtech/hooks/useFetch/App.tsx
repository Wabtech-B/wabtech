"use client";

import React from "react";
import useFetch from "./useFetch";

interface Post {
  id: string;
  title: string;
  body: string;
}

const App: React.FC = () => {
  const {
    data: posts,
    error,
    loading,
  } = useFetch<Post[]>("https://jsonplaceholder.typicode.com/posts");

  if (loading) {
    return (
      <div>
        <h1 className="text-3xl font-bold">Loading...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h1 className="text-3xl text-red-500">Error: {error.message}</h1>
      </div>
    );
  }

  return (
    <div>
      <ul>
        {posts?.map((post) => (
          <div
            key={post.id}
            className="p-4 rounded-lg border dark:border-zinc-600"
          >
            <h1 className="text-2xl font-semibold">{post.title}</h1>
            <p className="mt-2">{post.body}</p>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default App;
