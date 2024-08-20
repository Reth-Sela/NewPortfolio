import Card from "./Card";
import view from '../assets/view.jpg';

const GroubCard = () => {
  const cards = [
    {
      href: view,
      imgSrc: view,
      title: "MOUNTAIN",
      text: "Mountain is my favorite place",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] p-[20px]">
      <Card href={view} imgSrc={view} text={"Mountain is my favorite place"} title={'MOUNTAIN'} />
      <Card href={view} imgSrc={view} text={"Mountain is my favorite place"} title={'MOUNTAIN'} />
      <Card href={view} imgSrc={view} text={"Mountain is my favorite place"} title={'MOUNTAIN'} />
      <Card href={view} imgSrc={view} text={"Mountain is my favorite place"} title={'MOUNTAIN'} />
      <Card href={view} imgSrc={view} text={"Mountain is my favorite place"} title={'MOUNTAIN'} />
      <Card href={view} imgSrc={view} text={"Mountain is my favorite place"} title={'MOUNTAIN'} />
    </div>
  );
};

export default GroubCard;
