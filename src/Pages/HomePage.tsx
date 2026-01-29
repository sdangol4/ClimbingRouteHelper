import Wallimage from '../Components/wallimage.js';
import { useState } from 'react';
import Routes from '../Components/Routes.js';
import SortBy from '@/Components/SortBy.js';

 
const HomePage = () => {
      const [sortBy, setSortBy] = useState<"Highest" | "Lowest">("Lowest");


   
    return (
        <div>
            <h1 className='scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balanc'
            >Climbing Wall Helper</h1>
       

            <Wallimage />
            
            <SortBy sortBy={sortBy} setSortBy={setSortBy}/>

            <Routes sortBy={sortBy}/>

         
        </div>
    )
}

export default HomePage
