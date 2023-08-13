import { features2 } from "@/constants";
import Image from "next/image";
import styles, { layout } from "../style";
import Button from "./Button";
import Button3 from "./Button3";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row py-6 sm:p-6 rounded-[20px] ${index !== features2.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <Image src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business2 = () =>  (
  <section id="features" className={`${layout.section} pb-24`}>
    <div className={`${layout.sectionInfo}`}>
      <h2 className={`${styles.heading2}`}>
      AI Video Creation: <br className="sm:block hidden" />  Igniting Imagination with Technology
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Step into a world where artificial intelligence becomes your creative ally. Our AI Video creation courses opens the door to AI-powered video creation, a revolutionary concept that merges technology with artistry. Prepare to embark on a journey of:
      
            </p>

      <Button3 styles={`mt-10`} />
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features2.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business2;
