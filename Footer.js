import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa"; 

function Footer() {
	return (
		<>
			<div className="bg-gray-50 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20">
				<div className="p-5 ">
						<p className="text-gray-800 font-bold text-3xl pb-6">
							Movies<span className="text-blue-600">app</span>
						</p>
            <div className="flex gap-6 pb-5">
							<FaInstagram className="text-2xl cursor-pointer hover:text-yellow-600" />
							<FaTwitter className="text-2xl cursor-pointer hover:text-blue-600" />
							<FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600" />
							<FaYoutube className="text-2xl cursor-pointer hover:text-red-600" />
						</div>


			
				</div>
				<div className="p-5">
					<ul>
						<p className="text-gray-800 font-bold text-2xl pb-4">Help</p>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							About us
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Contact us
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							FAQs  
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Terms and conditions
						</li>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-gray-800 font-bold text-2xl pb-4">BOOKING</p>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Booking for Movies
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Booking for Streams
						</li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Booking for Events
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Pricing
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Booking details
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Tickets information
						</li>
					</ul>
				</div>
				<div className="p-5">
					<ul>
						<p className="text-gray-800 font-bold text-2xl pb-4">Support</p>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Contact
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Support Portals
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							List Of Charges
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Downloads & Resources
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
							Videos
						</li>
					</ul>
				</div>
			</div>
			<div className="flex flex-col justify-center items-center text-center  p-5 bg-gray-50">
				<h1 className=" text-gray-800 font-semibold">
					© copyrights by Moviesapp- All rights reserved | Build with ❤ by 
						Moviesapp

				</h1>
			</div>
		</>
	);
}

export default Footer;
