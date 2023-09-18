import Booklist from "../components/Booklists";
import HomeContent from "../components/HomeContent";
import Navbar from "./Navbar";

const Home = () => {
    
    return ( 
        <div>
            <Navbar />
            <HomeContent />
            <Booklist />
        </div>
     );
}
 
export default Home;