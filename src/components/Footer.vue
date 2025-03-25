<template>
    <footer class="footer">
            <div class="footer-left">
                <p>Оплетаев Петр Николаевич</p>
                <p>ИНН: 781448703400</p>
                <p>+7-911-279-04-22</p>
            </div>
            <div class="footer-right">
                <a href="/privacy" class="privacy-link">Политика обработки персональных данных</a>
            </div>
        </footer>
</template>

<script lang="ts" setup>
    
</script>

<style>

.footer {
        display: flex;
        justify-content: space-between;
        width: 100%;
        min-height: 80px;
        padding: 8px 32px;
        background-color: var(--deep-grey);
        color: var(--pale-grey);
        font-size: 0.9em;
    }

    .footer-left {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .footer-right {
        display: flex;
        align-items: center;
    }

    .privacy-link {
        color: var(--pale-grey);
        text-decoration: none;
    }

    .privacy-link:hover {
        text-decoration: underline;
    }
</style>