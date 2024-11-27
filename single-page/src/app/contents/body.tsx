import SearhBar from "../components/SearhBar";
import Backgroud from "../components/backgroud";
import ProjectSection from "./(subContent)/projectSection";
import PromotionBox from "../components/promotionBox";
import InfoList from "./(subContent)/InfoList";
import LabelFooter from "../components/labelFooter";
import RenovateSection from "./(subContent)/renovateSection";
import FloatButtonHold from "../components/floatButton";
import Footer from "../components/Footer";

export default function Body() {
    return (
        <div className="">
            {/* Header */}
            <div className="relative w-full h-screen">
                <Backgroud/>
                <div className="absolute bottom-48 left-0 w-full flex justify-center p-4 z-10">
                    <SearhBar />
                </div>
                <div className="absolute bottom-28 left-0 w-full flex justify-center p-4 z-5">
                    <InfoList />
                </div>
            </div>
            {/* Body */}
            <div className="flex justify-center -mt-16 w-full">
                <PromotionBox/>
            </div>
            <div className="flex justify-center mt-16 w-full">
                <ProjectSection/>
            </div>
            <div className=" mt-16 w-full">
                <LabelFooter/>
            </div>
            <div className="flex justify-center mt-16 w-full">
                <RenovateSection/>
            </div>
            <FloatButtonHold/>
        </div>
    )
}