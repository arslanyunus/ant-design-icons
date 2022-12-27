// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PercentageCircleBoldSvg from '@ant-design/icons-svg/lib/asn/PercentageCircleBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PercentageCircleBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PercentageCircleBold: PercentageCircleBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PercentageCircleBoldSvg}></AntdIcon>;
};

PercentageCircleBold.displayName = 'PercentageCircleBold';
PercentageCircleBold.inheritAttrs = false;
export default PercentageCircleBold;