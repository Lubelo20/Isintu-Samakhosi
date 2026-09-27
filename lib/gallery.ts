import type { PhotoKey } from "./photos";

// Client-supplied photos, grouped for the gallery page.
export const galleryGroups: { id: string; label: string; photos: PhotoKey[] }[] = [
  {
    id: "community",
    label: "Community",
    photos: ["umlazi-food-bank", "food-distribution", "food-handover-bucket", "food-distribution-2", "food-parcel-handover", "community-kitchen", "community-gathering", "community-dance", "marquee-gathering"],
  },
  {
    id: "heritage",
    label: "Heritage and leadership",
    photos: ["amakhosi-gathering", "amakhosi-signing", "inkosi-meeting", "traditional-regalia", "amakhosi-gathering-field", "inkosi-and-president", "inkosi-portrait", "heritage-museum-group", "great-king-book", "heritage-museum-visit", "heritage-signing", "international-visit"],
  },
  {
    id: "enterprise",
    label: "Enterprise and skills",
    photos: ["workshop-hall", "phahla-speaking", "youth-session", "youth-group", "youth-speaker", "audience-mkri", "phahla-podium", "mkri-table", "mkri-group", "mkri-group-2", "mkri-meeting", "partner-stand", "leaders-outside-venue", "funeral-association-event", "funeral-association-blessing"],
  },
  {
    id: "rural",
    label: "Rural infrastructure",
    photos: ["greenhouse-seedlings", "poultry-house-interior", "cabbage-field", "poultry-house", "container-facility"],
  },
  {
    id: "recognition",
    label: "Recognition",
    photos: ["award-handover-umgungundlovu", "ngobese-award", "ngobese-portrait", "ngobese-event-seated", "award-handover-kzn", "women-awards", "phahla-portrait", "phahla-event", "phahla-gift"],
  },
];
