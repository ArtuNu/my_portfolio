export default function Projects({
  name,
  image,
  url,
  description,
  tecnologies,
  github,
}) {
  return (
    <>
        <div className="Project">
          <div className="img-container">
            <img src={image} alt="" />
          </div>
          <a href={github} className="github-link" target={"_blank"}>
            <i class="fa-brands fa-github"></i>
          </a>
          <a href={url} target="_blank" className="project-info">
            <h1>{name}</h1>
            <p>{description}</p>
            <i>{tecnologies}</i>
          </a>
      </div>
    </>
  );
}
