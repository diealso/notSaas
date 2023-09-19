import {
  Clock2,
  FileText,
  Home,
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
            <Button
              variant="ghostInherit"
              className="justify-start w-full text-sm font-inherit"
            >
              <Search className="mr-2 w-[16px] h-[16px]" />
              See products
            </Button>

            <Button
              variant="ghostInherit"
              className="justify-start w-full text-sm font-inherit"
            >
              <Plus className="mr-2 w-[16px] h-[16px]" />
              Add a product
            </Button>
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
            <Button
              variant="ghostInherit"
              className="justify-start w-full text-sm font-inherit"
            >
              <Search className="mr-2 w-[16px] h-[16px]" />
              See teams
            </Button>

            <Button
              variant="ghostInherit"
              className="justify-start w-full text-sm font-inherit"
            >
              <Plus className="mr-2 w-[16px] h-[16px]" />
              Add a team
            </Button>
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
            <Button
              variant="ghostInherit"
              className="justify-start w-full text-sm font-inherit"
            >
              <Search className="mr-2 w-[16px] h-[16px]" />
              See people
            </Button>

            <Button
              variant="ghostInherit"
              className="justify-start w-full text-sm font-inherit"
            >
              <Plus className="mr-2 w-[16px] h-[16px]" />
              Add a person
            </Button>
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
            <Button
              variant="ghostInherit"
              className="justify-start w-full text-sm font-inherit"
            >
              <Search className="mr-2 w-[16px] h-[16px]" />
              See documents
            </Button>
            <Button
              variant="ghostInherit"
              className="justify-start w-full text-sm font-inherit"
            >
              <Plus className="mr-2 w-[16px] h-[16px]" />
              Add a document
            </Button>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Button
        variant="ghostInherit"
        className="justify-start w-full text-sm font-normal"
      >
        <Wrench className="mr-2 w-[16px] h-[16px]" />
        Tools
      </Button>
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
