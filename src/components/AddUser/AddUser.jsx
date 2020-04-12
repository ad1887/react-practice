import * as React from "react";
import Header from '../../templates/Header.jsx';
import Footer from '../../templates/Footer.jsx';
import SideMenu from '../../templates/SideMenu.jsx';
import UserRegForm from '../../templates/UserRegForm.jsx';
import './AddUser.css';
import { ApolloProvider, useQuery } from '@apollo/react-hooks';
import { ApolloClient, HttpLink, InMemoryCache, gql } from '@apollo/client';
import { Row, Col, Table } from 'react-bootstrap/';

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
        uri: 'http://localhost:4000/graphql',
    })
});
// const currency = "USD";  
// const EXCHANGE_RATES = gql`
// query getRates($currency: String!)
//   {
//     rates(currency: $currency) {
//       currency
//       rate
//     }
//   }
// `;

// function ExchangeRates({ currency }) {
//   const { loading, error, data } = useQuery(EXCHANGE_RATES, {
//     variables: { currency }
//   });

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error :(</p>;

//   return data.rates.map(({ currency, rate }) => (
//     <div key={currency}>
//       <p>
//         {currency}: {rate}
//       </p>
//     </div>
//   ));
// }

const GET_USERS = gql`
query getAllUser
  {
    allUser {
      firstname
      lastname
      username
      password
      email
      phone
    }
  }
`;

function UsersList() {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return <tr><td>Loading...</td></tr>;
  if (error) return <tr><td>Error :(</td></tr>;
  let srNo = 0;
  return data.allUser.map(({ firstname, lastname, username, email, phone }) => (
    <tr key={++srNo}>
      <td>{srNo}</td>
      <td>{firstname}</td>
      <td>{lastname}</td>
      <td>{username}</td>
      <td>{email}</td>
      <td>{phone}</td>
    </tr>
  ));
}

class AddUser extends React.Component {
    render() {
        return(
            <div>
                <Header />
                <section className="wrapper">
                    <section>
                      <div className="row">
                        <div className="col-xs-4 col-md-3 col-lg-2">
                          <SideMenu />
                        </div>
                        <div className="col-xs-8 col-md-9 col-lg-10">
                          <ApolloProvider client={client}>
                            <UserRegForm />
                          </ApolloProvider>
                        </div>
                      </div>
                    </section>
                    <section>
                      <Row>
                        <Col>
                          <ApolloProvider client={client}>
                          <Table striped bordered hover>
                            <thead>
                              <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Phone</th>
                              </tr>
                            </thead>
                            <tbody>
                              <UsersList />
                            </tbody>
                          </Table>
                          </ApolloProvider>
                        </Col>
                      </Row>
                    </section>
                </section>
                <Footer />
            </div>
        );
    }
}

export default AddUser;