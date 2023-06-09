"use strict";
class StreakApp {
    constructor() {
        this.habits = [];
        this.habitsContainer = document.getElementById("habits-container");
    }
    addHabit(name, startDate) {
        const habit = { name, startDate };
        this.habits.push(habit);
        this.renderHabit(habit);
    }
    renderHabit(habit) {
        var _a;
        const habitElement = document.createElement("div");
        habitElement.classList.add("habit");
        habitElement.innerHTML = `
      <h2>${habit.name}</h2>
      <p>Started on ${habit.startDate}</p>
      <p>Streak: ${this.daysSince(new Date(habit.startDate))} days</p>
    `;
        (_a = this.habitsContainer) === null || _a === void 0 ? void 0 : _a.appendChild(habitElement);
    }
    daysSince(date) {
        const today = new Date();
        const diffTime = Math.abs(today.getTime() - date.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays;
    }
    displayHabits() {
        for (const habit of this.habits) {
            this.renderHabit(habit);
        }
    }
}
const app = new StreakApp();
const form = document.getElementById("add-habit-form");
const nameInput = document.getElementById("habit-input");
const startDateInput = document.getElementById("start-date-input");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = nameInput.value;
    const startDate = startDateInput.value;
    app.addHabit(name, startDate);
});
window.addEventListener("load", () => {
    app.displayHabits();
});
