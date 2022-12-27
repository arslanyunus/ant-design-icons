// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BankLinearSvg from '@ant-design/icons-svg/lib/asn/BankLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BankLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BankLinear: BankLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BankLinearSvg}></AntdIcon>;
};

BankLinear.displayName = 'BankLinear';
BankLinear.inheritAttrs = false;
export default BankLinear;