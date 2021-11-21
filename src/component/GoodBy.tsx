import React, { useEffect } from 'react';
import { useParams } from 'react-router';

function GoodBy() {
  useEffect(() => {
    console.log(params);

    return () => {};
  }, []);
  const params = useParams();

  return (
    <div>
      <h2>GOodBy</h2>
    </div>
  );
}

export default GoodBy;
