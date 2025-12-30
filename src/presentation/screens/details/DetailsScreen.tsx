import { useRoute } from "@react-navigation/native"
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text, View } from "react-native"
import { RootStackParams } from "../../navigation/Navigation";
import { useMovie } from "../../hooks/useMovie";

interface Props extends NativeStackScreenProps<RootStackParams, 'Details' >{}

export const DetailsScreen = ({ route }: Props) => {

    const { movieId } = route.params;

    const {} = useMovie( movieId );
    return (
       <View>
            <Text>Details Screen</Text>
       </View>
    )
}
