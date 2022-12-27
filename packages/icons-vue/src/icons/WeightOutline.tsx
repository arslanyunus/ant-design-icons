// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import WeightOutlineSvg from '@ant-design/icons-svg/lib/asn/WeightOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface WeightOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const WeightOutline: WeightOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={WeightOutlineSvg}></AntdIcon>;
};

WeightOutline.displayName = 'WeightOutline';
WeightOutline.inheritAttrs = false;
export default WeightOutline;