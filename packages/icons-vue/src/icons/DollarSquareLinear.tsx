// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DollarSquareLinearSvg from '@ant-design/icons-svg/lib/asn/DollarSquareLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DollarSquareLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DollarSquareLinear: DollarSquareLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DollarSquareLinearSvg}></AntdIcon>;
};

DollarSquareLinear.displayName = 'DollarSquareLinear';
DollarSquareLinear.inheritAttrs = false;
export default DollarSquareLinear;