import React from "react";
import { data } from "../data/projects";

export default function Projects() {
  return (
    <>
        {data.map((data) => (
          <div className="Project">
            <div className="img-container">
              <img src={data.image} alt="" />
            </div>
            <a href={data.github} className="github-link" target={"_blank"}>
              <i className="fa-brands fa-github"></i>
            </a>
            <a href={data.url} target="_blank" className="project-info">
              <h1>{data.name}</h1>
              <p>{data.description}</p>
              <i>{data.tecnologies}</i>
            </a>
          </div>
        ))}
    </>
  );
}
