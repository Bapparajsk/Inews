import { BrowserRouter,  Route, Routes } from 'react-router-dom'
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import News from "./component/News";
import LoadingBar from "react-top-loading-bar";
import {useState} from "react";
import Technology from "./component/Technology";
import Coding from "./component/Coding";
import Sports from "./component/Sports";

const App = () => {
    const [progress, setProgress] = useState(10);
    const setprogress = (val) => {
        setProgress(progress + val);
    }
    return (
        <BrowserRouter>
            <LoadingBar
                color='#f11946'
                progress={progress}
            />
            <Navbar />
            <Routes>
                <Route path="/" element={<Home setprogress={setprogress} newsName={'top-headlines'} country={'in'}/>} />
                <Route path="/phone" element={<News setprogress={setprogress} newsName={'everything'} q={'phone'}/>} />
                <Route path="/technology" element={<Technology setprogress={setprogress} newsName={'everything'} q={'technology'}/>} />
                <Route path="/coding" element={<Coding setprogress={setprogress} newsName={'everything'} q={'coding'}/>} />
                <Route path="/sports" element={<Sports setprogress={setprogress} newsName={'everything'} q={'sports'}/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;