const NewsLetter = () => {
    return (
        <div
            className="h-[40vh] flex items-center justify-center  md:rounded mx-0 md:mx-4"
            style={{
                backgroundImage:
                    "linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),url(https://i.ibb.co/ZJmLCWJ/news-later.jpg)",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}
        >
            <div className="text-center bg-white p-4 lg:p-8 rounded w-[400px] lg:w-[700px]">
                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3">
                    Subscribe our <span className="text-primary">Newsletter</span>
                </h1>
                <p className="mb-3 mx-auto font-medium text-sm">
                    Stay updated with our newsletter to unlock travel secrets, exclusive deals, and
                    endless inspiration for your next adventure. Join us in exploring the world of
                    hospitality!
                </p>
                <div className="mt-5 flex justify-center">
                    <input
                        type="email"
                        className="pl-4 w-[200px] lg:w-[400px] border h-10 lg:h-14 focus:outline-none rounded-l-lg"
                        placeholder="Write your email"
                    />
                    <button className="bg-primary rounded-r-lg px-8  h-10 lg:h-14 text-white text-sm lg:text-lg">
                        Subscribe
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;
