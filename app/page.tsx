import MeetLab from "@/components/MeetLab"
import PageHero from "@/components/PageHero"
import ProjectsSection from "@/components/ProjectsSection"
import WorkedWith from "@/components/WorkedWith"
import ResearchAreasParent from "@/components/ResearchAreasParent"
import Navbar from "@/components/Navbar"

export default function Home() {
    return (
        <>
            <Navbar />
            <PageHero title="HUMAN-AWARE PLANNING AND INTERACTION LAB" />
            <div className="w-full h-8 bg-[#c69b3d]"></div>
            <ResearchAreasParent />
            <MeetLab />
            <ProjectsSection />
            <WorkedWith />
        </>
    )
}
