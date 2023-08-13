import styles from "../style";
import { aim, discount, robot } from "@/public";
import GetStarted from "./GetStarted";
import Image from "next/image";

const Hero = () => {
  return (
    <section id="home" className={`flex flex-col ${styles.paddingY}`}>
      <div className={`${styles.flexStart} flex-col xl:px-0`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <Image src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
Courses for financial freedom
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
          The Future of Creativity <br className="sm:block hidden" />{" "}
            <span className="text-gradient"> and Marketing Excellence!</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>
        <p className={`${styles.paragraph} max-w-[40em] mt-5`}>
        Are you ready to unlock the true potential of digital marketing and harness the power of AI-driven video creation? Our cutting-edge courses are your gateway to a world where innovation meets creativity, where data-driven strategies blend seamlessly with captivating visual content
        </p>
      </div>

      <div className={`flex ${styles.flexCenter} md:my-0 my-10 w-full relative`}>
        <Image src={aim} alt="billing" className="w-[100%] ml-[30%] h-[100%] relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
