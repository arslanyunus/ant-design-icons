// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TrushSquareLinearSvg from '@ant-design/icons-svg/lib/asn/TrushSquareLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TrushSquareLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TrushSquareLinear: TrushSquareLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TrushSquareLinearSvg}></AntdIcon>;
};

TrushSquareLinear.displayName = 'TrushSquareLinear';
TrushSquareLinear.inheritAttrs = false;
export default TrushSquareLinear;