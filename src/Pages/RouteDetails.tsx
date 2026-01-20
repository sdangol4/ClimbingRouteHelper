import { useParams } from "react-router-dom";
import CardVideo from "@/Components/CardVideo";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/config/firebase";
import { useEffect } from "react";
import { useState } from "react";

type Route = {

    color: string;
    difficuty: string;
    id: string;
    imageUrl: string;
    videoUrl: string;
    name: string;
}

const RouteDetails = () => {
    const [route, setRoute] = useState<Route | null>(null);
    const { id } = useParams<{ id: string }>();

 useEffect(() => {
    if (!id) return;

    const getRoute = async () => {
      try {
        const routeRef = doc(db, "routes", id);
        const routeSnap = await getDoc(routeRef);

        if (!routeSnap.exists()) {
          console.log("No such document!");
          return;
        }


        const routeData: Route = {
          id: routeSnap.id,
          ...(routeSnap.data() as Omit<Route, "id">),
        };
        console.log(routeData)
        setRoute(routeData);
      } catch (error) {
        console.error(error);
      }
    };

    getRoute();
  }, [id]);


    return (
        <div className="RouteDetails">
            <h1>Route Details</h1>
            <CardVideo prop={route} />
        </div>

    )
}

export default RouteDetails
