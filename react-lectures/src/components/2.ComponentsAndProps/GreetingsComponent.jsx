import PropTypes from "prop-types";

GreetingsComponent.propTypes = {
  name: PropTypes.string,
  imgSource: PropTypes.string,
};

const GreetingsComponent = ({ name, imgSource }) => {
  return (
    <section>
      <h2>Hej {name}!</h2>
      <img src={imgSource} alt={name} width={200} />
    </section>
  );
};

export default GreetingsComponent;
