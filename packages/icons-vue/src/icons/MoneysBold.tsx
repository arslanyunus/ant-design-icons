// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MoneysBoldSvg from '@ant-design/icons-svg/lib/asn/MoneysBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MoneysBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MoneysBold: MoneysBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MoneysBoldSvg}></AntdIcon>;
};

MoneysBold.displayName = 'MoneysBold';
MoneysBold.inheritAttrs = false;
export default MoneysBold;