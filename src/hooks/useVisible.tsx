import globalContext from './globalContext';
import { useEffect, MutableRefObject, useContext } from 'react';

export type NavBarSections =
  | 'home'
  | 'about'
  | 'projects'
  | 'experience'
  | 'contact';

export default function useVisible({
  reference,
  navBarSection,
}: {
  reference: MutableRefObject<HTMLElement | null>;
  navBarSection: NavBarSections;
}) {
  const { changeNavBarCurrentSection } = useContext(globalContext);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          changeNavBarCurrentSection(navBarSection);
        }
      },
      {
        root: null, // viewport
        rootMargin: '0px', // no margin
        threshold: 0.5, // 50% of target visible
      }
    );

    const htmlElement = reference.current;

    if (htmlElement) {
      observer.observe(htmlElement);
    }

    // Clean up the observer
    return () => {
      if (htmlElement) {
        observer.unobserve(htmlElement);
      }
    };
  }, [reference, navBarSection, changeNavBarCurrentSection]);
}
