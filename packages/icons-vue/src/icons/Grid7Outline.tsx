// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Grid7OutlineSvg from '@ant-design/icons-svg/lib/asn/Grid7Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Grid7OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Grid7Outline: Grid7OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Grid7OutlineSvg}></AntdIcon>;
};

Grid7Outline.displayName = 'Grid7Outline';
Grid7Outline.inheritAttrs = false;
export default Grid7Outline;