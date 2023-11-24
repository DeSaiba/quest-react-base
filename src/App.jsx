import './App.css'
import Screen from './components/screen/screen'
import Button from './components/button/button';
function App() {

  return (
    <>
      <Screen/>
      <Button label='Conheço a referência' alertMessage= 'Se é o bichão mesmo em!'/>
      <Button label='Não conheço a referência' alertMessage= 'Filme Batman VS Superman'/>
    </>
  )
}

export default App
