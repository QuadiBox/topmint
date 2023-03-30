
export const handleToggles = (e, vlad) => {

  if ( e.target.classList[0] === "hamburger" ) {
      vlad(prev => !prev);
  } else{
      vlad(false)
  }
}