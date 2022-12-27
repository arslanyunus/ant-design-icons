// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BankBrokenSvg from '@ant-design/icons-svg/lib/asn/BankBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BankBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BankBroken: BankBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BankBrokenSvg}></AntdIcon>;
};

BankBroken.displayName = 'BankBroken';
BankBroken.inheritAttrs = false;
export default BankBroken;