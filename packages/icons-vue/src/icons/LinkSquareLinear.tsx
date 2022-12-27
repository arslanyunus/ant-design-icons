// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LinkSquareLinearSvg from '@ant-design/icons-svg/lib/asn/LinkSquareLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LinkSquareLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LinkSquareLinear: LinkSquareLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LinkSquareLinearSvg}></AntdIcon>;
};

LinkSquareLinear.displayName = 'LinkSquareLinear';
LinkSquareLinear.inheritAttrs = false;
export default LinkSquareLinear;