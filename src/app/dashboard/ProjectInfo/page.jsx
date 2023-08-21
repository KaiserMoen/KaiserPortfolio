
import PagesLayout from '../PagesLayout.jsx';
import ProjectData from "./projdata.json";
import InasTransientProj from "./InasTransientProj/page.jsx";


export default function ProjectInfo(){
    return(
        <PagesLayout>
            <InasTransientProj/>
        </PagesLayout>
    )
}
