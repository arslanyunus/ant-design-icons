// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MoneyTickLinearSvg from '@ant-design/icons-svg/lib/asn/MoneyTickLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MoneyTickLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MoneyTickLinear: MoneyTickLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MoneyTickLinearSvg}></AntdIcon>;
};

MoneyTickLinear.displayName = 'MoneyTickLinear';
MoneyTickLinear.inheritAttrs = false;
export default MoneyTickLinear;