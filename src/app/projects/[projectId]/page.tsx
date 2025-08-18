interface Props {
  params: { projectId: string };
}

const Page = async ({ params }: Props) => {
  const { projectId } = params;
  return <div>Project ID :{projectId}</div>;
};

export default Page;
