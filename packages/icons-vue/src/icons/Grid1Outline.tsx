// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Grid1OutlineSvg from '@ant-design/icons-svg/lib/asn/Grid1Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Grid1OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Grid1Outline: Grid1OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Grid1OutlineSvg}></AntdIcon>;
};

Grid1Outline.displayName = 'Grid1Outline';
Grid1Outline.inheritAttrs = false;
export default Grid1Outline;