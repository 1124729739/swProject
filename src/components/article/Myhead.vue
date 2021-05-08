<template>
  <div class="myhead">
    <div class="head1">
      <div style="padding-left: 0.5rem; padding-top: 0.25rem">
        <router-link to="/">
          <svg viewBox="0 0 1024 1024">
            <path
              d="M354.742857 497.371429l256 256-40.228571 40.228571-274.285715-274.285714c-10.971429-10.971429-10.971429-29.257143 0-40.228572l274.285715-274.285714 40.228571 40.228571-256 252.342858z"
              fill="#c62f2e"
            ></path>
          </svg>
        </router-link>
      </div>
      <div style="padding-right: 0.5rem; padding-top: 0.25rem">
        <router-link to="/">
          <svg viewBox="0 0 1024 1024">
            <path
              d="M237.714286 530.285714m-54.857143 0a54.857143 54.857143 0 1 0 109.714286 0 54.857143 54.857143 0 1 0-109.714286 0Z"
              fill="#c62f2e"
            ></path>
            <path
              d="M530.285714 530.285714m-54.857143 0a54.857143 54.857143 0 1 0 109.714286 0 54.857143 54.857143 0 1 0-109.714286 0Z"
              fill="#c62f2e"
            ></path>
            <path
              d="M822.857143 530.285714m-54.857143 0a54.857143 54.857143 0 1 0 109.714286 0 54.857143 54.857143 0 1 0-109.714286 0Z"
              fill="#c62f2e"
            ></path>
          </svg>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style >
.myhead .head1 {
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  background: rgb(247, 247, 247);
  height: 2rem;
  /* position: fixed;
  top: 0; */
  width: 18.75rem;
}
.myhead svg {
  width: 1.4rem;
  height: 1.4rem;
}
</style>