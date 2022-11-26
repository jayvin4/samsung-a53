import React from "react";

function Navbar() {
    return(
        <>
            <div className="text-black bg-white h-20">
                <div className="py-6 pl-8 flex justify-start pr-10">
                    <strong className="font-serif text-2xl font-black"><img className="w-28 pt-2" src="samsung.png" alt=""></img></strong>
                    <div className="pl-20 pt-2">
                        <ul className="flex justify-start text-sm">
                            <li><b><a href="#feacture">Mobile</a></b></li>&nbsp;&nbsp;&nbsp;
                            <li><b><a href="#feacture">TV & AV</a></b></li>&nbsp;&nbsp;&nbsp;
                            <li><b><a href="#feacture">Home Appliances</a></b></li>&nbsp;&nbsp;&nbsp;
                            <li><b><a href="#feacture">Laptop & Monitors</a></b></li>&nbsp;&nbsp;&nbsp;
                            <li><b><a href="#feacture">Displays</a> </b></li>&nbsp;&nbsp;&nbsp;
                            <li><b><a href="#feacture">Accessories</a> </b></li>&nbsp;&nbsp;&nbsp;
                            <li><b><a href="#feacture">SmartThings</a> </b></li>&nbsp;&nbsp;&nbsp;
                            <li><b><a href="#feacture">Offers</a> </b></li>
                        </ul>
                       
                    </div>
                    <ul className="flex justify-end pl-28 text-sm pt-2">
                            <li><b><a href="#feacture">Support</a></b></li>&nbsp;&nbsp;&nbsp;
                            <li><b><a href="#feacture">For Business</a></b></li>
                        </ul>
                        <div className="flex justify-start pl-8 pt-2">
                            <h1 className="pr-4"><a href="#feacture"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                </svg></a>
                            </h1>
                            <h1 className="pr-4"><a href="#feacture"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                </svg></a>
                            </h1>
                            <h1 className="pr-2"><a href="#feacture"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                                </svg></a>
                            </h1>
                        </div>
                </div>
            </div>
        

        <div className="text-white bg-black h-20 sticky top-0">
            
            <div className="py-6 pl-8 flex justify-between pr-10">
                    <div><strong className="font-sans text-xl">Galaxy A53 5G (8GB RAM)</strong></div>
                    <div className="pl-80 text-right">
                        <p>From ₹2066.25/mo for 18 mos at 13.5% Interest or ₹33499.00</p>
                        <p className="text-xs pt-1">MRP (Inclusive of all taxes) Original Price:<strike>₹ 42499.00</strike><i className="text-sky-400"> Save ₹9000.00</i></p>
                    </div>
                    <div><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Buy Now</button></div>
            </div>
          
            
        </div>
        <nav className="sticky top-20">
            <div className="bg-zinc-800 text-white">
                <ul className="flex justify-start pt-2 pb-2 px-8 text-sm">
                    <li>
                        <a href="#feacture" className=" font-normal hover:border-b-2 hover:pb-1.5 transition-all duration-500">Feacture</a>
                    </li>
                    &nbsp;&nbsp;
                    &nbsp; &nbsp;       
                    <li>
                        <a href="#specs" className=" font-normal hover:border-b-2 hover:pb-1.5 transition-all duration-500">Specs</a>
                    </li>&nbsp;&nbsp;
                    &nbsp; &nbsp;   

                    <li>
                        <a href="#support" className=" font-normal hover:border-b-2 hover:pb-1.5 transition-all duration-500">Support</a>
                    </li>&nbsp;&nbsp;
                    &nbsp; &nbsp; 

                    <li>
                        <a href="#compare" className=" font-normal hover:border-b-2 hover:pb-1.5 transition-all duration-500">Compare</a>
                    </li>&nbsp;&nbsp;
                    &nbsp; &nbsp; 

                    <li>
                        <a href="#wheretobuy" className=" font-normal hover:border-b-2 hover:pb-1.5 transition-all duration-500">Where to buy</a>
                    </li>&nbsp;&nbsp;
                    &nbsp; &nbsp; 
                </ul>
            </div>
        </nav>
        </>
    );
}
export default Navbar;