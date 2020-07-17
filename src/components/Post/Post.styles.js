import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      marginBottom: theme.spacing(2),
    },
    image: {
      width: '100%',
      maxWidth: 330,
      maxHeight: 180,
      overflow: 'hidden',
      marginBottom: theme.spacing(2),
      marginRight: theme.spacing(2),
      position: 'relative'
    },
    img: {
      margin: 'auto',
      display: 'block',
      maxWidth: '100%',
      maxHeight: '100%',
    },
    imgCaption: {
        position: 'absolute',
        top: 5,
        left: 10,
        textShadow: '0 2px 4px rgba(0,0,0,.7)',
        color: '#FFF'
    },
    amounts: {
        marginLeft: theme.spacing(2),
    },
    rightColumn: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    }
  }));