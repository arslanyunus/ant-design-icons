// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Brush4BoldSvg from '@ant-design/icons-svg/lib/asn/Brush4Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Brush4BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Brush4Bold: Brush4BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Brush4BoldSvg}></AntdIcon>;
};

Brush4Bold.displayName = 'Brush4Bold';
Brush4Bold.inheritAttrs = false;
export default Brush4Bold;