import { card, happy, happy2 } from "@/public";
import Image from "next/image";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={`${layout.section} pb-24`}>
    <div className={`${layout.sectionInfo}`}>
      <h2 className={`${styles.heading2}`}>
      Get our courses and <br className="sm:block hidden" /> attain Financial freedom!
      </h2>
      <p className={`${styles.paragraph} max-w-[40em] mt-5`}>
      As you navigate through life seeking to make money and become financially stable, remember that you're on the precipice of transformative change. Join our community of forward-thinkers who understand that success is a journey paved with innovation and expertise.
      
       Whether you're a seasoned marketer or a curious novice, our digital marketing and AI video creation courses promise to empower you with the tools needed to excel in a rapidly evolving digital landscape.
   </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <Image src={happy2} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
