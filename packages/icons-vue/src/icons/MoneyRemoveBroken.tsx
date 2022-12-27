// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MoneyRemoveBrokenSvg from '@ant-design/icons-svg/lib/asn/MoneyRemoveBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MoneyRemoveBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MoneyRemoveBroken: MoneyRemoveBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MoneyRemoveBrokenSvg}></AntdIcon>;
};

MoneyRemoveBroken.displayName = 'MoneyRemoveBroken';
MoneyRemoveBroken.inheritAttrs = false;
export default MoneyRemoveBroken;