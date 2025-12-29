import { ScrollView, Text, View } from "react-native"
import { useMovies } from "../../hooks/useMovies"
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { PosterCarousel } from "../../components/movies/PosterCarousel";
import { HorizontalCarousel } from "../../components/movies/HorizontalCarousel";

export const HomeScreen = () => {

    const { top } = useSafeAreaInsets();

    const {isLoading, nowPlaying, popular, topRated, upcoming} = useMovies();

    if(isLoading) {
        return ( <Text>Is loading...</Text> )
    }
    
    return (
        <ScrollView>
            <View style={{ marginTop: top + 20, paddingBottom: 30 }}>

                {/* Main */}
                <PosterCarousel movies={nowPlaying} />

                {/* Popular */}

                <HorizontalCarousel movies={ popular } title="Popular" />

                {/* Top Rated */}

                <HorizontalCarousel movies={ topRated } title="Top Rated" />

                {/* Popular */}

                <HorizontalCarousel movies={ upcoming } title="Upcoming" />
            </View>
        </ScrollView>
    )
}
