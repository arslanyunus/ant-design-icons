// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MoneyAddBoldSvg from '@ant-design/icons-svg/lib/asn/MoneyAddBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MoneyAddBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MoneyAddBold: MoneyAddBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MoneyAddBoldSvg}></AntdIcon>;
};

MoneyAddBold.displayName = 'MoneyAddBold';
MoneyAddBold.inheritAttrs = false;
export default MoneyAddBold;