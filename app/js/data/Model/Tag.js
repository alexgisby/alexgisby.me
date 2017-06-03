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

    getUrl() {
        return '/tag/'+encodeURIComponent(this.data.name.toLowerCase()).replace(/%20/g, '+');
    }
}
