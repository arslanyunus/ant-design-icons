// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MoneyBoldSvg from '@ant-design/icons-svg/lib/asn/MoneyBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MoneyBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MoneyBold: MoneyBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MoneyBoldSvg}></AntdIcon>;
};

MoneyBold.displayName = 'MoneyBold';
MoneyBold.inheritAttrs = false;
export default MoneyBold;