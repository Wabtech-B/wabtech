"use client";

import { useState, useEffect } from "react";

interface FetchState<Data> {
  data: Data | null;
  error: Error | null;
  loading: boolean;
}

const useFetch = <Data,>(url: string): FetchState<Data> => {
  const [data, setData] = useState<Data | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const responseData: Data = await response.json();
        setData(responseData);
        setError(null);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, error, loading };
};

export default useFetch;
