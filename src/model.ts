let displayName: string = "Jess's standing desk";
let inventoryType: string = "furniture";
let trackingNumber: string = "FD123455";
let createDate: Date = new Date();

type Cost = number | string;

let originalCost: Cost = 425;

enum InventoryItemType {
    Computer = 'computer',
    Furniture = 'furniture'
}

interface InventoryItem {
    displayName: string,
    inventoryType: InventoryItemType,
    readonly trackingNumber: string, //cannot change the value if is set to readonly
    createDate: Date,
    originalCost?: number //might not always have original cost

    addNote?: (note: string) => string;
}

function getInventoryItem(trackingNumber: string): InventoryItem {
    return null;
}

function saveInventoryItem(item: InventoryItem) {

}

let inventoryItem = getInventoryItem(trackingNumber);

inventoryItem.createDate = new Date();

saveInventoryItem(inventoryItem);