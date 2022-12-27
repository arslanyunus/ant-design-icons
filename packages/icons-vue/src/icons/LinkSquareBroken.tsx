// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LinkSquareBrokenSvg from '@ant-design/icons-svg/lib/asn/LinkSquareBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LinkSquareBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LinkSquareBroken: LinkSquareBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LinkSquareBrokenSvg}></AntdIcon>;
};

LinkSquareBroken.displayName = 'LinkSquareBroken';
LinkSquareBroken.inheritAttrs = false;
export default LinkSquareBroken;