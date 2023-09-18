import {
  CheckCircle,
  Clock2,
  FileText,
  Home,
  Hourglass,
  PackageSearch,
  Palmtree,
  Plus,
  Search,
  User,
  Users,
  Wrench,
} from "lucide-react";
import { Button } from "./ui/button";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { NavLink } from "react-router-dom";

const Sidemenu = () => {
  return (
    <>
      <NavLink
        to="./"
        className={({ isActive }) =>
          isActive ? "text-accentColor font-medium" : "font-normal"
        }
      >
        <Button
          variant="ghostInherit"
          className="justify-start w-full text-sm font-inherit"
        >
          <Home className="mr-2 w-[16px] h-[16px]" />
          Index
        </Button>
      </NavLink>
      <Accordion type="single" collapsible className="px-4">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <PackageSearch className="w-[16px] h-[16px]" />
            <span className="text-sm font-normal">Products</span>
          </AccordionTrigger>
          <AccordionContent>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-accentColor font-medium" : "font-normal"
              }
              to="./products"
              end
            >
              <Button
                variant="ghostInherit"
                className="justify-start w-full text-sm font-inherit"
              >
                <Search className="mr-2 w-[16px] h-[16px]" />
                See products
              </Button>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-accentColor font-medium" : "font-normal"
              }
              to="./products/add"
              end
            >
              <Button
                variant="ghostInherit"
                className="justify-start w-full text-sm font-inherit"
              >
                <Plus className="mr-2 w-[16px] h-[16px]" />
                Add a product
              </Button>
            </NavLink>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type="single" collapsible className="px-4">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <Users className="w-[16px] h-[16px]" />
            <span className="text-sm font-normal">Teams</span>
          </AccordionTrigger>
          <AccordionContent>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-accentColor font-medium" : "font-normal"
              }
              to="./teams"
              end
            >
              <Button
                variant="ghostInherit"
                className="justify-start w-full text-sm font-inherit"
              >
                <Search className="mr-2 w-[16px] h-[16px]" />
                See teams
              </Button>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-accentColor font-medium" : "font-normal"
              }
              to="./teams/add"
              end
            >
              <Button
                variant="ghostInherit"
                className="justify-start w-full text-sm font-inherit"
              >
                <Plus className="mr-2 w-[16px] h-[16px]" />
                Add a team
              </Button>
            </NavLink>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type="single" collapsible className="px-4">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <User className="w-[16px] h-[16px]" />
            <span className="text-sm font-normal">People</span>
          </AccordionTrigger>
          <AccordionContent>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-accentColor font-medium" : "font-normal"
              }
              to="./people"
              end
            >
              <Button
                variant="ghostInherit"
                className="justify-start w-full text-sm font-inherit"
              >
                <Search className="mr-2 w-[16px] h-[16px]" />
                See people
              </Button>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-accentColor font-medium" : "font-normal"
              }
              to="./people/add"
              end
            >
              <Button
                variant="ghostInherit"
                className="justify-start w-full text-sm font-inherit"
              >
                <Plus className="mr-2 w-[16px] h-[16px]" />
                Add a person
              </Button>
            </NavLink>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type="single" collapsible className="px-4">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <FileText className="w-[16px] h-[16px]" />
            <span className="text-sm font-normal">Documents</span>
          </AccordionTrigger>
          <AccordionContent>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-accentColor font-medium" : "font-normal"
              }
              to="./documents"
              end
            >
              <Button
                variant="ghostInherit"
                className="justify-start w-full text-sm font-inherit"
              >
                <Search className="mr-2 w-[16px] h-[16px]" />
                See documents
              </Button>
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-accentColor font-medium" : "font-normal"
              }
              to="./documents/add"
              end
            >
              <Button
                variant="ghostInherit"
                className="justify-start w-full text-sm font-inherit"
              >
                <Plus className="mr-2 w-[16px] h-[16px]" />
                Add a document
              </Button>
            </NavLink>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Accordion type="single" collapsible className="px-4">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <Wrench className="w-[16px] h-[16px]" />
            <span className="text-sm font-normal">Tools</span>
          </AccordionTrigger>
          <AccordionContent>
            <Button
              variant="ghostInherit"
              className="justify-start w-full text-sm font-inherit"
            >
              <Hourglass className="mr-2 w-[16px] h-[16px]" />
              <span className="text-sm font-normal text-left">TICO</span>
            </Button>
            <Button
              variant="ghostInherit"
              className="justify-start w-full text-sm font-inherit"
            >
              <CheckCircle className="mr-2 w-[16px] h-[16px]" />
              <span className="text-sm font-normal text-left">TIFI</span>
            </Button>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Button
        variant="ghostInherit"
        className="justify-start w-full text-sm font-normal"
      >
        <Clock2 className="mr-2 w-[16px] h-[16px]" />
        My work time
      </Button>
      <Button
        variant="ghostInherit"
        className="justify-start w-full text-sm font-normal"
      >
        <Palmtree className="mr-2 w-[16px] h-[16px]" />
        Leaves / Absence
      </Button>
    </>
  );
};

export default Sidemenu;
