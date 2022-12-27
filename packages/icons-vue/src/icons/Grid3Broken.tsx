// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Grid3BrokenSvg from '@ant-design/icons-svg/lib/asn/Grid3Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Grid3BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Grid3Broken: Grid3BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Grid3BrokenSvg}></AntdIcon>;
};

Grid3Broken.displayName = 'Grid3Broken';
Grid3Broken.inheritAttrs = false;
export default Grid3Broken;