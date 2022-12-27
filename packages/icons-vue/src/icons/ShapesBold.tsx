// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ShapesBoldSvg from '@ant-design/icons-svg/lib/asn/ShapesBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ShapesBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ShapesBold: ShapesBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShapesBoldSvg}></AntdIcon>;
};

ShapesBold.displayName = 'ShapesBold';
ShapesBold.inheritAttrs = false;
export default ShapesBold;