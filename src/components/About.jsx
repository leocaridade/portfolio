import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

export default function About() {
  return (
    <main className="flex flex-col mt-12 justify-center items-center p-10 min-h-screen">
      <section className="text-center">
        <div>
          <h1 className="font-bold text-2xl ">
            HELLO, I AM LEONARDO
          </h1>
          <p className="mt-8">
            A passionate web developer specializing in creating responsive and dynamic websites. With a keen eye for design and a commitment to delivering high-quality solutions, I strive to provide exceptional user experiences while adhering to industry best practices.
          </p>
        </div>
      
    </section>
    <section className="text-4xl flex justify-center gap-4 p-5">
      <AiFillLinkedin className="" />
      <AiFillGithub className="" />
    </section>
    </main>
    
  )
}