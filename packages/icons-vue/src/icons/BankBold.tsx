// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BankBoldSvg from '@ant-design/icons-svg/lib/asn/BankBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BankBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BankBold: BankBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BankBoldSvg}></AntdIcon>;
};

BankBold.displayName = 'BankBold';
BankBold.inheritAttrs = false;
export default BankBold;