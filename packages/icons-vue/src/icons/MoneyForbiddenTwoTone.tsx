// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MoneyForbiddenTwoToneSvg from '@ant-design/icons-svg/lib/asn/MoneyForbiddenTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MoneyForbiddenTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MoneyForbiddenTwoTone: MoneyForbiddenTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MoneyForbiddenTwoToneSvg}></AntdIcon>;
};

MoneyForbiddenTwoTone.displayName = 'MoneyForbiddenTwoTone';
MoneyForbiddenTwoTone.inheritAttrs = false;
export default MoneyForbiddenTwoTone;