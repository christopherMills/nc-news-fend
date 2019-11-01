import React from 'react';

export default function ErrorHandler(props) {
  const { statusCode, errorMsg } = props;
  return (
    <>
      <h1>Error (status code {statusCode})</h1>
      <p>{`Message from server: ${errorMsg}`}</p>
    </>
  );
}
