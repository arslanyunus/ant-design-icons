// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Grid4OutlineSvg from '@ant-design/icons-svg/lib/asn/Grid4Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Grid4OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Grid4Outline: Grid4OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Grid4OutlineSvg}></AntdIcon>;
};

Grid4Outline.displayName = 'Grid4Outline';
Grid4Outline.inheritAttrs = false;
export default Grid4Outline;