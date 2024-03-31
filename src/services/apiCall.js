import { API_URL } from "./url";

export async function getEmojis() {
  try {
    const res = await fetch(API_URL);
    if (!res.ok) {
      throw new Error("Failed to fetch emojis");
    }
    const data = await res.json();

    return data;
  } catch (error) {
    console.error("Error fetching emojis:", error);
  }
}

export async function searchEmoji(query) {
  const data = await getEmojis();
  const searcheData = data?.filter((dataName) =>
    dataName.name.toLowerCase().includes(query.toLowerCase())
  );

  return searcheData;
}
