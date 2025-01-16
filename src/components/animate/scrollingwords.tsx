import React from "react";

interface ScrollingWordsProps {
  items: { word: string; image: string }[];
  direction: "left" | "right";
  onMouseMove: (e: React.MouseEvent, image: string) => void;
  onMouseLeave: () => void;
}

const ScrollingWords: React.FC<ScrollingWordsProps> = ({
  items,
  direction,
  onMouseMove,
  onMouseLeave,
}) => {
  const duplicateItems = [...items, ...items, ...items]; // Duplicate for seamless scrolling

  return (
    <div
      className={`flex ${
        direction === "left" ? "animate-scroll-left" : "animate-scroll-right"
      } pb-4` }
    >
      {duplicateItems.map((item, index) => (
        <div
          key={`${item.word}-${index}`}
          className="relative group flex items-center mx-4 text-5xl font-bold uppercase whitespace-nowrap z-10"
          onMouseMove={(e) => onMouseMove(e, item.image)}
          onMouseLeave={onMouseLeave}
        >
          {/* Word */}
          <span className="relative text-white transition-colors duration-300 group-hover:text-black">
            {item.word}
          </span>
          {/* Dash */}
          <span className="ml-8 text-white">—</span>
        </div>
      ))}
    </div>
  );
};

export default ScrollingWords;
