import './Playground.scss'; 

const Playground = () => {
  return (
    <div className="playground-container">
      <h1 className="playground-title">Choose Your Playground:</h1>
      <div className="playground-buttons">
        <button className="playground-button">Students</button>
        <button className="playground-button">Employees</button>
        <button className="playground-button">Parents</button>
      </div>
    </div>
  );
};

export default Playground;
