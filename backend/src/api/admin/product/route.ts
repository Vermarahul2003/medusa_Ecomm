import { MedusaRequest, MedusaResponse } from "@medusajs/framework/http";
import { Modules } from "@medusajs/framework/utils"

export async function GET(
  req: MedusaRequest,
  res: MedusaResponse
): Promise<void> {
  res.sendStatus(200);
}


export async function POST(
  req: MedusaRequest,
  res: MedusaResponse
): Promise<void> {

  const {title, handle} = req.body as {title: string, handle: string}

  const productModuleService = req.scope.resolve(
    Modules.PRODUCT
  )

  const product = [{
    title: title
  },
  {
    title: "Shirt",
    handle: handle
  }]
  productModuleService.createProducts(product)

  res.json({
    "message": "product added successfully",
    product
  })

  
}