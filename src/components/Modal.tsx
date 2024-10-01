import React from "react";

export default function ({ children }) {
  return (
    <div className="absolute flex items-center justify-center bg-[#0000009f] w-[100vw] h-[100vh] top-0 z-50">
      <div>{children}</div>
    </div>
  );
}
