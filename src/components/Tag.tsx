import React from "react";

const Tag = ({ text }: { text: string }) => {
  return (
    <div className="inline-flex items-center rounded-full bg-custom-tagcolor text-white px-2.5 py-1 shadow-xs text-xs font-medium space-x-1.5 dark:bg-sky-500 transition-all duration-300 hover:scale-105 hover:shadow-sm">
      <span className="w-2 h-2 bg-white rounded-full transition-transform duration-300 group-hover:scale-110"></span>
      <span className="truncate max-w-[100px] text-sm">{text}</span>
    </div>
  );
};

export default Tag;
