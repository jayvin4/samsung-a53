import React, {useState} from "react";

function Specs() {
    const [show, setshow] = useState(true);


    return(
        <>
        <div id="specs">
        <div className="text-5xl font-bold text-center pt-10">Specifications</div>
        <div className="flex justify-around pt-20">
            <div>
                <p className="text-center text-sm">Weight (g)</p>
                <h1 className="text-center text-xl font-bold">189</h1>
            </div>
            <div className="pb-10">
                <p className="text-center text-sm">CPU Speed</p>
                <h1 className="text-cente text-xl font-bold">2.4GHz, 2GHz</h1>
            </div>
        </div>
            {show && 
            <div className="pl-10 pr-10 bg-gray-100">
                <div className="grid grid-cols-3 gap-6 border-b border-slate-600 pt-10 pb-10">
                    <div className=" font-serif text-2xl font-bold">Processor</div>
                    <div className="text-base">CPU Speed<br /> 2.4GHz, 2GHz</div>
                    <div className="text-base">CPU Type<br /> Octa-Core</div>
                </div>
                
                <div className="grid grid-cols-3 gap-6 border-b border-slate-600 pt-10 pb-10">
                    <div className=" font-serif text-2xl font-bold">Display</div>
                    <div className="text-base">Size (Main_Display)<br />16.40cm (6.5") full rectangle / 16.09cm (6.3") rounded corners
                    <br /><br /><br />Technology (Main Display)<br />Super AMOLED
                    </div>
                    <div className="text-base">Resolution (Main Display<br />1080 x 2400 (FHD+)
                    <br /><br /><br />Color Depth (Main Display)<br />16M
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-6 border-b border-slate-600 pt-10 pb-10">
                    <div className=" font-serif text-2xl font-bold">Camera</div>
                    <div className="text-base">
                        Rear Camera - Resolution (Multiple)<br />
                        64.0 MP + 12.0 MP + 5.0 MP + 5.0 MP<br /><br /><br />
                        Rear Camera - Auto Focus<br />
                        Yes<br /><br /><br />
                        Rear Camera Zoom<br />
                        Digital Zoom up to 10x<br /><br /><br />
                        Front Camera - F Number<br />
                        F2.2<br /><br /><br />
                        Front Camera - OIS<br />
                        No<br /><br /><br />
                        Front Camera - Flash<br />
                        No<br /><br /><br />
                        Slow Motion<br />
                        240fps @HD
                    </div>
                    <div className="text-base">
                        Rear Camera - F Number (Multiple)<br />
                        F1.8 , F2.2 , F2.4 , F2.4<br /><br /><br />
                        Rear Camera - OIS<br />
                        Yes<br /><br /><br />
                        Front Camera - Resolution<br />
                        32.0 MP<br /><br /><br />
                        Front Camera - Auto Focus<br />
                        No<br /><br /><br />
                        Rear Camera - Flash<br />
                        Yes<br /><br /><br />
                        Video Recording Resolution<br />
                        UHD 4K (3840 x 2160)@30fps
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-6 border-b border-slate-600 pt-10 pb-10">
                    <div className=" font-serif text-2xl font-bold">Memory</div>
                     <div className="text-base">RAM_Size (GB)<br />
                            8<br /><br /><br />
                            Available Memory (GB)*<br />
                            101.0
                    </div>
                    <div className="text-base">
                        ROM Size (GB)<br />
                        128<br /><br /><br />
                        External Memory Support<br />
                        MicroSD (Up to 1TB)
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-6 border-b border-slate-600 pt-10 pb-10">
                    <div className=" font-serif text-2xl font-bold">Network/Bearer</div>
                    <div className="text-base">
                        Number of SIM<br />
                        Dual-SIM<br /><br /><br />
                        SIM Slot Type<br />
                        SIM 1 + Hybrid (SIM or MicroSD)<br /><br /><br />
                        2G GSM<br />
                        GSM850, GSM900, DCS1800, PCS1900<br /><br /><br />
                        4G FDD LTE<br />
                        B1(2100), B2(1900), B3(1800), B4(AWS), B5(850),<br /> B7(2600), B8(900), B12(700), B13(700), B17(700),<br /> B20(800), B26(850), B28(700), B66(AWS-3)<br /><br /><br />
                        5G* FDD Sub6<br />
                        N1(2100), N3(1800), N5(850), N7(2600), N8(900),<br /> N28(700), N66(AWS-3)

                    </div>
                    <div className="text-base">
                        SIM size<br />
                        Nano-SIM (4FF)<br /><br /><br />
                        Infra<br />
                        2G GSM, 3G WCDMA, 4G LTE FDD, 4G LTE TDD, 5G Sub6<br /> FDD, 5G Sub6 TDD<br /><br /><br />
                        3G UMTS<br />
                        B1(2100), B2(1900), B4(AWS), B5(850), B8(900)<br /><br /><br />
                        4G TDD LTE<br />
                        B38(2600), B40(2300), B41(2500)<br /><br /><br />
                        5G* TDD Sub6<br />
                        N40(2300), N41(2500), N78(3500)
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-6 border-b border-slate-600 pt-10 pb-10">
                    <div className=" font-serif text-2xl font-bold">Connectivity</div>
                    <div className="text-base">
                        USB Interface<br />
                        USB Type-C<br /><br /><br />
                        Location Technology<br />
                        GPS, Glonass, Beidou, Galileo, QZSS<br /><br /><br />
                        MHL<br />
                        No<br /><br /><br />
                        Wi-Fi Direct<br />
                        Yes<br /><br /><br />
                        NFC<br />
                        Yes
                    </div>
                    <div className="text-base">
                        USB Version<br />
                        USB 2.0<br /><br /><br />
                        Earjack<br />
                        USB Type-C<br /><br /><br />
                        Wi-Fi<br />
                        802.11 a/b/g/n/ac 2.4G+5GHz, VHT80<br /><br /><br />
                        Bluetooth Version<br />
                        Bluetooth v5.1
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-6 border-b border-slate-600 pt-10 pb-10">
                    <div className=" font-serif text-2xl font-bold">OS</div>
                    <div className="text-base">Android</div>
                    
                </div>

                <div className="grid grid-cols-3 gap-6 border-b border-slate-600 pt-10 pb-10">
                    <div className=" font-serif text-2xl font-bold">General Information</div>
                    <div className="text-base">
                    Form Factor<br />Touchscreen Bar
                    </div>
                    
                </div>

                <div className="grid grid-cols-3 gap-6 border-b border-slate-600 pt-10 pb-10">
                    <div className=" font-serif text-2xl font-bold">Sensors</div>
                    <div className="text-base">
                    Accelerometer, Fingerprint Sensor, Gyro Sensor,<br /> Geomagnetic Sensor, Hall Sensor, RGB Light Sensor,<br /> Virtual Proximity Sensing
                    </div>
                    
                </div>

                <div className="grid grid-cols-3 gap-6 border-b border-slate-600 pt-10 pb-10">
                    <div className=" font-serif text-2xl font-bold">Physical specification</div>
                    <div className="text-base">
                    Dimension (HxWxD, mm)<br />159.6 x 74.8 x 8.1
                    </div>
                    <div className="text-base">Weight (g)<br />189</div>
                </div>

                <div className="grid grid-cols-3 gap-6 border-b border-slate-600 pt-10 pb-10">
                    <div className=" font-serif text-2xl font-bold">Battery</div>
                    <div className="text-base">
                        Internet Usage Time(LTE) (Hours)<br />
                        Up to 16<br /><br /><br />
                        Video Playback Time (Hours, Wireless)<br />
                        Up to 18<br /><br /><br />
                        Removable<br />
                        No<br /><br /><br />
                        Talk Time (4G LTE) (Hours)<br />
                        Up to 42
                    </div>
                    <div className="text-base">
                        Internet Usage Time(Wi-Fi) (Hours)<br />
                        Up to 18<br /><br /><br />
                        Battery Capacity (mAh, Typical)<br />
                        5000<br /><br /><br />
                        Audio Playback Time (Hours, Wireless)<br />
                        Up to 60

                    </div>
                </div>

                <div className="grid grid-cols-3 gap-6 border-b border-slate-600 pt-10 pb-10">
                    <div className=" font-serif text-2xl font-bold">Audio and Video</div>
                    <div className="text-base">
                        Stereo Support<br />
                        Yes<br /><br /><br />
                        Video Playing Resolution<br />
                        UHD 4K (3840 x 2160)@30fps
                    </div>
                    <div className="text-base">
                        Video Playing Format<br />
                        MP4, M4V, 3GP, 3G2, AVI, FLV, MKV, WEBM<br /><br /><br />
                        Audio Playing Format<br />
                        MP3, M4A, 3GA, AAC, OGG, OGA, WAV, AMR, AWB, FLAC,<br /> MID, MIDI, XMF, MXMF, IMY, RTTTL, RTX, OTA
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-6 border-b border-slate-600 pt-10 pb-10">
                    <div className=" font-serif text-2xl font-bold">Services and Applications</div>
                    <div className="text-base">
                        Gear Support <br />
                        Galaxy Buds Pro, Galaxy Buds Live, Galaxy Buds+,<br />
                        Galaxy Buds2, Galaxy Buds, Galaxy Fit2, Galaxy Fit e,<br />
                        Galaxy Fit, Galaxy Watch4, Galaxy Watch3, Galaxy<br />
                        Watch, Galaxy Watch Active2, Galaxy Watch Active, Gear<br />
                        Fit2 Pro, Gear Fit2, Gear Sport, Gear S3, Gear S2, Gear<br />
                        IconX (2018)<br /><br /><br />
                        Mobile TV<br />
                        No
                    </div>
                    <div className="text-base">Samsung DeX Support<br />No</div>
                </div>

                <div className="grid grid-cols-3 gap-6 border-b border-slate-600 pt-10 pb-10">
                    <div className=" font-serif text-2xl font-bold">Manufacturer’s Information</div>
                    <div className="text-base">
                    Manufactured by<br />
                    Samsung India Electronics Pvt. Ltd. having its<br />
                    Registered Office at: 6th Floor, DLF Centre, Sansad<br />
                    Marg, New Delhi-110001<br /><br /><br />
                    Contact us<br />
                    For All Product Related Complaints/assistance, please<br />
                    contact Manager, Customer Care Samsung India<br />
                    Electronics Pvt. Ltd., 6th Floor, DLF Centre, Sansad<br />
                    Marg, New Delhi - 110001 Email us at:<br />
                    support.india@samsung.com Tel (Toll Free): 1800 40<br />
                    7267864 (1800 40 SAMSUNG)
                    </div>
                    <div className="text-base">
                        Country of Origin<br />
                        India<br /><br /><br /><br /><br />
                        Launch date<br />
                        March 17th, 2022
                    </div>
                </div>
                
            </div>}
            <div className="flex justify-center pt-28">
            <button type="button" onClick={()=>setshow(!show)} className="inline-block px-6 py-2 border-2 border-gray-800 text-gray-800 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:ring-0 focus:outline-none transition duration-150 ease-in-out">
            {show === true ? 'Hide all specs' : 'view more'}
            </button>
            </div>
            </div>
            </>
    );
}
export default Specs;