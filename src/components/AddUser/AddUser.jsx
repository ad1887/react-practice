import * as React from "react";
import Header from '../../templates/Header.jsx';
import Footer from '../../templates/Footer.jsx';
import SideMenu from '../../templates/SideMenu.jsx';
import UserRegForm from '../../templates/UserRegForm.jsx';
import './AddUser.css';
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache, gql, useQuery } from '@apollo/client';
import { Row, Col, Table } from 'react-bootstrap/';

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
        uri: 'http://localhost:4000/graphql',
    })
});
const currency = "USD";  
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

const EXCHANGE_RATES = gql`
query getAllUser
  {
    allUser {
      firstname
      lastname
      username
      email
      phone
    }
  }
`;

function ExchangeRates() {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  let srNo = 1;
  return data.allUser.map(({ firstname, lastname, username, email, phone }) => (
    <tr>
      <td>{srNo++}</td>
      <td>{firstname}</td>
      <td>{lastname}</td>
      <td>{username}</td>
      <td>{email}</td>
      <td>{phone}</td>
    </tr>
  ));
}

class AddUser extends React.Component {
    constructor() {
      super();
    }
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
                              <ExchangeRates />
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