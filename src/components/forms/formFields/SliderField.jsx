import { Box, Slider, Typography } from '@mui/material';
import { useField } from 'formik';
import styled from 'styled-components';

const StyledSlider = styled(Slider)(
  ({maincolor}) => (`
    color: ${maincolor} !important;
    font-size: 50%;
    transition: all .5s ;
    & 	.MuiSlider-markLabelActive {
      font-weight: bold;
    }
  `)
);

const sliderColor = (value) => {
  if (value <= 20) {
    return `#6F975C`
  } else if (value > 20 && value <= 40) {
    return `#D2D462`
  } else if (value > 40 && value <= 60) {
    return '#FF6361'
  } else if (value > 60 && value <= 80) {
    return '#BC5090'
  } else if (value > 80 && value <= 100) {
    return '#494CA2'
  }
};

const marks = [
  {
    value: 20,
    label: 'Low',
  },
  {
    value: 50,
    label: 'Avg.',
  },
  {
    value: 80,
    label: 'Hight',
  },
]

const DisabledSliderField = (props) => {
  const { value } = props;
  return (
    <Box>
      <StyledSlider
        aria-label="Slider"
        defaultValue={value}
        disabled
        getAriaValueText={value => `${value}`}
        step={10}
        maincolor={sliderColor(value)}
        valueLabelDisplay="auto"
        marks={marks}
      />
    </Box>
  )
}

const SliderField = (props) => {
  const { label } = props;
  const [ field, meta ] = useField(props);

  return (
    <Box>
      <Typography>{label}</Typography>
      <StyledSlider
        aria-label="Slider"
        defaultValue={50}
        getAriaValueText={value => `${value}`}
        step={10}
        maincolor={sliderColor(field.value)}
        valueLabelDisplay="auto"
        marks={marks}
        {...field}
        {...props}
      />
    </Box>
  );
}
export { SliderField, DisabledSliderField}