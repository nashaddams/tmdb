/** TMDB API v3 */
export class TmdbApi {
  #base_url: string = "https://api.themoviedb.org";
  #api_key: string;

  constructor(api_key: string) {
    this.#api_key = api_key;
  }

  /**
   * Search for movies by their original, translated and alternative titles.
   *
   * @param {{ query: string; include_adult?: boolean; language?: string; primary_release_year?: string; page?: number; region?: string; year?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/search-movie
   */
  async searchMovie(
    opts: {
      query: string;
      include_adult?: boolean;
      language?: string;
      primary_release_year?: string;
      page?: number;
      region?: string;
      year?: string;
    },
  ): Promise<
    {
      page: number;
      results: {
        adult: boolean;
        backdrop_path: string;
        genre_ids: number[];
        id: number;
        original_language: string;
        original_title: string;
        overview: string;
        popularity: number;
        poster_path: string;
        release_date: string;
        title: string;
        video: boolean;
        vote_average: number;
        vote_count: number;
      }[];
      total_pages: number;
      total_results: number;
    }
  > {
    let queryParams = "";

    if (opts["query"]) {
      queryParams += `&query=${opts["query"]}`;
    }
    if (opts["include_adult"]) {
      queryParams += `&include_adult=${opts["include_adult"]}`;
    }
    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    if (opts["primary_release_year"]) {
      queryParams += `&primary_release_year=${opts["primary_release_year"]}`;
    }
    if (opts["page"]) {
      queryParams += `&page=${opts["page"]}`;
    }
    if (opts["region"]) {
      queryParams += `&region=${opts["region"]}`;
    }
    if (opts["year"]) {
      queryParams += `&year=${opts["year"]}`;
    }

    return await (await fetch(
      `${this.#base_url}/3/search/movie?api_key=${this.#api_key}${queryParams}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Find movies using over 30 filters and sort options.
   *
   * @param {{ certification?: string; "certification.gte"?: string; "certification.lte"?: string; certification_country?: string; include_adult?: boolean; include_video?: boolean; language?: string; page?: number; primary_release_year?: number; "primary_release_date.gte"?: string; "primary_release_date.lte"?: string; region?: string; "release_date.gte"?: string; "release_date.lte"?: string; sort_by?: "original_title.asc" | "original_title.desc" | "popularity.asc" | "popularity.desc" | "revenue.asc" | "revenue.desc" | "primary_release_date.asc" | "title.asc" | "title.desc" | "primary_release_date.desc" | "vote_average.asc" | "vote_average.desc" | "vote_count.asc" | "vote_count.desc"; "vote_average.gte"?: number; "vote_average.lte"?: number; "vote_count.gte"?: number; "vote_count.lte"?: number; watch_region?: string; with_cast?: string; with_companies?: string; with_crew?: string; with_genres?: string; with_keywords?: string; with_origin_country?: string; with_original_language?: string; with_people?: string; with_release_type?: number; "with_runtime.gte"?: number; "with_runtime.lte"?: number; with_watch_monetization_types?: string; with_watch_providers?: string; without_companies?: string; without_genres?: string; without_keywords?: string; without_watch_providers?: string; year?: number; }} opts
   * @see https://developer.themoviedb.org/v3/reference/discover-movie
   */
  async discoverMovie(
    opts?: {
      certification?: string;
      "certification.gte"?: string;
      "certification.lte"?: string;
      certification_country?: string;
      include_adult?: boolean;
      include_video?: boolean;
      language?: string;
      page?: number;
      primary_release_year?: number;
      "primary_release_date.gte"?: string;
      "primary_release_date.lte"?: string;
      region?: string;
      "release_date.gte"?: string;
      "release_date.lte"?: string;
      sort_by?:
        | "original_title.asc"
        | "original_title.desc"
        | "popularity.asc"
        | "popularity.desc"
        | "revenue.asc"
        | "revenue.desc"
        | "primary_release_date.asc"
        | "title.asc"
        | "title.desc"
        | "primary_release_date.desc"
        | "vote_average.asc"
        | "vote_average.desc"
        | "vote_count.asc"
        | "vote_count.desc";
      "vote_average.gte"?: number;
      "vote_average.lte"?: number;
      "vote_count.gte"?: number;
      "vote_count.lte"?: number;
      watch_region?: string;
      with_cast?: string;
      with_companies?: string;
      with_crew?: string;
      with_genres?: string;
      with_keywords?: string;
      with_origin_country?: string;
      with_original_language?: string;
      with_people?: string;
      with_release_type?: number;
      "with_runtime.gte"?: number;
      "with_runtime.lte"?: number;
      with_watch_monetization_types?: string;
      with_watch_providers?: string;
      without_companies?: string;
      without_genres?: string;
      without_keywords?: string;
      without_watch_providers?: string;
      year?: number;
    },
  ): Promise<
    {
      page: number;
      results: {
        adult: boolean;
        backdrop_path: string;
        genre_ids: number[];
        id: number;
        original_language: string;
        original_title: string;
        overview: string;
        popularity: number;
        poster_path: string;
        release_date: string;
        title: string;
        video: boolean;
        vote_average: number;
        vote_count: number;
      }[];
      total_pages: number;
      total_results: number;
    }
  > {
    let queryParams = "";

    if (opts?.["certification"]) {
      queryParams += `&certification=${opts["certification"]}`;
    }
    if (opts?.["certification.gte"]) {
      queryParams += `&certification.gte=${opts["certification.gte"]}`;
    }
    if (opts?.["certification.lte"]) {
      queryParams += `&certification.lte=${opts["certification.lte"]}`;
    }
    if (opts?.["certification_country"]) {
      queryParams += `&certification_country=${opts["certification_country"]}`;
    }
    if (opts?.["include_adult"]) {
      queryParams += `&include_adult=${opts["include_adult"]}`;
    }
    if (opts?.["include_video"]) {
      queryParams += `&include_video=${opts["include_video"]}`;
    }
    if (opts?.["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    if (opts?.["page"]) {
      queryParams += `&page=${opts["page"]}`;
    }
    if (opts?.["primary_release_year"]) {
      queryParams += `&primary_release_year=${opts["primary_release_year"]}`;
    }
    if (opts?.["primary_release_date.gte"]) {
      queryParams += `&primary_release_date.gte=${
        opts["primary_release_date.gte"]
      }`;
    }
    if (opts?.["primary_release_date.lte"]) {
      queryParams += `&primary_release_date.lte=${
        opts["primary_release_date.lte"]
      }`;
    }
    if (opts?.["region"]) {
      queryParams += `&region=${opts["region"]}`;
    }
    if (opts?.["release_date.gte"]) {
      queryParams += `&release_date.gte=${opts["release_date.gte"]}`;
    }
    if (opts?.["release_date.lte"]) {
      queryParams += `&release_date.lte=${opts["release_date.lte"]}`;
    }
    if (opts?.["sort_by"]) {
      queryParams += `&sort_by=${opts["sort_by"]}`;
    }
    if (opts?.["vote_average.gte"]) {
      queryParams += `&vote_average.gte=${opts["vote_average.gte"]}`;
    }
    if (opts?.["vote_average.lte"]) {
      queryParams += `&vote_average.lte=${opts["vote_average.lte"]}`;
    }
    if (opts?.["vote_count.gte"]) {
      queryParams += `&vote_count.gte=${opts["vote_count.gte"]}`;
    }
    if (opts?.["vote_count.lte"]) {
      queryParams += `&vote_count.lte=${opts["vote_count.lte"]}`;
    }
    if (opts?.["watch_region"]) {
      queryParams += `&watch_region=${opts["watch_region"]}`;
    }
    if (opts?.["with_cast"]) {
      queryParams += `&with_cast=${opts["with_cast"]}`;
    }
    if (opts?.["with_companies"]) {
      queryParams += `&with_companies=${opts["with_companies"]}`;
    }
    if (opts?.["with_crew"]) {
      queryParams += `&with_crew=${opts["with_crew"]}`;
    }
    if (opts?.["with_genres"]) {
      queryParams += `&with_genres=${opts["with_genres"]}`;
    }
    if (opts?.["with_keywords"]) {
      queryParams += `&with_keywords=${opts["with_keywords"]}`;
    }
    if (opts?.["with_origin_country"]) {
      queryParams += `&with_origin_country=${opts["with_origin_country"]}`;
    }
    if (opts?.["with_original_language"]) {
      queryParams += `&with_original_language=${
        opts["with_original_language"]
      }`;
    }
    if (opts?.["with_people"]) {
      queryParams += `&with_people=${opts["with_people"]}`;
    }
    if (opts?.["with_release_type"]) {
      queryParams += `&with_release_type=${opts["with_release_type"]}`;
    }
    if (opts?.["with_runtime.gte"]) {
      queryParams += `&with_runtime.gte=${opts["with_runtime.gte"]}`;
    }
    if (opts?.["with_runtime.lte"]) {
      queryParams += `&with_runtime.lte=${opts["with_runtime.lte"]}`;
    }
    if (opts?.["with_watch_monetization_types"]) {
      queryParams += `&with_watch_monetization_types=${
        opts["with_watch_monetization_types"]
      }`;
    }
    if (opts?.["with_watch_providers"]) {
      queryParams += `&with_watch_providers=${opts["with_watch_providers"]}`;
    }
    if (opts?.["without_companies"]) {
      queryParams += `&without_companies=${opts["without_companies"]}`;
    }
    if (opts?.["without_genres"]) {
      queryParams += `&without_genres=${opts["without_genres"]}`;
    }
    if (opts?.["without_keywords"]) {
      queryParams += `&without_keywords=${opts["without_keywords"]}`;
    }
    if (opts?.["without_watch_providers"]) {
      queryParams += `&without_watch_providers=${
        opts["without_watch_providers"]
      }`;
    }
    if (opts?.["year"]) {
      queryParams += `&year=${opts["year"]}`;
    }

    return await (await fetch(
      `${this.#base_url}/3/discover/movie?api_key=${this.#api_key}${queryParams}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Get the top level details of a movie by ID.
   *
   * @param {{ movie_id: number; append_to_response?: string; language?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/movie-details
   */
  async movieDetails(
    opts: { movie_id: number; append_to_response?: string; language?: string },
  ): Promise<
    {
      adult: boolean;
      backdrop_path: string;
      belongs_to_collection: unknown;
      budget: number;
      genres: { id: number; name: string }[];
      homepage: string;
      id: number;
      imdb_id: string;
      original_language: string;
      original_title: string;
      overview: string;
      popularity: number;
      poster_path: string;
      production_companies: {
        id: number;
        logo_path: string;
        name: string;
        origin_country: string;
      }[];
      production_countries: { iso_3166_1: string; name: string }[];
      release_date: string;
      revenue: number;
      runtime: number;
      spoken_languages: {
        english_name: string;
        iso_639_1: string;
        name: string;
      }[];
      status: string;
      tagline: string;
      title: string;
      video: boolean;
      vote_average: number;
      vote_count: number;
    }
  > {
    let queryParams = "";

    if (opts["append_to_response"]) {
      queryParams += `&append_to_response=${opts["append_to_response"]}`;
    }
    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }

    return await (await fetch(
      `${this.#base_url}/3/movie/${opts.movie_id}?api_key=${this.#api_key}${queryParams}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Get the details of a TV show.
   *
   * @param {{ series_id: number; append_to_response?: string; language?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/tv-series-details
   */
  async tvSeriesDetails(
    opts: { series_id: number; append_to_response?: string; language?: string },
  ): Promise<
    {
      adult: boolean;
      backdrop_path: string;
      created_by: {
        id: number;
        credit_id: string;
        name: string;
        gender: number;
        profile_path: string;
      }[];
      episode_run_time: number[];
      first_air_date: string;
      genres: { id: number; name: string }[];
      homepage: string;
      id: number;
      in_production: boolean;
      languages: string[];
      last_air_date: string;
      last_episode_to_air: {
        id: number;
        name: string;
        overview: string;
        vote_average: number;
        vote_count: number;
        air_date: string;
        episode_number: number;
        production_code: string;
        runtime: number;
        season_number: number;
        show_id: number;
        still_path: string;
      };
      name: string;
      next_episode_to_air: unknown;
      networks: {
        id: number;
        logo_path: string;
        name: string;
        origin_country: string;
      }[];
      number_of_episodes: number;
      number_of_seasons: number;
      origin_country: string[];
      original_language: string;
      original_name: string;
      overview: string;
      popularity: number;
      poster_path: string;
      production_companies: {
        id: number;
        logo_path: string;
        name: string;
        origin_country: string;
      }[];
      production_countries: { iso_3166_1: string; name: string }[];
      seasons: {
        air_date: string;
        episode_count: number;
        id: number;
        name: string;
        overview: string;
        poster_path: string;
        season_number: number;
        vote_average: number;
      }[];
      spoken_languages: {
        english_name: string;
        iso_639_1: string;
        name: string;
      }[];
      status: string;
      tagline: string;
      type: string;
      vote_average: number;
      vote_count: number;
    }
  > {
    let queryParams = "";

    if (opts["append_to_response"]) {
      queryParams += `&append_to_response=${opts["append_to_response"]}`;
    }
    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }

    return await (await fetch(
      `${this.#base_url}/3/tv/${opts.series_id}?api_key=${this.#api_key}${queryParams}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Search for TV shows by their original, translated and also known as names.
   *
   * @param {{ query: string; first_air_date_year?: number; include_adult?: boolean; language?: string; page?: number; year?: number; }} opts
   * @see https://developer.themoviedb.org/v3/reference/search-tv
   */
  async searchTv(
    opts: {
      query: string;
      first_air_date_year?: number;
      include_adult?: boolean;
      language?: string;
      page?: number;
      year?: number;
    },
  ): Promise<
    {
      page: number;
      results: {
        adult: boolean;
        backdrop_path: string;
        genre_ids: number[];
        id: number;
        origin_country: string[];
        original_language: string;
        original_name: string;
        overview: string;
        popularity: number;
        poster_path: string;
        first_air_date: string;
        name: string;
        vote_average: number;
        vote_count: number;
      }[];
      total_pages: number;
      total_results: number;
    }
  > {
    let queryParams = "";

    if (opts["query"]) {
      queryParams += `&query=${opts["query"]}`;
    }
    if (opts["first_air_date_year"]) {
      queryParams += `&first_air_date_year=${opts["first_air_date_year"]}`;
    }
    if (opts["include_adult"]) {
      queryParams += `&include_adult=${opts["include_adult"]}`;
    }
    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    if (opts["page"]) {
      queryParams += `&page=${opts["page"]}`;
    }
    if (opts["year"]) {
      queryParams += `&year=${opts["year"]}`;
    }

    return await (await fetch(
      `${this.#base_url}/3/search/tv?api_key=${this.#api_key}${queryParams}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Use multi search when you want to search for movies, TV shows and people in a single request.
   *
   * @param {{ query: string; include_adult?: boolean; language?: string; page?: number; }} opts
   * @see https://developer.themoviedb.org/v3/reference/search-multi
   */
  async searchMulti(
    opts: {
      query: string;
      include_adult?: boolean;
      language?: string;
      page?: number;
    },
  ): Promise<
    {
      page: number;
      results: {
        adult: boolean;
        backdrop_path: string;
        id: number;
        title: string;
        original_language: string;
        original_title: string;
        overview: string;
        poster_path: string;
        media_type: string;
        genre_ids: number[];
        popularity: number;
        release_date: string;
        video: boolean;
        vote_average: number;
        vote_count: number;
      }[];
      total_pages: number;
      total_results: number;
    }
  > {
    let queryParams = "";

    if (opts["query"]) {
      queryParams += `&query=${opts["query"]}`;
    }
    if (opts["include_adult"]) {
      queryParams += `&include_adult=${opts["include_adult"]}`;
    }
    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    if (opts["page"]) {
      queryParams += `&page=${opts["page"]}`;
    }

    return await (await fetch(
      `${this.#base_url}/3/search/multi?api_key=${this.#api_key}${queryParams}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Search for people by their name and also known as names.
   *
   * @param {{ query: string; include_adult?: boolean; language?: string; page?: number; }} opts
   * @see https://developer.themoviedb.org/v3/reference/search-person
   */
  async searchPerson(
    opts: {
      query: string;
      include_adult?: boolean;
      language?: string;
      page?: number;
    },
  ): Promise<
    {
      page: number;
      results: {
        adult: boolean;
        gender: number;
        id: number;
        known_for_department: string;
        name: string;
        original_name: string;
        popularity: number;
        profile_path: string;
        known_for: {
          adult: boolean;
          backdrop_path: string;
          id: number;
          title: string;
          original_language: string;
          original_title: string;
          overview: string;
          poster_path: string;
          media_type: string;
          genre_ids: number[];
          popularity: number;
          release_date: string;
          video: boolean;
          vote_average: number;
          vote_count: number;
        }[];
      }[];
      total_pages: number;
      total_results: number;
    }
  > {
    let queryParams = "";

    if (opts["query"]) {
      queryParams += `&query=${opts["query"]}`;
    }
    if (opts["include_adult"]) {
      queryParams += `&include_adult=${opts["include_adult"]}`;
    }
    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    if (opts["page"]) {
      queryParams += `&page=${opts["page"]}`;
    }

    return await (await fetch(
      `${this.#base_url}/3/search/person?api_key=${this.#api_key}${queryParams}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Query the API configuration details.
   *
   * @see https://developer.themoviedb.org/v3/reference/configuration-details
   */
  async configurationDetails(): Promise<
    {
      images: {
        base_url: string;
        secure_base_url: string;
        backdrop_sizes: string[];
        logo_sizes: string[];
        poster_sizes: string[];
        profile_sizes: string[];
        still_sizes: string[];
      };
      change_keys: string[];
    }
  > {
    return await (await fetch(
      `${this.#base_url}/3/configuration?api_key=${this.#api_key}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Query the details of a TV season.
   *
   * @param {{ series_id: number; season_number: number; append_to_response?: string; language?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/tv-season-details
   */
  async tvSeasonDetails(
    opts: {
      series_id: number;
      season_number: number;
      append_to_response?: string;
      language?: string;
    },
  ): Promise<
    {
      _id: string;
      air_date: string;
      episodes: {
        air_date: string;
        episode_number: number;
        id: number;
        name: string;
        overview: string;
        production_code: string;
        runtime: number;
        season_number: number;
        show_id: number;
        still_path: string;
        vote_average: number;
        vote_count: number;
        crew: {
          department: string;
          job: string;
          credit_id: string;
          adult: boolean;
          gender: number;
          id: number;
          known_for_department: string;
          name: string;
          original_name: string;
          popularity: number;
          profile_path: string;
        }[];
        guest_stars: {
          character: string;
          credit_id: string;
          order: number;
          adult: boolean;
          gender: number;
          id: number;
          known_for_department: string;
          name: string;
          original_name: string;
          popularity: number;
          profile_path: string;
        }[];
      }[];
      name: string;
      overview: string;
      id: number;
      poster_path: string;
      season_number: number;
      vote_average: number;
    }
  > {
    let queryParams = "";

    if (opts["append_to_response"]) {
      queryParams += `&append_to_response=${opts["append_to_response"]}`;
    }
    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }

    return await (await fetch(
      `${this.#base_url}/3/tv/${opts.series_id}/season/${opts.season_number}?api_key=${this.#api_key}${queryParams}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Query the details of a TV episode.
   *
   * @param {{ series_id: number; season_number: number; episode_number: number; append_to_response?: string; language?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/tv-episode-details
   */
  async tvEpisodeDetails(
    opts: {
      series_id: number;
      season_number: number;
      episode_number: number;
      append_to_response?: string;
      language?: string;
    },
  ): Promise<
    {
      air_date: string;
      crew: {
        department: string;
        job: string;
        credit_id: string;
        adult: boolean;
        gender: number;
        id: number;
        known_for_department: string;
        name: string;
        original_name: string;
        popularity: number;
        profile_path: string;
      }[];
      episode_number: number;
      guest_stars: {
        character: string;
        credit_id: string;
        order: number;
        adult: boolean;
        gender: number;
        id: number;
        known_for_department: string;
        name: string;
        original_name: string;
        popularity: number;
        profile_path: string;
      }[];
      name: string;
      overview: string;
      id: number;
      production_code: string;
      runtime: number;
      season_number: number;
      still_path: string;
      vote_average: number;
      vote_count: number;
    }
  > {
    let queryParams = "";

    if (opts["append_to_response"]) {
      queryParams += `&append_to_response=${opts["append_to_response"]}`;
    }
    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }

    return await (await fetch(
      `${this.#base_url}/3/tv/${opts.series_id}/season/${opts.season_number}/episode/${opts.episode_number}?api_key=${this.#api_key}${queryParams}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Find TV shows using over 30 filters and sort options.
   *
   * @param {{ "air_date.gte"?: string; "air_date.lte"?: string; first_air_date_year?: number; "first_air_date.gte"?: string; "first_air_date.lte"?: string; include_adult?: boolean; include_null_first_air_dates?: boolean; language?: string; page?: number; screened_theatrically?: boolean; sort_by?: "first_air_date.asc" | "first_air_date.desc" | "name.asc" | "name.desc" | "original_name.asc" | "original_name.desc" | "popularity.asc" | "popularity.desc" | "vote_average.asc" | "vote_average.desc" | "vote_count.asc" | "vote_count.desc"; timezone?: string; "vote_average.gte"?: number; "vote_average.lte"?: number; "vote_count.gte"?: number; "vote_count.lte"?: number; watch_region?: string; with_companies?: string; with_genres?: string; with_keywords?: string; with_networks?: number; with_origin_country?: string; with_original_language?: string; "with_runtime.gte"?: number; "with_runtime.lte"?: number; with_status?: string; with_watch_monetization_types?: string; with_watch_providers?: string; without_companies?: string; without_genres?: string; without_keywords?: string; without_watch_providers?: string; with_type?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/discover-tv
   */
  async discoverTv(
    opts?: {
      "air_date.gte"?: string;
      "air_date.lte"?: string;
      first_air_date_year?: number;
      "first_air_date.gte"?: string;
      "first_air_date.lte"?: string;
      include_adult?: boolean;
      include_null_first_air_dates?: boolean;
      language?: string;
      page?: number;
      screened_theatrically?: boolean;
      sort_by?:
        | "first_air_date.asc"
        | "first_air_date.desc"
        | "name.asc"
        | "name.desc"
        | "original_name.asc"
        | "original_name.desc"
        | "popularity.asc"
        | "popularity.desc"
        | "vote_average.asc"
        | "vote_average.desc"
        | "vote_count.asc"
        | "vote_count.desc";
      timezone?: string;
      "vote_average.gte"?: number;
      "vote_average.lte"?: number;
      "vote_count.gte"?: number;
      "vote_count.lte"?: number;
      watch_region?: string;
      with_companies?: string;
      with_genres?: string;
      with_keywords?: string;
      with_networks?: number;
      with_origin_country?: string;
      with_original_language?: string;
      "with_runtime.gte"?: number;
      "with_runtime.lte"?: number;
      with_status?: string;
      with_watch_monetization_types?: string;
      with_watch_providers?: string;
      without_companies?: string;
      without_genres?: string;
      without_keywords?: string;
      without_watch_providers?: string;
      with_type?: string;
    },
  ): Promise<
    {
      page: number;
      results: {
        backdrop_path: string;
        first_air_date: string;
        genre_ids: number[];
        id: number;
        name: string;
        origin_country: string[];
        original_language: string;
        original_name: string;
        overview: string;
        popularity: number;
        poster_path: string;
        vote_average: number;
        vote_count: number;
      }[];
      total_pages: number;
      total_results: number;
    }
  > {
    let queryParams = "";

    if (opts?.["air_date.gte"]) {
      queryParams += `&air_date.gte=${opts["air_date.gte"]}`;
    }
    if (opts?.["air_date.lte"]) {
      queryParams += `&air_date.lte=${opts["air_date.lte"]}`;
    }
    if (opts?.["first_air_date_year"]) {
      queryParams += `&first_air_date_year=${opts["first_air_date_year"]}`;
    }
    if (opts?.["first_air_date.gte"]) {
      queryParams += `&first_air_date.gte=${opts["first_air_date.gte"]}`;
    }
    if (opts?.["first_air_date.lte"]) {
      queryParams += `&first_air_date.lte=${opts["first_air_date.lte"]}`;
    }
    if (opts?.["include_adult"]) {
      queryParams += `&include_adult=${opts["include_adult"]}`;
    }
    if (opts?.["include_null_first_air_dates"]) {
      queryParams += `&include_null_first_air_dates=${
        opts["include_null_first_air_dates"]
      }`;
    }
    if (opts?.["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    if (opts?.["page"]) {
      queryParams += `&page=${opts["page"]}`;
    }
    if (opts?.["screened_theatrically"]) {
      queryParams += `&screened_theatrically=${opts["screened_theatrically"]}`;
    }
    if (opts?.["sort_by"]) {
      queryParams += `&sort_by=${opts["sort_by"]}`;
    }
    if (opts?.["timezone"]) {
      queryParams += `&timezone=${opts["timezone"]}`;
    }
    if (opts?.["vote_average.gte"]) {
      queryParams += `&vote_average.gte=${opts["vote_average.gte"]}`;
    }
    if (opts?.["vote_average.lte"]) {
      queryParams += `&vote_average.lte=${opts["vote_average.lte"]}`;
    }
    if (opts?.["vote_count.gte"]) {
      queryParams += `&vote_count.gte=${opts["vote_count.gte"]}`;
    }
    if (opts?.["vote_count.lte"]) {
      queryParams += `&vote_count.lte=${opts["vote_count.lte"]}`;
    }
    if (opts?.["watch_region"]) {
      queryParams += `&watch_region=${opts["watch_region"]}`;
    }
    if (opts?.["with_companies"]) {
      queryParams += `&with_companies=${opts["with_companies"]}`;
    }
    if (opts?.["with_genres"]) {
      queryParams += `&with_genres=${opts["with_genres"]}`;
    }
    if (opts?.["with_keywords"]) {
      queryParams += `&with_keywords=${opts["with_keywords"]}`;
    }
    if (opts?.["with_networks"]) {
      queryParams += `&with_networks=${opts["with_networks"]}`;
    }
    if (opts?.["with_origin_country"]) {
      queryParams += `&with_origin_country=${opts["with_origin_country"]}`;
    }
    if (opts?.["with_original_language"]) {
      queryParams += `&with_original_language=${
        opts["with_original_language"]
      }`;
    }
    if (opts?.["with_runtime.gte"]) {
      queryParams += `&with_runtime.gte=${opts["with_runtime.gte"]}`;
    }
    if (opts?.["with_runtime.lte"]) {
      queryParams += `&with_runtime.lte=${opts["with_runtime.lte"]}`;
    }
    if (opts?.["with_status"]) {
      queryParams += `&with_status=${opts["with_status"]}`;
    }
    if (opts?.["with_watch_monetization_types"]) {
      queryParams += `&with_watch_monetization_types=${
        opts["with_watch_monetization_types"]
      }`;
    }
    if (opts?.["with_watch_providers"]) {
      queryParams += `&with_watch_providers=${opts["with_watch_providers"]}`;
    }
    if (opts?.["without_companies"]) {
      queryParams += `&without_companies=${opts["without_companies"]}`;
    }
    if (opts?.["without_genres"]) {
      queryParams += `&without_genres=${opts["without_genres"]}`;
    }
    if (opts?.["without_keywords"]) {
      queryParams += `&without_keywords=${opts["without_keywords"]}`;
    }
    if (opts?.["without_watch_providers"]) {
      queryParams += `&without_watch_providers=${
        opts["without_watch_providers"]
      }`;
    }
    if (opts?.["with_type"]) {
      queryParams += `&with_type=${opts["with_type"]}`;
    }

    return await (await fetch(
      `${this.#base_url}/3/discover/tv?api_key=${this.#api_key}${queryParams}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Get the images that belong to a movie.
   *
   * @param {{ movie_id: number; include_image_language?: string; language?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/movie-images
   */
  async movieImages(
    opts: {
      movie_id: number;
      include_image_language?: string;
      language?: string;
    },
  ): Promise<
    {
      backdrops: {
        aspect_ratio: number;
        height: number;
        iso_639_1: unknown;
        file_path: string;
        vote_average: number;
        vote_count: number;
        width: number;
      }[];
      id: number;
      logos: {
        aspect_ratio: number;
        height: number;
        iso_639_1: string;
        file_path: string;
        vote_average: number;
        vote_count: number;
        width: number;
      }[];
      posters: {
        aspect_ratio: number;
        height: number;
        iso_639_1: string;
        file_path: string;
        vote_average: number;
        vote_count: number;
        width: number;
      }[];
    }
  > {
    let queryParams = "";

    if (opts["include_image_language"]) {
      queryParams += `&include_image_language=${
        opts["include_image_language"]
      }`;
    }
    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }

    return await (await fetch(
      `${this.#base_url}/3/movie/${opts.movie_id}/images?api_key=${this.#api_key}${queryParams}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Get the images that belong to a TV series.
   *
   * @param {{ series_id: number; include_image_language?: string; language?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/tv-series-images
   */
  async tvSeriesImages(
    opts: {
      series_id: number;
      include_image_language?: string;
      language?: string;
    },
  ): Promise<
    {
      backdrops: {
        aspect_ratio: number;
        height: number;
        iso_639_1: unknown;
        file_path: string;
        vote_average: number;
        vote_count: number;
        width: number;
      }[];
      id: number;
      logos: {
        aspect_ratio: number;
        height: number;
        iso_639_1: string;
        file_path: string;
        vote_average: number;
        vote_count: number;
        width: number;
      }[];
      posters: {
        aspect_ratio: number;
        height: number;
        iso_639_1: string;
        file_path: string;
        vote_average: number;
        vote_count: number;
        width: number;
      }[];
    }
  > {
    let queryParams = "";

    if (opts["include_image_language"]) {
      queryParams += `&include_image_language=${
        opts["include_image_language"]
      }`;
    }
    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }

    return await (await fetch(
      `${this.#base_url}/3/tv/${opts.series_id}/images?api_key=${this.#api_key}${queryParams}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Get the images that belong to a TV season.
   *
   * @param {{ series_id: number; season_number: number; include_image_language?: string; language?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/tv-season-images
   */
  async tvSeasonImages(
    opts: {
      series_id: number;
      season_number: number;
      include_image_language?: string;
      language?: string;
    },
  ): Promise<
    {
      id: number;
      posters: {
        aspect_ratio: number;
        height: number;
        iso_639_1: string;
        file_path: string;
        vote_average: number;
        vote_count: number;
        width: number;
      }[];
    }
  > {
    let queryParams = "";

    if (opts["include_image_language"]) {
      queryParams += `&include_image_language=${
        opts["include_image_language"]
      }`;
    }
    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }

    return await (await fetch(
      `${this.#base_url}/3/tv/${opts.series_id}/season/${opts.season_number}/images?api_key=${this.#api_key}${queryParams}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Get the images that belong to a TV episode.
   *
   * @param {{ series_id: number; season_number: number; episode_number: number; include_image_language?: string; language?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/tv-episode-images
   */
  async tvEpisodeImages(
    opts: {
      series_id: number;
      season_number: number;
      episode_number: number;
      include_image_language?: string;
      language?: string;
    },
  ): Promise<
    {
      id: number;
      stills: {
        aspect_ratio: number;
        height: number;
        iso_639_1: unknown;
        file_path: string;
        vote_average: number;
        vote_count: number;
        width: number;
      }[];
    }
  > {
    let queryParams = "";

    if (opts["include_image_language"]) {
      queryParams += `&include_image_language=${
        opts["include_image_language"]
      }`;
    }
    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }

    return await (await fetch(
      `${this.#base_url}/3/tv/${opts.series_id}/season/${opts.season_number}/episode/${opts.episode_number}/images?api_key=${this.#api_key}${queryParams}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Get the trending movies, TV shows and people.
   *
   * @param {{ time_window: "day" | "week"; language?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/trending-all
   */
  async trendingAll(
    opts: { time_window: "day" | "week"; language?: string },
  ): Promise<
    {
      page: number;
      results: {
        adult: boolean;
        backdrop_path: string;
        id: number;
        title: string;
        original_language: string;
        original_title: string;
        overview: string;
        poster_path: string;
        media_type: string;
        genre_ids: number[];
        popularity: number;
        release_date: string;
        video: boolean;
        vote_average: number;
        vote_count: number;
      }[];
      total_pages: number;
      total_results: number;
    }
  > {
    let queryParams = "";

    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }

    return await (await fetch(
      `${this.#base_url}/3/trending/all/${opts.time_window}?api_key=${this.#api_key}${queryParams}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Get the trending movies on TMDB.
   *
   * @param {{ time_window: "day" | "week"; language?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/trending-movies
   */
  async trendingMovies(
    opts: { time_window: "day" | "week"; language?: string },
  ): Promise<
    {
      page: number;
      results: {
        adult: boolean;
        backdrop_path: string;
        id: number;
        title: string;
        original_language: string;
        original_title: string;
        overview: string;
        poster_path: string;
        media_type: string;
        genre_ids: number[];
        popularity: number;
        release_date: string;
        video: boolean;
        vote_average: number;
        vote_count: number;
      }[];
      total_pages: number;
      total_results: number;
    }
  > {
    let queryParams = "";

    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }

    return await (await fetch(
      `${this.#base_url}/3/trending/movie/${opts.time_window}?api_key=${this.#api_key}${queryParams}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Get the trending TV shows on TMDB.
   *
   * @param {{ time_window: "day" | "week"; language?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/trending-tv
   */
  async trendingTv(
    opts: { time_window: "day" | "week"; language?: string },
  ): Promise<
    {
      page: number;
      results: {
        adult: boolean;
        backdrop_path: string;
        id: number;
        name: string;
        original_language: string;
        original_name: string;
        overview: string;
        poster_path: string;
        media_type: string;
        genre_ids: number[];
        popularity: number;
        first_air_date: string;
        vote_average: number;
        vote_count: number;
        origin_country: string[];
      }[];
      total_pages: number;
      total_results: number;
    }
  > {
    let queryParams = "";

    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }

    return await (await fetch(
      `${this.#base_url}/3/trending/tv/${opts.time_window}?api_key=${this.#api_key}${queryParams}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Get the rating, watchlist and favourite status of an account.
   *
   * @param {{ movie_id: number; session_id?: string; guest_session_id?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/movie-account-states
   */
  async movieAccountStates(
    opts: { movie_id: number; session_id?: string; guest_session_id?: string },
  ): Promise<
    {
      id: number;
      favorite: boolean;
      rated: { value: number };
      watchlist: boolean;
    }
  > {
    let queryParams = "";

    if (opts["session_id"]) {
      queryParams += `&session_id=${opts["session_id"]}`;
    }
    if (opts["guest_session_id"]) {
      queryParams += `&guest_session_id=${opts["guest_session_id"]}`;
    }

    return await (await fetch(
      `${this.#base_url}/3/movie/${opts.movie_id}/account_states?api_key=${this.#api_key}${queryParams}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Get the rating, watchlist and favourite status.
   *
   * @param {{ series_id: number; session_id?: string; guest_session_id?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/tv-series-account-states
   */
  async tvSeriesAccountStates(
    opts: { series_id: number; session_id?: string; guest_session_id?: string },
  ): Promise<
    {
      id: number;
      favorite: boolean;
      rated: { value: number };
      watchlist: boolean;
    }
  > {
    let queryParams = "";

    if (opts["session_id"]) {
      queryParams += `&session_id=${opts["session_id"]}`;
    }
    if (opts["guest_session_id"]) {
      queryParams += `&guest_session_id=${opts["guest_session_id"]}`;
    }

    return await (await fetch(
      `${this.#base_url}/3/tv/${opts.series_id}/account_states?api_key=${this.#api_key}${queryParams}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Get the rating, watchlist and favourite status.
   *
   * @param {{ series_id: number; season_number: number; episode_number: number; session_id?: string; guest_session_id?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/tv-episode-account-states
   */
  async tvEpisodeAccountStates(
    opts: {
      series_id: number;
      season_number: number;
      episode_number: number;
      session_id?: string;
      guest_session_id?: string;
    },
  ): Promise<
    {
      id: number;
      favorite: boolean;
      rated: { value: number };
      watchlist: boolean;
    }
  > {
    let queryParams = "";

    if (opts["session_id"]) {
      queryParams += `&session_id=${opts["session_id"]}`;
    }
    if (opts["guest_session_id"]) {
      queryParams += `&guest_session_id=${opts["guest_session_id"]}`;
    }

    return await (await fetch(
      `${this.#base_url}/3/tv/${opts.series_id}/season/${opts.season_number}/episode/${opts.episode_number}/account_states?api_key=${this.#api_key}${queryParams}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Get the trending people on TMDB.
   *
   * @param {{ time_window: "day" | "week"; language?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/trending-people
   */
  async trendingPeople(
    opts: { time_window: "day" | "week"; language?: string },
  ): Promise<
    {
      page: number;
      results: {
        adult: boolean;
        id: number;
        name: string;
        original_name: string;
        media_type: string;
        popularity: number;
        gender: number;
        known_for_department: string;
        profile_path: string;
        known_for: {
          adult: boolean;
          backdrop_path: string;
          id: number;
          title: string;
          original_language: string;
          original_title: string;
          overview: string;
          poster_path: string;
          media_type: string;
          genre_ids: number[];
          popularity: number;
          release_date: string;
          video: boolean;
          vote_average: number;
          vote_count: number;
        }[];
      }[];
      total_pages: number;
      total_results: number;
    }
  > {
    let queryParams = "";

    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }

    return await (await fetch(
      `${this.#base_url}/3/trending/person/${opts.time_window}?api_key=${this.#api_key}${queryParams}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Get the alternative titles for a movie.
   *
   * @param {{ movie_id: number; country?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/movie-alternative-titles
   */
  async movieAlternativeTitles(
    opts: { movie_id: number; country?: string },
  ): Promise<
    {
      id: number;
      titles: { iso_3166_1: string; title: string; type: string }[];
    }
  > {
    let queryParams = "";

    if (opts["country"]) {
      queryParams += `&country=${opts["country"]}`;
    }

    return await (await fetch(
      `${this.#base_url}/3/movie/${opts.movie_id}/alternative_titles?api_key=${this.#api_key}${queryParams}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Get the recent changes for a movie.
   *
   * @param {{ movie_id: number; end_date?: string; page?: number; start_date?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/movie-changes
   */
  async movieChanges(
    opts: {
      movie_id: number;
      end_date?: string;
      page?: number;
      start_date?: string;
    },
  ): Promise<
    {
      changes: {
        key: string;
        items: {
          id: string;
          action: string;
          time: string;
          iso_639_1: string;
          iso_3166_1: string;
          value: { poster: { file_path: string } };
        }[];
      }[];
    }
  > {
    let queryParams = "";

    if (opts["end_date"]) {
      queryParams += `&end_date=${opts["end_date"]}`;
    }
    if (opts["page"]) {
      queryParams += `&page=${opts["page"]}`;
    }
    if (opts["start_date"]) {
      queryParams += `&start_date=${opts["start_date"]}`;
    }

    return await (await fetch(
      `${this.#base_url}/3/movie/${opts.movie_id}/changes?api_key=${this.#api_key}${queryParams}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * @param {{ movie_id: number; language?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/movie-credits
   */
  async movieCredits(
    opts: { movie_id: number; language?: string },
  ): Promise<
    {
      id: number;
      cast: {
        adult: boolean;
        gender: number;
        id: number;
        known_for_department: string;
        name: string;
        original_name: string;
        popularity: number;
        profile_path: string;
        cast_id: number;
        character: string;
        credit_id: string;
        order: number;
      }[];
      crew: {
        adult: boolean;
        gender: number;
        id: number;
        known_for_department: string;
        name: string;
        original_name: string;
        popularity: number;
        profile_path: string;
        credit_id: string;
        department: string;
        job: string;
      }[];
    }
  > {
    let queryParams = "";

    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }

    return await (await fetch(
      `${this.#base_url}/3/movie/${opts.movie_id}/credits?api_key=${this.#api_key}${queryParams}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * @param {{ movie_id: number; }} opts
   * @see https://developer.themoviedb.org/v3/reference/movie-external-ids
   */
  async movieExternalIds(
    opts: { movie_id: number },
  ): Promise<
    {
      id: number;
      imdb_id: string;
      wikidata_id: unknown;
      facebook_id: string;
      instagram_id: unknown;
      twitter_id: unknown;
    }
  > {
    return await (await fetch(
      `${this.#base_url}/3/movie/${opts.movie_id}/external_ids?api_key=${this.#api_key}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * @param {{ movie_id: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/movie-keywords
   */
  async movieKeywords(
    opts: { movie_id: string },
  ): Promise<{ id: number; keywords: { id: number; name: string }[] }> {
    return await (await fetch(
      `${this.#base_url}/3/movie/${opts.movie_id}/keywords?api_key=${this.#api_key}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Get the lists that a movie has been added to.
   *
   * @param {{ movie_id: number; language?: string; page?: number; }} opts
   * @see https://developer.themoviedb.org/v3/reference/movie-lists
   */
  async movieLists(
    opts: { movie_id: number; language?: string; page?: number },
  ): Promise<
    {
      id: number;
      page: number;
      results: {
        description: string;
        favorite_count: number;
        id: number;
        item_count: number;
        iso_639_1: string;
        list_type: string;
        name: string;
        poster_path: unknown;
      }[];
      total_pages: number;
      total_results: number;
    }
  > {
    let queryParams = "";

    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    if (opts["page"]) {
      queryParams += `&page=${opts["page"]}`;
    }

    return await (await fetch(
      `${this.#base_url}/3/movie/${opts.movie_id}/lists?api_key=${this.#api_key}${queryParams}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * @param {{ movie_id: number; language?: string; page?: number; }} opts
   * @see https://developer.themoviedb.org/v3/reference/movie-recommendations
   */
  async movieRecommendations(
    opts: { movie_id: number; language?: string; page?: number },
  ): Promise<Record<string, unknown>> {
    let queryParams = "";

    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    if (opts["page"]) {
      queryParams += `&page=${opts["page"]}`;
    }

    return await (await fetch(
      `${this.#base_url}/3/movie/${opts.movie_id}/recommendations?api_key=${this.#api_key}${queryParams}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Get the release dates and certifications for a movie.
   *
   * @param {{ movie_id: number; }} opts
   * @see https://developer.themoviedb.org/v3/reference/movie-release-dates
   */
  async movieReleaseDates(
    opts: { movie_id: number },
  ): Promise<
    {
      id: number;
      results: {
        iso_3166_1: string;
        release_dates: {
          certification: string;
          descriptors: unknown[];
          iso_639_1: string;
          note: string;
          release_date: string;
          type: number;
        }[];
      }[];
    }
  > {
    return await (await fetch(
      `${this.#base_url}/3/movie/${opts.movie_id}/release_dates?api_key=${this.#api_key}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Get the user reviews for a movie.
   *
   * @param {{ movie_id: number; language?: string; page?: number; }} opts
   * @see https://developer.themoviedb.org/v3/reference/movie-reviews
   */
  async movieReviews(
    opts: { movie_id: number; language?: string; page?: number },
  ): Promise<
    {
      id: number;
      page: number;
      results: {
        author: string;
        author_details: {
          name: string;
          username: string;
          avatar_path: string;
          rating: unknown;
        };
        content: string;
        created_at: string;
        id: string;
        updated_at: string;
        url: string;
      }[];
      total_pages: number;
      total_results: number;
    }
  > {
    let queryParams = "";

    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    if (opts["page"]) {
      queryParams += `&page=${opts["page"]}`;
    }

    return await (await fetch(
      `${this.#base_url}/3/movie/${opts.movie_id}/reviews?api_key=${this.#api_key}${queryParams}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Get the similar movies based on genres and keywords.
   *
   * @param {{ movie_id: number; language?: string; page?: number; }} opts
   * @see https://developer.themoviedb.org/v3/reference/movie-similar
   */
  async movieSimilar(
    opts: { movie_id: number; language?: string; page?: number },
  ): Promise<
    {
      page: number;
      results: {
        adult: boolean;
        backdrop_path: string;
        genre_ids: number[];
        id: number;
        original_language: string;
        original_title: string;
        overview: string;
        popularity: number;
        poster_path: string;
        release_date: string;
        title: string;
        video: boolean;
        vote_average: number;
        vote_count: number;
      }[];
      total_pages: number;
      total_results: number;
    }
  > {
    let queryParams = "";

    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    if (opts["page"]) {
      queryParams += `&page=${opts["page"]}`;
    }

    return await (await fetch(
      `${this.#base_url}/3/movie/${opts.movie_id}/similar?api_key=${this.#api_key}${queryParams}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Get the translations for a movie.
   *
   * @param {{ movie_id: number; }} opts
   * @see https://developer.themoviedb.org/v3/reference/movie-translations
   */
  async movieTranslations(
    opts: { movie_id: number },
  ): Promise<
    {
      id: number;
      translations: {
        iso_3166_1: string;
        iso_639_1: string;
        name: string;
        english_name: string;
        data: {
          homepage: string;
          overview: string;
          runtime: number;
          tagline: string;
          title: string;
        };
      }[];
    }
  > {
    return await (await fetch(
      `${this.#base_url}/3/movie/${opts.movie_id}/translations?api_key=${this.#api_key}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * @param {{ movie_id: number; language?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/movie-videos
   */
  async movieVideos(
    opts: { movie_id: number; language?: string },
  ): Promise<
    {
      id: number;
      results: {
        iso_639_1: string;
        iso_3166_1: string;
        name: string;
        key: string;
        site: string;
        size: number;
        type: string;
        official: boolean;
        published_at: string;
        id: string;
      }[];
    }
  > {
    let queryParams = "";

    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }

    return await (await fetch(
      `${this.#base_url}/3/movie/${opts.movie_id}/videos?api_key=${this.#api_key}${queryParams}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Get the list of streaming providers we have for a movie.
   *
   * @param {{ movie_id: number; }} opts
   * @see https://developer.themoviedb.org/v3/reference/movie-watch-providers
   */
  async movieWatchProviders(
    opts: { movie_id: number },
  ): Promise<
    {
      id: number;
      results: {
        AE: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          rent: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          buy: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        AL: {
          link: string;
          buy: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        AR: {
          link: string;
          buy: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          rent: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        AT: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          buy: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          rent: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        AU: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          buy: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        BA: {
          link: string;
          buy: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        BB: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        BE: {
          link: string;
          rent: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          buy: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        BG: {
          link: string;
          rent: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          buy: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        BH: {
          link: string;
          buy: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        BO: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        BR: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        BS: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        CA: {
          link: string;
          rent: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          buy: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        CH: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          buy: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          rent: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        CL: {
          link: string;
          buy: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          rent: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        CO: {
          link: string;
          buy: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          rent: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        CR: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        CV: {
          link: string;
          buy: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          rent: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        CZ: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          rent: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          buy: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        DE: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          buy: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          rent: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        DK: {
          link: string;
          rent: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          buy: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        DO: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        EC: {
          link: string;
          buy: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          rent: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        EE: {
          link: string;
          buy: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          rent: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        EG: {
          link: string;
          rent: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          buy: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        ES: {
          link: string;
          rent: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          ads: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          buy: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        FI: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          buy: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          rent: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        FJ: {
          link: string;
          buy: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        FR: {
          link: string;
          rent: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          buy: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        GB: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          buy: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          rent: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        GF: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        GI: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        GR: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          rent: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          buy: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        GT: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        HK: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        HN: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        HR: {
          link: string;
          buy: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          ads: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        HU: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          buy: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          rent: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        ID: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        IE: {
          link: string;
          rent: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          buy: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        IL: {
          link: string;
          buy: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        IN: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          rent: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          buy: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        IQ: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        IS: {
          link: string;
          buy: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        IT: {
          link: string;
          buy: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          rent: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        JM: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        JO: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          buy: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        JP: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          rent: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          buy: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        KR: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          buy: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        KW: {
          link: string;
          buy: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        LB: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          buy: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        LI: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        LT: {
          link: string;
          rent: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          buy: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        LV: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          buy: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        MD: {
          link: string;
          buy: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        MK: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          buy: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        MT: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          buy: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          rent: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        MU: {
          link: string;
          buy: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          rent: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        MX: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        MY: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        MZ: {
          link: string;
          rent: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          buy: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        NL: {
          link: string;
          buy: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          rent: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        NO: {
          link: string;
          rent: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          buy: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        NZ: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          buy: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        OM: {
          link: string;
          buy: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          rent: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        PA: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        PE: {
          link: string;
          rent: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          buy: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        PH: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        PK: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        PL: {
          link: string;
          buy: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          rent: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        PS: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        PT: {
          link: string;
          buy: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          rent: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        PY: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        QA: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          buy: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        RO: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        RS: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          buy: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        RU: {
          link: string;
          rent: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          buy: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        SA: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          rent: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          buy: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        SE: {
          link: string;
          buy: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          rent: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        SG: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        SI: {
          link: string;
          buy: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        SK: {
          link: string;
          buy: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          rent: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        SM: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        SV: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        TH: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        TR: {
          link: string;
          rent: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          buy: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        TT: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        TW: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        UG: {
          link: string;
          rent: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          buy: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        US: {
          link: string;
          rent: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          buy: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        UY: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        VE: {
          link: string;
          rent: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          buy: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        YE: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        ZA: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          rent: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          buy: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
      };
    }
  > {
    return await (await fetch(
      `${this.#base_url}/3/movie/${opts.movie_id}/watch/providers?api_key=${this.#api_key}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Rate a movie and save it to your rated list.
   *
   * @param {{ movie_id: number; guest_session_id?: string; session_id?: string; }} opts
   * @param {Record<string, unknown>} body
   * @see https://developer.themoviedb.org/v3/reference/movie-add-rating
   */
  async movieAddRating(
    opts: { movie_id: number; guest_session_id?: string; session_id?: string },
    body: Record<string, unknown>,
  ): Promise<{ status_code: number; status_message: string }> {
    let queryParams = "";

    if (opts["guest_session_id"]) {
      queryParams += `&guest_session_id=${opts["guest_session_id"]}`;
    }
    if (opts["session_id"]) {
      queryParams += `&session_id=${opts["session_id"]}`;
    }

    return await (await fetch(
      `${this.#base_url}/3/movie/${opts.movie_id}/rating?api_key=${this.#api_key}${queryParams}`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          body: JSON.stringify(body),
        },
      },
    )).json();
  }

  /**
   * Delete a user rating.
   *
   * @param {{ movie_id: number; guest_session_id?: string; session_id?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/movie-delete-rating
   */
  async movieDeleteRating(
    opts: { movie_id: number; guest_session_id?: string; session_id?: string },
  ): Promise<{ status_code: number; status_message: string }> {
    let queryParams = "";

    if (opts["guest_session_id"]) {
      queryParams += `&guest_session_id=${opts["guest_session_id"]}`;
    }
    if (opts["session_id"]) {
      queryParams += `&session_id=${opts["session_id"]}`;
    }

    return await (await fetch(
      `${this.#base_url}/3/movie/${opts.movie_id}/rating?api_key=${this.#api_key}${queryParams}`,
      {
        method: "DELETE",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /** @see https://developer.themoviedb.org/v3/reference/authentication-create-guest-session */
  async authenticationCreateGuestSession(): Promise<
    { success: boolean; guest_session_id: string; expires_at: string }
  > {
    return await (await fetch(
      `${this.#base_url}/3/authentication/guest_session/new?api_key=${this.#api_key}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /** @see https://developer.themoviedb.org/v3/reference/authentication-create-request-token */
  async authenticationCreateRequestToken(): Promise<
    { success: boolean; expires_at: string; request_token: string }
  > {
    return await (await fetch(
      `${this.#base_url}/3/authentication/token/new?api_key=${this.#api_key}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * @param {Record<string, unknown>} body
   * @see https://developer.themoviedb.org/v3/reference/authentication-create-session
   */
  async authenticationCreateSession(
    body: Record<string, unknown>,
  ): Promise<{ success: boolean; session_id: string }> {
    return await (await fetch(
      `${this.#base_url}/3/authentication/session/new?api_key=${this.#api_key}`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          body: JSON.stringify(body),
        },
      },
    )).json();
  }

  /**
   * @param {Record<string, unknown>} body
   * @see https://developer.themoviedb.org/v3/reference/authentication-create-session-from-v4-token
   */
  async authenticationCreateSessionFromV4Token(
    body: Record<string, unknown>,
  ): Promise<{ success: boolean; session_id: string }> {
    return await (await fetch(
      `${this.#base_url}/3/authentication/session/convert/4?api_key=${this.#api_key}`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          body: JSON.stringify(body),
        },
      },
    )).json();
  }

  /**
   * @param {Record<string, unknown>} body
   * @see https://developer.themoviedb.org/v3/reference/authentication-delete-session
   */
  async authenticationDeleteSession(
    body: Record<string, unknown>,
  ): Promise<{ success: boolean }> {
    return await (await fetch(
      `${this.#base_url}/3/authentication/session?api_key=${this.#api_key}`,
      {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          body: JSON.stringify(body),
        },
      },
    )).json();
  }

  /**
   * Find data by external ID's.
   *
   * @param {{ external_id: string; external_source: "imdb_id" | "facebook_id" | "instagram_id" | "tvdb_id" | "tiktok_id" | "twitter_id" | "wikidata_id" | "youtube_id"; language?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/find-by-id
   */
  async findById(
    opts: {
      external_id: string;
      external_source:
        | "imdb_id"
        | "facebook_id"
        | "instagram_id"
        | "tvdb_id"
        | "tiktok_id"
        | "twitter_id"
        | "wikidata_id"
        | "youtube_id";
      language?: string;
    },
  ): Promise<
    {
      movie_results: {
        adult: boolean;
        backdrop_path: string;
        id: number;
        title: string;
        original_language: string;
        original_title: string;
        overview: string;
        poster_path: string;
        media_type: string;
        genre_ids: number[];
        popularity: number;
        release_date: string;
        video: boolean;
        vote_average: number;
        vote_count: number;
      }[];
      person_results: unknown[];
      tv_results: unknown[];
      tv_episode_results: unknown[];
      tv_season_results: unknown[];
    }
  > {
    let queryParams = "";

    if (opts["external_source"]) {
      queryParams += `&external_source=${opts["external_source"]}`;
    }
    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }

    return await (await fetch(
      `${this.#base_url}/3/find/${opts.external_id}?api_key=${this.#api_key}${queryParams}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Query the top level details of a person.
   *
   * @param {{ person_id: number; append_to_response?: string; language?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/person-details
   */
  async personDetails(
    opts: { person_id: number; append_to_response?: string; language?: string },
  ): Promise<
    {
      adult: boolean;
      also_known_as: string[];
      biography: string;
      birthday: string;
      deathday: unknown;
      gender: number;
      homepage: unknown;
      id: number;
      imdb_id: string;
      known_for_department: string;
      name: string;
      place_of_birth: string;
      popularity: number;
      profile_path: string;
    }
  > {
    let queryParams = "";

    if (opts["append_to_response"]) {
      queryParams += `&append_to_response=${opts["append_to_response"]}`;
    }
    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }

    return await (await fetch(
      `${this.#base_url}/3/person/${opts.person_id}?api_key=${this.#api_key}${queryParams}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Get the recent changes for a person.
   *
   * @param {{ person_id: number; end_date?: string; page?: number; start_date?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/person-changes
   */
  async personChanges(
    opts: {
      person_id: number;
      end_date?: string;
      page?: number;
      start_date?: string;
    },
  ): Promise<
    {
      changes: {
        key: string;
        items: {
          id: string;
          action: string;
          time: string;
          iso_639_1: string;
          iso_3166_1: string;
          value: string;
        }[];
      }[];
    }
  > {
    let queryParams = "";

    if (opts["end_date"]) {
      queryParams += `&end_date=${opts["end_date"]}`;
    }
    if (opts["page"]) {
      queryParams += `&page=${opts["page"]}`;
    }
    if (opts["start_date"]) {
      queryParams += `&start_date=${opts["start_date"]}`;
    }

    return await (await fetch(
      `${this.#base_url}/3/person/${opts.person_id}/changes?api_key=${this.#api_key}${queryParams}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Get the recent changes for a TV show.
   *
   * @param {{ series_id: number; end_date?: string; page?: number; start_date?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/tv-series-changes
   */
  async tvSeriesChanges(
    opts: {
      series_id: number;
      end_date?: string;
      page?: number;
      start_date?: string;
    },
  ): Promise<
    {
      changes: {
        key: string;
        items: {
          id: string;
          action: string;
          time: string;
          iso_639_1: string;
          iso_3166_1: string;
          value: { poster: { file_path: string; iso_639_1: string } };
          original_value: { poster: { file_path: string; iso_639_1: string } };
        }[];
      }[];
    }
  > {
    let queryParams = "";

    if (opts["end_date"]) {
      queryParams += `&end_date=${opts["end_date"]}`;
    }
    if (opts["page"]) {
      queryParams += `&page=${opts["page"]}`;
    }
    if (opts["start_date"]) {
      queryParams += `&start_date=${opts["start_date"]}`;
    }

    return await (await fetch(
      `${this.#base_url}/3/tv/${opts.series_id}/changes?api_key=${this.#api_key}${queryParams}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Get the profile images that belong to a person.
   *
   * @param {{ person_id: number; }} opts
   * @see https://developer.themoviedb.org/v3/reference/person-images
   */
  async personImages(
    opts: { person_id: number },
  ): Promise<
    {
      id: number;
      profiles: {
        aspect_ratio: number;
        height: number;
        iso_639_1: unknown;
        file_path: string;
        vote_average: number;
        vote_count: number;
        width: number;
      }[];
    }
  > {
    return await (await fetch(
      `${this.#base_url}/3/person/${opts.person_id}/images?api_key=${this.#api_key}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Get the movie credits for a person.
   *
   * @param {{ person_id: number; language?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/person-movie-credits
   */
  async personMovieCredits(
    opts: { person_id: number; language?: string },
  ): Promise<
    {
      cast: {
        adult: boolean;
        backdrop_path: string;
        genre_ids: number[];
        id: number;
        original_language: string;
        original_title: string;
        overview: string;
        popularity: number;
        poster_path: string;
        release_date: string;
        title: string;
        video: boolean;
        vote_average: number;
        vote_count: number;
        character: string;
        credit_id: string;
        order: number;
      }[];
      crew: {
        adult: boolean;
        backdrop_path: string;
        genre_ids: number[];
        id: number;
        original_language: string;
        original_title: string;
        overview: string;
        popularity: number;
        poster_path: string;
        release_date: string;
        title: string;
        video: boolean;
        vote_average: number;
        vote_count: number;
        credit_id: string;
        department: string;
        job: string;
      }[];
      id: number;
    }
  > {
    let queryParams = "";

    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }

    return await (await fetch(
      `${this.#base_url}/3/person/${opts.person_id}/movie_credits?api_key=${this.#api_key}${queryParams}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Get the TV credits that belong to a person.
   *
   * @param {{ person_id: number; language?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/person-tv-credits
   */
  async personTvCredits(
    opts: { person_id: number; language?: string },
  ): Promise<
    {
      cast: {
        adult: boolean;
        backdrop_path: string;
        genre_ids: number[];
        id: number;
        origin_country: string[];
        original_language: string;
        original_name: string;
        overview: string;
        popularity: number;
        poster_path: string;
        first_air_date: string;
        name: string;
        vote_average: number;
        vote_count: number;
        character: string;
        credit_id: string;
        episode_count: number;
      }[];
      crew: {
        adult: boolean;
        backdrop_path: string;
        genre_ids: number[];
        id: number;
        origin_country: string[];
        original_language: string;
        original_name: string;
        overview: string;
        popularity: number;
        poster_path: string;
        first_air_date: string;
        name: string;
        vote_average: number;
        vote_count: number;
        credit_id: string;
        department: string;
        episode_count: number;
        job: string;
      }[];
      id: number;
    }
  > {
    let queryParams = "";

    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }

    return await (await fetch(
      `${this.#base_url}/3/person/${opts.person_id}/tv_credits?api_key=${this.#api_key}${queryParams}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Get the combined movie and TV credits that belong to a person.
   *
   * @param {{ person_id: string; language?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/person-combined-credits
   */
  async personCombinedCredits(
    opts: { person_id: string; language?: string },
  ): Promise<
    {
      cast: {
        adult: boolean;
        backdrop_path: string;
        genre_ids: number[];
        id: number;
        original_language: string;
        original_title: string;
        overview: string;
        popularity: number;
        poster_path: string;
        release_date: string;
        title: string;
        video: boolean;
        vote_average: number;
        vote_count: number;
        character: string;
        credit_id: string;
        order: number;
        media_type: string;
      }[];
      crew: {
        adult: boolean;
        backdrop_path: string;
        genre_ids: number[];
        id: number;
        original_language: string;
        original_title: string;
        overview: string;
        popularity: number;
        poster_path: string;
        release_date: string;
        title: string;
        video: boolean;
        vote_average: number;
        vote_count: number;
        credit_id: string;
        department: string;
        job: string;
        media_type: string;
      }[];
      id: number;
    }
  > {
    let queryParams = "";

    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }

    return await (await fetch(
      `${this.#base_url}/3/person/${opts.person_id}/combined_credits?api_key=${this.#api_key}${queryParams}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Get the external ID's that belong to a person.
   *
   * @param {{ person_id: number; }} opts
   * @see https://developer.themoviedb.org/v3/reference/person-external-ids
   */
  async personExternalIds(
    opts: { person_id: number },
  ): Promise<
    {
      id: number;
      freebase_mid: string;
      freebase_id: string;
      imdb_id: string;
      tvrage_id: number;
      wikidata_id: string;
      facebook_id: string;
      instagram_id: string;
      tiktok_id: string;
      twitter_id: string;
      youtube_id: unknown;
    }
  > {
    return await (await fetch(
      `${this.#base_url}/3/person/${opts.person_id}/external_ids?api_key=${this.#api_key}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Get the tagged images for a person.
   *
   * @param {{ person_id: number; page?: number; }} opts
   * @see https://developer.themoviedb.org/v3/reference/person-tagged-images
   */
  async personTaggedImages(
    opts: { person_id: number; page?: number },
  ): Promise<
    {
      id: number;
      page: number;
      results: {
        aspect_ratio: number;
        file_path: string;
        height: number;
        id: string;
        iso_639_1: string;
        vote_average: number;
        vote_count: number;
        width: number;
        image_type: string;
        media: {
          adult: boolean;
          backdrop_path: string;
          id: number;
          title: string;
          original_language: string;
          original_title: string;
          overview: string;
          poster_path: string;
          media_type: string;
          genre_ids: number[];
          popularity: number;
          release_date: string;
          video: boolean;
          vote_average: number;
          vote_count: number;
        };
        media_type: string;
      }[];
      total_pages: number;
      total_results: number;
    }
  > {
    let queryParams = "";

    if (opts["page"]) {
      queryParams += `&page=${opts["page"]}`;
    }

    return await (await fetch(
      `${this.#base_url}/3/person/${opts.person_id}/tagged_images?api_key=${this.#api_key}${queryParams}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Get the translations that belong to a person.
   *
   * @param {{ person_id: number; }} opts
   * @see https://developer.themoviedb.org/v3/reference/translations
   */
  async translations(
    opts: { person_id: number },
  ): Promise<
    {
      id: number;
      translations: {
        iso_3166_1: string;
        iso_639_1: string;
        name: string;
        english_name: string;
        data: { biography: string; name: string };
      }[];
    }
  > {
    return await (await fetch(
      `${this.#base_url}/3/person/${opts.person_id}/translations?api_key=${this.#api_key}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Get a list of people ordered by popularity.
   *
   * @param {{ language?: string; page?: number; }} opts
   * @see https://developer.themoviedb.org/v3/reference/person-popular-list
   */
  async personPopularList(
    opts?: { language?: string; page?: number },
  ): Promise<
    {
      page: number;
      results: {
        adult: boolean;
        gender: number;
        id: number;
        known_for: {
          adult: boolean;
          backdrop_path: string;
          genre_ids: number[];
          id: number;
          media_type: string;
          original_language: string;
          original_title: string;
          overview: string;
          poster_path: string;
          release_date: string;
          title: string;
          video: boolean;
          vote_average: number;
          vote_count: number;
        }[];
        known_for_department: string;
        name: string;
        popularity: number;
        profile_path: string;
      }[];
      total_pages: number;
      total_results: number;
    }
  > {
    let queryParams = "";

    if (opts?.["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    if (opts?.["page"]) {
      queryParams += `&page=${opts["page"]}`;
    }

    return await (await fetch(
      `${this.#base_url}/3/person/popular?api_key=${this.#api_key}${queryParams}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Get a list of movies ordered by popularity.
   *
   * @param {{ language?: string; page?: number; region?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/movie-popular-list
   */
  async moviePopularList(
    opts?: { language?: string; page?: number; region?: string },
  ): Promise<
    {
      page: number;
      results: {
        adult: boolean;
        backdrop_path: string;
        genre_ids: number[];
        id: number;
        original_language: string;
        original_title: string;
        overview: string;
        popularity: number;
        poster_path: string;
        release_date: string;
        title: string;
        video: boolean;
        vote_average: number;
        vote_count: number;
      }[];
      total_pages: number;
      total_results: number;
    }
  > {
    let queryParams = "";

    if (opts?.["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    if (opts?.["page"]) {
      queryParams += `&page=${opts["page"]}`;
    }
    if (opts?.["region"]) {
      queryParams += `&region=${opts["region"]}`;
    }

    return await (await fetch(
      `${this.#base_url}/3/movie/popular?api_key=${this.#api_key}${queryParams}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Get a list of movies ordered by rating.
   *
   * @param {{ language?: string; page?: number; region?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/movie-top-rated-list
   */
  async movieTopRatedList(
    opts?: { language?: string; page?: number; region?: string },
  ): Promise<
    {
      page: number;
      results: {
        adult: boolean;
        backdrop_path: string;
        genre_ids: number[];
        id: number;
        original_language: string;
        original_title: string;
        overview: string;
        popularity: number;
        poster_path: string;
        release_date: string;
        title: string;
        video: boolean;
        vote_average: number;
        vote_count: number;
      }[];
      total_pages: number;
      total_results: number;
    }
  > {
    let queryParams = "";

    if (opts?.["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    if (opts?.["page"]) {
      queryParams += `&page=${opts["page"]}`;
    }
    if (opts?.["region"]) {
      queryParams += `&region=${opts["region"]}`;
    }

    return await (await fetch(
      `${this.#base_url}/3/movie/top_rated?api_key=${this.#api_key}${queryParams}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Get a list of movies that are being released soon.
   *
   * @param {{ language?: string; page?: number; region?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/movie-upcoming-list
   */
  async movieUpcomingList(
    opts?: { language?: string; page?: number; region?: string },
  ): Promise<
    {
      dates: { maximum: string; minimum: string };
      page: number;
      results: {
        adult: boolean;
        backdrop_path: string;
        genre_ids: number[];
        id: number;
        original_language: string;
        original_title: string;
        overview: string;
        popularity: number;
        poster_path: string;
        release_date: string;
        title: string;
        video: boolean;
        vote_average: number;
        vote_count: number;
      }[];
      total_pages: number;
      total_results: number;
    }
  > {
    let queryParams = "";

    if (opts?.["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    if (opts?.["page"]) {
      queryParams += `&page=${opts["page"]}`;
    }
    if (opts?.["region"]) {
      queryParams += `&region=${opts["region"]}`;
    }

    return await (await fetch(
      `${this.#base_url}/3/movie/upcoming?api_key=${this.#api_key}${queryParams}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Get a list of movies that are currently in theatres.
   *
   * @param {{ language?: string; page?: number; region?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/movie-now-playing-list
   */
  async movieNowPlayingList(
    opts?: { language?: string; page?: number; region?: string },
  ): Promise<
    {
      dates: { maximum: string; minimum: string };
      page: number;
      results: {
        adult: boolean;
        backdrop_path: string;
        genre_ids: number[];
        id: number;
        original_language: string;
        original_title: string;
        overview: string;
        popularity: number;
        poster_path: string;
        release_date: string;
        title: string;
        video: boolean;
        vote_average: number;
        vote_count: number;
      }[];
      total_pages: number;
      total_results: number;
    }
  > {
    let queryParams = "";

    if (opts?.["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    if (opts?.["page"]) {
      queryParams += `&page=${opts["page"]}`;
    }
    if (opts?.["region"]) {
      queryParams += `&region=${opts["region"]}`;
    }

    return await (await fetch(
      `${this.#base_url}/3/movie/now_playing?api_key=${this.#api_key}${queryParams}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Get a list of TV shows airing today.
   *
   * @param {{ language?: string; page?: number; timezone?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/tv-series-airing-today-list
   */
  async tvSeriesAiringTodayList(
    opts?: { language?: string; page?: number; timezone?: string },
  ): Promise<
    {
      page: number;
      results: {
        backdrop_path: string;
        first_air_date: string;
        genre_ids: number[];
        id: number;
        name: string;
        origin_country: string[];
        original_language: string;
        original_name: string;
        overview: string;
        popularity: number;
        poster_path: string;
        vote_average: number;
        vote_count: number;
      }[];
      total_pages: number;
      total_results: number;
    }
  > {
    let queryParams = "";

    if (opts?.["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    if (opts?.["page"]) {
      queryParams += `&page=${opts["page"]}`;
    }
    if (opts?.["timezone"]) {
      queryParams += `&timezone=${opts["timezone"]}`;
    }

    return await (await fetch(
      `${this.#base_url}/3/tv/airing_today?api_key=${this.#api_key}${queryParams}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Get a list of TV shows that air in the next 7 days.
   *
   * @param {{ language?: string; page?: number; timezone?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/tv-series-on-the-air-list
   */
  async tvSeriesOnTheAirList(
    opts?: { language?: string; page?: number; timezone?: string },
  ): Promise<
    {
      page: number;
      results: {
        backdrop_path: string;
        first_air_date: string;
        genre_ids: number[];
        id: number;
        name: string;
        origin_country: string[];
        original_language: string;
        original_name: string;
        overview: string;
        popularity: number;
        poster_path: string;
        vote_average: number;
        vote_count: number;
      }[];
      total_pages: number;
      total_results: number;
    }
  > {
    let queryParams = "";

    if (opts?.["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    if (opts?.["page"]) {
      queryParams += `&page=${opts["page"]}`;
    }
    if (opts?.["timezone"]) {
      queryParams += `&timezone=${opts["timezone"]}`;
    }

    return await (await fetch(
      `${this.#base_url}/3/tv/on_the_air?api_key=${this.#api_key}${queryParams}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Get a list of TV shows ordered by popularity.
   *
   * @param {{ language?: string; page?: number; }} opts
   * @see https://developer.themoviedb.org/v3/reference/tv-series-popular-list
   */
  async tvSeriesPopularList(
    opts?: { language?: string; page?: number },
  ): Promise<
    {
      page: number;
      results: {
        backdrop_path: string;
        first_air_date: string;
        genre_ids: number[];
        id: number;
        name: string;
        origin_country: string[];
        original_language: string;
        original_name: string;
        overview: string;
        popularity: number;
        poster_path: string;
        vote_average: number;
        vote_count: number;
      }[];
      total_pages: number;
      total_results: number;
    }
  > {
    let queryParams = "";

    if (opts?.["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    if (opts?.["page"]) {
      queryParams += `&page=${opts["page"]}`;
    }

    return await (await fetch(
      `${this.#base_url}/3/tv/popular?api_key=${this.#api_key}${queryParams}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Get a list of TV shows ordered by rating.
   *
   * @param {{ language?: string; page?: number; }} opts
   * @see https://developer.themoviedb.org/v3/reference/tv-series-top-rated-list
   */
  async tvSeriesTopRatedList(
    opts?: { language?: string; page?: number },
  ): Promise<
    {
      page: number;
      results: {
        backdrop_path: string;
        first_air_date: string;
        genre_ids: number[];
        id: number;
        name: string;
        origin_country: string[];
        original_language: string;
        original_name: string;
        overview: string;
        popularity: number;
        poster_path: string;
        vote_average: number;
        vote_count: number;
      }[];
      total_pages: number;
      total_results: number;
    }
  > {
    let queryParams = "";

    if (opts?.["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    if (opts?.["page"]) {
      queryParams += `&page=${opts["page"]}`;
    }

    return await (await fetch(
      `${this.#base_url}/3/tv/top_rated?api_key=${this.#api_key}${queryParams}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Get the newest movie ID.
   *
   * @see https://developer.themoviedb.org/v3/reference/movie-latest-id
   */
  async movieLatestId(): Promise<
    {
      adult: boolean;
      backdrop_path: unknown;
      belongs_to_collection: unknown;
      budget: number;
      genres: unknown[];
      homepage: string;
      id: number;
      imdb_id: unknown;
      original_language: string;
      original_title: string;
      overview: string;
      popularity: number;
      poster_path: unknown;
      production_companies: unknown[];
      production_countries: unknown[];
      release_date: string;
      revenue: number;
      runtime: number;
      spoken_languages: unknown[];
      status: string;
      tagline: string;
      title: string;
      video: boolean;
      vote_average: number;
      vote_count: number;
    }
  > {
    return await (await fetch(
      `${this.#base_url}/3/movie/latest?api_key=${this.#api_key}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Get the newest TV show ID.
   *
   * @see https://developer.themoviedb.org/v3/reference/tv-series-latest-id
   */
  async tvSeriesLatestId(): Promise<
    {
      adult: boolean;
      backdrop_path: unknown;
      created_by: unknown[];
      episode_run_time: unknown[];
      first_air_date: string;
      genres: unknown[];
      homepage: string;
      id: number;
      in_production: boolean;
      languages: unknown[];
      last_air_date: string;
      last_episode_to_air: {
        id: number;
        name: string;
        overview: string;
        vote_average: number;
        vote_count: number;
        air_date: string;
        episode_number: number;
        production_code: string;
        runtime: unknown;
        season_number: number;
        show_id: number;
        still_path: unknown;
      };
      name: string;
      next_episode_to_air: unknown;
      networks: unknown[];
      number_of_episodes: number;
      number_of_seasons: number;
      origin_country: string[];
      original_language: string;
      original_name: string;
      overview: string;
      popularity: number;
      poster_path: unknown;
      production_companies: unknown[];
      production_countries: unknown[];
      seasons: {
        air_date: unknown;
        episode_count: number;
        id: number;
        name: string;
        overview: string;
        poster_path: unknown;
        season_number: number;
      }[];
      spoken_languages: unknown[];
      status: string;
      tagline: string;
      type: string;
      vote_average: number;
      vote_count: number;
    }
  > {
    return await (await fetch(
      `${this.#base_url}/3/tv/latest?api_key=${this.#api_key}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Get the aggregate credits (cast and crew) that have been added to a TV show.
   *
   * @param {{ series_id: number; language?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/tv-series-aggregate-credits
   */
  async tvSeriesAggregateCredits(
    opts: { series_id: number; language?: string },
  ): Promise<
    {
      cast: {
        adult: boolean;
        gender: number;
        id: number;
        known_for_department: string;
        name: string;
        original_name: string;
        popularity: number;
        profile_path: string;
        roles: {
          credit_id: string;
          character: string;
          episode_count: number;
        }[];
        total_episode_count: number;
        order: number;
      }[];
      crew: {
        adult: boolean;
        gender: number;
        id: number;
        known_for_department: string;
        name: string;
        original_name: string;
        popularity: number;
        profile_path: string;
        jobs: { credit_id: string; job: string; episode_count: number }[];
        department: string;
        total_episode_count: number;
      }[];
      id: number;
    }
  > {
    let queryParams = "";

    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }

    return await (await fetch(
      `${this.#base_url}/3/tv/${opts.series_id}/aggregate_credits?api_key=${this.#api_key}${queryParams}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Get the alternative titles that have been added to a TV show.
   *
   * @param {{ series_id: number; }} opts
   * @see https://developer.themoviedb.org/v3/reference/tv-series-alternative-titles
   */
  async tvSeriesAlternativeTitles(
    opts: { series_id: number },
  ): Promise<
    {
      id: number;
      results: { iso_3166_1: string; title: string; type: string }[];
    }
  > {
    return await (await fetch(
      `${this.#base_url}/3/tv/${opts.series_id}/alternative_titles?api_key=${this.#api_key}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Get the content ratings that have been added to a TV show.
   *
   * @param {{ series_id: number; }} opts
   * @see https://developer.themoviedb.org/v3/reference/tv-series-content-ratings
   */
  async tvSeriesContentRatings(
    opts: { series_id: number },
  ): Promise<
    {
      results: { descriptors: unknown[]; iso_3166_1: string; rating: string }[];
      id: number;
    }
  > {
    return await (await fetch(
      `${this.#base_url}/3/tv/${opts.series_id}/content_ratings?api_key=${this.#api_key}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Get the latest season credits of a TV show.
   *
   * @param {{ series_id: number; language?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/tv-series-credits
   */
  async tvSeriesCredits(
    opts: { series_id: number; language?: string },
  ): Promise<
    {
      cast: {
        adult: boolean;
        gender: number;
        id: number;
        known_for_department: string;
        name: string;
        original_name: string;
        popularity: number;
        profile_path: string;
        character: string;
        credit_id: string;
        order: number;
      }[];
      crew: {
        adult: boolean;
        gender: number;
        id: number;
        known_for_department: string;
        name: string;
        original_name: string;
        popularity: number;
        profile_path: string;
        credit_id: string;
        department: string;
        job: string;
      }[];
      id: number;
    }
  > {
    let queryParams = "";

    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }

    return await (await fetch(
      `${this.#base_url}/3/tv/${opts.series_id}/credits?api_key=${this.#api_key}${queryParams}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Get the episode groups that have been added to a TV show.
   *
   * @param {{ series_id: number; }} opts
   * @see https://developer.themoviedb.org/v3/reference/tv-series-episode-groups
   */
  async tvSeriesEpisodeGroups(
    opts: { series_id: number },
  ): Promise<
    {
      results: {
        description: string;
        episode_count: number;
        group_count: number;
        id: string;
        name: string;
        network: {
          id: number;
          logo_path: string;
          name: string;
          origin_country: string;
        };
        type: number;
      }[];
      id: number;
    }
  > {
    return await (await fetch(
      `${this.#base_url}/3/tv/${opts.series_id}/episode_groups?api_key=${this.#api_key}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Get a list of external IDs that have been added to a TV show.
   *
   * @param {{ series_id: number; }} opts
   * @see https://developer.themoviedb.org/v3/reference/tv-series-external-ids
   */
  async tvSeriesExternalIds(
    opts: { series_id: number },
  ): Promise<
    {
      id: number;
      imdb_id: string;
      freebase_mid: string;
      freebase_id: string;
      tvdb_id: number;
      tvrage_id: number;
      wikidata_id: string;
      facebook_id: string;
      instagram_id: string;
      twitter_id: string;
    }
  > {
    return await (await fetch(
      `${this.#base_url}/3/tv/${opts.series_id}/external_ids?api_key=${this.#api_key}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Get a list of keywords that have been added to a TV show.
   *
   * @param {{ series_id: number; }} opts
   * @see https://developer.themoviedb.org/v3/reference/tv-series-keywords
   */
  async tvSeriesKeywords(
    opts: { series_id: number },
  ): Promise<{ id: number; results: { name: string; id: number }[] }> {
    return await (await fetch(
      `${this.#base_url}/3/tv/${opts.series_id}/keywords?api_key=${this.#api_key}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * @param {{ series_id: number; language?: string; page?: number; }} opts
   * @see https://developer.themoviedb.org/v3/reference/tv-series-recommendations
   */
  async tvSeriesRecommendations(
    opts: { series_id: number; language?: string; page?: number },
  ): Promise<
    {
      page: number;
      results: {
        adult: boolean;
        backdrop_path: string;
        id: number;
        name: string;
        original_language: string;
        original_name: string;
        overview: string;
        poster_path: string;
        media_type: string;
        genre_ids: number[];
        popularity: number;
        first_air_date: string;
        vote_average: number;
        vote_count: number;
        origin_country: string[];
      }[];
      total_pages: number;
      total_results: number;
    }
  > {
    let queryParams = "";

    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    if (opts["page"]) {
      queryParams += `&page=${opts["page"]}`;
    }

    return await (await fetch(
      `${this.#base_url}/3/tv/${opts.series_id}/recommendations?api_key=${this.#api_key}${queryParams}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Get the reviews that have been added to a TV show.
   *
   * @param {{ series_id: number; language?: string; page?: number; }} opts
   * @see https://developer.themoviedb.org/v3/reference/tv-series-reviews
   */
  async tvSeriesReviews(
    opts: { series_id: number; language?: string; page?: number },
  ): Promise<
    {
      id: number;
      page: number;
      results: {
        author: string;
        author_details: {
          name: string;
          username: string;
          avatar_path: string;
          rating: number;
        };
        content: string;
        created_at: string;
        id: string;
        updated_at: string;
        url: string;
      }[];
      total_pages: number;
      total_results: number;
    }
  > {
    let queryParams = "";

    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    if (opts["page"]) {
      queryParams += `&page=${opts["page"]}`;
    }

    return await (await fetch(
      `${this.#base_url}/3/tv/${opts.series_id}/reviews?api_key=${this.#api_key}${queryParams}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Get the seasons and episodes that have screened theatrically.
   *
   * @param {{ series_id: number; }} opts
   * @see https://developer.themoviedb.org/v3/reference/tv-series-screened-theatrically
   */
  async tvSeriesScreenedTheatrically(
    opts: { series_id: number },
  ): Promise<
    {
      id: number;
      results: { id: number; episode_number: number; season_number: number }[];
    }
  > {
    return await (await fetch(
      `${this.#base_url}/3/tv/${opts.series_id}/screened_theatrically?api_key=${this.#api_key}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Get the similar TV shows.
   *
   * @param {{ series_id: string; language?: string; page?: number; }} opts
   * @see https://developer.themoviedb.org/v3/reference/tv-series-similar
   */
  async tvSeriesSimilar(
    opts: { series_id: string; language?: string; page?: number },
  ): Promise<
    {
      page: number;
      results: {
        adult: boolean;
        backdrop_path: string;
        genre_ids: number[];
        id: number;
        origin_country: string[];
        original_language: string;
        original_name: string;
        overview: string;
        popularity: number;
        poster_path: string;
        first_air_date: string;
        name: string;
        vote_average: number;
        vote_count: number;
      }[];
      total_pages: number;
      total_results: number;
    }
  > {
    let queryParams = "";

    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    if (opts["page"]) {
      queryParams += `&page=${opts["page"]}`;
    }

    return await (await fetch(
      `${this.#base_url}/3/tv/${opts.series_id}/similar?api_key=${this.#api_key}${queryParams}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Get the translations that have been added to a TV show.
   *
   * @param {{ series_id: number; }} opts
   * @see https://developer.themoviedb.org/v3/reference/tv-series-translations
   */
  async tvSeriesTranslations(
    opts: { series_id: number },
  ): Promise<
    {
      id: number;
      translations: {
        iso_3166_1: string;
        iso_639_1: string;
        name: string;
        english_name: string;
        data: {
          name: string;
          overview: string;
          homepage: string;
          tagline: string;
        };
      }[];
    }
  > {
    return await (await fetch(
      `${this.#base_url}/3/tv/${opts.series_id}/translations?api_key=${this.#api_key}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Get the videos that belong to a TV show.
   *
   * @param {{ series_id: number; include_video_language?: string; language?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/tv-series-videos
   */
  async tvSeriesVideos(
    opts: {
      series_id: number;
      include_video_language?: string;
      language?: string;
    },
  ): Promise<
    {
      id: number;
      results: {
        iso_639_1: string;
        iso_3166_1: string;
        name: string;
        key: string;
        site: string;
        size: number;
        type: string;
        official: boolean;
        published_at: string;
        id: string;
      }[];
    }
  > {
    let queryParams = "";

    if (opts["include_video_language"]) {
      queryParams += `&include_video_language=${
        opts["include_video_language"]
      }`;
    }
    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }

    return await (await fetch(
      `${this.#base_url}/3/tv/${opts.series_id}/videos?api_key=${this.#api_key}${queryParams}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Get the list of streaming providers we have for a TV show.
   *
   * @param {{ series_id: number; }} opts
   * @see https://developer.themoviedb.org/v3/reference/tv-series-watch-providers
   */
  async tvSeriesWatchProviders(
    opts: { series_id: number },
  ): Promise<
    {
      id: number;
      results: {
        AE: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        AR: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        AT: {
          link: string;
          buy: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        AU: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          buy: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        BA: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        BB: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        BE: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        BG: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        BO: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        BR: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        BS: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        CA: {
          link: string;
          buy: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        CH: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          buy: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        CI: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        CL: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        CO: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        CR: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        CZ: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        DE: {
          link: string;
          buy: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        DK: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        DO: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        DZ: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        EC: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        EG: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        ES: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        FI: {
          link: string;
          buy: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        FR: {
          link: string;
          buy: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        GB: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          buy: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        GF: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        GH: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        GQ: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        GT: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        HK: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        HN: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        HR: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        HU: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        ID: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        IE: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          buy: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        IL: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        IQ: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        IT: {
          link: string;
          buy: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        JM: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        JP: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          buy: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          rent: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        KE: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        KR: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        LB: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        LT: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        LY: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        MD: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        MK: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        MU: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        MX: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        MY: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        MZ: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        NE: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        NG: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        NL: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          buy: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        NO: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          buy: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        NZ: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        PA: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        PE: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        PH: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        PL: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          rent: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        PS: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        PT: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        PY: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        RO: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        RS: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        RU: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          ads: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        SA: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        SC: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        SE: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          buy: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        SG: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        SI: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        SK: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        SN: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        SV: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        TH: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        TR: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        TT: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        TW: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        TZ: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        UG: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        US: {
          link: string;
          free: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          buy: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        UY: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        VE: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        ZA: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        ZM: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
      };
    }
  > {
    return await (await fetch(
      `${this.#base_url}/3/tv/${opts.series_id}/watch/providers?api_key=${this.#api_key}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Rate a TV show and save it to your rated list.
   *
   * @param {{ series_id: number; guest_session_id?: string; session_id?: string; }} opts
   * @param {Record<string, unknown>} body
   * @see https://developer.themoviedb.org/v3/reference/tv-series-add-rating
   */
  async tvSeriesAddRating(
    opts: { series_id: number; guest_session_id?: string; session_id?: string },
    body: Record<string, unknown>,
  ): Promise<{ status_code: number; status_message: string }> {
    let queryParams = "";

    if (opts["guest_session_id"]) {
      queryParams += `&guest_session_id=${opts["guest_session_id"]}`;
    }
    if (opts["session_id"]) {
      queryParams += `&session_id=${opts["session_id"]}`;
    }

    return await (await fetch(
      `${this.#base_url}/3/tv/${opts.series_id}/rating?api_key=${this.#api_key}${queryParams}`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          body: JSON.stringify(body),
        },
      },
    )).json();
  }

  /**
   * @param {{ series_id: number; guest_session_id?: string; session_id?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/tv-series-delete-rating
   */
  async tvSeriesDeleteRating(
    opts: { series_id: number; guest_session_id?: string; session_id?: string },
  ): Promise<{ status_code: number; status_message: string }> {
    let queryParams = "";

    if (opts["guest_session_id"]) {
      queryParams += `&guest_session_id=${opts["guest_session_id"]}`;
    }
    if (opts["session_id"]) {
      queryParams += `&session_id=${opts["session_id"]}`;
    }

    return await (await fetch(
      `${this.#base_url}/3/tv/${opts.series_id}/rating?api_key=${this.#api_key}${queryParams}`,
      {
        method: "DELETE",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Get the rating, watchlist and favourite status.
   *
   * @param {{ series_id: number; season_number: number; session_id?: string; guest_session_id?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/tv-season-account-states
   */
  async tvSeasonAccountStates(
    opts: {
      series_id: number;
      season_number: number;
      session_id?: string;
      guest_session_id?: string;
    },
  ): Promise<
    {
      id: number;
      results: {
        id: number;
        episode_number: number;
        rated: { value: number };
      }[];
    }
  > {
    let queryParams = "";

    if (opts["session_id"]) {
      queryParams += `&session_id=${opts["session_id"]}`;
    }
    if (opts["guest_session_id"]) {
      queryParams += `&guest_session_id=${opts["guest_session_id"]}`;
    }

    return await (await fetch(
      `${this.#base_url}/3/tv/${opts.series_id}/season/${opts.season_number}/account_states?api_key=${this.#api_key}${queryParams}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Get the aggregate credits (cast and crew) that have been added to a TV season.
   *
   * @param {{ series_id: number; season_number: number; language?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/tv-season-aggregate-credits
   */
  async tvSeasonAggregateCredits(
    opts: { series_id: number; season_number: number; language?: string },
  ): Promise<
    {
      cast: {
        adult: boolean;
        gender: number;
        id: number;
        known_for_department: string;
        name: string;
        original_name: string;
        popularity: number;
        profile_path: string;
        roles: {
          credit_id: string;
          character: string;
          episode_count: number;
        }[];
        total_episode_count: number;
        order: number;
      }[];
      crew: {
        adult: boolean;
        gender: number;
        id: number;
        known_for_department: string;
        name: string;
        original_name: string;
        popularity: number;
        profile_path: unknown;
        jobs: { credit_id: string; job: string; episode_count: number }[];
        department: string;
        total_episode_count: number;
      }[];
      id: number;
    }
  > {
    let queryParams = "";

    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }

    return await (await fetch(
      `${this.#base_url}/3/tv/${opts.series_id}/season/${opts.season_number}/aggregate_credits?api_key=${this.#api_key}${queryParams}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Get the recent changes for a TV season.
   *
   * @param {{ season_id: number; end_date?: string; page?: number; start_date?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/tv-season-changes-by-id
   */
  async tvSeasonChangesById(
    opts: {
      season_id: number;
      end_date?: string;
      page?: number;
      start_date?: string;
    },
  ): Promise<
    {
      changes: {
        key: string;
        items: {
          id: string;
          action: string;
          time: string;
          value: { episode_id: number; episode_number: number };
        }[];
      }[];
    }
  > {
    let queryParams = "";

    if (opts["end_date"]) {
      queryParams += `&end_date=${opts["end_date"]}`;
    }
    if (opts["page"]) {
      queryParams += `&page=${opts["page"]}`;
    }
    if (opts["start_date"]) {
      queryParams += `&start_date=${opts["start_date"]}`;
    }

    return await (await fetch(
      `${this.#base_url}/3/tv/season/${opts.season_id}/changes?api_key=${this.#api_key}${queryParams}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * @param {{ series_id: number; season_number: number; language?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/tv-season-credits
   */
  async tvSeasonCredits(
    opts: { series_id: number; season_number: number; language?: string },
  ): Promise<
    {
      cast: {
        adult: boolean;
        gender: number;
        id: number;
        known_for_department: string;
        name: string;
        original_name: string;
        popularity: number;
        profile_path: string;
        character: string;
        credit_id: string;
        order: number;
      }[];
      crew: {
        adult: boolean;
        gender: number;
        id: number;
        known_for_department: string;
        name: string;
        original_name: string;
        popularity: number;
        profile_path: unknown;
        credit_id: string;
        department: string;
        job: string;
      }[];
      id: number;
    }
  > {
    let queryParams = "";

    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }

    return await (await fetch(
      `${this.#base_url}/3/tv/${opts.series_id}/season/${opts.season_number}/credits?api_key=${this.#api_key}${queryParams}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Get a list of external IDs that have been added to a TV season.
   *
   * @param {{ series_id: number; season_number: number; }} opts
   * @see https://developer.themoviedb.org/v3/reference/tv-season-external-ids
   */
  async tvSeasonExternalIds(
    opts: { series_id: number; season_number: number },
  ): Promise<
    {
      id: number;
      freebase_mid: string;
      freebase_id: string;
      tvdb_id: number;
      tvrage_id: unknown;
      wikidata_id: string;
    }
  > {
    return await (await fetch(
      `${this.#base_url}/3/tv/${opts.series_id}/season/${opts.season_number}/external_ids?api_key=${this.#api_key}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Get the translations for a TV season.
   *
   * @param {{ series_id: number; season_number: number; }} opts
   * @see https://developer.themoviedb.org/v3/reference/tv-season-translations
   */
  async tvSeasonTranslations(
    opts: { series_id: number; season_number: number },
  ): Promise<
    {
      id: number;
      translations: {
        iso_3166_1: string;
        iso_639_1: string;
        name: string;
        english_name: string;
        data: { name: string; overview: string };
      }[];
    }
  > {
    return await (await fetch(
      `${this.#base_url}/3/tv/${opts.series_id}/season/${opts.season_number}/translations?api_key=${this.#api_key}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Get the videos that belong to a TV season.
   *
   * @param {{ series_id: number; season_number: number; include_video_language?: string; language?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/tv-season-videos
   */
  async tvSeasonVideos(
    opts: {
      series_id: number;
      season_number: number;
      include_video_language?: string;
      language?: string;
    },
  ): Promise<
    {
      id: number;
      results: {
        iso_639_1: string;
        iso_3166_1: string;
        name: string;
        key: string;
        site: string;
        size: number;
        type: string;
        official: boolean;
        published_at: string;
        id: string;
      }[];
    }
  > {
    let queryParams = "";

    if (opts["include_video_language"]) {
      queryParams += `&include_video_language=${
        opts["include_video_language"]
      }`;
    }
    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }

    return await (await fetch(
      `${this.#base_url}/3/tv/${opts.series_id}/season/${opts.season_number}/videos?api_key=${this.#api_key}${queryParams}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * @param {{ series_id: number; season_number: number; episode_number: number; language?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/tv-episode-credits
   */
  async tvEpisodeCredits(
    opts: {
      series_id: number;
      season_number: number;
      episode_number: number;
      language?: string;
    },
  ): Promise<
    {
      cast: {
        adult: boolean;
        gender: number;
        id: number;
        known_for_department: string;
        name: string;
        original_name: string;
        popularity: number;
        profile_path: string;
        character: string;
        credit_id: string;
        order: number;
      }[];
      crew: {
        department: string;
        job: string;
        credit_id: string;
        adult: boolean;
        gender: number;
        id: number;
        known_for_department: string;
        name: string;
        original_name: string;
        popularity: number;
        profile_path: string;
      }[];
      guest_stars: {
        character: string;
        credit_id: string;
        order: number;
        adult: boolean;
        gender: number;
        id: number;
        known_for_department: string;
        name: string;
        original_name: string;
        popularity: number;
        profile_path: string;
      }[];
      id: number;
    }
  > {
    let queryParams = "";

    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }

    return await (await fetch(
      `${this.#base_url}/3/tv/${opts.series_id}/season/${opts.season_number}/episode/${opts.episode_number}/credits?api_key=${this.#api_key}${queryParams}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Get a list of external IDs that have been added to a TV episode.
   *
   * @param {{ series_id: number; season_number: number; episode_number: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/tv-episode-external-ids
   */
  async tvEpisodeExternalIds(
    opts: { series_id: number; season_number: number; episode_number: string },
  ): Promise<
    {
      id: number;
      imdb_id: string;
      freebase_mid: string;
      freebase_id: string;
      tvdb_id: number;
      tvrage_id: number;
      wikidata_id: string;
    }
  > {
    return await (await fetch(
      `${this.#base_url}/3/tv/${opts.series_id}/season/${opts.season_number}/episode/${opts.episode_number}/external_ids?api_key=${this.#api_key}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Get the translations that have been added to a TV episode.
   *
   * @param {{ series_id: number; season_number: number; episode_number: number; }} opts
   * @see https://developer.themoviedb.org/v3/reference/tv-episode-translations
   */
  async tvEpisodeTranslations(
    opts: { series_id: number; season_number: number; episode_number: number },
  ): Promise<
    {
      id: number;
      translations: {
        iso_3166_1: string;
        iso_639_1: string;
        name: string;
        english_name: string;
        data: { name: string; overview: string };
      }[];
    }
  > {
    return await (await fetch(
      `${this.#base_url}/3/tv/${opts.series_id}/season/${opts.season_number}/episode/${opts.episode_number}/translations?api_key=${this.#api_key}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Get the videos that belong to a TV episode.
   *
   * @param {{ series_id: number; season_number: number; episode_number: number; include_video_language?: string; language?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/tv-episode-videos
   */
  async tvEpisodeVideos(
    opts: {
      series_id: number;
      season_number: number;
      episode_number: number;
      include_video_language?: string;
      language?: string;
    },
  ): Promise<
    {
      id: number;
      results: {
        iso_639_1: string;
        iso_3166_1: string;
        name: string;
        key: string;
        site: string;
        size: number;
        type: string;
        official: boolean;
        published_at: string;
        id: string;
      }[];
    }
  > {
    let queryParams = "";

    if (opts["include_video_language"]) {
      queryParams += `&include_video_language=${
        opts["include_video_language"]
      }`;
    }
    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }

    return await (await fetch(
      `${this.#base_url}/3/tv/${opts.series_id}/season/${opts.season_number}/episode/${opts.episode_number}/videos?api_key=${this.#api_key}${queryParams}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Rate a TV episode and save it to your rated list.
   *
   * @param {{ series_id: number; season_number: number; episode_number: number; guest_session_id?: string; session_id?: string; }} opts
   * @param {Record<string, unknown>} body
   * @see https://developer.themoviedb.org/v3/reference/tv-episode-add-rating
   */
  async tvEpisodeAddRating(
    opts: {
      series_id: number;
      season_number: number;
      episode_number: number;
      guest_session_id?: string;
      session_id?: string;
    },
    body: Record<string, unknown>,
  ): Promise<{ status_code: number; status_message: string }> {
    let queryParams = "";

    if (opts["guest_session_id"]) {
      queryParams += `&guest_session_id=${opts["guest_session_id"]}`;
    }
    if (opts["session_id"]) {
      queryParams += `&session_id=${opts["session_id"]}`;
    }

    return await (await fetch(
      `${this.#base_url}/3/tv/${opts.series_id}/season/${opts.season_number}/episode/${opts.episode_number}/rating?api_key=${this.#api_key}${queryParams}`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          body: JSON.stringify(body),
        },
      },
    )).json();
  }

  /**
   * Delete your rating on a TV episode.
   *
   * @param {{ series_id: number; season_number: number; episode_number: number; guest_session_id?: string; session_id?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/tv-episode-delete-rating
   */
  async tvEpisodeDeleteRating(
    opts: {
      series_id: number;
      season_number: number;
      episode_number: number;
      guest_session_id?: string;
      session_id?: string;
    },
  ): Promise<{ status_code: number; status_message: string }> {
    let queryParams = "";

    if (opts["guest_session_id"]) {
      queryParams += `&guest_session_id=${opts["guest_session_id"]}`;
    }
    if (opts["session_id"]) {
      queryParams += `&session_id=${opts["session_id"]}`;
    }

    return await (await fetch(
      `${this.#base_url}/3/tv/${opts.series_id}/season/${opts.season_number}/episode/${opts.episode_number}/rating?api_key=${this.#api_key}${queryParams}`,
      {
        method: "DELETE",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Get the public details of an account on TMDB.
   *
   * @param {{ account_id: number; session_id?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/account-details
   */
  async accountDetails(
    opts: { account_id: number; session_id?: string },
  ): Promise<
    {
      avatar: { gravatar: { hash: string }; tmdb: { avatar_path: string } };
      id: number;
      iso_639_1: string;
      iso_3166_1: string;
      name: string;
      include_adult: boolean;
      username: string;
    }
  > {
    let queryParams = "";

    if (opts["session_id"]) {
      queryParams += `&session_id=${opts["session_id"]}`;
    }

    return await (await fetch(
      `${this.#base_url}/3/account/${opts.account_id}?api_key=${this.#api_key}${queryParams}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Get a users list of custom lists.
   *
   * @param {{ account_id: number; page?: number; session_id?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/account-lists
   */
  async accountLists(
    opts: { account_id: number; page?: number; session_id?: string },
  ): Promise<
    {
      page: number;
      results: {
        description: string;
        favorite_count: number;
        id: number;
        item_count: number;
        iso_639_1: string;
        list_type: string;
        name: string;
        poster_path: unknown;
      }[];
      total_pages: number;
      total_results: number;
    }
  > {
    let queryParams = "";

    if (opts["page"]) {
      queryParams += `&page=${opts["page"]}`;
    }
    if (opts["session_id"]) {
      queryParams += `&session_id=${opts["session_id"]}`;
    }

    return await (await fetch(
      `${this.#base_url}/3/account/${opts.account_id}/lists?api_key=${this.#api_key}${queryParams}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Get a users list of favourite movies.
   *
   * @param {{ account_id: number; language?: string; page?: number; session_id?: string; sort_by?: "created_at.asc" | "created_at.desc"; }} opts
   * @see https://developer.themoviedb.org/v3/reference/account-get-favorites
   */
  async accountGetFavorites(
    opts: {
      account_id: number;
      language?: string;
      page?: number;
      session_id?: string;
      sort_by?: "created_at.asc" | "created_at.desc";
    },
  ): Promise<
    {
      page: number;
      results: {
        adult: boolean;
        backdrop_path: string;
        genre_ids: number[];
        id: number;
        original_language: string;
        original_title: string;
        overview: string;
        popularity: number;
        poster_path: string;
        release_date: string;
        title: string;
        video: boolean;
        vote_average: number;
        vote_count: number;
      }[];
      total_pages: number;
      total_results: number;
    }
  > {
    let queryParams = "";

    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    if (opts["page"]) {
      queryParams += `&page=${opts["page"]}`;
    }
    if (opts["session_id"]) {
      queryParams += `&session_id=${opts["session_id"]}`;
    }
    if (opts["sort_by"]) {
      queryParams += `&sort_by=${opts["sort_by"]}`;
    }

    return await (await fetch(
      `${this.#base_url}/3/account/${opts.account_id}/favorite/movies?api_key=${this.#api_key}${queryParams}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Get a users list of favourite TV shows.
   *
   * @param {{ account_id: number; language?: string; page?: number; session_id?: string; sort_by?: "created_at.asc" | "created_at.desc"; }} opts
   * @see https://developer.themoviedb.org/v3/reference/account-favorite-tv
   */
  async accountFavoriteTv(
    opts: {
      account_id: number;
      language?: string;
      page?: number;
      session_id?: string;
      sort_by?: "created_at.asc" | "created_at.desc";
    },
  ): Promise<
    {
      page: number;
      results: {
        adult: boolean;
        backdrop_path: string;
        genre_ids: number[];
        id: number;
        origin_country: string[];
        original_language: string;
        original_name: string;
        overview: string;
        popularity: number;
        poster_path: string;
        first_air_date: string;
        name: string;
        vote_average: number;
        vote_count: number;
      }[];
      total_pages: number;
      total_results: number;
    }
  > {
    let queryParams = "";

    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    if (opts["page"]) {
      queryParams += `&page=${opts["page"]}`;
    }
    if (opts["session_id"]) {
      queryParams += `&session_id=${opts["session_id"]}`;
    }
    if (opts["sort_by"]) {
      queryParams += `&sort_by=${opts["sort_by"]}`;
    }

    return await (await fetch(
      `${this.#base_url}/3/account/${opts.account_id}/favorite/tv?api_key=${this.#api_key}${queryParams}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Get a users list of rated movies.
   *
   * @param {{ account_id: number; language?: string; page?: number; session_id?: string; sort_by?: "created_at.asc" | "created_at.desc"; }} opts
   * @see https://developer.themoviedb.org/v3/reference/account-rated-movies
   */
  async accountRatedMovies(
    opts: {
      account_id: number;
      language?: string;
      page?: number;
      session_id?: string;
      sort_by?: "created_at.asc" | "created_at.desc";
    },
  ): Promise<
    {
      page: number;
      results: {
        adult: boolean;
        backdrop_path: string;
        genre_ids: number[];
        id: number;
        original_language: string;
        original_title: string;
        overview: string;
        popularity: number;
        poster_path: string;
        release_date: string;
        title: string;
        video: boolean;
        vote_average: number;
        vote_count: number;
        rating: number;
      }[];
      total_pages: number;
      total_results: number;
    }
  > {
    let queryParams = "";

    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    if (opts["page"]) {
      queryParams += `&page=${opts["page"]}`;
    }
    if (opts["session_id"]) {
      queryParams += `&session_id=${opts["session_id"]}`;
    }
    if (opts["sort_by"]) {
      queryParams += `&sort_by=${opts["sort_by"]}`;
    }

    return await (await fetch(
      `${this.#base_url}/3/account/${opts.account_id}/rated/movies?api_key=${this.#api_key}${queryParams}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Get a users list of rated TV shows.
   *
   * @param {{ account_id: number; language?: string; page?: number; session_id?: string; sort_by?: "created_at.asc" | "created_at.desc"; }} opts
   * @see https://developer.themoviedb.org/v3/reference/account-rated-tv
   */
  async accountRatedTv(
    opts: {
      account_id: number;
      language?: string;
      page?: number;
      session_id?: string;
      sort_by?: "created_at.asc" | "created_at.desc";
    },
  ): Promise<
    {
      page: number;
      results: {
        adult: boolean;
        backdrop_path: string;
        genre_ids: number[];
        id: number;
        origin_country: string[];
        original_language: string;
        original_name: string;
        overview: string;
        popularity: number;
        poster_path: string;
        first_air_date: string;
        name: string;
        vote_average: number;
        vote_count: number;
        rating: number;
      }[];
      total_pages: number;
      total_results: number;
    }
  > {
    let queryParams = "";

    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    if (opts["page"]) {
      queryParams += `&page=${opts["page"]}`;
    }
    if (opts["session_id"]) {
      queryParams += `&session_id=${opts["session_id"]}`;
    }
    if (opts["sort_by"]) {
      queryParams += `&sort_by=${opts["sort_by"]}`;
    }

    return await (await fetch(
      `${this.#base_url}/3/account/${opts.account_id}/rated/tv?api_key=${this.#api_key}${queryParams}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Get a users list of rated TV episodes.
   *
   * @param {{ account_id: number; language?: string; page?: number; session_id?: string; sort_by?: "created_at.asc" | "created_at.desc"; }} opts
   * @see https://developer.themoviedb.org/v3/reference/account-rated-tv-episodes
   */
  async accountRatedTvEpisodes(
    opts: {
      account_id: number;
      language?: string;
      page?: number;
      session_id?: string;
      sort_by?: "created_at.asc" | "created_at.desc";
    },
  ): Promise<
    {
      page: number;
      results: {
        air_date: string;
        episode_number: number;
        id: number;
        name: string;
        overview: string;
        production_code: string;
        runtime: number;
        season_number: number;
        show_id: number;
        still_path: string;
        vote_average: number;
        vote_count: number;
        rating: number;
      }[];
      total_pages: number;
      total_results: number;
    }
  > {
    let queryParams = "";

    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    if (opts["page"]) {
      queryParams += `&page=${opts["page"]}`;
    }
    if (opts["session_id"]) {
      queryParams += `&session_id=${opts["session_id"]}`;
    }
    if (opts["sort_by"]) {
      queryParams += `&sort_by=${opts["sort_by"]}`;
    }

    return await (await fetch(
      `${this.#base_url}/3/account/${opts.account_id}/rated/tv/episodes?api_key=${this.#api_key}${queryParams}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Get a list of movies added to a users watchlist.
   *
   * @param {{ account_id: number; language?: string; page?: number; session_id?: string; sort_by?: "created_at.asc" | "created_at.desc"; }} opts
   * @see https://developer.themoviedb.org/v3/reference/account-watchlist-movies
   */
  async accountWatchlistMovies(
    opts: {
      account_id: number;
      language?: string;
      page?: number;
      session_id?: string;
      sort_by?: "created_at.asc" | "created_at.desc";
    },
  ): Promise<
    {
      page: number;
      results: {
        adult: boolean;
        backdrop_path: string;
        genre_ids: number[];
        id: number;
        original_language: string;
        original_title: string;
        overview: string;
        popularity: number;
        poster_path: string;
        release_date: string;
        title: string;
        video: boolean;
        vote_average: number;
        vote_count: number;
      }[];
      total_pages: number;
      total_results: number;
    }
  > {
    let queryParams = "";

    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    if (opts["page"]) {
      queryParams += `&page=${opts["page"]}`;
    }
    if (opts["session_id"]) {
      queryParams += `&session_id=${opts["session_id"]}`;
    }
    if (opts["sort_by"]) {
      queryParams += `&sort_by=${opts["sort_by"]}`;
    }

    return await (await fetch(
      `${this.#base_url}/3/account/${opts.account_id}/watchlist/movies?api_key=${this.#api_key}${queryParams}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Get a list of TV shows added to a users watchlist.
   *
   * @param {{ account_id: number; language?: string; page?: number; session_id?: string; sort_by?: "created_at.asc" | "created_at.desc"; }} opts
   * @see https://developer.themoviedb.org/v3/reference/account-watchlist-tv
   */
  async accountWatchlistTv(
    opts: {
      account_id: number;
      language?: string;
      page?: number;
      session_id?: string;
      sort_by?: "created_at.asc" | "created_at.desc";
    },
  ): Promise<
    {
      page: number;
      results: {
        adult: boolean;
        backdrop_path: string;
        genre_ids: number[];
        id: number;
        origin_country: string[];
        original_language: string;
        original_name: string;
        overview: string;
        popularity: number;
        poster_path: string;
        first_air_date: string;
        name: string;
        vote_average: number;
        vote_count: number;
      }[];
      total_pages: number;
      total_results: number;
    }
  > {
    let queryParams = "";

    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    if (opts["page"]) {
      queryParams += `&page=${opts["page"]}`;
    }
    if (opts["session_id"]) {
      queryParams += `&session_id=${opts["session_id"]}`;
    }
    if (opts["sort_by"]) {
      queryParams += `&sort_by=${opts["sort_by"]}`;
    }

    return await (await fetch(
      `${this.#base_url}/3/account/${opts.account_id}/watchlist/tv?api_key=${this.#api_key}${queryParams}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Mark a movie or TV show as a favourite.
   *
   * @param {{ account_id: number; session_id?: string; }} opts
   * @param {Record<string, unknown>} body
   * @see https://developer.themoviedb.org/v3/reference/account-add-favorite
   */
  async accountAddFavorite(
    opts: { account_id: number; session_id?: string },
    body: Record<string, unknown>,
  ): Promise<{ status_code: number; status_message: string }> {
    let queryParams = "";

    if (opts["session_id"]) {
      queryParams += `&session_id=${opts["session_id"]}`;
    }

    return await (await fetch(
      `${this.#base_url}/3/account/${opts.account_id}/favorite?api_key=${this.#api_key}${queryParams}`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          body: JSON.stringify(body),
        },
      },
    )).json();
  }

  /**
   * Add a movie or TV show to your watchlist.
   *
   * @param {{ account_id: number; session_id?: string; }} opts
   * @param {Record<string, unknown>} body
   * @see https://developer.themoviedb.org/v3/reference/account-add-to-watchlist
   */
  async accountAddToWatchlist(
    opts: { account_id: number; session_id?: string },
    body: Record<string, unknown>,
  ): Promise<{ status_code: number; status_message: string }> {
    let queryParams = "";

    if (opts["session_id"]) {
      queryParams += `&session_id=${opts["session_id"]}`;
    }

    return await (await fetch(
      `${this.#base_url}/3/account/${opts.account_id}/watchlist?api_key=${this.#api_key}${queryParams}`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          body: JSON.stringify(body),
        },
      },
    )).json();
  }

  /**
   * Get an up to date list of the officially supported movie certifications on TMDB.
   *
   * @see https://developer.themoviedb.org/v3/reference/certification-movie-list
   */
  async certificationMovieList(): Promise<
    {
      certifications: {
        AU: { certification: string; meaning: string; order: number }[];
        BG: { certification: string; meaning: string; order: number }[];
        BR: { certification: string; meaning: string; order: number }[];
        CA: { certification: string; meaning: string; order: number }[];
        "CA-QC": { certification: string; meaning: string; order: number }[];
        DE: { certification: string; meaning: string; order: number }[];
        DK: { certification: string; meaning: string; order: number }[];
        ES: { certification: string; meaning: string; order: number }[];
        FI: { certification: string; meaning: string; order: number }[];
        FR: { certification: string; meaning: string; order: number }[];
        GB: { certification: string; meaning: string; order: number }[];
        HU: { certification: string; meaning: string; order: number }[];
        IN: { certification: string; meaning: string; order: number }[];
        IT: { certification: string; meaning: string; order: number }[];
        LT: { certification: string; meaning: string; order: number }[];
        MY: { certification: string; meaning: string; order: number }[];
        NL: { certification: string; meaning: string; order: number }[];
        NO: { certification: string; meaning: string; order: number }[];
        NZ: { certification: string; meaning: string; order: number }[];
        PH: { certification: string; meaning: string; order: number }[];
        PT: { certification: string; meaning: string; order: number }[];
        RU: { certification: string; meaning: string; order: number }[];
        SE: { certification: string; meaning: string; order: number }[];
        US: { certification: string; meaning: string; order: number }[];
        KR: { certification: string; meaning: string; order: number }[];
        SK: { certification: string; meaning: string; order: number }[];
        TH: { certification: string; meaning: string; order: number }[];
        MX: { certification: string; meaning: string; order: number }[];
        ID: { certification: string; meaning: string; order: number }[];
        TR: { certification: string; meaning: string; order: number }[];
        AR: { certification: string; meaning: string; order: number }[];
        GR: { certification: string; meaning: string; order: number }[];
        TW: { certification: string; meaning: string; order: number }[];
        ZA: { certification: string; meaning: string; order: number }[];
        SG: { certification: string; meaning: string; order: number }[];
        IE: { certification: string; meaning: string; order: number }[];
        PR: { certification: string; meaning: string; order: number }[];
        JP: { certification: string; meaning: string; order: number }[];
        VI: { certification: string; meaning: string; order: number }[];
        CH: { certification: string; meaning: string; order: number }[];
        IL: { certification: string; meaning: string; order: number }[];
        HK: { certification: string; meaning: string; order: number }[];
        MO: { certification: string; meaning: string; order: number }[];
        LV: { certification: string; meaning: string; order: number }[];
        LU: { certification: string; meaning: string; order: number }[];
      };
    }
  > {
    return await (await fetch(
      `${this.#base_url}/3/certification/movie/list?api_key=${this.#api_key}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /** @see https://developer.themoviedb.org/v3/reference/certifications-tv-list */
  async certificationsTvList(): Promise<
    {
      certifications: {
        AU: { certification: string; meaning: string; order: number }[];
        BR: { certification: string; meaning: string; order: number }[];
        CA: { certification: string; meaning: string; order: number }[];
        "CA-QC": { certification: string; meaning: string; order: number }[];
        DE: { certification: string; meaning: string; order: number }[];
        ES: { certification: string; meaning: string; order: number }[];
        FR: { certification: string; meaning: string; order: number }[];
        GB: { certification: string; meaning: string; order: number }[];
        HU: { certification: string; meaning: string; order: number }[];
        KR: { certification: string; meaning: string; order: number }[];
        LT: { certification: string; meaning: string; order: number }[];
        NL: { certification: string; meaning: string; order: number }[];
        PH: { certification: string; meaning: string; order: number }[];
        PT: { certification: string; meaning: string; order: number }[];
        RU: { certification: string; meaning: string; order: number }[];
        SK: { certification: string; meaning: string; order: number }[];
        TH: { certification: string; meaning: string; order: number }[];
        US: { certification: string; meaning: string; order: number }[];
        IT: { certification: string; meaning: string; order: number }[];
        FI: { certification: string; meaning: string; order: number }[];
        MY: { certification: string; meaning: string; order: number }[];
        NZ: { certification: string; meaning: string; order: number }[];
        NO: { certification: string; meaning: string; order: number }[];
        BG: { certification: string; meaning: string; order: number }[];
        MX: { certification: string; meaning: string; order: number }[];
        IN: { certification: string; meaning: string; order: number }[];
        DK: { certification: string; meaning: string; order: number }[];
        SE: { certification: string; meaning: string; order: number }[];
        ID: { certification: string; meaning: string; order: number }[];
        TR: { certification: string; meaning: string; order: number }[];
        AR: { certification: string; meaning: string; order: number }[];
        PL: { certification: string; meaning: string; order: number }[];
        MA: { certification: string; meaning: string; order: number }[];
        GR: { certification: string; meaning: string; order: number }[];
        IL: { certification: string; meaning: string; order: number }[];
        TW: { certification: string; meaning: string; order: number }[];
        ZA: { certification: string; meaning: string; order: number }[];
        SG: { certification: string; meaning: string; order: number }[];
        PR: { certification: string; meaning: string; order: number }[];
        VI: { certification: string; meaning: string; order: number }[];
      };
    }
  > {
    return await (await fetch(
      `${this.#base_url}/3/certification/tv/list?api_key=${this.#api_key}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Get a list of all of the movie ids that have been changed in the past 24 hours.
   *
   * @param {{ end_date?: string; page?: number; start_date?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/changes-movie-list
   */
  async changesMovieList(
    opts?: { end_date?: string; page?: number; start_date?: string },
  ): Promise<
    {
      results: { id: number; adult: boolean }[];
      page: number;
      total_pages: number;
      total_results: number;
    }
  > {
    let queryParams = "";

    if (opts?.["end_date"]) {
      queryParams += `&end_date=${opts["end_date"]}`;
    }
    if (opts?.["page"]) {
      queryParams += `&page=${opts["page"]}`;
    }
    if (opts?.["start_date"]) {
      queryParams += `&start_date=${opts["start_date"]}`;
    }

    return await (await fetch(
      `${this.#base_url}/3/movie/changes?api_key=${this.#api_key}${queryParams}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * @param {{ end_date?: string; page?: number; start_date?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/changes-tv-list
   */
  async changesTvList(
    opts?: { end_date?: string; page?: number; start_date?: string },
  ): Promise<
    {
      results: { id: number; adult: boolean }[];
      page: number;
      total_pages: number;
      total_results: number;
    }
  > {
    let queryParams = "";

    if (opts?.["end_date"]) {
      queryParams += `&end_date=${opts["end_date"]}`;
    }
    if (opts?.["page"]) {
      queryParams += `&page=${opts["page"]}`;
    }
    if (opts?.["start_date"]) {
      queryParams += `&start_date=${opts["start_date"]}`;
    }

    return await (await fetch(
      `${this.#base_url}/3/tv/changes?api_key=${this.#api_key}${queryParams}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * @param {{ end_date?: string; page?: number; start_date?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/changes-people-list
   */
  async changesPeopleList(
    opts?: { end_date?: string; page?: number; start_date?: string },
  ): Promise<
    {
      results: { id: number; adult: boolean }[];
      page: number;
      total_pages: number;
      total_results: number;
    }
  > {
    let queryParams = "";

    if (opts?.["end_date"]) {
      queryParams += `&end_date=${opts["end_date"]}`;
    }
    if (opts?.["page"]) {
      queryParams += `&page=${opts["page"]}`;
    }
    if (opts?.["start_date"]) {
      queryParams += `&start_date=${opts["start_date"]}`;
    }

    return await (await fetch(
      `${this.#base_url}/3/person/changes?api_key=${this.#api_key}${queryParams}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Get collection details by ID.
   *
   * @param {{ collection_id: number; language?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/collection-details
   */
  async collectionDetails(
    opts: { collection_id: number; language?: string },
  ): Promise<
    {
      id: number;
      name: string;
      overview: string;
      poster_path: string;
      backdrop_path: string;
      parts: {
        adult: boolean;
        backdrop_path: string;
        id: number;
        title: string;
        original_language: string;
        original_title: string;
        overview: string;
        poster_path: string;
        media_type: string;
        genre_ids: number[];
        popularity: number;
        release_date: string;
        video: boolean;
        vote_average: number;
        vote_count: number;
      }[];
    }
  > {
    let queryParams = "";

    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }

    return await (await fetch(
      `${this.#base_url}/3/collection/${opts.collection_id}?api_key=${this.#api_key}${queryParams}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Get the images that belong to a collection.
   *
   * @param {{ collection_id: number; include_image_language?: string; language?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/collection-images
   */
  async collectionImages(
    opts: {
      collection_id: number;
      include_image_language?: string;
      language?: string;
    },
  ): Promise<
    {
      id: number;
      backdrops: {
        aspect_ratio: number;
        height: number;
        iso_639_1: unknown;
        file_path: string;
        vote_average: number;
        vote_count: number;
        width: number;
      }[];
      posters: {
        aspect_ratio: number;
        height: number;
        iso_639_1: string;
        file_path: string;
        vote_average: number;
        vote_count: number;
        width: number;
      }[];
    }
  > {
    let queryParams = "";

    if (opts["include_image_language"]) {
      queryParams += `&include_image_language=${
        opts["include_image_language"]
      }`;
    }
    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }

    return await (await fetch(
      `${this.#base_url}/3/collection/${opts.collection_id}/images?api_key=${this.#api_key}${queryParams}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * @param {{ collection_id: number; }} opts
   * @see https://developer.themoviedb.org/v3/reference/collection-translations
   */
  async collectionTranslations(
    opts: { collection_id: number },
  ): Promise<
    {
      id: number;
      translations: {
        iso_3166_1: string;
        iso_639_1: string;
        name: string;
        english_name: string;
        data: { title: string; overview: string; homepage: string };
      }[];
    }
  > {
    return await (await fetch(
      `${this.#base_url}/3/collection/${opts.collection_id}/translations?api_key=${this.#api_key}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Get the company details by ID.
   *
   * @param {{ company_id: number; }} opts
   * @see https://developer.themoviedb.org/v3/reference/company-details
   */
  async companyDetails(
    opts: { company_id: number },
  ): Promise<
    {
      description: string;
      headquarters: string;
      homepage: string;
      id: number;
      logo_path: string;
      name: string;
      origin_country: string;
      parent_company: unknown;
    }
  > {
    return await (await fetch(
      `${this.#base_url}/3/company/${opts.company_id}?api_key=${this.#api_key}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Get the company details by ID.
   *
   * @param {{ company_id: number; }} opts
   * @see https://developer.themoviedb.org/v3/reference/company-alternative-names
   */
  async companyAlternativeNames(
    opts: { company_id: number },
  ): Promise<{ id: number; results: { name: string; type: string }[] }> {
    return await (await fetch(
      `${this.#base_url}/3/company/${opts.company_id}/alternative_names?api_key=${this.#api_key}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Get the company logos by id.
   *
   * @param {{ company_id: number; }} opts
   * @see https://developer.themoviedb.org/v3/reference/company-images
   */
  async companyImages(
    opts: { company_id: number },
  ): Promise<
    {
      id: number;
      logos: {
        aspect_ratio: number;
        file_path: string;
        height: number;
        id: string;
        file_type: string;
        vote_average: number;
        vote_count: number;
        width: number;
      }[];
    }
  > {
    return await (await fetch(
      `${this.#base_url}/3/company/${opts.company_id}/images?api_key=${this.#api_key}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Get a movie or TV credit details by ID.
   *
   * @param {{ credit_id: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/credit-details
   */
  async creditDetails(
    opts: { credit_id: string },
  ): Promise<
    {
      credit_type: string;
      department: string;
      job: string;
      media: {
        adult: boolean;
        backdrop_path: string;
        id: number;
        name: string;
        original_language: string;
        original_name: string;
        overview: string;
        poster_path: string;
        media_type: string;
        genre_ids: number[];
        popularity: number;
        first_air_date: string;
        vote_average: number;
        vote_count: number;
        origin_country: string[];
        character: string;
        episodes: unknown[];
        seasons: {
          air_date: string;
          episode_count: number;
          id: number;
          name: string;
          overview: string;
          poster_path: string;
          season_number: number;
          show_id: number;
        }[];
      };
      media_type: string;
      id: string;
      person: {
        adult: boolean;
        id: number;
        name: string;
        original_name: string;
        media_type: string;
        popularity: number;
        gender: number;
        known_for_department: string;
        profile_path: string;
      };
    }
  > {
    return await (await fetch(
      `${this.#base_url}/3/credit/${opts.credit_id}?api_key=${this.#api_key}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Get the list of official genres for movies.
   *
   * @param {{ language?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/genre-movie-list
   */
  async genreMovieList(
    opts?: { language?: string },
  ): Promise<{ genres: { id: number; name: string }[] }> {
    let queryParams = "";

    if (opts?.["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }

    return await (await fetch(
      `${this.#base_url}/3/genre/movie/list?api_key=${this.#api_key}${queryParams}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Get the list of official genres for TV shows.
   *
   * @param {{ language?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/genre-tv-list
   */
  async genreTvList(
    opts?: { language?: string },
  ): Promise<{ genres: { id: number; name: string }[] }> {
    let queryParams = "";

    if (opts?.["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }

    return await (await fetch(
      `${this.#base_url}/3/genre/tv/list?api_key=${this.#api_key}${queryParams}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Get the rated movies for a guest session.
   *
   * @param {{ guest_session_id: string; language?: string; page?: number; sort_by?: "created_at.asc" | "created_at.desc"; }} opts
   * @see https://developer.themoviedb.org/v3/reference/guest-session-rated-movies
   */
  async guestSessionRatedMovies(
    opts: {
      guest_session_id: string;
      language?: string;
      page?: number;
      sort_by?: "created_at.asc" | "created_at.desc";
    },
  ): Promise<
    {
      page: number;
      results: {
        adult: boolean;
        backdrop_path: string;
        genre_ids: number[];
        id: number;
        original_language: string;
        original_title: string;
        overview: string;
        popularity: number;
        poster_path: string;
        release_date: string;
        title: string;
        video: boolean;
        vote_average: number;
        vote_count: number;
        rating: number;
      }[];
      total_pages: number;
      total_results: number;
    }
  > {
    let queryParams = "";

    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    if (opts["page"]) {
      queryParams += `&page=${opts["page"]}`;
    }
    if (opts["sort_by"]) {
      queryParams += `&sort_by=${opts["sort_by"]}`;
    }

    return await (await fetch(
      `${this.#base_url}/3/guest_session/${opts.guest_session_id}/rated/movies?api_key=${this.#api_key}${queryParams}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Get the rated TV shows for a guest session.
   *
   * @param {{ guest_session_id: string; language?: string; page?: number; sort_by?: "created_at.asc" | "created_at.desc"; }} opts
   * @see https://developer.themoviedb.org/v3/reference/guest-session-rated-tv
   */
  async guestSessionRatedTv(
    opts: {
      guest_session_id: string;
      language?: string;
      page?: number;
      sort_by?: "created_at.asc" | "created_at.desc";
    },
  ): Promise<
    {
      page: number;
      results: {
        adult: boolean;
        backdrop_path: string;
        genre_ids: number[];
        id: number;
        origin_country: string[];
        original_language: string;
        original_name: string;
        overview: string;
        popularity: number;
        poster_path: string;
        first_air_date: string;
        name: string;
        vote_average: number;
        vote_count: number;
        rating: number;
      }[];
      total_pages: number;
      total_results: number;
    }
  > {
    let queryParams = "";

    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    if (opts["page"]) {
      queryParams += `&page=${opts["page"]}`;
    }
    if (opts["sort_by"]) {
      queryParams += `&sort_by=${opts["sort_by"]}`;
    }

    return await (await fetch(
      `${this.#base_url}/3/guest_session/${opts.guest_session_id}/rated/tv?api_key=${this.#api_key}${queryParams}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Get the rated TV episodes for a guest session.
   *
   * @param {{ guest_session_id: string; language?: string; page?: number; sort_by?: "created_at.asc" | "created_at.desc"; }} opts
   * @see https://developer.themoviedb.org/v3/reference/guest-session-rated-tv-episodes
   */
  async guestSessionRatedTvEpisodes(
    opts: {
      guest_session_id: string;
      language?: string;
      page?: number;
      sort_by?: "created_at.asc" | "created_at.desc";
    },
  ): Promise<
    {
      page: number;
      results: {
        air_date: string;
        episode_number: number;
        id: number;
        name: string;
        overview: string;
        production_code: string;
        runtime: number;
        season_number: number;
        show_id: number;
        still_path: string;
        vote_average: number;
        vote_count: number;
        rating: number;
      }[];
      total_pages: number;
      total_results: number;
    }
  > {
    let queryParams = "";

    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    if (opts["page"]) {
      queryParams += `&page=${opts["page"]}`;
    }
    if (opts["sort_by"]) {
      queryParams += `&sort_by=${opts["sort_by"]}`;
    }

    return await (await fetch(
      `${this.#base_url}/3/guest_session/${opts.guest_session_id}/rated/tv/episodes?api_key=${this.#api_key}${queryParams}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Get the list of the countries we have watch provider (OTT/streaming) data for.
   *
   * @param {{ language?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/watch-providers-available-regions
   */
  async watchProvidersAvailableRegions(
    opts?: { language?: string },
  ): Promise<
    {
      results: {
        iso_3166_1: string;
        english_name: string;
        native_name: string;
      }[];
    }
  > {
    let queryParams = "";

    if (opts?.["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }

    return await (await fetch(
      `${this.#base_url}/3/watch/providers/regions?api_key=${this.#api_key}${queryParams}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Get the list of streaming providers we have for movies.
   *
   * @param {{ language?: string; watch_region?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/watch-providers-movie-list
   */
  async watchProvidersMovieList(
    opts?: { language?: string; watch_region?: string },
  ): Promise<
    {
      results: {
        display_priorities: {
          CA: number;
          AE: number;
          AR: number;
          AT: number;
          AU: number;
          BE: number;
          BO: number;
          BR: number;
          BG: number;
          CH: number;
          CL: number;
          CO: number;
          CR: number;
          CZ: number;
          DE: number;
          DK: number;
          EC: number;
          EE: number;
          EG: number;
          ES: number;
          FI: number;
          FR: number;
          GB: number;
          GR: number;
          GT: number;
          HK: number;
          HN: number;
          HU: number;
          ID: number;
          IE: number;
          IN: number;
          IT: number;
          JP: number;
          LT: number;
          LV: number;
          MX: number;
          MY: number;
          NL: number;
          NO: number;
          NZ: number;
          PE: number;
          PH: number;
          PL: number;
          PT: number;
          PY: number;
          RU: number;
          SA: number;
          SE: number;
          SG: number;
          SK: number;
          TH: number;
          TR: number;
          TW: number;
          US: number;
          VE: number;
          ZA: number;
          SI: number;
          CV: number;
          GH: number;
          MU: number;
          MZ: number;
          UG: number;
          IL: number;
        };
        display_priority: number;
        logo_path: string;
        provider_name: string;
        provider_id: number;
      }[];
    }
  > {
    let queryParams = "";

    if (opts?.["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    if (opts?.["watch_region"]) {
      queryParams += `&watch_region=${opts["watch_region"]}`;
    }

    return await (await fetch(
      `${this.#base_url}/3/watch/providers/movie?api_key=${this.#api_key}${queryParams}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Get the list of streaming providers we have for TV shows.
   *
   * @param {{ language?: string; watch_region?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/watch-provider-tv-list
   */
  async watchProviderTvList(
    opts?: { language?: string; watch_region?: string },
  ): Promise<
    {
      results: {
        display_priorities: {
          CA: number;
          AE: number;
          AR: number;
          AT: number;
          AU: number;
          BE: number;
          BO: number;
          BR: number;
          BG: number;
          CH: number;
          CL: number;
          CO: number;
          CR: number;
          CZ: number;
          DE: number;
          DK: number;
          EC: number;
          EE: number;
          EG: number;
          ES: number;
          FI: number;
          FR: number;
          GB: number;
          GR: number;
          GT: number;
          HK: number;
          HN: number;
          HU: number;
          ID: number;
          IE: number;
          IN: number;
          IT: number;
          JP: number;
          LT: number;
          LV: number;
          MX: number;
          MY: number;
          NL: number;
          NO: number;
          NZ: number;
          PE: number;
          PH: number;
          PL: number;
          PT: number;
          PY: number;
          RU: number;
          SA: number;
          SE: number;
          SG: number;
          SK: number;
          TH: number;
          TR: number;
          TW: number;
          US: number;
          VE: number;
          ZA: number;
          SI: number;
          CV: number;
          GH: number;
          MU: number;
          MZ: number;
          UG: number;
          IL: number;
        };
        display_priority: number;
        logo_path: string;
        provider_name: string;
        provider_id: number;
      }[];
    }
  > {
    let queryParams = "";

    if (opts?.["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    if (opts?.["watch_region"]) {
      queryParams += `&watch_region=${opts["watch_region"]}`;
    }

    return await (await fetch(
      `${this.#base_url}/3/watch/providers/tv?api_key=${this.#api_key}${queryParams}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * @param {{ keyword_id: number; }} opts
   * @see https://developer.themoviedb.org/v3/reference/keyword-details
   */
  async keywordDetails(
    opts: { keyword_id: number },
  ): Promise<{ id: number; name: string }> {
    return await (await fetch(
      `${this.#base_url}/3/keyword/${opts.keyword_id}?api_key=${this.#api_key}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * @param {{ keyword_id: string; include_adult?: boolean; language?: string; page?: number; }} opts
   * @see https://developer.themoviedb.org/v3/reference/keyword-movies
   */
  async keywordMovies(
    opts: {
      keyword_id: string;
      include_adult?: boolean;
      language?: string;
      page?: number;
    },
  ): Promise<
    {
      id: number;
      page: number;
      results: {
        adult: boolean;
        backdrop_path: string;
        genre_ids: number[];
        id: number;
        original_language: string;
        original_title: string;
        overview: string;
        popularity: number;
        poster_path: string;
        release_date: string;
        title: string;
        video: boolean;
        vote_average: number;
        vote_count: number;
      }[];
      total_pages: number;
      total_results: number;
    }
  > {
    let queryParams = "";

    if (opts["include_adult"]) {
      queryParams += `&include_adult=${opts["include_adult"]}`;
    }
    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    if (opts["page"]) {
      queryParams += `&page=${opts["page"]}`;
    }

    return await (await fetch(
      `${this.#base_url}/3/keyword/${opts.keyword_id}/movies?api_key=${this.#api_key}${queryParams}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * @param {{ list_id: number; language?: string; page?: number; }} opts
   * @see https://developer.themoviedb.org/v3/reference/list-details
   */
  async listDetails(
    opts: { list_id: number; language?: string; page?: number },
  ): Promise<
    {
      created_by: string;
      description: string;
      favorite_count: number;
      id: string;
      items: {
        adult: boolean;
        backdrop_path: string;
        genre_ids: number[];
        id: number;
        media_type: string;
        original_language: string;
        original_title: string;
        overview: string;
        popularity: number;
        poster_path: string;
        release_date: string;
        title: string;
        video: boolean;
        vote_average: number;
        vote_count: number;
      }[];
      item_count: number;
      iso_639_1: string;
      name: string;
      poster_path: string;
    }
  > {
    let queryParams = "";

    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    if (opts["page"]) {
      queryParams += `&page=${opts["page"]}`;
    }

    return await (await fetch(
      `${this.#base_url}/3/list/${opts.list_id}?api_key=${this.#api_key}${queryParams}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Delete a list.
   *
   * @param {{ list_id: number; session_id: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/list-delete
   */
  async listDelete(
    opts: { list_id: number; session_id: string },
  ): Promise<{ status_code: number; status_message: string }> {
    let queryParams = "";

    if (opts["session_id"]) {
      queryParams += `&session_id=${opts["session_id"]}`;
    }

    return await (await fetch(
      `${this.#base_url}/3/list/${opts.list_id}?api_key=${this.#api_key}${queryParams}`,
      {
        method: "DELETE",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Use this method to check if an item has already been added to the list.
   *
   * @param {{ list_id: number; language?: string; movie_id?: number; }} opts
   * @see https://developer.themoviedb.org/v3/reference/list-check-item-status
   */
  async listCheckItemStatus(
    opts: { list_id: number; language?: string; movie_id?: number },
  ): Promise<{ id: number; item_present: boolean }> {
    let queryParams = "";

    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    if (opts["movie_id"]) {
      queryParams += `&movie_id=${opts["movie_id"]}`;
    }

    return await (await fetch(
      `${this.#base_url}/3/list/${opts.list_id}/item_status?api_key=${this.#api_key}${queryParams}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * @param {{ session_id: string; }} opts
   * @param {Record<string, unknown>} body
   * @see https://developer.themoviedb.org/v3/reference/list-create
   */
  async listCreate(
    opts: { session_id: string },
    body: Record<string, unknown>,
  ): Promise<
    {
      status_message: string;
      success: boolean;
      status_code: number;
      list_id: number;
    }
  > {
    let queryParams = "";

    if (opts["session_id"]) {
      queryParams += `&session_id=${opts["session_id"]}`;
    }

    return await (await fetch(
      `${this.#base_url}/3/list?api_key=${this.#api_key}${queryParams}`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          body: JSON.stringify(body),
        },
      },
    )).json();
  }

  /**
   * Add a movie to a list.
   *
   * @param {{ list_id: number; session_id: string; }} opts
   * @param {Record<string, unknown>} body
   * @see https://developer.themoviedb.org/v3/reference/list-add-movie
   */
  async listAddMovie(
    opts: { list_id: number; session_id: string },
    body: Record<string, unknown>,
  ): Promise<{ status_code: number; status_message: string }> {
    let queryParams = "";

    if (opts["session_id"]) {
      queryParams += `&session_id=${opts["session_id"]}`;
    }

    return await (await fetch(
      `${this.#base_url}/3/list/${opts.list_id}/add_item?api_key=${this.#api_key}${queryParams}`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          body: JSON.stringify(body),
        },
      },
    )).json();
  }

  /**
   * Remove a movie from a list.
   *
   * @param {{ list_id: number; session_id: string; }} opts
   * @param {Record<string, unknown>} body
   * @see https://developer.themoviedb.org/v3/reference/list-remove-movie
   */
  async listRemoveMovie(
    opts: { list_id: number; session_id: string },
    body: Record<string, unknown>,
  ): Promise<{ status_code: number; status_message: string }> {
    let queryParams = "";

    if (opts["session_id"]) {
      queryParams += `&session_id=${opts["session_id"]}`;
    }

    return await (await fetch(
      `${this.#base_url}/3/list/${opts.list_id}/remove_item?api_key=${this.#api_key}${queryParams}`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          body: JSON.stringify(body),
        },
      },
    )).json();
  }

  /**
   * Clear all items from a list.
   *
   * @param {{ list_id: number; session_id: string; confirm: boolean; }} opts
   * @see https://developer.themoviedb.org/v3/reference/list-clear
   */
  async listClear(
    opts: { list_id: number; session_id: string; confirm: boolean },
  ): Promise<{ status_code: number; status_message: string }> {
    let queryParams = "";

    if (opts["session_id"]) {
      queryParams += `&session_id=${opts["session_id"]}`;
    }
    if (opts["confirm"]) {
      queryParams += `&confirm=${opts["confirm"]}`;
    }

    return await (await fetch(
      `${this.#base_url}/3/list/${opts.list_id}/clear?api_key=${this.#api_key}${queryParams}`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * @param {{ network_id: number; }} opts
   * @see https://developer.themoviedb.org/v3/reference/network-details
   */
  async networkDetails(
    opts: { network_id: number },
  ): Promise<
    {
      headquarters: string;
      homepage: string;
      id: number;
      logo_path: string;
      name: string;
      origin_country: string;
    }
  > {
    return await (await fetch(
      `${this.#base_url}/3/network/${opts.network_id}?api_key=${this.#api_key}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Get the alternative names of a network.
   *
   * @param {{ network_id: number; }} opts
   * @see https://developer.themoviedb.org/v3/reference/details-copy
   */
  async detailsCopy(
    opts: { network_id: number },
  ): Promise<{ id: number; results: { name: string; type: string }[] }> {
    return await (await fetch(
      `${this.#base_url}/3/network/${opts.network_id}/alternative_names?api_key=${this.#api_key}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Get the TV network logos by id.
   *
   * @param {{ network_id: number; }} opts
   * @see https://developer.themoviedb.org/v3/reference/alternative-names-copy
   */
  async alternativeNamesCopy(
    opts: { network_id: number },
  ): Promise<
    {
      id: number;
      logos: {
        aspect_ratio: number;
        file_path: string;
        height: number;
        id: string;
        file_type: string;
        vote_average: number;
        vote_count: number;
        width: number;
      }[];
    }
  > {
    return await (await fetch(
      `${this.#base_url}/3/network/${opts.network_id}/images?api_key=${this.#api_key}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Retrieve the details of a movie or TV show review.
   *
   * @param {{ review_id: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/review-details
   */
  async reviewDetails(
    opts: { review_id: string },
  ): Promise<
    {
      id: string;
      author: string;
      author_details: {
        name: string;
        username: string;
        avatar_path: string;
        rating: number;
      };
      content: string;
      created_at: string;
      iso_639_1: string;
      media_id: number;
      media_title: string;
      media_type: string;
      updated_at: string;
      url: string;
    }
  > {
    return await (await fetch(
      `${this.#base_url}/3/review/${opts.review_id}?api_key=${this.#api_key}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Test your API Key to see if it's valid.
   *
   * @see https://developer.themoviedb.org/v3/reference/authentication-validate-key
   */
  async authenticationValidateKey(): Promise<
    { success: boolean; status_code: number; status_message: string } | {
      status_code: number;
      status_message: string;
      success: boolean;
    }
  > {
    return await (await fetch(
      `${this.#base_url}/3/authentication?api_key=${this.#api_key}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Get the list of streaming providers we have for a TV season.
   *
   * @param {{ series_id: number; season_number: number; language?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/tv-season-watch-providers
   */
  async tvSeasonWatchProviders(
    opts: { series_id: number; season_number: number; language?: string },
  ): Promise<
    {
      id: number;
      results: {
        AE: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        AR: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        AT: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          buy: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        AU: {
          link: string;
          buy: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        BA: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        BB: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        BE: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        BG: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        BO: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        BR: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        BS: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        CA: {
          link: string;
          buy: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        CH: {
          link: string;
          buy: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        CI: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        CL: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        CO: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        CR: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        CZ: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        DE: {
          link: string;
          buy: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        DK: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        DO: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        DZ: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        EC: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        EG: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        ES: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        FI: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          buy: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        FR: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          buy: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        GB: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          buy: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        GF: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        GH: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        GQ: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        GT: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        HK: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        HN: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        HR: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        HU: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        ID: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        IE: {
          link: string;
          buy: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        IL: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        IQ: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        IT: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          buy: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        JM: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        JP: {
          link: string;
          buy: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          rent: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        KE: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        KR: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        LB: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        LY: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        MD: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        MK: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        MU: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        MX: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        MY: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        MZ: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        NE: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        NG: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        NL: {
          link: string;
          buy: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        NO: {
          link: string;
          buy: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        NZ: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        PA: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        PE: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        PH: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        PL: {
          link: string;
          rent: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        PS: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        PT: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        PY: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        RO: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        RS: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        RU: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        SA: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        SC: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        SE: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          buy: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        SG: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        SI: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        SK: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        SN: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        SV: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        TH: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        TR: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        TT: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        TW: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        TZ: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        UG: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        US: {
          link: string;
          buy: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          free: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        UY: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        VE: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        ZA: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
        ZM: {
          link: string;
          flatrate: {
            logo_path: string;
            provider_id: number;
            provider_name: string;
            display_priority: number;
          }[];
        };
      };
    }
  > {
    let queryParams = "";

    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }

    return await (await fetch(
      `${this.#base_url}/3/tv/${opts.series_id}/season/${opts.season_number}/watch/providers?api_key=${this.#api_key}${queryParams}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Get the list of countries (ISO 3166-1 tags) used throughout TMDB.
   *
   * @param {{ language?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/configuration-countries
   */
  async configurationCountries(
    opts?: { language?: string },
  ): Promise<
    { iso_3166_1: string; english_name: string; native_name: string }[]
  > {
    let queryParams = "";

    if (opts?.["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }

    return await (await fetch(
      `${this.#base_url}/3/configuration/countries?api_key=${this.#api_key}${queryParams}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Get the list of the jobs and departments we use on TMDB.
   *
   * @see https://developer.themoviedb.org/v3/reference/configuration-jobs
   */
  async configurationJobs(): Promise<{ department: string; jobs: string[] }[]> {
    return await (await fetch(
      `${this.#base_url}/3/configuration/jobs?api_key=${this.#api_key}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Get the list of languages (ISO 639-1 tags) used throughout TMDB.
   *
   * @see https://developer.themoviedb.org/v3/reference/configuration-languages
   */
  async configurationLanguages(): Promise<
    { iso_639_1: string; english_name: string; name: string }[]
  > {
    return await (await fetch(
      `${this.#base_url}/3/configuration/languages?api_key=${this.#api_key}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Get a list of the officially supported translations on TMDB.
   *
   * @see https://developer.themoviedb.org/v3/reference/configuration-primary-translations
   */
  async configurationPrimaryTranslations(): Promise<string[]> {
    return await (await fetch(
      `${this.#base_url}/3/configuration/primary_translations?api_key=${this.#api_key}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Get the list of timezones used throughout TMDB.
   *
   * @see https://developer.themoviedb.org/v3/reference/configuration-timezones
   */
  async configurationTimezones(): Promise<
    { iso_3166_1: string; zones: string[] }[]
  > {
    return await (await fetch(
      `${this.#base_url}/3/configuration/timezones?api_key=${this.#api_key}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * This method allows an application to validate a request token by entering a username and password.
   *
   * @param {Record<string, unknown>} body
   * @see https://developer.themoviedb.org/v3/reference/authentication-create-session-from-login
   */
  async authenticationCreateSessionFromLogin(
    body: Record<string, unknown>,
  ): Promise<{ success: boolean; expires_at: string; request_token: string }> {
    return await (await fetch(
      `${this.#base_url}/3/authentication/token/validate_with_login?api_key=${this.#api_key}`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          body: JSON.stringify(body),
        },
      },
    )).json();
  }

  /**
   * Get the newest created person. This is a live response and will continuously change.
   *
   * @see https://developer.themoviedb.org/v3/reference/person-latest-id
   */
  async personLatestId(): Promise<
    {
      adult: boolean;
      also_known_as: unknown[];
      biography: string;
      birthday: unknown;
      deathday: unknown;
      gender: number;
      homepage: unknown;
      id: number;
      imdb_id: unknown;
      known_for_department: unknown;
      name: string;
      place_of_birth: unknown;
      popularity: number;
      profile_path: unknown;
    }
  > {
    return await (await fetch(
      `${this.#base_url}/3/person/latest?api_key=${this.#api_key}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Get the recent changes for a TV episode.
   *
   * @param {{ episode_id: number; }} opts
   * @see https://developer.themoviedb.org/v3/reference/tv-episode-changes-by-id
   */
  async tvEpisodeChangesById(
    opts: { episode_id: number },
  ): Promise<
    {
      changes: {
        key: string;
        items: { id: string; action: string; time: string; value: string }[];
      }[];
    }
  > {
    return await (await fetch(
      `${this.#base_url}/3/tv/episode/${opts.episode_id}/changes?api_key=${this.#api_key}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Get the details of a TV episode group.
   *
   * @param {{ tv_episode_group_id: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/tv-episode-group-details
   */
  async tvEpisodeGroupDetails(
    opts: { tv_episode_group_id: string },
  ): Promise<
    {
      description: string;
      episode_count: number;
      group_count: number;
      groups: {
        id: string;
        name: string;
        order: number;
        episodes: {
          air_date: string;
          episode_number: number;
          id: number;
          name: string;
          overview: string;
          production_code: string;
          runtime: unknown;
          season_number: number;
          show_id: number;
          still_path: string;
          vote_average: number;
          vote_count: number;
          order: number;
        }[];
        locked: boolean;
      }[];
      id: string;
      name: string;
      network: {
        id: number;
        logo_path: string;
        name: string;
        origin_country: string;
      };
      type: number;
    }
  > {
    return await (await fetch(
      `${this.#base_url}/3/tv/episode_group/${opts.tv_episode_group_id}?api_key=${this.#api_key}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Search for companies by their original and alternative names.
   *
   * @param {{ query: string; page?: number; }} opts
   * @see https://developer.themoviedb.org/v3/reference/search-company
   */
  async searchCompany(
    opts: { query: string; page?: number },
  ): Promise<
    {
      page: number;
      results: {
        id: number;
        logo_path: string;
        name: string;
        origin_country: string;
      }[];
      total_pages: number;
      total_results: number;
    }
  > {
    let queryParams = "";

    if (opts["query"]) {
      queryParams += `&query=${opts["query"]}`;
    }
    if (opts["page"]) {
      queryParams += `&page=${opts["page"]}`;
    }

    return await (await fetch(
      `${this.#base_url}/3/search/company?api_key=${this.#api_key}${queryParams}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Search for collections by their original, translated and alternative names.
   *
   * @param {{ query: string; include_adult?: boolean; language?: string; page?: number; region?: string; }} opts
   * @see https://developer.themoviedb.org/v3/reference/search-collection
   */
  async searchCollection(
    opts: {
      query: string;
      include_adult?: boolean;
      language?: string;
      page?: number;
      region?: string;
    },
  ): Promise<
    {
      page: number;
      results: {
        adult: boolean;
        backdrop_path: string;
        id: number;
        name: string;
        original_language: string;
        original_name: string;
        overview: string;
        poster_path: string;
      }[];
      total_pages: number;
      total_results: number;
    }
  > {
    let queryParams = "";

    if (opts["query"]) {
      queryParams += `&query=${opts["query"]}`;
    }
    if (opts["include_adult"]) {
      queryParams += `&include_adult=${opts["include_adult"]}`;
    }
    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    if (opts["page"]) {
      queryParams += `&page=${opts["page"]}`;
    }
    if (opts["region"]) {
      queryParams += `&region=${opts["region"]}`;
    }

    return await (await fetch(
      `${this.#base_url}/3/search/collection?api_key=${this.#api_key}${queryParams}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Search for keywords by their name.
   *
   * @param {{ query: string; page?: number; }} opts
   * @see https://developer.themoviedb.org/v3/reference/search-keyword
   */
  async searchKeyword(
    opts: { query: string; page?: number },
  ): Promise<
    {
      page: number;
      results: { id: number; name: string }[];
      total_pages: number;
      total_results: number;
    }
  > {
    let queryParams = "";

    if (opts["query"]) {
      queryParams += `&query=${opts["query"]}`;
    }
    if (opts["page"]) {
      queryParams += `&page=${opts["page"]}`;
    }

    return await (await fetch(
      `${this.#base_url}/3/search/keyword?api_key=${this.#api_key}${queryParams}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Get the lists that a TV series has been added to.
   *
   * @param {{ series_id: number; language?: string; page?: number; }} opts
   * @see https://developer.themoviedb.org/v3/reference/lists-copy
   */
  async listsCopy(
    opts: { series_id: number; language?: string; page?: number },
  ): Promise<
    {
      id: number;
      page: number;
      results: {
        description: string;
        favorite_count: number;
        id: number;
        item_count: number;
        iso_639_1: string;
        iso_3166_1: string;
        name: string;
        poster_path: unknown;
      }[];
      total_pages: number;
      total_results: number;
    }
  > {
    let queryParams = "";

    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    if (opts["page"]) {
      queryParams += `&page=${opts["page"]}`;
    }

    return await (await fetch(
      `${this.#base_url}/3/tv/${opts.series_id}/lists?api_key=${this.#api_key}${queryParams}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }
}
