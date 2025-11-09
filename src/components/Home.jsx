import { BiLogoGithub, BiLogoGmail, BiLogoLinkedin } from "react-icons/bi";
import image from "../assets/image-test.jpg";

function Home() {
  return (
    <div
      id="home"
      className="flex min-h-screen w-full items-center justify-center pt-20 sm:pt-0"
    >
      <div className="flex flex-col items-center justify-center gap-8 p-5 text-center">
        <img
          src={image}
          alt=""
          className="w-[250px] sm:w-[300px] rounded-full"
        />
        <div className="space-y-1 sm-space-y-3">
          <h1
            className="bg-linear-to-r from-(--color-secondary) to-(--color-primary) 
          bg-clip-text text-4xl font-semibold text-transparent md:text-4xl lg:text-5xl"
          >
            José Rafael
          </h1>
          <h3
            className="bg-linear-to-r from-(--color-secondary) to-(--color-primary) 
          bg-clip-text text-xl font-semibold text-transparent md:text-2xl lg:text-3xl"
          >
            Desenvolvedor de Sitemas
          </h3>
          <p className="max-w-[700px] text-sm text-gray-500">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
            laborum aliquid architecto, corporis eligendi consequuntur accusamus
            commodi veniam natus deserunt culpa doloribus beatae incidunt
            repudiandae dignissimos laboriosam est iure et.
          </p>
        </div>
        <div className="flex gap-3">
          <a
            href="https://github.com/faelse"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <BiLogoGithub
              className="h-10 w-10 cursor-pointer rounded-full border-2 border-transparent bg-(--color-primary)
            p-2 text-white transition-all duration-200 hover:scale-110 hover:border-bg-(--color-primary)
          hover:bg-white hover:text-(--color-primary) md-h-12"
            />
          </a>

          <a
            href="https://www.linkedin.com/in/jos%C3%A9-rafael-24ba46313/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <BiLogoLinkedin
              className="h-10 w-10 cursor-pointer rounded-full border-2 border-transparent bg-(--color-primary)
            p-2 text-white transition-all duration-200 hover:scale-110 hover:border-bg-(--color-primary)
          hover:bg-white hover:text-(--color-primary) md-h-12"
            />
          </a>
          <a
            href="mailto:tech.rafaellima@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <BiLogoGmail
              className="h-10 w-10 cursor-pointer rounded-full border-2 border-transparent bg-(--color-primary)
            p-2 text-white transition-all duration-200 hover:scale-110 hover:border-bg-(--color-primary)
          hover:bg-white hover:text-(--color-primary) md-h-12"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
