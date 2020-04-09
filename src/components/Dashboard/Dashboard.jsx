import * as React from "react";
// import {Header, Footer, Container, SideMenu} from '../../templates/';
import Header from '../../templates/Header.jsx';
import Footer from '../../templates/Footer.jsx';
import SideMenu from '../../templates/SideMenu.jsx';
import Container from '../../templates/Container.jsx';
import './Dashboard.css';

class Dashboard extends React.Component {
    render() {
        return(
            <div>
                <Header />
                <section className="wrapper">
                    <div className="row">
                        <div className="col-md-2">
                            <SideMenu />
                        </div>
                        <div className="col-md-10 dashContent">
                            <Container />
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        );
    }
}

export default Dashboard;