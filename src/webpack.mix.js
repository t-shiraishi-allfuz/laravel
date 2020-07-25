const mix = require('laravel-mix');

/**
 * ビルド後にpublicフォルダ配下におくファイルのパスを生成
 * @param {string} filePath resouce配下のファイルのフルパス
 */
const makeDistPath = (filePath) => {
	let replacedFilePath = filePath.replace(/\\/g, '/')
	let regExpDir = new RegExp(__dirname.replace(/\\/g, '/') + '/resources/assets/', 'g')
	replacedFilePath = replacedFilePath.replace(regExpDir, '')
	return replacedFilePath + '?[hash]'
}

// このプロジェクトで使用している画像ファイルに対する処理をカスタマイズ。
// resources/assets/images配下のディレクトリ構成を引き継いでpublicに出力されるようにする
// customImagesConfigを実行することで適用されます。
mix.extend('customImagesConfig', webpackConfig => {
	// コンパイル時の設定を取得
	const { rules } = webpackConfig.module
	// laravel-mixでデフォルトで設定されている画像ファイルに対する処理からresources/assets/images配下のファイルを対象外にする
	// laravel-mixのバージョンが上がりこの正規表現が変わった場合、それに合わせる必要があります。
	rules.filter(rule => {
		// webpack-rules.jsの13行目を参考に画像ファイルに対する正規表現で該当の設定を見つける
		if (rule.test.toString() === /(\.(png|jpe?g|gif)$|^((?!font).)*\.svg$)/.toString()) {
			// excludeの設定
			rule.exclude = path.resolve(__dirname, './resources/assets/images')
		}
	})

	rules.unshift({
		test: /(\.(png|jpe?g|gif)$|^((?!font).)*\.svg$)/,
		include: [
			path.resolve(__dirname, 'resources/assets/images')
		],
		loaders: [
			{
				loader: 'file-loader',
				options: {
					name: filePath => makeDistPath(filePath),
				}
			},
			{
				loader: 'img-loader',
				options: {
					enabled: true,
					gifsicle: {},
					mozjpeg: {},
					optipng: {},
					svgo: {}
				}
			}
		]
	})
})
// customImagesConfigを実行
mix.customImagesConfig()

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/common.js', 'public/js');
mix.js('resources/js/app.js', 'public/js')
	.sass('resources/sass/app.scss', 'public/css')
	.options({
		processCssUrls: false
	});

mix.js('resources/js/index.js', 'public/js')
	.sass('resources/sass/index.scss', 'public/css')
	.options({
		processCssUrls: false
	});

mix.js('resources/js/login.js', 'public/js')
	.sass('resources/sass/login.scss', 'public/css')
	.options({
		processCssUrls: false
	});
