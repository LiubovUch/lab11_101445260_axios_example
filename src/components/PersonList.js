import React, { Component } from 'react';
import axios from 'axios';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

class PersonList extends Component {
    state = {
        persons: [],
    };

    componentDidMount() {
        axios.get('https://randomuser.me/api/?results=10')
            .then((res) => {
                const persons = res.data.results;
                this.setState({ persons });
            });
    }

    render() {
        return (
            <Container>
                <h1 className="text-center my-4">User List</h1>
                {this.state.persons.map((person, index) => (
                    <Card className="mb-4 shadow" key={index} style={{ backgroundColor: 'rgb(32, 152, 189)' }}>
                        <Row className="g-0 align-items-center">
                            <Col md={3} className="text-center" >
                                <div className="profile-container">
                                    <Card.Img
                                        variant="top"
                                        src={person.picture.large}
                                        alt="User"
                                        className="rounded-circle my-3"
                                        style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                                    />
                                    <Button variant="primary" className="mb-3">Details</Button>
                                </div>
                            </Col>

                            <Col md={9}>
                                <Card.Body>
                                    <Card.Title>
                                        {person.name.title} {person.name.first} {person.name.last}
                                    </Card.Title>
                                    <Card.Text className="user-info">
                                        <div>
                                            <strong>User Name:</strong> {person.login.username}
                                        </div>
                                        <div>
                                            <strong>Gender:</strong> {person.gender.toUpperCase()}
                                        </div>
                                        <div>
                                            <strong>Time Zone:</strong> {person.location.timezone.description}
                                        </div>
                                        <div>
                                            <strong>Address:</strong> {person.location.street.number} {person.location.street.name}, {person.location.city}, {person.location.country}
                                        </div>
                                        <div>
                                            <strong>Email:</strong> {person.email}
                                        </div>
                                        <div>
                                            <strong>Birth Date:</strong> {person.dob.date} ({person.dob.age} years)
                                        </div>
                                        <div>
                                            <strong>Phone:</strong> {person.phone}
                                        </div>
                                        <div>
                                            <strong>Cell:</strong> {person.cell}
                                        </div>
                                    </Card.Text>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                ))}
            </Container>
        );
    }
}

export default PersonList;
