import { head, tail, init, last } from './arrayOperations';
import { concat, concatMulti } from './concat';
import { clone, merge } from './clone-merge';
import { isBookRead } from './readBooks';
import SlotMachine from './slotMachine';

const array1 = ['one', 'two', 'three'];
const array2 = ['four', 'five', 'six'];
const source = { name: 'Maria', surname: 'Ibañez', country: 'SPA' };
const target = { name: 'Luisa', age: 31, married: true };
const books = [
  { title: 'Harry Potter y la piedra filosofal', isRead: true },
  { title: 'Canción de hielo y fuego', isRead: false },
  { title: 'Devastación', isRead: true },
];

console.log('------ 1. Array operations ------');
console.log('array1: ', array1);
console.log('array2: ', array2);
console.log('head(array1): ', head(array1));
console.log('tail(array1)', tail(array1));
console.log('init(array1)', init(array1));
console.log('last(array1)', last(array1));

console.log('----------- 2. Concat -----------');
console.log('array1: ', array1);
console.log('array2: ', array2);
console.log('concat(array1, array2): ', concat(array1, array2));
console.log(
  'concatMulti(array1, array2, array1, array2): ',
  concatMulti(array1, array2, array1, array2)
);

console.log('-------- 3. Clone Merge ---------');
console.log('source: ', source);
console.log('target: ', target);
console.log('clone(source): ', clone(source));
console.log('merge(source, target): ', merge(source, target));

console.log('----------- 4. Read Books -----------');
console.log('books: ', books);
console.log(
  `isBookRead(books, 'Devastación'): `,
  isBookRead(books, 'Devastación')
);
console.log(
  `isBookRead(books, 'Canción de hielo y fuego'): `,
  isBookRead(books, 'Canción de hielo y fuego')
);
console.log(
  `isBookRead(books, 'Los Pilares de la Tierra'): `,
  isBookRead(books, 'Los Pilares de la Tierra')
);

console.log('-------- 5. Slot Machine --------');
const slotMachine = new SlotMachine();
slotMachine.play();
slotMachine.play();
slotMachine.play();
slotMachine.play();
slotMachine.play();
slotMachine.play();
slotMachine.play();
slotMachine.play();
slotMachine.play();
slotMachine.play();
slotMachine.play();
slotMachine.play();
slotMachine.play();
slotMachine.play();
slotMachine.play();
