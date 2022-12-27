// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Setting5LinearSvg from '@ant-design/icons-svg/lib/asn/Setting5Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Setting5LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Setting5Linear: Setting5LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Setting5LinearSvg}></AntdIcon>;
};

Setting5Linear.displayName = 'Setting5Linear';
Setting5Linear.inheritAttrs = false;
export default Setting5Linear;