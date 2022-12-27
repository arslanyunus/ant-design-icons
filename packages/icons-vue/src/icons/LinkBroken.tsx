// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LinkBrokenSvg from '@ant-design/icons-svg/lib/asn/LinkBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LinkBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LinkBroken: LinkBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LinkBrokenSvg}></AntdIcon>;
};

LinkBroken.displayName = 'LinkBroken';
LinkBroken.inheritAttrs = false;
export default LinkBroken;