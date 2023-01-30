import "../styles/footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <div>
        <a
          href="https://wa.me/595972235011?text=¡Hola%20Arturo!%20"
          target={"_blank"}
        >
          <i className="fa-brands fa-whatsapp"></i>
          0972-235-011
        </a>
      </div>
      <div>
        <a href="mailto:arturonunez020@gmail.com" target={"_blank"}>
          <i className="fa-regular fa-envelope"></i>
          arturonunez020@gmail.com
        </a>
      </div>
      <div>
        <a href="https://github.com/ArtuNu" target={"_blank"}>
        <i className="fa-brands fa-github"></i>
          ArtuNu
        </a>
      </div>
    </div>
  );
}
