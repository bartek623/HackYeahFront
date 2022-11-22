import { useCallback, useState } from "react";

function useFetch() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // let headers = new Headers();
  // headers.append("Content-Type", "application/json");
  // headers.append("Accept", "application/json");

  // headers.append("Access-Control-Allow-Origin", "http://localhost:3000");
  // headers.append("Access-Control-Allow-Credentials", "true");

  // headers.append("GET", "POST", "OPTIONS");
  // authorization: "Basic " + window.btoa("user:password");

  // const url = "http://171.25.230.60:33000/";
  const url = "https://textiles-hy2022.herokuapp.com/api/";

  const sendRequest = useCallback(async function (
    tab,
    options,
    applyFn = () => {}
  ) {
    setIsLoading(true);

    try {
      const res = await fetch(url + tab, options);

      if (!res.ok) throw new Error("Something went wrong");

      const data = await res.json();

      console.log(data);
      applyFn(data);
    } catch (err) {
      setError(err.message);
    }

    setIsLoading(false);
  },
  []);

  return { error, isLoading, sendRequest };
}
export default useFetch;
