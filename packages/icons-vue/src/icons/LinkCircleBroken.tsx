// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LinkCircleBrokenSvg from '@ant-design/icons-svg/lib/asn/LinkCircleBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LinkCircleBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LinkCircleBroken: LinkCircleBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LinkCircleBrokenSvg}></AntdIcon>;
};

LinkCircleBroken.displayName = 'LinkCircleBroken';
LinkCircleBroken.inheritAttrs = false;
export default LinkCircleBroken;