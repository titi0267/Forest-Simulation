"use client";

import { useEffect, useRef } from "react";

const Volume = () => {
  const shouldLog = useRef(true);

  useEffect(() => {
    if (shouldLog.current) {
      shouldLog.current = false;
      console.log('logged');
    }
  }, [])
  
}

export default Volume;
