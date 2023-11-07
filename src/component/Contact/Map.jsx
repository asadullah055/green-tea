const Map = () => {
  return (
    <div>
      <div className="max-w-6xl text mx-auto my-8">
        <div className="flex justify-center">
          <div className="w-1/2">
            <iframe
              className=""
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d79490.73196970821!2d-0.27608524030246645!3d51.49330078368709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sbd!4v1699332691864!5m2!1sen!2sbd"
              width="600"
              height="250"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
