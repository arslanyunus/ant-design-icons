// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Shapes1BoldSvg from '@ant-design/icons-svg/lib/asn/Shapes1Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Shapes1BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Shapes1Bold: Shapes1BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Shapes1BoldSvg}></AntdIcon>;
};

Shapes1Bold.displayName = 'Shapes1Bold';
Shapes1Bold.inheritAttrs = false;
export default Shapes1Bold;