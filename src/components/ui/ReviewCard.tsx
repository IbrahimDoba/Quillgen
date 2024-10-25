import { cn } from "@/lib/utils";

export const ReviewCard = ({
    name,
    username,
    description,
    usericon,
  }: {
    name: string;
    username: string;
    description: string;
    usericon: string;
  }) => {
    return (
      <figure
      className={cn(
        "relative w-72 cursor-pointer overflow-hidden rounded-xl border  p-4 text-white",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
      >
        <div className="flex flex-row items-center gap-2 ">
          <span className="text-2xl">{usericon}</span>
          <div className="flex flex-col">
            <figcaption className="text-sm font-medium dark:text-white">
              {name}
            </figcaption>
            <p className="text-xs font-medium dark:text-white/40">{username}</p>
          </div>
        </div>
        <blockquote className="mt-2 text-sm">{description}</blockquote>
      </figure>
    );
  };