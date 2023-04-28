interface Habit {
  name: string;
  startDate: string;
}

class StreakApp {
  private habits: Habit[];
  private habitsContainer: HTMLElement;

  constructor() {
    this.habits = [];
    this.habitsContainer = document.getElementById("habits-container");
  }

  addHabit(name: string, startDate: string) {
    const habit = { name, startDate };
    this.habits.push(habit);
    this.renderHabit(habit);
  }

  private renderHabit(habit: Habit) {
    const habitElement = document.createElement("div");
    habitElement.classList.add("habit");
    habitElement.innerHTML = `
      <h2>${habit.name}</h2>
      <p>Started on ${habit.startDate}</p>
      <p>Streak: ${this.daysSince(new Date(habit.startDate))} days</p>
    `;
    this.habitsContainer.appendChild(habitElement);
  }

  private daysSince(date: Date): number {
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

const form = document.getElementById("add-habit-form") as HTMLFormElement;
const nameInput = document.getElementById("habit-input") as HTMLInputElement;
const startDateInput = document.getElementById("start-date-input") as HTMLInputElement;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = nameInput.value;
  const startDate = startDateInput.value;
  app.addHabit(name, startDate);
});

window.addEventListener("load", () => {
  app.displayHabits();
});
