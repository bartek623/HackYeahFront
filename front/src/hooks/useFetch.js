import { useCallback, useState } from "react";

const url = "https://textiles-hy2022.herokuapp.com/api/receivers";

function useFetch() {
  const [isLoading, setIsLoading] = useState();
  const [error, setError] = useState();

  const getData = useCallback(async function (applyFn) {
    setIsLoading(true);
    try {
      const res = await fetch(url);

      if (!res.ok) throw new Error("Something went wrong");

      const data = await res.json();

      console.log(data);
      applyFn(data);
    } catch (err) {
      console.error(err);
      setError(err.message);
    }
    setIsLoading(false);
  }, []);

  return { fetchData: getData, error, isLoading };
}
export default useFetch;
