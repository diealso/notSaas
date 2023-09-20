import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";

import avatar from "../assets/avatar.avif";

import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";

const TableTasks = () => {
  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">Task</TableHead>
            <TableHead className="w-[100px]">Status</TableHead>
            <TableHead>Deadline</TableHead>
            <TableHead className="text-right">Stakeholders</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">Buy groceries</TableCell>
            <TableCell>Ongoing</TableCell>
            <TableCell>Tomorrow</TableCell>
            <TableCell className="text-right">
              <div className="flex items-center justify-end">
                <Avatar className="h-9 w-9">
                  <AvatarImage src={avatar} />
                  <AvatarFallback>DA</AvatarFallback>
                </Avatar>
                <div className="ml-4 space-y-1">
                  <p className="text-sm font-medium leading-none">
                    Diego Alvarez
                  </p>
                </div>
              </div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Buy groceries</TableCell>
            <TableCell>Ongoing</TableCell>
            <TableCell>Tomorrow</TableCell>
            <TableCell className="text-right">
              <div className="flex items-center justify-end">
                <Avatar className="h-9 w-9">
                  <AvatarImage src={avatar} />
                  <AvatarFallback>DA</AvatarFallback>
                </Avatar>
                <div className="ml-4 space-y-1">
                  <p className="text-sm font-medium leading-none">
                    Diego Alvarez
                  </p>
                </div>
              </div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Buy groceries</TableCell>
            <TableCell>Ongoing</TableCell>
            <TableCell>Tomorrow</TableCell>
            <TableCell className="text-right">
              <div className="flex items-center justify-end">
                <Avatar className="h-9 w-9">
                  <AvatarImage src={avatar} />
                  <AvatarFallback>DA</AvatarFallback>
                </Avatar>
                <div className="ml-4 space-y-1">
                  <p className="text-sm font-medium leading-none">
                    Diego Alvarez
                  </p>
                </div>
              </div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Buy groceries</TableCell>
            <TableCell>Ongoing</TableCell>
            <TableCell>Tomorrow</TableCell>
            <TableCell className="text-right">
              <div className="flex items-center justify-end">
                <Avatar className="h-9 w-9">
                  <AvatarImage src={avatar} />
                  <AvatarFallback>DA</AvatarFallback>
                </Avatar>
                <div className="ml-4 space-y-1">
                  <p className="text-sm font-medium leading-none">
                    Diego Alvarez
                  </p>
                </div>
              </div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Buy groceries</TableCell>
            <TableCell>Ongoing</TableCell>
            <TableCell>Tomorrow</TableCell>
            <TableCell className="text-right">
              <div className="flex items-center justify-end">
                <Avatar className="h-9 w-9">
                  <AvatarImage src={avatar} />
                  <AvatarFallback>DA</AvatarFallback>
                </Avatar>
                <div className="ml-4 space-y-1">
                  <p className="text-sm font-medium leading-none">
                    Diego Alvarez
                  </p>
                </div>
              </div>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Buy groceries</TableCell>
            <TableCell>Ongoing</TableCell>
            <TableCell>Tomorrow</TableCell>
            <TableCell className="text-right">
              <div className="flex items-center justify-end">
                <Avatar className="h-9 w-9">
                  <AvatarImage src={avatar} />
                  <AvatarFallback>DA</AvatarFallback>
                </Avatar>
                <div className="ml-4 space-y-1">
                  <p className="text-sm font-medium leading-none">
                    Diego Alvarez
                  </p>
                </div>
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
};

export default TableTasks;
