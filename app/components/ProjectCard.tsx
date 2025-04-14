import { Badge } from "@/components/ui/badge"; // Shadcn Badge
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"; // Shadcn Card components
import { Button } from "@/components/ui/button"; // Shadcn Button

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  badges: string[]; // Array of technologies or tools
  githubLink: string; // GitHub repository link
  websiteUrl?: string; // Optional website URL
}

const ProjectCard = ({ title, description, imageUrl, badges, githubLink, websiteUrl }: CardProps) => {
  return (
    <Card className="w-full h-full bg-black text-white rounded-lg overflow-hidden flex flex-col">
      {/* Image */}
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-30 object-cover"
      />

      <CardContent className="flex flex-col justify-between flex-grow p-6">
        {/* Title */}
        <CardHeader>
          <CardTitle className="text-2xl font-bold mb-4">{title}</CardTitle>
        </CardHeader>

        {/* Description */}
        <CardDescription className="text-gray-300 mb-4 flex-grow">{description}</CardDescription>

        {/* Badges */}
        <div className="flex flex-wrap gap-2">
          {badges.map((badge, index) => (
            <Badge key={index} variant="outline" className="text-sm text-white border-white">
              {badge}
            </Badge>
          ))}
        </div>
      </CardContent>

      {/* Card Footer */}
      <CardFooter className="flex justify-between items-center px-6 py-2 bg-black">
        {/* Left-aligned GitHub button */}
        <Button
          variant="default"
          onClick={() => window.open(githubLink, "_blank")}
        >
          Go to GitHub
        </Button>

        {/* Conditionally rendered Website button, right aligned */}
        {websiteUrl && (
          <Button
            variant="secondary"
            onClick={() => window.open(websiteUrl, "_blank")}
          >
            View Website
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
