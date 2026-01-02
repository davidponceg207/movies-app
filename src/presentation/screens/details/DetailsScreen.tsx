import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { ScrollView, Text, View } from "react-native"
import { RootStackParams } from "../../navigation/Navigation";
import { useMovie } from "../../hooks/useMovie";
import { MovieHeader } from "../../components/movie/MovieHeader";
import { MovieDetails } from "../../components/movie/MovieDetails";

interface Props extends NativeStackScreenProps<RootStackParams, 'Details' >{}

export const DetailsScreen = ({ route }: Props) => {

    const { movieId } = route.params;

    const { isLoading, movie, cast } = useMovie( movieId );

    if( isLoading ) {
        return <Text>Loading...</Text>
    }
    return (
       <ScrollView>
            <MovieHeader
                title={ movie!.title }
                originalTitle={ movie!.originalTitle }
                poster={ movie!.poster }
            />

            <MovieDetails movie={ movie! } cast={cast!} />
       </ScrollView>
    )
}
