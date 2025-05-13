// 使用 async/await 非同步函式，不使用then
// async function fetch:https://gogochi.github.io/fetching-data-113/products.json
// print response "fetching data..."
// 使用 await 等待 promise 完成
// 列印出 response "收到回應"
// response.json() 轉換成 JSON 格式
// 使用 console.log() 印出 "立刻執行“

async function fetchData() {
    console.log("fetching data...");
    const response = await fetch("https://gogochi.github.io/fetching-data-113/products.json");
    console.log("收到回應");
    const data = await response.json();
    console.log(data);
    console.log("立刻執行");
}



// 定義一個非同步函數
async function fetchData() {
    let promise = fetch("https://gogochi.github.io/fetching-data-113/products.json");
    console.log("fetching data...")

    const response = await promise;
    console.log("收到回應 "+response.status);

    json = await response.json();
    console.log(json[0].name);
}
// 調用非同步函式
fetchData();
console.log("立刻執行");
