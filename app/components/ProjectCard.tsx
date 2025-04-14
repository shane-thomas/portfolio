import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  badges: string[];
  githubLink: string;
  websiteUrl?: string;
}

const ProjectCard = ({
  title,
  description,
  imageUrl,
  badges,
  githubLink,
  websiteUrl,
}: CardProps) => {
  return (
    <div className="rounded-lg overflow-hidden bg-black text-white transition hover:bg-zinc-900">
      {/* Image */}

      <Card className="bg-transparent text-white p-0 shadow-none">
        <img
          src={imageUrl}
          alt={title}
          className="w-full aspect-[16/9] object-cover rounded-t-lg"
        />
        <CardHeader>
          <CardTitle className="text-xl">{title}</CardTitle>
        </CardHeader>

        <CardContent className="pt-0 pb-2">
          <CardDescription className="text-gray-300 text-sm mb-2">
            {description}
          </CardDescription>
          <div className="flex flex-wrap gap-2">
            {badges.map((badge, index) => (
              <Badge
                key={index}
                className="text-xs text-white bg-[#27272a] px-2 py-1"
              >
                {badge}
              </Badge>
            ))}
          </div>
        </CardContent>

        <CardFooter className="flex justify-between pt-2 pb-4">
          <Button
            variant="outline"
            className="cursor-pointer"
            size="sm"
            onClick={() => window.open(githubLink, "_blank")}
          >
            Open GitHub
          </Button>
          {websiteUrl && (
            <Button
              variant="secondary"
              className="cursor-pointer"
              size="sm"
              onClick={() => window.open(websiteUrl, "_blank")}
            >
              Website
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProjectCard;
