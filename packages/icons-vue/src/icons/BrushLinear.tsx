// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BrushLinearSvg from '@ant-design/icons-svg/lib/asn/BrushLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BrushLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BrushLinear: BrushLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BrushLinearSvg}></AntdIcon>;
};

BrushLinear.displayName = 'BrushLinear';
BrushLinear.inheritAttrs = false;
export default BrushLinear;