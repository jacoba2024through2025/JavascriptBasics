describe("Address Formatting Function", function () {
  it("should format the address correctly for Water Valley", function () {
    var address = {
      street: "Central St",
      number: 802,
      neighborhood: "Downtown",
      city: "Water Valley",
      state: "MS",
      zip_code: 38695
    };

    var formattedAddress = formatAddress(address);

    expect(formattedAddress).toEqual(
      "Hello, my address is 802 Central St, Water Valley, MS 38695 in the downtown neighborhood."
    );
  });

  it("should format the address correctly for Houston", function () {
    var address = {
      street: "Main St",
      number: 1234,
      neighborhood: "Suburb",
      city: "Houston",
      state: "TX",
      zip_code: 77005
    };

    var formattedAddress = formatAddress(address);

    // Define your expectations
    expect(formattedAddress).toEqual(
      "Hello, my address is 1234 Main St, Houston, TX 77005 in the suburb neighborhood."
    );
  });

  it("should format the address correctly for Detroit", function () {
    var address = {
      street: "Lakeview Dr",
      number: 9345,
      neighborhood: "Urban",
      city: "Detroit",
      state: "MI",
      zip_code: 48127
    };

    var formattedAddress = formatAddress(address);

    expect(formattedAddress).toEqual(
      "Hello, my address is 9345 Lakeview Dr, Detroit, MI 48127 in the urban neighborhood."
    );
  });
});

describe("hasSkill function", function() {
  it("should return true if 'Javascript' skill is in the skills array", function() {
    var skills = ["HTML", "CSS", "Javascript", "React"];
    expect(hasSkill(skills)).toBe(true);
  });

  it("should return false if 'Javascript' skill is not in the skills array", function() {
    var skills = ["HTML", "CSS", "React"];
    expect(hasSkill(skills)).toBe(false);
  });
});

describe("experience function", function() {
  it("should return 'Beginner' for 0-1 year of study", function() {
    expect(experience(0)).toBe("Beginner");
    expect(experience(1)).toBe("Beginner");
  });

  it("should return 'Intermediate' for 1-3 years of study", function() {
    expect(experience(2)).toBe("Intermediate");
    expect(experience(3)).toBe("Intermediate");
  });

  it("should return 'Advanced' for 3-6 years of study", function() {
    expect(experience(4)).toBe("Advanced");
    expect(experience(6)).toBe("Advanced");
  });

  it("should return 'Master' for 7 years and above of study", function() {
    expect(experience(7)).toBe("Master");
    expect(experience(10)).toBe("Master");
  });

  it("should handle invalid input gracefully", function() {
    // For negative input or non-numeric input, it should return undefined.
    expect(experience(-1)).toBeUndefined();
    expect(experience("abc")).toBeUndefined();
  });
});
