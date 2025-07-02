function Contact() {
    return (
        <section id="contact" className="py-12 lg:py-24 xl:py-32">
            <div className="container px-4 mx-auto">
                <div className="lg:w-[920px] bg-neutral-100 mx-auto flex flex-col lg:flex-row">
                    <div className="lg:w-[40%] p-8 lg:p-12 overflow-hidden flex flex-col justify-center items-center
                    lg:bg-[url(https://images.unsplash.com/photo-1484807352052-23338990c6c6?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-bg-cover bg-center">
                        <h2 className="text-4xl uppercase text-center font-bold text-neutral-800 lg:text-neutral-50 mb-3 lg:mb-4">Contact</h2>
                        <p className="text-neutral-800 lg:text-neutral-50 text-xl text-center leading-[calc(1em*1)]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus sequi consequuntur </p>
                    </div>
                    <div className="lg:w-[60%] p-8 lg:p-12 flex flex-col h-full">
                        <div className="mb-3">
                            <p className="text-lg mb-1 text-neutral-800">Name</p>
                            <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-400 focus:border-orange-400 block w-full p-2.5" placeholder="Your name" />
                        </div>
                        <div className="mb-3">
                            <p className="text-lg mb-1 text-neutral-800">Email</p>
                            <input type="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-400 focus:border-orange-400 block w-full p-2.5" placeholder="Your email" />
                        </div>
                        <div className="mb-3">
                            <p className="text-lg mb-1 text-neutral-800">Subject</p>
                            <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-400 focus:border-orange-400 block w-full p-2.5" placeholder="subject" />
                        </div>

                        <div className="mb-3">
                            <p className="text-lg mb-1 text-neutral-800">Message</p>
                            <textarea className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-400 focus:border-orange-400 block w-full p-2.5" placeholder="Message"></textarea>
                        </div>
                        <button className="cursor-pointer mt-8 border border-orange-400 text-xl flex justify-center items-center w-full py-2 rounded-lg text-orange-400 hover:bg-orange-400 hover:text-neutral-50 font-semibold">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}


export default Contact