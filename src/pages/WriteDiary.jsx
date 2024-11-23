import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMicrophone, faTimes, faPause, faCheck } from "@fortawesome/free-solid-svg-icons";
import BackArrow from "../assets/icons/back-arrow.svg";

const WriteDiary = () => {
  const nav = useNavigate();
  const [isRecording, setIsRecording] = useState(false);
  const [currentInputRef, setCurrentInputRef] = useState(null);
  const recognitionRef = useRef(null);
  const SERVER_URL = import.meta.env.VITE_API_BASE_URL + "/api/vi/diary/text"; // 서버 URL
  const userId = 3804726404; // 사용자 ID

  const textAreaRef1 = useRef(null); // textarea를 참조하기 위한 useRef 생성
  const textAreaRef2 = useRef(null); // textarea를 참조하기 위한 useRef 생성
  const textAreaRef3 = useRef(null); // textarea를 참조하기 위한 useRef 생성

  // 버튼 클릭 시 실행되는 함수
  const handleButtonClick = async () => {
    const diaryWhere = textAreaRef1.current.value; // textarea의 값을 가져옴
    const diaryWhat = textAreaRef2.current.value; // textarea의 값을 가져옴
    const diaryWho = textAreaRef3.current.value; // textarea의 값을 가져옴

    if (!diaryWhere || !diaryWhat || !diaryWho) {
      alert("모든 입력창을 채워주세요!");
      return;
    }

    const payload = {
      where: diaryWhere,
      what: diaryWhat,
      who: diaryWho,
    };

    try {
      const response = await fetch(`${SERVER_URL}?id=${userId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        const errorResponse = await response.json();
        console.error("Server Error:", errorResponse.error?.message || "Unknown Error");
        throw new Error("서버 요청에 실패했습니다.");
      }

      const responseData = await response.json();
      if (responseData.success) {
        alert("저장이 완료되었습니다!");
        nav(-1); // 이전 화면으로 이동
      } else {

        if (responseData.error?.message === "이미 오늘의 일기가 존재합니다.") {
          alert(`이미 오늘의 일기가 존재합니다. 화면을 나가주세요.`);
        }
        else {
          alert(`저장 중 오류가 발생했습니다. ${responseData.error?.message || "알 수 없는 오류"}`);
        }
      }
    } catch (error) {
      console.error("Error:", error);
      alert("저장 중 문제가 발생했습니다. 다시 시도해주세요.");
    }

  };

  // 음성인식 초기화
  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("현재 브라우저는 음성 인식을 지원하지 않습니다.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "ko-KR"; // 한국어로 설정
    recognition.interimResults = false;

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      console.log("Recognized text:", transcript);
      if (currentInputRef) {
        currentInputRef.value += transcript; // 현재 활성화된 입력창에 텍스트 추가
      } else {
        alert("입력창을 선택해주세요.");
      }
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
      alert("음성 인식 중 오류가 발생했습니다.");
    };

    recognition.onend = () => {
      console.log("Speech recognition ended.");
      setIsRecording(false); // 녹음 상태 종료
    };

    recognitionRef.current = recognition;
  }, [currentInputRef]);

  // 녹음 시작
  const startRecording = () => {
    if (recognitionRef.current) {
      setIsRecording(true);
      recognitionRef.current.start();
    } else {
      alert("음성 인식을 초기화하지 못했습니다.");
    }
  };

  // 녹음 중지
  const stopRecording = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setIsRecording(false);
    }
  };

  // 녹음 취소
  const cancelRecording = () => {
    stopRecording();
    if (currentInputRef) {
      currentInputRef.value = ""; // 입력창 내용 초기화
    }
  };

  // 활성화된 인풋 추적
  const handleInputFocus = (inputRef) => {
    setCurrentInputRef(inputRef);
  };

  return (
    <Wrapper>
      <RowContainer>
        <Icon src={BackArrow} alt="back" onClick={() => nav(-1)} />
        <Text onClick={handleButtonClick}>저장</Text>
      </RowContainer>
      <Title>일기 쓰기</Title>
      <MainContent>
        <Text>어디서 시간을 보내셨나요?</Text>
        <Input
          type="text"
          ref={textAreaRef1}
          placeholder="오늘 어디서 시간을 보냈는지 적어주세요 :)"
          onFocus={(e) => handleInputFocus(e.target)}
        />
        <Text>무엇을 하셨나요?</Text>
        <Input
          type="text"
          ref={textAreaRef2}
          placeholder="오늘 무엇을 했는지 적어주세요 :)"
          onFocus={(e) => handleInputFocus(e.target)}
        />
        <Text>누구와 함께 했나요?</Text>
        <Input
          type="text"
          ref={textAreaRef3}
          placeholder="오늘 누구와 함께였는지 적어주세요 :)"
          onFocus={(e) => handleInputFocus(e.target)}
        />
      </MainContent>

      {/* 녹음 버튼 */}
      {!isRecording ? (
        <FloatingButton onClick={startRecording}>
          <FontAwesomeIcon icon={faMicrophone} style={{ fontSize: "40px" }} />
        </FloatingButton>
      ) : (
        <RecordingButtons>
          <ActionButton color="#674188" onClick={cancelRecording}>
            <FontAwesomeIcon icon={faTimes} />
            <span>취소</span>
          </ActionButton>
          <ActionButton color="#674188" onClick={stopRecording}>
            <FontAwesomeIcon icon={faPause} />
            <span>중지</span>
          </ActionButton>
        </RecordingButtons>
      )}
    </Wrapper>
  );
};


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 30px 55px 30px;
  width: 100%;
  margin-bottom: 84px;
`;

const Title = styled.div`
  font-weight: 600;
  font-size: 26px;
`;

const RowContainer = styled.div`
  margin-top: 30px;
  height: 30px;
  width: 100%;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.img`
  width: 24px;
  height: 24px;
`;

const Text = styled.div`
  font-size: 20px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Input = styled.textarea`
  padding: 10px;
  width: 300px;
  height: 100px;
  color: #674188;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 15px;
  outline: none;
  resize: none;
  overflow-y: auto;
  z-index: 10;
  &:focus {
    border-color: #674188;
  }
`;

const FloatingButton = styled.button`
 z-index: 100;
  position: fixed;
  top: 550px;
  width: 100px;
  height: 100px;
  background-color: #faf8f8;
  color: #674188;
  font-size: 24px;
  font-weight: bold;
  border: none;
  border-radius: 50%;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #512f6d;
    color: #faf8f8;
  }
`;

const RecordingButtons = styled.div`
  z-index: 100;
  position: fixed;
  top: 550px;
  display: flex;
  gap: 20px;
`;

const ActionButton = styled.button`
  width: 80px;
  height: 80px;
  background-color: ${(props) => props.color || "#ccc"};
  color: white;
  font-size: 18px;
  border: none;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  span {
    margin-top: 5px;
    font-size: 12px;
  }
`;

export default WriteDiary;