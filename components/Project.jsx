import { Card, Grid } from "@nextui-org/react";

export default function Solutions() {
  const Project = ({text}) => {
    return (
      <Card isHoverable isPressable css={{ h: "$60", $$cardColor: '#7828C8' }}>
        <Card.Body>
          <Card.Image alt={text} showSkeleton
          src="https://github.com/nextui-org/nextui/blob/next/apps/docs/public/nextui-banner.jpeg?raw=true">
          </Card.Image>
        </Card.Body>
      </Card>
    );
  }
  return (
    <Grid.Container gap={2} justify="center">
      <Grid xs={4}>
        <Project text="1 of 3" />
      </Grid>
      <Grid xs={4}>
        <Project text="2 of 3" />
      </Grid>
      <Grid xs={4}>
        <Project text="3 of 3" />
      </Grid>
    </Grid.Container>
  );
}
