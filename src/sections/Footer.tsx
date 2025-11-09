function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="dark:text-white py-2 md:py-4 mt-auto">
      <div className="w-full max-w-7xl 2xl:max-w-[85%] mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center">
          <h2 className="text-nowrap text-md md:text-lg p-2 text-black dark:text-white">
            Made by Vignesh 💞
          </h2>
          <div className="text-center md:text-right p-2">
            <h4 className="text-nowrap text-sm md:text-md mb-1 text-black dark:text-white">
              ©{year} Vignesh A S. All rights reserved.
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
