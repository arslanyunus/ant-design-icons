// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MoneyTickBoldSvg from '@ant-design/icons-svg/lib/asn/MoneyTickBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MoneyTickBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MoneyTickBold: MoneyTickBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MoneyTickBoldSvg}></AntdIcon>;
};

MoneyTickBold.displayName = 'MoneyTickBold';
MoneyTickBold.inheritAttrs = false;
export default MoneyTickBold;