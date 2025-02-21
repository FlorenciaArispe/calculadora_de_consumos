import { formatCurrency } from '../helpers'
import { MenuItem, OrderItem } from '../types'

type OrderContentsProps = {
    order : OrderItem[],
    removeItem: (id : MenuItem['id']) => void
}

export const OrderContents = ({order , removeItem} : OrderContentsProps) => {
  return (
   <div>
  

    <div className=' space-y-3 max-h-60 overflow-y-auto' >
        {      order.map(item => (
                <div key={item.id}
                className='flex justify-between items-center border-t border-gray-200 py-2 last-of-type:border-b '
                >
                    <div>
                    <p className='text-lg '>
                        {item.name} - {formatCurrency(item.price)}
                    </p>
                    <p className='font-black'>
                        Cantidad: {item.quantity} - {formatCurrency(item.price * item.quantity)}
                    </p>
                    </div>

                    <button 
                    className='bg-black h-8 w-8 rounded-full text-white font-black'
                    onClick={() => removeItem(item.id)}
                    >
                        X
                    </button>
                </div>
            )
        )
        }
    </div>
    </div>
  )
}
