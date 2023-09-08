
type ButtonProps = {
    children: JSX.Element | string;
}

export const Button = ({ children, ...props }: ButtonProps) => (
    <button {...props} className='bg-gray-600 h-9 w-9 rounded flex justify-center items-center hover:bg-gray-700'>
        {children}
    </button>
);