import React from "react";

const useFetch = () => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const request = React.useCallback(async (url) => {
    const API = `https://api.shrtco.de/v2/shorten?url=${url}`;
    try {
      setLoading(true);
      const response = await fetch(API);
      const json = await response.json();
      if (!response.ok) throw new Error("Algo deu Errado");
      setData(json);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  return { request, data, error, loading };
};

export default useFetch;
