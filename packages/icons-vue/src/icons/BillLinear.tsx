// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BillLinearSvg from '@ant-design/icons-svg/lib/asn/BillLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BillLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BillLinear: BillLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BillLinearSvg}></AntdIcon>;
};

BillLinear.displayName = 'BillLinear';
BillLinear.inheritAttrs = false;
export default BillLinear;