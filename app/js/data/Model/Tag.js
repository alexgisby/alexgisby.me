export default class Tag
{
    constructor(data)
    {
        this.data = data;
    }

    getId() {
        return this.data.url;
    }

    getName() {
        return this.data.name;
    }

    getType() {
        return this.data.type;
    }

    getUrl() {
        return '/'+this.data.url;
    }

    getDescription() {
        return this.data.description || '';
    }
}
