import React from "react";
import { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchData } from "../redux/actions/flightActions";
import LaunchesList from "./LaunchesList";
import SearchSection from "./SearchSection";

const Launches = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.allData.data);
  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  return (
    <Container className="my-5">
      <div className="search-box">
        <SearchSection></SearchSection>
      </div>
      <Row>
        {data.map((data, index) => (
          <LaunchesList data={data} key={index}></LaunchesList>
        ))}
      </Row>
    </Container>
  );
};

export default Launches;
