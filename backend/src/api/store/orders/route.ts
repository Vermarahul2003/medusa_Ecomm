import { MedusaRequest, MedusaResponse } from "@medusajs/framework";
import { Modules } from "@medusajs/framework/utils";

export async function POST(
    req: MedusaRequest,
    res: MedusaResponse
): Promise<void>{
    const orderModuleService = req.scope.resolve(
        Modules.ORDER
    )

    const {currency_code, title, quantity, unit_price, shipping_method_name, amount} = req.body as {
        currency_code: string,
        title: string,
        quantity: number,
        unit_price: number,
        shipping_method_name: string,
        amount: number
    }

    const order = await orderModuleService.createOrders([
        {
            currency_code,
            items: [
                {
                  title, //Shirt
                  quantity, // 2
                  unit_price, // 3000
                },
              ],
              shipping_methods: [
                {
                  name: shipping_method_name, //"Express shipping"
                  amount, // 2000
                },
              ],
        }
    ])

    res.json({
        "message": "Order created successfully!",
        order
    })
}



export async function GET(
    req: MedusaRequest,
    res: MedusaResponse
): Promise<void> {
    const orderModuleService = req.scope.resolve(
        Modules.ORDER
    )
    
    const orders = await orderModuleService.listOrderLineItems({})

    res.json(
        orders
    )
}