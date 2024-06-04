const Contact = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold p-4 m-4">Contact us</h1>
      <div className="p-4 m-4">
        <form>
          <input
            type="text"
            className="border border-black p-2 m-2"
            placeholder="name"
          />
          <input
            type="text"
            className="border border-black p-2 m-2"
            placeholder="message"
          />
          <button className="border border-black bg-gray-200 rounded-lg p-2 m-2">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
