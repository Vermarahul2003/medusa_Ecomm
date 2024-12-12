import { MedusaRequest, MedusaResponse } from "@medusajs/framework";
import { Modules } from "@medusajs/framework/utils";

export async function GET(
    req: MedusaRequest,
    res: MedusaResponse
) {
    const productId = req.params.id
    const productModuleService = req.scope.resolve(
        Modules.PRODUCT
    )

}