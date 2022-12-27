// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MilkBrokenSvg from '@ant-design/icons-svg/lib/asn/MilkBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MilkBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MilkBroken: MilkBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MilkBrokenSvg}></AntdIcon>;
};

MilkBroken.displayName = 'MilkBroken';
MilkBroken.inheritAttrs = false;
export default MilkBroken;