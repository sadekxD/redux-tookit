import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { searchData } from "../redux/reducers/rocketSlice";

const SearchSection = () => {
  const result = useSelector((state) => state.allData.search_result);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  const _search = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    dispatch(searchData(searchTerm));
  }, [searchTerm]);

  console.log(result);

  return (
    <div>
      <Form onSubmit={_search} className="d-flex justify-content-center">
        <Form.Group
          className="mb-3 me-2"
          controlId="search"
          style={{ width: 400 }}
          onChange={(event) => setSearchTerm(event.target.value)}
        >
          <Form.Control type="text" placeholder="Search" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="search">
          <Form.Control
            type="submit"
            placeholder="Search"
            value="Search"
            className="btn btn-success"
            onClick={_search}
          />
        </Form.Group>
      </Form>
    </div>
  );
};

export default SearchSection;
