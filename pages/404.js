import { useState, useEffect } from "react";

export default function Custom404() {
  const [hostname, setHostname] = useState("");

  useEffect(() => {
    setHostname(window.location.hostname);
  }, []);

  return <p>hostname: {hostname}</p>;
}
