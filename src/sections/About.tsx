const About = () => {
  return (
    <div id="About" className="px-4 lg:px-6 space-y-6 lg:flex gap-6 items-center min-h-full place-content-center">
      <div className="space-y-6 lg:order-2">
        <div className="mt-4 space-y-2">
          <p className="text-background-300 tracking-[0.20rem] text-sm">- MI NOMBRE ES</p>
          <h1 className="text-2xl lg:text-4xl font-medium text-background-300"><span className="text-primary-100">Roy Huaman</span> - <span className="text-complementary-100">Frontend Developer</span></h1>
          <p className="text-gray-100 lg:max-w-[500px]">
            ¡Bienvenido! Soy un entusiasta de la programación. Desde siempre me ha fascinado entender cómo funciona el software.
            Al codificar, siento que tengo la libertad de explotar al máximo mi creatividad, creando código sólido y profesional.
            Me encanta mostrar los resultados a los usuarios, lo que me apasiona de esta área. Estoy comprometido con sacar
            adelante mis proyectos y que estos sean reconocidos.
          </p>
        </div>
        <div className="flex gap-2">
          <img src="/github.svg" alt="Github Icon" />
          <img src="/linkedin.svg" alt="LinkedIn Icon" />
        </div>
        <button className="bg-primary-100 text-background-100 w-full lg:w-auto rounded-lg py-2 px-2 font-medium flex place-content-center gap-1">
          <img src="/doc.svg" alt="CV Icon" /> Conoce mi CV
        </button>
        <div className="flex gap-4 rounded border py-4 border-complementary-100 place-content-center relative">
          <div className="absolute left-0 top-0 bg-complementary-100 text-gray-100 px-2 rounded-br">
            <p>Main Skills</p>
          </div>
          <img src="/javascript.svg" alt="Javascript Icon" />
          <img src="/react.svg" alt="React Icon" />
          <img src="/figma.svg" alt="Figma Icon" />
          <img src="/html.svg" alt="HTML Icon" />
          <img src="/tailwind.svg" alt="Tailwind Icon" />
        </div>
      </div>
      <div className="border-2 border-background-300 overflow-hidden rounded relative lg:min-w-[500px]">
        <div className="bg-background-300 absolute w-full p-2 flex gap-1">
          <div className="bg-background-200 rounded-full size-[10px]"></div>
          <div className="bg-background-200 rounded-full size-[10px]"></div>
          <div className="bg-background-200 rounded-full size-[10px]"></div>
        </div>
        <img className="w-full" src="avatar.png" alt="Roy Photo" />
      </div>
    </div>
  )
}
export default About
