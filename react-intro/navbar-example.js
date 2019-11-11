// <div class="ui inverted orange menu">
//     <a class='item'>
//       <h2 class="ui header">
//         <i class="paw icon"></i>
//         <div class="content">
//           ZooKeepr
//         </div>
//         <div class="sub header">
//           Keep track of your animals
//         </div>
//       </h2>
//     </a>
//   </div>

// Let's try a thing! How could you make the following code return the above element?

const Navbar = props => {
  // ...
  return React.createElement('div', { key: 'firstWrapperDiv01', className: `ui inverted ${props.color} menu`}, [
    React.createElement('a', { className: 'item'}, [
      React.createElement('h2', {key: 'firstH201'}, [
        React.createElement('i', { className: `${props.icon} icon`, key: 'firstIcon01'}, []),
        React.createElement('div', { className: 'content', key: 'firstDiv01'}, props.title),
        React.createElement('div', { className: 'sub header', key: 'secondDiv01'}, props.description)
      ])
    ])
  ])
};

ReactDOM.render(
  Navbar({
    title: 'ZooKeepr',
    icon: 'paw',
    color: 'orange',
    description: 'keep track of your animals'
  }),
  document.getElementById('main')
);
