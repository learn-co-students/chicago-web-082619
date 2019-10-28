// // index.html has the goods!
// import React from 'react';
// import ReactDOM from 'react-dom';

// Under the CreateElement hood
const myCreateElement = (type, props = {}, children) => {
  return {
    $$typeof: Symbol.for('react.element'),
    type: type,
    props: { ...props, children: children },
    ref: null
  };
};

const Article = props => {
  // <div>
  //    <h1>TITLE</h1>
  //    <p>TEXT</p>
  // </div>

  return React.createElement('div', {}, [
    React.createElement('h1', {}, props.title),
    React.createElement('p', {}, props.text)
  ]);
};

const ArticlesContainer = props => {
  // if props contains articles e.g. props.articles
  // map over them and create a collection of elements to render
  const articleElements = props.articles.map(articleInfo => {
    return Article(articleInfo);
  })
  return React.createElement('h3', props, articleElements)
}

// Make 3 articles
const good = { title: 'Good News', text: 'probably something great...' }
const bad = { title: 'Bad News', text: 'probably something bad...' }
const middle = { title: 'Middle News', text: 'maybe nothing is real, just keep shopping...' }
// put them in an array
const articlesArray = [good, bad, middle]



ReactDOM.render(
  ArticlesContainer({ articles: articlesArray }),
  document.getElementById('main')
);
