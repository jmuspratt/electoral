<template>
  <section class="wrap">
    <header class="header">
      <h3 class="header__title">
        Electoral Vote Builder
      </h3>

      <div class="header__score">
        <h2 :class="{'header__count--winner': repElectoralVotes < demElectoralVotes}" class="header__count header__count--dem">
          {{ demElectoralVotes }}
        </h2>
        <h2 :class="{'header__count--winner' : repElectoralVotes > demElectoralVotes}" class="header__count header__count--rep">
          {{ repElectoralVotes }}
        </h2>
      </div>

      <div class="header__bar">
        <span :style="`width: ${demBarWidth}`" class="header__bar-progress header__bar-progress--dem" />
        <span :style="`width: ${repBarWidth}`" class="header__bar-progress header__bar-progress--rep" />
      </div>

      <div class="header__share-bar">
        <button class="button button--share button--pill">
          Share this outcome
        </button>
      </div>


      <section class="header__buttons">
        <button
          @click="reset"
          class="button button--setting"
        >
          Reset to 2016 outcome
        </button>
      </section>
    </header>

    <div class="columns-wrap">
      <h3 class="column__header">
        The Battlegrounds <span> (Won in 2016 by less than 3%)</span>
      </h3>
      <ul class="column column--battlegrounds">
        <li
          v-for="state in statesBattleGround"
          :key="state.id"
          class="state"
        >
          <label @click="toggleDisabled(state.id)" class="state__label">
            {{ state.name }} <span class="state__label-votes">{{ state.voteCount }} electoral votes</span>
          </label>

          <div class="state__toggle">
            <input
              :ref="`checkbox_${state.id}`"
              v-model="state.demWinner"
              :data-state="state.id"
              :disabled="!state.enabled"
              class="state__toggle-checkbox"
              type="checkbox"
            >
            <div class="state__toggle-pill" />
          </div>

          <ul v-if="state.articles" class="state__articles">
            <h4 v-if="state.articles" class="state__articles-header">
              NewsHour Coverage
            </h4>
            <li
              v-for="article in state.articles"
              :key="article"
              class="state__article"
            >
              <a class="state__link" href="#">{{ article }}</a>
            </li>
          </ul>
        </li>
      </ul>

      <h3 class="column__header">
        In play in 2020? <span> (Won in 2016 by 3% - 10%)
        </span>
      </h3>
      <ul class="column column--inplay">
        <li
          v-for="state in statesInPlay"
          :key="state.id"
          class="state"
        >
          <label @click="toggleDisabled(state.id)" class="state__label">
            {{ state.name }} <span class="state__label-votes">{{ state.voteCount }} electoral votes</span>
          </label>

          <div class="state__toggle">
            <input
              :ref="`checkbox_${state.id}`"
              v-model="state.demWinner"
              :data-state="state.id"
              :disabled="!state.enabled"
              class="state__toggle-checkbox"
              type="checkbox"
            >
            <div class="state__toggle-pill" />
          </div>
        </li>
      </ul>


      <h3 class="column__header">
        Safe <span> (Won in 2016 by more than 10%)</span>
      </h3>
      <ul class="column column--safe">
        <li
          v-for="state in statesSafe"
          :key="state.id"
          class="state"
        >
          <label @click="toggleDisabled(state.id)" class="state__label">
            {{ state.name }} <span class="state__label-votes">{{ state.voteCount }} electoral votes</span>
          </label>

          <div :class="state.demWinner ? 'state__marker--dem':'state__marker--rep'" class="state__marker" />
        </li>
      </ul>
    </div>
  </section>
</template>

<script>

import { states } from './data.js';


function initData() {

  const statesArray =
     states.map(state => {
       const demWon2016 = state.votes2016Dem > state.votes2016Rep;
       return {
         ...state,
         enabled: true,
         demWinner: demWon2016,
       };
     });

  return {
    theStates: statesArray,
  };
}


export default {
  name: 'App',

  data: function() {
    return initData();
  },

  computed: {

    statesBattleGround() {
      return this.theStates.filter(state => state.battleground).sort((a, b) => b.voteCount - a.voteCount);
    },

    statesInPlay() {
      return this.theStates.filter(state => state.inplay).sort((a, b) => b.voteCount - a.voteCount);
    },

    statesSafe() {
      return this.theStates.filter(state => !state.battleground && !state.inplay).sort((a, b) => b.voteCount - a.voteCount);
    },

    repStatesWon() {
      return this.theStates.filter(state => !state.demWinner && state.enabled);
    },

    demStatesWon() {
      return this.theStates.filter(state => state.demWinner && state.enabled);
    },

    repElectoralVotes() {
      let total = 0;
      this.repStatesWon.forEach(item => {
        total += item.voteCount;
      });
      return total;
    },
    demElectoralVotes() {
      let total = 0;
      this.demStatesWon.forEach(item => {
        total += item.voteCount;
      });
      return total;
    },

    repBarWidth() {
      return `${this.repElectoralVotes / 5.38}%`;
    },

    demBarWidth() {
      return `${this.demElectoralVotes / 5.38}%`;
    },
  },

  methods: {
    reset() {
      // console.warn('resetting');
      Object.assign(this.$data, initData());
    },

    toggleDisabled(clickedID) {
      const updatedStates = this.theStates.map(item => item.id === clickedID ? { ...item, enabled: !item.enabled } : item);
      this.theStates = updatedStates;
    },

  },
};

</script>

<style lang="scss">
body {
  background: $c-navy;
}

</style>
