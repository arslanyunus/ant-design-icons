// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Brush2BoldSvg from '@ant-design/icons-svg/lib/asn/Brush2Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Brush2BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Brush2Bold: Brush2BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Brush2BoldSvg}></AntdIcon>;
};

Brush2Bold.displayName = 'Brush2Bold';
Brush2Bold.inheritAttrs = false;
export default Brush2Bold;