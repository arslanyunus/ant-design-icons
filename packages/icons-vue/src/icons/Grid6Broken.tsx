// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Grid6BrokenSvg from '@ant-design/icons-svg/lib/asn/Grid6Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Grid6BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Grid6Broken: Grid6BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Grid6BrokenSvg}></AntdIcon>;
};

Grid6Broken.displayName = 'Grid6Broken';
Grid6Broken.inheritAttrs = false;
export default Grid6Broken;