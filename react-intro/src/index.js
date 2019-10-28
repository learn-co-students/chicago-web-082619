import React from 'react';
import ReactDOM from 'react-dom';

const myCreateElement = (type, props = {}, children) => {
  return {
    $$typeof: Symbol.for('react.element'),
    type: type,
    props: { ...props, children: children },
    ref: null
  };
};

const Article = props => {
  return myCreateElement('div', {}, [
    myCreateElement('h1', {}, props.title),
    myCreateElement('p', {}, props.text)
  ]);
};

ReactDOM.render(
  Article({ title: 'Some News', text: 'probably something bad...' }),
  document.getElementById('main')
);
