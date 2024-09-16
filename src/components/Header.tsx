const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-background-200 h-[56px] px-4 py-2 z-10 flex justify-center">
      <div className="relative container mx-auto flex items-center place-content-between lg:place-content-center">
        <p className="text-primary-100 font-serif lg:absolute left-0">RoyAndresDev</p>
        <div className="hidden lg:flex gap-3">
          <a href="#" className="text-primary-100 hover:text-primary-100">
            Acerca de mí
          </a>
          <a href="#" className="text-gray-100 hover:text-primary-100">
            Proyectos
          </a>
          <a href="#" className="text-gray-100 hover:text-primary-100">
            Experiencia
          </a>
          <a href="#" className="text-gray-100 hover:text-primary-100">
            Habilidades
          </a>
          <a href="#" className="text-gray-100 hover:text-primary-100">
            Contacto
          </a>
        </div>
        <button className="lg:hidden">
          <img src="/menu.svg" alt="Menu icon" />
        </button>
      </div>
    </header>
  )
}
export default Header
