// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import WeightBrokenSvg from '@ant-design/icons-svg/lib/asn/WeightBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface WeightBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const WeightBroken: WeightBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WeightBrokenSvg}></AntdIcon>;
};

WeightBroken.displayName = 'WeightBroken';
WeightBroken.inheritAttrs = false;
export default WeightBroken;