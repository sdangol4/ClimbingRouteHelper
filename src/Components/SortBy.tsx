import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Label } from "@/components/ui/label"


const SortBy = () => {
    return (
        <div className="SortBy">
            <Label htmlFor="email" className="px-2">Rock Climbing Grade</Label>

            <Select >
                <SelectTrigger className="w-[180px] ">
                    <SelectValue placeholder="Grades" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="Highest">Highest</SelectItem>
                    <SelectItem value="Lowest">Lowest</SelectItem>
                </SelectContent>
            </Select>
        </div>
    )
}

export default SortBy
