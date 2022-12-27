// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Grid7BrokenSvg from '@ant-design/icons-svg/lib/asn/Grid7Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Grid7BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Grid7Broken: Grid7BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Grid7BrokenSvg}></AntdIcon>;
};

Grid7Broken.displayName = 'Grid7Broken';
Grid7Broken.inheritAttrs = false;
export default Grid7Broken;