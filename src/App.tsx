import {Ban, Bell, Info} from "lucide-react";
import Alerts from "./components/ui/Alert/Alerts.tsx";

const App = () => {
    return (
        <div>
            <Alerts type={"alert-error"} icon={<Ban size={20}/>}
                    title={"Something went wrong"}
            >
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, <a href="/">Test Link</a> voluptatum
                </p>
            </Alerts>
            <Alerts type={"alert-warning"} icon={<Info size={20}/>} title={"Something went wrong"}
                    description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum " +
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."}/>
            <Alerts type={"alert-info"} icon={<Info size={20}/>} title={"Something went wrong"}
                    description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum " +
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."}/>
            <Alerts type={"alert-success"} icon={<Ban size={20}/>} title={"Something went wrong"}
                    description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum " +
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."}/>
            <Alerts type={"alert-default"} icon={<Bell size={20}/>} title={"Something went wrong"}
                    description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum " +
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."}/>
        </div>

    );
}

export default App;
