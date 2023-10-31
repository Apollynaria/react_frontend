import React from 'react';

function User(props) {
  const { id, style, content, children } = props;

  return (
    <div id={id} style={style ? style : { color: "blue" }}>
      <div>{content}</div>
      <div>{children}</div>
    </div>
  );
}

export default User;