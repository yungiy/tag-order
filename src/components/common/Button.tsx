import { twMerge } from 'tailwind-merge';

type Props = React.ComponentPropsWithoutRef<'button'>;

export default function Button(props: Props) {
  const { className, children, ...rest } = props;
  return (
    <button
      className={twMerge(
        'h-8 w-12 rounded-sm bg-black text-white disabled:bg-light-gray',
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
