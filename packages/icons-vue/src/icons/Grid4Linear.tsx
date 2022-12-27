// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Grid4LinearSvg from '@ant-design/icons-svg/lib/asn/Grid4Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Grid4LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Grid4Linear: Grid4LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Grid4LinearSvg}></AntdIcon>;
};

Grid4Linear.displayName = 'Grid4Linear';
Grid4Linear.inheritAttrs = false;
export default Grid4Linear;