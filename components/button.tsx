interface IProps {
  text: string;
  control?: any;
}
const Button = ({ text, control }: IProps) => {
  return (
    <div
      onClick={control}
      className="active:translate-y-1 border-[1px] border-[#13cdf2] bg-gradient-to-r from-[#1170fa] to-[#14f0ef] z-40 px-6 py-1 text-md rounded-md"
    >
      <span className="text-white">{text}</span>
    </div>
  );
};

export default Button;
