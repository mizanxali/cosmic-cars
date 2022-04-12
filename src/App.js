import './App.css';
import Showroom from './components/showroom';
import useWindowSize from './hooks/useWindowSize';

export default function App() {
  return (
    <div className="App">
      <ScreenSizedComponent />
    </div>
  );
}

const ScreenSizedComponent = () => {
  const size = useWindowSize();

  if (size.width <= 768) {
    return <h1>no</h1>;
  }

  return <Showroom />;
};
