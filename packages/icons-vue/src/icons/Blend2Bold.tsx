// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Blend2BoldSvg from '@ant-design/icons-svg/lib/asn/Blend2Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Blend2BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Blend2Bold: Blend2BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Blend2BoldSvg}></AntdIcon>;
};

Blend2Bold.displayName = 'Blend2Bold';
Blend2Bold.inheritAttrs = false;
export default Blend2Bold;