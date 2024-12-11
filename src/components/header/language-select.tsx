import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils";
import { useTranslation } from "react-i18next"

type Props = {
    className?: string,
}


const languages = [
    { value: "en", label: "English", flag: "🇬🇧" },
    { value: "ar", label: "عربي", flag: "🇸🇦" },
]

export function LanguageSelect({ className }: Props) {
    const { i18n } = useTranslation();
    return (
        <div className={cn(
            "",
            className
        )}>
            <Select
                defaultValue={i18n.language}
                onValueChange={(v) => i18n.changeLanguage(v)}
            >
                <SelectTrigger className="w-[100px] border-none outline-none focus:ring-0 focus:border-none text-red-600 text-lg">
                    <SelectValue placeholder="Select language" />
                </SelectTrigger>
                <SelectContent>
                    {languages.map((language) => (
                        <SelectItem key={language.value} value={language.value}>
                            {language.label}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    )
}

