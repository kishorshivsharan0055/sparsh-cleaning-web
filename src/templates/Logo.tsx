type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <span className={`text-gray-900 inline-flex items-center ${fontStyle}`}>
      {/* <img src="logo.png" className="w-80 h-full mr-2" /> */}
    <div className="font-bold text-4xl">Sparsh Cleaning Solutions</div>
      
    </span>
  );
};

export { Logo };
