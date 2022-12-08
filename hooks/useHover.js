import { useState, useEffect, useRef } from 'react';

export default function useHover() {
  const [hovered, setHovered] = useState(false);
  // creating a ref to which I can add event listeners
  const ref = useRef(null);

  function enter() {
    setHovered(true);
  }
  function leave() {
    setHovered(false);
  }

  useEffect(() => {
    // when this mounts, enter and leave are added to the ref

    // ref.current is mutable, so by the time the cleanup function runs, it may have been set to null. The solution is to capture any mutable values inside the effect:
    const instance = ref.current;
    instance.addEventListener('mouseenter', enter);
    instance.addEventListener('mouseleave', leave);

    return () => {
      instance.removeEventListener('mouseenter', enter);
      instance.removeEventListener('mouseleave', leave);
    };
  }, []);

  // returing hovered and ref (with functions added)
  return [hovered, ref];
}
