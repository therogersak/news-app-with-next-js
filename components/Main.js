import News from "./News";

function Main({ data }) {
  console.trace(data);
  return (
    <>
      <div className="p-5">
        <h1 className="mx-auto border-b-[3px] text-2xl font-extrabold text-black w-fit border-black mt-[3rem] my-5">
          Latest Updates
        </h1>

        <div className="grid grid-clos-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {data?.data?.articles?.map((item, i) => (
            <News
              key={i}
              img={item.urlToImage}
              url={item.url}
              author={item.author}
              content={item.content}
              description={item.description}
              publishedAt={item.publishedAt}
              title={item.title}
              source={item.source}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Main;
