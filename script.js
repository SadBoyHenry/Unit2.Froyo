function countFlavors(flavorString) {
    const flavors = flavorString.split(",");
    
        const flavorCount = {};
    
    const recognizedFlavors = ["vanilla", "chocolate", "strawberry", "coffee"];
    
    flavors.forEach(function(flavor) {
        flavor = flavor.trim();
        
        if (recognizedFlavors.includes(flavor)) {
            if (flavorCount[flavor]) {
                flavorCount[flavor]++;
            } else {
                flavorCount[flavor] = 1;
            }
        } else {
            console.error("Flavor '" + flavor + "' is not available. Please return to main.");
        }
    });
    
    return flavorCount;
}

const flavorInput = prompt("Please enter a list of comma-separated froyo flavors:");

const flavorCounts = countFlavors(flavorInput);

console.table(flavorCounts);

