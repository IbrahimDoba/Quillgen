import React from "react";
import MaxWidthWrapper from "@/components/Max-width-wrapper";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { Button } from "@nextui-org/react";
import { MagicCard } from "@/components/ui/magic-card";
import { Benefits } from "@/constants";
import Image from "next/image";

const page = () => {
  return (
    <>
      {/* // hero text section */}
      <MaxWidthWrapper >
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
            <p className="text-xl text-white text-center max-w-[600px] mt-6 text-muted-foreground">
              Join the QuillGen community and start creating stunning AI art in
              seconds. Whether you&apos;re a seasoned artist or a beginner, our
              tools make art creation easy and fun.
            </p>
            <div className="flex justify-center items-center w-full mt-8  gap-6 z[-2]">
              <Button className="w-full text-md">
                {" "}
                Get Started <ArrowRightIcon className="w-10 h-8" />
              </Button>
              <Button className="w-full text-white bg-gray-800">Explore</Button>
            </div>
          </div>
        </section>
        {/* // slider section */}
        <section className="bg-white w-full h-[500px] mb-16 opacity-70 flex justify-center items-center text-black md:px-20">
          Slider or image carasoul here
        </section>
        {/* // Benefits section */}
        <section className="flex max-xl:flex-col max-xl:h-auto w-full justify-center items-center  h-[500px] my-16">
          {/* Text Div */}
          <div className="flex flex-1 flex-col justify-start items-start gap-4 text-white pr-8 max-xl:mb-6">
            <h3 className="text-lg font-semibold opacity-60">Benefits</h3>
            <h1 className="text-4xl font-bold">Why Choose QuillGen?</h1>
            <p className="text-gray-300 text-muted-foreground">
              QuillGen empowers you to create, share, and remix AI-generated
              Thumbnails effortlessly.
            </p>
          </div>

          {/* Grid Div */}
          <div className="grid flex-1 grid-cols-1 lg:grid-cols-2 gap-2 p-4">
            {Benefits.map((benefit) => (
              <MagicCard
                key={benefit._id}
                className="flex flex-col items-center bg-black justify-center p-6 shadow-2xl border border-gray-800 text-white max-xl:max-w-[500px] w-full h-[230px] text-start cursor-pointer"
              >
                <div className="flex justify-between">
                  <Image
                    src={benefit.icon}
                    width={30}
                    height={30}
                    alt={benefit.title}
                    className=""
                  />
                  <h2 className="text-3xl opacity-20">{benefit._id}</h2>
                </div>
                <div className="text-start">
                  <h3 className="mt-4 text-2xl font-semibold ">{benefit.title}</h3>
                  <p className="mt-2 text-gray-400 text-md  text-muted-foreground">{benefit.description}</p>
                </div>
              </MagicCard>
            ))}
          </div>
        </section>
      </MaxWidthWrapper>
    </>
  );
};

export default page;
