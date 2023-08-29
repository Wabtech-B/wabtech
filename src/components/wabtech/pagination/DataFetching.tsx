"use client";

import { useState } from "react";
import Pagination from "./Pagination";
import { useEffect } from "react";
interface Post {
  id: string;
  title: string;
  body: string;
}
const DataFetching = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(100 / itemsPerPage); // assuming there are 100 posts from the server

  const fetchData = async (page: number) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${itemsPerPage}`
      );
      const data = await response.json();
      setPosts(data);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        icons
        rounded
      />
      <div className="mb-5">
        {loading ? (
          <div>
            <h1 className="my-4 text-2xl">Loading...</h1>
          </div>
        ) : (
          <>
            {posts?.map((post) => (
              <div
                className="flex items-center gap-2 p-3 my-3 border rounded-lg dark:border-zinc-600"
                key={post.id}
              >
                <div className="flex-shrink-0 p-2 border rounded-lg place-items-center dark:border-zinc-600">
                  {post.id}
                </div>
                {post.title.charAt(0).toUpperCase() + post.title.slice(1)}
              </div>
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default DataFetching;
