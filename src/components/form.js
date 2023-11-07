import React, { useState } from "react";

function Form({
  inputName,
  inputMessage,
  inputSex,
  inputHobby,
  postData: { name, message, sex, hobbies },
}) {
  const [showInfo, setShowInfo] = useState(false);
  const [toggleInfo, setToggleInfo] = useState(false);
  const selectSex = ["man", "woman"];
  const selectHobby = ["piano", "soccer", "baseball", "eat"];

  const chgName = (e) => {
    inputName(e.target.value);
  };
  const chgMessage = (e) => {
    inputMessage(e.target.value);
  };
  const chgSex = (e) => {
    inputSex(e.target.value);
  };
  const selectHobbies = (e) => {
    if (hobbies.includes(e.target.value)) {
      inputHobby(hobbies.filter((hobby) => hobby !== e.target.value));
    } else {
      inputHobby([...hobbies, e.target.value]);
    }
  };

  const allGo = () => {
    setShowInfo(true);
    const isSetName = name !== "" ? true : false;
    const isSetSex = sex !== "" ? true : false;
    const isSetHobbies = hobbies.length !== 0 ? true : false;
    const isSetMessage = message !== "" ? true : false;
    if (isSetName && isSetSex && isSetHobbies && isSetMessage) {
      setToggleInfo(true);
    } else {
      setToggleInfo(false);
      return;
    }
  };

  function RenderInfo() {
    if (showInfo) {
      if (toggleInfo) {
        return <div>OKです。リダイレクトします</div>;
      } else {
        return <div>正しい値に変更しましょう</div>;
      }
    } else {
      return null;
    }
  }

  return (
    <div>
      <h3>form</h3>
      <RenderInfo />
      <form action="" method="POST">
        <div>
          {name == "" ? <p>名前を入力しましょう</p> : ""}
          <label htmlFor="inputName">Name</label>
          <input
            type="text"
            name="name"
            id="inputName"
            value={name}
            onChange={chgName}
          />
        </div>
        <div>
          {sex == "" ? <p>性別を教えてください</p> : ""}
          {selectSex.map((sex) => {
            return (
              <span key={sex}>
                <label htmlFor={sex}>{sex}</label>
                <input
                  type="radio"
                  name="sex"
                  id={sex}
                  value={sex}
                  onClick={chgSex}
                />
              </span>
            );
          })}
        </div>
        <div>
          {hobbies == [] ? <p>趣味はなんですか？</p> : ""}
          {selectHobby.map((hobby) => {
            return (
              <span key={hobby}>
                <label htmlFor={hobby}>{hobby}</label>
                <input
                  type="checkbox"
                  name="name"
                  value={hobby}
                  id={hobby}
                  onChange={selectHobbies}
                  checked={hobbies.includes(hobby)}
                />
              </span>
            );
          })}
        </div>
        <div>
          {message == "" ? <p>問い合わせしたい事あれば書いてください</p> : ""}
          <label htmlFor="message">message</label>
          <input
            type="textarea"
            name="name"
            id="message"
            value={message}
            onChange={chgMessage}
          />
        </div>
        <div>
          <button type="submit" onClick={allGo}>
            送信する
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
