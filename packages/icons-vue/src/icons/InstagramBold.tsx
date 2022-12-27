// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import InstagramBoldSvg from '@ant-design/icons-svg/lib/asn/InstagramBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface InstagramBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const InstagramBold: InstagramBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={InstagramBoldSvg}></AntdIcon>;
};

InstagramBold.displayName = 'InstagramBold';
InstagramBold.inheritAttrs = false;
export default InstagramBold;