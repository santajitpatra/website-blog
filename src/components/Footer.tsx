const FooterMenu = () => {
    return (
      <ul className="flex justify-center space-x-5 text-green-500 font-medium">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    );
  };
  
  

  const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-green-500 py-5 px-5">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <FooterMenu />
          <p className="mt-5 md:mt-0 text-sm font-medium">
            © {currentYear} Santajit&apos;s Daily Blog. All rights reserved.
          </p>
        </div>
      </footer>
    )
  }
  
  export default Footer
  