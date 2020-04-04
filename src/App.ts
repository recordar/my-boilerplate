const App = () => {
  const element = document.createElement('div');
  element.innerHTML = ['Hello', 'webpack'].join(' ');

  return element;
};

export default App;
