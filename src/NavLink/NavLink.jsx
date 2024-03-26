import PropTypes from "prop-types";

const NavLink = ({ route }) => {
  return (
    <li>
      <a href={route.address}>{route.name}</a>
    </li>
  );
};

NavLink.propTypes = {
  route: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
  }).isRequired,
};

export default NavLink;
