import { Container, Card, Text, Button, Input } from "@nextui-org/react";
import Currencies from "./Currencies"

export default function Menu() {
  return (
    <Container css={{ marginTop: "10px" }} >
      <Card variant="bordered" css={{ mw: "350px", $$cardColor: "#451773" }}>
        <Card.Body>
          <Text h2 css={{ textAlign: "center", marginBottom: "10px" }}>Currency Converter</Text>
          <Text h6 css={{textAlign: "center", color: "#B583E7"}}>Currency:</Text>
          <Currencies index={0} />
          <Text h6 css={{textAlign: "center", color: "#B583E7"}}>To:</Text>
          <Currencies index={1} />
          <Input initialValue={1} defaultValue={1} css={{ margin: "0 auto", marginTop: "20px" }} labelPlaceholder="Amount" status="secondary" type="number" />
          <Button color="secondary" auto css={{ margin: "auto 0 auto auto", textTransform: "uppercase", marginTop: "10px", color: "#2D0C4E" }}>
            Convert
          </Button>
        </Card.Body>
      </Card>
    </Container>
  )
}