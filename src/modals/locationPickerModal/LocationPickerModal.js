import React, { useEffect, useRef, useState } from "react";
import { View, Modal, Text, TouchableOpacity } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import Geocoder from "react-native-geocoding";
import { COLOR } from "../../assets/colors";
import styles from "./styles";



const LocationPickerModal = ({ visible, onClose, onLocationSelected}) => {

    const [marker, setMarker] = useState();
    const [address, setAddress] = useState();

    const mapRef = useRef();

    Geocoder.init("AIzaSyAVDGgX_0YzJ8HJafdLQWqQc-pLJozUgqc");

    useEffect(() => {

        if (marker !== undefined) {
            Geocoder.from(marker.latitude, marker.longitude).then(data => {
                let fetchAddress = data.results[0].formatted_address;
                setAddress(fetchAddress);
            })
        }
    }, [marker]);

    return (
        <Modal visible={visible}>
            <View style={styles.modalContainer}>
                <MapView ref={mapRef} zoomControlEnabled={true} showsMyLocationButton={true} provider={PROVIDER_GOOGLE}
                    style={styles.map} region={{
                        latitude: 30.562329,
                        longitude: 32.261519,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                    }} onPress={e => setMarker(e.nativeEvent.coordinate)}>

                    {marker ? <Marker coordinate={marker} /> : null}

                </MapView>

                <View>
                    <View style={styles.mapHeaderContainer}>
                        <Text>Pick Shop Location</Text>
                        <TouchableOpacity onPress={() => { onClose() }}>
                            <FontAwesomeIcon icon={faClose} />
                        </TouchableOpacity>
                    </View>
                    <Text>{address}</Text>
                </View>
                
                <TouchableOpacity style={styles.confirmContainer} onPress={() => {onLocationSelected({marker,address})}}>
                   <Text style={styles.confirmTxt}>Confirm Location</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    );
};


export default LocationPickerModal;

//