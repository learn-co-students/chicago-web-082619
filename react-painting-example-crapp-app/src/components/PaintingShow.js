import React from 'react';

const PaintingShow = (props) => {
  return (
    <div>
      <div className="ui card">
        <div className="image">
          <img src={props.painting.image} />
        </div>
      </div>
    </div>
  );
};

export default PaintingShow;
