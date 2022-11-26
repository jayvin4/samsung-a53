import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import Card from "./Card";
import Card2 from "./Card2";
import Card3 from "./Card3";
import Card4 from "./Card4";
import Card5 from "./Card5";
import Card6 from "./Card6";

function Compare()
{
    return(
        <>
        <div className="pt-10">
        <div id="compare" className="pt-10 bg-slate-100">
            <h1 className="text-center text-5xl font-bold">Compare the models</h1>
            <p className="text-lg pb-10 text-center pt-6">Compare with similar items</p>
        </div>
        </div>
        <div className="pl-8 flex justify-center bg-slate-100">
            <Swiper 
            freeMode={true}
            grabCursor={true}
            modules={[FreeMode]}
            className="myswiper"
            slidesPerView={4}
            spaceBetween={30}
            >
                <SwiperSlide>
                    <Card />
                </SwiperSlide>
                <SwiperSlide>
                    <Card2 />
                </SwiperSlide>
                <SwiperSlide>
                    <Card3 />
                </SwiperSlide>
                <SwiperSlide>
                    <Card4 />
                </SwiperSlide>
                <SwiperSlide>
                    <Card5 />
                </SwiperSlide>
                <SwiperSlide>
                    <Card6 />
                </SwiperSlide>
            </Swiper>
        </div>
        <div className="pt-12 pb-12">
            <h1 className="text-5xl font-semibold text-center">Recently Viewed</h1>
        </div>
        <div className="pl-8 flex justify-center pb-28">
            
            <div class="bg-white border-2 rounded-3xl">
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

        <div className="bg-slate-100 text-xs">
            <div className="pt-10 pl-12 pb-10">
        <p>* Estimated against the usage profile of an average/typical user. Independently assessed by Strategy Analytics between 2021.12.08–12.20 in USA and UK with pre-release versions of SM-S901, SM-S906, SM-S908 under default setting</p>
        <p>using 5G Sub6 networks (NOT tested under 5G mmWave network). Actual battery life varies by network environment, features and apps used, frequency of calls and messages, number of times charged, and many other factors.</p>
<br />
        <p>Images shown here are for representational purpose only, actual may vary. All features, specifications and prices are subject to change without prior notice. Model availability may vary from location to location.</p>
<br />
        <p>User Available Memory : User memory is less than the total memory due to storage of the operating system and software used to operate the device features. Actual user memory will vary depending on the operator and may change</p>
        <p>after software upgrades are performed</p>
<br />
        <p>Network : The bandwidths supported by the device may vary depending on the region or service provider</p>
<br />
        <p>All specifications and descriptions provided herein may be different from the actual specifications and descriptions for the product. Samsung reserves the right to make changes to this web page and the product described herein, at</p>
        <p>anytime, without obligation on Samsung to provide notification of such change. All functionality, features, specifications, GUI and other product information provided in this web page including, but not limited to, the benefits, design,</p>
        <p>pricing, components, performance, availability, and capabilities of the product are subject to change without notice or obligation. The contents within the screen are simulated images and are for demonstration purposes only.</p>
<br />
        <p>Creative visualization. Images shown here are for representational purpose only, actual may vary.</p>
<br />
        <p>*S Pen Pro and S Pen Fold Edition sold separately. Only use the Samsung S Pen Pro or the S Pen Fold Edition designed exclusively for Galaxy Z Fold3 5G. All other S Pens or stylus pens not designed for Galaxy Z Fold3 5G (including those</p>
        <p>by other manufacturers) may damage the screen.</p>
<br />
        <p>*Galaxy Z Fold3 5G and Z Filp3 5G is rated as IPX8. IPX8 is based on test conditions for submersion in up to 1.5 meters of freshwater for up to 30 minutes. Not advised for beach or pool use. Not dust resistant.</p>
<br />
        <p>*Measured diagonally, the screen size is 16.40cm (6.5") in the full rectangle and 16.09cm (6.3") accounting for the rounded corners. Actual viewable area is less due to the rounded corners and the camera cutout.</p>
<br />
        <p>*Typical value tested under third-party laboratory condition. Typical value is the estimated average value considering the deviation in battery capacity among the battery samples tested under IEC 61960 standard. Rated (minimum)</p>
        <p>capacity is 4,860mAh. Actual battery life may vary depending on network environment, usage patterns and other factors.</p>
        </div>
        </div>
        </>
    );
}
export default Compare;