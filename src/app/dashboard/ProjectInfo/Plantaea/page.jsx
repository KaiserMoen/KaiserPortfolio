
import PagesLayout from '../../PagesLayout.jsx';
import jsonData from "../../ProjectInfo/projdata.json";
import ProjectInfoTemp from "../ProjectInfoTemp.jsx";
import Image from 'next/image';
import home from "../../../../../public/PlantaeaFinalDesign/Homescreen.png";
import bor from "../../../../../public/PlantaeaFinalDesign/onBoarding.png";
import pd2 from "../../../../../public/PlantaeaFinalDesign/PlantDetailsScreen-2.png";
import pd3 from "../../../../../public/PlantaeaFinalDesign/PlantDetailsScreen-3.png";
import pl from "../../../../../public/PlantaeaFinalDesign/PlantLibrary-All.png";
export default function Plantaea(){
    const project = jsonData.plantaea;
    if (!project) {
        return <PagesLayout>Project not found.</PagesLayout>;
      }
    return(
        <PagesLayout>
                <ProjectInfoTemp>
                    <div className='projectDetails'>
                        <h1>Plantaea: Mobile Application for Philippine Ethnobotany</h1>
                        <h3>{project.About}</h3>
                        {project.About.map((about,index) =>(
                            <h3 key = {index}>{about}</h3>
                        )
                        )}
                        <ul>
                        <h4>Languages Used: </h4>
                            {project.Languages.map((language, index) => (
                            <li key={index}>{language}</li>
                            ))}
                        </ul>
                    </div>
                    <div className='projectImages'>
                        <div><Image src={home} alt=''/> </div>
                        <div><Image src={bor} alt=''/> </div>
                        <div><Image src={pd2} alt=''/> </div>
                        <div><Image src={pd3} alt=''/> </div>
                        <div><Image src={pl} alt=''/> </div>
                    </div>
                </ProjectInfoTemp>
        </PagesLayout>
    )
}
