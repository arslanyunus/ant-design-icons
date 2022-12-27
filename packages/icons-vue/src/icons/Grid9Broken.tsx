// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Grid9BrokenSvg from '@ant-design/icons-svg/lib/asn/Grid9Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Grid9BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Grid9Broken: Grid9BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Grid9BrokenSvg}></AntdIcon>;
};

Grid9Broken.displayName = 'Grid9Broken';
Grid9Broken.inheritAttrs = false;
export default Grid9Broken;