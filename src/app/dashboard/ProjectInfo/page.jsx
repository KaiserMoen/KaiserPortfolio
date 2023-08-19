'use client'
import PagesLayout from '../PagesLayout.jsx';
import ProjectData from "./projdata.json";
import React, { useState } from 'react';


var projectName = "";
export function setProjectName({projName}){
    projectName = projName; 
    console.log(projectName)
}

export default function ProjectInfo(){
    const project = ProjectData[projectName];
    if (!project) {
        return <PagesLayout>Project not found.</PagesLayout>;
      }
    return(
        <PagesLayout>
            <div>
                <h1>{projectName}</h1>
                <p>About: {project.About}</p>
                <p>Languages: {project.Languages}</p>
            </div>
        </PagesLayout>
    )
}
