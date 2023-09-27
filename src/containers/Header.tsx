import supabase from "../utils/db/db";
import avatar from "../assets/avatar.avif";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "../components/ui/sheet";

import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Menu } from "lucide-react";
import Sidemenu from "../components/Sidemenu";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="flex items-center justify-between px-4 py-2 mx-auto ">
        <div className="flex items-center justify-between gap-2 md:gap-0">
          <Sheet>
            <SheetTrigger>
              <Menu className="inline-block cursor-pointer md:hidden" />
            </SheetTrigger>
            <SheetContent side={"left"}>
              <SheetHeader>
                <div className="pt-4">
                  <Sidemenu />
                </div>
              </SheetHeader>
            </SheetContent>
          </Sheet>
          <p className="text-4xl font-bold">NOTSAAS</p>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src={avatar} />
              <AvatarFallback>DA</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => supabase.auth.signOut()}>
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;
