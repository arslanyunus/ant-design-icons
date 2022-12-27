// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LinkSquareOutlineSvg from '@ant-design/icons-svg/lib/asn/LinkSquareOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LinkSquareOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LinkSquareOutline: LinkSquareOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LinkSquareOutlineSvg}></AntdIcon>;
};

LinkSquareOutline.displayName = 'LinkSquareOutline';
LinkSquareOutline.inheritAttrs = false;
export default LinkSquareOutline;