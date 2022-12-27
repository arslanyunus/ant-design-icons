// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LinkCircleBoldSvg from '@ant-design/icons-svg/lib/asn/LinkCircleBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LinkCircleBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LinkCircleBold: LinkCircleBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LinkCircleBoldSvg}></AntdIcon>;
};

LinkCircleBold.displayName = 'LinkCircleBold';
LinkCircleBold.inheritAttrs = false;
export default LinkCircleBold;