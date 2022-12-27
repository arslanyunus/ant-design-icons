// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BlurBoldSvg from '@ant-design/icons-svg/lib/asn/BlurBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BlurBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BlurBold: BlurBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BlurBoldSvg}></AntdIcon>;
};

BlurBold.displayName = 'BlurBold';
BlurBold.inheritAttrs = false;
export default BlurBold;