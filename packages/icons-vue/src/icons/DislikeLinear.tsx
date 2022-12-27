// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DislikeLinearSvg from '@ant-design/icons-svg/lib/asn/DislikeLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DislikeLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DislikeLinear: DislikeLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DislikeLinearSvg}></AntdIcon>;
};

DislikeLinear.displayName = 'DislikeLinear';
DislikeLinear.inheritAttrs = false;
export default DislikeLinear;