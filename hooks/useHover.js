import { useState, useEffect, useRef } from 'react';

export default function useHover() {
  const [hovered, setHovered] = useState(false);
  const hoverRef = useRef(null);

  function enter() {
    setHovered(true);
  }
  function leave() {
    setHovered(false);
  }

  useEffect(() => {
    const instance = hoverRef.current;
    instance.addEventListener('mouseenter', enter);
    instance.addEventListener('mouseleave', leave);

    return () => {
      instance.removeEventListener('mouseenter', enter);
      instance.removeEventListener('mouseleave', leave);
    };
  }, []);

  return [hovered, hoverRef];
}
