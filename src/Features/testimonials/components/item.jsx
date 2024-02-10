import { Paper } from '@mui/material';
import './item.style.css';

const Item = (props) => {
  return (
    <Paper
      sx={{
        maxWidth: '800px',
        width: '100%',
        margin: '0px auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
      }}
    >
      {props.item.img}
      <h2 className="nameBelowImage">{props.item.name}</h2>
      <p className="textBelowImage">{props.item.description}</p>
    </Paper>
  );
};

export default Item;
