import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

type CardVideoProps = {
    prop: {
        name?: string;
        grade?: string;
        videoUrl?: string;
        imageUrl?: string;
        videoUrl2?: string;
    }
};


const CardVideo = ({ prop }: CardVideoProps) => {

    if (!prop) return null;

    return (
        <div>
            <Card>
                <CardHeader>
                    <CardTitle>{prop.name}</CardTitle>
                    <CardDescription>Just take a Leap of Faith...</CardDescription>
                    <CardAction>{prop.grade}</CardAction>
                </CardHeader>
                <CardContent>
                    <div className="relative w-full aspect-[16/9]">
                        <iframe
                            src={`${prop.videoUrl}`}
                            width="50%"
                            height="400"
                            
                            allowFullScreen
                            loading="lazy"
                        />
                    </div>
                </CardContent>

                {prop?.videoUrl2 ? (
                    <CardContent>
                        <div className="relative w-full aspect-[16/9]">
                            <iframe
                                src={prop.videoUrl2}
                                width="50%"
                                height="400"
                                
                                allowFullScreen
                                loading="lazy"
                            />
                        </div>
                    </CardContent>
                ) : null}

                <CardFooter>

                </CardFooter>
            </Card>
        </div>
    )
}

export default CardVideo
