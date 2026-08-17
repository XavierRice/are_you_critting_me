const url =
  "https://api.open5e.com/v2/species/?document__key__in=srd-2024&fields=name,key";

async function getSpecies() {
  try {
    console.log("Calling Open5e...");

    const response = await fetch(url);

    console.log("HTTP status:", response.status);

    if (!response.ok) {
      throw new Error(
        `Open5e request failed: ${response.status}`
      );
    }

    const data = await response.json();

    console.log("Full response:");
    console.log(data);

    console.log("\nSpecies:");
    data.results.forEach((species) => {
      console.log(`- ${species.name}`);
    });
  } catch (error) {
    console.error("Something went wrong:");
    console.error(error);
  }
}

getSpecies();