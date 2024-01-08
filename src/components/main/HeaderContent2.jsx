import img1 from '../../assets/img/png-jpg-webp/img1.jpg'
import '../../assets/styles/headerContent2/master.css'
import { useParams } from 'react-router-dom';


export default function HeaderContent2(props) {
  const name = props.name;
  return (
    <>
      <section id="headerContent2">
        <figure>
          <img src={img1} alt="" />
        </figure>
        <p>kimia corporation</p>
        <h2>{name}</h2>
      </section>
    </>
  );
}
