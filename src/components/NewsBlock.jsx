import React, { useEffect, useState } from "react";

const NewsBlock = () => {
  const [news, setNews] = useState([]);

  const fetchData = async () => {
    let data = await fetch("https://linesnews.onrender.com/api/news-datas");

    let response = await data.json();
    setNews(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {news.map((ele) => {
        // console.log(ele.attributes);
        return (
          <>
            <section class="text-gray-600 body-font">
              <div class="container px-10 pt-10 mx-auto">
                <div class="flex flex-wrap -m-4">
                  <div class="p-4 sm:w-1/2">
                    <div class="h-full w-fit md:w-[185%] lg:w-[185%] border-2 border-gray-400 border-opacity-40 rounded-lg overflow-hidden">
                      <div class="p-8 md:p-6">
                        {/* Category  */}
                        <div class="lg:mb-4 mb-5">
                          <div className="flex justify-start">
                            <ul class="flex justify-start items-center gap-3 text-xs font-normal lg:font-medium -m-1">
                              <img
                                class="object-cover w-10 h-10 rounded-full ring-1 ring-black"
                                src={ele.attributes.newsIcon}
                              />
                              <li class="m-1">
                                <a class="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-indigo-500 hover:bg-indigo-700 transition duration-150 ease-in-out hover:cursor-pointer">
                                  {ele.attributes.category}
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <h1 class="text-lg lg:text-2xl font-medium text-gray-900 mb-3">
                          {ele.attributes.headline}
                        </h1>
                        <p class="leading-relaxed mb-3">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Placeat cupiditate porro, vel autem architecto
                          ab ipsum reiciendis culpa repellendus, amet minus
                          corrupti sed repudiandae eius perspiciatis delectus
                          animi? Itaque, dicta.
                        </p>
                        <div class="flex flex-wrap items-center gap-5">
                          <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 hover:cursor-pointer hover:text-indigo-700 ">
                            Learn More
                            <svg
                              class="w-4 h-4 ml-2"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              stroke-width="2"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <path d="M5 12h14"></path>
                              <path d="M12 5l7 7-7 7"></path>
                            </svg>
                          </a>
                          <div className="flex items-center text-sm hover:cursor-pointer hover:text-black">
                            <span className="text-lg pr-1"> # </span>
                            <span className="underline">
                              {ele.attributes.hashtags}
                            </span>
                          </div>
                        </div>
                        <div className="flex justify-start items-center text-sm mt-2 lg:mt-0">
                          <span className="text-gray-800 pr-2">Source :</span>
                          <span className=" border-b-2 border-black hover:text-black hover:font-bold hover:ease-in-out">
                            {ele.attributes.newsSource}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        );
      })}
    </>
  );
};

export default NewsBlock;
