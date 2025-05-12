import React from "react";

export default function About(props) {
  let myStyle = {
    color: props.mode === 'dark' ? 'white' : '#042743',
    backgroundColor: props.mode === 'dark' ? '#042743' : 'white',
  };

  return (
    <div className="container mt-5 mb-3" style={myStyle}>
      <h1>About TextUtils</h1>

      <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              What is TextUtils?
            </button>
          </h2>

          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>TextUtils is a simple yet powerful text utility app</strong> designed to help you perform common text manipulations. You can convert text to uppercase or lowercase, remove extra spaces, copy text, and count characters and words easily. It’s perfect for students, developers, or anyone who deals with text regularly.
            </div>
          </div>
        </div>

        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
              Why use TextUtils?
            </button>
          </h2>

          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>TextUtils offers instant and responsive features</strong> that make text formatting easy and efficient. Whether you're editing a quick paragraph or working on structured content, the tools here save time and effort. It's lightweight, runs in your browser, and doesn’t store any of your data—keeping everything private and secure.
            </div>
          </div>
        </div>

        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
              Features
            </button>
          </h2>

          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <ul>
                <li>Convert text to UPPERCASE or lowercase</li>
                <li>Remove extra spaces from your text</li>
                <li>Count words and characters instantly</li>
                <li>Copy text to clipboard with one click</li>
                <li>Toggle between Light and Dark mode</li>
              </ul>
              <strong>Created by Sarthak Singh</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
