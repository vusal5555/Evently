import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { Separator } from "../ui/separator";
import NavItems from "./NavItems";

const MobileNav = () => {
  return (
    <nav className="md:hidden">
      <Sheet>
        <SheetTrigger className="align-middle">
          <Image
            src="/assets/icons/menu.svg"
            alt="menu"
            width={24}
            height={24}
            className="cursor-pointer"
          ></Image>
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-3 bg-white md:hidden">
          <Image
            src={"/assets/images/logo.svg"}
            width={128}
            height={48}
            alt="evently logo"
          ></Image>
          <Separator className="border border-gray-50"></Separator>
          <NavItems></NavItems>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
