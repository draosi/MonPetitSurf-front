import "../css/EditLevel.css";

const EditLevel = () => {
  return (
    <div className="div-edit-level">
      <p style={{ fontSize: "1.5em", margin: "2.5% 0%" }}>
        How to choose your Level ?
      </p>
      <p className="levels-explained">
        You need to choose your level between four levels. Level one is for
        beginners, level two is for intermediate surfers, level three for
        advance surfers ans level four for experts. Your level was automatically
        set up at one. To change your level, simply click on the suitable level,
        and then submit. Good surf !
      </p>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div className="div-edit-level-button">
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: 'space-between', alignItems:'center' }}>
              <p>1 : waves under 1m </p>
              <button className="edit-level-button">1</button>
            </div>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: 'space-between', alignItems:'center' }}>
              <p>2 : waves between 0.8 and 1.5m</p>
              <button className="edit-level-button">2</button>
            </div>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: 'space-between', alignItems:'center' }}>
              <p>3 : waves between 1.2 and 1.8m</p>
              <button className="edit-level-button">3</button>
            </div>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: 'space-between', alignItems:'center' }}>
              <p>4 : waves over 1.5m</p>
              <button className="edit-level-button">4</button>
            </div>
          </div>
          <button className="submit-level-button">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default EditLevel;
