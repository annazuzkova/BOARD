import scss from "./Games.module.scss";
import Game from "./Game";
import Buttons from "./Buttons";
import SearchInput from "./SearchInput";
import axios from "axios";
import React from "react";
import Modal from "./Modal";
import Header from "../header/Header";
import Footer from "../footer/Footer";
axios.defaults.baseURL = "https://api.rawg.io/api/games";

class Games extends React.Component {
  state = {
    games: [],
    searchText: "",
    params: {
      key: "7c2d03cce0de42a89375a84a52b7ad08",
      ordering: "-added",
      page_size: 12,
      page: 1,
    },
    modalIsOpen: false,
    modalGame: [],
    screenshots: {},
    screenIsOpen: false,
  };

  fetchGames = async (append = false) => {
    try {
      const response = await axios.get("", { params: this.state.params });
      this.setState((prevState) => ({
        games: append
          ? [...prevState.games, ...response.data.results]
          : response.data.results,
      }));
    } catch (error) {
      console.error(error);
    }
  };

  async componentDidMount() {
    this.fetchGames();
  }

  loadMore = () => {
    this.setState(
      (prevState) => ({
        params: { ...prevState.params, page: prevState.params.page + 1 },
      }),
      () => this.fetchGames(true)
    );
  };

  searchGame = (params) => {
    this.setState({ params, games: [], searchText: params.search || "" }, () =>
      this.fetchGames()
    );
  };

  chooseCategory = (params) => {
    this.setState({ params, games: [], searchText: "" }, () =>
      this.fetchGames()
    );
  };

  openModal = async (slug) => {
    try {
      const response = await axios.get(`/${slug}`, {
        params: { key: this.state.params.key },
      });
      this.setState({
        modalGame: [response.data],
        modalIsOpen: true,
      });
    } catch (error) {
      console.error(error);
    }
  };

  closeModal = () => {
    this.setState({
      modalIsOpen: false,
      modalGame: [],
      screenIsOpen: false,
      screenshots: {},
    });
  };

  handleSearchInputChange = (text) => {
    this.setState({ searchText: text });
  };

  openScreenshots = async (id) => {
    try {
      const response = await axios.get(`/${id}/screenshots`, {
        params: { key: this.state.params.key },
      });
      this.setState({
        screenshots: response.data,
        screenIsOpen: true,
      });
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (<><Header/>  <div className={scss.games}>
        <div className={scss.games__container}>
          <h2 className={scss.games__title}>Welcome to the top games <span className={scss.games__titlespan}>GAMES</span></h2>
          <SearchInput
            onSearch={this.searchGame}
            value={this.state.searchText}
            onInputChange={this.handleSearchInputChange}
          />
          <Buttons onClick={this.chooseCategory} />

          <ul className={scss.games__list}>
            {this.state.games.length > 0 ? (
              this.state.games.map((game) => (
                <li key={game.slug} className={scss.games__item}>
                  <Game game={game} onClick={this.openModal} />
                </li>
              ))
            ) : (
              <p>Loading...</p>
            )}
          </ul>

    
            <button onClick={this.loadMore} className={scss.games__button}>
             <span>Load More</span> 
            </button>


          {this.state.modalIsOpen && (
            <Modal
              game={this.state.modalGame}
              onClose={this.closeModal}
              onButtonClick={this.openScreenshots}
            />
          )}

          {this.state.screenIsOpen && (
            <Modal
              game={this.state.screenshots}
              onClose={this.closeModal}
            />
          )}
        </div>
      </div></>
    
    );
  }
}

export default Games;
