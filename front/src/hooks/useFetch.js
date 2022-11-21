import { useCallback, useState } from "react";

function useFetch() {
  const [isLoading, setIsLoading] = useState();
  const [error, setError] = useState();

  // let headers = new Headers();
  // headers.append("Content-Type", "application/json");
  // headers.append("Accept", "application/json");

  // headers.append("Access-Control-Allow-Origin", "http://localhost:3000");
  // headers.append("Access-Control-Allow-Credentials", "true");

  // headers.append("GET", "POST", "OPTIONS");
  // authorization: "Basic " + window.btoa("user:password");
  const url = "http://171.25.230.60:33000/api/";
  // const url = "https://textiles-hy2022.herokuapp.com/api/";

  const getData = useCallback(async function (applyFn, type) {
    setIsLoading(true);

    try {
      const res = await fetch(url + type);

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

  const setData = useCallback(async function (dataToSend, applyFn, type) {
    setIsLoading(true);

    try {
      const res = await fetch(url + type, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });
      console.log(res);

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

  return { getData, setData, error, isLoading };
}
export default useFetch;
