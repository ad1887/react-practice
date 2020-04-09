import * as React from "react";

class SideMenu extends React.Component {
    render() {
        return(
            <aside>
                <ul>
                    <li><a href="/add-user">Add User</a></li>
                    <li><a href="!#">Menu 2</a></li>
                    <li><a href="!#">Menu 3</a></li>
                    <li><a href="!#">Menu 4</a></li>
                </ul>
            </aside>
        );
    }
}
export default SideMenu;