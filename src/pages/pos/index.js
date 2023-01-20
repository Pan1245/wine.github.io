import * as React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Container, Button, ButtonGroup, Row, Col } from "react-bootstrap"
import WineCard from "../../components/WineCard"
import { useLocalStorage } from "react-use"

const dummyPrice = 1200

function PosPage() {
  const [wine, setWine] = useLocalStorage("wine", "Wine")

  let [wineTitles, setWineTitles] = React.useState([])
  let [subMenu, setSubMenu] = React.useState("reds")
  let [cart, setCart] = useLocalStorage("cart", [])

  function addToCart(wine) {
    cart.push(wine)
    console.table(cart)
    setCart([...cart])
  }

  React.useEffect(() => {
    let items = []
    fetch(`https:api.sampleapis.com/wines/${subMenu}`)
      .then(res => res.json())
      .then(wines => {
        for (let i = 0; i < wines.length; i++) {
          items.push(
            <WineCard
              key={i}
              image={wines[i].image}
              winery={wines[i].winery}
              wine={wines[i].wine}
              location={wines[i].location}
              price={dummyPrice}
              handleClick={() => {
                addToCart(wines[i])
              }}
            />
          )
        }
        setWineTitles(items)
      })
  }, [subMenu])
  return (
    <Container>
      <h1>POS</h1>
      <ButtonGroup>
        <Button
          variant="secondary"
          onClick={() => {
            setSubMenu("reds")
          }}
        >
          reds
        </Button>
        <Button
          variant="secondary"
          onClick={() => {
            setSubMenu("whites")
          }}
        >
          whites
        </Button>
        <Button
          variant="secondary"
          onClick={() => {
            setSubMenu("sparkling")
          }}
        >
          sparkling
        </Button>
        <Button
          variant="secondary"
          onClick={() => {
            setSubMenu("rose")
          }}
        >
          rose
        </Button>
        <Button
          variant="secondary"
          onClick={() => {
            setSubMenu("dessert")
          }}
        >
          dessert
        </Button>
        <Button
          variant="secondary"
          onClick={() => {
            setSubMenu("port")
          }}
        >
          port
        </Button>
      </ButtonGroup>
      <Row>
        <Col>
          <Row>{wineTitles}</Row>
        </Col>
        <Col sm={3}>
          <h2>Cart</h2>
          {cart.map((item, i) => {
            return (
              <Row key={i}>
                <Col>{item.wine}</Col>
                <Col>{dummyPrice}</Col>
              </Row>
            )
          })}
          <Row>Total: {cart.length * dummyPrice} Baht</Row>
        </Col>
      </Row>
    </Container>
  )
}

export default PosPage
