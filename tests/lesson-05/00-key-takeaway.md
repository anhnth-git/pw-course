# Dom
Máy tính sẽ nhìn thấy trang web ở dưới dạng cây có cấu trúc 
Cách mở: Bấm phím F12 ( hoặc chuột phải vào vùng trống, chọn "Inspect") sau đó chọn tab **Element**
## Cấu trúc 1 element 
- <option> United States </option>
<option value ="usa">United States </option> (Ngoặc đầu là thẻ mở) (Ngoặc cuối là thẻ đóng)
- <img src="image.jpg" alt= "Image description"/> (Thẻ này là thẻ tự đóng)
<option value = "usa"> text </option>
Value là thuộc tính, usa là giá trị của thuộc tính

## Thẻ tiêu chuẩn 
1. Thẻ Cấu trúc khung trang 
- <html>: thẻ gốc của trang 
- <head>: chưa metadata: tiêu đều website, hiển thị Google 
- <body>: Nội dung của cả website hiển thị 
2. Thẻ bố cục và ngữ nghĩa 
- <div>: khối chia 
- <header>, <footer>, <nav>, <section>: thẻ ngữ nghĩa 
3. Thẻ nội dung 
- <h1> đến <h6>: tiêu đề 
- <paragraph>: đoạn văn 
- <ul>, <ol>, <li>: danh sách 
4. Thẻ tương tác 
- <a>: liên kết 
- <img>: hình ảnh 
5. Thẻ form 
- <form>: biểu mẫu 
- <input>: ô nhập liệu(text, password, checkbox, radio, etc.)
- <button>: nút bấm 
- <select> và <option> : dropdown 
- <textarea>: vùng văn bản nhiều dòng 

## Selector 
Có 3 loại secletor thường dùng 
- Xpath 
- CSS selector 
- Playwright 

**XPath**  
- Tương đối: tìm dựa trên đặc đính 
- Bắt đầu bởi 2 // 
**tenthe[@thuoctinh="giatri"]**  

## Playwright basic syntax
Test: Đơn vị cơ bản để khai báo 1 test ( Khai báo test)
### Câu lệnh:  
import {test} from '@playwright/test';  
test('<tên test>', async ({page}) => {  
    // code của test
})  

Step: đơn vị nhỏ hơn của test  
Cú pháp:   
await test.step('<tên step>', async () => {
    // code here 
})


import {test} from '@playwright/test';
test("test1: Diền vào trang đăng ký", async ({page})=> {
 await test.step("Steps 1: mo trang", async ()=> {
    await page.goto ("https://hrm.etc.vn/web/login")
 }); 
});
### Câu lệnh
**Navigate: Đi đến trang web**  
await page.goto('https://pw-practive.playwright.com/');
**Locate: Sử dụng để chọn phần tử trên trang**  
page.locator("//input[@id='email']")  
**Click**  
1. click 
await page.locator ("//button").click();
2. Double click 
await page.locator("//button").dbclick();
3. Click chuột phải 
await page.locator("//button").click({
    button: 'right'
}
)
4. Click chuột kèm bấm phím khác 
await page.locator("").click({
    modifiles: ['Shift'], 
})

**Input**  
1. Fill text: Điền hết text vào
await page.locator("//input").fill('lop k22');
2. pressSequentially : Gõ từng chữ cái 
await page.locator("//input").pressSenquentially('lop hoc k22', {
    delay: 100
});
**Radio/checkbox**  
1. Lấy giá trị hiện tại đang là check hay không 
const isChecked = page.locator("//input").isChecked();







