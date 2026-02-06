import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaX } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="p-12 bg-primary text-white">
      <div className="container grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-12 justify-between mx-auto">
        <div className="space-y-6">
          <Image
            src="/logo.png"
            width={200}
            height={100}
            alt="Aqqire logo"
            style={{ width: "auto", height: "auto" }}
          />
          <p className="text-xs">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
            natus officia nisi explicabo quae cum quos nemo eos asperiores!
            Sapiente mollitia officia hic obcaecati commodi.
          </p>
          <div className="flex gap-6 text-xl">
            <FaFacebook />
            <FaInstagram />
            <FaLinkedin />
            <FaX />
          </div>
        </div>

        <div className="space-y-6 col-span-3 ">
          <ul className="space-y-4 lg:grid grid-cols-3 ml-auto pt-4 justify-items-center">
            <li className="w-full">
              <Link href="/about">
                <p className="text-left">About Us</p>
              </Link>
            </li>
            <li className="w-full">
              <Link href="/contact">
                <p className="text-left">Contact Us</p>
              </Link>
            </li>
            <li className="w-full">
              <Link href="/terms">
                <p className="text-left">Terms of Use</p>
              </Link>
            </li>
            <li className="w-full">
              <Link href="/privacy">
                <p className="text-left">Privacy and Policy</p>
              </Link>
            </li>
            <li className="w-full">
              <Link href="/advertise">
                <p className="text-left">Advertise Your Products</p>
              </Link>
            </li>
            <li className="w-full">
              <Link href="/faq">
                <p className="text-left">FAQ</p>
              </Link>
            </li>
            <li className="w-full">
              <Link href="/pricing">
                <p className="text-left">Pricing</p>
              </Link>
            </li>
            <li className="w-full">
              <Link href="/post-property">
                <p className="text-left">Post a Property</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
