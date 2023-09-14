import Layout from '../components/layout';
import {getAllIds} from '../lib/data';

export async function getStaticProps({params}) {


  
}


export async function getStaticPaths() {
  const paths = getAllIds ();
  return {
    paths,
    fallback: false
  };
}

export default function Entry() {
  return (
    <layout>
   <article></article> className="card col-6>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <h6 className="card-subtitle mb-2 text-body-secondary">Phone Number</h6>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="card-link">Card link</a>
    <a href="#" className="card-link">Another link</a>
  </div>
</article>
</div>
    </div>
    </layout>
  )
}