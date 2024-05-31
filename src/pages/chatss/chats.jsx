import Img from '../../assets/search.png'
import Img2 from '../../assets/Avatar.png'

const Chats = () => {
    return (
        <>
            <div class="flex flex-1 pt-3 grid grid-cols-3 gap-1 overflow-hidden">
                <div class="">
                    <div class="h-full w-full bg-[#FDFDFF] p-3 rounded-lg border ">
                        <p className='mb-3 font-bold text-[16px]'>Messages</p>
                        <div class=" relative mb-4 flex w-full items-center gap-2   py-2 ">
                            <div className=''>
                                <img className='absolute left-[20px] top-[23px]' src={Img} alt="search" />
                            </div>

                            <input
                                className="w-[70%] outline-none rounded-lg border py-2 pl-12"
                                placeholder="Search"
                                onchange="(e) => handleFilter(e)"
                            />
                            <div className='p-3'>
                                <h1 className='text-[#5D5FEF] font-semibold'>Chat +</h1>
                            </div>
                        </div>
                        <div className='contact-list'>
                            <div className='conatcts rounded-lg border flex justify-between items-center px-2 py-3 cursor-pointer hover:shadow mb-2'>
                                <div className=''>
                                    <img src={Img2} alt='avatar' />
                                </div>
                                <div>
                                    <p className='text-[12px] font-bold'>Support ADMIN</p>
                                    <p className='text-[12px] text-[#A1A1A1]'>Pesquisar chat</p>
                                </div>
                                <div>
                                    <p className='text-[12px] font-semibold'>Esperra</p>
                                    <p className='text-[12px] font-semibold'>00:31:00</p>
                                </div>
                                <div>
                                    <i className='fa fa-play text-[#5D5FEF]'></i>
                                </div>
                            </div>
                            <div className='conatcts rounded-lg border flex justify-between items-center px-2 py-3 cursor-pointer hover:shadow mb-2'>
                                <div className=''>
                                    <img src={Img2} alt='avatar' />
                                </div>
                                <div>
                                    <p className='text-[12px] font-bold'>Support ADMIN</p>
                                    <p className='text-[12px] text-[#A1A1A1]'>Pesquisar chat</p>
                                </div>
                                <div>
                                    <p className='text-[12px] font-semibold'>Esperra</p>
                                    <p className='text-[12px] font-semibold'>00:31:00</p>
                                </div>
                                <div>
                                    <i className='fa fa-play text-[#5D5FEF]'></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex h-full w-full flex-col rounded-lg border col-span-2">
                    <div class="flex items-center justify-between bg-[#FDFDFF] p-4">
                        <div class="flex items-center justify-between gap-3">
                            <div>
                                <img class="h-10 w-10 rounded-full" src={Img2} alt="users" />
                            </div>
                            <div>
                                <p className='text-[12px] font-bold'>Support ADMIN</p>
                                <p className='text-[12px] text-[#000] uppercase font-semibold'>#32235c</p>
                            </div>
                            {/* <p>{selectedChat?.firstName || ""} {selectedChat?.lastName || ""}</p> */}
                        </div>
                        <div>
                            <img src="more" alt="" />
                        </div>
                    </div>
                    <div class="chat-container flex-1  ">
                        <div>
                            {/* <!-- Chat Content --> */}

                            <div class="container mx-auto shadow-lg rounded-lg ">
                                <div class="flex flex-row justify-between bg-white">


                                    <div class="w-full px-5 flex flex-col justify-between  h-[500px] overflow-y-scroll overflow-hidden">
                                        <div class="flex flex-col mt-5 ">
                                            <div class="flex justify-end mb-4">
                                                <div
                                                    class="mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white text-[12px]"
                                                >
                                                    Welcome to group everyone !
                                                </div>
                                                <img
                                                    src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                                                    class="object-cover h-8 w-8 rounded-full"
                                                    alt=""
                                                />
                                            </div>
                                            <div class="flex justify-start mb-4">
                                                <img
                                                    src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                                                    class="object-cover h-8 w-8 rounded-full"
                                                    alt=""
                                                />
                                                <div
                                                    class="ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white text-[12px]"
                                                >
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                                                    at praesentium, aut ullam delectus odio error sit rem. Architecto
                                                    nulla doloribus laborum illo rem enim dolor odio saepe,
                                                    consequatur quas?
                                                </div>
                                            </div>
                                            <div class="flex justify-start mb-4">
                                                <img
                                                    src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                                                    class="object-cover h-8 w-8 rounded-full"
                                                    alt=""
                                                />
                                                <div
                                                    class="ml-2 py-3 px-4 bg-gray-400 rounded-br-3xl rounded-tr-3xl rounded-tl-xl text-white text-[12px]"
                                                >
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                                                    at praesentium, aut ullam delectus odio error sit rem. Architecto
                                                    nulla doloribus laborum illo rem enim dolor odio saepe,
                                                    consequatur quas?
                                                </div>
                                            </div>
                                            <div class="flex justify-end mb-4">
                                                <div>
                                                    <div
                                                        class="mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white text-[12px]"
                                                    >
                                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                                        Magnam, repudiandae.
                                                    </div>

                                                    <div
                                                        class="mt-4 mr-2 py-3 px-4 bg-blue-400 rounded-bl-3xl rounded-tl-3xl rounded-tr-xl text-white text-[12px]"
                                                    >
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                        Debitis, reiciendis!
                                                    </div>
                                                </div>
                                                <img
                                                    src="https://source.unsplash.com/vpOeXr5wmR4/600x600"
                                                    class="object-cover h-8 w-8 rounded-full"
                                                    alt=""
                                                />
                                            </div>                                                                                                                    
                                        </div>
                                        <div class="fixed bottom-2 w-[64%]">
                                            <input
                                                class="w-full bg-gray-300 py-2 px-3 rounded-xl"
                                                type="text"
                                                placeholder="type your message here..."
                                            />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                 
                </div>
            </div>

        </>
    )
};
export default Chats;