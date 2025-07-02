import imgPeople from "../assets/undraw_people-search_xpq4.svg"
function Hero() {
    return (
        <>
            <section id="hero" className="h-screen w-full relative overflow-hidden">
                <img className="absolute top-[-110px] left-[-100px] w-[400px] xl:w-[600px] h-auto z-[-1]" src="https://d3stooges3d.com/wp-content/uploads/2023/02/blob-3d-stooges-2.png" alt="" />
                <div className="container px-4 mx-auto z-10 h-full flex flex-col">
                    <p className="text-xl pt-40 ms-auto lg:w-[640px] text-neutral-800 mb-auto text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit mollitia atque, obcaecati, vero saepe a facilis officiis, magni modi est voluptate facere omnis impedit tempore incidunt placeat veritatis eum nulla.</p>
                    <h1 className="text-xl text-neutral-800 mt-auto mb-6">" Excepteur sint occaecat cupidatat non proident "</h1>
                    <img className="mt-6 mb-auto h-auto w-[200px]" src={imgPeople} alt="" />
                </div>
                <img className="absolute right-[-300px] bottom-[-200px] w-[600px] xl:w-[600px] h-auto xl:right-[-240px]" src="https://d3stooges3d.com/wp-content/uploads/2023/02/blob-3d-stooges-2.png" alt="" />
            </section>
        </>
    );
}


export default Hero