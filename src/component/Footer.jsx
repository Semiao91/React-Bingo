export const Footer = ({link, text, inc}) => {
  return (
    <footer className="bg-[#0052cc] text-white flex justify-evenly p-4">
      <div className="container max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">&copy; {inc}</p>
        <nav className="flex gap-4 md:gap-6">
          <a href={link} className="text-sm hover:underline underline-offset-4" >
            {text}
          </a>
        </nav>
      </div>
    </footer>
  )
}