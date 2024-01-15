"use client"
import React, { useState } from 'react';

const colors = ['bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500'];

export default function DateSquare(){

    const [currentColorIndex, setCurrentColorIndex] = useState(0);

  const changeColor = () => {
    const newIndex = (currentColorIndex + 1) % colors.length;
    setCurrentColorIndex(newIndex);
  };

  return (
    <div
      className={`w-6 h-6 cursor-pointer ${colors[currentColorIndex]}`}
      onClick={changeColor}
    ></div>
  );
};
