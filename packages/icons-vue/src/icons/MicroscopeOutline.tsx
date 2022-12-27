// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MicroscopeOutlineSvg from '@ant-design/icons-svg/lib/asn/MicroscopeOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MicroscopeOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MicroscopeOutline: MicroscopeOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MicroscopeOutlineSvg}></AntdIcon>;
};

MicroscopeOutline.displayName = 'MicroscopeOutline';
MicroscopeOutline.inheritAttrs = false;
export default MicroscopeOutline;