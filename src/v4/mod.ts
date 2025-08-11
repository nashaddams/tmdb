/** TMDB API v4 */
export class TmdbApi {
  #base_url: string = "https://api.themoviedb.org";
  #api_key: string;

  constructor(api_key: string) {
    this.#api_key = api_key;
  }

  /**
   * @param {Record<string, unknown>} body
   * @see https://developer.themoviedb.org/v4/reference/auth-create-request-token
   */
  async authCreateRequestToken(
    body: Record<string, unknown>,
  ): Promise<
    {
      status_message: string;
      request_token: string;
      success: boolean;
      status_code: number;
    }
  > {
    return await (await fetch(
      `${this.#base_url}/4/auth/request_token?api_key=${this.#api_key}`,
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
   * @see https://developer.themoviedb.org/v4/reference/auth-create-access-token
   */
  async authCreateAccessToken(
    body: Record<string, unknown>,
  ): Promise<
    {
      account_id: string;
      access_token: string;
      success: boolean;
      status_message: string;
      status_code: number;
    }
  > {
    return await (await fetch(
      `${this.#base_url}/4/auth/access_token?api_key=${this.#api_key}`,
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
   * Log out of a session.
   *
   * @param {Record<string, unknown>} body
   * @see https://developer.themoviedb.org/v4/reference/auth-logout
   */
  async authLogout(
    body: Record<string, unknown>,
  ): Promise<
    { status_message: string; success: boolean; status_code: number }
  > {
    return await (await fetch(
      `${this.#base_url}/4/auth/access_token?api_key=${this.#api_key}`,
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
   * Retrieve a list by id.
   *
   * @param {{ list_id: number; language?: string; page?: number; }} opts
   * @see https://developer.themoviedb.org/v4/reference/list-details
   */
  async listDetails(
    opts: { list_id: number; language?: string; page?: number },
  ): Promise<
    {
      average_rating: number;
      backdrop_path: string;
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
      comments: {
        "movie:617127": unknown;
        "movie:986056": unknown;
        "movie:822119": unknown;
        "movie:533535": unknown;
        "movie:609681": unknown;
        "movie:447365": unknown;
        "movie:640146": unknown;
        "movie:505642": unknown;
        "movie:616037": unknown;
        "movie:453395": unknown;
        "movie:634649": unknown;
        "movie:524434": unknown;
        "movie:566525": unknown;
        "movie:497698": unknown;
        "movie:429617": unknown;
        "movie:299534": unknown;
        "movie:299537": unknown;
        "movie:363088": unknown;
        "movie:299536": unknown;
        "movie:284054": unknown;
      };
      created_by: {
        avatar_path: string;
        gravatar_hash: string;
        id: string;
        name: string;
        username: string;
      };
      description: string;
      id: number;
      iso_3166_1: string;
      iso_639_1: string;
      item_count: number;
      name: string;
      object_ids: Record<string, unknown>;
      page: number;
      poster_path: string;
      public: boolean;
      revenue: number;
      runtime: number;
      sort_by: string;
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
      `${this.#base_url}/4/list/${opts.list_id}?api_key=${this.#api_key}${queryParams}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Update the details of a list.
   *
   * @param {{ list_id: number; }} opts
   * @param {Record<string, unknown>} body
   * @see https://developer.themoviedb.org/v4/reference/list-update
   */
  async listUpdate(
    opts: { list_id: number },
    body: Record<string, unknown>,
  ): Promise<
    { status_message: string; success: boolean; status_code: number }
  > {
    return await (await fetch(
      `${this.#base_url}/4/list/${opts.list_id}?api_key=${this.#api_key}`,
      {
        method: "PUT",
        headers: {
          Accept: "application/json",
          body: JSON.stringify(body),
        },
      },
    )).json();
  }

  /**
   * Create a new list.
   *
   * @param {Record<string, unknown>} body
   * @see https://developer.themoviedb.org/v4/reference/list-create
   */
  async listCreate(
    body: Record<string, unknown>,
  ): Promise<
    {
      status_message: string;
      id: number;
      success: boolean;
      status_code: number;
    }
  > {
    return await (await fetch(
      `${this.#base_url}/4/list?api_key=${this.#api_key}`,
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
   * Clear all of the items on a list.
   *
   * @param {{ list_id: number; }} opts
   * @see https://developer.themoviedb.org/v4/reference/list-clear
   */
  async listClear(
    opts: { list_id: number },
  ): Promise<
    {
      items_deleted: number;
      status_message: string;
      id: number;
      status_code: number;
      success: boolean;
    }
  > {
    return await (await fetch(
      `${this.#base_url}/4/list/${opts.list_id}/clear?api_key=${this.#api_key}`,
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
   * @param {{ list_id: number; }} opts
   * @see https://developer.themoviedb.org/v4/reference/list-delete
   */
  async listDelete(
    opts: { list_id: number },
  ): Promise<
    { status_message: string; success: boolean; status_code: number }
  > {
    return await (await fetch(
      `${this.#base_url}/4/${opts.list_id}?api_key=${this.#api_key}`,
      {
        method: "DELETE",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Add items to a list.
   *
   * @param {{ list_id: number; }} opts
   * @param {Record<string, unknown>} body
   * @see https://developer.themoviedb.org/v4/reference/list-add-items
   */
  async listAddItems(
    opts: { list_id: number },
    body: Record<string, unknown>,
  ): Promise<
    {
      status_message: string;
      results: { media_type: string; media_id: number; success: boolean }[];
      success: boolean;
      status_code: number;
    }
  > {
    return await (await fetch(
      `${this.#base_url}/4/list/${opts.list_id}/items?api_key=${this.#api_key}`,
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
   * Update an individual item on a list
   *
   * @param {Record<string, unknown>} body
   * @see https://developer.themoviedb.org/v4/reference/list-update-items
   */
  async listUpdateItems(
    body: Record<string, unknown>,
  ): Promise<
    {
      status_message: string;
      results: { media_type: string; media_id: number; success: boolean }[];
      success: boolean;
      status_code: number;
    }
  > {
    return await (await fetch(
      `${this.#base_url}/4/list/{list_id}/items?api_key=${this.#api_key}`,
      {
        method: "PUT",
        headers: {
          Accept: "application/json",
          body: JSON.stringify(body),
        },
      },
    )).json();
  }

  /**
   * Remove items from a list
   *
   * @param {{ list_id: number; }} opts
   * @param {Record<string, unknown>} body
   * @see https://developer.themoviedb.org/v4/reference/list-remove-items
   */
  async listRemoveItems(
    opts: { list_id: number },
    body: Record<string, unknown>,
  ): Promise<
    {
      status_message: string;
      results: { media_type: string; media_id: number; success: boolean }[];
      success: boolean;
      status_code: number;
    }
  > {
    return await (await fetch(
      `${this.#base_url}/4/list/${opts.list_id}/items?api_key=${this.#api_key}`,
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
   * Check if an item is on a list.
   *
   * @param {{ list_id: number; media_id: number; media_type: "movie" | "tv"; }} opts
   * @see https://developer.themoviedb.org/v4/reference/list-item-status
   */
  async listItemStatus(
    opts: { list_id: number; media_id: number; media_type: "movie" | "tv" },
  ): Promise<
    {
      media_type: string;
      success: boolean;
      status_message: string;
      id: number;
      media_id: number;
      status_code: number;
    }
  > {
    let queryParams = "";

    if (opts["media_id"]) {
      queryParams += `&media_id=${opts["media_id"]}`;
    }
    if (opts["media_type"]) {
      queryParams += `&media_type=${opts["media_type"]}`;
    }

    return await (await fetch(
      `${this.#base_url}/4/list/${opts.list_id}/item_status?api_key=${this.#api_key}${queryParams}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Get the custom lists that a user has created.
   *
   * @param {{ account_object_id: string; page?: number; }} opts
   * @see https://developer.themoviedb.org/v4/reference/account-lists
   */
  async accountLists(
    opts: { account_object_id: string; page?: number },
  ): Promise<
    {
      page: number;
      results: {
        account_object_id: string;
        adult: number;
        average_rating: number;
        created_at: string;
        description: string;
        featured: number;
        id: number;
        iso_3166_1: string;
        iso_639_1: string;
        name: string;
        number_of_items: number;
        public: number;
        revenue: string;
        runtime: number;
        sort_by: number;
        updated_at: string;
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
      `${this.#base_url}/4/account/${opts.account_object_id}/lists?api_key=${this.#api_key}${queryParams}`,
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
   * @param {{ account_object_id: string; page?: number; language?: string; sort_by?: "created_at.asc" | "created_at.desc"; }} opts
   * @see https://developer.themoviedb.org/v4/reference/account-favorite-movies
   */
  async accountFavoriteMovies(
    opts: {
      account_object_id: string;
      page?: number;
      language?: string;
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

    if (opts["page"]) {
      queryParams += `&page=${opts["page"]}`;
    }
    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    if (opts["sort_by"]) {
      queryParams += `&sort_by=${opts["sort_by"]}`;
    }

    return await (await fetch(
      `${this.#base_url}/4/account/${opts.account_object_id}/movie/favorites?api_key=${this.#api_key}${queryParams}`,
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
   * @param {{ account_object_id: string; page?: number; language?: string; sort_by?: "created_at.asc" | "created_at.desc"; }} opts
   * @see https://developer.themoviedb.org/v4/reference/account-favorite-tv
   */
  async accountFavoriteTv(
    opts: {
      account_object_id: string;
      page?: number;
      language?: string;
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

    if (opts["page"]) {
      queryParams += `&page=${opts["page"]}`;
    }
    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    if (opts["sort_by"]) {
      queryParams += `&sort_by=${opts["sort_by"]}`;
    }

    return await (await fetch(
      `${this.#base_url}/4/account/${opts.account_object_id}/tv/favorites?api_key=${this.#api_key}${queryParams}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Get a users list of recommended TV shows.
   *
   * @param {{ account_object_id: string; page?: number; language?: string; }} opts
   * @see https://developer.themoviedb.org/v4/reference/account-tv-recommendations
   */
  async accountTvRecommendations(
    opts: { account_object_id: string; page?: number; language?: string },
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

    if (opts["page"]) {
      queryParams += `&page=${opts["page"]}`;
    }
    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }

    return await (await fetch(
      `${this.#base_url}/4/account/${opts.account_object_id}/tv/recommendations?api_key=${this.#api_key}${queryParams}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Get a users list of recommended movies.
   *
   * @param {{ account_object_id: string; page?: number; language?: string; }} opts
   * @see https://developer.themoviedb.org/v4/reference/account-movie-recommendations
   */
  async accountMovieRecommendations(
    opts: { account_object_id: string; page?: number; language?: string },
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

    if (opts["page"]) {
      queryParams += `&page=${opts["page"]}`;
    }
    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }

    return await (await fetch(
      `${this.#base_url}/4/account/${opts.account_object_id}/movie/recommendations?api_key=${this.#api_key}${queryParams}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Get a users movie watchlist.
   *
   * @param {{ account_object_id: string; page?: number; language?: string; sort_by?: "created_at.asc" | "created_at.desc"; }} opts
   * @see https://developer.themoviedb.org/v4/reference/account-movie-watchlist
   */
  async accountMovieWatchlist(
    opts: {
      account_object_id: string;
      page?: number;
      language?: string;
      sort_by?: "created_at.asc" | "created_at.desc";
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

    if (opts["page"]) {
      queryParams += `&page=${opts["page"]}`;
    }
    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    if (opts["sort_by"]) {
      queryParams += `&sort_by=${opts["sort_by"]}`;
    }

    return await (await fetch(
      `${this.#base_url}/4/account/${opts.account_object_id}/movie/watchlist?api_key=${this.#api_key}${queryParams}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Get a users TV watchlist.
   *
   * @param {{ account_object_id: string; page?: number; language?: string; sort_by?: "created_at.asc" | "created_at.desc"; }} opts
   * @see https://developer.themoviedb.org/v4/reference/account-tv-watchlist
   */
  async accountTvWatchlist(
    opts: {
      account_object_id: string;
      page?: number;
      language?: string;
      sort_by?: "created_at.asc" | "created_at.desc";
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

    if (opts["page"]) {
      queryParams += `&page=${opts["page"]}`;
    }
    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    if (opts["sort_by"]) {
      queryParams += `&sort_by=${opts["sort_by"]}`;
    }

    return await (await fetch(
      `${this.#base_url}/4/account/${opts.account_object_id}/tv/watchlist?api_key=${this.#api_key}${queryParams}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Get a users rated movies.
   *
   * @param {{ account_object_id: string; page?: number; language?: string; sort_by?: "created_at.asc" | "created_at.desc"; }} opts
   * @see https://developer.themoviedb.org/v4/reference/account-rated-movies
   */
  async accountRatedMovies(
    opts: {
      account_object_id: string;
      page?: number;
      language?: string;
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
        account_rating: { created_at: string; value: number };
      }[];
      total_pages: number;
      total_results: number;
    }
  > {
    let queryParams = "";

    if (opts["page"]) {
      queryParams += `&page=${opts["page"]}`;
    }
    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    if (opts["sort_by"]) {
      queryParams += `&sort_by=${opts["sort_by"]}`;
    }

    return await (await fetch(
      `${this.#base_url}/4/account/${opts.account_object_id}/movie/rated?api_key=${this.#api_key}${queryParams}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /**
   * Get a users rated TV shows.
   *
   * @param {{ account_object_id: string; page?: number; language?: string; sort_by?: "created_at.asc" | "created_at.desc"; }} opts
   * @see https://developer.themoviedb.org/v4/reference/account-rated-tv
   */
  async accountRatedTv(
    opts: {
      account_object_id: string;
      page?: number;
      language?: string;
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
        account_rating: { created_at: string; value: number };
      }[];
      total_pages: number;
      total_results: number;
    }
  > {
    let queryParams = "";

    if (opts["page"]) {
      queryParams += `&page=${opts["page"]}`;
    }
    if (opts["language"]) {
      queryParams += `&language=${opts["language"]}`;
    }
    if (opts["sort_by"]) {
      queryParams += `&sort_by=${opts["sort_by"]}`;
    }

    return await (await fetch(
      `${this.#base_url}/4/account/${opts.account_object_id}/tv/rated?api_key=${this.#api_key}${queryParams}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      },
    )).json();
  }

  /** @see https://developer.themoviedb.org/v4/reference/getting-started */
  async gettingStarted(): Promise<void> {
    return await (await fetch(`${this.#base_url}/?api_key=${this.#api_key}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
    })).json();
  }
}
