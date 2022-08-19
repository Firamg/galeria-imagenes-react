
import './App.css';
import Header from './Header';
import Cards from './Cards'
import Footer from './Footer'


const products = [


  {
    image: 'https://robohash.org/user1',
    title: 'Robot 1',
    description: 'Robot de 1,5 mts metálico'
  },

  {
    image: 'https://robohash.org/user2',
    title: 'Robot 2',
    description: 'Robot de 1,6 mts polipéptidos'
  },
  {
    image: 'https://robohash.org/user3',
    title: 'Robot 3',
    description: 'Robot de 1,8 mts cobre'
  },
  {
    image: 'https://robohash.org/user4',
    title: 'Robot 4',
    description: 'Robot de 1,75 mts madera'
  },
  {
    image: 'https://robohash.org/user5',
    title: 'Robot 5',
    description: 'Robot de 2,0 mts plástico'
  },
  {
    image: 'https://robohash.org/user6',
    title: 'Robot 6',
    description: 'Robot de 1,5 mts acero'
  },
]


function App() {
  return (
    <div class='App'>

      <Header class='title' title='Galería de Imágenes con
React'/>

      <hr />
      <div class='Cards'>
        {products.map((product, i) => {
          return <Cards key={i} image={product.image} title={product.title} description={product.description} />

        })}


      </div>

      <Footer class='footer'/>













    </div>

  );
}

export default App;
