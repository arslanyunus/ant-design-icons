// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import WeightBoldSvg from '@ant-design/icons-svg/lib/asn/WeightBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface WeightBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const WeightBold: WeightBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WeightBoldSvg}></AntdIcon>;
};

WeightBold.displayName = 'WeightBold';
WeightBold.inheritAttrs = false;
export default WeightBold;