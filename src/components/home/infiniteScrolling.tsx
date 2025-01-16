"use client";
import React, { useState, useRef } from "react";
import ScrollingWords from "../animate/scrollingwords";
import Image from "next/image";

interface InfiniteScrollProps {
  rows: {
    items: { word: string; image: string }[];
    direction: "left" | "right";
  }[];
}

const InfiniteScroll: React.FC<InfiniteScrollProps> = ({ rows }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoverData, setHoverData] = useState({
    x: 0,
    y: 0,
    isVisible: false,
    image: "",
  });

  const handleMouseMove = (e: React.MouseEvent, image: string) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setHoverData({
        x: e.clientX - rect.left, // Calculate relative X position
        y: e.clientY - rect.top,  // Calculate relative Y position
        isVisible: true,
        image,
      });
    }
  };

  const handleMouseLeave = () => {
    setHoverData({
      x: 0,
      y: 0,
      isVisible: false,
      image: "",
    });
  };

  return (
    <div
      ref={containerRef}
      className="relative h-[50vh] w-full overflow-hidden bg-black flex flex-col justify-center items-center z-0"
    >
      {/* Hover Image */}
      {hoverData.isVisible && (
        <div
          className="absolute pointer-events-none transition-opacity duration-300 opacity-100"
          style={{
            top: hoverData.y,
            left: hoverData.x,
            transform: "translate(-50%, -50%)",
            zIndex: -10, // Ensure the image is behind all rows
          }}
        >
          <Image
            src={hoverData.image}
            alt="hover effect"
            width={400}
            height={500}
            className="shadow-lg"
          />
        </div>
      )}

      {/* Scrolling Rows */}
      {rows.map((row, index) => (
        <ScrollingWords
          key={`row-${index}`}
          items={row.items}
          direction={row.direction}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        />
      ))}
    </div>
  );
};

export default InfiniteScroll;
