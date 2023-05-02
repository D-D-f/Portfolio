import React, { useState, useEffect } from "react";
import classes from "./Notification.module.css";

const Notification = ({ message }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  return isVisible ? <div className={classes.notif}>{message}</div> : null;
};

export default Notification;
