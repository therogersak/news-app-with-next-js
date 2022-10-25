import News from "./News";

function Main({ data }) {
  return (
    <>
      <div className="">
        <h1 className="mx-auto border-b-[3px] text-2xl font-extrabold text-black w-fit border-black mt-[3rem]">
          Latest Updates
        </h1>

        {data?.articles?.map((item , i) => (
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
            ip="testing"
          />
        ))}
      </div>
    </>
  );
}

export default Main;
