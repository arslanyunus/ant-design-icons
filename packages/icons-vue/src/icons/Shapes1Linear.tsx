// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Shapes1LinearSvg from '@ant-design/icons-svg/lib/asn/Shapes1Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Shapes1LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Shapes1Linear: Shapes1LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Shapes1LinearSvg}></AntdIcon>;
};

Shapes1Linear.displayName = 'Shapes1Linear';
Shapes1Linear.inheritAttrs = false;
export default Shapes1Linear;