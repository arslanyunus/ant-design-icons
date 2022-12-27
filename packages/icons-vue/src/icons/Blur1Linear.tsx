// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Blur1LinearSvg from '@ant-design/icons-svg/lib/asn/Blur1Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Blur1LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Blur1Linear: Blur1LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Blur1LinearSvg}></AntdIcon>;
};

Blur1Linear.displayName = 'Blur1Linear';
Blur1Linear.inheritAttrs = false;
export default Blur1Linear;