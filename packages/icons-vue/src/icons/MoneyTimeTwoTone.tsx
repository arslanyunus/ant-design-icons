// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MoneyTimeTwoToneSvg from '@ant-design/icons-svg/lib/asn/MoneyTimeTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MoneyTimeTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MoneyTimeTwoTone: MoneyTimeTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MoneyTimeTwoToneSvg}></AntdIcon>;
};

MoneyTimeTwoTone.displayName = 'MoneyTimeTwoTone';
MoneyTimeTwoTone.inheritAttrs = false;
export default MoneyTimeTwoTone;