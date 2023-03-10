import { FaStar } from "react-icons/fa";
import React, { useState } from "react";
import styled from "styled-components";

const Rate = () => {
    let rate = 3;
    return (
      <Container>
        {[...Array(5)].map((item, index) => {

          return (
            <label>
              <Radio
                type="radio"
                value={rate}
              />
              <Rating>
                <FaStar
                  color={
                    "#4CAF50"
                  }
                />
              </Rating>
            </label>
          );
        })}
      </Container>
    );
  };

  const Container = styled.div`
   display: flex;
   align-items: center;
   font-size: 35px;
`
const Radio = styled.input`
   display: none;
`
const Rating = styled.div`
//    cursor: pointer;
`
    

  export default Rate;