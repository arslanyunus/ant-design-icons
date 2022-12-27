// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BlendBoldSvg from '@ant-design/icons-svg/lib/asn/BlendBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BlendBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BlendBold: BlendBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BlendBoldSvg}></AntdIcon>;
};

BlendBold.displayName = 'BlendBold';
BlendBold.inheritAttrs = false;
export default BlendBold;