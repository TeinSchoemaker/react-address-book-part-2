import ContactListItem from "./ContactListItem"

function ContactList({ contact }) {
    return (
        <ul>
            {contact.map((person, index) => (
                <ContactListItem key={index} person={person} />
            ))}
        </ul>
    );
}

export default ContactList;