import React from "react";

const Footer=()=>{
    return(
       <div className="w-full mt-24 bg-slate-900 text-gray-300 py-y px-2">
            <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8">
                <div>
                    <h6 className="font-bold uppercase pt-2">Solutions</h6>
                    <ul>
                        <li className="py-1">Analytics</li>
                        <li className="py-1">Commerce</li>
                        <li className="py-1">Data</li>
                        <li className="py-1">Cloud</li>
                    </ul>
                </div>
                <div>
                    <h6 className="font-bold uppercase pt-2">Support</h6>
                    <ul>
                        <li className="py-1">Documentation</li>
                        <li className="py-1">Guides</li>
                    </ul>
                </div>
                <div>
                    <h6 className="font-bold uppercase pt-2">Company</h6>
                    <ul>
                        <li className="py-1">About</li>
                        <li className="py-1">Blog</li>
                        <li className="py-1">Jobs</li>
                        <li className="py-1">Partners</li>
                    </ul>
                </div>
                <div>
                    <h6 className="font-bold uppercase pt-2">Legal</h6>
                    <ul>
                        <li className="py-1">Claims</li>
                        <li className="py-1">Privacy</li>
                        <li className="py-1">Terms</li>
                        <li className="py-1">Polices</li>
                        <li className="py-1">Conditions</li>
                    </ul>
                </div>
                <div className="col-span-2 pt-8 md:pt-2">
                    <p className="font-bold uppercase">Lorem ipsum dolor sit amet.</p>
                    <p className="py-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    <form className="flex flex-col sm:flex-row">
                        <input className="w-full p-2 mr-4 rounded-md mb-4" type="email" />
                        <button className="p-2 mb-4">Subscribe</button>
                    </form>
                </div>
            </div>
            <div className="flex flex-col max-w-[1240px] px-2 py-4 items-center m-auto justify-between sm:flex-row text-center text-gray-500">
                <p className="py-4">2022. All rights reserved</p>
                <div className="flex justify-between sm:w-[300px] pt-4 text-2xl text-white">
                <a target="blank" href=""><ion-icon name="logo-medium"></ion-icon></a>
                <a target="blank" href="https://github.com/anilbulluk"><ion-icon name="logo-github"></ion-icon></a>
                <a target="blank" href="https://www.linkedin.com/in/anıl-yılmaz-bulluk-a97135215/"><ion-icon name="logo-linkedin"></ion-icon></a>
                <a target="blank" href="https://www.instagram.com/anilbulluk"><ion-icon name="logo-instagram"></ion-icon></a>
                </div>
            </div>
       </div> 
    )}

export default Footer;