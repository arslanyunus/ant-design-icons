// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MoneyTimeLinearSvg from '@ant-design/icons-svg/lib/asn/MoneyTimeLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MoneyTimeLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MoneyTimeLinear: MoneyTimeLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MoneyTimeLinearSvg}></AntdIcon>;
};

MoneyTimeLinear.displayName = 'MoneyTimeLinear';
MoneyTimeLinear.inheritAttrs = false;
export default MoneyTimeLinear;