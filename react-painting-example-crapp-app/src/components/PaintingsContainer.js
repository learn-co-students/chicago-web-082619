import React from 'react';
import paintings from './artworks'; import PaintingsList from './PaintingsList';
import { Route, Switch } from 'react-router-dom';
import PaintingShow from './PaintingShow';

class PaintingsContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      paintings: paintings
    };

    this.handleDelete = this.handleDelete.bind(this);
    this.handleVote = this.handleVote.bind(this);
  }

  componentDidMount() {
    this.setState({
      paintings: paintings 
    });
  }

  handleDelete(id) {
    const updatedState = this.state.paintings.filter(pntg => pntg.id !== id);

    this.setState({ paintings: updatedState });
  }

  handleVote(id) {
    const updatedPaintings = this.state.paintings
      .map(pntg => {
        if (pntg.id === id) {
          return Object.assign({}, pntg, { votes: pntg.votes + 1 });
        } else {
          return pntg;
        }
      })
      .sort((a, b) => b.votes - a.votes);

    this.setState(state => {
      return { paintings: updatedPaintings };
    });
  }

  render() {
    return (
      <div>
          <Switch>
            <Route path='/paintings/:paintingId' render={(routeParams) => {
              const paintingId = routeParams.match.params.paintingId
              const painting = this.state.paintings.find(painting => 
                painting.id === parseInt(paintingId))
              return <PaintingShow painting={painting} />
            }} />
            <Route path='/' render={() => {
              return <PaintingsList
                    handleDelete={this.handleDelete}
                    handleVote={this.handleVote}
                    paintings={this.state.paintings}
                  />
            }} />
          </Switch>

      </div>
    );
  }
}

export default PaintingsContainer;
