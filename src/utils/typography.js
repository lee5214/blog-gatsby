import Typography from 'typography';
import github from 'typography-theme-github';

/*fairyGateTheme.overrideStyles()=>{
	'textShadow' = '0 0 0'
};*/
const typography = new Typography({
	baseFontSize: "18px",
	baseLineHeight: 1.45,
	headerFontFamily: [
		"Montserrat",
		"Avenir Next",
		"Helvetica Neue",
		"Segoe UI",
		"Helvetica",
		"Arial",
		"sans-serif",
	],
	bodyFontFamily: ["Roboto","Georgia", "serif"],
});
//const typography = new Typography (github);

export default typography;
