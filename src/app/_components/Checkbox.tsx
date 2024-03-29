export type CheckboxProps = React.InputHTMLAttributes<{}> & {
  label: string;
};

const Checkbox: React.FC<CheckboxProps> = ({ id, label, ...props }) => {
  return (
    <div className="flex flex-row-reverse justify-end gap-x-4">
      <label className="text-sm md:text-base text-body" htmlFor={id}>
        {label}
      </label>
      <input id={id} type="checkbox" {...props} />
    </div>
  );
};

export default Checkbox;
