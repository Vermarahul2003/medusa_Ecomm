import { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import { Modules } from "@medusajs/framework/utils"

export async function GET(
  request: MedusaRequest,
  res: MedusaResponse
): Promise<void> {
  const productModuleService = request.scope.resolve(
    Modules.PRODUCT
  )

  res.json({
    products: await productModuleService.listProducts(),
  })
}

export async function POST(
    req: MedusaRequest,
    res: MedusaResponse
){
    const productModuleService = req.scope.resolve(
        Modules.PRODUCT
    )

    const data = req.body

    const productDetails = await productModuleService;
}
