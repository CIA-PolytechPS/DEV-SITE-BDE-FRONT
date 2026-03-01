import { FC } from "react";
import Markdown from "react-markdown";
import { Project } from "@/shared/models/project.model";

interface ProjectCardProps {
    project: Project;
}

const ProjectCardComp: FC = (props : ProjectCardProps) => {
    return (
        <div className="bg-secondary shadow-md rounded-lg p-6 mx-4 flex flex-col md:flex-row items-start gap-6">
            <div className="flex flex-1 flex-col gap-y-4">
                <h2 className="text-2xl font-bold mb-4 text-primary">{props.project.title}</h2>
                <Markdown class="text-text-main mb-4">{props.project.description}</Markdown>
            </div>

            <div className="w-64 h-64 shrink-0 rounded-2xl overflow-hidden">
                <img src={props.project.image} alt={props.project.title} className="w-full h-auto rounded-lg" />
            </div>
        </div>
    );
};

export default ProjectCardComp;
