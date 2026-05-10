import { Badge } from "@/components/ui";

type TagProps = {
  children: React.ReactNode;
};

export function Tag({ children }: TagProps) {
  return <Badge className="bg-background">#{children}</Badge>;
}
