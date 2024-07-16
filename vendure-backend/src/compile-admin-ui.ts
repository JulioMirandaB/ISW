import { compileUiExtensions } from '@vendure/ui-devkit/compiler';
import * as path from 'path';

compileUiExtensions({
    outputPath: path.join(__dirname, '../admin-ui'),
    extensions: [
        {
            extensionPath: path.join(__dirname, 'images'),
            ngModules: [],
            staticAssets: [
                { path: path.join(__dirname, 'images/my-logo-sm.png'), rename: 'assets/images/my-logo-sm.png' },
                { path: path.join(__dirname, 'images/my-logo-lg.png'), rename: 'assets/images/my-logo-lg.png' },
                { path: path.join(__dirname, 'images/favicon.ico'), rename: 'assets/images/favicon.ico' }
            ],
        },
    ],
    devMode: true,
}).compile?.().then(() => {
    process.exit(0);
});
