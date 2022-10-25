import React from "react";
function News({
  url,
  img,
  title,
  content,
  description,
  publishedAt,
  source,
  author,
  ip
}) {
    console.log(title)
  return (
    <>
      <div className="text-black">
        <image src={img} alt={title} />
        <h1>{title}</h1>
        <p>{publishedAt}</p>
        <p>{ip}</p>
      </div>
    </>
  );
}

export default News;
