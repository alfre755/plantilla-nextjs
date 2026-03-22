import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const cardVariants = cva(
  "group p-0 border backdrop-blur-md transition-all duration-300 hover:-translate-y-2",
  {
    variants: {
      variant: {
        default: "bg-background/80 border-border shadow-lg hover:shadow-2xl",
        featured: "bg-primary border-transparent shadow-2xl scale-105",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

// 👇 estilos por SLOT
const cardSlots = {
  default: {
    title: "text-xl font-semibold group-hover:text-primary",
    description: "text-sm text-muted-foreground",
    content: "text-sm text-foreground/80 leading-relaxed",
  },
  featured: {
    title: "text-xl font-semibold text-primary-foreground",
    description: "text-sm text-primary-foreground/80",
    content: "text-sm text-primary-foreground/90 leading-relaxed",
  },
};

interface Props extends VariantProps<typeof cardVariants> {
  title: string;
  desc: string;
  content: string;
  className?: string;
}

export function CustomCard({
  title,
  desc,
  content,
  variant = "default",
  className,
}: Props) {
  const styles = cardSlots[variant || "default"];

  return (
    <Card className={cn(cardVariants({ variant }), className)}>
      <CardHeader className="p-6 space-y-3">
        <CardTitle className={styles.title}>{title}</CardTitle>
        <CardDescription className={styles.description}>{desc}</CardDescription>
      </CardHeader>

      <CardContent className={cn("px-6 pb-6", styles.content)}>
        {content}
      </CardContent>
    </Card>
  );
}
