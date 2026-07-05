// ============================================================================
// CẤU HÌNH FIREBASE — điền thông tin dự án Firebase của bạn vào đây.
// File này được dùng chung bởi cả trang chính (loi-chuc-tot-nghiep.html)
// và trang quản trị (quan-tri.html).
//
// Cách lấy các giá trị bên dưới: Firebase Console > Project settings >
// General > "Your apps" > SDK setup and configuration > Config.
// ============================================================================

export const firebaseConfig = {
  apiKey: "AIzaSyAh-NfGIlgD3jFnjQvY1isoQfWSXWxbNGg",
  authDomain: "luu-but-ngay-xanh.firebaseapp.com",
  projectId: "luu-but-ngay-xanh",
  storageBucket: "luu-but-ngay-xanh.firebasestorage.app",
  messagingSenderId: "1037991146318",
  appId: "1:1037991146318:web:01cb17278bf0fc24e9e41f"
};

// Email cố định dùng để đăng nhập trang quản trị (không cần là email thật,
// chỉ cần khớp với tài khoản Email/Password bạn tạo trong Firebase Console
// > Authentication > Users). Người quản trị chỉ cần nhập MẬT KHẨU trên
// trang quan-tri.html — email này được điền ngầm ở phía sau.
export const ADMIN_EMAIL = "quantri.luubut@admin.local";

// Tên collection lưu các lá thư chúc mừng trong Firestore.
export const LETTERS_COLLECTION = "letters";
