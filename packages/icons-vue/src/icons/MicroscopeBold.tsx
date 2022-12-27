// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MicroscopeBoldSvg from '@ant-design/icons-svg/lib/asn/MicroscopeBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MicroscopeBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MicroscopeBold: MicroscopeBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MicroscopeBoldSvg}></AntdIcon>;
};

MicroscopeBold.displayName = 'MicroscopeBold';
MicroscopeBold.inheritAttrs = false;
export default MicroscopeBold;