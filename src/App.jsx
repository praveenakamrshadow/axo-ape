import Landing from './components/Landing';
import Navbar from './components/Navbar';
import Pictures from './components/Pictures';
import PlayReel from './components/PlayReel';
import Spread from './components/Spread';
import Work from './components/Work';
import LocomotiveScroll from 'locomotive-scroll';

const App = () => {
    const locomotiveScroll = new LocomotiveScroll();
    return (
        <div className="w-full font-Lausanne">
            <Navbar />
            <Landing />
            <Work />
            <PlayReel />
            <Pictures />
            <Spread />
        </div>
    );
};

export default App;
