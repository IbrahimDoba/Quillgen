import React from "react";
import MainNavbar from "@/components/shared/Navbar";
import MaxWidthWrapper from "@/components/Max-width-wrapper";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { Button } from "@nextui-org/react";

const page = () => {
  return (
    <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <MainNavbar />
      <MaxWidthWrapper>
        <section className="grid place-items-center py-12 md:py-16 lg:py-32 gap-6">
          <div
            className={cn(
              "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
            )}
          >
            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
              <span>✨ Introducing Quill Thumbmail UI</span>
              <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </AnimatedShinyText>
          </div>
          <div className="max-w-[800px] ">
            <h1 className="text-6xl font-bold mb-4 text-center text-white">
              Unleash Your Creativity
              <br />
              with <span className="text-blue-500">QuillGen</span>
            </h1>
            <p className="text-xl text-white text-center max-w-[600px] mt-6 opacity-70">
              Join the QuillGen community and start creating stunning AI art in
              seconds. Whether you&apos;re a seasoned artist or a beginner, our
              tools make art creation easy and fun.
            </p>
            <div className="flex justify-center items-center w-full mt-8  gap-6">
              <Button className="w-full text-md">
                {" "}
                Get Started <ArrowRightIcon  className="w-10 h-8" />
              </Button>
              <Button className="w-full text-white bg-gray-800">
                Explore
              </Button>
            </div>
          </div>
        </section>
      </MaxWidthWrapper>
    </div>
  );
};

export default page;
