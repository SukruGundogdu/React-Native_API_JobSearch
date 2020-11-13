import React from "react";
import {TouchableOpacity, Text} from "react-native";

const TopicItem = () => {
    return(
        <TouchableOpacity>
            <Text>{props.title}</Text>
        </TouchableOpacity>
    );
};

export {TopicItem};