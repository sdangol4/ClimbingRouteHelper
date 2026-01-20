import LogIn from '../Components/LogIn.js';
import Wallimage from '../Components/wallimage.js';
import SortBy from '../Components/SortBy.js';
import Routes from '../Components/Routes.js';

 
const HomePage = () => {
   
    return (
        <div>
            <h1 className='scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balanc'
            >Climbing Wall Helper</h1>
       

            <Wallimage />
            <SortBy />

            <Routes />

         
        </div>
    )
}

export default HomePage
