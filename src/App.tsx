import MenuItem from "./components/MenuItem"
import { OrderContents } from "./components/OrderContents";
import OrderTotals from "./components/OrderTotals";
import { TipPercentageForm } from "./components/TipPercentageForm";
import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrder"


function App() {

  const { order, addItem, removeItem, tip, setTip, placeOrder } = useOrder();

  return (
    <>
      <header className=" py-5 border-b-1 border-gray-300">
        <h1 className=" text-center text-4xl font-black">Calculadora de Consumos y Propinas</h1>
      </header>

      <main className=" max-w-7xl mx-auto mt-10 grid md:grid-cols-2 space-x-10">
        <div className=" p-5">
          <h2 className="text-3xl font-black">Menú</h2>
          <div className="space-y-3 mt-5 max-h-150 overflow-y-auto">
            {menuItems.map(item => (
              <MenuItem
                key={item.id}
                item={item}
                addItem={addItem}
              />
            ))}
          </div>
        </div>

      
 {order.length ? (
   <div>
        <h1 className=" mt-5 text-3xl font-black">Consumo</h1>


        <div className=" border border-dashed border-slate-300 p-5 rounded-lg mt-5 space-y-6 h-150 flex flex-col justify-around">
         
        
              <OrderContents
                order={order}
                removeItem={removeItem}
              />

              <div className="flex flex-row justify-around">

              <TipPercentageForm
                setTip={setTip}
                tip={tip}
              />

              <OrderTotals
                order={order}
                tip={tip}
              />
              </div>
              <button className="w-full bg-black p-3 uppercase text-white font-bold mt-5 disabled:opacity-10"
    disabled={order.length === 0}
    onClick={placeOrder}
    >
      Guardar Orden
    </button>


        </div>


        </div>
  ) : (
    <div className=" border border-dashed border-slate-300 p-5 rounded-lg mt-19 space-y-6 max-h-150">

    <p className='text-center'>La orden está vacia</p>
    </div>
  )}
      </main>
    </>
  )
}

export default App
