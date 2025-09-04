import { Link } from "react-router-dom";

function ContactListItem({ contact }) {
  return (
    <li>
      <h3>
        <Link to={"/contact/${contact.name}"} >
        {contact.firstName} {contact.lastName}
        </Link>
      </h3>
    </li>
  );
}

export default ContactListItem;
