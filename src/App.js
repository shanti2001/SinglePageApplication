import{
    BrowserRouter,
    Switch,
    Route
    
} from 'react-router-dom'
import './App.css';
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/fooer';
import Homepage from './components/Homepage/Homepage';
const App =()=>{
    const demo =(
        
                <BrowserRouter>
                <Navbar/>
                    <div id="page">
                        <div id="container">
                            <Switch>
                                <Route exact path='/'>
                                    <Homepage/>
                                </Route>
                                <Route exact path='/about-us'>
                                    <h1>WellCome to About Us</h1>
                                </Route>
                                <Route exact path='/images'>
                                    <h1>WellCome to Images</h1>
                                </Route>
                            </Switch>
                        </div>
                    </div>
                    <Footer/>
                </BrowserRouter>
                // {/* <h1>njdnsk</h1> */}
            
    );
    return demo;  
    
}
export default App;