<script lang="ts" setup>
</script>

<template>
    <div style="margin-bottom: 56px;">
        <nav>
          <span class="logo">STUDIARE</span>
          <span class="phone">+7-911-279-04-22</span>
        </nav>
    </div>
</template>

<style>
    nav {
        position: fixed;
        width: 100vw;
        height: 56px;
        top: 0;
        left: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 32px;
        border: 0px solid var(--stone-grey);
        border-bottom-width: 1px;
    }

    span {
        font-weight: 500;
    }

    .logo {
        font-weight: 700;
        cursor: pointer;
    }
</style>