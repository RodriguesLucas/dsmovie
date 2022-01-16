import axios from "axios";
import { useState } from "react";
import MovieCard from "components/MovieCard";
import Pagination from "components/pagination";
import { BASE_URL } from "utils/requests";
import { MoviePage } from "types/movie";
import { useEffect } from "react";

function listing() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [pageNumber, setPageNumber] = useState(0);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [page, setPage] = useState<MoviePage>({
        content: [],
        last: true,
        totalPages: 0,
        totalElements: 0,
        size: 12,
        number: 0,
        first: true,
        numberOfElements: 0,
        empty: true
    });

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        axios.get(`${BASE_URL}/movies?size=12&page=${pageNumber}&sort=id`)
            .then(response => {
                const data = response.data as MoviePage;
                setPage(data);
            });
    }, [pageNumber]);

    return (
        <>
            <Pagination />
            <div className="container">
                <div className="row">
                    {page.content.map(movie =>
                    (
                        <div key={movie.id} className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                            <MovieCard movie={movie} />
                        </div>
                    )
                    )};
                </div>
            </div>

        </>
    )
}

export default listing;