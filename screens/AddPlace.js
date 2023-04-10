import PlaceForm from "../components/Places/PlaceForm";
import { insertPlace } from "../util/database";

function AddPlace({ navigation }) {
  async function createPlaceHandler(place) {
    await insertPlace(place);
    navigation.navigate("AllPlaces");
  }

  return (
    <PlaceForm onCreatePlace={createPlaceHandler} navigation={navigation} />
  );
}

export default AddPlace;
