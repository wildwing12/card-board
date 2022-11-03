import Swal from "sweetalert2/dist/sweetalert2.js";

export const sweet = (
  title,
  text,
  icon,
  confirmBtnTxt,
  callBack,
  cancel = false
) => {
  return Swal.fire({
    title: title,
    text: text,
    icon: icon,
    showCancelButton: cancel,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: confirmBtnTxt || "확인",
  }).then((result) => {
    if (result.isConfirmed) {
      // Swal.fire("삭제!", "삭제되었습니다.", "success");
      if (typeof callBack === "function") {
        callBack();
      } else {
        console.error("콜백이 함수가 아닙니다");
      }
    }
  });
};
