// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PercentageCircleOutlineSvg from '@ant-design/icons-svg/lib/asn/PercentageCircleOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PercentageCircleOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PercentageCircleOutline: PercentageCircleOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PercentageCircleOutlineSvg}></AntdIcon>;
};

PercentageCircleOutline.displayName = 'PercentageCircleOutline';
PercentageCircleOutline.inheritAttrs = false;
export default PercentageCircleOutline;