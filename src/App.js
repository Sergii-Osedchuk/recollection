import PropTypes from 'prop-types';
// import Header from './components/Header'
import Form from './components/Form'
function App() {
  const el = <div>kkk</div>
  let x = 66;
  const sayTrue = () => console.log(el)
  return (
    <div className="App">
      <Header number = {x}/>
      <Form click = {sayTrue}/>
    </div>
  );
}
App.propTypes = {
  x : PropTypes.number.isRequired,
}

export default App;
