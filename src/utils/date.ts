// src/utils/date.ts

// Definiujemy tablicę ze skrótami miesięcy
const MONTHS: string[] = [
  'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];

export function formatDate(date: Date): string {
  const day = String(date.getDate()).padStart(2, '0');
  
  // Pobieramy skrót miesiąca z naszej tablicy
  // Pamiętamy, że getMonth() zwraca wartość od 0 do 11, co idealnie pasuje
  // jako indeks do naszej tablicy (która też jest indeksowana od 0).
  const month = MONTHS[date.getMonth()];
  
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
}