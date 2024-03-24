import Landing from './components/Landing';
import Navbar from './components/Navbar';
import PlayReel from './components/PlayReel';
import Work from './components/Work';

const App = () => {
    return (
        <div className="w-full font-Lausanne">
            <Navbar />
            <Landing />
            <Work />
            <PlayReel />
        </div>
    );
};

export default App;
