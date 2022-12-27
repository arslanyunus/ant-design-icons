// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MoneyChangeTwoToneSvg from '@ant-design/icons-svg/lib/asn/MoneyChangeTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MoneyChangeTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MoneyChangeTwoTone: MoneyChangeTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MoneyChangeTwoToneSvg}></AntdIcon>;
};

MoneyChangeTwoTone.displayName = 'MoneyChangeTwoTone';
MoneyChangeTwoTone.inheritAttrs = false;
export default MoneyChangeTwoTone;