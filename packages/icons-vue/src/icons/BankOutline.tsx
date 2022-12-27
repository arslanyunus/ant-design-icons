// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BankOutlineSvg from '@ant-design/icons-svg/lib/asn/BankOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BankOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BankOutline: BankOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BankOutlineSvg}></AntdIcon>;
};

BankOutline.displayName = 'BankOutline';
BankOutline.inheritAttrs = false;
export default BankOutline;