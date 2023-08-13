import Link from "next/link";
import React from "react";

const Button3 = ({ styles }) => (
    <Link href="/ai-video-course" className={`py-4 px-6 w-fit font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
     Buy Course

  </Link>
);

export default Button3;
