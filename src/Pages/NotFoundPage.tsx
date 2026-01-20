import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

const NotFoundPage = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center items-center gap-4 ">
      <p>404 Page Not Found</p>
      <Link to={"/"}>
        <Button>Go Back Home</Button>
      </Link>
    </div>
  )
}

export default NotFoundPage
