export type IconsId =
  | "tags"
  | "star"
  | "star-thick"
  | "shield"
  | "shield-check"
  | "setting"
  | "server"
  | "search"
  | "rectangle-vertical"
  | "pie-chart"
  | "pencil"
  | "infomation"
  | "info"
  | "import"
  | "grid"
  | "global"
  | "filter"
  | "export"
  | "exit"
  | "error"
  | "document"
  | "database"
  | "contact"
  | "columns"
  | "circle"
  | "circle-check"
  | "chevron-right"
  | "chevron-left"
  | "chevron-down"
  | "arrow-right"
  | "arrow-left";

export type IconsKey =
  | "Tags"
  | "Star"
  | "StarThick"
  | "Shield"
  | "ShieldCheck"
  | "Setting"
  | "Server"
  | "Search"
  | "RectangleVertical"
  | "PieChart"
  | "Pencil"
  | "Infomation"
  | "Info"
  | "Import"
  | "Grid"
  | "Global"
  | "Filter"
  | "Export"
  | "Exit"
  | "Error"
  | "Document"
  | "Database"
  | "Contact"
  | "Columns"
  | "Circle"
  | "CircleCheck"
  | "ChevronRight"
  | "ChevronLeft"
  | "ChevronDown"
  | "ArrowRight"
  | "ArrowLeft";

export enum Icons {
  Tags = "tags",
  Star = "star",
  StarThick = "star-thick",
  Shield = "shield",
  ShieldCheck = "shield-check",
  Setting = "setting",
  Server = "server",
  Search = "search",
  RectangleVertical = "rectangle-vertical",
  PieChart = "pie-chart",
  Pencil = "pencil",
  Infomation = "infomation",
  Info = "info",
  Import = "import",
  Grid = "grid",
  Global = "global",
  Filter = "filter",
  Export = "export",
  Exit = "exit",
  Error = "error",
  Document = "document",
  Database = "database",
  Contact = "contact",
  Columns = "columns",
  Circle = "circle",
  CircleCheck = "circle-check",
  ChevronRight = "chevron-right",
  ChevronLeft = "chevron-left",
  ChevronDown = "chevron-down",
  ArrowRight = "arrow-right",
  ArrowLeft = "arrow-left",
}

export const ICONS_CODEPOINTS: { [key in Icons]: string } = {
  [Icons.Tags]: "61697",
  [Icons.Star]: "61698",
  [Icons.StarThick]: "61699",
  [Icons.Shield]: "61700",
  [Icons.ShieldCheck]: "61701",
  [Icons.Setting]: "61702",
  [Icons.Server]: "61703",
  [Icons.Search]: "61704",
  [Icons.RectangleVertical]: "61705",
  [Icons.PieChart]: "61706",
  [Icons.Pencil]: "61707",
  [Icons.Infomation]: "61708",
  [Icons.Info]: "61709",
  [Icons.Import]: "61710",
  [Icons.Grid]: "61711",
  [Icons.Global]: "61712",
  [Icons.Filter]: "61713",
  [Icons.Export]: "61714",
  [Icons.Exit]: "61715",
  [Icons.Error]: "61716",
  [Icons.Document]: "61717",
  [Icons.Database]: "61718",
  [Icons.Contact]: "61719",
  [Icons.Columns]: "61720",
  [Icons.Circle]: "61721",
  [Icons.CircleCheck]: "61722",
  [Icons.ChevronRight]: "61723",
  [Icons.ChevronLeft]: "61724",
  [Icons.ChevronDown]: "61725",
  [Icons.ArrowRight]: "61726",
  [Icons.ArrowLeft]: "61727",
};
