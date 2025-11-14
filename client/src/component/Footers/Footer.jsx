import React from "react";
import Logo from "../../assets/cakewhite.png";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaGlobe } from "react-icons/fa";

const Footer = () => {
    const PopularCategories = [
        { name: "Chocolates", link: "#" },
        { name: "Cakes", link: "#" },
        { name: "Cupcakes", link: "#" },
        { name: "Desserts", link: "#" },
        { name: "Birthday Cakes", link: "#" },
        { name: "Wedding Cakes", link: "#" },
        { name: "Gift Cakes", link: "#" },
    ];

    const UsefulLinks = [
        { name: "Home", link: "#" },
        { name: "About Us", link: "#" },
        { name: "Menu", link: "#" },
        { name: "Gallery", link: "#" },
        { name: "Blog", link: "#" },
        { name: "Contact", link: "#" },
        { name: "FAQ", link: "#" },
        { name: "Careers", link: "#" },
    ];

    const CustomerSupport = [
        { name: "Order Tracking", link: "#" },
        { name: "Returns & Refunds", link: "#" },
        { name: "Shipping Info", link: "#" },
        { name: "Terms & Conditions", link: "#" },
        { name: "Privacy Policy", link: "#" },
        { name: "Support Center", link: "#" },
        { name: "Live Chat", link: "#" },
        { name: "Feedback", link: "#" },
    ];

    const Branches = [
        {
            name: "Main Branch",
            address: "123 Cross Street, ABC, 00000",
            mapSrc:
                "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d15829.233342333007!2d80.69687727310792!3d7.319219795007446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwMTknMzAuMiJOIDgwwrA0MSc0NS4xIkU!5e0!3m2!1sen!2slk",
        },
        {
            name: "City Branch",
            address: "456 Market Street, XYZ, 11111",
            mapSrc:
                "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d15829.233342333007!2d80.69687727310792!3d7.319219795007446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwMTknMzAuMiJOIDgwwrA0MSc0NS4xIkU!5e0!3m2!1sen!2slk",
        },
        {
            name: "North Branch",
            address: "789 North Avenue, LMN, 22222",
            mapSrc:
                "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d15829.233342333007!2d80.69687727310792!3d7.319219795007446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwMTknMzAuMiJOIDgwwrA0MSc0NS4xIkU!5e0!3m2!1sen!2slk",
        },
        {
            name: "South Branch",
            address: "101 South Street, PQR, 33333",
            mapSrc:
                "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d15829.233342333007!2d80.69687727310792!3d7.319219795007446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwMTknMzAuMiJOIDgwwrA0MSc0NS4xIkU!5e0!3m2!1sen!2slk",
        },
        {
            name: "East Branch",
            address: "202 East Lane, STU, 44444",
            mapSrc:
                "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d15829.233342333007!2d80.69687727310792!3d7.319219795007446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwMTknMzAuMiJOIDgwwrA0MSc0NS4xIkU!5e0!3m2!1sen!2slk",
        },
        {
            name: "West Branch",
            address: "303 West Boulevard, VWX, 55555",
            mapSrc:
                "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d15829.233342333007!2d80.69687727310792!3d7.319219795007446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwMTknMzAuMiJOIDgwwrA0MSc0NS4xIkU!5e0!3m2!1sen!2slk",
        },
        {
            name: "Uptown Branch",
            address: "404 Uptown Road, YZA, 66666",
            mapSrc:
                "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d15829.233342333007!2d80.69687727310792!3d7.319219795007446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwMTknMzAuMiJOIDgwwrA0MSc0NS4xIkU!5e0!3m2!1sen!2slk",
        },
        {
            name: "Downtown Branch",
            address: "505 Downtown Street, BCD, 77777",
            mapSrc:
                "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d15829.233342333007!2d80.69687727310792!3d7.319219795007446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwMTknMzAuMiJOIDgwwrA0MSc0NS4xIkU!5e0!3m2!1sen!2slk",
        },
        {
            name: "Uptown East Branch",
            address: "606 Uptown East Avenue, EFG, 88888",
            mapSrc:
                "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d15829.233342333007!2d80.69687727310792!3d7.319219795007446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwMTknMzAuMiJOIDgwwrA0MSc0NS4xIkU!5e0!3m2!1sen!2slk",
        },
    ];


    return (
        <div className="bg-gradient-to-r from-pink-500 to-pink-700 text-white px-10 md:px-20 py-16">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
                {/* About Section */}
                <div>
                    <div className="flex items-center mb-4">
                        <img src={Logo} alt="Cake Shop Logo" className="w-12 h-12" />
                        <div className="ml-3">
                            <h1 className="text-2xl font-bold">Cake Shop</h1>
                            <p className="text-sm opacity-90">Your Sweet Delight Partner</p>
                        </div>
                    </div>

                    <div className="text-sm leading-relaxed">
                        <h2 className="font-semibold mb-2">Our Mission</h2>
                        <p>
                            To bring joy and sweetness to every occasion with freshly baked
                            cakes and desserts made with love.
                        </p>
                        <h2 className="font-semibold mt-3 mb-2">Our Vision</h2>
                        <p>
                            To become the most loved bakery brand recognized for quality,
                            creativity, and customer happiness.
                        </p>
                        <h2 className="font-semibold mt-3 mb-2">Our Values</h2>
                        <p>
                            Quality ingredients, exceptional service, and unforgettable taste
                            experiences.
                        </p>
                    </div>
                </div>

                {/* Popular Categories */}
                <div>
                    <h1 className="text-xl font-bold mb-3">Popular Categories</h1>
                    <ul>
                        {PopularCategories.map((item, index) => (
                            <li
                                key={index}
                                className="py-1 text-sm hover:ml-2 transition-all duration-300"
                            >
                                <a href={item.link}>{item.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Useful Links */}
                <div>
                    <h1 className="text-xl font-bold mb-3">Useful Links</h1>
                    <ul>
                        {UsefulLinks.map((item, index) => (
                            <li
                                key={index}
                                className="py-1 text-sm hover:ml-2 transition-all duration-300"
                            >
                                <a href={item.link}>{item.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Customer Support */}
                <div>
                    <h1 className="text-xl font-bold mb-3">Customer Support</h1>
                    <ul>
                        {CustomerSupport.map((item, index) => (
                            <li
                                key={index}
                                className="py-1 text-sm hover:ml-2 transition-all duration-300"
                            >
                                <a href={item.link}>{item.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Follow Us */}
                <div>
                    <h1 className="text-xl font-bold mb-3">Follow Us</h1>
                    <div className="flex space-x-4 text-2xl mt-2">
                        <a href="#" className="hover:text-gray-200 transition-colors">
                            <FaFacebookF />
                        </a>
                        <a href="#" className="hover:text-gray-200 transition-colors">
                            <FaInstagram />
                        </a>
                        <a href="#" className="hover:text-gray-200 transition-colors">
                            <FaTwitter />
                        </a>
                        <a href="#" className="hover:text-gray-200 transition-colors">
                            <FaLinkedinIn />
                        </a>
                        <a href="#" className="hover:text-gray-200 transition-colors">
                            <FaGlobe />
                        </a>
                    </div>
                </div>
            </div>

            {/* Branches */}
            <div className="mt-10">
                <h1 className="text-2xl font-bold mb-6">Our Branches</h1>
                <div className="grid md:grid-cols-5 gap-10">
                    {Branches.map((branch, index) => (
                        <div key={index} className="bg-pink-600 p-4 rounded-lg shadow-lg">
                            <h2 className="font-semibold">{branch.name}</h2>
                            <p className="text-sm mb-3">{branch.address}</p>
                            <div className="w-full aspect-video rounded overflow-hidden">
                                <iframe
                                    src={branch.mapSrc}
                                    width="100%"
                                    height="200"
                                    className="border-0 w-full h-full"
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title={branch.name}
                                ></iframe>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-8 border-t border-white pt-4 text-center">
                &copy; { new Date().getFullYear() } - The Cake Shop | All rights reserved | Developed and Engineered by <a href="https://blackalphalabs.com" target="_blank">Blackalphalabs</a>
            </div>
        </div>
    );
};

export default Footer;
