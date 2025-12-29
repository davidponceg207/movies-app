import { useRoute } from "@react-navigation/native"
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text, View } from "react-native"
import { RootStackParams } from "../../navigation/Navigation";

interface Props extends NativeStackScreenProps<RootStackParams, 'Details' >{}

export const DetailsScreen = ({ route }: Props) => {

    const { movieId } = route.params;

    console.log({movieId});
    return (
       <View>
            <Text>Details Screen</Text>
       </View>
    )
}
