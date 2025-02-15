import { useEffect, useState } from 'react';

export const useError = (timeout = 5000) => {
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError(null);
      }, timeout);

      return () => clearTimeout(timer);
    }
  }, [error, timeout]);

  return { error, setError };
};
