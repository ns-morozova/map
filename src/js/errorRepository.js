// TODO: write your code here


export default class ErrorRepository {
    constructor() {
        this.map = new Map();
        this.map.set(401, 'Не авторизован');
        this.map.set(403, 'Доступ запрещен');
        this.map.set(404, 'Страница недоступна');
        this.map.set(405, 'Метод запрещен');
    }

    translate(code) {
        if (this.map.has(code)) {
            return this.map.get(code);
          }
        return 'Unknown error';
    }
    
}
