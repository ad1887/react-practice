import * as React from "react";

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="row">
                    <div className="col-md-9">
                        <h3>Dashboard</h3>
                    </div>
                    <div className="col-md-3 settings">
                        <div className="dropdown">
                            <button type="button" className="btn btn-default btn-sm" data-toggle="dropdown">
                                <i className='fas fa-cog'></i>
                            </button>
                            <div className="dropdown-menu">
                            <a className="dropdown-item" href="!#">Change Password</a>
                            <a className="dropdown-item" href="!#">Logout</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;