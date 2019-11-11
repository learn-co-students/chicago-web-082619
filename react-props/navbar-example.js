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
  return React.createElement('div', { key: 'navbarDiv', className: `ui inverted ${props.color} menu`}, [
    React.createElement('a', { key: 'navbarAnchor' className: 'item'}, [
      React.createElement('h2', {key: 'navbarHeader'}, [
        React.createElement('i', { className: `${props.icon} icon`, key: 'navbarIcon'}, []),
        React.createElement('div', { className: 'content', key: 'navbarTitle'}, props.title),
        React.createElement('div', { className: 'sub header', key: 'navbarDescription'}, props.description)
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
