// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Component1LinearSvg from '@ant-design/icons-svg/lib/asn/Component1Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Component1LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Component1Linear: Component1LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Component1LinearSvg}></AntdIcon>;
};

Component1Linear.displayName = 'Component1Linear';
Component1Linear.inheritAttrs = false;
export default Component1Linear;