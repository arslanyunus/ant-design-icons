// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Grid1BrokenSvg from '@ant-design/icons-svg/lib/asn/Grid1Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Grid1BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Grid1Broken: Grid1BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Grid1BrokenSvg}></AntdIcon>;
};

Grid1Broken.displayName = 'Grid1Broken';
Grid1Broken.inheritAttrs = false;
export default Grid1Broken;