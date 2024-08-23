export const CounterBox = ({
  counter,
  title,
  onClick,
}: {
  counter: number;
  title: string;
  onClick?: VoidFunction;
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="h-[90px] bg-offWhite010 bg-opacity-70 flex items-center flex-col justify-center rounded-12 flex-1"
    >
      <strong className="t-h2-sb-26 text-purple100">{counter}</strong>
      <span className="inline-block mt-2 text-gray040 t-c1-m-13">{title}</span>
    </button>
  );
};
