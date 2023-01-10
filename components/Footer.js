import Link from "next/link";
import React from "react";
Link;

function Footer() {
  return (
    <div className="text-center mt-5 mb-2">
      {new Date().getFullYear()} ©{" "}
      <Link href="https://instagram.com/raoankittt">
        <a className="text-orange-500 font-bold" target="_blank">
          therogersak
        </a>
      </Link>
    </div>
  );
}

export default Footer;
