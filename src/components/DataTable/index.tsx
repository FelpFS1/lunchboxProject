import { ReactNode } from "react";
import { TableContainer } from "./styles";
interface DataTableProps {
  children: ReactNode;
}
export default function DataTable({ children }: DataTableProps) {
  return <TableContainer>{children}</TableContainer>;
}
