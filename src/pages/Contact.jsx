import Address from "../component/Contact/Address";
import AllLocation from "../component/Contact/AllLocation";
import Map from "../component/Contact/Map";
import Message from "../component/Contact/Message";

const Contact = () => {
  return (
    <div>
      <Message></Message>
      <Address></Address>
      <Map></Map>
      <AllLocation></AllLocation>
    </div>
  );
};

export default Contact;
