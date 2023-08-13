import styles from "../style";
import { logo } from "@/public";
import { footerLinks, socialMedia } from "../constants";
import Image from "next/image";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} sm:flex-row flex-col mb-8 w-full`}>
      <div className="flex-[1] flex flex-col justify-start mr-10">
        <Image
          src={logo}
          alt="hoobank"
          className="w-[150px] sm:w-[266px] h-[72.14px] object-contain"
        />
        <p className={`${styles.paragraph} !text-[.95rem] sm:text-base mt-4 max-w-[30em]`}>
 Breaching the gap between the rich and the poor.
        </p>
      </div>


    </div>

    <div className="w-full flex justify-start items-center sm:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center sm:text-left text-[16px] sm:text-[18px] leading-[27px] text-dimWhite">
        Copyright Ⓒ 2021 Bedynamicmarketing. All Rights Reserved.
      </p>


    </div>
  </section>
);

export default Footer;
