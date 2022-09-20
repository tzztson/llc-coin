interface IProps {
    text: string;
}
const Button = ({ text }: IProps) => {
    return (
        <div className="bg-gradient-to-r from-[#1170fa] to-[#14f0ef] z-40 px-6 py-1 text-md rounded-md">
            <span className="text-white">{text}</span>
        </div>
    )
}

export default Button;