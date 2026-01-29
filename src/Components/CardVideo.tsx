import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom";

type CardVideoProps = {
    prop: {
        name?: string;
        grade?: string;
        videoUrl?: string;
        imageUrl?: string;
        videoUrl2?: string;
    }
};


function toYouTubeShortsEmbed(videoUrl: string): string | null {
    try {
        const url = new URL(videoUrl);
        let videoId: string | null = null;


        if (url.pathname.includes("/shorts/")) {
            videoId = url.pathname.split("/shorts/")[1];
        }

        if (url.pathname.includes("/embed/")) {
            videoId = url.pathname.split("/embed/")[1];
        }

        if (!videoId) return null;

        return `https://www.youtube.com/embed/${videoId}?rel=0&autoplay=0&mute=1&playsinline=1&enablejsapi=1&controls=1`;
    } catch {
        return null;
    }
}



const CardVideo = ({ prop }: CardVideoProps) => {

    if (!prop) return null;

    const embedUrl = prop.videoUrl ? toYouTubeShortsEmbed(prop.videoUrl) : null;


    return (
        <div>
            <Link to={`/`}>
                <div className="m-4">
                    <Button>Go Back Home</Button>
                </div>
            </Link>
            <Card>
                <CardHeader>
                    <CardTitle>{prop.name}</CardTitle>
                    <CardDescription>Just take a Leap of Faith...</CardDescription>
                    <CardAction>{prop.grade}</CardAction>
                </CardHeader>
                <CardContent>
                    <div className="relative w-full aspect-[16/9]">
                        <iframe
                            src={embedUrl ?? undefined}
                            width="100%"
                            height="400"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            loading="lazy"
                            style={{ border: 0 }}
                            title="Youtube video Player"
                        />
                    </div>
                </CardContent>

                {prop?.videoUrl2 ? (
                    <CardContent>
                        <div className="relative w-full aspect-[16/9]">
                            <iframe
                                src={prop.videoUrl2}
                                width="100%"
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
        </div >
    )
}

export default CardVideo
