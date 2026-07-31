import * as Icons from "lucide-react";

export function getIcon(name) {
  return Icons[name] || Icons.Circle;
}