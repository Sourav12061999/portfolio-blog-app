import { useState, useRef } from "react";

function useBlog(isEdit?: boolean) {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const dataRef = useRef<string>("");

  const saveBlog = async (data: string) => {
    if (dataRef.current.trim() === data.trim()) {
      return;
    }
    if (isEdit) {
      // Run Editing Code
    } else {
      // Creating Code
    }
  };
}

export default useBlog;
