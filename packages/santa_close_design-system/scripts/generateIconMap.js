const fs = require('fs')
const path = require('path')
const prettier = require('prettier')

const prettierConfig = require('../../../.prettierrc')

const ICON_DIR_PATH = '../src/components/Icon/'
const SVG_DIR_PATH = path.resolve(__dirname, ICON_DIR_PATH, 'svgs')
const SVG_REGEX = /\.svg$/
const OUT_FILE_PATH = path.resolve(__dirname, ICON_DIR_PATH, 'iconMap.ts')

const createIconString = (files) => {
  return `
    export const SVG_ICON_MAP = {
      ${files.map(
        (fileName, index) =>
          `${index ? '\n' : ''}  '${fileName.replace(
            SVG_REGEX,
            '',
          )}': () => import('./svgs/${fileName}')`,
      )}
    };

    export type SvgIconKey = keyof typeof SVG_ICON_MAP;
  `
}

const generateIconMap = () => {
  const svgFiles = fs
    .readdirSync(SVG_DIR_PATH)
    .filter((fileName) => !fileName.match(/DS_Store/i))

  fs.writeFileSync(
    OUT_FILE_PATH,
    prettier.format(createIconString(svgFiles), {
      parser: 'babel-ts',
      ...prettierConfig,
    }),
  )
}

generateIconMap()

process.argv.forEach((arg) => {
  if (arg === '--watch') {
    fs.watch(SVG_DIR_PATH, generateIconMap)
  }
})
