
import PagesLayout from '../../PagesLayout.jsx';
import jsonData from "../../ProjectInfo/projdata.json";
import ProjectInfoTemp from "../ProjectInfoTemp.jsx";
import Image from 'next/image';
import home from "../../../../../public/InasImages/HomePage.png";
import services from "../../../../../public/InasImages/Services.png";
import gallery from "../../../../../public/InasImages/Galery.png";
import contact from "../../../../../public/InasImages/Contacts.png";
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

                        
                        <ul>
                        <h4>Languages Used: </h4>
                            {project.Languages.map((language, index) => (
                            <li key={index}>{language}</li>
                            ))}
                        </ul>
                    </div>
                    <div className='projectImages'>
                        <div><Image src={home} alt=''/> </div>
                        <div><Image src={services} alt=''/> </div>
                        <div><Image src={gallery} alt=''/> </div>
                        <div><Image src={contact} alt=''/> </div>
      
                    </div>
                </ProjectInfoTemp>
        </PagesLayout>
    )
}
