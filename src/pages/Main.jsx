import { Button, Grid, Input, Text } from "../elements";

const Main = (props) => {
  return (
    <>
      <Grid bg="#fff">
        <Grid margin="10px" bg="#fff">
          <Button
             >
            jiSSS
          </Button>
        </Grid>

        <Grid margin="10px" bg="#fff">
          <Text>Text!</Text>
        </Grid>
        <Grid margin="10px" bg={({ theme }) => theme.color.background}>
          <Input label="Input here!" multiLine placeholder="asd">
            Input!
          </Input>
        </Grid>
      </Grid>
    </>
  );
};

export default Main;
