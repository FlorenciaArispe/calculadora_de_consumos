import { useMemo } from "react";
import { formatCurrency } from "../helpers";
import { OrderItem } from "../types";

type OrderTotalsProps= {
    order: OrderItem[],
    tip: number,
}

export default function OrderTotals({order, tip} : OrderTotalsProps) {

const subtotalAmount= useMemo(() => order.reduce((total,item) => total + (item.quantity * item.price) , 0), [order])

const tipAmount= useMemo(() => subtotalAmount * tip, [tip, order])

const totalAmount= useMemo(() => subtotalAmount + tipAmount, [tip, order])


return (
  <div className="space-y-3 flex flex-col w-60">
    <h2 className="font-black text-2xl">Totales y Propina:</h2>
    <div className="space-y-1">
      <div className="flex justify-between">
        <p>Subtotal a Pagar:</p>
        <span className="font-bold">{formatCurrency(subtotalAmount)}</span>
      </div>

      <div className="flex justify-between">
        <p>Propina:</p>
        <span className="font-bold">{formatCurrency(tipAmount)}</span>
      </div>

      <div className="flex justify-between">
        <p>Total a Pagar:</p>
        <span className="font-bold">{formatCurrency(totalAmount)}</span>
      </div>
    </div>
  </div>
);
}
