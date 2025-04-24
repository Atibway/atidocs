"use client";

import React, { useEffect, useRef } from "react";

export const ChartBort = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = iframeRef.current;

    // Inject dynamic styles into the document head
    const iframeStyles = (styleString: string) => {
      const style = document.createElement("style");
      style.textContent = styleString;
      document.head.append(style);
    };

    iframeStyles(`
      .chat-frame {
        position: fixed;
        bottom: 3px;
        right: 3px;
        border: none;
      }
    `);

    // Set iframe src and class
    if (iframe) {
      iframe.src = "https://nestbot-rouge.vercel.app/chatbot";
      iframe.classList.add("chat-frame");
    }

    const handleMessage = (e: MessageEvent) => {
      if (e.origin !== "https://nestbot-rouge.vercel.app") return;

      try {
        const dimensions = JSON.parse(e.data);
        if (iframe) {
          iframe.width = dimensions.width;
          iframe.height = dimensions.height;
          iframe.contentWindow?.postMessage(
            "f234fd45-8ca1-4592-b973-3a9e752ccb79",
            "https://nestbot-rouge.vercel.app/"
          );
        }
      } catch (error) {
        console.error("Error parsing message data:", error);
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return <iframe ref={iframeRef} />;
};
