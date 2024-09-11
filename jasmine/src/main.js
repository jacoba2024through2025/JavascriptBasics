//https://github.com/BaseCampCoding/module-1-javascript-exercise-jacoba2024through2025?tab=readme-ov-file
function experience(yearsExperience) {
    if (yearsExperience >= 0 && yearsExperience <= 1) {
        return 'Beginner'

    }
    else if (yearsExperience > 1 && yearsExperience <= 3) {
        return 'Intermediate'
    }

    else if (yearsExperience > 3 && yearsExperience <= 6) {
        return 'Advanced'
    }

    else if (yearsExperience >= 7) {
        return 'Master'
    }
}

function hasSkill(skills) {
    if (skills.includes("Javascript")) {
        return true
    } else {
        return false
    }
}
    

const address = {
    street: "",
    number: 1111,
    neighborhood: "",
    city: "",
    state: "",
    zip_code: 11111
  };

function formatAddress(address) {
    
    return `Hello, my address is ${address.number} ${address.street}, ${address.city}, ${address.state} ${address.zip_code} in the ${address.neighborhood.toLowerCase()} neighborhood.`;


    
}