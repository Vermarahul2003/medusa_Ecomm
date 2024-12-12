import { MedusaRequest, MedusaResponse } from "@medusajs/framework";
import { Modules } from "@medusajs/framework/utils";

export async function GET(
    req: MedusaRequest,
    res: MedusaResponse
): Promise<void>{
    const inventoryId = req.params.id

    const inventoryServiceModule = req.scope.resolve(
        Modules.INVENTORY
    )

    console.log("Inventory id: ", inventoryId)
    const inventory = await inventoryServiceModule.listInventoryItems({id: [inventoryId]})

    res.json(
        inventory
    )
}