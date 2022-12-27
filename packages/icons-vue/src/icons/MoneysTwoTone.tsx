// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MoneysTwoToneSvg from '@ant-design/icons-svg/lib/asn/MoneysTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MoneysTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MoneysTwoTone: MoneysTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MoneysTwoToneSvg}></AntdIcon>;
};

MoneysTwoTone.displayName = 'MoneysTwoTone';
MoneysTwoTone.inheritAttrs = false;
export default MoneysTwoTone;