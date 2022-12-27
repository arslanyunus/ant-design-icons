// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Grid4BrokenSvg from '@ant-design/icons-svg/lib/asn/Grid4Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Grid4BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Grid4Broken: Grid4BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Grid4BrokenSvg}></AntdIcon>;
};

Grid4Broken.displayName = 'Grid4Broken';
Grid4Broken.inheritAttrs = false;
export default Grid4Broken;