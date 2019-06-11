const styles = (theme) => ({
  rentalListingDetails: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'top',
    padding: '16px'
  },
  rentalListingCard: {
    marginBottom: '1em',
  },
  priceTag: {
    display: 'inline-block',
    backgroundColor: '#000',
    padding: '6px 12px',
    color: '#fff'
  },
  neighborhoodTag: {
    display: 'inline-block',
    backgroundColor: theme.palette.secondary.main,
    transformation: 'uppercase',
    padding: '3px 6px',
    borderRadius: '3px',
  }
});

export default styles;