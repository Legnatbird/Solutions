import { Text, Container, Card, Row, Spacer } from "@nextui-org/react";
import Head from "next/head";

export default function Context() {
  return (
    <>
      <Head>
        <title>PM-ADEPT</title>
      </Head>
      <Text weight="bold" h1 size={60} css={{ display: "flex", justifyContent: "center", textAlign: "center",
      textTransform: "uppercase", textGradient: "45deg, $purple600 30%, $pink600 60%", marginTop: "10px"}} >
        PM-ADEPT Test
      </Text>
      <Spacer y={2} />
      <Container responsive="500px">
        <Card css={{ $$cardColor: "#2E0F4D" }}>
          <Card.Body>
            <Row justify="center" align="center">
              <Text h3 color="#FDD8E5" css={{ m: 0, textAlign: "center" }}>
                This test consists of 3 different challenges that seek to measure the applicants capabilities.
              </Text>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </>
  )
}