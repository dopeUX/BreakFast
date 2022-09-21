// import React from 'react';
// import Color from '../../../Colors.types';
// import './GradientTextBox.modules.css';

// export interface GradientTextBoxProps {
//   primaryGradient: Color;
//   secondaryGradient: Color;
//   styles?: React.CSSProperties;
// }

// const GradientTextBox: React.FC<GradientTextBoxProps> = ({
//   primaryGradient = '#367E18',
//   secondaryGradient = '#F57328',
//   styles,
//   ...others
// }) => {
//   // const [active, setActive] = React.useState(false);
//   // const Glam = glamorous.div({
//   //   cursor: "pointer",
//   //   background: "",
//   //   "::before": {
//   //     content: "hey",
//   //     width: "100%",
//   //     // height: 0,
//   //     zIndex: -1,
//   //     position: "absolute",
//   //     top: 0,
//   //     right: 0,
//   //     bottom: 0,
//   //     left: 0,
//   //     background: ` linear-gradient(to top left,${primaryGradient}, ${secondaryGradient})`,
//   //     transform: "translateY(10px) scale(0.95)",
//   //     filter: "blur(30px)",
//   //     opacity: 1,
//   //     visibility: active ? "visible" : "hidden",
//   //     transition: "background 0.3s",
//   //   },
//   //   "::after": {},
//   // });
//   return (
//     <div className="gradient-textbox">
//       <div>
//         <input
//           type="text"
//           placeholder="Your name"
//           style={{
//             background: `linear-gradient(to right, white,white),linear-gradient(to right, ${primaryGradient}, ${secondaryGradient})`,
//             backgroundClip: 'padding-box, border-box',
//             backgroundOrigin: 'padding-box, border-box',
//             ...styles,
//           }}
//           {...others}
//           onFocus={e => {
//             setActive(true);
//             // e.currentTarget.style.border = "0px solid transperant";
//           }}
//           onBlur={e => {
//             setActive(false);
//             // bgRef.current.style.background.before = "white";
//             // e.currentTarget.style.border = "3px solid transperant";
//           }}
//         />
//         {/* <Glam className={`box`}></Glam> */}
//       </div>
//     </div>
//   );
// };

// export default GradientTextBox;
