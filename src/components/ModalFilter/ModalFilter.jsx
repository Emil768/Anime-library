import React, { useState } from "react";

import "./ModalFilter.scss";

import Select from "react-select";
import makeAnimated from "react-select/animated";

import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";

import * as moment from "moment/moment";
import "moment/locale/ru";

import {
  genreOptions,
  typeOptions,
  statusOptions,
  ratingOptions,
  orderOptions,
} from "../../filterOptions.json";

import { setAnime, setLoaded } from "../../redux/actions/anime";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

function ModalFilter({ closeModal }) {
  const dispatch = useDispatch();
  moment.locale("ru");

  const { type } = useSelector(state => state.anime);

  const handlerCloseModal = () => {
    closeModal();
  };

  const animatedComponents = makeAnimated();

  const [genreValue, setGenreValue] = useState([]);
  const [typeValue, setTypeValue] = useState("");
  const [statusValue, setStatusValue] = useState("");
  const [startDateValue, setStartDateValue] = useState("");
  const [endDateValue, setEndDateValue] = useState("");
  const [ratingValue, setRatingValue] = useState("");
  const [orderValue, setOrderValue] = useState(orderOptions[3]);
  const [sortValue, setSortValue] = useState("");

  const handleChangeGenre = genre => {
    setGenreValue(genre);
  };
  const handleChangeType = type => {
    setTypeValue(type);
  };
  const handleChangeStatus = status => {
    setStatusValue(status);
  };
  const handleChangeStartDate = startDate => {
    setStartDateValue(startDate);
  };
  const handleChangeEndDate = endDate => {
    console.log(endDate);
    setEndDateValue(endDate);
  };
  const handleChangeRating = rating => {
    setRatingValue(rating);
  };
  const handleChangeOrder = order => {
    setOrderValue(order);
  };

  const numbers = Array.from(Array(20), () => 0);

  const handlerSearchQuery = () => {
    dispatch(setLoaded(false));
    axios
      .get(
        `https://api.jikan.moe/v3/search/${type}?
        ${
          genreValue.length
            ? `&genre=${genreValue.map(item => item.value).join(",")}`
            : ""
        }
        ${typeValue.value ? `&type=${typeValue.value}` : ""}
        ${statusValue.value ? `&status=${statusValue.value}` : ""}
        ${ratingValue.value ? `&rating=${ratingValue.value}` : ""}
        ${startDateValue ? `&start_date=${startDateValue}` : ""}
        ${endDateValue ? `&end_date=${endDateValue}` : ""}
        ${orderValue.value ? `&order_by=${orderValue.value}` : ""}
        `.trim()
      )
      .then(res => dispatch(setAnime(res.data.results, type)));
  };

  console.log(orderOptions[3].value);

  return (
    <div className="modal__content modal__filter">
      <div className="modal__header">
        <h2 className="modal__title">Фильтр</h2>
        <button className="modal__btn" onClick={handlerCloseModal}>
          <div className="modal__btn-line"></div>
          <div className="modal__btn-line"></div>
          <div className="modal__btn-line"></div>
        </button>
      </div>
      <div className="modal__body">
        <ul className="modal__filter-list filter-list">
          <li className="filter-list__item">
            <label className="">Выбрать жанры</label>
            <Select
              value={genreValue}
              onChange={handleChangeGenre}
              options={genreOptions}
              components={animatedComponents}
              isMulti
              closeMenuOnSelect={false}
              styles={{ width: "100px" }}
              placeholder="По каким жанрам искать"
              isSearchable={false}
            />
          </li>
          <li className="filter-list__item">
            <label>Тип аниме</label>
            <Select
              value={typeValue}
              onChange={handleChangeType}
              options={typeOptions}
              placeholder="Какой тип аниме искать"
              isSearchable={false}
            />
          </li>
          <li className="filter-list__item">
            <label>Статус аниме</label>
            <Select
              value={statusValue}
              onChange={handleChangeStatus}
              options={statusOptions}
              placeholder="Какой статус аниме"
              isSearchable={false}
            />
          </li>
          <li className="filter-list__item">
            <label>Год</label>
            <div className="">
              <DayPickerInput
                onDayChange={day => handleChangeStartDate(moment(day).format())}
                placeholder="От"
                format="YYYY-MM-dd"
              />
              <DayPickerInput
                onDayChange={day => handleChangeEndDate(moment(day).format())}
                placeholder="От"
                format="YYYY-MM-dd"
              />
            </div>
          </li>
          <li className="filter-list__item">
            <label>Возрастной рейтинг</label>
            <Select
              value={ratingValue}
              onChange={handleChangeRating}
              options={ratingOptions}
              placeholder="Какой возрастной рейтинг выбрать"
              isSearchable={false}
            />
          </li>
          <li className="filter-list__item">
            <label>Сортировать по</label>
            <Select
              value={orderValue}
              onChange={handleChangeOrder}
              options={orderOptions}
              placeholder="Сортировать как"
              isSearchable={false}
            />
          </li>
          <li className="filter-list__item">
            <label>Сортировать по</label>
          </li>
          <li className="filter-list__item">
            <button className="modal__filter-btn" onClick={handlerSearchQuery}>
              Искать
            </button>
          </li>
        </ul>
      </div>
      <div className="modal__footer"></div>
    </div>
  );
}

export default ModalFilter;
