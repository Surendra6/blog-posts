import React from "react";
import "./Card.css";
import { BODY_CHAR_LIMIT } from "../../utils/constants";

function Card(props: any) {
  let { title, body, image } = props;

  let isCharacterLimitExceeded = body.length > BODY_CHAR_LIMIT;

  function formatBody() {
    // Trim the text if  body text exceeds 100 characters
    if (isCharacterLimitExceeded) {
      return `${body.substring(0, BODY_CHAR_LIMIT - 1)}...`;
    } else return body;
  }

  return (
    <div className="card">
      <div className="title" title={title}>
        {title}
      </div>
      <div className="content-wrapper">
        <img className="image" src={image} alt="Image for post" />
        <div className="content" title={isCharacterLimitExceeded ? body : ""}>
          {formatBody()}
        </div>
      </div>
    </div>
  );
}

export default Card;
