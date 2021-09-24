import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { searchData } from "../redux/actions/flightActions";
const SearchSection = () => {
  const result = useSelector((state) => state.data.data);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const _search = () => {};
  useEffect(() => {
    dispatch(searchData(searchTerm));
  }, [searchTerm]);
  console.log(result);
  return (
    <div>
      <Form className="d-flex justify-content-center">
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
