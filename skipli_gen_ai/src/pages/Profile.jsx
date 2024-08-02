import React from "react";
import SideBar from "../components/SideBar";
import Caption from "../components/Caption";

const Profile = () => {
  const savedList = [
    "Charades or Pictionary: Classic games with a competitive twist",
    "Improvisation Theater: Encourages spontaneity, creativity, and teamwork.",
    "Sinh viên UIT có rất nhiều cơ hội việc làm hấp dẫn tại các công ty công nghệ hàng đầu trong và ngoài nước.",
    "Thẻ option trong HTML được sử dụng để tạo các tùy chọn trong một danh sách thả xuống (select). Mặc dù CSS không thể trực tiếp thay đổi kiểu dáng của các option bên trong một select chưa mở rộng, nhưng chúng ta có thể tùy biến một số phần tử liên quan để tạo ra một danh sách chọn đẹp mắt và chuyên nghiệp hơn.",
    "Thay đổi kiểu dáng của từng option: Khi danh sách chưa mở rộng, CSS không thể tác động trực tiếp vào từng option.",
  ];
  return (
    <div className="dashboard__layout">
      <SideBar></SideBar>
      <div className="dashboard__main">
        <h1>Saved Content</h1>
        <p>You have loved it!</p>
        {savedList.length ? (
          savedList.map((item, index) => (
            <Caption caption={item} status={"Unsave"} key={index}></Caption>
          ))
        ) : (
          <p>You have not saved anything!</p>
        )}
      </div>
    </div>
  );
};

export default Profile;
