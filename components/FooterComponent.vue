<template>
    <footer>
        <div class="footer_info">
            <a target="_blank" href="https://web.telegram.org/a/#-1002385947430"><img src="/icons/telegram_icon.png" width="100px" alt="telegram_icon"></a>
            <a target="_blank" href="https://vk.com/marinavdohom"><img src="/icons/vk_icon.png" width="100px" alt="vk_icon"></a>
        </div>
    </footer>
</template>


<style scoped>
.footer_info {
    display: flex;
    justify-content: center;
    gap: 20px;
}

.footer_info img {
    width: 80px;
    transition: 0.5s;
}

.footer_info img:hover {
    transform: scale(1.1);
    filter: drop-shadow(4px 4px 10px rgb(192, 226, 252)) hue-rotate(0.1turn);
    transition: 0.5s;
}

.footer_info a:active {
    transform: translate(3px, 3px);
}
</style>