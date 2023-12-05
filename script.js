
const url = "http://universities.hipolabs.com/search?country=India&name=";

async function getClgName(name) {
    const clgs = await axios.get(url + name);
    return clgs.data;
}

document.getElementById("btn").addEventListener("click", async () => {
    const name = document.getElementById("inpt").value;
    let dataArr = await getClgName(name);
    let prevOl = document.querySelector("ol");
    if (prevOl) prevOl.remove();
    let ol = document.createElement("ol");
    if (dataArr.length == 0) {
        let h1 = document.createElement("h1");
        h1.innerText = "No College Found";
        ol.appendChild(h1);
    }
    else {
        for (data of dataArr) {
            let ul = document.createElement("ul");
            ul.innerText = data.name;
            ol.appendChild(ul);
        }
    }
    const body = document.querySelector("body")
    body.append(ol);
})
