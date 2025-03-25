<template>
    <div class="mainWrapper">
        <div class="main">
            <h1>Образовательная онлайн платформа Studiare</h1>
            <div class="lessonList">
                <div class="lesson">
                    <div class="info">
                        <span class="title">Разовое занятие</span>
                        <span class="price">1000р.</span>
                        <p class="shortDescription">Индивидуальное занятие с преподавателем.</p>
                        <p class="description">
                            Разовое занятие позволяет вам познакомиться с методикой обучения и определить,
                            подходит ли вам данный формат.
                        </p>
                    </div>
                    <button class="selectButton">Записаться</button>
                </div>
                <div class="lesson">
                    <div class="info">
                        <p class="title">Абонемент</p>
                        <p class="price">От 5000р.</p>                        
                        <p class="shortDescription">Оптимальный выбор для регулярных занятий.</p>
                        <p class="description">
                            Абонемент позволяет вам посещать занятия по выгодной цене, а также получать 
                            дополнительные материалы и поддержку от преподавателей.
                        </p>
                    </div>
                    <button class="selectButton">Записаться</button>
                </div>
                <div class="lesson">
                    <div class="info">                        
                        <p class="title">Дополнительные услуги</p>
                        <p class="price">От 15000р.</p>
                        <p class="shortDescription">Персонализированное обучение и консультации.</p>
                        <p class="description">
                            Включает индивидуальные консультации, подготовку к экзаменам и другие 
                            дополнительные образовательные услуги, адаптированные под ваши нужды.
                        </p>
                    </div>
                    <button class="selectButton">Узнать больше</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .mainWrapper {
        display: flex;
        justify-content: center;
    }
    .main {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        min-height: calc(100vh - 56px);
        padding: 32px;
    }

    .lessonList {
        margin-top: 32px;
        display: flex;
        width: 100%;
        gap: 32px;
        flex-wrap: wrap;
        justify-content: center;
    }

    .lesson {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 300px;
        border-radius: 16px;
        padding: 16px;
        border: 1px solid var(--stone-grey);
        height: auto;
        transition-duration: .2s;
    }

    .lesson:hover {
        background-color: var(--light-grey);
    }
    
    .info {
        display: flex;
        flex-direction: column;
    }

    .title {
        font-size: 1.25em;
        font-weight: 600;
        letter-spacing: 0.5px;
        margin-bottom: 8px;
    }

    .price {
        font-size: 1.1em;
        font-weight: 500;
        margin-bottom: 8px;
    }

    .shortDescription {
        font-size: 1em;
        font-weight: 500;
        margin-bottom: 8px;
    }

    .description {
        color: var(--medium-grey);
        font-size: 0.9em;
        margin-bottom: 16px;
    }

    .selectButton {
        background-color: var(--deep-grey);
        color: var(--pale-grey);
        border: none;
        padding: 16px 32px;
        font-weight: bold;
        letter-spacing: 0.5px;
        text-transform: uppercase;
        border-radius: 12px;
        cursor: pointer;
    }

    .selectButton:hover {
        background-color: var(--dark-blue);
    }
</style>
