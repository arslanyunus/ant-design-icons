// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MoneyReciveTwoToneSvg from '@ant-design/icons-svg/lib/asn/MoneyReciveTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MoneyReciveTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MoneyReciveTwoTone: MoneyReciveTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MoneyReciveTwoToneSvg}></AntdIcon>;
};

MoneyReciveTwoTone.displayName = 'MoneyReciveTwoTone';
MoneyReciveTwoTone.inheritAttrs = false;
export default MoneyReciveTwoTone;