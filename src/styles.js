import { makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({

  appBar: {
    borderRadius: 11,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: 'rgba(1,0,246, 1)',
    fontWeight: 999,
    fontStyle: 'italic',
  },
  image: {
    marginLeft: '15px',
  },
  [theme.breakpoints.down('xs')]: {
    mainContainer: {
      flexDirection: 'column-reverse'
    }
  }
}));