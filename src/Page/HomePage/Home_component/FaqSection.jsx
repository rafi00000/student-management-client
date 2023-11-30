const FaqSection = () => {
  return (
    <div className="my-10">
        <h1 className="text-5xl text-center font-bold">FAQ</h1>
<div className="join join-vertical w-full">
      <div className="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="my-accordion-4" checked="checked" />
        <div className="collapse-title text-xl font-medium">
          Why Choose Us
        </div>
        <div className="collapse-content">
          <p>We Are working with student management system for many years. besides we have so many experienced mentors</p>
        </div>
      </div>
      <div className="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="my-accordion-4" />
        <div className="collapse-title text-xl font-medium">
          What this website all about
        </div>
        <div className="collapse-content">
          <p>This website is about student class management system</p>
        </div>
      </div>
      <div className="collapse collapse-arrow join-item border border-base-300">
        <input type="radio" name="my-accordion-4" />
        <div className="collapse-title text-xl font-medium">
            Is this website trusted?
        </div>
        <div className="collapse-content">
          <p>this website is fully trusted. we have higher security system. we are responsible for your data</p>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default FaqSection;
