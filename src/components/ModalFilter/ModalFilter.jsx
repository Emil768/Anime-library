import React, { useState } from "react";

import "./ModalFilter.scss";

import Select from "react-select";
import makeAnimated from "react-select/animated";

import {
  genreOptions,
  typeOptions,
  statusOptions,
  yearOptions,
  sortOptions,
} from "../../filterOptions.json";

function ModalFilter({ closeModal }) {
  const handlerCloseModal = () => {
    closeModal();
  };

  const animatedComponents = makeAnimated();

  const [genreValue, setGenreValue] = useState("");
  const [typeValue, setTypeValue] = useState("");
  const [statusValue, setStatusValue] = useState("");
  const [startDateValue, setStartDateValue] = useState("");
  const [endDateValue, setEndDateValue] = useState("");
  const [yearValue, setYearValue] = useState("");
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
    setEndDateValue(endDate);
  };
  const handleChangeYear = year => {
    setYearValue(year);
  };
  const handleChangeSort = sort => {
    setSortValue(sort);
  };

  return (
    <div className="modal__content modal__filter">
      <div className="modal__header">
        <h2 className="modal__title">Фильтр аниме</h2>
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
            />
          </li>
          <li className="filter-list__item">
            <label>Тип аниме</label>
            <Select
              value={typeValue}
              onChange={handleChangeType}
              options={typeOptions}
              placeholder="Какой тип аниме искать"
            />
          </li>
          <li className="filter-list__item">
            <label>Статус аниме</label>
            <Select
              value={statusValue}
              onChange={handleChangeStatus}
              options={statusOptions}
              placeholder="Какой статус аниме"
            />
          </li>
          <li className="filter-list__item">
            <label>Год</label>
            <div className="">
              <input
                type="text"
                placeholder="От"
                onChange={e => handleChangeStartDate(e.target.value)}
              />
              <input
                type="text"
                placeholder="До"
                onChange={e => handleChangeEndDate(e.target.value)}
              />
            </div>
          </li>
          <li className="filter-list__item">
            <label>Возрастной рейтинг</label>
            <Select
              value={yearValue}
              onChange={handleChangeYear}
              options={yearOptions}
              placeholder="Какой возрастной рейтинг выбрать"
            />
          </li>
          <li className="filter-list__item">
            <label>Сортировать по</label>
            <Select
              value={sortValue}
              onChange={handleChangeSort}
              options={sortOptions}
              placeholder="Сортировка"
            />
          </li>
        </ul>
      </div>
      <div className="modal__footer"></div>
    </div>
  );
}

export default ModalFilter;
