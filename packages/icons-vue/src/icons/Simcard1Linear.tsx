// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Simcard1LinearSvg from '@ant-design/icons-svg/lib/asn/Simcard1Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Simcard1LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Simcard1Linear: Simcard1LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Simcard1LinearSvg}></AntdIcon>;
};

Simcard1Linear.displayName = 'Simcard1Linear';
Simcard1Linear.inheritAttrs = false;
export default Simcard1Linear;