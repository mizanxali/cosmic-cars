import './App.css';
import Showroom from './components/showroom';
import useWindowSize from './hooks/useWindowSize';
import rotatePhone from './assets/rotate-phone.png';

export default function App() {
  return (
    <div className="App">
      <ScreenSizedComponent />
    </div>
  );
}

const ScreenSizedComponent = () => {
  const size = useWindowSize();

  if (size.width <= 666) {
    return (
      <div className="mobile">
        <div className="mobileBrand">Cosmic Cars</div>
        <div className="mobileContent">
          <div>
            <img src={rotatePhone} width={100} alt="rotate-phone" />
            <div className="mobileText">
              Please rotate your device to browse our cars.
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <Showroom />;
};
