const AddClass = () => {
  const handleAddClass = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form
        onSubmit={handleAddClass}
        className="w-1/2 mx-auto my-5 border p-5 rounded-md"
      >
        <p className="text-center text-4xl font-bold uppercase underline">
          Add Class
        </p>
        <div className="form-control">
          <label>Title</label>
          <input type="text" className="input input-bordered" />
        </div>

        <div className="form-control">
          <label>Name</label>
          <input type="text" className="input input-bordered" />
        </div>

        <div className="form-control">
          <label>Email</label>
          <input type="email" className="input input-bordered" />
        </div>

        <div className="form-control">
          <label>Price</label>
          <input type="number" className="input input-bordered" />
        </div>

        <div className="form-control">
          <label>Description</label>
          <textarea
            name="description"
            cols="30"
            rows="10"
            className="input input-bordered p-2"
          ></textarea>
        </div>

        <div className="form-control">
          <label>Image</label>
          <input type="text" className="input input-bordered" />
        </div>
        <p className="my-3 text-center">
          <button className="btn btn-outline">Add Class</button>
        </p>
      </form>
    </div>
  );
};

export default AddClass;
