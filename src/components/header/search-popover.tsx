import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Search as SearchIcon } from "lucide-react"
import { useTranslation } from "react-i18next"
import Search from "./search-desktop"
import { cn } from "@/lib/utils"

type Props = {
    className?: string,
}

const SearchPop = ({ className }: Props) => {
    const { t } = useTranslation()
    return (
        <div className={cn(
            "",
            className
        )}>
            <Popover>
                <PopoverTrigger asChild>
                    <SearchIcon className="cursor-pointer hover:scale-105" />
                </PopoverTrigger>
                <PopoverContent className="w-80 mt-4 px-4">
                    <div className="grid gap-4">
                        <div className="space-y-2">
                            <h4 className="font-medium leading-none">{t("Track Your Order")}</h4>
                        </div>
                        <Search className="max-h-16 border border-red-600" />
                    </div>
                </PopoverContent>
            </Popover>
        </div>
    )
}

export default SearchPop