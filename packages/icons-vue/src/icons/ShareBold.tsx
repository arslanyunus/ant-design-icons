// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ShareBoldSvg from '@ant-design/icons-svg/lib/asn/ShareBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ShareBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ShareBold: ShareBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShareBoldSvg}></AntdIcon>;
};

ShareBold.displayName = 'ShareBold';
ShareBold.inheritAttrs = false;
export default ShareBold;