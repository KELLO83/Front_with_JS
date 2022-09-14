var s1=prompt("1-마케팅 2-개발 3-디자인")

switch (s1) {
    case "1":
        alert("마케팅 입니다")
        document.write("<P> 마케팅 세션은 <strong>111호에서</strong> </p>")
        break;
    case "2":
        alert("개발입니다")
        document.write("<p> 개발 세션은 <strong> 222호에서 </strong> <\p>")
        break;

    case "3":
        alert("디자인 입니다")
        document.write("<p> 디자인 세션은 <strong> 333호에서 </string> <\p>")
        break;
    default:
        alert("해당사항 없음")
        document.write("<strong> 해당사항 없음 </strong>")
        break;
}