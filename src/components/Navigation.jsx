import { Link } from "react-router-dom";

function Navigation() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="contact/">Contact List</Link>
                </li>
                <li>
                    <Link to="contact/addContact">Add New Contact</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navigation;