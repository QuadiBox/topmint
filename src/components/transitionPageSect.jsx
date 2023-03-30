import React from 'react'

const TransitionPageSect = ({ Determiner }) => {
    const elements = [1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,8,9,0,1,2,3,4,5,6];
    const letters = ["⚷", "☉", "♄", "φ", "⚶", "♅", "♆", "♃", "⚸", "☾", "🜍", "℞", "♉︎", "♑︎", "♐︎", "♇", "⛢", "☿",  "⚵", "⚴", "❈", "⛎︎"];

  return (
    <div className='transSingleSect'>
        {elements.map((elem, idx) => (
            <span key={idx}>{letters[Determiner - idx > 0 ? Determiner - idx : idx] ? letters[idx] : letters[idx - 23] }</span>
        ))}
    </div>
  )
}

export default TransitionPageSect
