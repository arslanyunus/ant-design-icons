// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Brush1LinearSvg from '@ant-design/icons-svg/lib/asn/Brush1Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Brush1LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Brush1Linear: Brush1LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Brush1LinearSvg}></AntdIcon>;
};

Brush1Linear.displayName = 'Brush1Linear';
Brush1Linear.inheritAttrs = false;
export default Brush1Linear;