import ProjectForm from "@/modules/home/ui/components/project-form";
import ProjectsList from "@/modules/home/ui/components/projects-list";
import Image from "next/image";


export default function Home() {

  return <div className="flex flex-col max-w-5xl mx-auto w-full">
    <section className="space-y-6 py-[16vh] 2xl:py-48">
      <div className="flex flex-col items-center gap-5">
        <Image 
        src="/logo.svg"
        alt ="Build-Mate"
        width={50}
        height={50}
        className="hidden md:block"
        />
        <h1 className="text-2xl md:text-5xl font-bold text-center">Build better with Build Mate</h1>
        <p className="text-lg md-text-xl text-muted-foreground text-center">Meet your new AI Co-Founder</p>
        <div className="max-w-3xl mx-auto w-full">
          <ProjectForm />
          </div> 
      </div>
    </section>
    <ProjectsList />

  </div>;
}
