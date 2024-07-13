import Image from "next/image";
import Link from "next/link"
import Navbar from "@/components/global/navBar";
import { ContainerScroll } from "@/components/global/container-scroll-animation";
import { InfiniteMovingCards } from "@/components/global/infinte-moving-cards";
import { HeroParallax } from "@/components/global/connect-parallax";
import { LampComponent } from "@/components/global/lamp";
import { Button } from "@/components/ui/button";
import { clients ,products} from "@/lib/constant";
import { CardContainer ,CardBody,CardItem} from "@/components/global/3d-card";
// import {TextRevealCard} from "../components/global/AboutMe";
import {GlareCard} from '../components/global/GlareCard'
import { CheckIcon } from "lucide-react";

export default function Home() {



  return (
    <main  className="flex items-center justify-center flex-col">
      <Navbar />
      <section className="h-screen w-full  bg-neutral-950 rounded-md  !overflow-visible relative flex flex-col items-center  antialiased">
      <div className="absolute inset-0  h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_35%,#223_100%)]"></div>
        <div className="flex flex-col mt-[-100px] md:mt-[-50px]">
        
          <ContainerScroll
           titleComponent = {
             <div className = "flex items-center justify-center flex-col">
                  <Button
                    size={'lg'}
                    className="p-8 mb-8 md:mb-0 text-2xl w-full sm:w-fit border-t-2 rounded-full border-[#4D4D4D] bg-[#1F1F1F] hover:bg-white group transition-all flex items-center justify-center gap-4 hover:shadow-xl hover:shadow-neutral-500 duration-500"
                  >
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-500 to-neutral-600  md:text-center font-sans group-hover:bg-gradient-to-r group-hover:from-black goup-hover:to-black">
                      Start For Free Today
                    </span>
                  </Button>
                  <h1 className="text-5xl md:text-8xl  bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600 font-sans font-bold">
                    Automate Your Work With AutoZen
                  </h1>
             </div>
           }/>

        </div>
        
      </section>
      <InfiniteMovingCards
        className = "md:mt-[18rem] mt-[-100px]"
        items = {clients}
        direction = "right"
        speed = "slow"
      />

      <section>
        <HeroParallax products={products}/>
      </section>

      <section className = "mt-[-500px] md:mt-[100px]">
        <LampComponent/>
      </section>

      <div id = "pro" className = "flex flex-wrap items-center justify-center flex-col md:flex-row gap-8 -mt-64 mb-[7.2rem]">

      <CardContainer className="inter-var ">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full md:!w-[350px] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white "
              >
                Hobby
                <h2 className="text-6xl ">₹0</h2>
              </CardItem>
              <CardItem
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Get a glimpse of what our software is capable of. Just a heads
                up {"you'll"} never leave us after this!
                <ul className="my-4 flex flex-col gap-2">
                  <li className="flex items-center gap-2">
                    <CheckIcon />3 Free automations
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    100 tasks per month
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    Two-step Actions
                  </li>
                </ul>
              </CardItem>
              <div className="flex justify-between items-center mt-8">
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Try now →
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Get Started Now
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
      <CardContainer className = "inter-var">
           <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full md:!w-[350px] h-auto rounded-xl p-6 border">
            <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white "
                >
                  Pro Plan
                  <h2 className="text-6xl ">₹2000</h2>
                </CardItem>
                <CardItem
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  Get a glimpse of what our software is capable of. Just a heads
                  up {"you'll"} never leave us after this!
                  <ul className="my-4 flex flex-col gap-2">
                    <li className="flex items-center gap-2">
                      <CheckIcon />3 Free automations
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon />
                      100 tasks per month
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon />
                      Two-step Actions
                    </li>
                  </ul>
                </CardItem>
                <div className="flex justify-between items-center mt-8">
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                  >
                    Try now →
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                  >
                    Get Started Now
                  </CardItem>
                </div>
            </CardBody>
        </CardContainer>
      <CardContainer className = "inter-var">
           <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full md:!w-[350px] h-auto rounded-xl p-6 border">
            <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white "
                >
                  Unlimited
                  <h2 className="text-6xl ">₹8000</h2>
                </CardItem>
                <CardItem
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  Get a glimpse of what our software is capable of. Just a heads
                  up {"you'll"} never leave us after this!
                  <ul className="my-4 flex flex-col gap-2">
                    <li className="flex items-center gap-2">
                      <CheckIcon />3 Free automations
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon />
                      100 tasks per month
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckIcon />
                      Two-step Actions
                    </li>
                  </ul>
                </CardItem>
                <div className="flex justify-between items-center mt-8">
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                  >
                    Try now →
                  </CardItem>
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                  >
                    Get Started Now
                  </CardItem>
                </div>
            </CardBody>
        </CardContainer>

      </div>


      <div className = "about-me mb-[4.4rem] c-cursive-regular text-[1.6rem]">
        This is made by <span className = "text-[2.4em] ">Siddharth Saxena </span>
        {/* <TextRevealCard/> */}
      </div>
      <div className = " mb-[6.4rem]">
        <Link href = "https://www.linkedin.com/in/siddharth-saxena-902672202/" >
            <GlareCard>
              <div className = "my-[6.4rem] text-[2.0rem] flex justify-center items-center">
              <svg height="200px" width="200px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 291.319 291.319"  fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path style={{fill:'#0E76A8'}} d="M145.659,0c80.45,0,145.66,65.219,145.66,145.66s-65.21,145.659-145.66,145.659S0,226.1,0,145.66 S65.21,0,145.659,0z"></path> <path style={{fill:'FFFFFF'}} d="M82.079,200.136h27.275v-90.91H82.079V200.136z M188.338,106.077 c-13.237,0-25.081,4.834-33.483,15.504v-12.654H127.48v91.21h27.375v-49.324c0-10.424,9.55-20.593,21.512-20.593 s14.912,10.169,14.912,20.338v49.57h27.275v-51.6C218.553,112.686,201.584,106.077,188.338,106.077z M95.589,100.141 c7.538,0,13.656-6.118,13.656-13.656S103.127,72.83,95.589,72.83s-13.656,6.118-13.656,13.656S88.051,100.141,95.589,100.141z"></path> </g> </g></svg>
              </div>
            </GlareCard>
         </Link>
      </div>
      
    </main>
  );
}
