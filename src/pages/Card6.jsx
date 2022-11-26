import React from "react";

function Card6(){
    return(
        <>
    <div>
        <div class="bg-white border rounded-3xl">
            <h1 className="text-center pt-6 pb-4 font-bold">Galaxy A13 5G (6GB RAM)</h1>
        <img src="black6.jpg" alt="Mountain" className="h-84 pl-10 pr-10" />
        <p className="text-center pt-6 text-xs pb-4"><strong>Colour</strong> :Awesome Black</p>
        <div className="flex justify-around pl-14 pr-14 pb-4">
            <button className="bg-neutral-800 w-4 h-4 rounded-full border border-black"></button>
            <button className="bg-teal-600 w-4 h-4 rounded-full border border-black"></button>
            <button className="bg-teal-200 w-4 h-4 rounded-full border border-black"></button>
            <button className="bg-red-200 w-4 h-4 rounded-full border border-black"></button>
        </div>

        <div className="flex justify-around pl-14 pr-14">
            <button className="text-xs rounded-2xl border border-black w-14 h-8">
                <div>128 GB</div>
            </button>
           
        </div>

           <div className="pt-6 pb-6">
            <h1 className="text-center font-bold text-xs">From ₹1048.51/mo for 18 mos Monthly Price:or ₹</h1>
            <h1 className="text-center font-bold text-xs">16999.00</h1>
            <p className="text-center text-xs pt-2"><strike>₹ 20990.00</strike>&nbsp; &nbsp;<a href=" " className="text-cyan-600">Save ₹3991.00</a></p>
           </div>
           
           <div className="text-xs pl-6 pr-6">
            <div className="border-y border-gray-300 flex justify-between">
                <div className="pt-2 pb-2">Multi Camera System</div>
                <div className="py-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
</svg>

                </div>
            </div>
            <div className="border-b border-gray-300 flex justify-between">
                <div className="pt-2 pb-2">Battery</div>
                <div className="py-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 10.5h.375c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125H21M3.75 18h15A2.25 2.25 0 0021 15.75v-6a2.25 2.25 0 00-2.25-2.25h-15A2.25 2.25 0 001.5 9.75v6A2.25 2.25 0 003.75 18z" />
</svg>

                </div>
            </div>
            <div className="border-b border-gray-300 flex justify-between">
                <div className="pt-2 pb-2">Weight (g)</div>
                <div className="font-bold py-1.5">
                    195
                </div>
            </div>
            <div className="border-b border-gray-300 flex justify-between">
                <div className="pt-2 pb-2">Audio Playback Time (Hours)</div>
                <div className="py-1.5 font-bold">
                    Up to 94
                </div>
            </div>

            <div className="text-white h-10">00000</div>
           </div>
        </div>

    
  </div>

        </>
    );
}
 export default Card6;