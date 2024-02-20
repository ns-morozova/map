import ErrorRepository from "../errorRepository";


test('should sum', () => {
  const map = new ErrorRepository();

  expect(map.translate(401)).toBe('Не авторизован');
  expect(map.translate(403)).toBe('Доступ запрещен');
  expect(map.translate(404)).toBe('Страница недоступна');
  expect(map.translate(405)).toBe('Метод запрещен');
  expect(map.translate(400)).toBe('Unknown error');

});
