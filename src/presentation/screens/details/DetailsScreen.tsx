import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text, View } from "react-native"
import { RootStackParams } from "../../navigation/Navigation";
import { useMovie } from "../../hooks/useMovie";
import { MovieHeader } from "../../components/movie/MovieHeader";

interface Props extends NativeStackScreenProps<RootStackParams, 'Details' >{}

export const DetailsScreen = ({ route }: Props) => {

    const { movieId } = route.params;

    const { isLoading, movie } = useMovie( movieId );

    if( isLoading ) {
        return <Text>Loading...</Text>
    }
    return (
       <View>
            <MovieHeader
                title={ movie!.title }
                originalTitle={ movie!.originalTitle }
                poster={ movie!.poster }
            />
       </View>
    )
}
