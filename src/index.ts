import { Map } from "./entities/Map";
import { user } from "./entities/User";
import { company } from "./entities/Company";

const map = new Map("map");
map.addMarker(company);
map.addMarker(user);
