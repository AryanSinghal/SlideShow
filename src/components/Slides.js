import React, { useState } from 'react';

function Slides({ slides }) {
  // const [currentSlide, setCurrentSlide] = useState(slides[0]);
  // const [slideNo, setSlideNo] = useState(0);
  // const [first, setFirst] = useState(true);
  // const [last, setLast] = useState(!!(slides.length === 1));

  const initialState = {
    currentSlide: slides[0],
    slideNo: 0,
    first: true,
    last: !!(slides.length === 1)
  };
  const [slide, setSlide] = useState(initialState);

  const handleSlideChange = (action) => {
    const { slideNo } = slide;
    if (action === 'next') {
      (slideNo + 1 === slides.length - 1)
        ? setSlide({
          currentSlide: slides[slideNo + 1],
          slideNo: slideNo + 1,
          first: false,
          last: true
        })
        : setSlide({
          currentSlide: slides[slideNo + 1],
          slideNo: slideNo + 1,
          first: false,
          last: false
        });
    }
    if (action === 'prev') {
      (slideNo === 1)
        ? setSlide({
          currentSlide: slides[slideNo - 1],
          slideNo: slideNo - 1,
          first: true,
          last: false
        })
        : setSlide({
          currentSlide: slides[slideNo - 1],
          slideNo: slideNo - 1,
          first: false,
          last: false
        });
    }
    if (action === 'refresh') {
      setSlide(initialState);
    }
  }

  return (
    <div>
      <div id="navigation" className="text-center">
        <button data-testid="button-restart" className="small outlined" onClick={() => handleSlideChange('refresh')} disabled={slide.first} >Restart</button>
        <button data-testid="button-prev" className="small" onClick={() => handleSlideChange('prev')} disabled={slide.first} >Prev</button>
        <button data-testid="button-next" className="small" onClick={() => handleSlideChange('next')} disabled={slide.last} >Next</button>
      </div>
      <div id="slide" className="card text-center">
        <h1 data-testid="title">{slide.currentSlide && slide.currentSlide.title}</h1>
        <p data-testid="text">{slide.currentSlide && slide.currentSlide.text}</p>
      </div>
    </div>
  );

}

export default Slides;
