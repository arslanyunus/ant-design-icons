// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ShareBrokenSvg from '@ant-design/icons-svg/lib/asn/ShareBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ShareBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ShareBroken: ShareBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShareBrokenSvg}></AntdIcon>;
};

ShareBroken.displayName = 'ShareBroken';
ShareBroken.inheritAttrs = false;
export default ShareBroken;