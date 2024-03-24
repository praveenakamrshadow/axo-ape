function Pictures() {
    return (
        <div className="w-full h-[70vh] sm:h-[100vh] bg-white flex items-center justify-center overflow-hidden">
            <div className="w-[40%] sm:w-[20%] sm:h-[90%] h-1/2 relative">
                <div className="absolute w-20 sm:w-40 sm:h-[15rem] h-[7rem] -right-[45%] top-6 ">
                    <img
                        className="object-cover w-full h-full"
                        src="https://a.storyblok.com/f/133769/348x494/21becfd449/home-news-3.jpg/m/550x781/filters:format(webp):quality(70)"
                        alt=""
                    />
                </div>
                <div className="absolute w-[8rem] sm:w-[20rem] aspect-video -left-[70%] sm:-left-2/3 top-[25%]">
                    <video
                        autoPlay
                        loop
                        muted
                        className="w-full h-full"
                        src="https://a.storyblok.com/f/133769/x/9c433c7aac/home-news-diesel-be-a-follower.mp4"
                    ></video>
                </div>
                <div className="absolute w-[10rem] sm:w-[17rem] aspect-video -left-[70%] -bottom-14">
                    <img
                        className="w-full h-full object-cover"
                        src="https://a.storyblok.com/f/133769/758x508/8a1ff60d00/home-news-4.jpg/m/550x369/filters:format(webp):quality(70)"
                        alt=""
                    />
                </div>
                <div className="absolute w-[8rem] sm:w-[50%] aspect-square -right-[70%] sm:-right-[30%] -bottom-[37%] sm:-bottom-[10%]">
                    <video
                        autoPlay
                        loop
                        muted
                        className="w-full h-full"
                        src="https://a.storyblok.com/f/133769/x/88b4bf7989/news-rino-pelle.mp4"
                    ></video>
                </div>
                <img
                    className="w-full h-full object-cover"
                    src="https://a.storyblok.com/f/133769/748x1278/5784aa7150/home-news-1.jpg/m/550x940/filters:format(webp):quality(70)"
                    alt=""
                />
            </div>
        </div>
    );
}

export default Pictures;
