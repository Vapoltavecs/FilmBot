import './App.css';
import Header from "./Components/Header/header";
import { BrowserRouter, Router, Route, Redirect } from "react-router-dom";
import { AnimatePresence, motion } from 'framer-motion';
import state from './state/redux/state'
import AboutPage from "./Components/pages/about/about";
import Footer from "./Components/footer/footer";
import Product from "./Components/pages/products/product";
import Films from './Components/pages/films/films';
import FilmPage from './Components/pages/film/film';
import TimeTable from './Components/pages/timetable/timetable';

function App() {

    return (
        <AnimatePresence exitBeforeEnter initial={true}>
            <BrowserRouter>

                <div className="App">
                    <Header />
                    
                    <Route path='/about' render={() => <AboutPage aboutPage={state.aboutPage} />} />
                    <Route path='/products' render={() => <Product />} />
                    <Route path='/kino' render={() => <Films films={state.FilmsAtNow} />} />
                    <Route path='/filmPage' render={() => <FilmPage data={state.filmPage} state={state} />} />

                    <Redirect exact from='/' to="/kino" />
                    <Footer />
                </div>
            </BrowserRouter>
        </AnimatePresence>
    );
}

export default App;
