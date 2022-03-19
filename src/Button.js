export const Button = (props) => {
  console.log(props);
  return <button style={{ background: props.color }}>{props.title} </button>;
};
// export const Login = () => {
//   return <button> Login </button>;
// };
