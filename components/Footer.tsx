import React from "react";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <div className="bg-Elred-500 pt-12 flex flex-row justify-center content-center text-white">
      <div>
        <Image
          src="/logo-footer.png"
          width={78}
          height={78}
          alt="Hero"
          className="object-scale-down"
        ></Image>
        <div className="flex justify-start">
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>Pricing</li>
            <li>Reviews</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <div className="py-20 ml-7">
        <p className="text-xs">
          BookerPlanner: Simplify booking,
          <br />
          scheduling and website developmnet.
          <br />
          Elevate your online presence with us.
        </p>
        <div className="grid grid-cols-5 gap-0.5 pt-4">
          <Link href="/">
            <div className="hover:cursor-pointer flex justify-center items-center">
              <Image
                src="/twitter-ic.png"
                alt="clickable image"
                width={20}
                height={20}
              />
            </div>
          </Link>
          <Link href="/">
            <div className="hover:cursor-pointer flex justify-center items-center">
              <Image
                src="/whatsup-ic.png"
                alt="clickable image"
                width={20}
                height={20}
              />
            </div>
          </Link>
          <Link href="/">
            <div className="hover:cursor-pointer flex justify-center items-center">
              <Image
                src="/facebook-ic.png"
                alt="clickable image"
                width={20}
                height={20}
              />
            </div>
          </Link>
          <Link href="/">
            <div className="hover:cursor-pointer flex justify-center items-center">
              <Image
                src="/instagram-ic.png"
                alt="clickable image"
                width={20}
                height={20}
              />
            </div>
          </Link>
          <Link href="/">
            <div className="hover:cursor-pointer flex justify-center items-center">
              <Image
                src="/youtube-ic.png"
                alt="clickable image"
                width={20}
                height={20}
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
