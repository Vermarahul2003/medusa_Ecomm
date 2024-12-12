import { MedusaRequest, MedusaResponse } from "@medusajs/framework/http";
import { Modules } from "@medusajs/framework/utils"

export async function GET(
  req: MedusaRequest,
  res: MedusaResponse
): Promise<void> {
  const cartModuleService = req.scope.resolve(
    Modules.CART
  )

  const cartId = req.params.id

  const cart = await cartModuleService.retrieveCart(cartId)

  res.json({
    cart
  })
}


export async function POST(
  req: MedusaRequest,
  res: MedusaResponse
): Promise<void> {
  const cartModuleService = req.scope.resolve(
    Modules.CART
  )

  const {currency_code} = req.body as {currency_code: string}

  const cart = await cartModuleService.createCarts([
    {
      currency_code: currency_code,
    }
  ])

  res.json({
    cart
  })
}
