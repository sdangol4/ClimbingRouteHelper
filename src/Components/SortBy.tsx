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
                    <SelectItem value="5.2">5.2</SelectItem>
                    <SelectItem value="5.3">5.3</SelectItem>
                    <SelectItem value="5.4">5.4</SelectItem>
                    <SelectItem value="5.10a">5.10a</SelectItem>
                    <SelectItem value="5.10b">5.10b</SelectItem>
                    <SelectItem value="5.10c">5.10c</SelectItem>
                </SelectContent>
            </Select>
        </div>
    )
}

export default SortBy
