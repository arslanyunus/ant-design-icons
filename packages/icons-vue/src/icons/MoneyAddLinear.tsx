// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MoneyAddLinearSvg from '@ant-design/icons-svg/lib/asn/MoneyAddLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MoneyAddLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MoneyAddLinear: MoneyAddLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MoneyAddLinearSvg}></AntdIcon>;
};

MoneyAddLinear.displayName = 'MoneyAddLinear';
MoneyAddLinear.inheritAttrs = false;
export default MoneyAddLinear;