// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import WeightTwoToneSvg from '@ant-design/icons-svg/lib/asn/WeightTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface WeightTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const WeightTwoTone: WeightTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WeightTwoToneSvg}></AntdIcon>;
};

WeightTwoTone.displayName = 'WeightTwoTone';
WeightTwoTone.inheritAttrs = false;
export default WeightTwoTone;