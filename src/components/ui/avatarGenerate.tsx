// components/AvatarGenerate.tsx
import React from "react";

interface Props {
  name: string;
  size?: number;
}

const stringToColor = (str: string): string => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  const color = `hsl(${hash % 360}, 70%, 50%)`; // màu HSL ngẫu nhiên
  return color;
};

const AvatarGenerate = ({ name, size = 40 }:Props) => {
  const initial = name.trim().charAt(0).toUpperCase();
  const bgColor = stringToColor(name);

  return (
    <div
      style={{
        backgroundColor: bgColor,
        color: "white",
        width: size,
        height: size,
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: "bold",
        fontSize: size / 2,
        userSelect: "none",
      }}
    >
      {initial}
    </div>
  );
};

export default AvatarGenerate;
