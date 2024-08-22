import Card from "./Card";
import book from '../assets/book.jpg';
import bokkomountain from '../assets/bokkomountain.jpg';
import kep from '../assets/kep.jpg';
import sihanuk from '../assets/sihanuk.jpg';
import movie from '../assets/movie.jpg';
import babe from '../assets/babe.jpg';

const GroubCard = () => {
  const cards = [
    {
      href: bokkomountain,
      imgSrc: bokkomountain,
      title: "BOKKO MOUNTAIN",
      text: "Bokko is my favorite mountain",
    },
    {
      href: kep,
      imgSrc: kep,
      title: "KEP PROVINCE",
      text: "Sela waiting husband is my fovorite sea",
    },
    {
      href: sihanuk,
      imgSrc: sihanuk,
      title: "SIHANUK PROVINCE",
      text: "OCHITEL is my favorite SEA",
    },
    {
      href: movie,
      imgSrc: movie,
      title: "MOVIE",
      text: "LEGEND is my favorite place to watch movie",
    },
    {
      href: book,
      imgSrc: book,
      title: "BOOK",
      text: "Reading book is my hobby",
    },
    {
      href: babe,
      imgSrc: babe,
      title: "MeyNeang",
      text: "MeyNeang is my important person",
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] p-[20px]">
        {cards.map(card =>{
          return <Card href={card.href} imgSrc={card.imgSrc} title={card.title} text={card.text}/>
        }
        )}
    </div>
  );
};

export default GroubCard;
