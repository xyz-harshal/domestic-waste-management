import React, { useState } from "react";
import Map from "./Map";
import { OpenStreetMapProvider } from "leaflet-geosearch";
import useTrashMap from "../../hooks/useTrashMap";

const provider = new OpenStreetMapProvider();

const TrashDetailsForm = () => {

  const [mapKey, setMapKey] = useState(0);
  const [desc, setDesc] = useState("");
  const [address, setAddress] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const { postMapDetails, error, isLoading } = useTrashMap();

  async function handleSubmit(e) {
    e.preventDefault();
    //converting address to geocodes
    const location = await provider.search({ query: address });
    const lat = location[0].y;
    const long = location[0].x;

    const formData = new FormData();
    formData.append("description", desc);
    formData.append("address", address);
    formData.append("lat", lat);
    formData.append("long", long);
    formData.append("image", selectedImage);

    await postMapDetails(formData);
    setAddress("");
    setDesc("");
    setSelectedImage(null);
  }
  return (
    <div className="page">
      <form onSubmit={handleSubmit} className="formBlock">
        <label>Description</label>
        <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)}></input>

        <label>Address: </label>
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)}></input>

        <label>Upload Image: </label>
        <input
          type="file"
          name="myImage"
          onChange={(e) => setSelectedImage(e.target.files[0])}
        />
        <div>
          <button type="submit" disabled={isLoading} onClick={() => setMapKey(mapKey+1)}>Upload Data</button>
        </div>
      </form>
      {error && <div className="error">{error}</div>}
      <Map key={mapKey} />
    </div>
  );
};

export default TrashDetailsForm;