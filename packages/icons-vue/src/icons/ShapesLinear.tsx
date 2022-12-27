// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ShapesLinearSvg from '@ant-design/icons-svg/lib/asn/ShapesLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ShapesLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ShapesLinear: ShapesLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShapesLinearSvg}></AntdIcon>;
};

ShapesLinear.displayName = 'ShapesLinear';
ShapesLinear.inheritAttrs = false;
export default ShapesLinear;