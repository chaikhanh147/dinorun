import { db, doc, getDoc, updateDoc } from './firebase.js';

// Hàm lấy UID người dùng hiện tại (Giả định có quyền truy cập vào user UID)
const userUid = 'USER_UID'; // Thay thế bằng UID người dùng thực tế
const userDocRef = doc(db, "users", userUid);

async function updatePoints(newPoints) {
  try {
    const userDoc = await getDoc(userDocRef);
    if (userDoc.exists()) {
      await updateDoc(userDocRef, { points: newPoints });
    }
  } catch (error) {
    console.error("Lỗi cập nhật điểm:", error);
  }
}

document.getElementById('buyShield').addEventListener('click', async function() {
  try {
    const userDoc = await getDoc(userDocRef);
    if (userDoc.exists()) {
      const currentShields = userDoc.data().shields || 0;
      await updateDoc(userDocRef, { shields: currentShields + 1 });
      await updatePoints(userDoc.data().points - 10); // Giảm điểm sau khi mua
    }
  } catch (error) {
    console.error("Lỗi mua khiên:", error);
  }
});

document.getElementById('buySpeed').addEventListener('click', async function() {
  try {
    const userDoc = await getDoc(userDocRef);
    if (userDoc.exists()) {
      const currentSpeed = userDoc.data().speed || 0;
      await updateDoc(userDocRef, { speed: currentSpeed + 1 });
      await updatePoints(userDoc.data().points - 15); // Giảm điểm sau khi mua
    }
  } catch (error) {
    console.error("Lỗi mua tăng tốc:", error);
  }
});

document.getElementById('getKey').addEventListener('click', function() {
  // Redirect to key service
  window.location.href = 'https://key-service-url.com?callback=https://yourdomain.com/callback.html';
});
