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
  }
});

export default styles;