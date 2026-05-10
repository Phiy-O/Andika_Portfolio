import { Badge } from "@/components/ui";

type CategoryBadgeProps = {
  category: string;
};

export function CategoryBadge({ category }: CategoryBadgeProps) {
  return <Badge className="bg-background">{category}</Badge>;
}
