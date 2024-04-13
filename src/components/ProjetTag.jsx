import React from 'react'

const ProjetTag = ({name, onClick, isSelected}) => {
    const buttonStyles = isSelected ?
    "bg-white text-dark border-white hover:text-second"
    :
    "bg-slate-700 hover:text-second"
  return (
    <div>
      <button className={`${buttonStyles} rounded-full border-slate-50 cursor-pointer px-4 xl:px-6 py-3 `}
      onClick={() => onClick(name)}>
        {name}
      </button>
    </div>
  )
}

export default ProjetTag
