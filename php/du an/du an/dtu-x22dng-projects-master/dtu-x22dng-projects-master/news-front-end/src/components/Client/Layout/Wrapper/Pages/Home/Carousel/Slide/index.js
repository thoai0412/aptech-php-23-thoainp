import React from 'react';

const index = props => {
  const backgroundImage = [
    'linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6 ) ),',
    props.url
  ].join(' ');

  return (
    <div
      className={[
        'carousel-item Carousel__image Carousel__image--height',
        props.active ? 'active' : ''
      ].join(' ')}
      style={{
        backgroundImage: backgroundImage
      }}
    >
      <div className="carousel-caption d-none d-md-block">
        <h5>First Slide</h5>
        <p>Something make sense</p>
      </div>
    </div>
  );
};

export default index;
