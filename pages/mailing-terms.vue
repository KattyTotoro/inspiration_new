<template>

    <section class="content">

    <div class="mailing-termsText">
      <h1>Условия рассылок электронных писем.</h1>

      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, facere! Pariatur repellat, soluta consequuntur sequi recusandae labore consequatur ut, error exercitationem, odit sunt maxime aut fugiat fugit placeat veritatis consectetur.
      </p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, facere! Pariatur repellat, soluta consequuntur sequi recusandae labore consequatur ut, error exercitationem, odit sunt maxime aut fugiat fugit placeat veritatis consectetur.
      </p>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis, facere! Pariatur repellat, soluta consequuntur sequi recusandae labore consequatur ut, error exercitationem, odit sunt maxime aut fugiat fugit placeat veritatis consectetur.
      </p>
    </div>

    <button class="mailing-termsButton">Принять условия</button>

  </section>

</template>

<style scoped>

.mailing-termsText {
  font-size: 22px;
  padding: 20px;
  /* padding-bottom: 50px; */
}

.mailing-termsText h1 {
  margin: 20px;
}

.mailing-termsButton {
    width: 210px;
    background: #dfeffe78;
    color: rgb(40, 65, 91);
    font-size: 1.3rem;
    border-radius: 10px;
    padding: 10px;
    border: 3px solid #dfeffe;
    border-radius: 10px;
    text-align: center;
    cursor: pointer;    
    text-shadow: 2px 2px 2px rgba(185, 206, 224, 0.4);
    box-shadow: 0 0 20px whitesmoke;
    transition: 0.5s;
}

.mailing-termsButton:hover {
    background-color: #ebc108d3;
    color: #fff;
    box-shadow: 0 0 7px 1px rgba(246, 214, 9, 0.893) inset;
    transition: 0.3s;
}

.mailing-termsButton:active {
    transform: translate(3px, 3px);
}

</style>