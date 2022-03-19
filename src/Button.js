// export const Button = (props) => {
export const Button = ({ title, color }) => {
  // console.log(props);
  return <button style={{ background: color }}>{title} </button>;
};
// export const Login = () => {
//   return <button> Login </button>;
// };
