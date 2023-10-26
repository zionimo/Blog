import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Write = () => {
  const [value, setValue] = useState("");

  console.log(value);
  return (
    <div className="add">
      <div className="content">
        <input type="text" placeholder="Title" />
        <div className="editorContainer">
          <ReactQuill
            className="editor"
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>공개여부</h1>
          <span>
            <b>상태:</b> 초안
          </span>
          <span>
            <b>공개여부: </b> 전체공개
          </span>
          <input style={{ display: "none" }} type="file" id="file" name="" />
          <label className="file" htmlFor="file">
            이미지 가져오기
          </label>
          <div className="buttons">
            <button>초안저장</button>
            <button>저장</button>
          </div>
        </div>
        <div className="item">
          <h1>카테고리</h1>
          <div className="cat">
            <input
              type="radio"
              name="cat"
              value="development"
              id="development"
            />
            <label htmlFor="development">Development</label>
          </div>

          <div className="cat">
            <input type="radio" name="cat" value="health" id="health" />
            <label htmlFor="health">Health</label>
          </div>

          <div className="cat">
            <input type="radio" name="cat" value="food" id="food" />
            <label htmlFor="food">Food</label>
          </div>

          <div className="cat">
            <input type="radio" name="cat" value="culture" id="culture" />
            <label htmlFor="culture">Culture</label>
          </div>

          <div className="cat">
            <input type="radio" name="cat" value="animal" id="animal" />
            <label htmlFor="animal">Animal</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Write;
