import Typography from 'typography';
import github from 'typography-theme-github';

/*fairyGateTheme.overrideStyles()=>{
	'textShadow' = '0 0 0'
};*/
const typography = new Typography({
	baseFontSize: "14px",
	baseLineHeight: 1.45,
	fontWeight: 700,
	headerFontFamily: ["Montserrat",],
	bodyFontFamily: ["Roboto","sans-serif", "serif"],
});
//const typography = new Typography (github);

export default typography;
