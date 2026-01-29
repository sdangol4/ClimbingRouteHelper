import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

type CardProps = {
    prop: {
        name?: string;
        grade?: string;
        imageUrl?:string;
    }
}



const CardComponent = ({prop}: CardProps) => {
    return (
        <div className="Card">
            <Card className="rounded-md max-w-sm mx-auto h-auto shadow-none transition-shadow duration-300 cursor-pointer hover:shadow-lg hover:shadow-gray-400">
                <CardHeader>
                    <CardTitle>{prop.name}</CardTitle>
                    <CardDescription>{prop.grade}</CardDescription>
                    <CardAction>{prop.grade}</CardAction>
                </CardHeader>
                <CardContent className="w-full h-[260px] px-6 flex items-center justify-center" >
                    <img className="w-full h-full object-contain scale-110" src={prop.imageUrl || undefined} alt="Burden Of Dreams"/> 
                </CardContent>
             
            </Card>

        </div>
    )
}

export default CardComponent
