import { Link } from 'react-router-dom';

const Finish = () => {
  const containerStyle = {
    // Layout
    display: 'flex',
    flexDirection: 'column', // or 'row'
    justifyContent: 'center', // 'flex-start', 'flex-end', 'space-between', 'space-around'
    alignItems: 'center', // 'flex-start', 'flex-end', 'stretch'

    // Sizing
    width: '100%', // or specify a specific width, e.g., '300px'
    height: '100vh', // or specify a specific height, e.g., '200px'

    // Spacing
    margin: '20px', // or specify different values for individual sides, e.g., '10px 20px'
    padding: '20px', // or specify different values for individual sides, e.g., '10px 20px'

    // Border
    border: '1px solid #ddd',
    borderRadius: '5px',

    // Background
    backgroundColor: '#f0f0f0',

    // Text
    color: '#333',
    fontFamily: 'Arial, sans-serif',
    fontSize: '16px',
    textAlign: 'center',

    // Overflow
    overflow: 'hidden', // or 'auto', 'scroll', 'visible'

    // Box Shadow
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
  };


  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    color: '#3498db',
    borderRadius: '5px',
    textDecoration: 'none',
    border: 'none',
    cursor: 'pointer',
  };

  const buttonStyle2 = {
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '5px',
    textDecoration: 'none',
    border: 'none',
    cursor: 'pointer',
  };

  const paragraphStyles = {
    // Font properties
    fontFamily: 'Arial, sans-serif',
    fontSize: '22px',
    fontWeight: 'normal', // or 'bold', 'bolder', 'lighter', 100 to 900
    fontStyle: 'normal', // or 'italic', 'oblique'
    lineHeight: '2.5', // or specific value, normal, or number
  
    // Text color
    color: 'MediumSeaGreen',
  
    // Text alignment
    textAlign: 'left', // or 'center', 'right', 'justify'
  
    // Text decoration
    textDecoration: 'none', // or 'underline', 'overline', 'line-through'
  
    // Margin and padding
    margin: '0', // or specific values for each side, e.g., '10px 20px'
    padding: '0', // or specific values for each side, e.g., '10px 20px'
  
    // Border
    border: 'none', // or specific values, e.g., '1px solid #ddd'
    borderRadius: '0', // or specific values, e.g., '5px'
  
    // Background color
    backgroundColor: 'transparent', // or specific color
  
    // Other
    textTransform: 'none', // or 'uppercase', 'lowercase', 'capitalize'
    letterSpacing: 'normal', // or specific value
    overflow: 'visible', // or 'hidden', 'scroll', 'auto'
  
    // Box shadow
    boxShadow: 'none', // or specific values, e.g., '0px 2px 5px rgba(0, 0, 0, 0.1)'
  };
  

  return (
    <div style={containerStyle}>
      <p style={paragraphStyles}> Thank you for participating </p>
      <button style={buttonStyle}> Finish </button>
      <Link to="/PageThree" style={buttonStyle2}>
        <button> Back </button>
      </Link>
    </div>
  );
};

export default Finish;
