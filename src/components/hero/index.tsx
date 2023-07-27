import { useState, useEffect, useCallback, FC } from 'react';
import { initialBanners } from '../../data/data';
import './styles.scss';

const Hero: FC = () => {
  const [banners] = useState(initialBanners);
  const [activeSlide, setActiveSlide] = useState(0);
  const [autoSlideActive, setAutoSlideActive] = useState(true);

  const numBanners = banners.length;

  const goToSlide = useCallback((index: number) => {
    setActiveSlide(index);
    setAutoSlideActive(false);
  }, []);

  const goToNextSlide = useCallback(() => {
    setActiveSlide((prevIndex) => (prevIndex + 1) % numBanners);
  }, [numBanners]);

  const goToPrevSlide = useCallback(() => {
    setActiveSlide((prevIndex) => (prevIndex - 1 + numBanners) % numBanners);
  }, [numBanners]);

  useEffect(() => {
    let autoSlide: NodeJS.Timeout;

    if (autoSlideActive) {
      autoSlide = setInterval(goToNextSlide, 4500);
    }

    const autoSlideTimeout = setTimeout(() => {
      setAutoSlideActive(true);
    }, 5000);

    return () => {
      clearInterval(autoSlide);
      clearTimeout(autoSlideTimeout);
    };
  }, [activeSlide, autoSlideActive, goToNextSlide]);

  useEffect(() => {
    setActiveSlide(0);
  }, [banners]);

  return (
    <div className="hero">
      <div
        className="slider"
        style={{ transform: `translateX(-${activeSlide * 100}%)` }}
      >
        {banners.map((banner, index) => (
          <div
            key={banner}
            className={`slide ${index === activeSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url(${banner})` }}
          />
        ))}
      </div>
      <div className="arrows">
        <button className="arrow arrow-left" onClick={goToPrevSlide}>
          &lt;
        </button>
        <button className="arrow arrow-right" onClick={goToNextSlide}>
          &gt;
        </button>
      </div>
      <div className="bullets">
        {banners.map((banner, index) => (
          <button
            key={banner}
            className={`bullet ${index === activeSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;