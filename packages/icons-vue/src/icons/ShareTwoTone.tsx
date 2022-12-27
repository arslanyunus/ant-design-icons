// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ShareTwoToneSvg from '@ant-design/icons-svg/lib/asn/ShareTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ShareTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ShareTwoTone: ShareTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShareTwoToneSvg}></AntdIcon>;
};

ShareTwoTone.displayName = 'ShareTwoTone';
ShareTwoTone.inheritAttrs = false;
export default ShareTwoTone;