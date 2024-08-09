const Header = () => {
  return (
    <header className="fixed w-full bg-background-200 h-[56px] px-4 py-2 flex items-center place-content-between">
      <p className="text-primary-100">RoyAndresDev</p>
      <button>
        <img src="/menu.svg" alt="Menu icon" />
      </button>
    </header>
  )
}
export default Header
