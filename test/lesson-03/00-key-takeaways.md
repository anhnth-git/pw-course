# Kiến thức git 
## Undo action: Khi commit sai dùng câu lệnh chuyển các MT
**Đổi phiên bản mới**
- git commit --amend -m”<message mới>”
VD: git commit --amend -m”feat: add feature”

**Chuyển file từ staging -> Working directory**
- Chuyển 1 file cụ thể: git restore --staged "tên file"
- Chuyển tất cả file : git restore --staged .
**Chuyển file từ Repository -> Staging**
- Đưa nội dung commit cuối về staging 
. git reset --soft HEAD~1
- Đưa nôi dung commit cuối về wroking directory
git reset HEAD~1

## Branch
- Xem danh sách nhánh 
git branch : Cần 1 commit mới hiển thị danh sách nhánh
- Tạo nhánh, chưa chuyển nhánh 
git branch feature/login
- CHuyển sang nhánh vừa tạo
git checkout <branch_name>
- Vừa tạo vừa chuyển nhánh 
git checkout -b feature/login
- Xoá nhánh 
git branch -D <tên nhánh>: Lưu ý: đứng ở nhánh khác trước khi xoá.
- Đưa nhánh lên online 
git push origin <tên_nhánh>
- Xoá nhánh trên online 
git push -D origin <tên_nhánh>

# Javascript
## Câu điều kiện
Cú pháp
if (<điều kiện>) {
// code...
}
VD: let hour = 8;
if (hour <= 11) {
console.log(“Good morning”);
}
let hour = 8;
if (hour >= 6 && hour <= 11) {
console.log(“Good morning”);
}
let hour = 8;
if (hour >= 6) {
if (hour <= 11) {
console.log(“Good morning”);
}
}
## Vòng lặp
Cú pháp
for (<điều kiện khởi tạo>; <điều kiện lặp>; <cập nhật>) {
// code
}

**Giải thích**
for (<khởi tạo>; <kiểm tra>; <cập nhật>) {
// code
}
VD: 
for (let i = 0;i < 5; i++) {
console.log("Xin chào!")
}




