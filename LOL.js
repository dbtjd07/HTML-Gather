// 파이어베이스 SDK 모듈 임포트 (CDN 방식)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// 보내주신 웹 앱의 Firebase 설정값
const firebaseConfig = {
    apiKey: "AIzaSyBzL_K7VIDXIlH_byVD9-TkP3g-3C-WVFE",
    authDomain: "lol-games-395ab.firebaseapp.com",
    projectId: "lol-games-395ab",
    storageBucket: "lol-games-395ab.firebasestorage.app",
    messagingSenderId: "106124852261",
    appId: "1:106124852261:web:8801b59bd82039ae9753cc",
    measurementId: "G-NMHVENRGEP"
};

// Firebase 초기화
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

// 나중에 게임 전적 등을 데이터베이스에 저장할 때 호출하는 함수 예시
window.saveMatchRecordToFirebase = async function(playerName, result, details) {
    try {
        const docRef = await addDoc(collection(db, "matchRecords"), {
            playerName: playerName,
            result: result,
            details: details,
            createdAt: serverTimestamp()
        });
        console.log("문서가 성공적으로 저장되었습니다. ID: ", docRef.id);
        alert("데이터베이스에 전적이 성공적으로 저장되었습니다!");
    } catch (e) {
        console.error("데이터 저장 중 오류 발생: ", e);
        alert("저장 중 오류가 발생했습니다.");
    }
};