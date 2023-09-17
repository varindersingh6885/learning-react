import { useState, useEffect } from "react";

export const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);

  window.addEventListener("offline", () => {
    setOnlineStatus(false);
  });

  useEffect(() => {
    window.addEventListener("online", () => {
      setOnlineStatus(true);
    });
  }, []);

  return onlineStatus;
};
