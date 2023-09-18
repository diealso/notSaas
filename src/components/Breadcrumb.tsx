interface Breadcrumb {
  parts?: string[];
  main: string;
}

const Breadcrumb = ({ parts, main }: Breadcrumb): JSX.Element => {
  return (
    <div className="w-full mb-4">
      <p className="m-0">
        {parts &&
          parts.map((part) => {
            return <span className="mr-2">{part} /</span>;
          })}
        <span className="font-bold">{main}</span>
      </p>
    </div>
  );
};

export default Breadcrumb;
