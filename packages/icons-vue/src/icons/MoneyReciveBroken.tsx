// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MoneyReciveBrokenSvg from '@ant-design/icons-svg/lib/asn/MoneyReciveBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MoneyReciveBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MoneyReciveBroken: MoneyReciveBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MoneyReciveBrokenSvg}></AntdIcon>;
};

MoneyReciveBroken.displayName = 'MoneyReciveBroken';
MoneyReciveBroken.inheritAttrs = false;
export default MoneyReciveBroken;