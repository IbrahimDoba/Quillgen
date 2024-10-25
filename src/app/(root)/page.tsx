"use client";
import React from "react";
import MaxWidthWrapper from "@/components/Max-width-wrapper";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { Accordion, AccordionItem, Button } from "@nextui-org/react";
import { MagicCard } from "@/components/ui/magic-card";
import { Benefits, FAQ, Features, Howto, Reviews } from "@/constants";
import Image from "next/image";
import Marquee from "@/components/ui/marquee";
import { ReviewCard } from "@/components/ui/ReviewCard";

const page = () => {
  const visibleReviews = Reviews.slice(0, 6);
  return (
    <>
      {/* // hero text section */}
      <MaxWidthWrapper>
        <section className="grid place-items-center py-12 md:py-16 lg:py-32 gap-6">
          <div
            className={cn(
              "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
            )}
          >
            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
              <span>✨ Introducing ThumbForgeAi Thumbmail Generator</span>
              <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </AnimatedShinyText>
          </div>
          <div className="max-w-[800px] ">
            <h1 className="text-6xl font-bold mb-4 text-center text-white">
              Unleash Your Creativity
              <br />
              with <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">ThumbForgeAi</span>
            </h1>
            <p className="text-xl text-white text-center max-w-[600px] mt-6 text-muted-foreground">
              Join the ThumbForgeAi community and start creating stunning AI art in
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
        <section className="bg-white w-full h-[500px] mb-16 opacity-70 flex justify-center items-center text-black md:px-20 rounded-xl">
          Slider or image carasoul here
        </section>
        {/* // Benefits section */}
        <section className="flex max-xl:flex-col max-xl:h-auto w-full justify-center items-center  h-[500px] my-24">
          {/* Text Div */}
          <div className="flex flex-1 flex-col justify-start items-start gap-4 text-white pr-8 max-xl:mb-6">
            <h3 className="text-lg font-semibold opacity-60">Benefits</h3>
            <h1 className="text-4xl font-bold">Why Choose ThumbForgeAi?</h1>
            <p className="text-gray-300 text-muted-foreground">
            ThumbForgeAi empowers you to create, share, and remix AI-generated
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
                  <h3 className="mt-4 text-2xl font-semibold ">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-gray-400 text-md  text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              </MagicCard>
            ))}
          </div>
        </section>
        <section className=" flex w-full flex-col items-center justify-center my-24">
          <div className="text-white text-center space-y-4 w-[60%]">
            <h3 className="text-md ">Features</h3>
            <h1 className="text-3xl font-semibold ">
              Explore ThumbForgeAi Features
            </h1>
            <p className="text-xl opacity-75">
              From intuitive tools to a supportive community, ThumbForgeAi has
              everything you need to create amazing AI Thumbnails.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8 ">
            {Features.map((feature) => (
              <MagicCard
                key={feature.id}
                className="flex flex-col items-center justify-center text-center  border border-gray-800  p-6 bg-black rounded-lg shadow-lg"
                gradientColor="#1F2937" // Optional gradient color
              >
                {/* Icon with border */}
                <div className="relative  flex justify-center items-center mb-4">
                  <div className="relative w-16 h-16 p-4 border-4 border-gray-800 rounded-full flex items-center justify-center bg-gray-900">
                    <Image
                      src={feature.icon}
                      alt={feature.title}
                      width={30}
                      height={30}
                    />
                  </div>
                </div>
                {/* Title */}
                <h3 className="mt-4 text-xl font-bold text-white">
                  {feature.title}
                </h3>
                {/* Description */}
                <p className="mt-2 text-gray-400">{feature.description}</p>
              </MagicCard>
            ))}
          </div>
        </section>
        <section className="flex flex-col justify-center items-center">
          <div className="text-white text-center space-y-4 w-[60%]">
            <h3 className="text-md ">How To Do</h3>
            <h1 className="text-3xl font-semibold ">
              How to Create Thumbnails with ThumbForgeAi
            </h1>
            <p className="text-xl opacity-75">
              Creating Thumbnails with ThumbForgeAi is simple and fun. Follow
              these steps to start your creative journey.
            </p>
          </div>
          <div className="mt-8 w-full text-white">
            <Accordion variant="splitted">
              {Howto.map((step) => (
                <AccordionItem
                  className="bg-gray-300 text-gray-900 my-2"
                  key={step.id}
                  aria-label={`Step ${step.id}`}
                  title={step.title}
                  subtitle={
                    <span>
                      <strong> Press to expand</strong>
                    </span>
                  }
                >
                  {step.desc}
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
        <section className="flex flex-col justify-center items-center my-24">
          <div className="text-white text-center space-y-4 w-[60%] mb-16">
            <h3 className="text-md ">How To Do</h3>
            <h1 className="text-3xl font-semibold ">
              How to Create Thumbnails with ThumbForgeAi
            </h1>
            <p className="text-xl opacity-75">
              Creating Thumbnails with ThumbForgeAi is simple and fun. Follow
              these steps to start your creative journey.
            </p>
          </div>
          <div className="relative flex h-[400px] w-full max-w-full flex-col items-center justify-center overflow-hidden rounded-lg border border-gray-700 bg-transparent">
            {/* Single marquee row */}
            <Marquee
              pauseOnHover
              className="w-full space-x-6 [--duration:30s] max-w-full"
            >
              {visibleReviews.map((review) => (
                <ReviewCard key={review.username} {...review} />
              ))}
            </Marquee>

            {/* Gradients for fade effect */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-black to-transparent"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-black to-transparent"></div>
          </div>
        </section>
        <section className="flex flex-col justify-center items-center my-24">
        <div className="text-white text-center space-y-4 w-[60%] mb-16">
            <h3 className="text-md ">How To Do</h3>
            <h1 className="text-3xl font-semibold ">
              How to Create Thumbnails with ThumbForgeAi
            </h1>
            <p className="text-xl opacity-75">
              Creating Thumbnails with ThumbForgeAi is simple and fun. Follow
              these steps to start your creative journey.
            </p>
          </div>
          <div className="mt-8 w-[50%] text-white">
            <Accordion variant="splitted">
              {FAQ.map((step) => (
                <AccordionItem
                  className="bg-gray-300 text-gray-900 my-2"
                  key={step.id}
                  aria-label={`Step ${step.id}`}
                  title={step.question}
                  subtitle={
                    <span>
                      <strong> Press to expand</strong>
                    </span>
                  }
                >
                  {step.answer}
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </MaxWidthWrapper>
    </>
  );
};

export default page;
