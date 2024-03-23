import Landing from './components/Landing';
import Navbar from './components/Navbar';

const App = () => {
    return (
        <div className="bg-zinc-900 w-full min-h-screen">
            <Navbar />
            <Landing />
        </div>
    );
};

export default App;
