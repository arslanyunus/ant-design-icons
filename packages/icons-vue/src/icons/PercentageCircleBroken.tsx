// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PercentageCircleBrokenSvg from '@ant-design/icons-svg/lib/asn/PercentageCircleBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PercentageCircleBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PercentageCircleBroken: PercentageCircleBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PercentageCircleBrokenSvg}></AntdIcon>;
};

PercentageCircleBroken.displayName = 'PercentageCircleBroken';
PercentageCircleBroken.inheritAttrs = false;
export default PercentageCircleBroken;