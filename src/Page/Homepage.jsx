import Directory from "../Components/Directory/Directory";
import "./Homepage.scss"

const Homepage = ({history}) => {
    return ( 
        <div className="homepage max-w-screen-lg mx-auto">
            <Directory />
        </div>
     );
}
 
export default Homepage;