import Logo from "@/assets/Logo-ar.svg"
import { cn } from "@/lib/utils"

type Props = {
    className?: string,
}

const NavBar = ({ className }: Props) => {
    return (
        <nav className={cn(
            "w-full h-20  flex justify-center font-bold text-gray-800",
            className
        )}>
            <div className="h-full w-[90%] flex justify-between gap-x-[10%]">

                <div className="Logo h-full flex justify-center items-center">
                    <img src={Logo} alt="Logo" />
                </div>
                {/* <div className="Links h-full flex-1 flex justify-start items-center gap-x-14">
                    <div>الرئيسية</div>
                    <div>الأسعار</div>
                    <div>كلم المبيعات</div>
                </div> */}
                <div className="Login-Track flex gap-x-8 items-center">
                    {/* <div>تتبع شحنتك</div>
                    <div>تسجيل الدخول</div> */}
                    <div className="text-[#E30613] font-bold">ENG</div>
                </div>

            </div>
        </nav>
    )
}

export default NavBar