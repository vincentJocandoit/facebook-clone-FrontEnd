import { Grid, Image } from '../elements/index'

const Comments = (props) => {
   const {children} = props
  return (
    <>
      <Grid flex>
        <Grid bg="#ddd" width="80%" flexDirection="row"  >
          <Image shape="circle"></Image>
          {children}
        </Grid>
      </Grid>
    </>
  );
}

export default Comments
