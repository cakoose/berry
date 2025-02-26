// To extend this list, please open a PR on the relevant repository that adds
// the same fields as you add here and prefix your changes with the relevant
// PR url.

import {PackageExtensionData} from '@yarnpkg/core';

const optionalPeerDep = {
  optional: true,
};

export const packageExtensions: Array<[string, PackageExtensionData]> = [
  // https://github.com/SamVerschueren/stream-to-observable/pull/5
  [`@samverschueren/stream-to-observable@<0.3.1`, {
    peerDependenciesMeta: {
      [`rxjs`]: optionalPeerDep,
      [`zenObservable`]: optionalPeerDep,
    },
  }],
  // https://github.com/sindresorhus/any-observable/pull/25
  [`any-observable@<0.5.1`, {
    peerDependenciesMeta: {
      [`rxjs`]: optionalPeerDep,
      [`zenObservable`]: optionalPeerDep,
    },
  }],
  // https://github.com/keymetrics/pm2-io-agent/pull/125
  [`@pm2/agent@<1.0.4`, {
    dependencies: {
      [`debug`]: `*`,
    },
  }],
  // https://github.com/visionmedia/debug/pull/727
  [`debug@<4.2.0`, {
    peerDependenciesMeta: {
      [`supports-color`]: optionalPeerDep,
    },
  }],
  // https://github.com/sindresorhus/got/pull/1125
  [`got@<11`, {
    dependencies: {
      [`@types/responselike`]: `^1.0.0`,
      [`@types/keyv`]: `^3.1.1`,
    },
  }],
  // https://github.com/szmarczak/cacheable-lookup/pull/12
  [`cacheable-lookup@<4.1.2`, {
    dependencies: {
      [`@types/keyv`]: `^3.1.1`,
    },
  }],
  // https://github.com/prisma-labs/http-link-dataloader/pull/22
  [`http-link-dataloader@*`, {
    peerDependencies: {
      [`graphql`]: `^0.13.1 || ^14.0.0`,
    },
  }],
  // https://github.com/theia-ide/typescript-language-server/issues/144
  [`typescript-language-server@*`, {
    dependencies: {
      [`vscode-jsonrpc`]: `^5.0.1`,
      [`vscode-languageserver-protocol`]: `^3.15.0`,
    },
  }],
  // https://github.com/gucong3000/postcss-syntax/pull/46
  [`postcss-syntax@*`, {
    peerDependenciesMeta: {
      [`postcss-html`]: optionalPeerDep,
      [`postcss-jsx`]: optionalPeerDep,
      [`postcss-less`]: optionalPeerDep,
      [`postcss-markdown`]: optionalPeerDep,
      [`postcss-scss`]: optionalPeerDep,
    },
  }],
  // https://github.com/cssinjs/jss/pull/1315
  [`jss-plugin-rule-value-function@<=10.1.1`, {
    dependencies: {
      [`tiny-warning`]: `^1.0.2`,
    },
  }],
  // https://github.com/vadimdemedes/ink-select-input/pull/26
  [`ink-select-input@<4.1.0`, {
    peerDependencies: {
      react: `^16.8.2`,
    },
  }],
  // https://github.com/xz64/license-webpack-plugin/pull/100
  [`license-webpack-plugin@*`, {
    peerDependenciesMeta: {
      [`webpack`]: optionalPeerDep,
    },
  }],
  // https://github.com/snowpackjs/snowpack/issues/3158
  [`snowpack@>=3.3.0`, {
    dependencies: {
      [`node-gyp`]: `^7.1.0`,
    },
  }],
  // https://github.com/iarna/promise-inflight/pull/4
  [`promise-inflight@*`, {
    peerDependenciesMeta: {
      [`bluebird`]: optionalPeerDep,
    },
  }],
  // https://github.com/casesandberg/reactcss/pull/153
  [`reactcss@*`, {
    peerDependencies: {
      react: `*`,
    },
  }],
  // https://github.com/casesandberg/react-color/pull/746
  [`react-color@<=2.19.0`, {
    peerDependencies: {
      react: `*`,
    },
  }],
  // https://github.com/angeloocana/gatsby-plugin-i18n/pull/145
  [`gatsby-plugin-i18n@*`, {
    dependencies: {
      ramda: `^0.24.1`,
    },
  }],
  // https://github.com/3rd-Eden/useragent/pull/159
  [`useragent@^2.0.0`, {
    dependencies: {
      request: `^2.88.0`,
      yamlparser: `0.0.x`,
      semver: `5.5.x`,
    },
  }],
  // https://github.com/apollographql/apollo-tooling/pull/2049
  [`@apollographql/apollo-tools@*`, {
    peerDependencies: {
      graphql: `^14.2.1 || ^15.0.0`,
    },
  }],
  // https://github.com/mbrn/material-table/pull/2374
  [`material-table@^2.0.0`, {
    dependencies: {
      "@babel/runtime": `^7.11.2`,
    },
  }],
  // https://github.com/babel/babel/pull/11118
  [`@babel/parser@*`, {
    dependencies: {
      "@babel/types": `^7.8.3`,
    },
  }],
  // https://github.com/TypeStrong/fork-ts-checker-webpack-plugin/pull/507
  [`fork-ts-checker-webpack-plugin@*`, {
    peerDependencies: {
      eslint: `>= 6`,
      typescript: `>= 2.7`,
      webpack: `>= 4`,
      'vue-template-compiler': `*`,
    },
    peerDependenciesMeta: {
      eslint: optionalPeerDep,
      'vue-template-compiler': optionalPeerDep,
    },
  }],
  // https://github.com/react-component/animate/pull/116
  [`rc-animate@<=3.1.1`, {
    peerDependencies: {
      react: `>=16.9.0`,
      'react-dom': `>=16.9.0`,
    },
  }],
  // https://github.com/react-bootstrap-table/react-bootstrap-table2/pull/1491
  [`react-bootstrap-table2-paginator@*`, {
    dependencies: {
      classnames: `^2.2.6`,
    },
  }],
  // https://github.com/STRML/react-draggable/pull/525
  [`react-draggable@<=4.4.3`, {
    peerDependencies: {
      react: `>= 16.3.0`,
      'react-dom': `>= 16.3.0`,
    },
  }],
  // https://github.com/jaydenseric/apollo-upload-client/commit/336691cec6698661ab404649e4e8435750255803
  [`apollo-upload-client@<14`, {
    peerDependencies: {
      graphql: `14 - 15`,
    },
  }],
  // https://github.com/algolia/react-instantsearch/pull/2975
  [`react-instantsearch-core@<=6.7.0`, {
    peerDependencies: {
      algoliasearch: `>= 3.1 < 5`,
    },
  }],
  // https://github.com/algolia/react-instantsearch/pull/2975
  [`react-instantsearch-dom@<=6.7.0`, {
    dependencies: {
      'react-fast-compare': `^3.0.0`,
    },
  }],
  // https://github.com/websockets/ws/pull/1626
  [`ws@<7.2.1`, {
    peerDependencies: {
      bufferutil: `^4.0.1`,
      'utf-8-validate': `^5.0.2`,
    },
    peerDependenciesMeta: {
      bufferutil: optionalPeerDep,
      'utf-8-validate': optionalPeerDep,
    },
  }],
  // https://github.com/tajo/react-portal/pull/233
  [`react-portal@*`, {
    peerDependencies: {
      'react-dom': `^15.0.0-0 || ^16.0.0-0 || ^17.0.0-0`,
    },
  }],
  // https://github.com/facebook/create-react-app/pull/9872
  [`react-scripts@<=4.0.1`, {
    peerDependencies: {
      [`react`]: `*`,
    },
  }],
  // https://github.com/DevExpress/testcafe/pull/5872
  [`testcafe@<=1.10.1`, {
    dependencies: {
      '@babel/plugin-transform-for-of': `^7.12.1`,
      '@babel/runtime': `^7.12.5`,
    },
  }],
  // https://github.com/DevExpress/testcafe-legacy-api/pull/51
  [`testcafe-legacy-api@<=4.2.0`, {
    dependencies: {
      'testcafe-hammerhead': `^17.0.1`,
      'read-file-relative': `^1.2.0`,
    },
  }],
  // https://github.com/googleapis/nodejs-firestore/pull/1425
  [`@google-cloud/firestore@<=4.9.3`, {
    dependencies: {
      protobufjs: `^6.8.6`,
    },
  }],
  // https://github.com/thinhle-agilityio/gatsby-source-apiserver/pull/58
  [`gatsby-source-apiserver@*`, {
    dependencies: {
      [`babel-polyfill`]: `^6.26.0`,
    },
  }],
  // https://github.com/webpack/webpack-cli/pull/2097
  [`@webpack-cli/package-utils@<=1.0.1-alpha.4`, {
    dependencies: {
      [`cross-spawn`]: `^7.0.3`,
    },
  }],
  // https://github.com/gatsbyjs/gatsby/pull/20156
  [`gatsby-remark-prismjs@<3.3.28`, {
    dependencies: {
      [`lodash`]: `^4`,
    },
  }],
  // https://github.com/Creatiwity/gatsby-plugin-favicon/pull/65
  [`gatsby-plugin-favicon@*`, {
    peerDependencies: {
      [`webpack`]: `*`,
    },
  }],
  // https://github.com/gatsbyjs/gatsby/pull/28759
  [`gatsby-plugin-sharp@*`, {
    dependencies: {
      [`debug`]: `^4.3.1`,
    },
  }],
  // https://github.com/gatsbyjs/gatsby/pull/28759
  [`gatsby-react-router-scroll@*`, {
    dependencies: {
      [`prop-types`]: `^15.7.2`,
    },
  }],
  // https://github.com/rebassjs/rebass/pull/934
  [`@rebass/forms@*`, {
    dependencies: {
      [`@styled-system/should-forward-prop`]: `^5.0.0`,
    },
    peerDependencies: {
      react: `^16.8.6`,
    },
  }],
  // https://github.com/rebassjs/rebass/pull/934
  [`rebass@*`, {
    peerDependencies: {
      react: `^16.8.6`,
    },
  }],
];
