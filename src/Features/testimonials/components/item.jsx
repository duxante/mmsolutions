import { Paper } from '@mui/material';

const Item = (props) => {
  return (
    <Paper
      sx={{
        maxWidth: '500px',
        width: '100%',
        margin: '0px auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {props.item.img}
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>
    </Paper>
  );
};

export default Item;
