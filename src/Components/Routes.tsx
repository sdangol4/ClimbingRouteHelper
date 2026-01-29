import { useEffect, useState } from "react"

import Card from "./Card"


type Route = {

  color: string;
  difficuty: string;
  id: string;
  imageUrl: string;
  videoUrl: string;
  name: string;
}

import { db } from "@/config/firebase"
import {
  getDocs,
  collection,

} from "firebase/firestore";
import { Link } from "react-router-dom";

const Routes = () => {
  const [routeList, setRoutList] = useState<Route[]>([]);

  const routesColletionRef = collection(db, "routes");

  const getRouteList = async () => {
    try {
      const data = await getDocs(routesColletionRef);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      } as Route));

      setRoutList(filteredData);

    }
    catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getRouteList();

  }, []);

  return (
    <div className="Cards">

      {routeList.map((route) => (
        <Link to={`/App/${route.id}`
        
        }>
          <div key={route.id} >
            <Card prop={route} />
          </div>
        </Link>
      ))}


    </div>
  )
}

export default Routes
