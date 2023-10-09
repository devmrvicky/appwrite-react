import React from "react";

const NoteCard = ({ title, content }) => {
  return (
    <>
      <p className="text-xl font-semibold">{title}</p>
      <p>{content}</p>
    </>
  );
};

export default NoteCard;
