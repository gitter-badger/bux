var assets = './assets';
var dist = './dist';
var feAssets = './fe_assets';
var test = './test';

module.exports = {
    dist : {
        root: dist,
        styles: dist + '/styles',
        fonts: dist + '/fonts'
    },

    assets: {
        root:  assets,
        bux: assets + '/styles/bux.scss',
        fonts: assets + '/fonts'
    },

    feassets: {
        root: feAssets,
        fonts: {
            opensans: feAssets + '/google-open-sans/**/*.{eot,svg,ttf,woff,woff2}',
            bootstrap: feAssets + '/bootstrap-sass/assets/fonts/**/*.{eot,svg,ttf,woff,woff2}'
        }
    },

    test: test
};
