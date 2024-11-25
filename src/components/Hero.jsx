import face_images from "./../assets/face_images.png";
import girl from "./../assets/girl.jpg";

const Hero = () => {
    return (
        <>
            <div className="my-10 mx-auto w-[90vw] flex flex-col md:flex-row gap-8 min-h-[40vh]">
                {/* Heading Section */}
                <div className="heading flex-1 min-h-[40vh]">
                    <div className="animate-fadeInFromLeft">
                        <div className="heading-1 font-bold text-5xl md:text-6xl lg:text-8xl poppins-regular">
                            UNLIMITED
                            <br/>
                            PRETENTIOUS
                        </div>
                        <div className="heading-2 mt-3 flex gap-4 items-center">
                            <div className="face_images">
                                <img
                                    src={face_images}
                                    alt=""
                                    className="w-24 h-12 md:w-44 md:h-20"
                                />
                            </div>
                            <div className="subheading font-bold text-5xl md:text-6xl lg:text-8xl poppins-regular">
                                IDEAS
                            </div>
                        </div>
                    </div>
                    {/* Base Elements */}
                    <div className="baseelements mt-6 flex flex-col gap-2 w-full">
                        <div className="baseline h-[0.5px] bg-white"></div>
                        <div className="content flex justify-between text-sm md:text-base lg:text-lg">
                            <div className="cont-1">OUR SOLUTIONS</div>
                            <div className="cont-2 text-gray-750">
                                WE PROVIDE THE FULL <br /> FUNNEL APPROACH
                            </div>
                        </div>
                    </div>
                </div>

                {/* Image Section */}
                <div
                    className="image-box flex-1 bg-no-repeat rounded-3xl bg-cover flex flex-col justify-between bg-right min-h-[40vh]"
                    style={{
                        backgroundImage: `url(${girl})`,
                        backgroundPosition: "right center",
                    }}
                >
                    <div className="text bg-transparent text-black font-semibold p-4 md:p-6 text-lg md:text-xl">
                        YOUR<br /> BUSINESS <br />BOOST
                    </div>
                    <div className="democall bg-transparent text-black hover:cursor-pointer flex items-center justify-between border-2 border-black rounded-[40px] px-4 md:px-6 py-2 md:py-3 w-[90%] md:w-[85%] mx-auto mb-4 md:mb-5 text-lg md:text-xl hover:bg-purple-300">
                        <h3 className="w-max bg-transparent text-black font-semibold">
                            Book Demo Call
                        </h3>
                        <span className="material-symbols-outlined text-2xl md:text-3xl hover:cursor-pointer bg-transparent text-black">
                            
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;