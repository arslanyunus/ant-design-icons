// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LinkCircleOutlineSvg from '@ant-design/icons-svg/lib/asn/LinkCircleOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LinkCircleOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LinkCircleOutline: LinkCircleOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LinkCircleOutlineSvg}></AntdIcon>;
};

LinkCircleOutline.displayName = 'LinkCircleOutline';
LinkCircleOutline.inheritAttrs = false;
export default LinkCircleOutline;