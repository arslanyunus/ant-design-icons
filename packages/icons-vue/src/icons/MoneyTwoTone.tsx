// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MoneyTwoToneSvg from '@ant-design/icons-svg/lib/asn/MoneyTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MoneyTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MoneyTwoTone: MoneyTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MoneyTwoToneSvg}></AntdIcon>;
};

MoneyTwoTone.displayName = 'MoneyTwoTone';
MoneyTwoTone.inheritAttrs = false;
export default MoneyTwoTone;