function CardCenter({ children, cols }) {
  let colsGrid
  switch (cols) {
    case 2:
      colsGrid = 'grid-cols-card-2'
      break
    case 3:
      colsGrid = 'grid-cols-3'
      break
    default:
      colsGrid = 'grid-cols-1'
      break
  }
  
  return (
    <div className={`grid content-center h-full overflow-y-auto ${colsGrid}`}>
      { children }
    </div>
  )
}

export { CardCenter }