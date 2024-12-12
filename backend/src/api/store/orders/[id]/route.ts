import { MedusaRequest, MedusaResponse } from "@medusajs/framework";
import { Modules } from "@medusajs/framework/utils";

export async function GET(
    req: MedusaRequest,
    res: MedusaResponse
): Promise<void> {
    const orderId = req.params.id
    const orderServiceModules = req.scope.resolve(
        Modules.ORDER
    )

    const order = await orderServiceModules.listOrderLineItems({id: [orderId]})

    res.json(
        order
    )
}