import play from "./../assets/play-button.png";
import circles from "./../assets/circles.png";
import topright from "./../assets/top_right.png";
   
const Info = () => {
    return (
        <div className="container mx-auto my-24 flex flex-col md:flex-row gap-8">
            {/* Details Section */}
            <div className="details-section w-[95%] mx-auto flex flex-col gap-8 md:gap-16 md:basis-1/3">
                {/* See Button */}
                <div className="see-button flex gap-4 items-center">
                    <span className="hover:cursor-pointer">
                        <img src={play} alt="Play button" className="h-12 md:h-16" />
                    </span>
                    <p className="text-base md:text-lg">
                        Let&apos;s See <br /> How we did it
                    </p>
                </div>
                {/* Features */}
                <div className="features flex flex-wrap gap-4">
                    <span className="feature-item border border-white rounded-full px-4 py-2 hover:cursor-pointer hover:bg-slate-700 text-sm md:text-base">
                        Web Analytics
                    </span>
                    <span className="feature-item border border-white rounded-full px-4 py-2 hover:cursor-pointer hover:bg-slate-700 text-sm md:text-base">
                        Email Marketing
                    </span>
                    <span className="feature-item border border-white rounded-full px-4 py-2 hover:cursor-pointer hover:bg-slate-700 text-sm md:text-base">
                        SEO 2.0
                    </span>
                </div>
            </div>
            {/* Cards Section */}
            <div className="cards flex flex-col md:flex-row gap-8 md:basis-2/3 mx-auto w-[90%]">
                {/* Card 1 */}
                <div className="card-1 bg-orange-500 rounded-xl flex flex-col justify-between gap-8 px-6 py-6 hover:scale-[1.05] transition-transform duration-300 ease-in-out hover:cursor-pointer w-full max-w-[380px] mx-auto md:max-w-[400px]">
                    <div className="text-black font-semibold bg-transparent text-lg md:text-xl">
                        UNIQUE <br /> BUSINESS SOLUTIONS
                    </div>
                    <div className="icon bg-transparent">
                        <img src={circles} className="bg-transparent h-10 md:h-12" alt="circles" />
                    </div>
                </div>
                {/* Card 2 */}
                <div className="card-2 bg-[#e0e0e0] rounded-xl flex flex-col justify-between gap-8 px-6 py-6 hover:scale-[1.05] transition-transform duration-300 ease-in-out hover:cursor-pointer w-full max-w-[380px] mx-auto md:max-w-[400px]">
                    <div className="icon bg-transparent flex justify-end">
                        <img src={topright} className="bg-transparent h-10 md:h-12 invert" alt="top right icon" />
                    </div>
                    <div className="text font-bold text-2xl md:text-4xl bg-transparent text-black">
                        OUR CASE <br /> STUDIES
                    </div>
                </div>
                {/* Card 3 */}
                <div className="card-3 bg-yellow-300 rounded-xl flex flex-col justify-between gap-8 px-6 py-6 hover:scale-[1.05] transition-transform duration-300 ease-in-out hover:cursor-pointer w-full max-w-[380px] mx-auto md:max-w-[400px]">
                    <div className="text-black bg-transparent font-bold text-lg md:text-xl">
                        SUCCESSFUL <br /> PROJECTS
                    </div>
                    <div className="number bg-transparent flex items-start gap-2">
                        <div className="text-6xl md:text-7xl lg:text-8xl bg-transparent text-black">700</div>
                        <div className="text-2xl md:text-4xl font-bold bg-transparent text-black">+</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info;