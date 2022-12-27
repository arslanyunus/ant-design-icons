// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Discover1LinearSvg from '@ant-design/icons-svg/lib/asn/Discover1Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Discover1LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Discover1Linear: Discover1LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Discover1LinearSvg}></AntdIcon>;
};

Discover1Linear.displayName = 'Discover1Linear';
Discover1Linear.inheritAttrs = false;
export default Discover1Linear;