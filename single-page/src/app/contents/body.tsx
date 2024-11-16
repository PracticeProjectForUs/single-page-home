import SearhBar from "../components/SearhBar";
import Backgroud from "../components/backgroud";
import InfoList from "./InfoList";

export default function Body() {
    return (
            <div className="relative w-full h-screen">
                <Backgroud/>
                <div className="absolute bottom-48 left-0 w-full flex justify-center p-4 z-10">
                    <SearhBar />
                </div>
                <div className="absolute bottom-28 left-0 w-full flex justify-center p-4 z-5">
                    <InfoList />
                </div>
            </div>
    )
}