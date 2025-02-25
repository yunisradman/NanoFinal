document.addEventListener("DOMContentLoaded", function () {
    const videoSelect = document.getElementById("video-select");
    const videoPlayer = document.getElementById("video-player");

    // بيانات مقاطع الفيديو
    const videos = {
        video1: {
            title: "لمحة عن الشركة",
            src: "./images/video1.mp4" // مسار الفيديو المحلي
        },
        video2: {
            title: "رأي احد عملاءنا - محلات جملة",
            src: "./images/video2.mp4" // مسار الفيديو المحلي
        },
        video3: {
            title: "نظام الصيدليات ومخازن الادوية",
            src: "./images/video3.mp4" // مسار الفيديو المحلي
        },
        video4: {
            title: "النظام المحاسبي سمارتر برو",
            src: "./images/video4.mp4" // مسار الفيديو المحلي
        },
        video5: {
            title: "النظام المحاسبي نانو سمارتر",
            src: "./images/video5.mp4" // مسار الفيديو المحلي
        }
    };

    // عند تغيير القائمة المنسدلة
    videoSelect.addEventListener("change", function () {
        const selectedVideo = videoSelect.value;

        if (selectedVideo && videos[selectedVideo]) {
            const video = videos[selectedVideo];
            videoPlayer.innerHTML = `
                <h2>${video.title}</h2>
                <video controls width="100%" height="auto">
                    <source src="${video.src}" type="video/mp4">
                    متصفحك لا يدعم تشغيل الفيديو.
                </video>
            `;
        } else {
            videoPlayer.innerHTML = ""; // إخفاء الفيديو إذا لم يتم اختيار مقطع
        }
    });

    // إدارة الفيديوهات الإضافية
    const videoBtns = document.querySelectorAll(".video-btn");
    const videoSlider = document.querySelector("#video-slider");

    videoBtns.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            videoBtns.forEach(btn => btn.classList.remove("active"));
            btn.classList.add("active");
            videoSlider.src = btn.getAttribute("data-src");
        });
    });
});