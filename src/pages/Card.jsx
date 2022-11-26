import React from "react";

function Card(){
    return(
        <>
    <div>
        <div class="bg-white border rounded-3xl">
            <h1 className="text-center pt-6 pb-4 font-bold">Galaxy A53 5G (8GB RAM)</h1>
        <img src="blue.png" alt="Mountain" className="h-52 pl-10 pr-10" />
        <p className="text-center text-xs pt-6 pb-4"><strong>Colour </strong>:Awesome Blue</p>
        <div className="flex justify-around pl-14 pr-14 pb-4">
            <button className="bg-sky-500 w-4 h-4 rounded-full border border-black"></button>
            <button className="bg-black w-4 h-4 rounded-full border border-black"></button>
            <button className="bg-fuchsia-200 w-4 h-4 rounded-full border border-black"></button>
            <button className="bg-white w-4 h-4 rounded-full border border-black"></button>
        </div>

        <div className="flex justify-around pl-14 pr-14">
            <button className="text-xs rounded-2xl border border-black w-14 h-8">
                <div>128 GB</div>
            </button>
            <button className="text-xs rounded-2xl border border-black w-14 h-8"> 256 GB</button>
        </div>

           <div className="pt-6 pb-6">
            <h1 className="text-center font-bold text-xs">From ₹2066.25/mo for 18 mos Monthly Price:or ₹</h1>
            <h1 className="text-center font-bold text-xs">33499.00</h1>
            <p className="text-center text-xs pt-2"><strike>₹ 42499.00</strike>&nbsp; &nbsp;<a href=" " className="text-cyan-600">Save ₹9000.00</a></p>
           </div>
           
           <div className="text-xs pl-6 pr-6">
            <div className="border-y border-gray-300 flex justify-between">
                <div className="pt-2 pb-2">FHD+ sAMOLED 120Hz Display</div>
                <div className="py-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                    </svg>

                </div>
            </div>
            <div className="border-b border-gray-300 flex justify-between">
                <div className="pt-2 pb-2">64MP OIS Camera</div>
                <div className="py-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
</svg>

                </div>
            </div>
            <div className="border-b border-gray-300 flex justify-between">
                <div className="pt-2 pb-2">2 Days Battery</div>
                <div className="py-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M4.5 10.5h6.75V15H4.5v-4.5zM3.75 18h15A2.25 2.25 0 0021 15.75v-6a2.25 2.25 0 00-2.25-2.25h-15A2.25 2.25 0 001.5 9.75v6A2.25 2.25 0 003.75 18z" />
</svg>

                </div>
            </div>
            <div className="border-b border-gray-300 flex justify-between">
                <div className="pt-2 pb-2">Weight (g)</div>
                <div className="font-bold py-1.5">189</div>
            </div>

            <div className="text-white h-10">00000</div>
           </div>
        </div>

    
  </div>

        </>
    );
}
 export default Card;