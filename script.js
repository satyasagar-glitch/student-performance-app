function calculateResult() {
    let m1 = parseFloat(document.getElementById("sub1").value);
    let m2 = parseFloat(document.getElementById("sub2").value);
    let m3 = parseFloat(document.getElementById("sub3").value);

    if (isNaN(m1) || isNaN(m2) || isNaN(m3)) {
        document.getElementById("result").innerText = "Please enter all marks!";
        return;
    }

    let total = m1 + m2 + m3;
    let avg = total / 3;

    let grade = "";

    if (avg >= 90) grade = "A+";
    else if (avg >= 75) grade = "A";
    else if (avg >= 60) grade = "B";
    else if (avg >= 50) grade = "C";
    else grade = "Fail";

    document.getElementById("result").innerText =
        `Total: ${total} | Average: ${avg.toFixed(2)} | Grade: ${grade}`;
}
