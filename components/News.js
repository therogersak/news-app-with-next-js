import React from "react";
import Link from "next/link";
function News({
  url,
  img,
  title,
  publishedAt,
  author,
}) {
  return (
    <>
      <div className="text-black flex flex-col overflow-hidden">
        <div className="max-w-[400] h-[250px]">
          <Link href={url}>
            <a target="_blank">
              <img
                src={img}
                alt={title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </a>
          </Link>
        </div>
        <div>
          <Link href={url}>
            <a target="_blank">
              <h1 className="truncate pt-2">{title}</h1>
            </a>
          </Link>
          <h3 className="pb-2">
            {
              ("=>",
              new Date(publishedAt).toLocaleDateString("en-US", {
                weekday: "short",
                year: "numeric",
                day: "numeric",
              }))
            }{" "}
          </h3>
          <p className="bg-black text-white w-fit px-3 py-1 rounded-lg">
            {author}
          </p>
        </div>
      </div>
    </>
  );
}

export default News;
