
export const ResTxtSm = ({children}) => {
return (
  <p className="text-sm sm:text-md md:text-lg lg:text-xl xl:text-2xl">
    {children}
  </p>
)
} 

export const ResTxtMd = ({children}) => {
  return (
    <p className="text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
      {children}
    </p>
  )
} 

export const ResTxtLg = ({children}) => {
  return (
    <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
      {children}
    </p>
  )
} 

export const ResTxtXl = ({children}) => {
  return (
    <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
      {children}
    </p>
  )
} 