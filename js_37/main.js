// Константи конфігурації
const INK_COST_PER_NONSPACE_CHAR_PERCENT = 0.5;
const MAX_INK_PERCENT = 100;

// 1) Клас, що описує коло
class Circle {
  #radius;

  constructor(radius) {
    this.radius = radius; // валідація через сеттер
  }

  get radius() {
    return this.#radius;
  }

  set radius(value) {
    const numeric = Number(value);
    if (!Number.isFinite(numeric) || numeric <= 0) {
      throw new Error("Радіус має бути додатнім числом");
    }
    this.#radius = numeric;
  }

  get diameter() {
    return this.#radius * 2;
  }

  calculateArea() {
    return Math.PI * this.#radius * this.#radius;
  }

  calculateCircumference() {
    return 2 * Math.PI * this.#radius;
  }
}

// Демонстрація Circle
const circle = new Circle(5);
console.log("Circle radius:", circle.radius);
console.log("Circle diameter:", circle.diameter);
console.log("Circle area:", circle.calculateArea());
console.log("Circle circumference:", circle.calculateCircumference());
circle.radius = 10;
console.log("New circle radius:", circle.radius);

// 2) Клас маркера та перезаправного маркера
class Marker {
  #color;
  #inkPercent;

  constructor(color, inkPercent) {
    this.#color = String(color);
    this.inkPercent = inkPercent; // валідація через сеттер
  }

  get color() {
    return this.#color;
  }

  get inkPercent() {
    return this.#inkPercent;
  }

  set inkPercent(value) {
    const numeric = Number(value);
    if (!Number.isFinite(numeric)) {
      throw new Error("Некоректне значення чорнил");
    }
    const clamped = Math.max(0, Math.min(MAX_INK_PERCENT, numeric));
    this.#inkPercent = clamped;
  }

  isEmpty() {
    return this.#inkPercent <= 0;
  }

  print(text) {
    let output = "";
    for (const char of String(text)) {
      if (this.isEmpty()) break;
      if (char.trim().length !== 0) { // не пробільний символ споживає чорнило
        if (this.#inkPercent < INK_COST_PER_NONSPACE_CHAR_PERCENT) break;
        this.#inkPercent -= INK_COST_PER_NONSPACE_CHAR_PERCENT;
      }
      output += char;
    }
    if (output) {
      console.log(`%c${output}`, `color: ${this.#color}`);
    } else {
      console.log("Маркер порожній!");
    }
    return output;
  }
}

class RefillableMarker extends Marker {
  refill(amountPercent) {
    const numeric = Number(amountPercent);
    if (!Number.isFinite(numeric) || numeric <= 0) return;
    this.inkPercent = Math.min(this.inkPercent + numeric, MAX_INK_PERCENT);
  }
}

// Демонстрація Marker
const marker = new Marker("blue", 5);
marker.print("Hello World!");

const refillable = new RefillableMarker("green", 1);
refillable.print("Test refill marker");
refillable.refill(10);
refillable.print("Test refill marker after refill");

// 3) Клас Employee та EmpTable
class Employee {
  #name;
  #position;
  #salary;

  constructor(name, position, salary) {
    this.#name = String(name);
    this.#position = String(position);
    this.#salary = Number(salary);
  }

  get name() {
    return this.#name;
  }

  get position() {
    return this.#position;
  }

  get salary() {
    return this.#salary;
  }
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

class EmpTable {
  constructor(employees) {
    this.employees = Array.isArray(employees) ? employees : [];
  }

  getHtml() {
    let html = "<table border='1' class='table table-bordered'><thead><tr><th>Ім'я</th><th>Посада</th><th>Зарплата</th></tr></thead><tbody>";
    for (const emp of this.employees) {
      html += `<tr><td>${escapeHtml(emp.name)}</td><td>${escapeHtml(emp.position)}</td><td>${escapeHtml(emp.salary)}</td></tr>`;
    }
    html += "</tbody></table>";
    return html;
  }
}

// Демонстрація EmpTable
const employees = [
  new Employee("Іван", "Менеджер", 15000),
  new Employee("Олена", "Касир", 12000),
  new Employee("Петро", "Охоронець", 10000)
];

const table = new EmpTable(employees);
document.addEventListener("DOMContentLoaded", () => {
  document.body.insertAdjacentHTML("beforeend", table.getHtml());
});
