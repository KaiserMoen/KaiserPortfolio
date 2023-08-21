
import PagesLayout from '../../PagesLayout.jsx';
import jsonData from "../../ProjectInfo/projdata.json";
import ProjectInfoTemp from "../ProjectInfoTemp.jsx";
import Image from 'next/image';
export default function Plantaea(){
    const project = jsonData.grade;
    if (!project) {
        return <PagesLayout>Project not found.</PagesLayout>;
      }
    return(
        <PagesLayout>
                <ProjectInfoTemp>
                    <div className='projectDetails'>
                        <h1>Predicting College Students Optimal Course Load to Achieve Higher Academic Grades</h1>
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
                    </div>
                </ProjectInfoTemp>
        </PagesLayout>
    )
}
