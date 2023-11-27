import React from "react";
import { BsInstagram } from "react-icons/bs";
import { BsTiktok } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/images/honeymoons-lk-logo.webp";

const FooterHM = () => {
  return (
    <footer>
      <div className="max-w-[1280px] mx-auto w-full lg:mx-auto py-6 lg:py-8 px-4 sm:px-0">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="/" className="flex items-center">
              <Image
                src={logo}
                width={120}
                height={60}
                className="mr-auto"
                alt="logo"
              ></Image>
            </a>

            <p className="text-xs text-gray-500 pt-3 max-w-[30rem] ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              dolore officia dolores, at quibusdam, dignissimos eligendi aliquid
              voluptas libero commodi voluptas libero commodi magnam fugit culpa
              quod repudiandae modi dicta iste quas reprehenderit?
            </p>
            <div className="pt-4 flex gap-2 md:gap-6 items-center">
              <Link href="https://www.facebook.com/honeymoons.lk">
                <BsFacebook color="#888888" />
              </Link>
              <Link href="https://www.instagram.com/honeymoons.lk/">
                <BsInstagram color="#888888" />
              </Link>
              <Link href="https://www.tiktok.com/@honeymoons.lk">
                <BsTiktok color="#888888" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3 sm:mt-4 mt-12">
            <div>
              <ul className="text-gray-500 text-sm font-normal">
                <li className="mb-2">
                  <a href="scenary" className="hover:underline">
                    Scenery
                  </a>
                </li>
                <li className="mb-2">
                  <a href="/places" className="hover:underline">
                    Places to Stay
                  </a>
                </li>
                <li>
                  <a href="/offers" className="hover:underline">
                    Offers
                  </a>
                </li>
              </ul>
            </div>
            <div className="  sm:hidden"></div>
            <div className="sm:order-last">
              <ul className="text-gray-500 text-sm font-normal">
                <li className="mb-2">
                  <Link href="/terms" className="hover:underline">
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            <div className="">
              <ul className="text-gray-500 text-sm font-normal">
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    About Us
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="hover:underline">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center">
            © Lexro Leisureaway. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default FooterHM;
