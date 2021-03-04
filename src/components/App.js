import React from "react";
//import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import Navbar from "./navbar";
import Cards from "./cards";
import Footer from "./footer";
import '../resources/App.css' //.. para retroceder


const content = {
  title: 'A warm Welcome!',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  buttonLabel: 'Call to Action!'
}

const UpperBody = () => {
return(
      <div id="upper_body" className="p-3 mb-2 ">
        <h1 className="display-2">{content.title}</h1>
        
        <p className="lead mt-5">{content.description}</p>

        <button type="button" class="btn btn-primary mt-3">{content.buttonLabel}</button>
        
      </div>
  )

}

const App = props => {
	return (
    < >
    <Navbar />
		<UpperBody />
    <Cards />
    <Footer />
    </>
	);
};
App.propTypes = {
	label: PropTypes.string,
	number: PropTypes.string
};
//dont forget to change the label
export default App;
