import Link from "next/link";
import React from "react";

const Button = ({ styles }) => (
  <Link href="#courses" className={`py-4 px-6 w-fit font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
  Buy Courses

</Link>
);

export default Button;
