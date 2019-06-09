const styles = (theme) => ({
  headerAdjustment: {
    ...theme.mixins.toolbar
  },
  header: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    flexGrow: 1,
  },
  headerLabel: {
    flexGrow: 1,
  },
  headerButton: {
    float: 'right'
  },
  actionMenu: {

  }
});

export default styles;