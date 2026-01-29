import {
    Select,
    SelectContent,
    SelectItem,
    SelectGroup,
    SelectTrigger,
    SelectLabel,
    SelectValue,
} from "@/components/ui/select"

import { Label } from "@/components/ui/label"

type Props = {
    sortBy: "Highest" | "Lowest";
    setSortBy: (value: "Highest" | "Lowest") => void;
};



export default function SortBy({ sortBy, setSortBy }: Props) {
    return (
        <div className="SortBy">
            <Label htmlFor="email" className="px-2">Rock Climbing Grade</Label>

            <Select value={sortBy}
                onValueChange={(value) =>
                    setSortBy(value as "Highest" | "Lowest")
                }>
                <SelectTrigger className="w-[180px] ">
                    <SelectValue placeholder="Grades" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>

                        <SelectLabel>Grades</SelectLabel>
                        <SelectItem value="Highest">Highest</SelectItem>

                        <SelectItem value="Lowest">Lowest</SelectItem>
                    </SelectGroup>
                </SelectContent>

            </Select>
        </div>
    )
}
