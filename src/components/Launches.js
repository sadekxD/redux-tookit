import React from "react";
import { useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchData } from "../redux/actions/flightActions";
import LaunchesList from "./LaunchesList";

const Launches = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.allData.data);
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  console.log(data);
  return (
    <Container>
      <Row>
        {data.map((data) => (
          <LaunchesList data={data} key={data.flight_number}></LaunchesList>
        ))}
      </Row>
    </Container>
  );
};

export default Launches;
