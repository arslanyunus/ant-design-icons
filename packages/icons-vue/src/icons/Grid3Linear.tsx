// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Grid3LinearSvg from '@ant-design/icons-svg/lib/asn/Grid3Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Grid3LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Grid3Linear: Grid3LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Grid3LinearSvg}></AntdIcon>;
};

Grid3Linear.displayName = 'Grid3Linear';
Grid3Linear.inheritAttrs = false;
export default Grid3Linear;