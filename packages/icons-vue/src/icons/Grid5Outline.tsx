// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Grid5OutlineSvg from '@ant-design/icons-svg/lib/asn/Grid5Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Grid5OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Grid5Outline: Grid5OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Grid5OutlineSvg}></AntdIcon>;
};

Grid5Outline.displayName = 'Grid5Outline';
Grid5Outline.inheritAttrs = false;
export default Grid5Outline;