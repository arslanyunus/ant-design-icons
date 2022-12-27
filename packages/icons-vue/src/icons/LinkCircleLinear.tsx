// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LinkCircleLinearSvg from '@ant-design/icons-svg/lib/asn/LinkCircleLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LinkCircleLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LinkCircleLinear: LinkCircleLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LinkCircleLinearSvg}></AntdIcon>;
};

LinkCircleLinear.displayName = 'LinkCircleLinear';
LinkCircleLinear.inheritAttrs = false;
export default LinkCircleLinear;