import RickAndMortyImage from '../assets/Rick_and_Morty.svg';


function Header() {
  return (
   <header className="flex items-center justify-center w-2/4 mx-auto py-8">
   <img src={RickAndMortyImage} alt="logo Rick y Morty" />


   </header>
  )
}

export default Header