import React from 'react';
import './App.css';
import PropTypes from 'prop-types';


 // prop-type을 이용하면 type까지 설정할 수 있다.

function Btn({ text, fontSize }){
  return (
    <div>
      <button
        // onClick={changeValue}
        style={{
          backgroundColor:"tomato",
          color:"white",
          padding:"10px 20px",
          border: 0,
          borderRadius:10,
          cursor:"pointer",
          fontSize:{fontSize},
      }}>
      {text}
      </button>
    </div>
  );
}

// 자식 props가 변경되어도 부모가 계속 호출되지 않도록 해주었음
// 변경이 되었으니 btn을 다시 그려주세요
// const MemorizedBtn = React.memo(Btn);
// prop type 설정
Btn.propType = {
  text: PropTypes.string,
  fontSize: PropTypes.number,
}
function App() {
  // const [value, setValue] = React.useState("Save Changes");
  // const changeValue = () => setValue("Revert Change");
  return (
    <>
      // <MemorizedBtn text={value} changeValue={changeValue} />
      // <MemorizedBtn text="Continue" />
      // props를 잘못 전달했을때
      <Btn text="Save Changes" fontSize={18} />
      <Btn text={14} fontSize={"야호"} />
    </>
  );
}

export default App;