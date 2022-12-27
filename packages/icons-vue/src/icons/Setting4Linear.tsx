// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Setting4LinearSvg from '@ant-design/icons-svg/lib/asn/Setting4Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Setting4LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Setting4Linear: Setting4LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Setting4LinearSvg}></AntdIcon>;
};

Setting4Linear.displayName = 'Setting4Linear';
Setting4Linear.inheritAttrs = false;
export default Setting4Linear;