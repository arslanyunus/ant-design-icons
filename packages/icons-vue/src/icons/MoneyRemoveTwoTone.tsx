// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MoneyRemoveTwoToneSvg from '@ant-design/icons-svg/lib/asn/MoneyRemoveTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MoneyRemoveTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MoneyRemoveTwoTone: MoneyRemoveTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MoneyRemoveTwoToneSvg}></AntdIcon>;
};

MoneyRemoveTwoTone.displayName = 'MoneyRemoveTwoTone';
MoneyRemoveTwoTone.inheritAttrs = false;
export default MoneyRemoveTwoTone;