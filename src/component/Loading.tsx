import { useEffect } from 'react';

function loading() {
  return (
    <div className="spinner-border text-center " role="status">
      <span className="sr-only">Loading...</span>
    </div>
  );
}

export default loading;
