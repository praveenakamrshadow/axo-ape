import Landing from './components/Landing';
import Navbar from './components/Navbar';
import Pictures from './components/Pictures';
import PlayReel from './components/PlayReel';
import Work from './components/Work';

const App = () => {
    return (
        <div className="w-full font-Lausanne">
            <Navbar />
            <Landing />
            <Work />
            <PlayReel />
            <Pictures />
        </div>
    );
};

export default App;
