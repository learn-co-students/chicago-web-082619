import React from 'react';
import PaintingCard from './PaintingCard';

class PaintingList extends React.Component {
  constructor(props) {
    super(props);
    // console.log('PaintingList props.paintings', props.paintings);
  }


  render() {
    const paintingComponents = this.props.paintings.map(paintingInfo => {
      return <PaintingCard painting={paintingInfo} key={paintingInfo.id} />
    })

    return (
      <div>
        <h1>All the Paintings</h1>
        <div className="ui items">{paintingComponents}</div>
      </div>
    );
  }
}

export default PaintingList;
