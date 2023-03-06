import './Homepage.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css/animate.min.css";
import {
    Alert, Button
} from "react-bootstrap";
const Home = ()=>{
    const pStyle={
        backgroundColor:"red",
        color:"blue",
        fontSize:"40px"
    }
    let wap = "Wap Institute";
    const data ={
        name:"Shanti",
        roll:"1185"
    }
    const demo=(
        <>
            <h1 className="animate__animated animate__shakeX animate__infinite">WellCome to Home page</h1>
            <p>Home page</p>
            <p style={pStyle}>{wap}</p>
            <p>{JSON.stringify(data)}</p>
            <Button>Click</Button>
            <Alert variant='danger'>It is Alert</Alert>
        </>
    );
    return demo;
}
export default Home;