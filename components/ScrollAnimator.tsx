'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollAnimator() {
  const pathname = usePathname();

  useEffect(() => {
    let observer: IntersectionObserver;

    // Small delay to ensure the new page's DOM elements are fully rendered
    const timeoutId = setTimeout(() => {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px',
        }
      );

      const animatedElements = document.querySelectorAll(
        '.fade-in-up, .fade-in-left, .fade-in-right, .scale-in, .stagger-children'
      );

      animatedElements.forEach((el) => observer.observe(el));
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      if (observer) {
        observer.disconnect();
      }
    };
  }, [pathname]);

  return null;
}
