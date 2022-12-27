// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MoneyReciveBoldSvg from '@ant-design/icons-svg/lib/asn/MoneyReciveBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MoneyReciveBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MoneyReciveBold: MoneyReciveBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MoneyReciveBoldSvg}></AntdIcon>;
};

MoneyReciveBold.displayName = 'MoneyReciveBold';
MoneyReciveBold.inheritAttrs = false;
export default MoneyReciveBold;