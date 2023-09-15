import supabase from "../utils/db/db";
import { Button } from "../components/ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";

import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../components/ui/sheet";
import { Home, Menu } from "lucide-react";

const Header = () => {
  return (
    <header>
      <div className="flex items-center justify-between px-4 py-2 mx-auto border-b ">
        <div className="flex items-center justify-between gap-4">
          <Sheet>
            <SheetTrigger>
              <Menu />
            </SheetTrigger>
            <SheetContent side={"left"}>
              <SheetHeader>
                <SheetDescription>
                  <h2 className="px-4 mb-2 text-xl font-semibold tracking-tight text-black ">
                    Discover
                  </h2>
                  <Button variant="ghost" className="justify-start w-full">
                    <Home className="mr-2" />
                    Index
                  </Button>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
          <p>Header</p>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src="https://avatars.githubusercontent.com/u/6640391?v=4" />
              <AvatarFallback>CN</AvatarFallback>
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
