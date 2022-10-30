import { useState, useEffect } from "react";

type SizeTypes = {
  width: number;
  height: number;
}

export default function useResize() {
  
  const [size, setSize] = useState<SizeTypes>({
     width: window.innerWidth,
     height: window.innerHeight
  })

  useEffect(() => {
    const handleResize = () => setSize({
      width: window.innerWidth, 
      height: window.innerHeight
    });

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [size]);

  return size;
}