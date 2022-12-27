// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Bezier1LinearSvg from '@ant-design/icons-svg/lib/asn/Bezier1Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Bezier1LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Bezier1Linear: Bezier1LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Bezier1LinearSvg}></AntdIcon>;
};

Bezier1Linear.displayName = 'Bezier1Linear';
Bezier1Linear.inheritAttrs = false;
export default Bezier1Linear;