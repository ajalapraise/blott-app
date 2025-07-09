import useNews from "@/hooks/use-news";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const News = () => {
  const { news, error } = useNews();
  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp * 1000); // Convert to milliseconds
    return date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <div className="w-full h-full flex flex-col items-start justify-center ">
      <h1 className="font-medium text-2xl md:text-4xl uppercase text-white ">
        news
      </h1>
      <div className="flex flex-col md:flex-row gap-4 md:gap-6 mt-4 w-full flex-wrap justify-between items-start ">
        {news &&
          news.length > 0 &&
          news.map((item, index) => (
            <Link
              href={item.url}
              target="_blank"
              key={index}
              className="bg-none  md:p-4 rounded-lg mb-4 hover:bg-[#2A283E] transition-colors w-full md:w-[317px]  h-fit gap-2 flex md:flex-col  items-start justify-center space-y-2 md:space-y-0 "
            >
              <div className="w-25 h-25 md:w-[285px] md:h-[179px]">
                <Image
                  src={item?.image}
                  alt="blott logo"
                  width={285}
                  height={179}
                  sizes="(max-width: 768px) 100px, 285px"
                  className="w-25 h-25 md:w-[285px] md:h-[179px] flex justify-center object-center object-cover"
                />
              </div>
              <div className="flex flex-col items-start justify-between w-full gap-2">
                <div className="flex flex-row items-start justify-between w-full">
                  <h2 className="text-[12px] font-normal text-[#FFFFFFB2]  uppercase">
                    {item?.source}
                  </h2>
                  <h2 className="text-[12px] font-normal text-[#FFFFFFB2]  uppercase">
                    {formatDate(item?.datetime)}
                  </h2>
                </div>
                <h4 className="text-[14px] md:text-[20px] font-medium md:leading-[24px] hover:underline">
                  {item?.headline}
                </h4>
              </div>
            </Link>
          ))}
        {error && (
          <div className="text-white mt-10 text-medium font-[20px]">
            <p>Something went wrong. Please try again later.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default News;
