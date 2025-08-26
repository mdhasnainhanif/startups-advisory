import Image from "next/image";

export default function LogosLogoDesign() {
  const logos = [
    "logo29.webp",
    "logo28.webp",
    "logo27.webp",
    "logo26.webp",
    "logo25.webp",
    "logo24.webp",
    "logo04.webp",
    "logo03.webp",
    "logo02.webp",
    "logo01.webp",
  ];

  return (
    <section className="section-padding">
      <div className="container">
        <div className="row justify-center items-center">
          {logos.map((logo, index) => (
            <div key={index} className="for-logo">
              <img
                className="new-logo"
                src={`/assets/images/logos/${logo}`}
                alt={`Logo ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
