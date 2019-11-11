import React from 'react';
import Navbar from './Navbar';
import PaintingList from './PaintingList';
import PaintingCard from './PaintingCard';
import paintings from '../artworks';

// const App = () => {
//   // Do we have paintings? How do we get them into the list?
//   return (
//     <div>
//       <Navbar icon="paint brush" title="Painterest" description="our app" />
//       <PaintingList paintings={paintings}/>
//     </div>
//   );
// };

class App extends React.Component {
  constructor(){
    super()
    this.state = { clicked: false }
  }
  // Do we have paintings? How do we get them into the list?
  render() {
    return (
      <div>
        <Navbar icon="paint brush" title="Painterest" description="our app" />
        { this.state.clicked ? <PaintingList paintings={paintings}/> : "NO PAINTINGS...HAVING A VINCENT VAN BRUH MOMENT" }
      </div>
    );
  }
};

export default App;
