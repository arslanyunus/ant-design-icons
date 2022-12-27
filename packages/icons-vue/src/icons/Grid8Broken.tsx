// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Grid8BrokenSvg from '@ant-design/icons-svg/lib/asn/Grid8Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Grid8BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Grid8Broken: Grid8BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Grid8BrokenSvg}></AntdIcon>;
};

Grid8Broken.displayName = 'Grid8Broken';
Grid8Broken.inheritAttrs = false;
export default Grid8Broken;