// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MoneyTickTwoToneSvg from '@ant-design/icons-svg/lib/asn/MoneyTickTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MoneyTickTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MoneyTickTwoTone: MoneyTickTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MoneyTickTwoToneSvg}></AntdIcon>;
};

MoneyTickTwoTone.displayName = 'MoneyTickTwoTone';
MoneyTickTwoTone.inheritAttrs = false;
export default MoneyTickTwoTone;