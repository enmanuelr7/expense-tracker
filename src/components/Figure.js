const Figure = ({ amount, includeSign = true }) => {
  const sign = amount < 0 ? '-' : '+';
  return <>{`${includeSign ? sign : ''}$${Math.abs(amount).toFixed(2)}`}</>;
};

export default Figure;
