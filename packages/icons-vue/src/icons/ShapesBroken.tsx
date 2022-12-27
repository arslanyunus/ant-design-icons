// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ShapesBrokenSvg from '@ant-design/icons-svg/lib/asn/ShapesBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ShapesBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ShapesBroken: ShapesBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShapesBrokenSvg}></AntdIcon>;
};

ShapesBroken.displayName = 'ShapesBroken';
ShapesBroken.inheritAttrs = false;
export default ShapesBroken;