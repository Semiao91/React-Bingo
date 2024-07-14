export const Footer = () => {
  return (
    <footer className="bg-[#0052cc] text-white flex justify-between p-4">
      <div className="container max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">&copy; 2024 Semiao Inc. All rights reserved.</p>
        <nav className="flex gap-4 md:gap-6">
          <a href="#" className="text-sm hover:underline underline-offset-4" >
            Terms of Service
          </a>
          <a href="#" className="text-sm hover:underline underline-offset-4" >
            Privacy Policy
          </a>
          <a href="#" className="text-sm hover:underline underline-offset-4" >
            Contact
          </a>
        </nav>
      </div>
    </footer>
  )
}