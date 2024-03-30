import React from 'react'
import { Button, Card } from 'react-bootstrap'
import IronMan from './iron-man.jpeg'

function GitHubCard() {
  return (
    <div className="card">
        <Card style={{ width: "18rem"}}>
            <Card.Img variant="top" src={IronMan}/>
            <Card.Body>
                <Card.Title>Tony Stark</Card.Title>
                <Card.Text>
                    Genius Billionaire Playboy Philanthropist
                </Card.Text>
            </Card.Body>
        </Card>
    </div>
  )
}

export default GitHubCard