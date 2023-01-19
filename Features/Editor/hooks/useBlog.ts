import { useState, useRef } from "react";

function useBlog(blogID: string) {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const dataRef = useRef<string>("");

  const saveBlog = async (data: string) => {
    if (dataRef.current.trim() === data.trim()) {
      return;
    }
    // Run Creation Code
  };

  return { isLoading, isError, saveBlog };
}

export default useBlog;
