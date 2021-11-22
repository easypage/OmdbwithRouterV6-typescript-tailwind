import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../module/redux/reducer/rootReducer';
import ResultSlider from '../ResultSlider';

function ResultSliderContainer() {
  const state = useSelector((state: RootState) => state.movieCard.data);

  return (
    <div>
      <ResultSlider movieList={state}></ResultSlider>
    </div>
  );
}

export default ResultSliderContainer;
