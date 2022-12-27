// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LinkOutlineSvg from '@ant-design/icons-svg/lib/asn/LinkOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LinkOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LinkOutline: LinkOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LinkOutlineSvg}></AntdIcon>;
};

LinkOutline.displayName = 'LinkOutline';
LinkOutline.inheritAttrs = false;
export default LinkOutline;