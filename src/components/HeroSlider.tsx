import { useEffect, useMemo, useState } from 'react';

type HeroVideoSlide = {
  id: string;
  video: string;
  title: string;
  subtitle: string;
  actionPrimary: string;
  actionSecondary: string;
};

const heroSlides: HeroVideoSlide[] = [
  {
    id: 'hero-1',
    video: '/video/hero-part-1.mp4',
    title: 'Redefining how America builds',
    subtitle: 'Proud to be America’s contractor',
    actionPrimary: 'ABOUT',
    actionSecondary: 'THE SUFFOLK SYSTEM',
  },
  {
    id: 'hero-2',
    video: '/video/hero-part-2.mp4',
    title: 'Our Suffolk System integrates the entire building lifecycle into a seamless platform.',
    subtitle: 'Built to perform at every phase',
    actionPrimary: 'PROJECTS',
    actionSecondary: 'NATIONAL LOCATIONS',
  },
  {
    id: 'hero-3',
    video: '/video/hero-part-3.mp4',
    title: 'Teams aligned around execution, safety, and certainty.',
    subtitle: 'From strategy to closeout',
    actionPrimary: 'SECTORS',
    actionSecondary: 'CAREERS',
  },
];

const clamp = (value: number, min: number, max: number): number => {
  if (value < min) {
    return min;
  }

  if (value > max) {
    return max;
  }

  return value;
};

export default function HeroSlider() {
  const [scrollY, setScrollY] = useState<number>(0);
  const [sectionTop, setSectionTop] = useState<number>(0);
  const [viewportHeight, setViewportHeight] = useState<number>(0);

  useEffect(() => {
    const handleScroll = (): void => {
      setScrollY(window.scrollY);
    };

    const handleResize = (): void => {
      setViewportHeight(window.innerHeight);
      const section = document.getElementById('hero-scroll-section');
      if (!section) {
        return;
      }
      const topOffset = window.scrollY + section.getBoundingClientRect().top;
      setSectionTop(topOffset);
    };

    handleResize();
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const progressData = useMemo(() => {
    const safeViewportHeight = viewportHeight > 0 ? viewportHeight : 1;
    const relativeScroll = scrollY - sectionTop;
    const rawSegment = relativeScroll / safeViewportHeight;
    const activeIndex = clamp(Math.floor(rawSegment), 0, heroSlides.length - 1);
    const segmentProgress = clamp(rawSegment - activeIndex, 0, 1);

    return { activeIndex, segmentProgress };
  }, [scrollY, sectionTop, viewportHeight]);

  return (
    <section
      id="hero-scroll-section"
      className="relative w-full"
      style={{ height: `${heroSlides.length * 100}vh` }}
    >
      <div className="sticky top-[108px] h-[calc(100vh-108px)] overflow-hidden">
        {heroSlides.map((slide, index) => {
          const isPast = index < progressData.activeIndex;
          const isCurrent = index === progressData.activeIndex;
          const isNext = index === progressData.activeIndex + 1;

          let translateY = 100;
          if (isPast || isCurrent) {
            translateY = 0;
          } else if (isNext) {
            translateY = (1 - progressData.segmentProgress) * 100;
          }

          return (
            <div
              key={slide.id}
              className="absolute inset-0"
              style={{
                transform: `translate3d(0, ${translateY}%, 0)`,
                transition: 'transform 120ms linear',
                zIndex: index + 1,
              }}
            >
              <video
                className="h-full w-full object-cover"
                src={slide.video}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />
              <div className="absolute inset-0 bg-black/45" />
            </div>
          );
        })}

        <div className="absolute left-12 right-12 bottom-12 z-20 text-white">
          <h1 className="max-w-4xl text-4xl md:text-6xl font-semibold leading-tight">
            {heroSlides[progressData.activeIndex].title}
          </h1>
          <p className="mt-5 text-xs md:text-sm uppercase tracking-[0.2em] text-white/90">
            {heroSlides[progressData.activeIndex].subtitle}
          </p>
          <div className="mt-8 flex items-center gap-7 text-xs md:text-sm font-semibold uppercase tracking-wide">
            <button className="hover:text-yellow-300 transition-colors duration-200">
              {heroSlides[progressData.activeIndex].actionPrimary} <span aria-hidden>→</span>
            </button>
            <button className="hover:text-yellow-300 transition-colors duration-200">
              {heroSlides[progressData.activeIndex].actionSecondary} <span aria-hidden>→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
