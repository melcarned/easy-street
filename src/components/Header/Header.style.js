const styles = (theme) => ({
  headerAdjustment: {
    ...theme.mixins.toolbar
  },
  header: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    flexGrow: 1,
    color: '#fff'
  },
  headerLabel: {
    flexGrow: 1,
    marginLeft: '0.4em'
  },
  headerButton: {
    float: 'right'
  },
  closeButton: {
    paddingLeft: 0
  },
  postListingButton: {
    paddingRight: 0
  },
  addListingButton: {
    paddingRight: 0
  }
});

export default styles;