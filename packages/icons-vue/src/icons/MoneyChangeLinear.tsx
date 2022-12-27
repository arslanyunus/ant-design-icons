// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MoneyChangeLinearSvg from '@ant-design/icons-svg/lib/asn/MoneyChangeLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MoneyChangeLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MoneyChangeLinear: MoneyChangeLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MoneyChangeLinearSvg}></AntdIcon>;
};

MoneyChangeLinear.displayName = 'MoneyChangeLinear';
MoneyChangeLinear.inheritAttrs = false;
export default MoneyChangeLinear;