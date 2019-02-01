import Typography from 'typography';

const typography = new Typography({
  title: 'Default',
  baseFontSize: '10px',
  baseLineHeight: 1.5,
  scaleRatio: 2,
  headerFontFamily: [
    'Segoe UI',
    'Helvetica Neue',
    'Helvetica',
    'Arial',
    'sans-serif'
  ],
  bodyFontFamily: [
    'Segoe UI',
    'Helvetica Neue',
    'Helvetica',
    'Arial',
    'sans-serif'
  ],
  headerColor: 'inherit',
  bodyColor: 'hsl(0,0%,0%)',
  headerWeight: '400',
  bodyWeight: '600'
});

export default typography;
