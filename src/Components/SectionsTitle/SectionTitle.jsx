const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className=" md:w-3/12 mx-auto">
      <p className="text-yellow-600 mb-4 bold italic text-center">
        ---{subHeading}---
      </p>
      <h3 className="text-4xl uppercase border-y-4 py-4 text-center">
        {heading}
      </h3>
    </div>
  );
};

export default SectionTitle;
