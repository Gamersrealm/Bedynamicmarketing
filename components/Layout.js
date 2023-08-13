import styles from "@/style";
import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function RootLayout({children}) {
  return (

    <div className="bg-primary w-full overflow-hidden">
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
            <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>


        {children}
        <Footer />
      
      </div>
      </div>
      </div>

  );
}