import ContactList from "./components/ContactList";

function Contacts({ contact }) {
  return (
    <main className="contact-layout">
      <section>
        <h1>Contacts</h1>
        <ContactList contact={contact} />
      </section>
    </main>
  );
}

export default Contacts;
