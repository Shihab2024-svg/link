<?php
// إعداد ملف تسجيل الزوار
$counterFile = "visitors.txt";
if (!file_exists($counterFile)) {
    file_put_contents($counterFile, 0);
}

// تحديث عدد الزوار
$currentCount = (int)file_get_contents($counterFile);
$currentCount++;
file_put_contents($counterFile, $currentCount);

// إعداد إرسال البيانات إلى Telegram Bot
function sendToTelegram($message) {
    $botToken = "7678780527:AAG6IthVqq-uDyoVoDiqStaF6n66-ODAEVE"; // استبدل بـ Token الخاص ببوتك
    $chatID = "5950748299";     // استبدل بـ Chat ID الخاص بك
    $url = "https://api.telegram.org/bot$botToken/sendMessage";

    $data = [
        'chat_id' => $chatID,
        'text' => $message
    ];

    // إرسال الطلب
    $options = [
        "http" => [
            "header" => "Content-type: application/x-www-form-urlencoded\r\n",
            "method" => "POST",
            "content" => http_build_query($data),
        ],
    ];

    $context = stream_context_create($options);
    file_get_contents($url, false, $context);
}

// إذا تم الضغط على زر واتساب
if (isset($_GET['action']) && $_GET['action'] === 'whatsapp') {
    $message = "تم ضغط زر واتساب بواسطة أحد الزوار!";
    sendToTelegram($message);
}
?>