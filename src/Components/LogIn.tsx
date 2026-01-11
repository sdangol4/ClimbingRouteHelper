
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"


const LogIn = () => {
    return (
        <div className=" flex  justify-center gap-2">
            <div className="flex flex-col gap-4 pt-10">
                <Input type="email" placeholder="Email" />
                <Input type="Password" placeholder="Password" />
                <Button type="submit" variant="outline">
                    Subscribe
                </Button>
            </div>

            <div className="flex flex-col gap-4 pt-10">
             
                <Button type="submit" variant="outline">
                    SigIn with Google
                </Button>
            </div>
        </div>


    )
}

export default LogIn
