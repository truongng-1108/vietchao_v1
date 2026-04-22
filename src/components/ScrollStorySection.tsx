import { useEffect, useMemo, useState } from 'react';

type StoryItem = {
  id: string;
  label: string;
  title: string;
  description: string;
  backgroundImage: string;
};

const storyItems: StoryItem[] = [
  {
    id: 'planning',
    label: 'Planning',
    title: 'Lập kế hoạch tổng thể từ sớm để tối ưu chi phí và tiến độ.',
    description: 'Chuẩn hóa phạm vi, dự báo rủi ro và đồng bộ nguồn lực ngay từ giai đoạn tiền dự án.',
    backgroundImage:
      'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80',
  },
  {
    id: 'engineering',
    label: 'Engineering',
    title: 'Kết nối thiết kế và thi công trong cùng một luồng triển khai.',
    description: 'Tối ưu phương án kỹ thuật theo điều kiện thực tế giúp công trình vận hành mượt xuyên suốt.',
    backgroundImage:
      'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80',
  },
  {
    id: 'execution',
    label: 'Execution',
    title: 'Thi công đồng bộ với trọng tâm an toàn, chất lượng và hiệu suất.',
    description: 'Điều phối đội ngũ theo nhịp thống nhất để giữ vững tiến độ ở mọi giai đoạn quan trọng.',
    backgroundImage:
      'https://images.pexels.com/photos/159358/construction-site-build-construction-work-159358.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80',
  },
  {
    id: 'delivery',
    label: 'Delivery',
    title: 'Bàn giao đúng cam kết và hỗ trợ xuyên suốt vòng đời công trình.',
    description: 'Đảm bảo trải nghiệm vận hành bền vững bằng quy trình kiểm soát và hậu mãi liên tục.',
    backgroundImage:
      'https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1920&q=80',
  },
];

const STEP_SCROLL_RATIO = 0.65;
const EXIT_HOLD_RATIO = 0.55;

const clamp = (value: number, min: number, max: number): number => {
  if (value < min) {
    return min;
  }

  if (value > max) {
    return max;
  }

  return value;
};

export default function ScrollStorySection() {
  const [scrollY, setScrollY] = useState<number>(0);
  const [sectionTop, setSectionTop] = useState<number>(0);
  const [viewportHeight, setViewportHeight] = useState<number>(0);
  const [contentVisible, setContentVisible] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = (): void => {
      setScrollY(window.scrollY);
    };

    const handleResize = (): void => {
      setViewportHeight(window.innerHeight);
      const section = document.getElementById('story-scroll-section');
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
    const rawSegment = relativeScroll / (safeViewportHeight * STEP_SCROLL_RATIO);
    const activeIndex = clamp(Math.floor(rawSegment), 0, storyItems.length - 1);

    return { activeIndex };
  }, [scrollY, sectionTop, viewportHeight]);

  useEffect(() => {
    setContentVisible(false);
    const timeoutId = globalThis.setTimeout(() => {
      setContentVisible(true);
    }, 90);

    return () => {
      globalThis.clearTimeout(timeoutId);
    };
  }, [progressData.activeIndex]);

  return (
    <section
      id="story-scroll-section"
      className="relative w-full"
      style={{ height: `${(storyItems.length * STEP_SCROLL_RATIO + EXIT_HOLD_RATIO) * 100}vh` }}
    >
      <div className="sticky top-[108px] h-[calc(100vh-108px)] overflow-hidden">
        {storyItems.map((item, index) => {
          const isActive = index === progressData.activeIndex;

          return (
            <div
              key={item.id}
              className={`absolute inset-0 transition-opacity duration-300 ease-out ${isActive ? 'opacity-100' : 'opacity-0'}`}
              style={{ zIndex: index + 1 }}
            >
              <img
                src={item.backgroundImage}
                alt={item.label}
                className={`h-full w-full object-cover transition-transform duration-500 ease-out ${isActive ? 'scale-100' : 'scale-[1.02]'}`}
              />
              <div className="absolute inset-0 bg-[#0a143f]/60" />
            </div>
          );
        })}

        <div className="absolute inset-0 z-20 grid grid-cols-1 md:grid-cols-12 gap-10 px-8 md:px-12 py-10 md:py-12 text-white">
          <div className="md:col-span-4 flex flex-col justify-start md:justify-center gap-6 md:gap-7">
            {storyItems.map((item, index) => {
              const isActive = index === progressData.activeIndex;
              return (
                <div key={item.id} className="w-full">
                  <p className={`text-sm md:text-base uppercase tracking-[0.18em] transition-colors duration-300 ${isActive ? 'text-white' : 'text-white/65'}`}>
                    {item.label}
                  </p>
                  <div className="mt-2 h-[2px] w-full bg-white/25 overflow-hidden">
                    <div
                      className="h-full bg-yellow-400 transition-all duration-500 ease-out"
                      style={{ width: isActive ? '100%' : '0%' }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="md:col-span-8 flex items-end md:items-center justify-start md:justify-end pb-8 md:pb-0">
            <div
              className={`max-w-3xl text-left md:text-right transition-all duration-500 ease-out ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
                {storyItems[progressData.activeIndex].title}
              </h2>
              <p className="mt-5 text-sm md:text-lg text-white/90 leading-relaxed">
                {storyItems[progressData.activeIndex].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
