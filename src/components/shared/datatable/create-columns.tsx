import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Tipos de columna soportados
type BaseColumn<TData> = {
  accessorKey: keyof TData & string;
  label: string;
};

type TextColumn<TData> = BaseColumn<TData> & {
  type?: "text";
  sortable?: boolean;
};

type CurrencyColumn<TData> = BaseColumn<TData> & {
  type: "currency";
  currency?: string;
  locale?: string;
};

type BadgeColumn<TData> = BaseColumn<TData> & {
  type: "badge";
  variants?: Record<
    string,
    "default" | "secondary" | "destructive" | "outline"
  >;
};

type CustomColumn<TData> = BaseColumn<TData> & {
  type: "custom";
  cell: (row: TData) => React.ReactNode;
};

export type ColumnConfig<TData> =
  | TextColumn<TData>
  | CurrencyColumn<TData>
  | BadgeColumn<TData>
  | CustomColumn<TData>;

// Acción del dropdown
export type RowAction<TData> = {
  label: string;
  onClick: (row: TData) => void;
  separator?: boolean; // pone un separador ANTES de esta acción
  variant?: "default" | "destructive";
};

export function createColumns<TData>(
  configs: ColumnConfig<TData>[],
  actions?: RowAction<TData>[],
): ColumnDef<TData>[] {
  const cols: ColumnDef<TData>[] = configs.map((config) => {
    // Columna de texto simple o sortable
    if (!config.type || config.type === "text") {
      const col = config as TextColumn<TData>;
      return {
        accessorKey: col.accessorKey,
        header: col.sortable
          ? ({ column }) => (
              <Button
                variant="ghost"
                onClick={() =>
                  column.toggleSorting(column.getIsSorted() === "asc")
                }
              >
                {col.label}
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            )
          : col.label,
      };
    }

    // Columna de moneda
    if (config.type === "currency") {
      const col = config as CurrencyColumn<TData>;
      return {
        accessorKey: col.accessorKey,
        header: () => <div className="text-right">{col.label}</div>,
        cell: ({ row }) => {
          const value = parseFloat(row.getValue(col.accessorKey));
          const formatted = new Intl.NumberFormat(col.locale ?? "es-CL", {
            style: "currency",
            currency: col.currency ?? "CLP",
          }).format(value);
          return <div className="text-right font-medium">{formatted}</div>;
        },
      };
    }

    // Columna de badge
    if (config.type === "badge") {
      const col = config as BadgeColumn<TData>;
      return {
        accessorKey: col.accessorKey,
        header: col.label,
        cell: ({ row }) => {
          const value = row.getValue(col.accessorKey) as string;
          const variant = col.variants?.[value] ?? "secondary";
          return "a";
        },
      };
    }

    // Columna custom
    if (config.type === "custom") {
      const col = config as CustomColumn<TData>;
      return {
        accessorKey: col.accessorKey,
        header: col.label,
        cell: ({ row }) => col.cell(row.original),
      };
    }

    return { accessorKey: config.accessorKey, header: config.label };
  });

  // Columna de acciones al final si se pasan
  if (actions?.length) {
    cols.push({
      id: "actions",
      enableHiding: false,
      cell: ({ row }) => (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Abrir menú</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Acciones</DropdownMenuLabel>
            {actions.map((action, i) => (
              <div key={i}>
                {action.separator && <DropdownMenuSeparator />}
                <DropdownMenuItem
                  onClick={() => action.onClick(row.original)}
                  className={
                    action.variant === "destructive" ? "text-destructive" : ""
                  }
                >
                  {action.label}
                </DropdownMenuItem>
              </div>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      ),
    });
  }

  return cols;
}
