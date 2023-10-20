const Footer = () => {
  return (
    <div className="bg-[url('https://svgshare.com/i/ycx.svg')] bg-no-repeat bg-center bg-cover mt-10  ">
      <footer className="footer mt-10 text-base-content container mx-auto">
        <aside>
          <div className="flex items-center">
            <img
              className=" w-14 rounded-full"
              src="https://i.ibb.co/NyFtB8H/logo.png"
              alt=""
            />
            <a className=" text-2xl normal-case font-semibold ml-2">
              StarShoppe
            </a>
          </div>
          <p>
            StarShoppe Entertainment Ltd.
            <br />
            13/3, Block A, Lalmatia, Dhaka 1207
          </p>
        </aside>
        <nav>
          <header className="footer-title">Services</header>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
