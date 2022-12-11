const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-center sm:w-[90%] m-auto my-8">
        <div>
          <h2 className="text-4xl uppercase font-bold text-blue-700">TechyStar</h2>
          <p className="text-xl my-2 font-semibold  text-gray-700">@all right reserved</p>
        </div>
        <div className="text-center">
          <div className="mb-2">
            <h2 className="text-3xl font-light">Follow Us</h2>
          </div>
          <div className=" font-cursive text-md">
            <h2>Youtube</h2>
            <h2>Instagram</h2>
            <h2>GitHub</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
