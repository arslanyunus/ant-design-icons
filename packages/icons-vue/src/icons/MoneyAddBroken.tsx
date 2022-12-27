// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MoneyAddBrokenSvg from '@ant-design/icons-svg/lib/asn/MoneyAddBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MoneyAddBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MoneyAddBroken: MoneyAddBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MoneyAddBrokenSvg}></AntdIcon>;
};

MoneyAddBroken.displayName = 'MoneyAddBroken';
MoneyAddBroken.inheritAttrs = false;
export default MoneyAddBroken;