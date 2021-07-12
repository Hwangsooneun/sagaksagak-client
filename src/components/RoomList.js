import React from "react";
import styled from "styled-components";
import Room from "./Room";
import { AiOutlinePlus } from "react-icons/ai";
import { RiRefreshLine } from "react-icons/ri";

const StyledRoomListWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 30px;

  @media only screen and (max-width: 1010px) {
    width: 95%;
  }

  .list-header {
    width: 100%;
    border-bottom: 2px solid black;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h1 {
      align-self: flex-start;
      margin: 0;
      padding: 10px;
    }

    .icon-container {
      display: flex;
      align-items: center;
      column-gap: 10px;
      padding: 10px;

      .new-room-icon {
        font-size: 1.7em;
        cursor: pointer;
      }

      .refresh-icon {
        font-size: 1.6em;
        cursor: pointer;
      }
    }
  }

  .room-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 25px;
    width: 100%;
  }
`;

const RoomList = ({
  rooms,
  handleEntrance,
  handleCRBtn,
  loading,
  error,
  getRoomList,
  lastRoomElRef,
}) => {
  return (
    <StyledRoomListWrapper>
      <div className="list-header">
        <h1>방목록</h1>
        <div className="icon-container">
          <AiOutlinePlus className="new-room-icon" onClick={handleCRBtn} />
          <RiRefreshLine className="refresh-icon" onClick={getRoomList} />
        </div>
      </div>
      <div className="room-container">
        {rooms.map((room, idx) => {
          if (rooms.length === idx + 1) {
            return (
              <Room
                ref={lastRoomElRef}
                key={idx}
                room={room}
                handleEntance={handleEntrance}
              ></Room>
            );
          } else {
            return (
              <Room key={idx} room={room} handleEntance={handleEntrance}></Room>
            );
          }
        })}
      </div>
      <div>{loading && "Loading..."}</div>
      <div>{error && "Error..."}</div>
    </StyledRoomListWrapper>
  );
};

export default RoomList;
