let user = {
  id: 1,
  username: "testuser",
  links: [
    { id: 1, title: "انستاجرام", url: "https://www.instagram.com/lali_beauty11?igsh=NXJ3dWVnemp2dWp4", icon: "fab fa-instagram" },
    { id: 2, title: "فيسبوك", url: "https://www.facebook.com/share/15XzKHk6AY/", icon: "fab fa-facebook" },
    { id: 3, title: "قناة الواتساب", url: "https://www.whatsapp.com/channel/0029VaGZhXA7tkjIXpZTjR1e?fbclid=PAZXh0bgNhZW0CMTEAAaZ2aT2x63_3yzcqEdPAWQSjZ9TRS2rzV_jjD4AAoqE5E4YOPcXc_naCkKA_aem_-zLk_w2THxc3yCUdIYS4_g", icon: "fab fa-whatsapp" }
  ]
};

// دالة عرض الروابط
function displayLinks() {
  const linksContainer = document.getElementById("links");
  linksContainer.innerHTML = ""; // تنظيف القائمة
  user.links.forEach(link => {
    const linkElement = document.createElement("a");
    linkElement.href = link.url;
    linkElement.target = "_blank"; // فتح الرابط في نافذة جديدة
    linkElement.classList.add("link-item");

    // إضافة الأيقونة والنص
    linkElement.innerHTML = `<i class="${link.icon} sp"></i> ${link.title}`;
    linksContainer.appendChild(linkElement);
  });
}

// دالة إضافة رابط جديد
document.getElementById("addLink").addEventListener("click", () => {
  const title = prompt("Enter link title:"); // طلب العنوان
  const url = prompt("Enter link URL:"); // طلب الرابط
  const icon = prompt("Enter icon class (e.g., 'fab fa-facebook'):"); // طلب الأيقونة

  if (title && url && icon) {
    const newLink = { id: Date.now(), title, url, icon };
    user.links.push(newLink); // إضافة الرابط
    displayLinks(); // تحديث العرض
  } else {
    alert("Please fill in all the fields!");
  }
});

// عرض الروابط عند تحميل الصفحة
window.onload = displayLinks;