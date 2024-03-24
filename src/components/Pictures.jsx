function Pictures() {
    return (
        <div className="w-full h-[70vh] bg-white flex items-center justify-center overflow-hidden">
            <div className="w-[40%] h-1/2 relative">
                <div className="absolute w-20 h-[7rem] -right-[45%] top-6 ">
                    <img
                        className="object-cover w-full h-full"
                        src="https://a.storyblok.com/f/133769/348x494/21becfd449/home-news-3.jpg/m/550x781/filters:format(webp):quality(70)"
                        alt=""
                    />
                </div>
                <div className="absolute w-[8rem] aspect-video -left-[70%] top-[25%]">
                    <video
                        autoPlay
                        loop
                        muted
                        className="w-full h-full"
                        src="https://a.storyblok.com/f/133769/x/9c433c7aac/home-news-diesel-be-a-follower.mp4"
                    ></video>
                </div>
                <div className="absolute w-[10rem] aspect-video -left-[70%] -bottom-14">
                    <img
                        className="w-full h-full object-cover"
                        src="https://a.storyblok.com/f/133769/758x508/8a1ff60d00/home-news-4.jpg/m/550x369/filters:format(webp):quality(70)"
                        alt=""
                    />
                </div>
                <div className="absolute w-[8rem]  aspect-square -right-[70%] -bottom-[40%]">
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
