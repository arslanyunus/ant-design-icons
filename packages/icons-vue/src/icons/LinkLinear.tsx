// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LinkLinearSvg from '@ant-design/icons-svg/lib/asn/LinkLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LinkLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LinkLinear: LinkLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LinkLinearSvg}></AntdIcon>;
};

LinkLinear.displayName = 'LinkLinear';
LinkLinear.inheritAttrs = false;
export default LinkLinear;