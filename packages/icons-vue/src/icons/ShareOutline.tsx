// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ShareOutlineSvg from '@ant-design/icons-svg/lib/asn/ShareOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ShareOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ShareOutline: ShareOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShareOutlineSvg}></AntdIcon>;
};

ShareOutline.displayName = 'ShareOutline';
ShareOutline.inheritAttrs = false;
export default ShareOutline;