// const fullCatalog = [ 
//   {id: 1, name: "Wireless Headphones", price: 99.99, tags: ["audio", "wireless"]},
//   {id: 2, name: "Bluetooth Speaker", price: 49.99, tags: ["audio", "bluetooth"]},
//   {id: 3, name: "Smartphone", price: 799.99, tags: ["mobile", "wireless"]},
//   {id: 4, name: "Wireless Mouse", price: 29.99, tags: ["computer", "wireless"]},
//   {id: 5, name: "Laptop", price: 999.99, tags: ["computer", "portable"]}
// ];

// const tests = [  [fullCatalog, "wireless", [4, 1, 3]],
//   [fullCatalog, "computer", [4, 5]],
//   [fullCatalog, "Wireless", [4, 1, 3]],
//   [fullCatalog, "WAT", []],
// ];


print("Start small. Ship something.")

fullCatalog = [ 
  {'id': 1, 'name': "Wireless Headphones", 'price': 99.99, 'tags': ["audio", "wireless"]},
  {'id': 2, 'name': "Bluetooth Speaker", 'price': 49.99, 'tags': ["audio", "bluetooth"]},
  {'id': 3, 'name': "Smartphone", 'price': 799.99, 'tags': ["mobile", "wireless"]},
  {'id': 4, 'name': "Wireless Mouse", 'price': 29.99, 'tags': ["computer", "wireless"]},
  {'id': 5, 'name': "Laptop", 'price': 999.99, 'tags': ["computer", "portable"]}
];

def product_ids(fullCatalog, tag):
    product_ids={}
    for catalog in fullCatalog:
        if tag in catalog["tags"]:
            product_ids[catalog["price"]] = catalog["id"]
    
    sorted_products = dict(sorted(product_ids.items(), key=lambda item: item[0]))
    print(sorted_products)
    return list(sorted_products.values())
            
        


        
print(product_ids(fullCatalog, "computer"))
        
