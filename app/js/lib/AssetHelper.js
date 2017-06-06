export default class AssetHelper
{
    isProduction() {
        return process.env.NODE_ENV === 'production';
    }

    assetPath() {
        return this.isProduction()? '//static.alexgisby.me' : '';
    }
}
