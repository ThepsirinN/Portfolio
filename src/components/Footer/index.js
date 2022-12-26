const Footer = () => {
  const year = new Date();
  return (
    <footer>
      <hr />
      <span>Copyright © {year.getFullYear()} Thepsirin Nawngerndee</span>
    </footer>
  );
};

export default Footer;
