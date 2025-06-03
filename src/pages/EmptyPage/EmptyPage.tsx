interface IProps {
  title: string;
}

const EmptyPage = ({ title }: IProps) => {
  return <h4 className="font-medium">{title}</h4>;
};

export default EmptyPage;
