// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MoneyAddTwoToneSvg from '@ant-design/icons-svg/lib/asn/MoneyAddTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MoneyAddTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MoneyAddTwoTone: MoneyAddTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MoneyAddTwoToneSvg}></AntdIcon>;
};

MoneyAddTwoTone.displayName = 'MoneyAddTwoTone';
MoneyAddTwoTone.inheritAttrs = false;
export default MoneyAddTwoTone;