// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Setting5BoldSvg from '@ant-design/icons-svg/lib/asn/Setting5Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Setting5BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Setting5Bold: Setting5BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Setting5BoldSvg}></AntdIcon>;
};

Setting5Bold.displayName = 'Setting5Bold';
Setting5Bold.inheritAttrs = false;
export default Setting5Bold;