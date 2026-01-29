import { useEffect, useState, useMemo } from "react"
import Card from "./Card"
import { db } from "@/config/firebase"
import {
  getDocs,
  collection,
} from "firebase/firestore";
import { Link } from "react-router-dom";

type Route = {
  color: string;
  difficuty: string;
  id: string;
  order: number;
  imageUrl: string;
  videoUrl: string;
  name: string;
}

type Props = {
  sortBy: "Highest" | "Lowest";
};

const Routes = ({ sortBy }: Props) => {
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
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getRouteList();
  }, []);

  const sortedRoutes = useMemo(() => {
    if (sortBy === "Lowest") {
      return [...routeList].sort((a, b) => a.order - b.order);
    } else if (sortBy === "Highest") {
      return [...routeList].sort((a, b) => b.order - a.order);
    }
    return routeList;
  }, [routeList, sortBy]);

  return (
    <div className="Cards">
      {sortedRoutes.map((route) => (
        <Link to={`/App/${route.id}`} key={route.id}>
          <div>
            <Card prop={route} />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Routes;