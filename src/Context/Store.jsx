import { createContext, useEffect, useState } from "react";
import run from "../Api/Config";

export const StoreContext = createContext();
const StoreContextProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false); //! user are login or reister
  const [fromData, setFromData] = useState({
    userName: "",
    userEmail: "",
    userPassword: "",
  }); //! all from data
  const [listining, setListining] = useState(false);

  //! ALL LOCALSTORAGE AND USER DATA =====================================================================
  const [userData, setUserData] = useState(
    () => JSON.parse(localStorage.getItem("data")) || []
  );

  const [loginUserData, setLoginUserData] = useState(
    () => JSON.parse(localStorage.getItem("user")) || null
  );

  //! ALL LOCALSTORAGE AND USER DATA =====================================================================

  //!fromdata from user
  const handleFromData = (e) => {
    const { value, name } = e.target;
    setFromData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // ! set data to local storage
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(userData)); //! all user data
    localStorage.setItem("user", JSON.stringify(loginUserData)); //! all user data
  }, [userData, loginUserData]);

  //! handle submit from data
  const handleSubmit = (e) => {
    e.preventDefault();

    //! function for register
    if (!isLogin) {
      setUserData((prev) => [...prev, { ...fromData }]);
      setIsLogin(true);
    }
    //! function for login
    if (isLogin) {
      const udata = userData.find((cur) => {
        return (
          cur.userEmail == fromData.userEmail &&
          cur.userPassword == fromData.userPassword
        );
      });
      console.log(udata);

      if (udata) {
        setLoginUserData(udata);
        setFromData({
          userName: "",
          userEmail: "",
          userPassword: "",
        });
      }
    }
  };

  //! Function to speak the provided text
  const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.volume = 1;
    window.speechSynthesis.speak(utterance);
  };

  // ! wish me function
  const wishUser = () => {
    const currentHour = new Date().getHours(); // Get the current hour

    if (currentHour >= 6 && currentHour < 12) {
      speak("Good morning!");
    } else if (currentHour >= 12 && currentHour < 18) {
      speak("Good afternoon!");
    } else if (currentHour >= 18 && currentHour < 22) {
      speak("Good evening!");
    } else {
      speak("Good night!");
    }
  };

  // ! jarvis intro
  const intro = () => {
    const introduction =
      `Hello! I am Jarvis, your intelligent virtual assistant, created with care and precision by Akash Sir. ` +
      `I am here to assist you with a wide range of tasks, from answering your questions ` +
      `Let's make your life easier and more efficient together. How can I assist you today?`;
    return speak(introduction);
  };

  // ! answer by gemini

  const answerbyApi = async (text) => {
    const answer = await run(text);
    if (answer) {
      speak(answer.replace(/\*\*/g, ""));
      // console.log(answer.replace(/\*\*/g, ""));
    }
  };

  // !Check if the browser supports Speech Recognition
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  const recognation = new SpeechRecognition();

  //! result speech recog nation
  recognation.onresult = (e) => {
    const speechResult = e.results[0][0].transcript;
    if (speechResult.includes("wish me")) {
      wishUser();
    } else if (speechResult.includes("introduce yourself")) {
      intro();
    } else {
      answerbyApi(speechResult);
    }
  };

  // ! click to recognize speach
  const handleClick = (e) => {
    setListining(true);
    recognation.start(e);
  };

  // ! after end the recognigation
  recognation.onend = () => {
    setListining(false);
  };

  // ! stop recognagition
  const stopRecognition = () => {
    recognation.stop(); // Stop the recognition process
    setListining(false); // Update the listening state
  };
  return (
    <StoreContext.Provider
      value={{
        isLogin,
        setIsLogin,
        handleFromData,
        handleSubmit,
        loginUserData,
        setLoginUserData,
        speak,
        handleClick,
        answerbyApi,
        listining,
        stopRecognition,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
export default StoreContextProvider;
