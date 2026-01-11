import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import Card from "./Card"


const Accordian = () => {
    return (
        <div className="max-w-3xl mx-auto px-8 py-4">
            <Accordion
                type="single"
                collapsible
                defaultValue="item-1"
            >
                <AccordionItem value="item-1">
                    <AccordionTrigger>Product Information</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance">
                        <Card />
                        <p>Gucci</p>
                    </AccordionContent>
                </AccordionItem>

            </Accordion>
        </div>
    )
}

export default Accordian
