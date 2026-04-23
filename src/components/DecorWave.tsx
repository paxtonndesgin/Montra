"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import upPart from "@/assets/decor/up_part.svg";
import downPart from "@/assets/decor/down_part.svg";
import styles from "@/assets/style/scss/components/DecorWave.module.scss";

const COUNT = 15;

export default function DecorWave() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); 
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.decorWaveWrapper} ref={containerRef}>
      <div className={`${styles.waveRow} ${isVisible ? styles.visible : ""}`}>
        {Array.from({ length: COUNT }).map((_, i) => (
          <div key={i} className={styles.waveUnit}>
            <div className={styles.upPartWrap}>
              <Image src={upPart} alt="" fill className={styles.partImg} />
            </div>
            <div className={styles.downPartWrap}>
              <Image src={downPart} alt="" fill className={styles.partImg} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
