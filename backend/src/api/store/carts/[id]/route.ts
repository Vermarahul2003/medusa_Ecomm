import { MedusaRequest, MedusaResponse } from "@medusajs/framework";
import { Modules } from "@medusajs/framework/utils";

export async function GET(
    req: MedusaRequest,
    res: MedusaResponse
){
    const cartId = req.params.id

    const cartModuleService = req.scope.resolve(
        Modules.CART
    )

    const cart = await cartModuleService.retrieveCart(cartId)
    res.json({
        cart
    })
}