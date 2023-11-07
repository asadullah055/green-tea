const Message = () => {
  return (
    <div>
      <div className="max-w-6xl text mx-auto my-8">
        <div className="flex justify-center">
          <div className="w-1/2">
            <h1 className="font-semibold text-3xl my-5">Leave us a message</h1>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority Lorem Ipsum available.
            </p>
            <div className="flex gap-5 my-5">
              <input
                className="border w-1/2 p-3 outline-0 rounded"
                type="text"
                placeholder="Your Name"
              />
              <input
                className="border w-1/2 p-3 outline-0 rounded"
                type="email"
                placeholder="Your Email"
              />
            </div>
            <input
              className="border w-full p-3 outline-0 rounded"
              type="text"
              placeholder="Subject"
            />
            <textarea
              className="w-full outline-0 border my-5"
              placeholder="Your Message"
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
            <button className="bg-custom text-white p-3 rounded">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
