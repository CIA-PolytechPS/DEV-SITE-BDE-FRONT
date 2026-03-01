import { FC, useEffect, useState } from "react";
import { Project } from "@/shared/models/project.model";
import { getAllProjects } from "@/api/project.api";
import ProjectCardComp from "./projectcard.component";

const ProjectSectionComp: FC = () => {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        getAllProjects()
            .then(setProjects)
            .catch(console.error);
    }, []);

    if (projects.length === 0) {
        return (
            <div className="container mx-auto px-4 py-8">
                <p className="text-center text-gray-600">Aucun projet à afficher pour le moment.</p>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="underline underline-offset-3 text-5xl font-semibold mb-8">Nos Projets</h1>

            <ul>
                {
                    projects.map((project) => {
                        return (
                            <li key={project.id} className="mb-6 last:mb-0">
                                <ProjectCardComp project={project} />
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
};

export default ProjectSectionComp;
      
