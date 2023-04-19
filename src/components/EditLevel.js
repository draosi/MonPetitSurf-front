import "../css/EditLevel.css";

const EditLevel = () => {
  return (
    <div className="div-edit-level">
      <p style={{fontSize: '1.5em', margin: '2.5% 0%'}}>How to choose your Level ?</p>
      <p className="levels-explained">
        You need to choose your level between four levels. Level one is for
        beginners, level two is for intermediate surfers, level three for
        advance surfers ans level four for experts. Your level was automatically
        set up at one. To change your level, simply click on the suitable level,
        and then submit. Good surf !
      </p>
      <div className="div-edit-level-button">
        <button className="edit-level-button">1</button>
        <button className="edit-level-button">2</button>
        <button className="edit-level-button">3</button>
        <button className="edit-level-button">4</button>
      </div>
      <button className="submit-level-button">Submit</button>
    </div>
  );
};

export default EditLevel;
