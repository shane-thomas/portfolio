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
import Image from "next/image";

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
    <div className="p-0 rounded-lg overflow-hidden bg-black text-white transition hover:bg-zinc-900 h-full border border-white">
      <Card className="h-full w-full bg-transparent text-white p-0 shadow-none flex flex-col border-none">
        {/* Image */}
        <Image
          src={imageUrl}
          alt={title}
          className="w-full aspect-[16/9] object-cover"
        />

        <div className="flex flex-col flex-grow px-4 pb-4">
          {/* Title */}
          <CardHeader className="px-0 pt-0 pb-2">
            <CardTitle className="text-xl">{title}</CardTitle>
          </CardHeader>

          {/* Description and Badges */}
          <CardContent className="px-0 pt-0 flex-grow flex flex-col">
            <CardDescription className="text-gray-300 text-sm mb-2">
              {description}
            </CardDescription>

            <div className="flex flex-wrap gap-2 mb-6">
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

          {/* Footer */}
          <CardFooter className="px-0 pt-4 mt-auto">
            <div className="flex justify-between w-full">
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
            </div>
          </CardFooter>
        </div>
      </Card>
    </div>
  );
};

export default ProjectCard;
