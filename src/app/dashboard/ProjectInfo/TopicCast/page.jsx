
import PagesLayout from '../../PagesLayout.jsx';
import jsonData from "../../ProjectInfo/projdata.json";
import ProjectInfoTemp from "../ProjectInfoTemp.jsx";
import Image from 'next/image';
import home from "../../../../../public/Topicast/Home.png";
import res from "../../../../../public/Topicast/res.png";
export default function Plantaea(){
    const project = jsonData.topicast;
    if (!project) {
        return <PagesLayout>Project not found.</PagesLayout>;
      }
    return(
        <PagesLayout>
                <ProjectInfoTemp>
                    <div className='projectDetails'>
                        <h1>TopiCast: Topic Modelling for Decision-Making Insights from Baguio News Articles</h1>
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
                        <div><Image src={res} alt=''/> </div>

                    </div>
                </ProjectInfoTemp>
        </PagesLayout>
    )
}
