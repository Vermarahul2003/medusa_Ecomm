import { MedusaRequest, MedusaResponse } from "@medusajs/framework";
import { Modules } from "@medusajs/framework/utils";

export async function GET(
    req: MedusaRequest,
    res: MedusaResponse
): Promise<void>{
    const inventoryModuleService = req.scope.resolve(
        Modules.INVENTORY
    )

    const inventory = await inventoryModuleService.listInventoryItems({})

    res.json({
        inventory
    })
}


export async function POST(
    req: MedusaRequest,
    res: MedusaResponse
): Promise<void>{
    try {
        const inventoryModuleService = req.scope.resolve(
            Modules.INVENTORY
        )

        const {sku} = req.body as {sku: string}

        if (!sku) {
            res.status(400).json({
                error: "SKU is required"
            })
            return
        }
        
        const inventory = await inventoryModuleService.createInventoryItems([
            {
                sku
            }
        ])

        res.json({
            "message": `${sku} added successfully`,
            inventory
        })
    } catch (error) {
        res.status(500).json({
            error: "Failed to create inventory item",
            details: error.message
        })
    }
}