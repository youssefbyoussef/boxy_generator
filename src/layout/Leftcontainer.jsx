import { useState } from "react";
import Boxpanel from "./boxpanel/Boxpanel";
import Shadowlist from "./shadowList/Shadowlist";

export default function Leftcontainer() {
    const [tabs, setTabs] = useState(0);
    const tabslist = [
        { name: "shadow", component: <Shadowlist /> },
        { name: "boxPanel", component: <Boxpanel /> }
    ];

    return (
        <div className="relative mt-20 w-[600px] h-[550px] border rounded-b rounded-tr border-gray-300 shadow-xl bg-gray-50 md:mt-0">
            <div className="flex absolute-translate-y-full -left-[ipx]">
                {tabslist.map((obj, index) => (
                    <button 
                        key={index}
                        onClick={() => setTabs(index)}
                        className="min-w-{125px} py-2 px-3 mr-4 
                        font-bold border-t border-x
                        border-gray-300
                        bg-slate-50
                        hover:bg-slate-200
                        text-slate-700 rounded-t 
                        focus:outline-none focus:ring-2 
                        ring-inset focus:ring-blue-300"
                    >
                        {obj.name}
                    </button>
                ))}
            </div>
            <div>
                {tabslist[tabs].component}
            </div>
            
        </div>
    );
}
