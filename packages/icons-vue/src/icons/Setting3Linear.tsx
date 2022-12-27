// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Setting3LinearSvg from '@ant-design/icons-svg/lib/asn/Setting3Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Setting3LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Setting3Linear: Setting3LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Setting3LinearSvg}></AntdIcon>;
};

Setting3Linear.displayName = 'Setting3Linear';
Setting3Linear.inheritAttrs = false;
export default Setting3Linear;