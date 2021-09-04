import React, {useState} from 'react';
import SibeBarProject from '../../Components/SideBarProject';
import ViewProject from '../../Components/ViewProject';


export default function Project({Projects}) {

    const [selectProject,setSelectProject] = useState(1);

    return (
        <div id="project">
            <div className="container">
                <div className="project-colums">
                    <SibeBarProject Projects={Projects} setSelectProject={setSelectProject} selectProject={selectProject}/>
                    <ViewProject Projects={Projects} selectProject={selectProject}/>
                </div>
            </div>
        </div>
    );
}