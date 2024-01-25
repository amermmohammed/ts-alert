import "./index.scss";
import {X} from "lucide-react";
import {ReactNode} from "react";
import {AlertTypes} from "../../../types";
interface IProps {
    type: AlertTypes;
    icon: ReactNode;
    title: string;
    description?: string;
    children?: ReactNode;
}
const Alerts = ({type = "alert-error", icon, title, description, children}: IProps) => {
    return (
        <div className={type} role="alert">
            <div className="alert-header">
                <div className="alert-title">
                   <span>
                   {icon}
                   </span>
                    <h4>{title}</h4>
                </div>
                <X className="close" size={20}/>
            </div>

            {children? children : <p>{description}</p>}

        </div>
    );
}

export default Alerts;