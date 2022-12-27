// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MoneyBrokenSvg from '@ant-design/icons-svg/lib/asn/MoneyBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MoneyBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MoneyBroken: MoneyBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MoneyBrokenSvg}></AntdIcon>;
};

MoneyBroken.displayName = 'MoneyBroken';
MoneyBroken.inheritAttrs = false;
export default MoneyBroken;