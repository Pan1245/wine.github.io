import * as React from "react"
import { Card, Button } from "react-bootstrap"

function WineCard(props) {
  const { winery, wine, image, location, price, handleClick } = props
  return (
    <Card style={{ width: "12rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{winery}</Card.Title>
        <Card.Title>{wine}</Card.Title>
        <Card.Title>{location}</Card.Title>
        <Card.Title>{price}</Card.Title>
        <Button variant="primary" onClick={handleClick}>
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  )
}

export default WineCard
