import styles from "./CreditCard.module.scss";
import { useEffect, useRef} from "react";
import gsap from "gsap";
import useResize from "../../hooks/useResize";


const CreditCard = () => {

  const frontCardRef = useRef<HTMLDivElement>(null);
  const backCardRef = useRef<HTMLDivElement>(null);

  const size = useResize();

  useEffect(() => {

    if (size > 500) {
      gsap.fromTo(frontCardRef.current,
        { opacity: 0, y: -150 }, 
        { opacity: 1, y: 0, duration: 0.6 }
      ) 
      gsap.fromTo(backCardRef.current,
        { opacity: 0, y: -150 }, 
        { opacity: 1, y: 0, duration: 0.6, delay: 0.3 }
      )
    } 
    else {
      gsap.fromTo(frontCardRef.current,
        { opacity: 0, y: -150 }, 
        { opacity: 1, y: 0, duration: 0.6, delay: 0.2 }
      ) 
      gsap.fromTo(backCardRef.current,
        { opacity: 0, y: -150 }, 
        { opacity: 1, y: 0, duration: 0.6 }
      )
    }
  }, [])


  return (
    <div className={styles.wrapper}>
      <div className={styles.back_card_container} ref={backCardRef}></div>

      <div className={styles.front_card_container} ref={frontCardRef}>
        <div className={styles.card_header}></div>

        <div className={styles.card_middle}>
          <p>0000</p>
          <p>0000</p>
          <p>0000</p>
          <p>0000</p>
        </div>

        <div className={styles.card_footer}>
          <p>JANE APPLESEED</p> <p>00/00</p>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
