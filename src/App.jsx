
import { Suspense, useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import Items from './components/Items/Items'
import Navbar from './components/Navbar/Navbar'
import FavoriteItems from './components/FavoriteItems/FavoriteItems'
// for Toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const itemsPromise = fetch("./auctions.json").then(res => res.json())
  const [items, setItem] = useState([])
  const [favoriteItemId, setFavoriteItemId] = useState([])
  const [cart, setCart] = useState(false)

  const handleHeartBtnClick = (item) => {
    setItem([...items, item])
    showToastMessage()

    setFavoriteItemId([...favoriteItemId, item.id])

  }

  const favoriteItemsToggle = () => {
    setCart(!cart)
  }

  // let favoriteItemId = 0

  const handleFavoriteItemsBtn = (id) => {
    // favoriteItemId = id
    const newId = []
    for (const fId of favoriteItemId) {
      if (fId !== id) {
        newId.push(fId);
      }
    }
    setFavoriteItemId(newId)

    const newItems = []
    for (const item of items) {
      if (item.id !== id)
        newItems.push(item)
    }
    setItem(newItems)
    showToastForRemoveFavorite()
  }
  // Toast 
  const showToastMessage = () => {
    toast("Successfully added to Favorites", {
      position: "top-right"
    });
  };
  const showToastForRemoveFavorite = () => {
    toast("Successfully Removed from Favorites", {
      position: "top-right"
    });
  };


  return (
    <>
      <Navbar className="sticky" favoriteItemsToggle={favoriteItemsToggle}></Navbar>
      <Banner></Banner>
      <div id='active-auctions' className="bg-[#EBF0F5] text-[#0E2954] py-32">
        <div className="container mx-auto">
          <h2 className='text-4xl font-medium'>Active Auctions</h2>
          <p className='text-xl my-8'>Discover and bid on extraordinary items</p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            <div className="col-span-2">
              <Suspense fallback={
                <div className='flex items-center justify-center'>
                  <div className='circle'></div>
                </div>
              }>
                <Items
                  favoriteItemId={favoriteItemId}
                  items={items}
                  itemsPromise={itemsPromise}
                  handleHeartBtnClick={handleHeartBtnClick}
                ></Items>

              </Suspense>
            </div>
            <div className={`
              ${cart ? "favorite-items-container" : ""}
              hidden lg:block 
            `}>
              <div className="favorite-items">
                <FavoriteItems
                  cart={cart}
                  favoriteItemsToggle={favoriteItemsToggle}
                  handleFavoriteItemsBtn={handleFavoriteItemsBtn}
                  items={items}>
                </ FavoriteItems>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
      <div className="">
        <ToastContainer></ToastContainer>
      </div>


    </>
  )
}

export default App
