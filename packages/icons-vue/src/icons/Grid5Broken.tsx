// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Grid5BrokenSvg from '@ant-design/icons-svg/lib/asn/Grid5Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Grid5BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Grid5Broken: Grid5BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Grid5BrokenSvg}></AntdIcon>;
};

Grid5Broken.displayName = 'Grid5Broken';
Grid5Broken.inheritAttrs = false;
export default Grid5Broken;