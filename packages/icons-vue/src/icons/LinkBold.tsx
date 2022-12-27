// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LinkBoldSvg from '@ant-design/icons-svg/lib/asn/LinkBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LinkBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LinkBold: LinkBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LinkBoldSvg}></AntdIcon>;
};

LinkBold.displayName = 'LinkBold';
LinkBold.inheritAttrs = false;
export default LinkBold;