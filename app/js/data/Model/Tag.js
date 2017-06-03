export default class Tag
{
    constructor(data)
    {
        this.data = data;
    }

    getName() {
        return this.data.name;
    }

    getType() {
        return this.data.type;
    }
}
