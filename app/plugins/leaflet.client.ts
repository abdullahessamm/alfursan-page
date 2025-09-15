import leaflet from "leaflet";
import omnivore from "leaflet-omnivore";
import "leaflet/dist/leaflet.css";

export default defineNuxtPlugin(() => ({
  provide: {
    leaflet, omnivore
  }
}))
