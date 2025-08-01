import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface StatusBadgeProps {
  status: string;
  className?: string;
}

const statusConfig = {
  // Entreprises
  active: { label: "Active", variant: "success" },
  inactive: { label: "Inactive", variant: "secondary" },
  
  // Sessions
  programme: { label: "Programmé", variant: "info" },
  en_cours: { label: "En cours", variant: "warning" },
  annule: { label: "Annulé", variant: "destructive" },
  termine: { label: "Terminé", variant: "success" },
  
  // Validation
  validated: { label: "Validé", variant: "success" },
  pending: { label: "En attente", variant: "warning" },
} as const;

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const config = statusConfig[status as keyof typeof statusConfig];
  
  if (!config) {
    return <Badge variant="secondary" className={className}>{status}</Badge>;
  }

  const variantClasses = {
    success: "bg-success text-success-foreground hover:bg-success/80",
    warning: "bg-warning text-warning-foreground hover:bg-warning/80",
    info: "bg-info text-info-foreground hover:bg-info/80",
    destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/80",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  };

  return (
    <Badge 
      className={cn(
        variantClasses[config.variant],
        className
      )}
    >
      {config.label}
    </Badge>
  );
}