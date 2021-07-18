import './App.css';
import Hello from './Hello';

function App() {
  return (
    <div>
      <Hello message='Hello, World!' number={1} />
      <Hello message='Olá, Mundo!' number={2} />
      <Hello message='Ciao, Mundo!' number={3} />
      <Hello message='Salut, Monde!' number={4} />
    </div>
  );
}

export default App;