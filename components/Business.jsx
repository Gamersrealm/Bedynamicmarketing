import { features } from "@/constants";
import { ai, course1, original, sales } from "@/public";
import Image from "next/image";
import Link from "next/link";
import styles, { layout } from "../style";
import Button from "./Button";
import Button2 from "./Button2";

const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row py-6 sm:p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
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

const Business = () =>  (
  <> 


  <div id="courses" className="flex flex-col justify-center w-full items-center pb-14">

<h2 className={`${styles.heading2} xs:text-[48px] pb-6 font-poppins text-[40px] text-center`}>
Best Selling Courses
      </h2>

      <div className="flex flex-col w-full items-center">

   <div className="w-full flex-col sm:flex-row sm:flex-wrap flex justify-center space-y-8 sm:space-y-0 sm:space-x-6 items-center">

   <Link href="/whatsapp-success-course" className="w-full sm:w-[48%] md:w-[30%] pb-4 sm:h-[300px] font-poppins bg-[blue] bg-black-gradient overflow-hidden rounded-[10px] text-[#fff] transition hover:scale-[1.01] relative ease duration-300 hover:opacity-90">
   
    <Image src={course1} className="w-full h-[150px] object-cover"/>
 <Image src={original} className="absolute left-3 top-3"/>

<div className="px-3 pt-3 flex flex-col space-y-2">
<h3 className="font-light text-[.80rem]">
  Shamsudeen Usman
</h3>
 
<h2 className="font-semibold mt-1 text-[.90rem]">

WhatsApp Success: Building a Profitable Audience with Retentive Sales
 </h2>

<button className="bg-gray-600 mt-1 py-[8px] px-4 w-fit text-[.75rem] self-end mr-2 rounded-[6px]">
  Buy Course
</button>
</div>
   
    </Link>


   <Link href="/ai-video-course" className="w-full sm:w-[48%] md:w-[30%] pb-4 sm:h-[300px] font-poppins bg-[blue] bg-black-gradient overflow-hidden rounded-[10px] text-[#fff] transition hover:scale-[1.01] relative ease duration-300 hover:opacity-90">
   
    <Image src={ai} className="w-full h-[150px] object-cover"/>
 <Image src={original} className="absolute left-3 top-3"/>

<div className="px-3 pt-3 flex flex-col space-y-2">
<h3 className="font-light text-[.80rem]">
Samuel Lagos
</h3>
 
<h2 className="font-semibold mt-1 text-[.90rem]">

Generative AI: Transforming Text to Stunning Realistic Videos
 </h2>

<button className="bg-gray-600 py-[8px] mt-1 px-4 w-fit text-[.75rem] self-end mr-2 rounded-[6px]">
  Buy Course
</button>
</div>
   
    </Link>


   <Link href="/whatsapp-success-course" className="w-full sm:w-[48%] md:w-[30%] sm:!mt-8 md:mt-0 pb-4 sm:h-[300px] font-poppins bg-[blue] bg-black-gradient overflow-hidden rounded-[10px] text-[#fff] transition hover:scale-[1.01] relative ease duration-300 hover:opacity-90">
   
    <Image src={sales} className="w-full h-[150px] object-cover"/>
 <Image src={original} className="absolute left-3 top-3"/>

<div className="px-3 pt-3 flex flex-col space-y-2">
<h3 className="font-light text-[.80rem]">
 Lucky Michael
</h3>
 
<h2 className="font-semibold mt-1 text-[.90rem]">

Sell Like Crazy: The New Social Media Engagement BluePrint
 </h2>

<button className="bg-gray-600 py-[8px] mt-1 px-4 w-fit text-[.75rem] self-end mr-2 rounded-[6px]">
Comming Soon...
</button>
</div>
   
    </Link>

   </div>
   </div>


  </div>
  
   <section id="features" className={`${layout.section} pb-24`}>
    <div className={`${layout.sectionInfo}`}>
      <h2 className={`${styles.heading2} xs:text-[48px] text-[40px]`}>
      Digital Marketing: <br className="sm:block hidden" />  Where Vision Meets Strategy
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      In a digital age that's constantly evolving, staying ahead of the curve is non-negotiable. Our landing page is your launchpad into the realm of digital marketing, where every click, impression, and engagement counts. Unleash your brand's potential as we guide you through the intricacies of:
      </p>

      <Button2 styles={`mt-10`} />
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
  </>
);

export default Business;
