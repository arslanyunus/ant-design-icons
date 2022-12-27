// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Brush1BoldSvg from '@ant-design/icons-svg/lib/asn/Brush1Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Brush1BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Brush1Bold: Brush1BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Brush1BoldSvg}></AntdIcon>;
};

Brush1Bold.displayName = 'Brush1Bold';
Brush1Bold.inheritAttrs = false;
export default Brush1Bold;