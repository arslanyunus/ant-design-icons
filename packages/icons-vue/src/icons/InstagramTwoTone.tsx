// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import InstagramTwoToneSvg from '@ant-design/icons-svg/lib/asn/InstagramTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface InstagramTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const InstagramTwoTone: InstagramTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={InstagramTwoToneSvg}></AntdIcon>;
};

InstagramTwoTone.displayName = 'InstagramTwoTone';
InstagramTwoTone.inheritAttrs = false;
export default InstagramTwoTone;